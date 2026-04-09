import { useState, useEffect, useRef, useCallback } from 'react';
import ModuleShell from './ModuleShell';
import { getCategoryData, PREDICT_BUILD_DEFAULTS } from '../modules.js';

const W = 560, H = 180, PAD = 40;

function linReg(pts) {
  const n = pts.length;
  if (n < 2) return null;
  const sx = pts.reduce((s,p)=>s+p[0],0), sy = pts.reduce((s,p)=>s+p[1],0);
  const sxy = pts.reduce((s,p)=>s+p[0]*p[1],0), sxx = pts.reduce((s,p)=>s+p[0]*p[0],0);
  const d = n*sxx - sx*sx;
  if (Math.abs(d) < 0.001) return null;
  return { slope: (n*sxy-sx*sy)/d, intercept: (sy-(n*sxy-sx*sy)/d*sx)/n };
}

function drawChart(svg, values, labels, options={}) {
  svg.innerHTML = '';
  if (!values.length) return;
  const { showPred=false, showActual=null, actualLabel='Actual' } = options;
  const n = values.length;
  const minV = Math.min(...values)*0.9, maxV = Math.max(...values)*1.08;
  const toX = i => PAD + (i*(W-PAD*2))/(n-1);
  const toY = v => H - PAD*0.5 - ((v-minV)/(maxV-minV))*(H-PAD*1.2);
  const xs = values.map((_,i)=>toX(i)), ys = values.map(v=>toY(v));
  const mk = (tag,attrs) => { const el=document.createElementNS('http://www.w3.org/2000/svg',tag); Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v)); return el; };

  [0,1,2,3].forEach(g => { const y=PAD*0.5+g*(H-PAD*1.2)/3; svg.appendChild(mk('line',{x1:PAD,x2:W-10,y1:y,y2:y,stroke:'rgba(28,24,20,0.06)','stroke-width':1})); });
  labels.forEach((lb,i) => { if (i%2!==0 && labels.length>8) return; const t=mk('text',{x:xs[i],y:H-3,'text-anchor':'middle','font-size':8,fill:'rgba(28,24,20,0.35)'}); t.textContent=lb; svg.appendChild(t); });
  svg.appendChild(mk('polyline',{points:xs.map((x,i)=>`${x},${ys[i]}`).join(' '),fill:'none',stroke:'rgba(28,24,20,0.7)','stroke-width':1.5,'stroke-linejoin':'round'}));
  xs.forEach((x,i)=>svg.appendChild(mk('circle',{cx:x,cy:ys[i],r:3.5,fill:'#1c1814'})));

  if (showPred) {
    const reg = linReg(xs.map((x,i)=>[x,ys[i]]));
    if (!reg) return;
    const {slope,intercept} = reg;
    const step=(W-PAD*2)/(n-1), lastX=xs[n-1];
    const pxs=[lastX,lastX+step,lastX+step*2,lastX+step*3];
    const pys=pxs.map(x=>intercept+slope*x);
    const upper=pxs.map((x,i)=>[x,pys[i]-i*5]), lower=[...pxs].reverse().map((x,i)=>[x,pys[pxs.length-1-i]+i*5+8]);
    svg.appendChild(mk('polygon',{points:[...upper,...lower].map(p=>`${p[0]},${p[1]}`).join(' '),fill:'rgba(196,124,43,0.07)'}));
    svg.appendChild(mk('line',{x1:xs[0],y1:intercept+slope*xs[0],x2:lastX,y2:pys[0],stroke:'rgba(196,124,43,0.2)','stroke-width':1,'stroke-dasharray':'3,3'}));
    svg.appendChild(mk('polyline',{points:pxs.map((x,i)=>`${x},${pys[i]}`).join(' '),fill:'none',stroke:'#c47c2b','stroke-width':2,'stroke-dasharray':'6,4'}));
    pxs.slice(1).forEach((x,i)=>svg.appendChild(mk('circle',{cx:x,cy:pys[i+1],r:4.5,fill:'none',stroke:'#c47c2b','stroke-width':2})));
  }
  if (showActual !== null) {
    const step=(W-PAD*2)/(n-1), ax=xs[n-1]+step, ay=toY(showActual);
    svg.appendChild(mk('circle',{cx:ax,cy:ay,r:5,fill:'#5b8af0'}));
    const t=mk('text',{x:ax,y:ay-10,'text-anchor':'middle','font-size':8,fill:'#5b8af0'}); t.textContent=actualLabel; svg.appendChild(t);
  }
}

// ─── PLAY: STARTER ───────────────────────────────────────────────────────────
function PlayStarter({ data, labels, hint, whyText, onInteracted }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  useEffect(() => { if (ref.current) drawChart(ref.current, data, labels, { showPred: shown }); }, [shown, data, labels]);
  return (
    <>
      <div className="play-canvas" style={{ flexDirection:'column', padding:'1.5rem', gap:'1rem' }}>
        <div style={{ fontSize:'0.78rem', color:'var(--ink-mute)', width:'100%' }}>{hint}</div>
        <svg ref={ref} viewBox="0 0 560 180" style={{ width:'100%', height:'180px' }} />
        <button className="play-btn" onClick={() => { setShown(s=>!s); setWhyOpen(false); if (!shown) onInteracted(); }}>{shown?'Reset':'Predict →'}</button>
      </div>
      <p className="play-hint">Look at the shape before you click. Where do you think it goes?</p>
      {shown && (
        <div className="why-block">
          <button className="why-toggle" onClick={() => setWhyOpen(o=>!o)}>
            <span>Why did it predict that, given the noise?</span>
            <span className={`why-arrow${whyOpen?' open':''}`}>▼</span>
          </button>
          {whyOpen && <div className="why-content open">{whyText}</div>}
        </div>
      )}
    </>
  );
}

// ─── PLAY: DEEPER ────────────────────────────────────────────────────────────
function PlayDeeper({ data, labels, actual, hint, whyText, onInteracted }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  useEffect(() => { if (ref.current) drawChart(ref.current, data, labels, { showPred: shown }); }, [shown, data, labels]);
  return (
    <>
      <div className="play-canvas" style={{ flexDirection:'column', padding:'1.5rem', gap:'1rem' }}>
        <div style={{ fontSize:'0.78rem', color:'var(--ink-mute)', width:'100%' }}>{hint}</div>
        <svg ref={ref} viewBox="0 0 560 180" style={{ width:'100%', height:'180px' }} />
        <button className="play-btn" onClick={() => { setShown(s=>!s); setWhyOpen(false); if (!shown) onInteracted(); }}>{shown?'Reset':'Predict next →'}</button>
      </div>
      <p className="play-hint">Notice the spike. What do you think comes right after?</p>
      {shown && (
        <div className="why-block">
          <button className="why-toggle" onClick={() => setWhyOpen(o=>!o)}>
            <span>Did the prediction catch the pattern shift?</span>
            <span className={`why-arrow${whyOpen?' open':''}`}>▼</span>
          </button>
          {whyOpen && <div className="why-content open">{whyText} The actual next value was {actual.toLocaleString()}.</div>}
        </div>
      )}
    </>
  );
}

// ─── PLAY: REAL ──────────────────────────────────────────────────────────────
function PlayReal({ data, labels, actual, hint, whyText, onInteracted }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState('idle');
  const [whyOpen, setWhyOpen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    drawChart(ref.current, data, labels, { showPred: phase!=='idle', showActual: phase==='revealed'?actual:null, actualLabel:`Actual: ${actual.toLocaleString()}` });
  }, [phase, data, labels, actual]);
  return (
    <>
      <div className="play-canvas" style={{ flexDirection:'column', padding:'1.5rem', gap:'1rem' }}>
        <div style={{ fontSize:'0.78rem', color:'var(--ink-mute)', width:'100%' }}>{hint}</div>
        <svg ref={ref} viewBox="0 0 560 180" style={{ width:'100%', height:'180px' }} />
        <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center' }}>
          {phase==='idle' && <button className="play-btn" onClick={()=>{setPhase('predicted');onInteracted();}}>Predict next →</button>}
          {phase==='predicted' && <button className="play-btn" onClick={()=>setPhase('revealed')}>Reveal actual →</button>}
          {phase==='revealed' && <button className="play-btn" onClick={()=>{setPhase('idle');setWhyOpen(false);}}>Reset</button>}
        </div>
      </div>
      <p className="play-hint">{phase==='idle'?'The trend has been strong. What does the model think comes next?':phase==='predicted'?'The model projected continued growth. Now see what actually happened.':'The actual value was '+actual.toLocaleString()+'. The model missed the inflection.'}</p>
      {phase==='revealed' && (
        <div className="why-block">
          <button className="why-toggle" onClick={()=>setWhyOpen(o=>!o)}>
            <span>Why did the model miss the bend?</span>
            <span className={`why-arrow${whyOpen?' open':''}`}>▼</span>
          </button>
          {whyOpen && <div className="why-content open">{whyText}</div>}
        </div>
      )}
    </>
  );
}

// ─── BUILD ────────────────────────────────────────────────────────────────────
function Build({ level, onOpenLab }) {
  const ref = useRef(null);
  const [points, setPoints] = useState(PREDICT_BUILD_DEFAULTS.map(p=>[...p]));
  const [history, setHistory] = useState(4);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    svg.innerHTML = '';
    const mk = (tag,attrs) => { const el=document.createElementNS('http://www.w3.org/2000/svg',tag); Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v)); return el; };
    const pts = [...points].sort((a,b)=>a[0]-b[0]);
    if (pts.length < 2) { const t=mk('text',{x:'280',y:'95','text-anchor':'middle',fill:'rgba(28,24,20,0.3)','font-size':'13'}); t.textContent='Click to add data points'; svg.appendChild(t); return; }
    svg.appendChild(mk('polyline',{points:pts.map(p=>`${p[0]},${p[1]}`).join(' '),fill:'none',stroke:'rgba(28,24,20,0.7)','stroke-width':1.5}));
    pts.forEach(p=>svg.appendChild(mk('circle',{cx:p[0],cy:p[1],r:4,fill:'#1c1814'})));
    const sample=pts.slice(-Math.min(history,pts.length));
    const reg=linReg(sample); if (!reg) return;
    const {slope,intercept}=reg, lastX=pts[pts.length-1][0], step=55;
    const pxs=[lastX,lastX+step,lastX+step*2,lastX+step*3].filter(x=>x<=555);
    const pys=pxs.map(x=>intercept+slope*x);
    const upper=pxs.map((x,i)=>[x,pys[i]-i*6]), lower=[...pxs].reverse().map((x,i)=>[x,pys[pxs.length-1-i]+i*6+8]);
    svg.appendChild(mk('polygon',{points:[...upper,...lower].map(p=>`${p[0]},${p[1]}`).join(' '),fill:'rgba(196,124,43,0.1)'}));
    if (pxs.length>1) {
      svg.appendChild(mk('polyline',{points:pxs.map((x,i)=>`${x},${pys[i]}`).join(' '),fill:'none',stroke:'#c47c2b','stroke-width':2,'stroke-dasharray':'5,4'}));
      pxs.slice(1).forEach((x,i)=>svg.appendChild(mk('circle',{cx:x,cy:pys[i+1],r:4,fill:'none',stroke:'#c47c2b','stroke-width':2})));
    }
  }, [points, history]);

  const handleClick = useCallback(e => {
    const svg=ref.current; if (!svg) return;
    const rect=svg.getBoundingClientRect();
    setPoints(prev=>[...prev,[(e.clientX-rect.left)*(560/rect.width),(e.clientY-rect.top)*(180/rect.height)]]);
  },[]);

  const notes = {
    starter: 'Try a curve, plateau, or sudden drop — does the prediction follow the bend or project the old trend past it?',
    deeper:  'Try drawing a spike followed by a dip. Does changing the history window help the model catch the cycle?',
    real:    'Try drawing an S-curve. Watch where the linear projection ends up vs where the curve actually goes.',
  };

  return (
    <div className="build-card">
      <div className="build-label">Click the chart to add points</div>
      <svg ref={ref} viewBox="0 0 560 180" onClick={handleClick} style={{ width:'100%',height:'180px',cursor:'crosshair',background:'var(--sand)',borderRadius:'4px' }} />
      <div style={{ display:'flex',gap:'0.75rem',marginTop:'0.75rem',alignItems:'center' }}>
        <button className="play-btn" style={{ margin:0,padding:'0.4rem 0.9rem',fontSize:'0.78rem' }} onClick={()=>setPoints(PREDICT_BUILD_DEFAULTS.map(p=>[...p]))}>Reset</button>
        <span style={{ fontSize:'0.78rem',color:'var(--ink-mute)' }}>{notes[level]}</span>
      </div>
      <div className="build-label" style={{ marginTop:'1rem' }}>How much history the system uses</div>
      <input type="range" className="build-slider" min={2} max={8} value={history} onChange={e=>setHistory(parseInt(e.target.value))} />
      <div className="build-slider-labels"><span>Only recent points</span><span>Full history</span></div>
      <div className="bridge-invite">
        <span className="bridge-text">Ready to try this on your own data?</span>
        <button className="bridge-btn" onClick={()=>onOpenLab('predict')}>Open in Lab →</button>
      </div>
    </div>
  );
}

// ─── EXPLORE ──────────────────────────────────────────────────────────────────
function Explore({ level }) {
  const content = {
    starter: { body: "How far out can you trust a prediction? Uncertainty compounds. One step ahead is much more reliable than ten steps ahead. And if the underlying pattern changes, the model has no way to know. It keeps predicting based on what it learned, even when the world has already shifted.", world: 'Demand forecasting, capacity planning, churn prediction, financial modeling.' },
    deeper:  { body: "How do you build a model that handles both trend and seasonality? The standard approach is decomposition — split the signal into components first, model each separately, then recombine. This works well when the season is regular. It breaks down when it isn't.", world: 'Retail demand forecasting, energy load prediction, seasonal hiring planning.' },
    real:    { body: "Growth teams learn to distrust their own models when growth decelerates. The model keeps predicting the old trajectory. The data keeps coming in below it. Each period the gap widens. At some point someone has to decide: is this noise, or is this the new normal? The model can't make that call. It just keeps projecting.", world: 'Startup growth forecasting, product adoption curves, social network growth, technology diffusion modeling.' },
  };
  const c = content[level];
  return (
    <div className="see-card">
      <p className="see-explanation" style={{ fontWeight:500,color:'var(--ink)',marginBottom:'0.5rem' }}>A harder question.</p>
      <p className="see-explanation">{c.body}</p>
      <p style={{ fontSize:'0.8rem',color:'var(--ink-mute)',marginTop:'1.25rem' }}><strong>Where this appears:</strong> {c.world}</p>
    </div>
  );
}

// ─── PREDICT MODULE ───────────────────────────────────────────────────────────
export default function Predict({ onOpenLab, onLogRecent, onSaveItem }) {
  const [category, setCategory] = useState('human-behavior');
  const [level, setLevel]       = useState('starter');
  const [nudge, setNudge]       = useState(null);
  const [nudgeDismissed, setNudgeDismissed] = useState({ starter: false, deeper: false });

  const catData = getCategoryData(category);

  const HINTS = {
    starter: 'Recent data points — noisy but with a real trend underneath.',
    deeper:  'A longer data series with a structural pattern hidden inside the trend.',
    real:    'A growth curve with 18 data points. The trend has been strong.',
  };
  const WHY_STARTER = 'The system averaged through the week-to-week variation to find the underlying trend. Individual dips get smoothed out. What remains is the general direction. This is useful, but the system will miss a genuine change until enough new data overrides the old trend.';
  const WHY_DEEPER  = 'Probably not. A simple linear model sees the recent strong values and projects continued growth. It does not know there is a structural pattern that resets. The actual next value shows the pattern the model cannot see.';
  const WHY_REAL    = 'The model was trained on a growth pattern. Growth was real — but decelerating. The curve was bending. A linear model cannot detect an inflection point from the inside. It sees "the trend is upward" and extends it. It has no way to know the system was approaching a ceiling.';

  const handleInteracted = useCallback(() => {
    if (onLogRecent) onLogRecent('Predict', level);
    if (nudgeDismissed[level]) return;
    const nextIdx = ['starter','deeper','real'].indexOf(level)+1;
    if (nextIdx < 3) setNudge(['starter','deeper','real'][nextIdx]);
  }, [level, nudgeDismissed, onLogRecent]);

  const handleLevelChange = useCallback(l => { setLevel(l); setNudge(null); }, []);
  const handleCategoryChange = useCallback(c => { setCategory(c); setNudge(null); }, []);
  const handleDismiss = useCallback(() => { setNudgeDismissed(d=>({...d,[level]:true})); setNudge(null); }, [level]);

  const playNode = (() => {
    if (level === 'starter') return <PlayStarter key={`${category}-starter`} data={catData.PREDICT_KNOWN} labels={catData.PREDICT_WEEKS} hint={HINTS.starter} whyText={WHY_STARTER} onInteracted={handleInteracted} />;
    if (level === 'deeper')  return <PlayDeeper  key={`${category}-deeper`}  data={catData.PREDICT_DEEPER_DATA} labels={catData.PREDICT_DEEPER_LABELS} actual={catData.PREDICT_DEEPER_ACTUAL} hint={HINTS.deeper} whyText={WHY_DEEPER} onInteracted={handleInteracted} />;
    return <PlayReal key={`${category}-real`} data={catData.PREDICT_REAL_DATA} labels={catData.PREDICT_REAL_LABELS} actual={catData.PREDICT_REAL_ACTUAL_W19} hint={HINTS.real} whyText={WHY_REAL} onInteracted={handleInteracted} />;
  })();

  return (
    <ModuleShell
      title="Predict"
      description="How AI extends patterns forward — and why it can be confidently wrong."
      category={category}
      onCategoryChange={handleCategoryChange}
      level={level}
      onLevelChange={handleLevelChange}
      nudgeLevel={nudge}
      onDismissNudge={handleDismiss}
      play={playNode}
      see={<See key={`see-${level}`} level={level} />}
      build={<Build key={`build-${level}`} level={level} onOpenLab={onOpenLab} />}
      explore={<Explore level={level} />}
    />
  );
}

function See({ level }) {
  const texts = {
    starter: "The system finds the trend beneath the noise and projects it forward. That's why it can be simultaneously reasonable and wrong: the trend was real, but something changed. The further forward you predict, the wider the uncertainty grows.",
    deeper:  "This data has two signals running simultaneously: an underlying trend, and a structural pattern that resets. A simple linear model sees both signals mixed together and averages them into one line. It can't separate the cycle from the trend.",
    real:    "S-curves appear everywhere in growth. They look exponential at first, then decelerate, then plateau. The problem is that from inside the growth phase, a linear model can't see the bend coming. Everything looks like continued growth until the data clearly shows otherwise.",
  };
  return (
    <div className="see-card">
      <p className="see-explanation">{texts[level]}</p>
      <div className="see-diagram">
        <div className="diagram-node">Data with pattern</div>
        <div className="diagram-arrow">→</div>
        <div className="diagram-node" style={{ background:'rgba(91,138,240,0.12)', borderColor:'var(--blue)' }}>Trend extracted</div>
        <div className="diagram-arrow">→</div>
        <div className="diagram-node" style={{ borderStyle:'dashed', opacity:0.7 }}>Projection ±uncertainty</div>
      </div>
    </div>
  );
}
