// ─── SHARED CONSTANTS ─────────────────────────────────────────────────────────
// Used across all category data files and module components.
// ─────────────────────────────────────────────────────────────────────────────

export const LEVELS = ['starter', 'deeper', 'real'];
export const LEVEL_LABELS = { starter: 'Starter', deeper: 'Deeper', real: 'Real' };

export const CLUSTER_COLORS = ['#9b5c47', '#4a6075', '#c47c2b', '#5b8af0'];

export const PREDICT_BUILD_DEFAULTS = [
  [60, 140], [110, 115], [160, 130], [210, 100], [270, 90], [330, 75]
];

export const MODULES = [
  {
    module_id: 'recommend',
    title: 'Recommend',
    short_description: 'How AI finds connections across things that seem unrelated on the surface.',
    optional_lab_bridge: { task: 'recommend' },
  },
  {
    module_id: 'group',
    title: 'Group',
    short_description: 'How AI discovers natural clusters without knowing the category names.',
    optional_lab_bridge: { task: 'group' },
  },
  {
    module_id: 'predict',
    title: 'Predict',
    short_description: 'How AI extends patterns forward — and why it can be confidently wrong.',
    optional_lab_bridge: { task: 'predict' },
  },
];
