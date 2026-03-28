/* chemfyi-embed v1.0.0 | MIT | https://widget.chemfyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.sciencefyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.sciencefyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.sciencefyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Image/preview area \u2014 for element symbols, mineral photos, gem images */
.sciencefyi-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.sciencefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.sciencefyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.sciencefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.sciencefyi-row:last-child {
  border-bottom: none;
}

.sciencefyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.sciencefyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.sciencefyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.sciencefyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.sciencefyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.sciencefyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.sciencefyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.sciencefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.sciencefyi-stat { text-align:center; flex:1; }
.sciencefyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.sciencefyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.sciencefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.sciencefyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:8px; }
.sciencefyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.sciencefyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.sciencefyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.sciencefyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.sciencefyi-kv-row:last-child { border-bottom:none; }
.sciencefyi-kv-label { font-size:11px; color:var(--muted); }
.sciencefyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.sciencefyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.sciencefyi-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.sciencefyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.sciencefyi-desc { padding:10px 18px; font-size:11px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.sciencefyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.sciencefyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.sciencefyi-view-link a:hover { text-decoration:underline; }
.sciencefyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card domain: element symbol (chemfyi)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-element-symbol { width:100%; padding:14px 18px; display:flex; align-items:center; gap:16px; border-bottom:1px solid var(--border); }
.sciencefyi-element-box { width:72px; height:72px; border-radius:8px; background:color-mix(in srgb, var(--accent) 15%, var(--bg)); border:2px solid var(--accent); display:flex; flex-direction:column; align-items:center; justify-content:center; flex-shrink:0; }
.sciencefyi-element-number { font-size:11px; color:var(--muted); font-weight:600; }
.sciencefyi-element-sym { font-size:28px; font-weight:700; color:var(--accent); line-height:1; }
.sciencefyi-element-mass { font-size:10px; color:var(--muted); }
.sciencefyi-element-info { flex:1; }
.sciencefyi-element-name { font-size:16px; font-weight:700; color:var(--text); margin-bottom:2px; }
.sciencefyi-element-category { font-size:11px; color:var(--muted); }

/* Card domain: property bar (alloyfyi, mineralfyi) */
.sciencefyi-prop-bar-row { padding:6px 18px; border-bottom:1px dotted var(--border); display:flex; align-items:center; gap:10px; }
.sciencefyi-prop-bar-row:last-child { border-bottom:none; }
.sciencefyi-prop-bar-label { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; width:80px; flex-shrink:0; }
.sciencefyi-prop-bar-track { flex:1; height:6px; background:var(--surface); border-radius:3px; overflow:hidden; }
.sciencefyi-prop-bar-fill { height:100%; background:var(--accent); border-radius:3px; transition:width 0.4s ease; }
.sciencefyi-prop-bar-val { font-size:10px; font-weight:600; color:var(--text); width:36px; text-align:right; flex-shrink:0; }

/* Card domain: crystal system (mineralfyi) */
.sciencefyi-crystal-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 8px; border-radius:4px; font-size:11px; font-weight:600; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); border:1px solid color-mix(in srgb, var(--accent) 25%, transparent); }

/* Card domain: magnitude display (starfyi) */
.sciencefyi-magnitude { padding:10px 18px; border-bottom:1px solid var(--border); display:flex; align-items:baseline; gap:8px; }
.sciencefyi-magnitude-val { font-size:28px; font-weight:800; color:var(--accent); line-height:1; }
.sciencefyi-magnitude-label { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Card domain: color swatch (gemfyi) */
.sciencefyi-gem-swatch-row { display:flex; gap:4px; padding:8px 18px; border-bottom:1px solid var(--border); flex-wrap:wrap; }
.sciencefyi-gem-swatch { width:20px; height:20px; border-radius:50%; border:2px solid var(--border); flex-shrink:0; }

/* Inline widget host \u2014 for badge-style inline rendering */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/styles/technical.ts
function getTechnicalCSS() {
  return `
/* Technical: monospace font override for the full widget */
.sciencefyi-widget {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', ui-monospace, 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
}

/* Header \u2014 surface bg with 2px accent bottom border */
.sciencefyi-header {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 10px 12px;
  border-bottom: 2px solid var(--accent);
  background: var(--surface);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.sciencefyi-header-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 2px 0;
  line-height: 1.3;
  font-family: inherit;
}

.sciencefyi-header-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 0;
}

/* Image/preview area \u2014 compact */
.sciencefyi-img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: var(--badge-bg);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--border);
}

.sciencefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
}

/* Body area */
.sciencefyi-body { padding: 10px 12px; }

/* Key-value rows \u2014 dashed separator, tabular numerics */
.sciencefyi-kv-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 6px 0;
  border-bottom: 1px dashed var(--border);
  font-variant-numeric: tabular-nums;
}
.sciencefyi-kv-row:last-child { border-bottom: none; }
.sciencefyi-kv-label {
  font-size: 0.75rem; text-transform: uppercase;
  letter-spacing: 0.05em; color: var(--muted);
  font-family: 'JetBrains Mono', monospace;
}
.sciencefyi-kv-value { font-weight: 600; color: var(--text); }

/* Key-value rows (standard naming variant) */
.sciencefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px dashed var(--border);
  font-variant-numeric: tabular-nums;
}

.sciencefyi-row:last-child {
  border-bottom: none;
}

.sciencefyi-label {
  font-size: 10px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sciencefyi-value {
  font-size: 11px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
  font-family: inherit;
  font-variant-numeric: tabular-nums;
}

/* Badge */
.sciencefyi-badge {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 2px 8px; border-radius: 4px;
  font-size: 0.75rem; font-family: 'JetBrains Mono', monospace;
}

/* Pills */
.sciencefyi-pills { display: flex; flex-wrap: wrap; gap: 4px; }
.sciencefyi-pill {
  padding: 1px 6px; border-radius: 3px;
  font-size: 0.7rem; background: var(--surface); color: var(--muted);
  border: 1px solid var(--border);
}

/* Section title */
.sciencefyi-section-title {
  font-size: 9px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px 0;
}

/* Tags \u2014 muted, outlined */
.sciencefyi-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  border: 1px solid var(--border);
  margin: 1px 2px 1px 0;
}

/* Link */
.sciencefyi-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.sciencefyi-link:hover {
  text-decoration: underline;
}

.sciencefyi-link svg {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}

/* Footer link row */
.sciencefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-top: 1px solid var(--border);
  gap: 6px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Technical overrides for card shared components
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Stats row: smaller, monospace values */
.sciencefyi-stats-row { display:flex; gap:8px; padding:6px 10px; border-bottom:1px solid var(--border); }
.sciencefyi-stat { text-align:center; flex:1; }
.sciencefyi-stat-value { font-size:14px; font-weight:700; color:var(--accent); font-family:inherit; font-variant-numeric:tabular-nums; }
.sciencefyi-stat-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Stats grid: outlined boxes */
.sciencefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; padding:6px 10px; border-bottom:1px solid var(--border); }
.sciencefyi-stat-box { padding:4px 6px; background:transparent; border:1px solid var(--border); border-radius:3px; }
.sciencefyi-stat-box-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.05em; }
.sciencefyi-stat-box-value { font-size:11px; font-weight:700; color:var(--text); margin-top:1px; font-family:inherit; font-variant-numeric:tabular-nums; }

/* KV rows: monospace, dashed separator */
.sciencefyi-kv-rows { padding:6px 10px; border-bottom:1px solid var(--border); }

/* Section label: plain uppercase monospace */
.sciencefyi-section-label { font-size:9px; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted); font-weight:600; margin-bottom:3px; }

/* Description: compact */
.sciencefyi-desc { padding:6px 10px; font-size:10px; color:var(--muted); line-height:1.4; border-bottom:1px solid var(--border); }

/* View link */
.sciencefyi-view-link { display:block; text-align:left; padding:6px 10px; border-bottom:1px solid var(--border); }
.sciencefyi-view-link a { color:var(--link); text-decoration:none; font-size:11px; font-weight:500; display:inline-flex; align-items:center; gap:3px; }
.sciencefyi-view-link a:hover { text-decoration:underline; }
.sciencefyi-view-link svg { width:10px; height:10px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Technical: copy button \u2014 inline symbol style
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-copy-btn {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  transition: color 0.1s, border-color 0.1s;
  font-family: inherit;
}

.sciencefyi-copy-btn:hover {
  color: var(--text);
  border-color: var(--accent);
}

.sciencefyi-copy-btn svg {
  width: 10px;
  height: 10px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Technical: element symbol (chemfyi) \u2014 compact
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-element-symbol { padding:8px 10px; display:flex; align-items:center; gap:10px; border-bottom:1px solid var(--border); }
.sciencefyi-element-box { width:52px; height:52px; border-radius:4px; background:transparent; border:2px solid var(--accent); display:flex; flex-direction:column; align-items:center; justify-content:center; flex-shrink:0; }
.sciencefyi-element-number { font-size:9px; color:var(--muted); font-weight:600; }
.sciencefyi-element-sym { font-size:20px; font-weight:700; color:var(--accent); line-height:1; font-family:inherit; }
.sciencefyi-element-mass { font-size:9px; color:var(--muted); font-variant-numeric:tabular-nums; }
.sciencefyi-element-info { flex:1; }
.sciencefyi-element-name { font-size:13px; font-weight:700; color:var(--text); margin-bottom:1px; }
.sciencefyi-element-category { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Technical: property bar (alloyfyi, mineralfyi) \u2014 compact */
.sciencefyi-prop-bar-row { padding:4px 10px; border-bottom:1px dashed var(--border); display:flex; align-items:center; gap:8px; }
.sciencefyi-prop-bar-row:last-child { border-bottom:none; }
.sciencefyi-prop-bar-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; width:70px; flex-shrink:0; }
.sciencefyi-prop-bar-track { flex:1; height:4px; background:var(--surface); border-radius:2px; overflow:hidden; border:1px solid var(--border); }
.sciencefyi-prop-bar-fill { height:100%; background:var(--accent); transition:width 0.4s ease; }
.sciencefyi-prop-bar-val { font-size:9px; font-weight:600; color:var(--text); width:32px; text-align:right; flex-shrink:0; font-variant-numeric:tabular-nums; }

/* Technical: crystal system (mineralfyi) */
.sciencefyi-crystal-badge { display:inline-flex; align-items:center; gap:3px; padding:2px 6px; border-radius:3px; font-size:10px; font-weight:600; background:transparent; color:var(--accent); border:1px solid var(--accent); font-family:inherit; }

/* Technical: magnitude display (starfyi) */
.sciencefyi-magnitude { padding:6px 10px; border-bottom:1px solid var(--border); display:flex; align-items:baseline; gap:6px; }
.sciencefyi-magnitude-val { font-size:20px; font-weight:800; color:var(--accent); line-height:1; font-variant-numeric:tabular-nums; }
.sciencefyi-magnitude-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Technical: gem swatch */
.sciencefyi-gem-swatch-row { display:flex; gap:3px; padding:6px 10px; border-bottom:1px solid var(--border); flex-wrap:wrap; }
.sciencefyi-gem-swatch { width:16px; height:16px; border-radius:3px; border:1px solid var(--border); flex-shrink:0; }

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "technical":
      return getTechnicalCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.sciencefyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.sciencefyi-widget[data-size="default"] {
  max-width: 420px;
}

.sciencefyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.sciencefyi-widget *, .sciencefyi-widget *::before, .sciencefyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.sciencefyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: sciencefyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes sciencefyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.sciencefyi-error p {
  margin: 0 0 8px 0;
}

.sciencefyi-error a {
  color: var(--link);
  text-decoration: none;
}

.sciencefyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-search-wrap {
  padding: 12px 16px;
}

.sciencefyi-search-form {
  display: flex;
  gap: 8px;
}

.sciencefyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.sciencefyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.sciencefyi-search-input::placeholder {
  color: var(--muted);
}

.sciencefyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.sciencefyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.sciencefyi-search-results {
  padding: 0 16px 12px;
}

.sciencefyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.sciencefyi-result-item:last-child {
  border-bottom: none;
}

.sciencefyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.sciencefyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.sciencefyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.sciencefyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button (base \u2014 overridden in technical)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.sciencefyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.sciencefyi-copy-btn:hover {
  background: var(--copy-hover);
}

.sciencefyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.style || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["sciencefyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="sciencefyi-loading">
      <span class="sciencefyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="sciencefyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
var copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
var checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
function poweredByHTML(config) {
  return `<span class="sciencefyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `sciencefyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/cards/shared.ts
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function statsRow(label, value) {
  if (value === null || value === void 0 || value === "") return "";
  return `<div class="sciencefyi-kv-row"><span class="sciencefyi-kv-label">${esc(label)}</span><span class="sciencefyi-kv-value">${esc(String(value))}</span></div>`;
}
function pills(items) {
  if (!items || !items.length) return "";
  return `<div class="sciencefyi-pills">${items.map((i) => `<span class="sciencefyi-pill">${esc(i)}</span>`).join("")}</div>`;
}
function viewLink(url, label, config) {
  return `<a href="${esc(url)}" target="_blank" rel="noopener" class="sciencefyi-view-link" style="color:${config.accent}">${esc(label)} \u2197</a>`;
}
function badge(text, bg, fg = "#fff") {
  return `<span class="sciencefyi-badge" style="background:${bg};color:${fg}">${esc(text)}</span>`;
}

// src/cards/chem-card.ts
function phaseIcon(phase) {
  const p = (phase || "").toLowerCase();
  if (p.includes("liquid")) return "\u{1F4A7}";
  if (p.includes("gas")) return "\u{1F4A8}";
  if (p.includes("plasma")) return "\u26A1";
  return "\u2B1B";
}
function phaseColor(phase) {
  const p = (phase || "").toLowerCase();
  if (p.includes("liquid")) return "#06b6d4";
  if (p.includes("gas")) return "#10b981";
  if (p.includes("plasma")) return "#a855f7";
  return "#3b82f6";
}
function blockColor(block) {
  const b = (block || "").toLowerCase();
  if (b === "s") return "#ef4444";
  if (b === "p") return "#f59e0b";
  if (b === "d") return "#3b82f6";
  if (b === "f") return "#10b981";
  return "#6b7280";
}
function renderChemCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const symbol = esc(String((_a = data.symbol) != null ? _a : ""));
  const name = esc(String((_b = data.name) != null ? _b : ""));
  const atomicNumber = data.atomic_number != null ? Number(data.atomic_number) : null;
  const atomicMass = data.atomic_mass != null ? String(data.atomic_mass) : null;
  const phase = String((_d = (_c = data.phase_at_stp) != null ? _c : data.phase) != null ? _d : "");
  const electronConfig = esc(String((_e = data.electron_configuration) != null ? _e : ""));
  const cpkHex = String((_g = (_f = data.cpk_hex_color) != null ? _f : data.cpk_color) != null ? _g : "");
  const block = String((_h = data.block) != null ? _h : "");
  const categoryName = esc(String((_j = (_i = data.category_name) != null ? _i : data.category) != null ? _j : ""));
  const groupNumber = data.group_number != null ? String(data.group_number) : null;
  const period = data.period != null ? String(data.period) : null;
  const slug = String((_k = data.slug) != null ? _k : symbol.toLowerCase());
  const entityUrl = `https://${config.domain}/elements/${slug}/`;
  const phaseBadge = phase ? `<span class="sciencefyi-badge" style="background:${phaseColor(phase)};color:#fff">${phaseIcon(phase)} ${esc(phase)}</span>` : "";
  const blockBadge = block ? badge(`${block.toUpperCase()}-block`, blockColor(block)) : "";
  const cpkSwatch = cpkHex ? `<span class="sciencefyi-color-dot" style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${esc(cpkHex)};border:1px solid rgba(0,0,0,0.15);vertical-align:middle;margin-right:4px;"></span><code>${esc(cpkHex)}</code>` : "";
  return `
    <div class="sciencefyi-chem-card">
      ${atomicNumber != null ? `<div class="sciencefyi-atomic-badge">${atomicNumber}</div>` : ""}
      <div class="sciencefyi-symbol-block">
        <span class="sciencefyi-element-symbol" style="font-size:2rem;font-weight:700;line-height:1;">${symbol}</span>
      </div>
      <div class="sciencefyi-element-name" style="font-size:1rem;font-weight:600;margin:4px 0 2px;">${name}</div>
      ${atomicMass ? `<div class="sciencefyi-element-mass" style="font-size:0.8rem;color:#64748b;">Mass: ${esc(atomicMass)}</div>` : ""}
      <div class="sciencefyi-badges" style="margin:8px 0;display:flex;flex-wrap:wrap;gap:4px;">
        ${phaseBadge}
        ${blockBadge}
        ${categoryName ? badge(String((_m = (_l = data.category_name) != null ? _l : data.category) != null ? _m : ""), "#6b7280") : ""}
      </div>
      ${electronConfig ? statsRow("Electron config", String((_n = data.electron_configuration) != null ? _n : "")) : ""}
      ${cpkSwatch ? `<div class="sciencefyi-kv-row"><span class="sciencefyi-kv-label">CPK Color</span><span class="sciencefyi-kv-value">${cpkSwatch}</span></div>` : ""}
      ${statsRow("Group", groupNumber)}
      ${statsRow("Period", period)}
      <div class="sciencefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View ${name} on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/radar.ts
function radarSvg(cfg) {
  const size = cfg.size || 200;
  const max = cfg.maxValue || 10;
  const cx = size / 2, cy = size / 2;
  const radius = size * 0.35;
  const n = cfg.values.length;
  const gridCircles = [0.33, 0.66, 1].map((pct) => {
    const r = radius * pct;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#e2e8f0" stroke-width="0.5" stroke-dasharray="2,2"/>`;
  }).join("");
  const axes = cfg.labels.map((label, i) => {
    const angle = Math.PI * 2 * i / n - Math.PI / 2;
    const x2 = cx + radius * Math.cos(angle);
    const y2 = cy + radius * Math.sin(angle);
    const lx = cx + (radius + 18) * Math.cos(angle);
    const ly = cy + (radius + 18) * Math.sin(angle);
    return `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#cbd5e1" stroke-width="0.5"/><text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" fill="#64748b" font-size="8" font-family="system-ui">${label}</text>`;
  }).join("");
  const points = cfg.values.map((v, i) => {
    const angle = Math.PI * 2 * i / n - Math.PI / 2;
    const r = radius * (Math.min(v, max) / max);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
  const dots = cfg.values.map((v, i) => {
    const angle = Math.PI * 2 * i / n - Math.PI / 2;
    const r = radius * (Math.min(v, max) / max);
    return `<circle cx="${cx + r * Math.cos(angle)}" cy="${cy + r * Math.sin(angle)}" r="3" fill="${cfg.accent}"/>`;
  }).join("");
  return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">${gridCircles}${axes}<polygon points="${points}" fill="${cfg.accent}" fill-opacity="0.15" stroke="${cfg.accent}" stroke-width="1.5"/>${dots}</svg>`;
}
var ALLOY_AXES = ["Strength", "Corrosion", "Lightweight", "Machinability", "Cost", "Temperature"];

// src/cards/alloy-card.ts
function boolChip(label, value, trueColor = "#10b981", falseColor = "#6b7280") {
  if (value == null) return "";
  const color = value ? trueColor : falseColor;
  const icon = value ? "\u2713" : "\u2717";
  return `<span class="sciencefyi-bool-chip" style="background:${color}22;color:${color};border:1px solid ${color}44;border-radius:4px;padding:2px 6px;font-size:11px;margin-right:4px;">${icon} ${esc(label)}</span>`;
}
function renderAlloyCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const name = esc(String((_a = data.name) != null ? _a : ""));
  const familyName = String((_c = (_b = data.family_name) != null ? _b : data.family) != null ? _c : "");
  const slug = String((_d = data.slug) != null ? _d : "");
  const entityUrl = `https://${config.domain}/alloys/${slug}/`;
  const radarValues = [
    Number((_f = (_e = data.strength_rating) != null ? _e : data.tensile_rating) != null ? _f : 5),
    Number((_g = data.corrosion_rating) != null ? _g : 5),
    Number((_h = data.lightweight_rating) != null ? _h : 5),
    Number((_i = data.machinability_rating) != null ? _i : 5),
    Number((_j = data.cost_rating) != null ? _j : 5),
    Number((_l = (_k = data.temperature_rating) != null ? _k : data.heat_rating) != null ? _l : 5)
  ];
  const miniRadar = radarSvg({
    values: radarValues,
    labels: ALLOY_AXES,
    accent: config.accent,
    size: 60,
    maxValue: 10
  });
  const tensile = data.tensile_strength_mpa != null ? `${data.tensile_strength_mpa} MPa` : null;
  const yield_ = data.yield_strength_mpa != null ? `${data.yield_strength_mpa} MPa` : null;
  const hardness = data.hardness_brinell != null ? `${data.hardness_brinell} HB` : null;
  const applications = Array.isArray(data.applications) ? data.applications.slice(0, 5) : [];
  return `
    <div class="sciencefyi-alloy-card">
      <div class="sciencefyi-alloy-header" style="display:flex;align-items:flex-start;gap:12px;">
        <div class="sciencefyi-radar-thumb" style="flex-shrink:0;width:60px;height:60px;">
          ${miniRadar}
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:1rem;font-weight:600;">${name}</div>
          ${familyName ? badge(familyName, config.accent) : ""}
        </div>
      </div>
      <div class="sciencefyi-stats" style="margin-top:8px;">
        ${statsRow("Tensile Strength", tensile)}
        ${statsRow("Yield Strength", yield_)}
        ${statsRow("Hardness (Brinell)", hardness)}
      </div>
      <div class="sciencefyi-bool-chips" style="margin:6px 0;display:flex;flex-wrap:wrap;gap:4px;">
        ${boolChip("Weldable", data.is_weldable)}
        ${boolChip("Magnetic", data.is_magnetic)}
        ${boolChip("Heat-treatable", data.is_heat_treatable)}
      </div>
      ${applications.length ? pills(applications) : ""}
      <div class="sciencefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View ${name} on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/mohs.ts
function mohsToColor(h) {
  if (h <= 2) return "#4ade80";
  if (h <= 4) return "#facc15";
  if (h <= 6) return "#f97316";
  if (h <= 8) return "#ef4444";
  return "#b91c1c";
}
function mohsToLabel(h) {
  if (h <= 2) return "Very Soft";
  if (h <= 4) return "Soft";
  if (h <= 6) return "Medium";
  if (h <= 8) return "Hard";
  return "Very Hard";
}

// src/compute/crystal.ts
var SYSTEMS = {
  cubic: { name: "Cubic", svg: "M10,2 L18,10 L10,18 L2,10 Z", color: "#3b82f6" },
  hexagonal: { name: "Hexagonal", svg: "M10,1 L18,5 L18,15 L10,19 L2,15 L2,5 Z", color: "#10b981" },
  trigonal: { name: "Trigonal", svg: "M10,2 L18,16 L2,16 Z", color: "#a855f7" },
  orthorhombic: { name: "Orthorhombic", svg: "M3,4 L17,4 L17,16 L3,16 Z", color: "#f59e0b" },
  tetragonal: { name: "Tetragonal", svg: "M5,2 L15,2 L15,18 L5,18 Z", color: "#06b6d4" },
  monoclinic: { name: "Monoclinic", svg: "M4,4 L16,2 L16,16 L4,18 Z", color: "#f43f5e" },
  triclinic: { name: "Triclinic", svg: "M5,3 L17,2 L15,17 L3,18 Z", color: "#f97316" }
};
function crystalToSvgPath(system) {
  var _a;
  const key = (system || "").toLowerCase().replace(/\s+/g, "");
  return ((_a = SYSTEMS[key]) == null ? void 0 : _a.svg) || "";
}
function crystalToColor(system) {
  var _a;
  const key = (system || "").toLowerCase().replace(/\s+/g, "");
  return ((_a = SYSTEMS[key]) == null ? void 0 : _a.color) || "#94a3b8";
}
function crystalSvgIcon(system, size = 20) {
  const path = crystalToSvgPath(system);
  const color = crystalToColor(system);
  if (!path) return "";
  return `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="${path}" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.5"/></svg>`;
}

// src/cards/gem-card.ts
function miniMohsBar(hardness, hardnessMax) {
  const max = hardnessMax != null ? hardnessMax : hardness;
  const pct = hardness / 10 * 100;
  const pctMax = max / 10 * 100;
  const color = mohsToColor(hardness);
  const rangeWidth = pctMax - pct;
  return `
    <div class="sciencefyi-mohs-bar" style="position:relative;height:6px;border-radius:3px;background:#e2e8f0;overflow:hidden;margin:4px 0;">
      <div style="position:absolute;left:0;top:0;height:100%;width:${pctMax}%;background:${color}22;"></div>
      <div style="position:absolute;left:0;top:0;height:100%;width:${pct}%;background:${color};border-radius:3px;"></div>
      ${rangeWidth > 0.5 ? `<div style="position:absolute;left:${pct}%;top:0;height:100%;width:${rangeWidth}%;background:${color};opacity:0.4;"></div>` : ""}
    </div>
    <div style="font-size:10px;color:#64748b;">${hardness}${hardnessMax && hardnessMax !== hardness ? `\u2013${hardnessMax}` : ""} Mohs \xB7 ${esc(mohsToLabel(hardness))}</div>
  `;
}
function renderGemCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = esc(String((_a = data.name) != null ? _a : ""));
  const slug = String((_b = data.slug) != null ? _b : "");
  const entityUrl = `https://${config.domain}/gems/${slug}/`;
  const primaryColor = String((_d = (_c = data.primary_color) != null ? _c : data.color) != null ? _d : "");
  const hardness = data.hardness != null ? Number(data.hardness) : null;
  const hardnessMax = data.hardness_max != null ? Number(data.hardness_max) : null;
  const crystalSystem = String((_e = data.crystal_system) != null ? _e : "");
  const priceTier = String((_f = data.price_tier) != null ? _f : "");
  const birthstoneMonth = data.birthstone_month ? String(data.birthstone_month) : null;
  const durability = data.durability_rating != null ? String(data.durability_rating) : null;
  const dailyWear = data.suitable_for_daily_wear;
  return `
    <div class="sciencefyi-gem-card">
      <div class="sciencefyi-gem-header" style="display:flex;align-items:flex-start;gap:12px;">
        ${primaryColor ? `<div class="sciencefyi-color-circle" style="width:40px;height:40px;border-radius:50%;background:${esc(primaryColor)};border:2px solid rgba(0,0,0,0.1);flex-shrink:0;"></div>` : ""}
        <div style="flex:1;min-width:0;">
          <div style="font-size:1rem;font-weight:600;">${name}</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px;">
            ${crystalSystem ? `<span style="display:inline-flex;align-items:center;gap:4px;">${crystalSvgIcon(crystalSystem, 14)} ${badge(crystalSystem, "#6b7280")}</span>` : ""}
            ${priceTier ? badge(priceTier, "#f59e0b") : ""}
          </div>
        </div>
      </div>
      ${hardness != null ? miniMohsBar(hardness, hardnessMax) : ""}
      ${birthstoneMonth ? statsRow("Birthstone", birthstoneMonth) : ""}
      ${durability ? statsRow("Durability", durability) : ""}
      ${dailyWear != null ? `<div class="sciencefyi-kv-row"><span class="sciencefyi-kv-label">Daily Wear</span><span class="sciencefyi-kv-value">${dailyWear ? "\u2713 Suitable" : "\u2717 Not recommended"}</span></div>` : ""}
      <div class="sciencefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View ${name} on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/spectral.ts
var SPECTRAL_COLORS = {
  O: "#9BB0FF",
  B: "#AABFFF",
  A: "#CAD7FF",
  F: "#F8F7FF",
  G: "#FFF4E0",
  K: "#FFD2A1",
  M: "#FFB56C"
};
var SPECTRAL_LABELS = {
  O: "Blue supergiant",
  B: "Blue-white",
  A: "White",
  F: "Yellow-white",
  G: "Yellow (Sun-like)",
  K: "Orange",
  M: "Red dwarf"
};
function spectralLetter(cls) {
  const m = (cls || "").toUpperCase().match(/^([OBAFGKM])/);
  return m ? m[1] : "";
}
function spectralToHex(cls) {
  return SPECTRAL_COLORS[spectralLetter(cls)] || "#CCCCCC";
}
function spectralLabel(cls) {
  return SPECTRAL_LABELS[spectralLetter(cls)] || "Unknown";
}

// src/compute/magnitude.ts
function magnitudeToBrightness(mag) {
  const clamped = Math.max(-2, Math.min(8, mag));
  return Math.max(0.1, Math.min(1, 1 - (clamped + 2) / 10));
}

// src/cards/star-card.ts
function starIcon(opacity) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="opacity:${opacity.toFixed(2)};vertical-align:middle;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
}
function spectralBadge(cls) {
  if (!cls) return "";
  const letter = spectralLetter(cls);
  if (!letter) return "";
  const hex = spectralToHex(cls);
  const label = spectralLabel(cls);
  const isLight = ["F", "A", "B", "O"].includes(letter);
  const textColor = isLight ? "#1e293b" : "#f8fafc";
  return `<span class="sciencefyi-spectral-badge" style="background:${hex};color:${textColor};padding:2px 8px;border-radius:12px;font-weight:600;font-size:12px;">${esc(cls)} \xB7 ${esc(label)}</span>`;
}
function renderStarCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const name = esc(String((_a = data.name) != null ? _a : ""));
  const slug = String((_b = data.slug) != null ? _b : "");
  const entityUrl = `https://${config.domain}/stars/${slug}/`;
  const spectralClass = String((_d = (_c = data.spectral_class) != null ? _c : data.spectral_type) != null ? _d : "");
  const apparentMag = data.apparent_magnitude != null ? Number(data.apparent_magnitude) : null;
  const absoluteMag = data.absolute_magnitude != null ? String(data.absolute_magnitude) : null;
  const distanceDisplay = String((_f = (_e = data.distance_display) != null ? _e : data.distance_ly) != null ? _f : "");
  const constellationName = String((_h = (_g = data.constellation_name) != null ? _g : data.constellation) != null ? _h : "");
  const raHours = data.ra_hours != null ? String(data.ra_hours) : null;
  const decDegrees = data.dec_degrees != null ? String(data.dec_degrees) : null;
  const brightness = apparentMag != null ? magnitudeToBrightness(apparentMag) : 0.7;
  return `
    <div class="sciencefyi-star-card">
      <div class="sciencefyi-star-header" style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;">
        <div style="font-size:1.5rem;">${starIcon(brightness)}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:1rem;font-weight:600;">${name}</div>
          ${spectralClass ? `<div style="margin-top:4px;">${spectralBadge(spectralClass)}</div>` : ""}
        </div>
      </div>
      ${apparentMag != null ? `<div class="sciencefyi-kv-row"><span class="sciencefyi-kv-label">Apparent Magnitude</span><span class="sciencefyi-kv-value">${starIcon(brightness)} ${apparentMag}</span></div>` : ""}
      ${absoluteMag ? statsRow("Absolute Magnitude", absoluteMag) : ""}
      ${distanceDisplay ? statsRow("Distance", distanceDisplay) : ""}
      ${constellationName ? statsRow("Constellation", constellationName) : ""}
      ${raHours ? statsRow("RA (hours)", raHours) : ""}
      ${decDegrees ? statsRow("Dec (\xB0)", decDegrees) : ""}
      <div class="sciencefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View ${name} on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/formula.ts
function formulaToHtml(formula) {
  if (!formula) return "";
  if (/[\u2080-\u2089]/.test(formula)) return escapeHtml(formula);
  return escapeHtml(formula).replace(/([A-Za-z)\]])(\d+)/g, "$1<sub>$2</sub>");
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// src/cards/mineral-card.ts
function renderMineralCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const name = esc(String((_a = data.name) != null ? _a : ""));
  const slug = String((_b = data.slug) != null ? _b : "");
  const entityUrl = `https://${config.domain}/minerals/${slug}/`;
  const formula = String((_c = data.formula) != null ? _c : "");
  const crystalSystem = String((_d = data.crystal_system) != null ? _d : "");
  const hardness = data.hardness != null && data.hardness !== "" ? String(data.hardness) : null;
  const hardnessMax = data.hardness_max != null && data.hardness_max !== "" ? String(data.hardness_max) : null;
  const hardnessDisplay = hardness ? hardnessMax && hardnessMax !== hardness ? `${hardness}\u2013${hardnessMax}` : hardness : null;
  const luster = String((_e = data.luster) != null ? _e : "");
  const streak = String((_f = data.streak) != null ? _f : "");
  const mineralClass = String((_h = (_g = data.mineral_class) != null ? _g : data.strunz_class) != null ? _h : "");
  const imaNumber = String((_j = (_i = data.ima_number) != null ? _i : data.ima_symbol) != null ? _j : "");
  return `
    <div class="sciencefyi-mineral-card">
      <div class="sciencefyi-mineral-header" style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;">
        ${crystalSystem ? `<div style="flex-shrink:0;">${crystalSvgIcon(crystalSystem, 32)}</div>` : ""}
        <div style="flex:1;min-width:0;">
          <div style="font-size:1rem;font-weight:600;">${name}</div>
          ${formula ? `<div style="font-size:0.85rem;font-family:monospace;color:#64748b;margin-top:2px;">${formulaToHtml(formula)}</div>` : ""}
        </div>
      </div>
      <div class="sciencefyi-badges" style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px;">
        ${crystalSystem ? badge(crystalSystem, "#6b7280") : ""}
        ${imaNumber ? badge(`IMA: ${esc(imaNumber)}`, "#4f46e5") : ""}
      </div>
      ${hardnessDisplay ? statsRow("Hardness (Mohs)", hardnessDisplay) : ""}
      ${luster ? statsRow("Luster", luster) : ""}
      ${streak ? statsRow("Streak", streak) : ""}
      ${mineralClass ? statsRow("Mineral Class", mineralClass) : ""}
      <div class="sciencefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View ${name} on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/widgets/entity.ts
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initEntityWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "sciencefyi-entity-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-entity-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`).then((data) => {
    var _a2;
    let html;
    switch (config.site) {
      case "chemfyi":
        html = renderChemCard(data, config);
        break;
      case "alloyfyi":
        html = renderAlloyCard(data, config);
        break;
      case "gemfyi":
        html = renderGemCard(data, config);
        break;
      case "starfyi":
        html = renderStarCard(data, config);
        break;
      case "mineralfyi":
        html = renderMineralCard(data, config);
        break;
      default:
        {
          const name = String((_a2 = data.name) != null ? _a2 : slug);
          const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML(slug)}/`;
          html = `
              <div class="sciencefyi-entity-fallback">
                <div style="font-size:1rem;font-weight:600;margin-bottom:8px;">${escapeHTML(name)}</div>
                <a href="${escapeHTML(entityUrl)}" target="_blank" rel="noopener"
                   class="sciencefyi-view-link" style="color:${config.accent}">
                  View on ${escapeHTML(config.name)} \u2197
                </a>
              </div>
            `;
        }
        break;
    }
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `${escapeHTML(config.entityName.slice(0, -1))} "${escapeHTML(slug)}" not found.`, config);
  });
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function formatCellValue(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  return escapeHTML2(String(val));
}
var SITES_WITH_COMPARISONS = /* @__PURE__ */ new Set(["alloyfyi", "gemfyi", "starfyi", "mineralfyi"]);
function initCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-compare-widget");
  if (!SITES_WITH_COMPARISONS.has(config.site)) {
    const siteUrl = `https://${config.domain}`;
    container.innerHTML = `
      <div class="sciencefyi-compare-unavailable" style="padding:12px;text-align:center;">
        <div style="font-size:0.9rem;color:#64748b;margin-bottom:8px;">
          Comparison not available via API.
        </div>
        <a class="sciencefyi-view-link" href="${escapeHTML2(siteUrl)}" target="_blank" rel="noopener"
           style="color:${config.accent}">
          View on ${escapeHTML2(config.name)} ${externalLinkIcon}
        </a>
      </div>
      ${poweredByHTML(config)}
    `;
    return;
  }
  if (!slug) {
    container.innerHTML = `
      <div class="sciencefyi-error">
        <p>Missing data-slug attribute.</p>
        <a href="https://${config.domain}" target="_blank" rel="noopener">Visit ${escapeHTML2(config.name)}</a>
      </div>
    `;
    return;
  }
  renderLoading(container);
  fetchAPI(config.apiBase, `comparisons/${slug}/`).then((data) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    const nameA = (_c = (_b = (_a2 = data.entity_a) == null ? void 0 : _a2.name) != null ? _b : data.name_a) != null ? _c : "Item A";
    const nameB = (_f = (_e = (_d = data.entity_b) == null ? void 0 : _d.name) != null ? _e : data.name_b) != null ? _f : "Item B";
    const title = (_g = data.title) != null ? _g : `${nameA} vs ${nameB}`;
    const rows = (_h = data.rows) != null ? _h : [];
    const keyDiffs = (_i = data.key_differences) != null ? _i : [];
    const summary = (_j = data.summary) != null ? _j : "";
    const compareUrl = data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/compare/${escapeHTML2(slug)}/`;
    const urlA = ((_k = data.entity_a) == null ? void 0 : _k.url) ? data.entity_a.url.startsWith("http") ? data.entity_a.url : `https://${config.domain}${data.entity_a.url}` : ((_l = data.entity_a) == null ? void 0 : _l.slug) ? `https://${config.domain}/${config.entitySlug}/${escapeHTML2(data.entity_a.slug)}/` : `https://${config.domain}`;
    const urlB = ((_m = data.entity_b) == null ? void 0 : _m.url) ? data.entity_b.url.startsWith("http") ? data.entity_b.url : `https://${config.domain}${data.entity_b.url}` : ((_n = data.entity_b) == null ? void 0 : _n.slug) ? `https://${config.domain}/${config.entitySlug}/${escapeHTML2(data.entity_b.slug)}/` : `https://${config.domain}`;
    container.innerHTML = `
        <div class="sciencefyi-compare-card">
          <div class="sciencefyi-compare-title" style="font-size:1rem;font-weight:600;margin-bottom:10px;">
            ${escapeHTML2(title)}
          </div>

          ${summary ? `<div class="sciencefyi-compare-summary" style="font-size:0.85rem;color:#475569;margin-bottom:10px;line-height:1.4;">
                 ${escapeHTML2(summary)}
               </div>` : ""}

          <div class="sciencefyi-compare-scroll" style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
              <thead>
                <tr>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};color:#64748b;font-weight:600;width:35%;">Property</th>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};font-weight:600;width:32.5%;">
                    <a href="${escapeHTML2(urlA)}" target="_blank" rel="noopener"
                       style="color:${config.accent};text-decoration:none;">${escapeHTML2(nameA)} \u2197</a>
                  </th>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};font-weight:600;width:32.5%;">
                    <a href="${escapeHTML2(urlB)}" target="_blank" rel="noopener"
                       style="color:${config.accent};text-decoration:none;">${escapeHTML2(nameB)} \u2197</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(
      (row, i) => `
                  <tr style="background:${i % 2 === 0 ? "transparent" : "#f8fafc"};">
                    <td style="padding:5px 8px;color:#64748b;font-weight:500;">${escapeHTML2(row.label)}</td>
                    <td style="padding:5px 8px;">${formatCellValue(row.value_a)}</td>
                    <td style="padding:5px 8px;">${formatCellValue(row.value_b)}</td>
                  </tr>`
    ).join("")}
              </tbody>
            </table>
          </div>

          ${keyDiffs.length > 0 ? `<div class="sciencefyi-key-diffs" style="margin-top:10px;padding:8px;background:#f0fdf4;border-radius:6px;border-left:3px solid #10b981;">
                 <div style="font-size:0.75rem;font-weight:600;color:#059669;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.05em;">Key Differences</div>
                 <ul style="margin:0;padding-left:16px;font-size:0.8rem;color:#374151;">
                   ${keyDiffs.map((d) => `<li style="margin:2px 0;">${escapeHTML2(d)}</li>`).join("")}
                 </ul>
               </div>` : ""}

          <div class="sciencefyi-actions" style="margin-top:10px;">
            <a class="sciencefyi-view-link" href="${escapeHTML2(compareUrl)}" target="_blank" rel="noopener"
               style="color:${config.accent}">
              Full comparison on ${escapeHTML2(config.name)} ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    const siteUrl = `https://${config.domain}`;
    container.innerHTML = `
        <div class="sciencefyi-compare-unavailable" style="padding:12px;text-align:center;">
          <div style="font-size:0.9rem;color:#64748b;margin-bottom:8px;">
            Comparison not available via API. View on ${escapeHTML2(config.name)}.
          </div>
          <a class="sciencefyi-view-link" href="${escapeHTML2(siteUrl)}" target="_blank" rel="noopener"
             style="color:${config.accent}">
            Visit ${escapeHTML2(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-sciencefyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-sciencefyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectArticle(data, domain, siteName) {
  if (document.querySelector('script[data-sciencefyi-snippet="article"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.name,
    description: data.description,
    url: data.url || `https://${domain}/`,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: `https://${domain}/`
    }
  };
  if (data.datePublished) {
    jsonLd["datePublished"] = data.datePublished;
  }
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-sciencefyi-snippet", "article");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function renderGlossary(container, data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = (_b = (_a = data.name) != null ? _a : data.term) != null ? _b : data.slug;
  const categoryLabel = (_d = (_c = data.category_name) != null ? _c : data.category) != null ? _d : "";
  const extended = (_f = (_e = data.extended_definition) != null ? _e : data.extended_description) != null ? _f : "";
  const termUrl = `https://${config.domain}/glossary/${escapeHTML3(data.slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="sciencefyi-pill sciencefyi-pill--link"
                  href="https://${config.domain}/glossary/${escapeHTML3(rt.slug)}/"
                  target="_blank" rel="noopener">${escapeHTML3(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="sciencefyi-glossary-card">
      <div class="sciencefyi-glossary-header">
        <div style="font-size:1rem;font-weight:600;">${escapeHTML3(name)}</div>
        ${categoryLabel ? `<span class="sciencefyi-badge" style="background:${config.accent};color:#fff;margin-top:4px;display:inline-block;">
               ${escapeHTML3(categoryLabel)}
             </span>` : ""}
      </div>

      <div class="sciencefyi-glossary-definition" style="margin:10px 0;font-size:0.9rem;line-height:1.5;">
        ${escapeHTML3(data.definition)}
      </div>

      ${extended ? `<div class="sciencefyi-glossary-extended" style="margin-bottom:8px;font-size:0.85rem;color:#64748b;line-height:1.5;">
             ${escapeHTML3(extended)}
           </div>` : ""}

      ${relatedPills ? `<div class="sciencefyi-pills" style="margin:8px 0;">
             ${relatedPills}
           </div>` : ""}

      <div class="sciencefyi-actions" style="margin-top:10px;display:flex;flex-wrap:wrap;gap:8px;">
        <a class="sciencefyi-view-link" href="${termUrl}" target="_blank" rel="noopener"
           style="color:${config.accent}">
          ${escapeHTML3(name)} ${externalLinkIcon}
        </a>
        <a class="sciencefyi-view-link" href="${glossaryUrl}" target="_blank" rel="noopener"
           style="color:${config.accent}">
          Full glossary on ${escapeHTML3(config.name)} ${externalLinkIcon}
        </a>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "sciencefyi-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-glossary-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `glossary/${slug}/`).then((data) => {
    var _a2, _b;
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      const name = (_b = (_a2 = data.name) != null ? _a2 : data.term) != null ? _b : data.slug;
      injectDefinedTerm(
        { name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML3(slug)}". Please try again later.`,
      config
    );
  });
}

// src/widgets/guide.ts
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "sciencefyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-guide-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `guides/${slug}/`).then((guide) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const guideUrl = guide.url ? guide.url.startsWith("http") ? guide.url : `https://${config.domain}${guide.url}` : `https://${config.domain}/guides/${escapeHTML4(guide.slug)}/`;
    const summary = (_d = (_c = (_b = (_a2 = guide.summary) != null ? _a2 : guide.subtitle) != null ? _b : guide.description) != null ? _c : guide.excerpt) != null ? _d : "";
    const readingTime = (_e = guide.reading_time_minutes) != null ? _e : null;
    const seriesName = (_f = guide.series_name) != null ? _f : null;
    const datePublished = (_h = (_g = guide.date_published) != null ? _g : guide.published_at) != null ? _h : null;
    const toc = guide.toc && guide.toc.length > 0 ? guide.toc.slice(0, 5) : null;
    container.innerHTML = `
        <div class="sciencefyi-guide-card">
          <div class="sciencefyi-guide-badges" style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;">
            ${seriesName ? `<span class="sciencefyi-badge" style="background:${config.accent};color:#fff;">${escapeHTML4(seriesName)}</span>` : ""}
            ${readingTime != null ? `<span class="sciencefyi-badge" style="background:#f1f5f9;color:#475569;border:1px solid #e2e8f0;">
                   ${escapeHTML4(String(readingTime))} min read
                 </span>` : ""}
          </div>

          <div class="sciencefyi-guide-title" style="font-size:1rem;font-weight:600;margin-bottom:8px;">
            ${escapeHTML4(guide.title)}
          </div>

          ${summary ? `<div class="sciencefyi-guide-summary" style="font-size:0.875rem;color:#475569;line-height:1.5;margin-bottom:8px;">
                 ${escapeHTML4(summary)}
               </div>` : ""}

          ${toc ? `<div class="sciencefyi-guide-toc" style="margin:8px 0;padding:8px;background:#f8fafc;border-radius:6px;border-left:3px solid ${config.accent};">
                 <div style="font-size:0.75rem;font-weight:600;color:#64748b;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.05em;">Contents</div>
                 <ol style="margin:0;padding-left:16px;font-size:0.8rem;color:#475569;">
                   ${toc.map(
      (entry) => `<li style="margin:2px 0;">${escapeHTML4(entry.title)}</li>`
    ).join("")}
                 </ol>
               </div>` : ""}

          <div class="sciencefyi-actions" style="margin-top:10px;">
            <a class="sciencefyi-view-link" href="${escapeHTML4(guideUrl)}" target="_blank" rel="noopener"
               style="color:${config.accent}">
              Read guide on ${escapeHTML4(config.name)} ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
    if (el.dataset.noSnippet !== "true") {
      injectArticle(
        {
          name: guide.title,
          description: summary,
          url: guideUrl,
          ...datePublished ? { datePublished } : {}
        },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(container, `Guide "${escapeHTML4(slug)}" not found.`, config);
  });
}

// src/widgets/search.ts
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  element: "Element",
  alloy: "Alloy",
  gem: "Gem",
  gemstone: "Gem",
  star: "Star",
  mineral: "Mineral",
  glossary: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}\u2026`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="sciencefyi-search-wrap">
      <div class="sciencefyi-search-form" style="position:relative;display:flex;align-items:center;">
        <span class="sciencefyi-search-icon" aria-hidden="true"
              style="position:absolute;left:10px;color:#94a3b8;pointer-events:none;">${SEARCH_ICON}</span>
        <input
          class="sciencefyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML5(placeholder)}"
          aria-label="Search ${escapeHTML5(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
          style="width:100%;padding:8px 10px 8px 32px;border:1px solid #e2e8f0;border-radius:6px;font-size:0.875rem;outline:none;background:#fff;color:#1e293b;box-sizing:border-box;"
        >
      </div>
      <div class="sciencefyi-search-dropdown" role="listbox" hidden
           style="margin-top:4px;border:1px solid #e2e8f0;border-radius:6px;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,0.1);max-height:280px;overflow-y:auto;"></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".sciencefyi-search-input");
  const dropdown = container.querySelector(".sciencefyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".sciencefyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      const anchor = item;
      if (i === idx) {
        anchor.style.background = `${config.accent}15`;
        anchor.style.outline = `2px solid ${config.accent}`;
        anchor.style.outlineOffset = "-2px";
      } else {
        anchor.style.background = "";
        anchor.style.outline = "";
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c, _d;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div style="padding:12px 14px;font-size:0.85rem;color:#64748b;">
          No results for <strong>${escapeHTML5(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_d = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : item.subtitle) != null ? _d : "";
      const href = item.url ? item.url.startsWith("http") ? item.url : `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML5(item.slug)}/`;
      html += `
        <a
          class="sciencefyi-search-result-item"
          href="${escapeHTML5(href)}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
          style="display:block;padding:8px 14px;text-decoration:none;color:inherit;border-bottom:1px solid #f1f5f9;transition:background 0.1s;"
        >
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span style="font-size:0.875rem;font-weight:500;color:#1e293b;">${escapeHTML5(item.name)}</span>
            ${typeLabel ? `<span style="font-size:0.7rem;padding:1px 6px;border-radius:10px;background:${config.accent}20;color:${config.accent};white-space:nowrap;flex-shrink:0;font-weight:500;">${escapeHTML5(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div style="font-size:0.75rem;color:#64748b;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHTML5(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}&limit=10`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
  input.addEventListener("focus", () => {
    input.style.borderColor = config.accent;
    input.style.boxShadow = `0 0 0 2px ${config.accent}30`;
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#e2e8f0";
    input.style.boxShadow = "";
  });
}

// src/tools/element-card.ts
function phaseColor2(phase) {
  const p = (phase || "").toLowerCase();
  if (p.includes("liquid")) return "#06b6d4";
  if (p.includes("gas")) return "#10b981";
  if (p.includes("plasma")) return "#a855f7";
  return "#3b82f6";
}
function blockColor2(block) {
  const b = (block || "").toLowerCase();
  if (b === "s") return "#ef4444";
  if (b === "p") return "#f59e0b";
  if (b === "d") return "#3b82f6";
  if (b === "f") return "#10b981";
  return "#6b7280";
}
function esc2(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function renderTile(container, d, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const symbol = String((_a = d.symbol) != null ? _a : "");
  const name = String((_b = d.name) != null ? _b : "");
  const atomicNumber = d.atomic_number != null ? Number(d.atomic_number) : null;
  const atomicMass = d.atomic_mass != null ? String(d.atomic_mass) : null;
  const phase = String((_d = (_c = d.phase_at_stp) != null ? _c : d.phase) != null ? _d : "");
  const block = String((_e = d.block) != null ? _e : "");
  const cpkHex = String((_g = (_f = d.cpk_hex_color) != null ? _f : d.cpk_color) != null ? _g : "");
  const bgTint = cpkHex ? `${cpkHex}22` : `${config.accent}11`;
  const slug = String((_h = d.slug) != null ? _h : symbol.toLowerCase());
  const entityUrl = `https://${config.domain}/elements/${esc2(slug)}/`;
  container.innerHTML = `
    <div class="sciencefyi-element-tile" style="position:relative;text-align:center;padding:12px 8px;background:${bgTint};border:2px solid ${config.accent}33;border-radius:8px;">
      ${atomicNumber != null ? `<div style="position:absolute;top:6px;left:8px;font-size:11px;color:#64748b;font-weight:500;">${atomicNumber}</div>` : ""}
      ${block ? `<div style="position:absolute;top:6px;right:8px;background:${blockColor2(block)};color:#fff;font-size:10px;padding:1px 5px;border-radius:3px;">${esc2(block.toUpperCase())}</div>` : ""}
      <div style="font-size:3rem;font-weight:800;line-height:1.1;margin-top:8px;color:${config.accent};">${esc2(symbol)}</div>
      <div style="font-size:0.85rem;font-weight:600;margin:4px 0 2px;">${esc2(name)}</div>
      ${atomicMass ? `<div style="font-size:0.75rem;color:#64748b;">${esc2(atomicMass)}</div>` : ""}
      ${phase ? `<div style="margin-top:6px;"><span style="background:${phaseColor2(phase)};color:#fff;font-size:10px;padding:1px 6px;border-radius:10px;">${esc2(phase)}</span></div>` : ""}
      <div style="margin-top:8px;">
        <a href="${entityUrl}" target="_blank" rel="noopener" style="font-size:11px;color:${config.accent};text-decoration:none;">View on ${esc2(config.name)} \u2197</a>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}
function renderFromAttrs(el, container, config) {
  var _a, _b, _c, _d, _e, _f;
  const d = {
    symbol: (_a = el.dataset.symbol) != null ? _a : "",
    atomic_number: el.dataset.number ? Number(el.dataset.number) : null,
    atomic_mass: (_b = el.dataset.mass) != null ? _b : null,
    name: (_c = el.dataset.name) != null ? _c : "",
    phase_at_stp: (_d = el.dataset.phase) != null ? _d : "",
    block: (_e = el.dataset.block) != null ? _e : "",
    cpk_hex_color: (_f = el.dataset.cpk) != null ? _f : ""
  };
  renderTile(container, d, config);
}
function initElementCard(el, config) {
  var _a;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-element-card-widget");
  const slug = (_a = el.dataset.slug) != null ? _a : "";
  if (slug) {
    renderLoading(container);
    fetchAPI(config.apiBase, `elements/${slug}/`).then((data) => renderTile(container, data, config)).catch(() => renderError(container, `Element "${esc2(slug)}" not found.`, config));
  } else if (el.dataset.symbol) {
    renderFromAttrs(el, container, config);
  } else {
    renderError(container, "Provide data-slug or data-symbol attribute.", config);
  }
}

// src/tools/formula-renderer.ts
function esc3(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function initFormulaRenderer(el, config) {
  var _a;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-formula-renderer");
  const initialFormula = (_a = el.dataset.formula) != null ? _a : "";
  container.innerHTML = `
    <div class="sciencefyi-formula-tool" style="padding:4px;">
      <label style="display:block;font-size:12px;font-weight:600;color:#64748b;margin-bottom:4px;">Chemical Formula</label>
      <div style="display:flex;gap:6px;margin-bottom:8px;">
        <input
          type="text"
          class="sciencefyi-formula-input"
          value="${esc3(initialFormula)}"
          placeholder="e.g. H2SO4, Ca3(PO4)2"
          style="flex:1;padding:6px 8px;border:1px solid #e2e8f0;border-radius:6px;font-size:13px;font-family:monospace;outline:none;"
        />
        <button class="sciencefyi-copy-formula-btn" aria-label="Copy formula" style="padding:6px 10px;border:1px solid ${config.accent};border-radius:6px;background:transparent;color:${config.accent};cursor:pointer;font-size:12px;display:flex;align-items:center;gap:4px;">
          ${copyIcon} Copy
        </button>
      </div>
      <div style="margin-bottom:6px;">
        <div style="font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Preview</div>
        <div class="sciencefyi-formula-preview" style="font-size:1.5rem;font-family:serif;min-height:2.5rem;padding:8px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;">${formulaToHtml(initialFormula) || '<span style="color:#94a3b8;font-size:14px;">Start typing a formula\u2026</span>'}</div>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".sciencefyi-formula-input");
  const preview = container.querySelector(".sciencefyi-formula-preview");
  const copyBtn = container.querySelector(".sciencefyi-copy-formula-btn");
  function updatePreview() {
    const raw = input.value.trim();
    if (!raw) {
      preview.innerHTML = '<span style="color:#94a3b8;font-size:14px;">Start typing a formula\u2026</span>';
    } else {
      preview.innerHTML = formulaToHtml(raw);
    }
  }
  input.addEventListener("input", updatePreview);
  copyBtn.addEventListener("click", () => {
    var _a2;
    const text = input.value.trim();
    if (!text) return;
    (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(text).then(() => {
      copyBtn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        copyBtn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      copyBtn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        copyBtn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    });
  });
}

// src/tools/phase-badge.ts
function esc4(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var PHASES = {
  solid: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
    color: "#3b82f6",
    textColor: "#fff",
    label: "Solid",
    description: "Fixed shape and volume at standard conditions"
  },
  liquid: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6 10 4 14 4 16a8 8 0 0 0 16 0c0-2-2-6-8-14z"/></svg>`,
    color: "#06b6d4",
    textColor: "#fff",
    label: "Liquid",
    description: "Definite volume but no fixed shape at standard conditions"
  },
  gas: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3a4 4 0 0 1 4 4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 7 7 0 0 1-7 7H7a7 7 0 0 1-7-7 4 4 0 0 1 4-4z"/></svg>`,
    color: "#10b981",
    textColor: "#fff",
    label: "Gas",
    description: "No fixed shape or volume at standard conditions"
  },
  plasma: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    color: "#a855f7",
    textColor: "#fff",
    label: "Plasma",
    description: "Ionized gas \u2014 fourth state of matter"
  }
};
function initPhaseBadge(el, config) {
  var _a;
  const phase = ((_a = el.dataset.phase) != null ? _a : "").toLowerCase().trim();
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "sciencefyi-phase-badge-widget");
  const info = PHASES[phase];
  if (!info) {
    renderError(container, `Unknown phase "${esc4(phase)}". Use solid, liquid, gas, or plasma.`, config);
    return;
  }
  container.innerHTML = `
    <div class="sciencefyi-phase-badge-card" style="text-align:center;padding:16px 12px;">
      <div style="display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background:${info.color};color:${info.textColor};margin-bottom:8px;">
        ${info.icon}
      </div>
      <div style="font-size:1.1rem;font-weight:700;margin-bottom:4px;">${esc4(info.label)}</div>
      <div style="font-size:0.8rem;color:#64748b;">${esc4(info.description)}</div>
      <div style="margin-top:10px;">
        <span style="background:${info.color};color:${info.textColor};padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">${esc4(info.label)}</span>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/inline/element-inline.ts
function initElementInline(el, _config) {
  var _a, _b, _c;
  const symbol = (_a = el.dataset.symbol) != null ? _a : "";
  const number = (_b = el.dataset.number) != null ? _b : "";
  const cpk = (_c = el.dataset.cpk) != null ? _c : "#909090";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 1px 5px;
      background: #f0f9ff;
      border: 1px solid #bae6fd;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      vertical-align: middle;
      transition: border-color 0.15s ease;
      user-select: none;
    }
    :host(:hover) {
      border-color: #38bdf8;
      background: #e0f2fe;
    }
    :host(.copied) {
      border-color: #0ea5e9;
      background: #dbeafe;
    }
    .num {
      font-size: 9px;
      color: #64748b;
      vertical-align: super;
      font-family: monospace;
    }
    .sym {
      font-weight: 700;
      color: #0c4a6e;
      font-family: system-ui, sans-serif;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.12);
      flex-shrink: 0;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        background: #0c2340;
        border-color: #1e3a5f;
      }
      :host(:hover) {
        border-color: #0ea5e9;
        background: #0f2b4a;
      }
      .num { color: #94a3b8; }
      .sym { color: #bae6fd; }
    }
  `;
  const numEl = document.createElement("span");
  numEl.className = "num";
  numEl.textContent = number;
  const symEl = document.createElement("span");
  symEl.className = "sym";
  symEl.textContent = symbol;
  const dotEl = document.createElement("span");
  dotEl.className = "dot";
  dotEl.style.backgroundColor = cpk;
  shadow.appendChild(style);
  if (number) shadow.appendChild(numEl);
  shadow.appendChild(symEl);
  shadow.appendChild(dotEl);
  el.title = `${symbol} \u2014 Click to copy`;
  el.addEventListener("click", () => {
    var _a2;
    (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(symbol).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = symbol;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    });
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 1200);
  });
}

// src/inline/formula-inline.ts
function initFormulaInline(el, _config) {
  var _a;
  const formula = (_a = el.dataset.formula) != null ? _a : "";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `
    :host {
      display: inline-flex;
      align-items: center;
      padding: 1px 6px;
      background: #fefce8;
      border: 1px solid #fde68a;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      vertical-align: middle;
      transition: border-color 0.15s ease;
      font-family: serif;
      user-select: none;
    }
    :host(:hover) {
      border-color: #fbbf24;
      background: #fef9c3;
    }
    :host(.copied) {
      border-color: #f59e0b;
      background: #fef08a;
    }
    .formula {
      color: #92400e;
    }
    sub {
      font-size: 0.75em;
    }
    sup {
      font-size: 0.75em;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        background: #2d1b00;
        border-color: #92400e;
      }
      :host(:hover) {
        border-color: #d97706;
        background: #3b1f00;
      }
      .formula {
        color: #fde68a;
      }
    }
  `;
  const formulaEl = document.createElement("span");
  formulaEl.className = "formula";
  formulaEl.innerHTML = formula ? formulaToHtml(formula) : "?";
  shadow.appendChild(style);
  shadow.appendChild(formulaEl);
  el.title = `${formula} \u2014 Click to copy`;
  el.addEventListener("click", () => {
    var _a2;
    (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText(formula).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = formula;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    });
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 1200);
  });
}

// src/_entry_chemfyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.style || "modern";
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "element-card":
      initElementCard(el, config);
      break;
    case "formula-renderer":
      initFormulaRenderer(el, config);
      break;
    case "phase-badge":
      initPhaseBadge(el, config);
      break;
    case "element-inline":
      initElementInline(el, config);
      break;
    case "formula-inline":
      initFormulaInline(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"chemfyi","name":"ChemFYI","domain":"chemfyi.com","accent":"#059669","attribute":"data-chemfyi","apiBase":"https://chemfyi.com/api/v1/","searchPath":"/search/","entityName":"Elements","entitySlug":"elements"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"chemfyi","name":"ChemFYI","domain":"chemfyi.com","accent":"#059669","attribute":"data-chemfyi","apiBase":"https://chemfyi.com/api/v1/","searchPath":"/search/","entityName":"Elements","entitySlug":"elements"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"chemfyi","name":"ChemFYI","domain":"chemfyi.com","accent":"#059669","attribute":"data-chemfyi","apiBase":"https://chemfyi.com/api/v1/","searchPath":"/search/","entityName":"Elements","entitySlug":"elements"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"chemfyi","name":"ChemFYI","domain":"chemfyi.com","accent":"#059669","attribute":"data-chemfyi","apiBase":"https://chemfyi.com/api/v1/","searchPath":"/search/","entityName":"Elements","entitySlug":"elements"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"chemfyi","name":"ChemFYI","domain":"chemfyi.com","accent":"#059669","attribute":"data-chemfyi","apiBase":"https://chemfyi.com/api/v1/","searchPath":"/search/","entityName":"Elements","entitySlug":"elements"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-element-card`, initElementCard, ["slug"]],
    [`${site}-formula-renderer`, initFormulaRenderer, ["slug", "value"]],
    [`${site}-phase-badge`, initPhaseBadge, ["value"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
