import type { Components, JSX } from "../types/components";

interface GcSelect extends Components.GcSelect, HTMLElement {}
export const GcSelect: {
  prototype: GcSelect;
  new (): GcSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
