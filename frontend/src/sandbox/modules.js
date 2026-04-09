// ─── MODULES.JS ───────────────────────────────────────────────────────────────
// Compatibility re-export layer.
// All existing imports (Recommend.jsx, Group.jsx, Predict.jsx, etc.)
// continue to work unchanged. This file now delegates to the split data/ directory.
//
// Direct imports from this file still resolve correctly.
// New code should import from './modules/data/index.js' directly.
// ─────────────────────────────────────────────────────────────────────────────

export {
  LEVELS,
  LEVEL_LABELS,
  CLUSTER_COLORS,
  PREDICT_BUILD_DEFAULTS,
  MODULES,
  CATEGORIES,
  READY_CATEGORIES,
  getCategoryData,
} from './modules/data/index.js';

// ─── HUMAN BEHAVIOR (default category) ───────────────────────────────────────
// These named exports preserve backward compatibility with all existing
// component imports that reference REC_ITEMS, GROUP_ITEMS, etc. directly.
export {
  REC_ITEMS,
  REC_NEIGHBORS,
  REC_DEEPER_ITEMS,
  REC_DEEPER_NEIGHBORS,
  REC_REAL_ITEMS,
  REC_REAL_NEIGHBORS,
  GROUP_ITEMS,
  CLUSTER_NAMES_STARTER,
  GROUP_DEEPER_ITEMS,
  CLUSTER_NAMES_DEEPER,
  GROUP_REAL_ITEMS_TOPIC,
  GROUP_REAL_ITEMS_TONE,
  CLUSTER_NAMES_REAL_TOPIC,
  CLUSTER_NAMES_REAL_TONE,
  PREDICT_KNOWN,
  PREDICT_WEEKS,
  PREDICT_DEEPER_DATA,
  PREDICT_DEEPER_LABELS,
  PREDICT_DEEPER_ACTUAL,
  PREDICT_REAL_DATA,
  PREDICT_REAL_LABELS,
  PREDICT_REAL_ACTUAL_W19,
} from './modules/data/human-behavior.js';
