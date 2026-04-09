// ─── CATEGORY: HISTORY ────────────────────────────────────────────────────────

// ─── RECOMMEND ────────────────────────────────────────────────────────────────

// STARTER: Historical events with latent structural connections
export const REC_ITEMS = [
  'The printing press', 'The Black Death', 'The French Revolution',
  'The Industrial Revolution', 'The fall of Rome', 'The Silk Road',
  'The Enlightenment', 'World War I', 'The Cold War', 'The Great Depression'
];
export const REC_NEIGHBORS = {
  'The printing press':       { 'The Enlightenment': 'Both were about making ideas movable — the press made it physical, the Enlightenment made it intellectual', 'The French Revolution': 'Both distributed power that had previously been controlled by a narrow elite', 'The Industrial Revolution': 'Both transformed the relationship between labor, knowledge, and who gets to use each' },
  'The Black Death':          { 'The French Revolution': 'Both are accelerants — they did not cause the structural tensions but they forced a resolution much faster', 'The Great Depression': 'Both are economic shocks whose full effects took a generation to work through', 'World War I': 'Both exposed how fragile social institutions become under sudden catastrophic pressure' },
  'The French Revolution':    { 'The Cold War': 'Both were ideological contests about what kind of society should organize the world', 'The Enlightenment': 'Both were about who has the right to question authority and on what grounds', 'The Black Death': 'Both are accelerants — they forced a resolution of structural tensions much faster' },
  'The Industrial Revolution':{ 'The Great Depression': 'Both are about what happens when economic systems change faster than the institutions built around them', 'The printing press': 'Both transformed the relationship between labor, knowledge, and who gets to use each', 'The Silk Road': 'Both created webs of interdependence that connected economies in ways that made local shocks global' },
  'The fall of Rome':         { 'World War I': 'Both are studied as failures of overextension — what happens when a system grows beyond its ability to hold together', 'The Cold War': 'Both ended systems of power that had seemed permanent until they suddenly were not', 'The Silk Road': 'Both shaped which civilizations accumulated capital and which did not across centuries' },
  'The Silk Road':            { 'The Industrial Revolution': 'Both created webs of interdependence that connected economies in ways that made local shocks global', 'The Black Death': 'Both demonstrate that trade routes are also transmission routes — for goods, ideas, and disease', 'The printing press': 'Both are about how information and value move between civilizations' },
  'The Enlightenment':        { 'The printing press': 'Both were about making ideas movable — one physically, one intellectually', 'The French Revolution': 'Both were about who has the right to question authority and on what grounds', 'The Cold War': 'Both were ideological contests about what kind of principles should govern human society' },
  'World War I':              { 'The Great Depression': 'Both are studied as case studies in how systemic risk propagates through interconnected systems', 'The fall of Rome': 'Both are studied as failures of overextension — systems that grew beyond their ability to hold together', 'The Cold War': 'Both created the architecture of the next fifty years of international relations' },
  'The Cold War':             { 'The French Revolution': 'Both were ideological contests about what kind of society should organize the world', 'The Enlightenment': 'Both were contests about what kind of principles should govern human society', 'The fall of Rome': 'Both ended systems of power that had seemed permanent until they suddenly were not' },
  'The Great Depression':     { 'World War I': 'Both are case studies in how systemic risk propagates through interconnected systems', 'The Industrial Revolution': 'Both are about what happens when economic systems change faster than the institutions built around them', 'The Black Death': 'Both are economic shocks whose full effects took a generation to work through' }
};

// DEEPER: Historical patterns — structural recurrences across time
export const REC_DEEPER_ITEMS = [
  'Imperial overextension', 'Currency debasement', 'Peasant revolts',
  'Technological displacement', 'Colonial extraction', 'Ideological purges',
  'Financial panics', 'Border realignment', 'Demographic collapse', 'Information control'
];
export const REC_DEEPER_NEIGHBORS = {
  'Imperial overextension':   { 'Currency debasement': 'Both are symptoms of empires spending more on maintenance than they can sustainably extract', 'Financial panics': 'Both involve systems that appear stable until the moment they do not', 'Demographic collapse': 'Both are structural — they unfold slowly and then suddenly' },
  'Currency debasement':      { 'Financial panics': 'Both are about the gap between what a system claims to be worth and what it actually is', 'Imperial overextension': 'Both are symptoms of empires spending more on maintenance than they can sustainably extract', 'Ideological purges': 'Both are tools used by failing regimes to explain away structural problems as problems of loyalty' },
  'Peasant revolts':          { 'Technological displacement': 'Both are responses to economic disruption that concentrates gains in fewer hands', 'Border realignment': 'Both are often the visible result of longer demographic and economic pressures building invisibly', 'Demographic collapse': 'Both accelerate when the gap between the powerful and the powerless becomes unsustainable' },
  'Technological displacement':{ 'Colonial extraction': 'Both produce large winners and large losers in ways that take decades to fully appear', 'Peasant revolts': 'Both are responses to economic disruption that concentrates gains in fewer hands', 'Information control': 'Both change who gets to define what work is worth and who gets to do it' },
  'Colonial extraction':      { 'Technological displacement': 'Both produce large winners and large losers in ways that take decades to fully appear', 'Currency debasement': 'Both are about the gap between formal claims of value and actual flows of wealth', 'Demographic collapse': 'Both are often connected — extraction creates the conditions for population instability' },
  'Ideological purges':       { 'Information control': 'Both are about what a society is permitted to remember and what it is required to forget', 'Currency debasement': 'Both are tools used by failing regimes to explain away structural problems as problems of loyalty', 'Demographic collapse': 'Both are often symptoms of the same underlying political crisis' },
  'Financial panics':         { 'Imperial overextension': 'Both involve systems that appear stable until the moment they do not', 'Currency debasement': 'Both are about the gap between what a system claims to be worth and what it actually is', 'Border realignment': 'Both often follow from the same underlying breakdown of a previously stable order' },
  'Border realignment':       { 'Demographic collapse': 'Both are often driven by the same forces — war, disease, and the movement of populations', 'Peasant revolts': 'Both are often the visible result of longer demographic and economic pressures building invisibly', 'Financial panics': 'Both often follow from the same underlying breakdown of a previously stable order' },
  'Demographic collapse':     { 'Border realignment': 'Both are often driven by the same forces — war, disease, and the movement of populations', 'Imperial overextension': 'Both are structural — they unfold slowly and then suddenly', 'Colonial extraction': 'Both are often connected — extraction creates the conditions for population instability' },
  'Information control':      { 'Ideological purges': 'Both are about what a society is permitted to remember and what it is required to forget', 'Technological displacement': 'Both change who gets to define what work is worth and who gets to do it', 'Colonial extraction': 'Both shape which stories about the past get told and which get erased' }
};

// REAL: Historical citations co-occurrence — what scholars cite together
export const REC_REAL_ITEMS = [
  'The Treaty of Westphalia', 'The Magna Carta', 'The Marshall Plan',
  'The Congress of Vienna', 'The Bretton Woods Agreement', 'The Atlantic Charter',
  'The Treaty of Versailles', 'The Declaration of Independence', 'The UN Charter', 'The Geneva Conventions'
];
export const REC_REAL_NEIGHBORS = {
  'The Treaty of Westphalia':      { 'The UN Charter': 'Cited together in 78% of papers on sovereignty and the state system — Westphalia is the origin, the UN Charter is the revision', 'The Congress of Vienna': 'Cited together by 71% — both are frameworks for managing great power relations after systemic breakdown', 'The Bretton Woods Agreement': 'Cited together by 55% — both created foundational rules for an international order' },
  'The Magna Carta':               { 'The Declaration of Independence': 'Cited together in 82% of papers on constitutional rights — one is the template, the other is the application', 'The Atlantic Charter': 'Cited together by 64% — both are foundational texts about the relationship between power and individual rights', 'The Geneva Conventions': 'Cited together by 58% — both set limits on what power can do to individuals' },
  'The Marshall Plan':             { 'The Bretton Woods Agreement': 'Cited together in 74% of papers on post-WWII order — the financial architecture and the recovery program are inseparable', 'The Atlantic Charter': 'Cited together by 69% — both are pillars of the American-led international order after 1945', 'The Treaty of Versailles': 'Cited together by 61% — the Marshall Plan is routinely framed as the lesson learned from Versailles' },
  'The Congress of Vienna':        { 'The Treaty of Westphalia': 'Cited together by 71% — both are frameworks for managing great power relations after systemic breakdown', 'The Treaty of Versailles': 'Cited together by 68% — both are case studies in how peace settlements either create stability or plant seeds of future conflict', 'The UN Charter': 'Cited together by 54% — a lineage: Westphalia to Vienna to the UN as successive attempts at international order' },
  'The Bretton Woods Agreement':   { 'The Marshall Plan': 'Cited together in 74% — the financial architecture and the recovery program are inseparable', 'The UN Charter': 'Cited together by 67% — both are pillars of the 1945 international institutional order', 'The Treaty of Westphalia': 'Cited together by 55% — both created foundational rules for an international order' },
  'The Atlantic Charter':          { 'The UN Charter': 'Cited together in 76% — the Atlantic Charter is the direct precursor to the UN Charter', 'The Marshall Plan': 'Cited together by 69% — both are pillars of the American-led international order after 1945', 'The Magna Carta': 'Cited together by 64% — both are foundational texts on power and individual rights' },
  'The Treaty of Versailles':      { 'The Marshall Plan': 'Cited together by 61% — the Marshall Plan is routinely framed as the lesson learned from Versailles', 'The Congress of Vienna': 'Cited together by 68% — both are case studies in how peace settlements either create stability or plant seeds of conflict', 'The UN Charter': 'Cited together by 59% — Versailles is invoked as the cautionary tale, the UN Charter as the correction' },
  'The Declaration of Independence':{ 'The Magna Carta': 'Cited together in 82% of papers on constitutional rights — one is the template, the other is the application', 'The Atlantic Charter': 'Cited together by 71% — both are founding documents for a rights-based vision of political order', 'The UN Charter': 'Cited together by 64% — both are cited in the intellectual lineage of rights-based international norms' },
  'The UN Charter':                { 'The Atlantic Charter': 'Cited together in 76% — the Atlantic Charter is the direct precursor to the UN Charter', 'The Bretton Woods Agreement': 'Cited together by 67% — both are pillars of the 1945 international institutional order', 'The Treaty of Westphalia': 'Cited together by 78% — Westphalia is the origin, the UN Charter is the revision' },
  'The Geneva Conventions':        { 'The Magna Carta': 'Cited together by 58% — both set limits on what power can do to individuals', 'The UN Charter': 'Cited together by 72% — both define the legal floor below which conduct in conflict cannot fall', 'The Atlantic Charter': 'Cited together by 61% — both belong to the same postwar attempt to codify the limits of violence' }
};

// ─── GROUP ────────────────────────────────────────────────────────────────────

// STARTER: Historical empires — grouped by expansion model, not geography
export const GROUP_ITEMS = [
  { label: 'Roman Empire',      cat: 0 }, { label: 'Ottoman Empire',    cat: 0 },
  { label: 'British Empire',    cat: 1 }, { label: 'Spanish Empire',    cat: 1 },
  { label: 'Mongol Empire',     cat: 2 }, { label: 'Alexander\'s Empire',cat: 2 },
  { label: 'Han Dynasty',       cat: 0 }, { label: 'Byzantine Empire',  cat: 0 },
  { label: 'Portuguese Empire', cat: 1 }, { label: 'Dutch Empire',      cat: 1 },
  { label: 'Aztec Empire',      cat: 3 }, { label: 'Inca Empire',       cat: 3 },
  { label: 'Maurya Empire',     cat: 0 }, { label: 'French Empire',     cat: 2 },
  { label: 'Mughal Empire',     cat: 3 },
];
export const CLUSTER_NAMES_STARTER = [
  'Land-based / Administrative', 'Maritime / Trade',
  'Military expansion / Fast', 'Regional consolidation'
];

// DEEPER: Causes of major wars — ambiguous, overlapping factors
export const GROUP_DEEPER_ITEMS = [
  { label: 'Alliance systems',    cat: 0 }, { label: 'Arms races',         cat: 0 },
  { label: 'Colonial competition',cat: 1 }, { label: 'Resource scarcity',  cat: 1 },
  { label: 'Nationalism',         cat: 2 }, { label: 'Ethnic conflict',    cat: 2 },
  { label: 'Failed diplomacy',    cat: 0 }, { label: 'Assassination',      cat: 3 },
  { label: 'Economic crisis',     cat: 1 }, { label: 'Ideology',           cat: 2 },
  { label: 'Miscalculation',      cat: 3 }, { label: 'Domestic politics',  cat: 3 },
  { label: 'Naval rivalry',       cat: 0 }, { label: 'Revolution',         cat: 2 },
  { label: 'Trade disputes',      cat: 1 },
];
export const CLUSTER_NAMES_DEEPER = [
  'Structural / Systemic', 'Economic / Material',
  'Political / Ideological', 'Contingent / Accidental'
];

// REAL: Historical events grouped by cause vs. by consequence
export const GROUP_REAL_ITEMS_TOPIC = [
  { label: 'French Revolution',    cat: 0 }, { label: 'Russian Revolution',  cat: 0 },
  { label: 'American Revolution',  cat: 0 }, { label: 'Industrial Revolution',cat: 1 },
  { label: 'Agricultural Revolution',cat: 1},{ label: 'Green Revolution',    cat: 1 },
  { label: 'World War I',          cat: 2 }, { label: 'World War II',         cat: 2 },
  { label: 'Cold War',             cat: 2 }, { label: 'The Black Death',      cat: 3 },
  { label: 'Spanish Flu',          cat: 3 }, { label: 'Great Famine',        cat: 3 },
  { label: 'Decolonization',       cat: 0 }, { label: 'The Great Depression', cat: 1 },
  { label: 'The Reformation',      cat: 0 }, { label: 'Transatlantic slavery',cat: 3 },
];
export const GROUP_REAL_ITEMS_TONE = [
  { label: 'French Revolution',    cat: 1 }, { label: 'Russian Revolution',  cat: 0 },
  { label: 'American Revolution',  cat: 1 }, { label: 'Industrial Revolution',cat: 1 },
  { label: 'Agricultural Revolution',cat: 2},{ label: 'Green Revolution',    cat: 2 },
  { label: 'World War I',          cat: 0 }, { label: 'World War II',         cat: 0 },
  { label: 'Cold War',             cat: 3 }, { label: 'The Black Death',      cat: 0 },
  { label: 'Spanish Flu',          cat: 0 }, { label: 'Great Famine',        cat: 0 },
  { label: 'Decolonization',       cat: 3 }, { label: 'The Great Depression', cat: 0 },
  { label: 'The Reformation',      cat: 3 }, { label: 'Transatlantic slavery',cat: 0 },
];
export const CLUSTER_NAMES_REAL_TOPIC = ['Political / Ideological', 'Economic / Technological', 'Military / Conflict', 'Disease / Famine'];
export const CLUSTER_NAMES_REAL_TONE  = ['Catastrophic', 'Transformative / Positive', 'Gradual / Slow', 'Contested / Unresolved'];

// ─── PREDICT ──────────────────────────────────────────────────────────────────

// STARTER: Urban population growth — noisy but clear upward trend
export const PREDICT_KNOWN  = [2.1, 2.3, 2.2, 2.5, 2.6, 2.8, 2.7, 3.0, 3.1, 3.3];
export const PREDICT_WEEKS  = ['1800','1820','1840','1860','1880','1900','1920','1940','1960','1980'];

// DEEPER: Trade volume with war disruption — trend with structural break
// Model misses the recovery pattern after the disruption
export const PREDICT_DEEPER_DATA   = [100,118,138,142,155,162,168,71,44,81,120,151];
export const PREDICT_DEEPER_LABELS = ['1913','1920','1925','1929','1932','1935','1937','1940','1943','1945','1948','1950'];
export const PREDICT_DEEPER_ACTUAL = 168; // 1955 — full recovery, model anchors to the disruption

// REAL: Literacy rates — S-curve adoption across a century
export const PREDICT_REAL_DATA = [
  12,14,17,21,26,33,41,50,59,67,74,79,83,86,88,89,90,90
];
export const PREDICT_REAL_LABELS = [
  '1820','1830','1840','1850','1860','1870','1880','1890',
  '1900','1910','1920','1930','1940','1950','1960','1970','1980','1990'
];
export const PREDICT_REAL_ACTUAL_W19 = 90; // 2000 — plateau at ~90%, model overprojects toward 100%
