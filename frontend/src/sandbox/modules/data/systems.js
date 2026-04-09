// ─── CATEGORY: SYSTEMS ────────────────────────────────────────────────────────

// ─── RECOMMEND ────────────────────────────────────────────────────────────────

// STARTER: Systems concepts with latent structural connections
export const REC_ITEMS = [
  'Feedback loops', 'Emergence', 'Bottlenecks', 'Resilience',
  'Leverage points', 'Delays', 'Stocks and flows', 'Nonlinearity',
  'Boundaries', 'Self-organization'
];
export const REC_NEIGHBORS = {
  'Feedback loops':   { 'Delays': 'Both are responsible for the oscillations that make systems hard to manage — feedback without delay is trivial', 'Stocks and flows': 'Both are the core building blocks of any system dynamics model — flows create feedback through stocks', 'Nonlinearity': 'Both explain why intuitive interventions in complex systems often backfire' },
  'Emergence':        { 'Self-organization': 'Both describe the same phenomenon from different angles — one is the outcome, one is the process', 'Nonlinearity': 'Both arise when the whole becomes genuinely different from the sum of its parts', 'Boundaries': 'Both raise the same question: where does one system end and another begin?' },
  'Bottlenecks':      { 'Leverage points': 'Both are about finding the part of the system where intervention produces outsized effect', 'Stocks and flows': 'Both locate the constraint — bottlenecks in flow capacity, leverage in the structure that governs rates', 'Delays': 'Both are hidden causes of system dysfunction — bottlenecks limit throughput, delays distort feedback' },
  'Resilience':       { 'Boundaries': 'Both are about what the system can absorb without changing its fundamental identity', 'Self-organization': 'Both describe a system\'s capacity to maintain function under perturbation — one passively, one actively', 'Feedback loops': 'Both depend on the same structural property: redundant pathways that maintain function when one fails' },
  'Leverage points':  { 'Bottlenecks': 'Both are about finding where intervention produces outsized effect in a system', 'Nonlinearity': 'Both explain why small changes in the right place produce disproportionate results', 'Feedback loops': 'Both are most powerful where the feedback structure amplifies rather than dampens the intervention' },
  'Delays':           { 'Feedback loops': 'Both are responsible for the oscillations that make systems hard to manage', 'Nonlinearity': 'Both explain why systems overshoot — delayed feedback combined with nonlinear response creates oscillation', 'Stocks and flows': 'Both determine the rate at which a system can respond to change — stocks accumulate, delays slow the signal' },
  'Stocks and flows': { 'Feedback loops': 'Both are core building blocks of system dynamics — flows create feedback through stocks', 'Bottlenecks': 'Both locate the constraint — bottlenecks in flow capacity, leverage in the structure governing rates', 'Delays': 'Both determine the rate at which a system can respond to change' },
  'Nonlinearity':     { 'Emergence': 'Both arise when the whole becomes genuinely different from the sum of its parts', 'Leverage points': 'Both explain why small changes in the right place produce disproportionate results', 'Delays': 'Both explain why systems overshoot — delayed feedback combined with nonlinear response creates oscillation' },
  'Boundaries':       { 'Emergence': 'Both raise the same question: where does one system end and another begin?', 'Resilience': 'Both are about what the system can absorb without changing its fundamental identity', 'Self-organization': 'Both define the space within which a system maintains its characteristic behavior' },
  'Self-organization':{ 'Emergence': 'Both describe the same phenomenon from different angles — one is the outcome, one is the process', 'Resilience': 'Both describe a system\'s capacity to maintain function under perturbation', 'Boundaries': 'Both define the space within which a system maintains its characteristic behavior' }
};

// DEEPER: Systems failures — cross-domain structural parallels
export const REC_DEEPER_ITEMS = [
  'Cascade failures', 'Tight coupling', 'Normal accidents', 'Drift into failure',
  'Brittleness', 'Monocultures', 'Overcentralization', 'Perverse incentives',
  'Decoupling', 'Graceful degradation'
];
export const REC_DEEPER_NEIGHBORS = {
  'Cascade failures':     { 'Tight coupling': 'Both arise from the same structural property: systems with no slack to absorb failure', 'Normal accidents': 'Both are Charles Perrow\'s core insight — complex tightly-coupled systems will fail in ways that cannot be anticipated', 'Brittleness': 'Both describe systems that appear stable until a single failure propagates everywhere' },
  'Tight coupling':       { 'Cascade failures': 'Both arise from systems with no slack to absorb failure', 'Normal accidents': 'Both belong to the same theoretical framework — tight coupling is why normal accidents are normal', 'Monocultures': 'Both reduce the system\'s ability to absorb a shock by eliminating redundancy and diversity' },
  'Normal accidents':     { 'Cascade failures': 'Both are Perrow\'s core insight — complex tightly-coupled systems will fail in ways that cannot be anticipated', 'Tight coupling': 'Both belong to the same theoretical framework', 'Drift into failure': 'Both describe failure as a property of systems, not just the fault of individuals who made bad decisions' },
  'Drift into failure':   { 'Normal accidents': 'Both describe failure as a property of systems, not just the fault of individuals', 'Perverse incentives': 'Both explain how systems that appear to be working can be quietly moving toward a bad outcome', 'Brittleness': 'Both describe how systems erode their margins of safety gradually without anyone noticing' },
  'Brittleness':          { 'Graceful degradation': 'Both are opposites — one fails suddenly and completely, one fails slowly and partially', 'Cascade failures': 'Both describe systems that appear stable until a single failure propagates everywhere', 'Tight coupling': 'Both reduce the system\'s ability to absorb a shock by eliminating slack' },
  'Monocultures':         { 'Tight coupling': 'Both reduce the system\'s ability to absorb a shock by eliminating redundancy', 'Overcentralization': 'Both concentrate risk by eliminating the distributed redundancy that allows systems to survive local failures', 'Brittleness': 'Both create the conditions for catastrophic failure rather than gradual degradation' },
  'Overcentralization':   { 'Monocultures': 'Both concentrate risk by eliminating distributed redundancy', 'Decoupling': 'Both are opposites — overcentralization creates fragility, decoupling creates resilience', 'Perverse incentives': 'Both create systems where the structure undermines the purpose it was designed to serve' },
  'Perverse incentives':  { 'Drift into failure': 'Both explain how systems can be quietly moving toward a bad outcome while appearing to work', 'Overcentralization': 'Both create systems where the structure undermines the purpose it was designed to serve', 'Normal accidents': 'Both describe failure modes that are properties of system design, not individual error' },
  'Decoupling':           { 'Graceful degradation': 'Both are design principles for building systems that survive partial failure', 'Overcentralization': 'Both are opposites — overcentralization creates fragility, decoupling creates resilience', 'Resilience': 'Both are structural strategies for maintaining function under stress' },
  'Graceful degradation': { 'Brittleness': 'Both are opposites — one fails suddenly and completely, one fails slowly and partially', 'Decoupling': 'Both are design principles for building systems that survive partial failure', 'Resilience': 'Both describe the ability to maintain partial function rather than collapsing completely' }
};

// REAL: Systems thinking frameworks cited together in practitioner literature
export const REC_REAL_ITEMS = [
  'Causal loop diagrams', 'Stock and flow models', 'Theory of constraints',
  'Wardley mapping', 'Cynefin framework', 'Viable system model',
  'Systems archetypes', 'Rich pictures', 'DSRP method', 'Iceberg model'
];
export const REC_REAL_NEIGHBORS = {
  'Causal loop diagrams':  { 'Stock and flow models': 'Used together in 81% of system dynamics work — CLDs are the sketch, S&F models are the calculation', 'Systems archetypes': 'Used together by 74% — archetypes name the recurring patterns that CLDs make visible', 'Iceberg model': 'Used together by 62% — iceberg model identifies the structure, CLD maps the feedback within it' },
  'Stock and flow models': { 'Causal loop diagrams': 'Used together in 81% — CLDs are the sketch, S&F models are the calculation', 'Theory of constraints': 'Used together by 65% — both identify where in the system the governing constraint lives', 'Systems archetypes': 'Used together by 58% — archetypes name the patterns that S&F models quantify' },
  'Theory of constraints': { 'Stock and flow models': 'Used together by 65% — both identify where in the system the governing constraint lives', 'Wardley mapping': 'Used together by 54% — both are about locating leverage in a system under competitive or operational pressure', 'Causal loop diagrams': 'Used together by 61% — constraint identification and feedback mapping are complementary tools' },
  'Wardley mapping':       { 'Cynefin framework': 'Used together by 72% — Wardley maps the landscape, Cynefin maps the uncertainty type', 'Theory of constraints': 'Used together by 54% — both are about locating leverage under competitive or operational pressure', 'Viable system model': 'Used together by 48% — both are tools for thinking about organizational structure and fit' },
  'Cynefin framework':     { 'Wardley mapping': 'Used together by 72% — Wardley maps the landscape, Cynefin maps the uncertainty type', 'DSRP method': 'Used together by 61% — both are meta-frameworks for thinking about how to think about complex situations', 'Iceberg model': 'Used together by 55% — both identify what kind of intervention is appropriate given the level of complexity' },
  'Viable system model':   { 'Wardley mapping': 'Used together by 48% — both are tools for thinking about organizational structure and fit', 'Rich pictures': 'Used together by 64% — rich pictures surface the human and informal elements the VSM can then formalize', 'Causal loop diagrams': 'Used together by 51% — VSM defines the structure, CLDs map the feedback within it' },
  'Systems archetypes':    { 'Causal loop diagrams': 'Used together by 74% — archetypes name the recurring patterns that CLDs make visible', 'Stock and flow models': 'Used together by 58% — archetypes name the patterns that S&F models quantify', 'Iceberg model': 'Used together by 67% — both are pattern-recognition tools applied to structural system behavior' },
  'Rich pictures':         { 'Viable system model': 'Used together by 64% — rich pictures surface the human elements the VSM can then formalize', 'DSRP method': 'Used together by 57% — both are tools for making implicit mental models explicit and shareable', 'Cynefin framework': 'Used together by 48% — both acknowledge that the observer is part of the system being modeled' },
  'DSRP method':           { 'Cynefin framework': 'Used together by 61% — both are meta-frameworks for thinking about how to think about complex situations', 'Rich pictures': 'Used together by 57% — both are tools for making implicit mental models explicit and shareable', 'Iceberg model': 'Used together by 53% — both are scaffolds for moving from visible events to underlying structure' },
  'Iceberg model':         { 'Systems archetypes': 'Used together by 67% — both are pattern-recognition tools applied to structural system behavior', 'Causal loop diagrams': 'Used together by 62% — iceberg model identifies the structure, CLD maps the feedback within it', 'Cynefin framework': 'Used together by 55% — both identify what kind of intervention is appropriate given the level of complexity' }
};

// ─── GROUP ────────────────────────────────────────────────────────────────────

// STARTER: Real-world systems — grouped by primary control mechanism
export const GROUP_ITEMS = [
  { label: 'The internet',        cat: 0 }, { label: 'Supply chains',       cat: 0 },
  { label: 'Power grids',         cat: 1 }, { label: 'Water systems',       cat: 1 },
  { label: 'Financial markets',   cat: 2 }, { label: 'Insurance systems',   cat: 2 },
  { label: 'Ecosystems',          cat: 3 }, { label: 'Immune systems',      cat: 3 },
  { label: 'Social networks',     cat: 0 }, { label: 'Traffic systems',     cat: 1 },
  { label: 'Weather systems',     cat: 3 }, { label: 'Labor markets',       cat: 2 },
  { label: 'News media',          cat: 0 }, { label: 'Public health',       cat: 3 },
  { label: 'Banking systems',     cat: 2 },
];
export const CLUSTER_NAMES_STARTER = [
  'Network / Distributed', 'Infrastructure / Flow',
  'Market / Financial', 'Natural / Adaptive'
];

// DEEPER: System failure events — ambiguous by cause
export const GROUP_DEEPER_ITEMS = [
  { label: '2008 financial crisis', cat: 0 }, { label: 'Fukushima',           cat: 1 },
  { label: 'Boeing 737 MAX',        cat: 2 }, { label: 'Facebook outage 2021',cat: 0 },
  { label: 'Chernobyl',             cat: 1 }, { label: 'Three Mile Island',   cat: 1 },
  { label: 'Challenger disaster',   cat: 2 }, { label: 'Suez Canal blockage', cat: 3 },
  { label: 'Colonial Pipeline hack',cat: 0 }, { label: 'Enron collapse',      cat: 2 },
  { label: 'Texas grid failure',    cat: 3 }, { label: 'Flash crash 2010',    cat: 0 },
  { label: 'East Palestine derail', cat: 3 }, { label: 'Therac-25 radiation', cat: 2 },
  { label: 'Knight Capital',        cat: 0 },
];
export const CLUSTER_NAMES_DEEPER = [
  'Digital / Financial cascade', 'Nuclear / Energy infrastructure',
  'Engineering / Safety culture', 'Supply / Physical infrastructure'
];

// REAL: Systems concepts grouped by domain of origin vs. domain of application
export const GROUP_REAL_ITEMS_TOPIC = [
  { label: 'Feedback',          cat: 0 }, { label: 'Homeostasis',      cat: 0 },
  { label: 'Entropy',           cat: 1 }, { label: 'Dissipative structures',cat: 1 },
  { label: 'Autopoiesis',       cat: 0 }, { label: 'Game theory',      cat: 2 },
  { label: 'Network topology',  cat: 3 }, { label: 'Emergence',        cat: 0 },
  { label: 'Chaos theory',      cat: 1 }, { label: 'Nash equilibrium', cat: 2 },
  { label: 'Scale-free networks',cat: 3 }, { label: 'Prisoner\'s dilemma',cat: 2 },
  { label: 'Complexity theory', cat: 1 }, { label: 'Small world networks',cat: 3 },
  { label: 'Tragedy of commons',cat: 2 }, { label: 'Phase transitions', cat: 1 },
];
export const GROUP_REAL_ITEMS_TONE = [
  { label: 'Feedback',          cat: 0 }, { label: 'Homeostasis',      cat: 0 },
  { label: 'Entropy',           cat: 1 }, { label: 'Dissipative structures',cat: 2 },
  { label: 'Autopoiesis',       cat: 2 }, { label: 'Game theory',      cat: 0 },
  { label: 'Network topology',  cat: 1 }, { label: 'Emergence',        cat: 0 },
  { label: 'Chaos theory',      cat: 1 }, { label: 'Nash equilibrium', cat: 0 },
  { label: 'Scale-free networks',cat: 1 }, { label: 'Prisoner\'s dilemma',cat: 0 },
  { label: 'Complexity theory', cat: 2 }, { label: 'Small world networks',cat: 1 },
  { label: 'Tragedy of commons',cat: 0 }, { label: 'Phase transitions', cat: 2 },
];
export const CLUSTER_NAMES_REAL_TOPIC = ['Biology / Cybernetics', 'Physics / Thermodynamics', 'Economics / Game theory', 'Network science'];
export const CLUSTER_NAMES_REAL_TONE  = ['Widely understood', 'Technical / Specialist', 'Specialist / Obscure', 'Mixed audience'];

// ─── PREDICT ──────────────────────────────────────────────────────────────────

// STARTER: System resilience scores over time — noisy but trending up after disruption
export const PREDICT_KNOWN  = [62, 58, 55, 61, 64, 60, 67, 71, 69, 74];
export const PREDICT_WEEKS  = ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10'];

// DEEPER: Network traffic after major outage — recovery with seasonal pattern
// Model anchors to the disruption period and underestimates recovery
export const PREDICT_DEEPER_DATA   = [940,960,970,980,1010,1020,1040,210,850,970,1050,1080];
export const PREDICT_DEEPER_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const PREDICT_DEEPER_ACTUAL = 1100; // January — full recovery, model still anchored to outage

// REAL: Ecosystem biodiversity index — logistic recovery then plateau
export const PREDICT_REAL_DATA = [
  18,22,29,38,50,65,81,97,112,124,
  133,139,144,147,149,150,151,151
];
export const PREDICT_REAL_LABELS = [
  'Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10',
  'Y11','Y12','Y13','Y14','Y15','Y16','Y17','Y18'
];
export const PREDICT_REAL_ACTUAL_W19 = 151; // Carrying capacity — model overprojects
