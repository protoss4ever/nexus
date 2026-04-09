// ─── MODULE DATA INDEX ────────────────────────────────────────────────────────
// Single import point for all sandbox module data.
// All consumers import from here — never from individual category files directly.
//
// Adding a new category:
//   1. Create data/{category-id}.js following the human-behavior.js structure
//   2. Import it below and add it to CATEGORIES
//   3. Set ready: true when content is complete
// ─────────────────────────────────────────────────────────────────────────────

export { LEVELS, LEVEL_LABELS, CLUSTER_COLORS, PREDICT_BUILD_DEFAULTS, MODULES } from './constants.js';

import * as HumanBehavior from './human-behavior.js';
import * as Business      from './business.js';
import * as Technology    from './technology.js';
import * as Science       from './science.js';
import * as History       from './history.js';
import * as Systems       from './systems.js';

export const CATEGORIES = [
  { id: 'human-behavior', label: 'Human Behavior', data: HumanBehavior, ready: true },
  { id: 'business',       label: 'Business',       data: Business,      ready: true },
  { id: 'technology',     label: 'Technology',     data: Technology,    ready: true },
  { id: 'science',        label: 'Science',        data: Science,       ready: true },
  { id: 'history',        label: 'History',        data: History,       ready: true },
  { id: 'systems',        label: 'Systems',        data: Systems,       ready: true },
];

export const READY_CATEGORIES = CATEGORIES.filter(c => c.ready);

export function getCategoryData(categoryId) {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.data : HumanBehavior;
}
