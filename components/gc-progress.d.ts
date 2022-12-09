import type { Components, JSX } from "../types/components";

interface GcProgress extends Components.GcProgress, HTMLElement {}
export const GcProgress: {
  prototype: GcProgress;
  new (): GcProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
