# chemfyi-embed

[![npm](https://img.shields.io/npm/v/chemfyi-embed)](https://www.npmjs.com/package/chemfyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/chemfyi-embed)

Embed **ChemFYI** widgets — elements, glossary terms, interactive tools, and inline elements — on any website. **10 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, technical), and live data from the [ChemFYI](https://chemfyi.com) database.

Every widget includes a "Powered by ChemFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.chemfyi.com](https://widget.chemfyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-chemfyi="entity" data-slug="elements" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the ChemFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-chemfyi="entity" data-slug="..."></div>` | Entity detail card — element, alloy, gem, star, or mineral |
| `glossary` | `<div data-chemfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-chemfyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `compare` | `<div data-chemfyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `search` | `<div data-chemfyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `element-card` | `<div data-chemfyi="element-card" data-slug="..."></div>` | Large periodic-table-style element tile with CPK color |
| `formula-renderer` | `<div data-chemfyi="formula-renderer" data-slug="..."></div>` | Interactive formula renderer — plain text to HTML subscripts |
| `phase-badge` | `<div data-chemfyi="phase-badge" data-slug="..."></div>` | Matter state badge — solid, liquid, gas, plasma |
| `element-inline` | `<div data-chemfyi="element-inline" data-slug="..."></div>` | Mini element cell — subscript number + symbol + CPK dot |
| `formula-inline` | `<div data-chemfyi="formula-inline" data-slug="..."></div>` | Inline chemical formula with subscripts (e.g. H2SO4) |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-chemfyi` | entity, compare, glossary, guide, search, [tools] | required | Widget type |
| `data-slug` | e.g. "elements" | — | Entity slug from the ChemFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-styleVariant` | modern, technical | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Elements..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-chemfyi="entity" data-slug="elements" data-theme="light"></div>

<!-- Dark -->
<div data-chemfyi="entity" data-slug="elements" data-theme="dark"></div>

<!-- Sepia -->
<div data-chemfyi="entity" data-slug="elements" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-chemfyi="entity" data-slug="elements" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-chemfyi="entity" data-slug="elements" data-styleVariant="modern"></div>

<!-- Technical — monospace type, grid overlays, laboratory aesthetic -->
<div data-chemfyi="entity" data-slug="elements" data-styleVariant="technical"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<chemfyi-entity slug="elements" theme="light"></chemfyi-entity>
<chemfyi-compare slugs="elements,other-slug"></chemfyi-compare>
<chemfyi-search placeholder="Search Elements..."></chemfyi-search>

<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-chemfyi="entity" data-slug="elements" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-chemfyi="compare" data-slugs="elements,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-chemfyi="search" data-placeholder="Search Elements..."></div>
<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-chemfyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/chemfyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install chemfyi-embed
```

```javascript
import 'chemfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Technical (monospace, lab aesthetic)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: ChemFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: Tree-shaken per site — only includes tools available on ChemFYI

## Learn More About Elements

Visit [chemfyi.com](https://chemfyi.com) — ChemFYI is a comprehensive elements reference with interactive tools, guides, and developer resources.

- **API docs**: [chemfyi.com/developers/](https://chemfyi.com/developers/)
- **Widget builder**: [widget.chemfyi.com](https://widget.chemfyi.com)
- **npm package**: [npmjs.com/package/chemfyi-embed](https://www.npmjs.com/package/chemfyi-embed)
- **GitHub**: [github.com/fyipedia/chemfyi-embed](https://github.com/fyipedia/chemfyi-embed)

## Science FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Science FYI covers chemistry, geology, astronomy, and materials science. Hub: [labfyi.com](https://labfyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| **ChemFYI** | [chemfyi.com](https://chemfyi.com) | Periodic table, elements, compounds, reactions | **[npm](https://www.npmjs.com/package/chemfyi-embed)** |
| AlloyFYI | [alloyfyi.com](https://alloyfyi.com) | Metal alloys, compositions, properties, 6-axis ratings | [npm](https://www.npmjs.com/package/alloyfyi-embed) |
| GemFYI | [gemfyi.com](https://gemfyi.com) | Gemstones, Mohs hardness, optical properties, origins | [npm](https://www.npmjs.com/package/gemfyi-embed) |
| StarFYI | [starfyi.com](https://starfyi.com) | Stars, constellations, spectral classification, magnitudes | [npm](https://www.npmjs.com/package/starfyi-embed) |
| MineralFYI | [mineralfyi.com](https://mineralfyi.com) | 6,215 minerals, crystal systems, Mohs hardness | [npm](https://www.npmjs.com/package/mineralfyi-embed) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
