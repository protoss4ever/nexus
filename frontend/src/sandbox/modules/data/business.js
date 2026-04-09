// ─── CATEGORY: BUSINESS ───────────────────────────────────────────────────────

// ─── RECOMMEND ────────────────────────────────────────────────────────────────

// STARTER: Business concepts with latent connections
export const REC_ITEMS = [
  'Cold outreach', 'Pricing strategy', 'Customer interviews',
  'Gross margin', 'Churn rate', 'Product roadmap',
  'Brand voice', 'Sales pipeline', 'Unit economics', 'Positioning'
];
export const REC_NEIGHBORS = {
  'Cold outreach':       { 'Sales pipeline': 'Both are about generating and managing forward motion toward a close', 'Positioning': 'Both are more effective when you know exactly who you are talking to', 'Brand voice': 'Both depend on clarity about what makes you different' },
  'Pricing strategy':    { 'Unit economics': 'Both determine whether growth actually creates value or destroys it', 'Gross margin': 'Both are structural — they shape every business decision downstream', 'Positioning': 'Both signal what kind of customer you want and what you are worth to them' },
  'Customer interviews': { 'Product roadmap': 'Both are useless without the other — one listens, one decides', 'Churn rate': 'Both diagnose the same problem from different directions', 'Positioning': 'Both are grounded in understanding what customers actually value' },
  'Gross margin':        { 'Unit economics': 'Both are about whether the business model works at the transaction level', 'Pricing strategy': 'Both are structural — they shape every business decision downstream', 'Churn rate': 'Both determine whether the company can survive growth' },
  'Churn rate':          { 'Customer interviews': 'Both diagnose the same problem from different directions', 'Gross margin': 'Both determine whether the company can survive growth', 'Unit economics': 'Both reveal whether the product is delivering enough value to keep customers' },
  'Product roadmap':     { 'Customer interviews': 'Both are useless without the other — one listens, one decides', 'Positioning': 'Both require a clear theory of what matters and what does not', 'Brand voice': 'Both express strategic choices about who you are building for' },
  'Brand voice':         { 'Positioning': 'Both are about what you want to mean to the people you want to reach', 'Cold outreach': 'Both depend on clarity about what makes you different', 'Product roadmap': 'Both express strategic choices about who you are building for' },
  'Sales pipeline':      { 'Cold outreach': 'Both are about generating and managing forward motion toward a close', 'Churn rate': 'Both measure whether customers are coming in faster than they are leaving', 'Unit economics': 'Both track whether the revenue model is working in practice' },
  'Unit economics':      { 'Gross margin': 'Both are about whether the business model works at the transaction level', 'Pricing strategy': 'Both determine whether growth actually creates value or destroys it', 'Churn rate': 'Both reveal whether the product is delivering enough value to keep customers' },
  'Positioning':         { 'Brand voice': 'Both are about what you want to mean to the people you want to reach', 'Pricing strategy': 'Both signal what kind of customer you want and what you are worth to them', 'Customer interviews': 'Both are grounded in understanding what customers actually value' }
};

// DEEPER: Strategic concepts — cross-domain latent connections
export const REC_DEEPER_ITEMS = [
  'Flywheel effects', 'Bottleneck analysis', 'Price elasticity',
  'Network effects', 'Jobs to be done', 'Contribution margin',
  'Customer lifetime value', 'Distribution moat', 'Narrative framing', 'Loss aversion'
];
export const REC_DEEPER_NEIGHBORS = {
  'Flywheel effects':        { 'Network effects': 'Both describe systems where each unit of growth makes the next unit easier', 'Distribution moat': 'Both create structural advantages that compound and are hard to displace', 'Contribution margin': 'Both become meaningful only at scale — small flywheels are noise' },
  'Bottleneck analysis':     { 'Contribution margin': 'Both ask: where is the leverage point in this system?', 'Jobs to be done': 'Both require finding the actual constraint, not the visible symptom', 'Price elasticity': 'Both reveal that fixing the obvious problem often does not fix the actual problem' },
  'Price elasticity':        { 'Loss aversion': 'Both explain why customers respond differently to the same change framed differently', 'Contribution margin': 'Both determine which customers actually drive profitability', 'Narrative framing': 'Both show that perception of value is as real as actual value in pricing decisions' },
  'Network effects':         { 'Flywheel effects': 'Both describe systems where each unit of growth makes the next unit easier', 'Distribution moat': 'Both are structural — the product gets harder to displace as it grows', 'Customer lifetime value': 'Both mean early users are worth more than their initial purchase suggests' },
  'Jobs to be done':         { 'Customer lifetime value': 'Both are rooted in understanding why customers actually keep using a product', 'Bottleneck analysis': 'Both require identifying the actual constraint, not the visible symptom', 'Narrative framing': 'Both explain why rational product improvements sometimes fail to improve retention' },
  'Contribution margin':     { 'Price elasticity': 'Both determine which customers and segments actually drive profitability', 'Bottleneck analysis': 'Both ask: where is the leverage point in this system?', 'Flywheel effects': 'Both become meaningful only at scale' },
  'Customer lifetime value': { 'Network effects': 'Both mean early users are worth more than their initial purchase suggests', 'Churn rate': 'Both measure the same thing from opposite ends — duration vs. departure', 'Jobs to be done': 'Both are rooted in understanding why customers actually keep using a product' },
  'Distribution moat':       { 'Flywheel effects': 'Both create structural advantages that compound and are hard to displace', 'Network effects': 'Both are structural — the product gets harder to displace as it grows', 'Narrative framing': 'Both determine who gets to tell the story of the market' },
  'Narrative framing':       { 'Positioning': 'Both are about controlling how decisions get made before the decision happens', 'Loss aversion': 'Both explain why the same facts produce different decisions depending on presentation', 'Distribution moat': 'Both determine who gets to tell the story of the market' },
  'Loss aversion':           { 'Price elasticity': 'Both explain why customers respond differently to the same change framed differently', 'Narrative framing': 'Both explain why the same facts produce different decisions depending on presentation', 'Jobs to be done': 'Both explain why rational product improvements sometimes fail to move behavior' }
};

// REAL: SaaS metrics co-occurrence — what tracks with what in practice
export const REC_REAL_ITEMS = [
  'Monthly recurring revenue', 'Net revenue retention', 'Payback period',
  'Customer acquisition cost', 'Activation rate', 'Expansion revenue',
  'Time to value', 'Support ticket volume', 'Feature adoption rate', 'Seat utilization'
];
export const REC_REAL_NEIGHBORS = {
  'Monthly recurring revenue':   { 'Net revenue retention': 'Tracked together in 84% of SaaS dashboards — NRR explains whether MRR is real or leaky', 'Expansion revenue': 'Tracked together by 71% — expansion is where MRR compounds without new CAC', 'Customer acquisition cost': 'Tracked together by 68% — MRR growth without CAC context is incomplete' },
  'Net revenue retention':       { 'Monthly recurring revenue': 'Tracked together in 84% — NRR explains whether MRR is real or leaky', 'Expansion revenue': 'Tracked together by 79% — expansion is the mechanism that drives NRR above 100%', 'Activation rate': 'Tracked together by 62% — low activation predicts future churn before it shows in NRR' },
  'Payback period':              { 'Customer acquisition cost': 'Tracked together in 91% of cases — payback period is CAC divided by monthly margin', 'Monthly recurring revenue': 'Tracked together by 73% — payback depends on how much MRR each customer generates', 'Time to value': 'Tracked together by 55% — faster time to value shortens payback by reducing early churn' },
  'Customer acquisition cost':   { 'Payback period': 'Tracked together in 91% — payback period is CAC divided by monthly margin', 'Activation rate': 'Tracked together by 66% — high CAC with low activation is a structural problem', 'Monthly recurring revenue': 'Tracked together by 68% — CAC without MRR context is incomplete' },
  'Activation rate':             { 'Time to value': 'Tracked together by 88% — activation and time to value are the same insight from different frames', 'Feature adoption rate': 'Tracked together by 74% — feature adoption explains what drives users to the activation moment', 'Support ticket volume': 'Tracked together by 61% — high tickets during onboarding signal activation friction' },
  'Expansion revenue':           { 'Net revenue retention': 'Tracked together by 79% — expansion is the mechanism that drives NRR above 100%', 'Seat utilization': 'Tracked together by 67% — low seat utilization predicts low expansion potential', 'Feature adoption rate': 'Tracked together by 58% — feature adoption predicts which accounts are ready to expand' },
  'Time to value':               { 'Activation rate': 'Tracked together by 88% — same insight from different frames', 'Support ticket volume': 'Tracked together by 72% — high support volume during trial signals poor time to value', 'Payback period': 'Tracked together by 55% — faster time to value shortens payback by reducing early churn' },
  'Support ticket volume':       { 'Time to value': 'Tracked together by 72% — high support during trial signals poor time to value', 'Activation rate': 'Tracked together by 61% — high tickets during onboarding signal activation friction', 'Feature adoption rate': 'Tracked together by 53% — support tickets cluster around features with adoption problems' },
  'Feature adoption rate':       { 'Activation rate': 'Tracked together by 74% — feature adoption explains what drives users to activation', 'Seat utilization': 'Tracked together by 69% — seats that do not adopt key features predict churn', 'Expansion revenue': 'Tracked together by 58% — feature adoption predicts which accounts are ready to expand' },
  'Seat utilization':            { 'Expansion revenue': 'Tracked together by 67% — low seat utilization predicts low expansion potential', 'Feature adoption rate': 'Tracked together by 69% — seats that do not adopt key features predict churn', 'Net revenue retention': 'Tracked together by 64% — seat utilization is a leading indicator of NRR movement' }
};

// ─── GROUP ────────────────────────────────────────────────────────────────────

// STARTER: Companies grouped by business model — not industry
export const GROUP_ITEMS = [
  { label: 'Spotify',    cat: 0 }, { label: 'Netflix',     cat: 0 },
  { label: 'Salesforce', cat: 0 }, { label: 'Slack',       cat: 0 },
  { label: 'Airbnb',     cat: 1 }, { label: 'Uber',        cat: 1 },
  { label: 'Etsy',       cat: 1 }, { label: 'Upwork',      cat: 1 },
  { label: 'Apple',      cat: 2 }, { label: 'Nike',        cat: 2 },
  { label: 'Patagonia',  cat: 2 }, { label: 'Dyson',       cat: 2 },
  { label: 'Google',     cat: 0 }, { label: 'Meta',        cat: 0 },
  { label: 'Amazon',     cat: 1 },
];
export const CLUSTER_NAMES_STARTER = [
  'Subscription / Platform', 'Marketplace / Two-sided',
  'Product / Brand', 'Mixed'
];

// DEEPER: Startup failure modes — overlapping, ambiguous causes
export const GROUP_DEEPER_ITEMS = [
  { label: 'No market need',      cat: 0 }, { label: 'Wrong timing',       cat: 0 },
  { label: 'Ran out of cash',     cat: 1 }, { label: 'Pricing issues',     cat: 1 },
  { label: 'Poor product',        cat: 2 }, { label: 'Ignored customers',  cat: 2 },
  { label: 'Bad co-founder fit',  cat: 3 }, { label: 'Team problems',      cat: 3 },
  { label: 'Outcompeted',         cat: 0 }, { label: 'Pivot too late',     cat: 2 },
  { label: 'Poor marketing',      cat: 1 }, { label: 'Legal issues',       cat: 3 },
  { label: 'Burned out founders', cat: 3 }, { label: 'Lost focus',         cat: 2 },
  { label: 'No distribution',     cat: 1 },
];
export const CLUSTER_NAMES_DEEPER = [
  'Market / Timing', 'Revenue / Financial',
  'Product / Execution', 'People / Team'
];

// REAL: Fortune 500 — by revenue source vs. public perception
export const GROUP_REAL_ITEMS_TOPIC = [
  { label: 'ExxonMobil',    cat: 0 }, { label: 'Shell',         cat: 0 },
  { label: 'JPMorgan',      cat: 1 }, { label: 'Goldman Sachs',  cat: 1 },
  { label: 'Walmart',       cat: 2 }, { label: 'Amazon',         cat: 2 },
  { label: 'UnitedHealth',  cat: 3 }, { label: 'CVS Health',     cat: 3 },
  { label: 'Apple',         cat: 2 }, { label: 'Microsoft',      cat: 1 },
  { label: 'Chevron',       cat: 0 }, { label: 'Berkshire',      cat: 1 },
  { label: 'McKesson',      cat: 3 }, { label: 'Costco',         cat: 2 },
  { label: 'BP',            cat: 0 }, { label: 'Cigna',          cat: 3 },
];
export const GROUP_REAL_ITEMS_TONE = [
  { label: 'ExxonMobil',    cat: 0 }, { label: 'Shell',         cat: 2 },
  { label: 'JPMorgan',      cat: 2 }, { label: 'Goldman Sachs',  cat: 0 },
  { label: 'Walmart',       cat: 2 }, { label: 'Amazon',         cat: 1 },
  { label: 'UnitedHealth',  cat: 0 }, { label: 'CVS Health',     cat: 2 },
  { label: 'Apple',         cat: 1 }, { label: 'Microsoft',      cat: 1 },
  { label: 'Chevron',       cat: 0 }, { label: 'Berkshire',      cat: 3 },
  { label: 'McKesson',      cat: 3 }, { label: 'Costco',         cat: 1 },
  { label: 'BP',            cat: 0 }, { label: 'Cigna',          cat: 0 },
];
export const CLUSTER_NAMES_REAL_TOPIC = ['Energy', 'Finance / Capital', 'Retail / Tech', 'Healthcare'];
export const CLUSTER_NAMES_REAL_TONE  = ['Scrutinized', 'Trusted / Liked', 'Neutral', 'Low-profile'];

// ─── PREDICT ──────────────────────────────────────────────────────────────────

// STARTER: Quarterly revenue — visible growth with noise
export const PREDICT_KNOWN  = [1.2, 1.4, 1.3, 1.6, 1.8, 1.7, 2.1, 2.0, 2.4, 2.6];
export const PREDICT_WEEKS  = ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10'];

// DEEPER: E-commerce monthly orders — trend with Black Friday spike
// Model projects continued growth — misses January drop-off
export const PREDICT_DEEPER_DATA   = [42,45,43,47,49,51,48,53,55,58,61,94];
export const PREDICT_DEEPER_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const PREDICT_DEEPER_ACTUAL = 46; // January — post-holiday drop the model misses

// REAL: B2B sales pipeline deals — S-curve to plateau
// Rapid early growth decelerates as addressable market fills
export const PREDICT_REAL_DATA = [
  3,8,18,34,55,79,105,128,147,162,173,181,186,189,191,192,193,193
];
export const PREDICT_REAL_LABELS = [
  'M1','M2','M3','M4','M5','M6','M7','M8','M9','M10',
  'M11','M12','M13','M14','M15','M16','M17','M18'
];
export const PREDICT_REAL_ACTUAL_W19 = 193; // Flat — model predicts continued growth
