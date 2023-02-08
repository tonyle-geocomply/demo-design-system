import type { Components, JSX } from "../types/components";

interface GcUl extends Components.GcUl, HTMLElement {}
export const GcUl: {
  prototype: GcUl;
  new (): GcUl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
