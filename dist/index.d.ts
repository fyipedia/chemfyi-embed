/**
 * chemfyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for ChemFYI */
      'chemfyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'element-card' | 'formula-renderer' | 'phase-badge' | 'element-inline' | 'formula-inline';
      /** Entity slug (e.g. "elements") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'technical';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
