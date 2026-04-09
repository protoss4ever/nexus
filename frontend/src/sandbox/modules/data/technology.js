// ─── CATEGORY: TECHNOLOGY ─────────────────────────────────────────────────────

// ─── RECOMMEND ────────────────────────────────────────────────────────────────

// STARTER: Tech concepts with latent structural connections
export const REC_ITEMS = [
  'Version control', 'API design', 'Caching', 'Load balancing',
  'Database indexing', 'Code review', 'Containerization', 'Logging',
  'Rate limiting', 'Feature flags'
];
export const REC_NEIGHBORS = {
  'Version control':    { 'Code review': 'Both are about making change visible, reversible, and understandable by others', 'Feature flags': 'Both allow teams to ship incrementally without committing to irreversible state', 'Logging': 'Both create a record of what happened and when, for different audiences' },
  'API design':         { 'Rate limiting': 'Both are about what you expose to the outside world and what constraints you place on access', 'Caching': 'Both directly determine the speed and cost of every request that comes through', 'Database indexing': 'Both sit at the boundary between what the system promises and what it can actually deliver' },
  'Caching':            { 'Database indexing': 'Both solve the same problem — making repeated data retrieval fast — at different layers', 'Load balancing': 'Both are about distributing work so no single point becomes the bottleneck', 'Rate limiting': 'Both protect the system from being overwhelmed by a sudden surge in demand' },
  'Load balancing':     { 'Caching': 'Both are about distributing work so no single point becomes the bottleneck', 'Rate limiting': 'Both are defensive infrastructure — they protect the system from itself and from others', 'Containerization': 'Both become necessary at the same inflection point: when one server is no longer enough' },
  'Database indexing':  { 'Caching': 'Both solve the same problem — making repeated data retrieval fast — at different layers', 'API design': 'Both sit at the boundary between what the system promises and what it can deliver', 'Logging': 'Both create invisible infrastructure that nobody notices until it is missing' },
  'Code review':        { 'Version control': 'Both are about making change visible, reversible, and understandable by others', 'Feature flags': 'Both are tools for managing risk when shipping changes to a live system', 'Logging': 'Both create a record that someone else needs to be able to read and understand' },
  'Containerization':   { 'Load balancing': 'Both become necessary at the same inflection point: when one server is no longer enough', 'Feature flags': 'Both exist to make deployment safer and more controllable', 'Caching': 'Both are about making systems more predictable under variable load' },
  'Logging':            { 'Rate limiting': 'Both are things that nobody asks for until the moment something goes wrong', 'Database indexing': 'Both create invisible infrastructure that nobody notices until it is missing', 'Code review': 'Both create a record that someone else needs to be able to read and understand' },
  'Rate limiting':      { 'Load balancing': 'Both are defensive infrastructure — they protect the system from itself and from others', 'Caching': 'Both protect the system from being overwhelmed by a sudden surge in demand', 'API design': 'Both are about what you expose to the outside world and what constraints you place on access' },
  'Feature flags':      { 'Version control': 'Both allow teams to ship incrementally without committing to irreversible state', 'Code review': 'Both are tools for managing risk when shipping changes to a live system', 'Containerization': 'Both exist to make deployment safer and more controllable' }
};

// DEEPER: Architecture patterns — structural cross-domain connections
export const REC_DEEPER_ITEMS = [
  'Event sourcing', 'CQRS', 'Circuit breaker', 'Idempotency',
  'Backpressure', 'Schema migration', 'Distributed tracing', 'Saga pattern',
  'Blue-green deployment', 'Chaos engineering'
];
export const REC_DEEPER_NEIGHBORS = {
  'Event sourcing':        { 'CQRS': 'Both treat the log of events as the source of truth rather than the current state', 'Saga pattern': 'Both are responses to the same problem: how do you manage state across distributed systems?', 'Distributed tracing': 'Both become necessary when the system is too complex to understand by reading a single codebase' },
  'CQRS':                  { 'Event sourcing': 'Both treat the log of events as the source of truth rather than the current state', 'Schema migration': 'Both require thinking carefully about how your data model changes over time', 'Idempotency': 'Both are about making operations safe to repeat and safe to reason about' },
  'Circuit breaker':       { 'Backpressure': 'Both are about what the system does when a dependency is failing or overloaded', 'Chaos engineering': 'Both exist because distributed systems fail in ways that are impossible to predict in advance', 'Distributed tracing': 'Both become essential at the same moment: when something is broken and nobody knows why' },
  'Idempotency':           { 'CQRS': 'Both are about making operations safe to repeat and safe to reason about', 'Saga pattern': 'Both deal with the fact that in distributed systems, messages can be delivered more than once', 'Schema migration': 'Both force you to think about what happens when the operation runs twice' },
  'Backpressure':          { 'Circuit breaker': 'Both are about what the system does when a dependency is failing or overloaded', 'Rate limiting': 'Both protect the system from being asked to do more than it can handle', 'Chaos engineering': 'Both are about understanding system behavior under stress before it matters' },
  'Schema migration':      { 'CQRS': 'Both require thinking carefully about how your data model changes over time', 'Idempotency': 'Both force you to think about what happens when the operation runs twice', 'Blue-green deployment': 'Both are about how you change a live system without breaking it' },
  'Distributed tracing':   { 'Event sourcing': 'Both become necessary when the system is too complex to understand by reading a single codebase', 'Circuit breaker': 'Both become essential when something is broken and nobody knows why', 'Chaos engineering': 'Both are tools for understanding what is actually happening inside a complex system' },
  'Saga pattern':          { 'Event sourcing': 'Both are responses to the same problem: managing state across distributed systems', 'Idempotency': 'Both deal with the fact that messages can be delivered more than once', 'Circuit breaker': 'Both handle partial failures in multi-step distributed workflows' },
  'Blue-green deployment': { 'Schema migration': 'Both are about how you change a live system without breaking it', 'Feature flags': 'Both are strategies for shipping changes gradually rather than all at once', 'Chaos engineering': 'Both are practices that become necessary once a single outage has real consequences' },
  'Chaos engineering':     { 'Circuit breaker': 'Both exist because distributed systems fail in ways impossible to predict in advance', 'Distributed tracing': 'Both are tools for understanding what is actually happening inside a complex system', 'Blue-green deployment': 'Both are practices that become necessary once a single outage has real consequences' }
};

// REAL: Stack Overflow developer survey co-occurrence — tools used together
export const REC_REAL_ITEMS = [
  'React', 'TypeScript', 'PostgreSQL', 'Docker',
  'Redis', 'GraphQL', 'Kubernetes', 'Terraform',
  'FastAPI', 'GitHub Actions'
];
export const REC_REAL_NEIGHBORS = {
  'React':          { 'TypeScript': 'Used together by 74% of React developers in production codebases', 'GraphQL': 'Used together by 58% — React + GraphQL is a common data-fetching pairing', 'GitHub Actions': 'Used together by 61% — CI/CD is the expected companion to modern frontend work' },
  'TypeScript':     { 'React': 'Used together by 74% of React developers in production codebases', 'GitHub Actions': 'Used together by 68% — typed codebases more often have automated pipelines', 'PostgreSQL': 'Used together by 52% — type safety extends naturally to the data layer' },
  'PostgreSQL':     { 'Docker': 'Used together by 71% — local containerized Postgres is standard dev environment', 'Redis': 'Used together by 64% — read caching in front of relational storage is a common pattern', 'TypeScript': 'Used together by 52% — type safety extends naturally to the data layer' },
  'Docker':         { 'PostgreSQL': 'Used together by 71% — local containerized Postgres is standard dev environment', 'Kubernetes': 'Used together by 69% — Docker is the prerequisite for Kubernetes deployment', 'GitHub Actions': 'Used together by 73% — container builds are the most common CI/CD target' },
  'Redis':          { 'PostgreSQL': 'Used together by 64% — read caching in front of relational storage is a common pattern', 'FastAPI': 'Used together by 58% — session management and response caching in Python APIs', 'Docker': 'Used together by 61% — containerized cache alongside containerized database' },
  'GraphQL':        { 'React': 'Used together by 58% — React + GraphQL is a common data-fetching pairing', 'TypeScript': 'Used together by 63% — GraphQL types map naturally to TypeScript types', 'PostgreSQL': 'Used together by 44% — GraphQL as an API layer over relational data' },
  'Kubernetes':     { 'Docker': 'Used together by 69% — Docker is the prerequisite for Kubernetes deployment', 'Terraform': 'Used together by 72% — infrastructure as code manages the cluster Kubernetes runs on', 'GitHub Actions': 'Used together by 66% — automated deploy pipelines target Kubernetes clusters' },
  'Terraform':      { 'Kubernetes': 'Used together by 72% — infrastructure as code manages the cluster Kubernetes runs on', 'GitHub Actions': 'Used together by 68% — Terraform runs are automated through CI/CD pipelines', 'Docker': 'Used together by 64% — container infrastructure described in Terraform' },
  'FastAPI':        { 'Redis': 'Used together by 58% — session management and response caching in Python APIs', 'PostgreSQL': 'Used together by 67% — FastAPI most commonly paired with PostgreSQL for persistence', 'Docker': 'Used together by 71% — containerized Python APIs are standard deployment practice' },
  'GitHub Actions': { 'Docker': 'Used together by 73% — container builds are the most common CI/CD target', 'Terraform': 'Used together by 68% — Terraform runs are automated through CI/CD pipelines', 'Kubernetes': 'Used together by 66% — automated deploy pipelines target Kubernetes clusters' }
};

// ─── GROUP ────────────────────────────────────────────────────────────────────

// STARTER: Programming languages — grouped by paradigm/use, not syntax family
export const GROUP_ITEMS = [
  { label: 'Python',      cat: 0 }, { label: 'R',           cat: 0 },
  { label: 'Julia',       cat: 0 }, { label: 'SQL',          cat: 0 },
  { label: 'JavaScript',  cat: 1 }, { label: 'TypeScript',   cat: 1 },
  { label: 'Swift',       cat: 2 }, { label: 'Kotlin',       cat: 2 },
  { label: 'Rust',        cat: 3 }, { label: 'C++',          cat: 3 },
  { label: 'Go',          cat: 3 }, { label: 'Java',         cat: 2 },
  { label: 'Ruby',        cat: 1 }, { label: 'MATLAB',       cat: 0 },
  { label: 'C#',          cat: 2 },
];
export const CLUSTER_NAMES_STARTER = [
  'Data / Scientific', 'Web / Dynamic',
  'Platform / Enterprise', 'Systems / Performance'
];

// DEEPER: AI/ML concepts — genuinely ambiguous category membership
export const GROUP_DEEPER_ITEMS = [
  { label: 'Gradient descent',   cat: 0 }, { label: 'Backpropagation',    cat: 0 },
  { label: 'Attention mechanism',cat: 1 }, { label: 'Transformer',        cat: 1 },
  { label: 'Fine-tuning',        cat: 2 }, { label: 'Prompt engineering',  cat: 2 },
  { label: 'Embedding',          cat: 0 }, { label: 'Vector database',     cat: 3 },
  { label: 'RAG',                cat: 3 }, { label: 'RLHF',                cat: 2 },
  { label: 'Tokenization',       cat: 1 }, { label: 'Hallucination',       cat: 2 },
  { label: 'Few-shot learning',  cat: 2 }, { label: 'Overfitting',         cat: 0 },
  { label: 'Semantic search',    cat: 3 },
];
export const CLUSTER_NAMES_DEEPER = [
  'Training / Optimization', 'Architecture',
  'Deployment / Alignment', 'Retrieval / Memory'
];

// REAL: Tech companies grouped by primary stack vs. market behavior
export const GROUP_REAL_ITEMS_TOPIC = [
  { label: 'Stripe',      cat: 0 }, { label: 'Twilio',      cat: 0 },
  { label: 'Cloudflare',  cat: 0 }, { label: 'Snowflake',   cat: 1 },
  { label: 'Databricks',  cat: 1 }, { label: 'dbt Labs',    cat: 1 },
  { label: 'Figma',       cat: 2 }, { label: 'Notion',      cat: 2 },
  { label: 'Linear',      cat: 2 }, { label: 'Vercel',      cat: 0 },
  { label: 'HashiCorp',   cat: 3 }, { label: 'Datadog',     cat: 3 },
  { label: 'PagerDuty',   cat: 3 }, { label: 'Airtable',    cat: 2 },
  { label: 'Retool',      cat: 2 }, { label: 'Grafana',     cat: 3 },
];
export const GROUP_REAL_ITEMS_TONE = [
  { label: 'Stripe',      cat: 0 }, { label: 'Twilio',      cat: 1 },
  { label: 'Cloudflare',  cat: 0 }, { label: 'Snowflake',   cat: 2 },
  { label: 'Databricks',  cat: 2 }, { label: 'dbt Labs',    cat: 3 },
  { label: 'Figma',       cat: 0 }, { label: 'Notion',      cat: 0 },
  { label: 'Linear',      cat: 0 }, { label: 'Vercel',      cat: 0 },
  { label: 'HashiCorp',   cat: 3 }, { label: 'Datadog',     cat: 2 },
  { label: 'PagerDuty',   cat: 1 }, { label: 'Airtable',    cat: 1 },
  { label: 'Retool',      cat: 3 }, { label: 'Grafana',     cat: 3 },
];
export const CLUSTER_NAMES_REAL_TOPIC = ['Infrastructure / API', 'Data Platform', 'Productivity / Design', 'Observability / Ops'];
export const CLUSTER_NAMES_REAL_TONE  = ['Developer-loved', 'Enterprise-adopted', 'Broadly known', 'Community / niche'];

// ─── PREDICT ──────────────────────────────────────────────────────────────────

// STARTER: GitHub stars over time — noisy but trending upward
export const PREDICT_KNOWN  = [120,190,280,310,390,450,410,520,580,640];
export const PREDICT_WEEKS  = ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10'];

// DEEPER: Cloud infrastructure costs — growth with sudden spike from traffic event
// Linear model misses the mean-reversion after the spike
export const PREDICT_DEEPER_DATA   = [4200,4400,4350,4600,4800,4750,5100,5000,5300,5600,8900,5800];
export const PREDICT_DEEPER_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const PREDICT_DEEPER_ACTUAL = 5950; // January — returns to trend after one-off spike

// REAL: API request volume — S-curve adoption then plateau
export const PREDICT_REAL_DATA = [
  8200,14000,22000,35000,51000,69000,88000,104000,
  117000,127000,133000,137000,139000,141000,142000,142500,142800,143000
];
export const PREDICT_REAL_LABELS = [
  'W1','W2','W3','W4','W5','W6','W7','W8','W9','W10',
  'W11','W12','W13','W14','W15','W16','W17','W18'
];
export const PREDICT_REAL_ACTUAL_W19 = 143100; // Near flat — model will project continued growth
