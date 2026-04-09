// ─── CATEGORY: HUMAN BEHAVIOR ─────────────────────────────────────────────────
// The default/original category. Human interests, habits, behaviors.
// Was previously the only category in modules.js.
// ─────────────────────────────────────────────────────────────────────────────

// ─── RECOMMEND ────────────────────────────────────────────────────────────────

// STARTER: Human interests with latent connections
export const REC_ITEMS = [
  'Early mornings', 'Crime novels', 'Long walks', 'Cooking shows',
  'Solo travel', 'Bouldering', 'Journaling', 'Minimalism',
  'Jazz', 'Street photography'
];
export const REC_NEIGHBORS = {
  'Early mornings':     { 'Crime novels': 'Both reward slow, uninterrupted attention', 'Journaling': 'Both are solitary rituals that structure thought', 'Minimalism': 'Both involve intentional reduction of noise' },
  'Crime novels':       { 'Early mornings': 'Both reward slow, uninterrupted attention', 'Solo travel': 'Both are forms of careful, sustained observation', 'Jazz': 'Both follow structures that reward patience' },
  'Long walks':         { 'Jazz': 'Both are non-linear, open-ended, and ambient', 'Street photography': 'Both are about noticing without intervening', 'Solo travel': 'Both privilege unstructured discovery' },
  'Cooking shows':      { 'Minimalism': 'Both are about craft through reduction', 'Bouldering': 'Both reward deliberate technique over force', 'Jazz': 'Both involve improvisation within structure' },
  'Solo travel':        { 'Street photography': 'Both involve observation without participation', 'Long walks': 'Both privilege unstructured discovery', 'Crime novels': 'Both are forms of careful, sustained observation' },
  'Bouldering':         { 'Journaling': 'Both are iterative, personal, and self-measured', 'Cooking shows': 'Both reward deliberate technique over force', 'Minimalism': 'Both strip away complexity to find what matters' },
  'Journaling':         { 'Early mornings': 'Both are solitary rituals that structure thought', 'Bouldering': 'Both are iterative, personal, and self-measured', 'Minimalism': 'Both involve intentional reduction of noise' },
  'Minimalism':         { 'Journaling': 'Both involve intentional reduction of noise', 'Early mornings': 'Both involve intentional reduction of noise', 'Cooking shows': 'Both are about craft through reduction' },
  'Jazz':               { 'Long walks': 'Both are non-linear, open-ended, and ambient', 'Crime novels': 'Both follow structures that reward patience', 'Cooking shows': 'Both involve improvisation within structure' },
  'Street photography': { 'Solo travel': 'Both involve observation without participation', 'Long walks': 'Both are about noticing without intervening', 'Crime novels': 'Both are forms of careful, sustained observation' }
};

// DEEPER: Mixed media diet — cross-domain connections
export const REC_DEEPER_ITEMS = [
  'The Wire', 'Stoicism', 'Hardcore History', 'Running',
  'Don DeLillo novels', 'Systems thinking', 'Long-form journalism',
  'Black Mirror', 'Philosophy podcasts', 'Endurance sports'
];
export const REC_DEEPER_NEIGHBORS = {
  'The Wire':             { 'Don DeLillo novels': 'Both study how systems outlast and shape individuals', 'Stoicism': 'Both are preoccupied with power, agency, and what you can control', 'Long-form journalism': 'Both reward patient attention to institutional behavior' },
  'Stoicism':             { 'The Wire': 'Both are preoccupied with power, agency, and what you can control', 'Running': 'Both involve deliberate discomfort as a path to clarity', 'Endurance sports': 'Both treat suffering as a teacher rather than a problem' },
  'Hardcore History':     { 'Long-form journalism': 'Both are about spending serious time with serious material', 'Don DeLillo novels': 'Both circle around how large forces move through individuals', 'Systems thinking': 'Both try to understand why things happen at the structural level' },
  'Running':              { 'Stoicism': 'Both involve deliberate discomfort as a path to clarity', 'Endurance sports': 'Both are the same thing at different distances', 'Philosophy podcasts': 'Both are things people do alone while processing something larger' },
  'Don DeLillo novels':   { 'The Wire': 'Both study how systems outlast and shape individuals', 'Hardcore History': 'Both circle around how large forces move through individuals', 'Black Mirror': 'Both use fiction to make the present uncomfortable' },
  'Systems thinking':     { 'Hardcore History': 'Both try to understand why things happen at the structural level', 'The Wire': 'Both are about emergent behavior in complex human systems', 'Philosophy podcasts': 'Both are tools for thinking about how the world actually works' },
  'Long-form journalism': { 'The Wire': 'Both reward patient attention to institutional behavior', 'Hardcore History': 'Both are about spending serious time with serious material', 'Don DeLillo novels': 'Both take the same subject — American society — and defamiliarize it' },
  'Black Mirror':         { 'Don DeLillo novels': 'Both use fiction to make the present uncomfortable', 'Philosophy podcasts': 'Both ask what technology is doing to what it means to be human', 'Systems thinking': 'Both are about unintended consequences at scale' },
  'Philosophy podcasts':  { 'Running': 'Both are things people do alone while processing something larger', 'Systems thinking': 'Both are tools for thinking about how the world actually works', 'Black Mirror': 'Both ask what technology is doing to what it means to be human' },
  'Endurance sports':     { 'Stoicism': 'Both treat suffering as a teacher rather than a problem', 'Running': 'Both are the same thing at different distances', 'Hardcore History': 'Both require tolerating discomfort in pursuit of something larger' }
};

// REAL: Purchase co-occurrence
export const REC_REAL_ITEMS = [
  'Running shoes', 'Foam roller', 'Protein powder', 'Blender',
  'Meal prep containers', 'Resistance bands', 'Sleep mask',
  'Blue light glasses', 'Herbal tea', 'Notebook'
];
export const REC_REAL_NEIGHBORS = {
  'Running shoes':        { 'Foam roller': 'Bought together by 68% of purchasers — recovery follows training', 'Resistance bands': 'Bought together by 54% — cross-training pattern', 'Protein powder': 'Bought together by 49% — performance optimization cluster' },
  'Foam roller':          { 'Running shoes': 'Bought together by 68% — recovery follows training', 'Resistance bands': 'Bought together by 61% — home gym bundle pattern', 'Protein powder': 'Bought together by 44% — active recovery cluster' },
  'Protein powder':       { 'Blender': 'Bought together by 77% — obvious utility pairing', 'Meal prep containers': 'Bought together by 58% — nutrition planning cluster', 'Running shoes': 'Bought together by 49% — performance optimization cluster' },
  'Blender':              { 'Protein powder': 'Bought together by 77% — obvious utility pairing', 'Meal prep containers': 'Bought together by 52% — food prep cluster', 'Herbal tea': 'Bought together by 31% — wellness lifestyle signal' },
  'Meal prep containers': { 'Protein powder': 'Bought together by 58% — nutrition planning cluster', 'Blender': 'Bought together by 52% — food prep cluster', 'Resistance bands': 'Bought together by 38% — structured health routine signal' },
  'Resistance bands':     { 'Foam roller': 'Bought together by 61% — home gym bundle', 'Running shoes': 'Bought together by 54% — cross-training pattern', 'Meal prep containers': 'Bought together by 38% — structured health routine signal' },
  'Sleep mask':           { 'Blue light glasses': 'Bought together by 71% — sleep hygiene cluster', 'Herbal tea': 'Bought together by 63% — wind-down routine signal', 'Notebook': 'Bought together by 29% — intentional living cluster' },
  'Blue light glasses':   { 'Sleep mask': 'Bought together by 71% — sleep hygiene cluster', 'Herbal tea': 'Bought together by 44% — screen-to-sleep transition pattern', 'Notebook': 'Bought together by 35% — desk productivity cluster' },
  'Herbal tea':           { 'Sleep mask': 'Bought together by 63% — wind-down routine signal', 'Blue light glasses': 'Bought together by 44% — screen-to-sleep pattern', 'Notebook': 'Bought together by 41% — quiet evening ritual cluster' },
  'Notebook':             { 'Herbal tea': 'Bought together by 41% — quiet evening ritual cluster', 'Sleep mask': 'Bought together by 29% — intentional living cluster', 'Blue light glasses': 'Bought together by 35% — desk productivity cluster' }
};

// ─── GROUP ────────────────────────────────────────────────────────────────────

// STARTER: Cities — non-obvious geographic/climate clustering
export const GROUP_ITEMS = [
  { label: 'Tokyo',      cat: 0 }, { label: 'São Paulo', cat: 0 },
  { label: 'Mumbai',     cat: 0 }, { label: 'Lagos',     cat: 0 },
  { label: 'New York',   cat: 0 }, { label: 'Jakarta',   cat: 0 },
  { label: 'Reykjavik',  cat: 1 }, { label: 'Zurich',    cat: 1 },
  { label: 'Oslo',       cat: 1 }, { label: 'Vancouver', cat: 1 },
  { label: 'Helsinki',   cat: 1 },
  { label: 'Cairo',      cat: 2 }, { label: 'Riyadh',    cat: 2 },
  { label: 'Phoenix',    cat: 2 }, { label: 'Nairobi',   cat: 2 },
  { label: 'Lima',       cat: 2 },
];
export const CLUSTER_NAMES_STARTER = [
  'Dense · Humid · High-growth', 'Cold · High-livability · Compact',
  'Arid · Sun-intense · Dry', 'Mixed'
];

// DEEPER: Job listings — genuinely ambiguous clustering
export const GROUP_DEEPER_ITEMS = [
  { label: 'Data Analyst',       cat: 0 }, { label: 'ML Engineer',      cat: 0 },
  { label: 'Data Scientist',     cat: 0 }, { label: 'BI Developer',      cat: 0 },
  { label: 'UX Researcher',      cat: 1 }, { label: 'Product Manager',   cat: 1 },
  { label: 'Growth Analyst',     cat: 0 }, { label: 'UX Designer',       cat: 1 },
  { label: 'Content Strategist', cat: 2 }, { label: 'Brand Manager',     cat: 2 },
  { label: 'Social Media Mgr',   cat: 2 }, { label: 'Copywriter',        cat: 2 },
  { label: 'Backend Engineer',   cat: 0 }, { label: 'DevOps Engineer',   cat: 0 },
  { label: 'Frontend Engineer',  cat: 1 },
];
export const CLUSTER_NAMES_DEEPER = [
  'Technical / Data', 'Product / Design', 'Marketing / Content', 'Mixed'
];

// REAL: News headlines — topic vs tone grouping
export const GROUP_REAL_ITEMS_TOPIC = [
  { label: 'Arctic ice hits record low',  cat: 0 },
  { label: 'Carbon tax bill stalls',      cat: 0 },
  { label: 'Solar costs drop 40%',        cat: 2 },
  { label: 'Fed raises rates again',      cat: 1 },
  { label: 'Inflation eases slightly',    cat: 1 },
  { label: 'AI regulation bill drafted',  cat: 3 },
  { label: 'Chip shortage continues',     cat: 2 },
  { label: 'New climate summit set',      cat: 0 },
  { label: 'Markets hit 6-month high',    cat: 1 },
  { label: 'Deepfake law proposed',       cat: 3 },
  { label: 'Grid storage breakthrough',   cat: 2 },
  { label: 'Election turnout falls',      cat: 3 },
  { label: 'EV subsidies cut',            cat: 1 },
  { label: 'Sea level projections rise',  cat: 0 },
  { label: 'Senate gridlock deepens',     cat: 3 },
  { label: 'Tech layoffs continue',       cat: 2 },
];
export const GROUP_REAL_ITEMS_TONE = [
  { label: 'Arctic ice hits record low',  cat: 0 },
  { label: 'Carbon tax bill stalls',      cat: 3 },
  { label: 'Solar costs drop 40%',        cat: 1 },
  { label: 'Fed raises rates again',      cat: 2 },
  { label: 'Inflation eases slightly',    cat: 1 },
  { label: 'AI regulation bill drafted',  cat: 3 },
  { label: 'Chip shortage continues',     cat: 2 },
  { label: 'New climate summit set',      cat: 2 },
  { label: 'Markets hit 6-month high',    cat: 1 },
  { label: 'Deepfake law proposed',       cat: 3 },
  { label: 'Grid storage breakthrough',   cat: 1 },
  { label: 'Election turnout falls',      cat: 0 },
  { label: 'EV subsidies cut',            cat: 0 },
  { label: 'Sea level projections rise',  cat: 0 },
  { label: 'Senate gridlock deepens',     cat: 3 },
  { label: 'Tech layoffs continue',       cat: 2 },
];
export const CLUSTER_NAMES_REAL_TOPIC = ['Environment', 'Economy', 'Technology', 'Politics'];
export const CLUSTER_NAMES_REAL_TONE  = ['Urgent', 'Analytical', 'Neutral', 'Cautious'];

// ─── PREDICT ──────────────────────────────────────────────────────────────────

// STARTER: Noisy step counts — trend beneath variance
export const PREDICT_KNOWN  = [5200, 6800, 4900, 7200, 6100, 7800, 5600, 8200, 7100, 8900];
export const PREDICT_WEEKS  = ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10'];

// DEEPER: Monthly sales with seasonality
export const PREDICT_DEEPER_DATA   = [820,860,790,910,870,940,880,960,920,1100,1380,720];
export const PREDICT_DEEPER_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const PREDICT_DEEPER_ACTUAL = 780;

// REAL: Startup WAU — decelerating S-curve
export const PREDICT_REAL_DATA = [
  120,185,290,430,590,760,940,1090,1230,1340,
  1420,1490,1535,1565,1582,1594,1601,1606
];
export const PREDICT_REAL_LABELS = [
  'W1','W2','W3','W4','W5','W6','W7','W8','W9','W10',
  'W11','W12','W13','W14','W15','W16','W17','W18'
];
export const PREDICT_REAL_ACTUAL_W19 = 1608;
