import type { Components, JSX } from "../types/components";

interface GcH2 extends Components.GcH2, HTMLElement {}
export const GcH2: {
  prototype: GcH2;
  new (): GcH2;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
