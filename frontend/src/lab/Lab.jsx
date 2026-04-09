import { useState, useEffect, useRef, useCallback } from 'react';
import LabMemoryPanel from '../memory/LabMemoryPanel';
import { PinButton } from '../workspace/WorkspaceView.jsx';
import { makeResultPin } from '../workspace/useWorkspace.js';
import { useLabMemory } from '../memory/useMemory.js';

const BACKEND = 'http://localhost:8000';

// ─── FILE PARSING ─────────────────────────────────────────────────────────────
function parseTxt(text) { return text.trim(); }

function parseCsv(text) {
  const lines = text.trim().split('\n').filter(l => l.trim());
  if (lines.length === 0) return text;
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const hasHeaders = isNaN(Number(headers[0]));
  if (!hasHeaders || lines.length === 1)
    return lines.map(l => l.split(',').map(v => v.trim().replace(/^"|"$/g, '')).join(', ')).join('\n');
  return lines.slice(1).map(line => {
    const vals = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
    return headers.map((h, i) => `${h}: ${vals[i] ?? ''}`).join(', ');
  }).join('\n');
}

function parseJson(text) {
  try { return JSON.stringify(JSON.parse(text), null, 2); }
  catch { return text; }
}

function parseFile(filename, text) {
  const ext = filename.split('.').pop().toLowerCase();
  if (ext === 'csv')  return parseCsv(text);
  if (ext === 'json') return parseJson(text);
  return parseTxt(text);
}

// ─── DEFAULTS ────────────────────────────────────────────────────────────────
const DEFAULTS = {
  recommend: {
    prompt: `You are a recommendation assistant. The user will give you a list of items. Recommend the 3 items from the list most similar to the first item. Return only a numbered list of recommendations with one sentence explaining each connection. Be specific and concise.`,
    data: `The Midnight Library by Matt Haig\nRecursion by Blake Crouch\nDark Matter by Blake Crouch\nThe Alchemist by Paulo Coelho\nProject Hail Mary by Andy Weir\nNorwegian Wood by Haruki Murakami\nFlowers for Algernon by Daniel Keyes\nThe Hitchhiker's Guide to the Galaxy by Douglas Adams`,
  },
  group: {
    prompt: `You are a grouping assistant. The user will give you a list of items. Organize them into 3 natural groups based on their similarities. Return the groups in this format:\nGroup 1 — [Name]: item, item, item\nGroup 2 — [Name]: item, item, item\nGroup 3 — [Name]: item, item, item\nName each group with a short descriptive label.`,
    data: `wakes up without an alarm\nchecks phone before getting up\nexercises in the morning\nmakes a to-do list daily\neats the same breakfast every day\nworks in 90-minute blocks\nresponds to messages in batches\nscrolls social media at night\nsleeps at inconsistent times\njournals before bed\nleaves tasks half-finished\nplans the week on Sunday`,
  },
  predict: {
    prompt: `You are a pattern recognition assistant. The user will give you a sequence of numbers or items. Identify the pattern and predict the next 3 values. Show your reasoning in one sentence, then give only the 3 predicted values on a new line.`,
    data: `Week 1: 42 active users\nWeek 2: 38 active users\nWeek 3: 51 active users\nWeek 4: 47 active users\nWeek 5: 55 active users\nWeek 6: 60 active users\nWeek 7: 58 active users`,
  },
};

const TASKS = ['recommend', 'group', 'predict'];

export default function Lab({ onNavigate, initialTask, workspace, onOpenWorkspace }) {
  const [task, setTask]         = useState(initialTask || 'recommend');
  const [models, setModels]     = useState([]);
  const [model, setModel]       = useState('');
  const [data, setData]         = useState(DEFAULTS[task].data);
  const [prompt, setPrompt]     = useState(DEFAULTS[task].prompt);
  const [result, setResult]     = useState(null);
  const [running, setRunning]   = useState(false);
  const [error, setError]       = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [memOpen, setMemOpen]   = useState(false);
  const fileInputRef = useRef(null);

  const memory = useLabMemory();

  // Current run state passed to memory panel
  const currentRun = result ? { task, model, data, prompt, result } : null;

  useEffect(() => {
    fetch(`${BACKEND}/models`)
      .then(r => r.json())
      .then(d => { setModels(d.models || []); if (d.models?.length) setModel(d.models[0]); })
      .catch(() => setModels([]));
  }, []);

  useEffect(() => {
    setData(DEFAULTS[task].data);
    setPrompt(DEFAULTS[task].prompt);
    setResult(null);
    setError(null);
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [task]);

  useEffect(() => {
    if (initialTask && TASKS.includes(initialTask)) setTask(initialTask);
  }, [initialTask]);

  const handleFileUpload = useCallback(e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['txt','csv','json'].includes(ext)) {
      setError(`Unsupported file type ".${ext}". Upload a .txt, .csv, or .json file.`);
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = ev => {
      setData(parseFile(file.name, ev.target.result));
      setUploadedFile(file.name);
      setResult(null);
      setError(null);
    };
    reader.onerror = () => setError('Could not read file.');
    reader.readAsText(file);
  }, []);

  async function run() {
    if (running || !model || !data.trim()) return;
    setRunning(true); setResult(null); setError(null);
    try {
      const res = await fetch(`${BACKEND}/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, data, model, prompt }),
      });
      const json = await res.json();
      if (json.error) setError(json.error);
      else setResult(json.result || '(no output)');
    } catch {
      setError('Could not reach backend. Is the Nexus backend running on port 8000?');
    }
    setRunning(false);
  }

  // Restore a saved experiment into the Lab fields
  const handleRestore = useCallback(exp => {
    if (TASKS.includes(exp.task)) setTask(exp.task);
    if (exp.data)   setData(exp.data);
    if (exp.prompt) setPrompt(exp.prompt);
    setResult(null);
    setError(null);
    setUploadedFile(null);
  }, []);

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh', background:'var(--dark-bg)', color:'var(--dark-text)' }}>
      <nav className="top-nav nav-lab">
        <div className="nav-left">
          <button className="nav-home" style={{ color:'var(--dark-text)' }} onClick={() => onNavigate('landing')}>Nexus</button>
          <span className="nav-space">Lab</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
          <button
            className="mem-trigger mem-trigger--lab"
            onClick={() => setMemOpen(o => !o)}
            title="Experiments"
          >
            <span className="mem-trigger-icon">⟳</span>
            Experiments
            {memory.experiments.length > 0 && (
              <span className="mem-trigger-dot" />
            )}
          </button>
          <button
            className="ws-trigger"
            onClick={onOpenWorkspace}
            title="Workspace"
          >
            ⊞ Workspace
            {workspace && (workspace.resultPins.length + workspace.modulePins.length) > 0 && (
              <span className="ws-trigger-dot" />
            )}
          </button>
          <button className="nav-back" onClick={() => onNavigate('landing')}>← Home</button>
        </div>
      </nav>

      <div className="lab-body" style={{ flex:1 }}>
        {/* Config */}
        <div className="lab-config">
          <div>
            <div className="lab-section-label">Task</div>
            <div className="task-tabs">
              {TASKS.map(t => (
                <button key={t} id={`tab-${t}`}
                  className={`task-tab${task === t ? ' active' : ''}`}
                  onClick={() => setTask(t)}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="lab-section-label">Model</div>
            <select className="model-select" value={model} onChange={e => setModel(e.target.value)}>
              {models.length === 0
                ? <option value="">No models found — is Ollama running?</option>
                : models.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          <div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.6rem' }}>
              <div className="lab-section-label" style={{ margin:0 }}>Your data</div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                {uploadedFile && (
                  <span style={{ fontSize:'0.68rem', color:'var(--blue)', maxWidth:'120px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }} title={uploadedFile}>
                    {uploadedFile}
                  </span>
                )}
                <button className="upload-btn" onClick={() => fileInputRef.current?.click()} title="Upload .txt, .csv, or .json">
                  ↑ Upload file
                </button>
                <input ref={fileInputRef} type="file" accept=".txt,.csv,.json" onChange={handleFileUpload} style={{ display:'none' }} />
              </div>
            </div>
            <textarea className="data-textarea" value={data}
              onChange={e => { setData(e.target.value); setUploadedFile(null); }}
              placeholder="Paste your data here, or upload a .txt, .csv, or .json file"
            />
          </div>

          <div>
            <div className="lab-section-label">
              Prompt{' '}
              <span style={{ fontSize:'0.65rem', color:'var(--dark-mute)', fontWeight:'normal', textTransform:'none', letterSpacing:0 }}>(editable)</span>
            </div>
            <textarea className="prompt-textarea" value={prompt} onChange={e => setPrompt(e.target.value)} />
          </div>

          <button className="run-btn" onClick={run} disabled={running || !model}>
            {running
              ? <><span>Running</span><span className="loading-dots"><span/><span/><span/></span></>
              : 'Run'}
          </button>
        </div>

        {/* Output */}
        <div className="lab-output">
          <div className="output-label-row">
            <div className="lab-section-label" style={{ margin:0 }}>Result</div>
            <div style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
              {result && workspace && (
                <PinButton
                  pinned={workspace.isPinned(`result:${task}:${model}:`) }
                  onClick={() => workspace.pin(makeResultPin({ task, model, data, result }))}
                />
              )}
              {result && (
                <button className="mem-inline-save" onClick={() => setMemOpen(true)} title="Save this experiment">
                  ↓ Save experiment
                </button>
              )}
            </div>
          </div>
          <div className="output-area">
            {error
              ? <span style={{ color:'#e57373' }}>{error}</span>
              : result
              ? result
              : <div className="output-empty">Results will appear here after you run an experiment.</div>}
          </div>
        </div>
      </div>

      <div className="lab-footer">
        <span>Made by Josh Carter</span>
        <div style={{ display:'flex', gap:'1rem' }}>
          <span style={{ color:'var(--dark-mute)', fontSize:'0.72rem' }}>AI outputs may be inaccurate. For educational use only.</span>
          <button className="footer-link footer-dark" onClick={() => onNavigate('disclaimer')}>Disclaimer</button>
        </div>
      </div>

      <LabMemoryPanel
        open={memOpen}
        onClose={() => setMemOpen(false)}
        memory={memory}
        currentRun={currentRun}
        onRestore={handleRestore}
      />
    </div>
  );
}
