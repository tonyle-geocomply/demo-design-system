import type { Components, JSX } from "../types/components";

interface GcH1 extends Components.GcH1, HTMLElement {}
export const GcH1: {
  prototype: GcH1;
  new (): GcH1;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
