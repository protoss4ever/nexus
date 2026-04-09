import { useState, useCallback } from 'react';
import { formatTimestamp } from './useMemory.js';

const LEVEL_LABELS = { starter: 'Starter', deeper: 'Deeper', real: 'Real' };
const MODULE_LABELS = { recommend: 'Recommend', group: 'Group', predict: 'Predict' };

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
        maxLength={140}
      />
      <button className="mem-note-save" onClick={() => { onSave(draft); setEditing(false); }}>Save</button>
    </div>
  );
}

// ─── RECENT ITEM ──────────────────────────────────────────────────────────────
function RecentItem({ item, onSave, alreadySaved }) {
  return (
    <div className="mem-item">
      <div className="mem-item-main">
        <span className="mem-item-label">{item.label}</span>
        <div className="mem-item-meta">
          <span className="mem-tag">{MODULE_LABELS[item.module]}</span>
          <span className="mem-tag">{LEVEL_LABELS[item.level]}</span>
          <span className="mem-timestamp">{formatTimestamp(item.timestamp)}</span>
        </div>
      </div>
      <button
        className={`mem-save-btn${alreadySaved ? ' saved' : ''}`}
        onClick={() => !alreadySaved && onSave(item)}
        title={alreadySaved ? 'Already saved' : 'Save this'}
      >
        {alreadySaved ? '✓' : '↓'}
      </button>
    </div>
  );
}

// ─── SAVED ITEM ───────────────────────────────────────────────────────────────
function SavedItem({ item, onUpdateNote, onRemove }) {
  return (
    <div className="mem-item mem-item--saved">
      <div className="mem-item-main" style={{ flex: 1 }}>
        <span className="mem-item-label">{item.label}</span>
        <div className="mem-item-meta">
          <span className="mem-tag">{MODULE_LABELS[item.module]}</span>
          <span className="mem-tag">{LEVEL_LABELS[item.level]}</span>
          <span className="mem-timestamp">{formatTimestamp(item.timestamp)}</span>
        </div>
        <NoteEditor value={item.note} onSave={note => onUpdateNote(item.id, note)} />
      </div>
      <button className="mem-remove-btn" onClick={() => onRemove(item.id)} title="Remove">✕</button>
    </div>
  );
}

// ─── SANDBOX MEMORY PANEL ─────────────────────────────────────────────────────
export default function SandboxMemoryPanel({ open, onClose, memory }) {
  const { recent, saved, saveItem, updateNote, removeSaved, clearRecent } = memory;
  const [tab, setTab] = useState('recent');

  const savedIds = new Set(saved.map(s => `${s.module}:${s.level}:${s.label}`));
  const isAlreadySaved = item => savedIds.has(`${item.module}:${item.level}:${item.label}`);

  return (
    <>
      {/* Backdrop */}
      {open && <div className="mem-backdrop" onClick={onClose} />}

      {/* Panel */}
      <div className={`mem-panel mem-panel--sandbox${open ? ' open' : ''}`}>
        <div className="mem-panel-header">
          <span className="mem-panel-title">Explorations</span>
          <button className="mem-panel-close" onClick={onClose}>✕</button>
        </div>

        <div className="mem-tabs">
          <button className={`mem-tab${tab === 'recent' ? ' active' : ''}`} onClick={() => setTab('recent')}>
            Recent {recent.length > 0 && <span className="mem-count">{recent.length}</span>}
          </button>
          <button className={`mem-tab${tab === 'saved' ? ' active' : ''}`} onClick={() => setTab('saved')}>
            Saved {saved.length > 0 && <span className="mem-count">{saved.length}</span>}
          </button>
        </div>

        <div className="mem-panel-body">
          {tab === 'recent' && (
            <>
              {recent.length === 0
                ? <p className="mem-empty">Your recent explorations will appear here as you move through the Sandbox.</p>
                : recent.map(item => (
                    <RecentItem
                      key={item.id}
                      item={item}
                      onSave={saveItem}
                      alreadySaved={isAlreadySaved(item)}
                    />
                  ))
              }
              {recent.length > 0 && (
                <button className="mem-clear-btn" onClick={clearRecent}>Clear recent</button>
              )}
            </>
          )}

          {tab === 'saved' && (
            <>
              {saved.length === 0
                ? <p className="mem-empty">Save interesting paths from Recent, or click the bookmark icon while exploring.</p>
                : saved.map(item => (
                    <SavedItem
                      key={item.id}
                      item={item}
                      onUpdateNote={updateNote}
                      onRemove={removeSaved}
                    />
                  ))
              }
            </>
          )}
        </div>
      </div>
    </>
  );
}
