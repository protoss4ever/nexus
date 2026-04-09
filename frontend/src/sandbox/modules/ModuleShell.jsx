import { useState, useCallback } from 'react';
import { LEVELS, LEVEL_LABELS, READY_CATEGORIES } from '../modules.js';

/**
 * ModuleShell — owns category selector, level selector, and tab navigation.
 * Category + level both apply across all tabs.
 * Nudge appears after meaningful interaction (set by parent).
 */
export default function ModuleShell({
  title, description,
  category, onCategoryChange,
  level, onLevelChange,
  nudgeLevel, onDismissNudge,
  play, see, build, explore
}) {
  const [activeTab, setActiveTab] = useState('play');

  const handleLevelChange = useCallback(l => {
    onLevelChange(l);
    setActiveTab('play');
  }, [onLevelChange]);

  const handleCategoryChange = useCallback(e => {
    onCategoryChange(e.target.value);
    setActiveTab('play');
  }, [onCategoryChange]);

  const TABS = [
    { id: 'play',    label: 'Play' },
    { id: 'see',     label: 'See' },
    { id: 'build',   label: 'Build' },
    ...(explore ? [{ id: 'explore', label: 'Explore' }] : []),
  ];

  return (
    <div className="module-shell">
      <div className="concept-title">{title}</div>
      <div className="concept-desc">{description}</div>

      {/* ── Category selector ── */}
      <div className="category-selector">
        <label className="category-label" htmlFor="category-select">Category</label>
        <select
          id="category-select"
          className="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          {READY_CATEGORIES.map(c => (
            <option key={c.id} value={c.id}>{c.label}</option>
          ))}
        </select>
      </div>

      {/* ── Level selector ── */}
      <div className="depth-selector">
        {LEVELS.map(l => (
          <button
            key={l}
            className={`depth-btn${level === l ? ' active' : ''}`}
            onClick={() => handleLevelChange(l)}
          >
            {LEVEL_LABELS[l]}
          </button>
        ))}
      </div>

      {/* ── Progression nudge ── */}
      {nudgeLevel && (
        <div className="depth-nudge">
          <span>Try the <strong>{LEVEL_LABELS[nudgeLevel]}</strong> level →</span>
          <div style={{ display:'flex', gap:'0.5rem', alignItems:'center' }}>
            <button className="depth-nudge-accept" onClick={() => handleLevelChange(nudgeLevel)}>Try it</button>
            <button className="depth-nudge-dismiss" onClick={onDismissNudge}>✕</button>
          </div>
        </div>
      )}

      {/* ── Tab bar ── */}
      <div className="level-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`level-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Panel ── */}
      <div className="level-panel active">
        {{ play, see, build, explore }[activeTab]}
      </div>
    </div>
  );
}
