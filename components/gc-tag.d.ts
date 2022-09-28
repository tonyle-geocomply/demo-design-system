import type { Components, JSX } from "../types/components";

interface GcTag extends Components.GcTag, HTMLElement {}
export const GcTag: {
  prototype: GcTag;
  new (): GcTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
