import { useState } from 'react';

const TASK_LABELS   = { recommend: 'Recommend', group: 'Group', predict: 'Predict' };
const LEVEL_LABELS  = { starter: 'Starter', deeper: 'Deeper', real: 'Real' };
const MODULE_LABELS = { recommend: 'Recommend', group: 'Group', predict: 'Predict' };

function formatTime(iso) {
  if (!iso) return '';
  const d = new Date(iso), now = new Date();
  const diff = now - d;
  if (diff < 60000)   return 'just now';
  if (diff < 3600000) return Math.floor(diff/60000) + 'm ago';
  if (diff < 86400000)return Math.floor(diff/3600000) + 'h ago';
  return d.toLocaleDateString(undefined, { month:'short', day:'numeric' });
}

// ─── PIN BUTTON ───────────────────────────────────────────────────────────────
export function PinButton({ pinned, onClick, style }) {
  return (
    <button
      className={`ws-pin-btn${pinned ? ' pinned' : ''}`}
      onClick={onClick}
      style={style}
      title={pinned ? 'Pinned' : 'Pin to workspace'}
    >
      {pinned ? 'pinned' : 'pin'}
    </button>
  );
}

// ─── COMPARE VIEW ─────────────────────────────────────────────────────────────
function CompareView({ pins }) {
  const [selA, setSelA] = useState(null);
  const [selB, setSelB] = useState(null);

  const pinA = pins.find(p => p.id === selA);
  const pinB = pins.find(p => p.id === selB);

  const FIELDS = [
    { key: 'task',           label: 'Task',   fmt: v => TASK_LABELS[v] || v },
    { key: 'model',          label: 'Model',  fmt: v => v || '—' },
    { key: 'input_preview',  label: 'Input',  fmt: v => v || '—' },
    { key: 'output_preview', label: 'Output', fmt: v => v || '—' },
  ];

  if (pins.length < 2) return (
    <p className="ws-empty" style={{ padding:'1rem 0' }}>Pin at least 2 Lab results to compare them.</p>
  );

  return (
    <div className="ws-compare">
      <div className="ws-compare-selectors">
        <select className="ws-compare-select" value={selA||''} onChange={e=>setSelA(e.target.value||null)}>
          <option value="">Select result A</option>
          {pins.map(p => <option key={p.id} value={p.id}>{TASK_LABELS[p.task]} · {formatTime(p.pinned_at)}</option>)}
        </select>
        <select className="ws-compare-select" value={selB||''} onChange={e=>setSelB(e.target.value||null)}>
          <option value="">Select result B</option>
          {pins.map(p => <option key={p.id} value={p.id}>{TASK_LABELS[p.task]} · {formatTime(p.pinned_at)}</option>)}
        </select>
      </div>

      {pinA && pinB && (
        <div className="ws-compare-grid">
          <div className="ws-compare-header"><span>Field</span><span>A</span><span>B</span></div>
          {FIELDS.map(f => {
            const vA = f.fmt(pinA[f.key]), vB = f.fmt(pinB[f.key]);
            const diff = vA !== vB;
            return (
              <div key={f.key} className={`ws-compare-row${diff ? ' differs' : ''}`}>
                <span className="ws-compare-field">{f.label}</span>
                <span className="ws-compare-val">{vA}</span>
                <span className="ws-compare-val">{vB}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── WORKSPACE VIEW ───────────────────────────────────────────────────────────
export default function WorkspaceView({ workspace, onClose }) {
  const { resultPins, modulePins, notes, unpin, updateNotes, clearAll } = workspace;
  const [tab, setTab] = useState('pins');
  const totalPins = resultPins.length + modulePins.length;

  return (
    <>
      <div className="ws-backdrop" onClick={onClose} />
      <div className="ws-panel open">
        <div className="ws-header">
          <span className="ws-title">Workspace</span>
          <button className="ws-close" onClick={onClose}>✕</button>
        </div>

        <div className="ws-tabs">
          <button className={`ws-tab${tab==='pins'?' active':''}`} onClick={()=>setTab('pins')}>
            Pins {totalPins > 0 && <span className="mem-count">{totalPins}</span>}
          </button>
          <button className={`ws-tab${tab==='compare'?' active':''}`} onClick={()=>setTab('compare')}>Compare</button>
          <button className={`ws-tab${tab==='notes'?' active':''}`} onClick={()=>setTab('notes')}>Notes</button>
        </div>

        <div className="ws-body">
          {tab === 'pins' && (
            <>
              {totalPins === 0
                ? <p className="ws-empty">No pins yet. Click <em>pin</em> on any Lab result or Sandbox module to save it here.</p>
                : <>
                    {resultPins.length > 0 && (
                      <>
                        <div className="ws-section-label">Lab Results</div>
                        {resultPins.map(p => (
                          <div key={p.id} className="ws-item">
                            <div className="ws-item-main">
                              <div className="ws-item-title">{TASK_LABELS[p.task] || p.task}</div>
                              <div className="ws-item-meta">
                                {p.model && <span className="mem-tag mem-tag--model">{p.model.split(':')[0]}</span>}
                                <span className="ws-time">{formatTime(p.pinned_at)}</span>
                              </div>
                              {p.output_preview && <div className="ws-item-preview">{p.output_preview}{p.output_preview.length >= 80 ? '…' : ''}</div>}
                            </div>
                            <button className="ws-unpin" onClick={()=>unpin(p.id)} title="Unpin">✕</button>
                          </div>
                        ))}
                      </>
                    )}
                    {modulePins.length > 0 && (
                      <>
                        <div className="ws-section-label" style={{ marginTop:'1rem' }}>Sandbox Modules</div>
                        {modulePins.map(p => (
                          <div key={p.id} className="ws-item">
                            <div className="ws-item-main">
                              <div className="ws-item-title">{MODULE_LABELS[p.module_id] || p.module_id}</div>
                              <div className="ws-item-meta">
                                <span className="mem-tag">{LEVEL_LABELS[p.level] || p.level}</span>
                                <span className="ws-time">{formatTime(p.pinned_at)}</span>
                              </div>
                            </div>
                            <button className="ws-unpin" onClick={()=>unpin(p.id)} title="Unpin">✕</button>
                          </div>
                        ))}
                      </>
                    )}
                    <button className="mem-clear-btn" onClick={clearAll}>Clear all pins</button>
                  </>
              }
            </>
          )}

          {tab === 'compare' && <CompareView pins={resultPins} />}

          {tab === 'notes' && (
            <div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
              <p style={{ fontSize:'0.75rem', color:'var(--dark-mute)', marginBottom:'0.5rem' }}>Saved automatically as you type.</p>
              <textarea
                className="ws-notes"
                value={notes}
                onChange={e => updateNotes(e.target.value)}
                placeholder="Use this space to track what you're learning, questions you want to explore, or anything else…"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
