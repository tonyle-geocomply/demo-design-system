import type { Components, JSX } from "../types/components";

interface GcStep extends Components.GcStep, HTMLElement {}
export const GcStep: {
  prototype: GcStep;
  new (): GcStep;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
