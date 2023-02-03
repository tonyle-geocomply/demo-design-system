import type { Components, JSX } from "../types/components";

interface GcSpinner extends Components.GcSpinner, HTMLElement {}
export const GcSpinner: {
  prototype: GcSpinner;
  new (): GcSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
