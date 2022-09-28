import type { Components, JSX } from "../types/components";

interface GcCheckbox extends Components.GcCheckbox, HTMLElement {}
export const GcCheckbox: {
  prototype: GcCheckbox;
  new (): GcCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
