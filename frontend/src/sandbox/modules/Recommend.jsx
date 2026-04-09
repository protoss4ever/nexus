import { useState, useCallback } from 'react';
import ModuleShell from './ModuleShell';
import { getCategoryData } from '../modules.js';

// ─── WHY BLOCK ───────────────────────────────────────────────────────────────
function WhyBlock({ selected, neighbors, level }) {
  const [open, setOpen] = useState(false);
  if (!selected || neighbors.length === 0) return null;
  const label = level === 'real' ? 'Why did those get recommended?' : 'Why did it connect those?';
  return (
    <div className="why-block">
      <button className="why-toggle" onClick={() => setOpen(o => !o)}>
        <span>{label}</span>
        <span className={`why-arrow${open ? ' open' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="why-content open">
          {neighbors.map(({ name, reason }) => (
            <p key={name} style={{ marginBottom:'0.5rem' }}>
              <strong>{name}</strong> — {reason}.
            </p>
          ))}
          {level === 'real' && (
            <p style={{ marginTop:'0.75rem', color:'var(--ink-mute)', fontSize:'0.78rem' }}>
              The system never read a description of these items. It only measured what tends to
              appear together. The reasons above are human interpretations added afterward.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── NODE GRID ────────────────────────────────────────────────────────────────
function NodeGrid({ items, neighborsMap, selected, threshold, onSelect }) {
  return (
    <div className="rec-nodes">
      {items.map(item => {
        const neighborNames = selected ? Object.keys(neighborsMap[selected] || {}).slice(0, threshold) : [];
        let cls = 'rec-node';
        if (selected === item) cls += ' selected';
        else if (neighborNames.includes(item)) cls += ' neighbor';
        else if (selected) cls += ' dim';
        return (
          <button key={item} className={cls} onClick={() => onSelect(item)}>{item}</button>
        );
      })}
    </div>
  );
}

// ─── PLAY ─────────────────────────────────────────────────────────────────────
function Play({ level, items, neighborsMap, hint, onInteracted }) {
  const [selected, setSelected] = useState(null);
  const THRESHOLD = 2;
  const handleSelect = useCallback(item => { setSelected(item); onInteracted(item); }, [onInteracted]);
  const neighborObjs = selected
    ? Object.entries(neighborsMap[selected] || {}).slice(0, THRESHOLD).map(([name, reason]) => ({ name, reason }))
    : [];
  return (
    <>
      <div className="play-canvas"><NodeGrid items={items} neighborsMap={neighborsMap} selected={selected} threshold={THRESHOLD} onSelect={handleSelect} /></div>
      <p className="play-hint">{hint}</p>
      {selected && <WhyBlock selected={selected} neighbors={neighborObjs} level={level} />}
    </>
  );
}

// ─── SEE ──────────────────────────────────────────────────────────────────────
function See({ level }) {
  const texts = {
    starter: { body: "The system isn't matching by category or label — it's measuring latent similarity across many dimensions at once. Things that look different can share deep structural qualities. That's why a recommendation can feel both surprising and right.", diagram: ['Two different items', '⟷', 'Shared hidden qualities', '⟷', 'Recommendation'] },
    deeper:  { body: "At this level, the items cross types entirely. The system doesn't care. It's measuring qualities that exist across all of them — how they engage with complexity, whether they reward patience, what kind of attention they require. Category is surface. Latent quality is what gets measured.", diagram: ['Item from domain A', '⟷', 'Shared latent quality', '⟷', 'Item from domain B'] },
    real:    { body: "This is how most large recommendation systems actually work. The model has never read a description of anything in the list. It only knows what tends to appear together in usage data — and it uses that co-occurrence as a proxy for similarity.", diagram: ['User engages with A', '→', 'Others who did also did B', '→', 'Recommend B'] },
  };
  const t = texts[level];
  return (
    <div className="see-card">
      <p className="see-explanation">{t.body}</p>
      <div className="see-diagram">
        {t.diagram.map((d, i) => i % 2 === 0
          ? <div key={i} className="diagram-node" style={i === 2 ? { background:'rgba(196,124,43,0.1)', borderColor:'var(--amber)' } : {}}>{d}</div>
          : <div key={i} className="diagram-arrow">{d}</div>
        )}
      </div>
      {level === 'real' && <p style={{ fontSize:'0.8rem', color:'var(--ink-mute)', marginTop:'1rem' }}>The cluster names are human interpretations added after the fact. The system never made those inferences — it just counted.</p>}
    </div>
  );
}

// ─── BUILD ────────────────────────────────────────────────────────────────────
function Build({ level, items, neighborsMap, onOpenLab }) {
  const [threshold, setThreshold] = useState(2);
  const [selected, setSelected] = useState(null);
  const notes = {
    starter: 'Tightening the threshold changes which connections survive, not just how many.',
    deeper:  'At loose thresholds, items from completely different domains start connecting. At strict, only the strongest cross-type links remain.',
    real:    'Lowering the threshold surfaces weaker signals — things that co-occur less often. Sometimes those are the most interesting finds.',
  };
  return (
    <div className="build-card">
      <div className="build-label">Connection threshold — how many dimensions must align?</div>
      <input type="range" className="build-slider" min={1} max={4} value={threshold}
        onChange={e => { setThreshold(parseInt(e.target.value)); setSelected(null); }} />
      <div className="build-slider-labels"><span>Loose (more connections)</span><span>Strict (fewer, stronger)</span></div>
      <NodeGrid items={items} neighborsMap={neighborsMap} selected={selected} threshold={threshold} onSelect={setSelected} />
      <p style={{ fontSize:'0.8rem', color:'var(--ink-mute)', margin:'1rem 0' }}>{notes[level]}</p>
      <div className="bridge-invite">
        <span className="bridge-text">Ready to try this on your own data?</span>
        <button className="bridge-btn" onClick={() => onOpenLab('recommend')}>Open in Lab →</button>
      </div>
    </div>
  );
}

// ─── EXPLORE ──────────────────────────────────────────────────────────────────
function Explore({ level }) {
  const content = {
    starter: { q: 'A harder question.', body: "What counts as similar? Two people who both enjoy hiking might have nothing else in common. The system has to choose which dimensions to measure — and that choice shapes everything that gets recommended.", world: 'Music and video streaming, research paper discovery, job matching, product recommendations.' },
    deeper:  { q: 'A harder question.', body: "When items cross domains, the latent qualities doing the connecting become invisible. The system can surface connections that feel genuinely insightful, or connections that are statistically real but meaningless. There's no easy way to tell the difference from the outside.", world: 'Cross-category recommendations, research discovery across disciplines, "you might also like" across media types.' },
    real:    { q: 'A harder question.', body: "Collaborative filtering — recommending based on what others did, not on what items are — is one of the most effective techniques in production systems. It also has a well-known failure mode: it can only recommend what already exists in the data. New items get recommended to nobody until someone takes a chance on them first.", world: 'E-commerce, streaming platforms, app stores. Anywhere a system recommends based on behavior rather than content.' },
  };
  const c = content[level];
  return (
    <div className="see-card">
      <p className="see-explanation" style={{ fontWeight:500, color:'var(--ink)', marginBottom:'0.5rem' }}>{c.q}</p>
      <p className="see-explanation">{c.body}</p>
      <p style={{ fontSize:'0.8rem', color:'var(--ink-mute)', marginTop:'1.25rem' }}><strong>Where this appears:</strong> {c.world}</p>
    </div>
  );
}

// ─── RECOMMEND MODULE ─────────────────────────────────────────────────────────
export default function Recommend({ onOpenLab, onLogRecent, onSaveItem }) {
  const [category, setCategory] = useState('human-behavior');
  const [level, setLevel]       = useState('starter');
  const [nudge, setNudge]       = useState(null);
  const [nudgeDismissed, setNudgeDismissed] = useState({ starter: false, deeper: false });

  const catData = getCategoryData(category);
  const DATA = {
    starter: { items: catData.REC_ITEMS,       neighbors: catData.REC_NEIGHBORS },
    deeper:  { items: catData.REC_DEEPER_ITEMS, neighbors: catData.REC_DEEPER_NEIGHBORS },
    real:    { items: catData.REC_REAL_ITEMS,   neighbors: catData.REC_REAL_NEIGHBORS },
  };
  const DESCS = {
    starter: 'How AI finds connections across things that seem unrelated on the surface.',
    deeper:  'How similarity crosses domain boundaries — and why that can feel uncanny.',
    real:    'How systems recommend without understanding what anything is.',
  };
  const HINTS = {
    starter: "These are items from this category. Click one — see what it connects to.",
    deeper:  "These come from the same domain but different types. Click one.",
    real:    "The system has never read a description of any of these items.",
  };

  const { items, neighbors } = DATA[level];

  const handleInteracted = useCallback((label) => {
    if (onLogRecent) onLogRecent(label || 'Recommend', level);
    if (nudgeDismissed[level]) return;
    const nextIdx = ['starter','deeper','real'].indexOf(level) + 1;
    if (nextIdx < 3) setNudge(['starter','deeper','real'][nextIdx]);
  }, [level, nudgeDismissed, onLogRecent]);

  const handleLevelChange = useCallback(l => { setLevel(l); setNudge(null); }, []);
  const handleCategoryChange = useCallback(c => { setCategory(c); setNudge(null); }, []);
  const handleDismiss = useCallback(() => {
    setNudgeDismissed(d => ({ ...d, [level]: true })); setNudge(null);
  }, [level]);

  return (
    <ModuleShell
      title="Recommend"
      description={DESCS[level]}
      category={category}
      onCategoryChange={handleCategoryChange}
      level={level}
      onLevelChange={handleLevelChange}
      nudgeLevel={nudge}
      onDismissNudge={handleDismiss}
      play={<Play key={`${category}-${level}`} level={level} items={items} neighborsMap={neighbors} hint={HINTS[level]} onInteracted={handleInteracted} />}
      see={<See key={`see-${level}`} level={level} />}
      build={<Build key={`build-${category}-${level}`} level={level} items={items} neighborsMap={neighbors} onOpenLab={onOpenLab} />}
      explore={<Explore level={level} />}
    />
  );
}
