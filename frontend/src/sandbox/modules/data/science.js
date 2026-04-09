// ─── CATEGORY: SCIENCE ────────────────────────────────────────────────────────

// ─── RECOMMEND ────────────────────────────────────────────────────────────────

// STARTER: Scientific concepts with latent structural connections
export const REC_ITEMS = [
  'Natural selection', 'Entropy', 'Feedback loops', 'Statistical significance',
  'Control groups', 'Emergence', 'Half-life', 'Replication crisis',
  'Null hypothesis', 'Phase transitions'
];
export const REC_NEIGHBORS = {
  'Natural selection':       { 'Emergence': 'Both describe how complex, adaptive behavior arises from simple local rules without central direction', 'Feedback loops': 'Both are driven by differential reproduction or reinforcement — what works propagates, what does not fades', 'Statistical significance': 'Both are about detecting real signal in noisy data where chance can mimic pattern' },
  'Entropy':                 { 'Phase transitions': 'Both describe systems approaching and crossing boundaries where behavior changes qualitatively', 'Feedback loops': 'Both describe how systems move toward or away from equilibrium over time', 'Emergence': 'Both involve macro-level behavior that cannot be predicted by looking at individual components' },
  'Feedback loops':          { 'Emergence': 'Both explain how systems self-organize without anyone designing the outcome', 'Natural selection': 'Both are driven by reinforcement — what works propagates, what does not fades', 'Phase transitions': 'Both describe tipping points where small changes in one variable produce large changes in behavior' },
  'Statistical significance':{ 'Null hypothesis': 'Both are two sides of the same test — you cannot have one without understanding the other', 'Replication crisis': 'Both are deeply connected — the crisis emerged partly from misunderstanding what significance actually means', 'Control groups': 'Both are about isolating signal from noise by controlling for what you did not change' },
  'Control groups':          { 'Null hypothesis': 'Both are structural requirements for any experiment that wants to make a causal claim', 'Statistical significance': 'Both are about isolating signal from noise by controlling for what you did not change', 'Replication crisis': 'Both are linked — studies without proper controls are less likely to replicate' },
  'Emergence':               { 'Natural selection': 'Both describe how complex adaptive behavior arises from simple local rules', 'Entropy': 'Both involve macro-level behavior that cannot be predicted by looking at individual components', 'Feedback loops': 'Both explain how systems self-organize without anyone designing the outcome' },
  'Half-life':               { 'Phase transitions': 'Both are about rates of change — how fast a system moves toward a new state', 'Entropy': 'Both describe irreversible directional processes — systems move one way over time', 'Statistical significance': 'Both require understanding background rates to interpret whether a measured change is real' },
  'Replication crisis':      { 'Statistical significance': 'Both are deeply connected — the crisis emerged partly from misunderstanding what significance means', 'Control groups': 'Both are linked — studies without proper controls are less likely to replicate', 'Null hypothesis': 'Both expose the gap between what a study claims and what it actually proved' },
  'Null hypothesis':         { 'Statistical significance': 'Both are two sides of the same test — you cannot have one without the other', 'Control groups': 'Both are structural requirements for any experiment that wants to make a causal claim', 'Replication crisis': 'Both expose the gap between what a study claims and what it actually proved' },
  'Phase transitions':       { 'Feedback loops': 'Both describe tipping points where small changes produce large changes in behavior', 'Entropy': 'Both describe systems approaching and crossing boundaries where behavior changes qualitatively', 'Emergence': 'Both describe moments when quantity becomes quality — gradual change produces sudden new structure' }
};

// DEEPER: Cross-domain scientific ideas — latent structural parallels
export const REC_DEEPER_ITEMS = [
  'Punctuated equilibrium', 'Power laws', 'The observer effect',
  'Convergent evolution', 'Sensitivity to initial conditions', 'Regression to the mean',
  'Selection bias', 'Path dependence', 'Overfitting', 'Signal-to-noise ratio'
];
export const REC_DEEPER_NEIGHBORS = {
  'Punctuated equilibrium':         { 'Phase transitions': 'Both describe long periods of stability interrupted by rapid reorganization', 'Path dependence': 'Both explain why history matters — where you end up depends on the specific sequence of events', 'Sensitivity to initial conditions': 'Both show that small differences early in a process can lead to dramatically different outcomes' },
  'Power laws':                     { 'Emergence': 'Both appear wherever local interactions produce global structure — cities, earthquakes, wealth distributions', 'Selection bias': 'Both require careful attention to what you are measuring and what the sample actually represents', 'Regression to the mean': 'Both describe how extreme values are rarely sustained — most things pull toward the center over time' },
  'The observer effect':            { 'Selection bias': 'Both involve the act of measurement changing what is being measured', 'Overfitting': 'Both describe how too much attention to a specific case can mislead conclusions about the general case', 'Signal-to-noise ratio': 'Both are about separating what the data actually shows from the artifacts of how it was collected' },
  'Convergent evolution':           { 'Emergence': 'Both describe similar solutions arriving independently through different paths', 'Path dependence': 'Both show that different histories can converge on similar outcomes under similar pressures', 'Power laws': 'Both appear across domains — similar structures in biology, economics, language, and physics' },
  'Sensitivity to initial conditions':{ 'Punctuated equilibrium': 'Both show that small differences early in a process can lead to dramatically different outcomes', 'Feedback loops': 'Both involve systems where small perturbations amplify rather than dampen over time', 'Path dependence': 'Both explain why identical systems with slightly different starting conditions diverge over time' },
  'Regression to the mean':         { 'Power laws': 'Both describe how extreme values are rarely sustained — most things pull toward the center over time', 'Statistical significance': 'Both are frequently misunderstood — many "effects" are just regression to the mean', 'Selection bias': 'Both explain why the most extreme results in any sample are unlikely to hold up when you look again' },
  'Selection bias':                 { 'The observer effect': 'Both involve the act of measurement changing what is being measured', 'Regression to the mean': 'Both explain why the most extreme results in any sample are unlikely to hold up', 'Replication crisis': 'Both are structural causes of findings that cannot be replicated' },
  'Path dependence':                { 'Punctuated equilibrium': 'Both explain why history matters — where you end up depends on the sequence of events', 'Sensitivity to initial conditions': 'Both explain why identical systems with slightly different starting conditions diverge', 'Convergent evolution': 'Both show that different histories can converge on similar outcomes under similar pressures' },
  'Overfitting':                    { 'The observer effect': 'Both describe how too much attention to a specific case can mislead conclusions about the general case', 'Replication crisis': 'Both are structural causes of findings that look real but do not survive contact with new data', 'Signal-to-noise ratio': 'Both are about knowing when you are extracting real signal vs. fitting to noise' },
  'Signal-to-noise ratio':          { 'The observer effect': 'Both are about separating what the data shows from artifacts of how it was collected', 'Overfitting': 'Both are about knowing when you are extracting real signal vs. fitting to noise', 'Statistical significance': 'Both are different framings of the same fundamental question: is this real or is this chance?' }
};

// REAL: Research paper citation co-occurrence across disciplines
export const REC_REAL_ITEMS = [
  'CRISPR-Cas9', 'mRNA vaccines', 'AlphaFold',
  'Large language models', 'Quantum error correction', 'Exoplanet detection',
  'Microbiome research', 'Neuroplasticity', 'Dark matter detection', 'Fusion energy'
];
export const REC_REAL_NEIGHBORS = {
  'CRISPR-Cas9':             { 'mRNA vaccines': 'Cited together in 71% of papers about therapeutic biotechnology and precision medicine', 'AlphaFold': 'Cited together by 63% — both are tools that transformed what was previously too slow to be practical', 'Microbiome research': 'Cited together by 48% — gene editing tools are being applied to microbiome modification' },
  'mRNA vaccines':           { 'CRISPR-Cas9': 'Cited together in 71% of papers about therapeutic biotechnology', 'Microbiome research': 'Cited together by 55% — both inform precision medicine and individualized treatment', 'Neuroplasticity': 'Cited together by 41% — both challenge previous assumptions about what is fixed in biology' },
  'AlphaFold':               { 'CRISPR-Cas9': 'Cited together by 63% — both transformed what was previously too slow to be practical', 'Large language models': 'Cited together by 69% — both are seen as demonstrations of the same underlying capability shift in AI', 'Microbiome research': 'Cited together by 44% — protein structure prediction is applied to microbiome-derived proteins' },
  'Large language models':   { 'AlphaFold': 'Cited together by 69% — both are seen as demonstrations of the same underlying capability shift', 'Quantum error correction': 'Cited together by 38% — both appear in papers about the future of computing', 'Neuroplasticity': 'Cited together by 42% — both are cited in papers about intelligence, learning, and cognition' },
  'Quantum error correction':{ 'Fusion energy': 'Cited together by 61% — both appear in papers about long-horizon energy and compute infrastructure', 'Large language models': 'Cited together by 38% — both appear in papers about the future of computing', 'Dark matter detection': 'Cited together by 44% — both require extreme isolation from environmental interference' },
  'Exoplanet detection':     { 'Dark matter detection': 'Cited together by 67% — both are searches for things that are inferred from effects rather than directly observed', 'Fusion energy': 'Cited together by 39% — both are cited in papers about long-horizon scientific ambition', 'Neuroplasticity': 'Cited together by 28% — both cited in papers about limits of detection and what it means to observe' },
  'Microbiome research':     { 'mRNA vaccines': 'Cited together by 55% — both inform precision medicine and individualized treatment', 'Neuroplasticity': 'Cited together by 58% — the gut-brain axis is one of the most active areas of overlap', 'CRISPR-Cas9': 'Cited together by 48% — gene editing tools are being applied to microbiome modification' },
  'Neuroplasticity':         { 'Microbiome research': 'Cited together by 58% — the gut-brain axis is one of the most active areas of overlap', 'Large language models': 'Cited together by 42% — both cited in papers about intelligence, learning, and cognition', 'mRNA vaccines': 'Cited together by 41% — both challenge previous assumptions about what is fixed in biology' },
  'Dark matter detection':   { 'Exoplanet detection': 'Cited together by 67% — both are searches for things inferred from effects rather than directly observed', 'Quantum error correction': 'Cited together by 44% — both require extreme isolation from environmental interference', 'Fusion energy': 'Cited together by 51% — both cited in papers about large-scale physics infrastructure investment' },
  'Fusion energy':           { 'Quantum error correction': 'Cited together by 61% — both appear in papers about long-horizon energy and compute infrastructure', 'Dark matter detection': 'Cited together by 51% — both cited in papers about large-scale physics infrastructure investment', 'Exoplanet detection': 'Cited together by 39% — both cited in papers about long-horizon scientific ambition' }
};

// ─── GROUP ────────────────────────────────────────────────────────────────────

// STARTER: Scientific fields — non-obvious clustering by method, not subject
export const GROUP_ITEMS = [
  { label: 'Epidemiology',    cat: 0 }, { label: 'Economics',      cat: 0 },
  { label: 'Psychology',      cat: 0 }, { label: 'Political science',cat: 0 },
  { label: 'Physics',         cat: 1 }, { label: 'Chemistry',       cat: 1 },
  { label: 'Astronomy',       cat: 1 }, { label: 'Materials science',cat: 1 },
  { label: 'Ecology',         cat: 2 }, { label: 'Evolutionary biology',cat: 2 },
  { label: 'Geology',         cat: 2 }, { label: 'Oceanography',    cat: 2 },
  { label: 'Computer science',cat: 1 }, { label: 'Neuroscience',    cat: 0 },
  { label: 'Sociology',       cat: 0 },
];
export const CLUSTER_NAMES_STARTER = [
  'Social / Behavioral', 'Exact / Physical',
  'Earth / Life Systems', 'Mixed'
];

// DEEPER: Scientific discoveries — ambiguous by cause vs. impact
export const GROUP_DEEPER_ITEMS = [
  { label: 'CRISPR',                cat: 0 }, { label: 'Penicillin',           cat: 0 },
  { label: 'General relativity',    cat: 1 }, { label: 'Quantum mechanics',    cat: 1 },
  { label: 'Natural selection',     cat: 2 }, { label: 'Germ theory',          cat: 0 },
  { label: 'The double helix',      cat: 2 }, { label: 'Plate tectonics',      cat: 3 },
  { label: 'The Big Bang model',    cat: 1 }, { label: 'Vaccination',          cat: 0 },
  { label: 'Semiconductor physics', cat: 1 }, { label: 'Climate science',      cat: 3 },
  { label: 'Heliocentrism',         cat: 1 }, { label: 'Statistical methods',  cat: 2 },
  { label: 'The microbiome',        cat: 2 },
];
export const CLUSTER_NAMES_DEEPER = [
  'Medicine / Biology applied', 'Physics / Cosmology',
  'Life / Evolution', 'Earth / Systems'
];

// REAL: Science papers grouped by methodology vs. by field
export const GROUP_REAL_ITEMS_TOPIC = [
  { label: 'Randomized controlled trial', cat: 0 }, { label: 'Meta-analysis',       cat: 0 },
  { label: 'Genome-wide association',     cat: 1 }, { label: 'Protein structure',   cat: 1 },
  { label: 'Large hadron collider data',  cat: 2 }, { label: 'Gravitational waves',  cat: 2 },
  { label: 'Climate modeling',            cat: 3 }, { label: 'Ocean temperature',   cat: 3 },
  { label: 'Neuroimaging',                cat: 0 }, { label: 'Epidemiological study',cat: 0 },
  { label: 'CRISPR screen',               cat: 1 }, { label: 'Single-cell RNA seq',  cat: 1 },
  { label: 'Particle collision data',     cat: 2 }, { label: 'Ice core analysis',   cat: 3 },
  { label: 'fMRI study',                  cat: 0 }, { label: 'Species distribution', cat: 3 },
];
export const GROUP_REAL_ITEMS_TONE = [
  { label: 'Randomized controlled trial', cat: 0 }, { label: 'Meta-analysis',       cat: 0 },
  { label: 'Genome-wide association',     cat: 1 }, { label: 'Protein structure',   cat: 2 },
  { label: 'Large hadron collider data',  cat: 1 }, { label: 'Gravitational waves',  cat: 2 },
  { label: 'Climate modeling',            cat: 3 }, { label: 'Ocean temperature',   cat: 3 },
  { label: 'Neuroimaging',                cat: 1 }, { label: 'Epidemiological study',cat: 0 },
  { label: 'CRISPR screen',               cat: 1 }, { label: 'Single-cell RNA seq',  cat: 1 },
  { label: 'Particle collision data',     cat: 2 }, { label: 'Ice core analysis',   cat: 3 },
  { label: 'fMRI study',                  cat: 1 }, { label: 'Species distribution', cat: 3 },
];
export const CLUSTER_NAMES_REAL_TOPIC = ['Human health / Behavior', 'Molecular / Genetic', 'Physics / Astrophysics', 'Earth / Climate'];
export const CLUSTER_NAMES_REAL_TONE  = ['High policy impact', 'High tech complexity', 'High public wonder', 'High urgency'];

// ─── PREDICT ──────────────────────────────────────────────────────────────────

// STARTER: CO2 atmospheric concentration — steady upward drift with noise
export const PREDICT_KNOWN  = [411,412,411,413,414,413,415,416,415,417];
export const PREDICT_WEEKS  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'];

// DEEPER: Flu cases by month — strong seasonal pattern
// Model projects continued growth — misses the summer drop
export const PREDICT_DEEPER_DATA   = [420,890,1840,2100,1650,720,310,180,260,680,1200,1750];
export const PREDICT_DEEPER_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const PREDICT_DEEPER_ACTUAL = 380; // January returns to baseline — model misses seasonal cycle

// REAL: Species population recovery — logistic growth then ceiling
export const PREDICT_REAL_DATA = [
  140,168,201,241,289,346,415,496,591,702,
  829,965,1089,1194,1272,1320,1350,1368
];
export const PREDICT_REAL_LABELS = [
  'Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10',
  'Y11','Y12','Y13','Y14','Y15','Y16','Y17','Y18'
];
export const PREDICT_REAL_ACTUAL_W19 = 1378; // Near carrying capacity — model will overshoot
