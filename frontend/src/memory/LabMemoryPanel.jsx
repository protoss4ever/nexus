import { useState, useCallback } from 'react';
import { formatTimestamp } from './useMemory.js';

const TASK_LABELS = { recommend: 'Recommend', group: 'Group', predict: 'Predict' };

// ─── NOTE EDITOR ──────────────────────────────────────────────────────────────
function NoteEditor({ value, onSave }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || '');

  if (!editing) return (
    <div className="mem-note-row" onClick={() => setEditing(true)}>
      {value
        ? <span className="mem-note-text">{value}</span>
        : <span className="mem-note-add">+ add note</span>}
    </div>
  );

  return (
    <div className="mem-note-edit">
      <input
        autoFocus
        className="mem-note-input"
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') { onSave(draft); setEditing(false); }
          if (e.key === 'Escape') setEditing(false);
        }}
        placeholder="Add a note…"
        maxLength={200}
      />
      <button className="mem-note-save" onClick={() => { onSave(draft); setEditing(false); }}>Save</button>
    </div>
  );
}

// ─── EXPERIMENT ITEM ──────────────────────────────────────────────────────────
function ExperimentItem({ exp, onUpdateNote, onRemove, onRestore }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mem-item mem-item--experiment">
      <div className="mem-item-main" style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="mem-item-label">{exp.name || 'Untitled experiment'}</span>
          <button
            className="mem-expand-btn"
            onClick={() => setExpanded(e => !e)}
            title={expanded ? 'Collapse' : 'Expand'}
          >
            {expanded ? '▲' : '▼'}
          </button>
        </div>

        <div className="mem-item-meta">
          <span className="mem-tag">{TASK_LABELS[exp.task] || exp.task}</span>
          {exp.model && <span className="mem-tag mem-tag--model">{exp.model.split(':')[0]}</span>}
          <span className="mem-timestamp">{formatTimestamp(exp.timestamp)}</span>
        </div>

        <NoteEditor value={exp.note} onSave={note => onUpdateNote(exp.id, note)} />

        {expanded && (
          <div className="mem-exp-detail">
            {exp.data && (
              <div className="mem-exp-section">
                <div className="mem-exp-label">Data</div>
                <pre className="mem-exp-pre">{exp.data.slice(0, 400)}{exp.data.length > 400 ? '…' : ''}</pre>
              </div>
            )}
            {exp.result && (
              <div className="mem-exp-section">
                <div className="mem-exp-label">Result</div>
                <pre className="mem-exp-pre">{exp.result.slice(0, 600)}{exp.result.length > 600 ? '…' : ''}</pre>
              </div>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
              <button className="mem-restore-btn" onClick={() => onRestore(exp)}>
                Restore to Lab
              </button>
            </div>
          </div>
        )}
      </div>

      <button className="mem-remove-btn" onClick={() => onRemove(exp.id)} title="Remove">✕</button>
    </div>
  );
}

// ─── SAVE EXPERIMENT FORM ─────────────────────────────────────────────────────
function SaveForm({ onSave, onCancel, taskDefault }) {
  const [name, setName] = useState('');

  return (
    <div className="mem-save-form">
      <div className="mem-save-form-label">Name this experiment</div>
      <input
        autoFocus
        className="mem-note-input"
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && name.trim()) onSave(name.trim());
          if (e.key === 'Escape') onCancel();
        }}
        placeholder={`${TASK_LABELS[taskDefault] || 'Experiment'} — ${new Date().toLocaleDateString()}`}
        maxLength={60}
      />
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <button
          className="mem-note-save"
          onClick={() => onSave(name.trim() || `${TASK_LABELS[taskDefault] || 'Experiment'} — ${new Date().toLocaleDateString()}`)}
        >
          Save
        </button>
        <button className="mem-cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

// ─── LAB MEMORY PANEL ─────────────────────────────────────────────────────────
export default function LabMemoryPanel({
  open, onClose,
  memory,
  // Current run state — passed in so Save Experiment has something to save
  currentRun,  // { task, model, data, prompt, result } | null
  onRestore,   // fn(exp) — restore an experiment's data/prompt/task to Lab
}) {
  const { experiments, saveExperiment, updateNote, removeExperiment, clearAll } = memory;
  const [saving, setSaving] = useState(false);

  const handleSave = useCallback((name) => {
    if (!currentRun?.result) return;
    saveExperiment({ name, ...currentRun });
    setSaving(false);
  }, [currentRun, saveExperiment]);

  const canSave = currentRun?.result && !saving;

  return (
    <>
      {open && <div className="mem-backdrop" onClick={onClose} />}

      <div className={`mem-panel mem-panel--lab${open ? ' open' : ''}`}>
        <div className="mem-panel-header">
          <span className="mem-panel-title">Experiments</span>
          <button className="mem-panel-close" onClick={onClose}>✕</button>
        </div>

        {/* Save current run */}
        <div className="mem-save-zone">
          {saving
            ? <SaveForm
                onSave={handleSave}
                onCancel={() => setSaving(false)}
                taskDefault={currentRun?.task}
              />
            : <button
                className={`mem-save-run-btn${canSave ? '' : ' disabled'}`}
                onClick={() => canSave && setSaving(true)}
                disabled={!canSave}
                title={!currentRun?.result ? 'Run an experiment first' : 'Save this experiment'}
              >
                {currentRun?.result ? '↓ Save this experiment' : 'Run an experiment to save it'}
              </button>
          }
        </div>

        <div className="mem-panel-body">
          {experiments.length === 0
            ? <p className="mem-empty">Your saved experiments will appear here. Run something in the Lab, then save it.</p>
            : experiments.map(exp => (
                <ExperimentItem
                  key={exp.id}
                  exp={exp}
                  onUpdateNote={updateNote}
                  onRemove={removeExperiment}
                  onRestore={e => { onRestore(e); onClose(); }}
                />
              ))
          }
          {experiments.length > 0 && (
            <button className="mem-clear-btn" onClick={clearAll}>Clear all experiments</button>
          )}
        </div>
      </div>
    </>
  );
}
