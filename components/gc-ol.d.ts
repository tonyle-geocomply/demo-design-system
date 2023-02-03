import type { Components, JSX } from "../types/components";

interface GcOl extends Components.GcOl, HTMLElement {}
export const GcOl: {
  prototype: GcOl;
  new (): GcOl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
