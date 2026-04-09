import { useState, useEffect, useRef, useCallback } from 'react';
import ModuleShell from './ModuleShell';
import { getCategoryData, CLUSTER_COLORS } from '../modules.js';

function getLevelData(catData, level, groupMode) {
  if (level === 'starter') return { items: catData.GROUP_ITEMS,       names: catData.CLUSTER_NAMES_STARTER };
  if (level === 'deeper')  return { items: catData.GROUP_DEEPER_ITEMS, names: catData.CLUSTER_NAMES_DEEPER };
  return groupMode === 'topic'
    ? { items: catData.GROUP_REAL_ITEMS_TOPIC, names: catData.CLUSTER_NAMES_REAL_TOPIC }
    : { items: catData.GROUP_REAL_ITEMS_TONE,  names: catData.CLUSTER_NAMES_REAL_TONE };
}

// ─── GROUP CANVAS ─────────────────────────────────────────────────────────────
function GroupCanvas({ items, clusterNames, grouped, canvasId }) {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (!container || !items.length) return;
    container.innerHTML = '';
    const w = container.offsetWidth || 500, h = container.offsetHeight || 260;
    const count = Math.min(clusterNames.length, 4);
    const cx = Array.from({ length: count }, (_, i) => (w * (i + 1)) / (count + 1));
    const cy = h / 2;
    items.forEach((item, idx) => {
      const dot = document.createElement('div');
      dot.className = 'group-dot';
      dot.textContent = item.label.slice(0, 6);
      dot.title = item.label;
      dot.style.cssText = `position:absolute;width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.48rem;font-weight:500;color:#fff;text-align:center;line-height:1.1;border:2px solid rgba(255,255,255,0.3);transition:all 0.6s cubic-bezier(0.34,1.56,0.64,1);background:${CLUSTER_COLORS[item.cat % count]};`;
      dot.style.left = (20 + Math.random() * (w - 80)) + 'px';
      dot.style.top  = (20 + Math.random() * (h - 60)) + 'px';
      container.appendChild(dot);
      if (grouped) {
        const cluster = item.cat % count;
        setTimeout(() => {
          const angle = (idx / Math.ceil(items.length / count)) * Math.PI * 2;
          dot.style.left = (cx[cluster] + Math.cos(angle) * 50 - 23) + 'px';
          dot.style.top  = (cy + Math.sin(angle) * 50 * 0.65 - 23) + 'px';
        }, 60 + idx * 30);
      }
    });
  }, [items, grouped, clusterNames]);
  return <div ref={ref} id={canvasId} style={{ width:'100%', height:'260px', position:'relative' }} />;
}

// ─── PLAY ─────────────────────────────────────────────────────────────────────
function Play({ level, catData, hint, whyText, onInteracted }) {
  const [grouped, setGrouped] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [groupMode, setGroupMode] = useState('topic');
  const { items, names } = getLevelData(catData, level, groupMode);

  return (
    <>
      {level === 'real' && (
        <div style={{ display:'flex', gap:'0.5rem', marginBottom:'0.75rem' }}>
          {['topic','tone'].map(m => (
            <button key={m} className={`depth-btn${groupMode===m?' active':''}`}
              onClick={() => { setGroupMode(m); setGrouped(false); setWhyOpen(false); }}
              style={{ fontSize:'0.75rem' }}>Group by {m}</button>
          ))}
        </div>
      )}
      <div className="play-canvas" style={{ flexDirection:'column', gap:'1rem' }}>
        <GroupCanvas items={items} clusterNames={names} grouped={grouped} canvasId={`gc-${level}-${groupMode}`} />
        {grouped && (
          <div className="cluster-legend">
            {names.map((name, i) => (
              <div key={name} className="cluster-chip">
                <div className="cluster-dot" style={{ background: CLUSTER_COLORS[i] }} />{name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ textAlign:'center' }}>
        <button className="play-btn" onClick={() => { const next = !grouped; setGrouped(next); setWhyOpen(false); if (next) onInteracted(); }}>
          {grouped ? 'Scatter' : 'Group them →'}
        </button>
      </div>
      <p className="play-hint">{hint}</p>
      {grouped && (
        <div className="why-block">
          <button className="why-toggle" onClick={() => setWhyOpen(o => !o)}>
            <span>Why did it group those together?</span>
            <span className={`why-arrow${whyOpen?' open':''}`}>▼</span>
          </button>
          {whyOpen && <div className="why-content open">{typeof whyText === 'function' ? whyText(groupMode) : whyText}</div>}
        </div>
      )}
    </>
  );
}

// ─── SEE ──────────────────────────────────────────────────────────────────────
function See({ level }) {
  const texts = {
    starter: { body: "The system doesn't know what type these items are — it only sees their measured properties. It finds which items are close to each other across all those dimensions at once. The labels come after the clusters are found, not before.", diagram: ['Mixed items', '→', 'Measure distance', '→', 'Emergent groups'] },
    deeper:  { body: "With ambiguous items, the system measures proximity in skills, context, and typical overlap. The result is that some items end up where you'd expect, and some migrate to surprising neighbors. The label is always a simplification of what's actually there.", diagram: ['Ambiguous item', '→', 'Closest cluster', '→', 'Label assigned after'] },
    real:    { body: "You just saw the same items produce completely different groupings. Neither is wrong. Both are accurate — they're just answering different questions. The algorithm doesn't decide what to look for. You do. The metric choice shapes everything the system finds.", diagram: ['Same items', '→', 'Different metric', '→', 'Different structure'] },
  };
  const t = texts[level];
  return (
    <div className="see-card">
      <p className="see-explanation">{t.body}</p>
      <div className="see-diagram">
        {t.diagram.map((d, i) => i % 2 === 0
          ? <div key={i} className="diagram-node" style={i===2?{background:'rgba(74,96,117,0.12)',borderColor:'var(--slate)'}:{borderStyle:i===4?'dashed':undefined}}>{d}</div>
          : <div key={i} className="diagram-arrow">→</div>
        )}
      </div>
      {level === 'real' && <p style={{ fontSize:'0.8rem', color:'var(--ink-mute)', marginTop:'1rem' }}>This is the most important idea in grouping: the choice of metric is always a human decision.</p>}
    </div>
  );
}

// ─── BUILD ────────────────────────────────────────────────────────────────────
function Build({ level, catData, onOpenLab }) {
  const [count, setCount] = useState(3);
  const [groupMode, setGroupMode] = useState('topic');
  const { items, names } = getLevelData(catData, level, groupMode);
  const notes = {
    starter: 'With fewer groups, the system merges items that differ somewhat. With more, it splits things that were close but not identical. Neither is wrong — it depends on the question.',
    deeper:  'Watch what happens to ambiguous items as you change the count. Some may migrate clusters. The system is sensitive to how many groups you ask for.',
    real:    'Try switching the grouping mode while holding the count fixed. The same items rearrange entirely. Structure is always a product of both the metric and the count.',
  };
  return (
    <div className="build-card">
      {level === 'real' && (
        <>
          <div className="build-label">Grouping mode</div>
          <div style={{ display:'flex', gap:'0.5rem', marginBottom:'1.25rem' }}>
            {['topic','tone'].map(m => (
              <button key={m} className={`depth-btn${groupMode===m?' active':''}`} onClick={() => setGroupMode(m)} style={{ fontSize:'0.75rem' }}>By {m}</button>
            ))}
          </div>
        </>
      )}
      <div className="build-label">Number of groups — watch what merges or splits</div>
      <input type="range" className="build-slider" min={2} max={4} value={count} onChange={e => setCount(parseInt(e.target.value))} />
      <div className="build-slider-labels"><span>2 groups</span><span>4 groups</span></div>
      <GroupCanvas items={items} clusterNames={names} grouped={true} canvasId={`gcb-${level}-${groupMode}-${count}`} />
      <p style={{ fontSize:'0.8rem', color:'var(--ink-mute)', margin:'0.75rem 0 1rem' }}>{notes[level]}</p>
      <div className="bridge-invite">
        <span className="bridge-text">Ready to try this on your own data?</span>
        <button className="bridge-btn" onClick={() => onOpenLab('group')}>Open in Lab →</button>
      </div>
    </div>
  );
}

// ─── EXPLORE ──────────────────────────────────────────────────────────────────
function Explore({ level }) {
  const content = {
    starter: { body: "Who decides how many groups there should be? The algorithm doesn't. Ask for 2 and you get broad categories. Ask for 8 and you get fine-grained distinctions that may or may not be meaningful. The number of clusters is always a human decision.", world: 'Customer segmentation, document organization, genomics, anomaly detection.' },
    deeper:  { body: "What do you do when an item genuinely belongs to two clusters? The algorithm forces a decision — it has to put each item in exactly one cluster. But the world doesn't always cooperate with that constraint. This is the hard assignment problem.", world: 'Talent matching, customer segmentation, content organization — anywhere systems must classify things that resist clean categories.' },
    real:    { body: "You chose the metric. But in a real production system, who decides whether to group by topic or tone? That decision is made by whoever designs the pipeline — often without users ever knowing it happened. The structure users see feels natural and given, even though it was a design choice.", world: 'News aggregation, content recommendation, social feed ranking — anywhere an algorithm organizes information for public consumption.' },
  };
  const c = content[level];
  return (
    <div className="see-card">
      <p className="see-explanation" style={{ fontWeight:500, color:'var(--ink)', marginBottom:'0.5rem' }}>A harder question.</p>
      <p className="see-explanation">{c.body}</p>
      <p style={{ fontSize:'0.8rem', color:'var(--ink-mute)', marginTop:'1.25rem' }}><strong>Where this appears:</strong> {c.world}</p>
    </div>
  );
}

// ─── GROUP MODULE ─────────────────────────────────────────────────────────────
export default function Group({ onOpenLab, onLogRecent, onSaveItem }) {
  const [category, setCategory] = useState('human-behavior');
  const [level, setLevel]       = useState('starter');
  const [nudge, setNudge]       = useState(null);
  const [nudgeDismissed, setNudgeDismissed] = useState({ starter: false, deeper: false });

  const catData = getCategoryData(category);

  const HINTS = {
    starter: 'These items have hidden structure. Before you click — what do you think belongs together?',
    deeper:  'These items have overlapping attributes. Some will end up where you expect. Some will surprise you.',
    real:    'These items can be grouped two different ways. Try both.',
  };
  const WHY = {
    starter: 'The system grouped by measured properties across multiple dimensions simultaneously — not by the most obvious surface feature. The groupings reflect structure the data contained, not labels anyone assigned.',
    deeper:  'Notice where the ambiguous items landed. The system found proximity in measurable attributes. The label is a simplification of what\'s actually there — some items genuinely sit between clusters.',
    real:    (mode) => mode === 'topic'
      ? 'Topic grouping by subject matter. Notice the items that bleed across groups — the system has to choose a primary cluster for each, and that choice is always a simplification.'
      : 'Tone grouping by framing and urgency. The same items now sort differently. Same content, completely different structure.',
  };

  const handleInteracted = useCallback(() => {
    if (onLogRecent) onLogRecent('Group', level);
    if (nudgeDismissed[level]) return;
    const nextIdx = ['starter','deeper','real'].indexOf(level) + 1;
    if (nextIdx < 3) setNudge(['starter','deeper','real'][nextIdx]);
  }, [level, nudgeDismissed, onLogRecent]);

  const handleLevelChange = useCallback(l => { setLevel(l); setNudge(null); }, []);
  const handleCategoryChange = useCallback(c => { setCategory(c); setNudge(null); }, []);
  const handleDismiss = useCallback(() => { setNudgeDismissed(d => ({ ...d, [level]: true })); setNudge(null); }, [level]);

  return (
    <ModuleShell
      title="Group"
      description="How AI discovers natural clusters without knowing the category names."
      category={category}
      onCategoryChange={handleCategoryChange}
      level={level}
      onLevelChange={handleLevelChange}
      nudgeLevel={nudge}
      onDismissNudge={handleDismiss}
      play={<Play key={`${category}-${level}`} level={level} catData={catData} hint={HINTS[level]} whyText={WHY[level]} onInteracted={handleInteracted} />}
      see={<See key={`see-${level}`} level={level} />}
      build={<Build key={`build-${category}-${level}`} level={level} catData={catData} onOpenLab={onOpenLab} />}
      explore={<Explore level={level} />}
    />
  );
}
