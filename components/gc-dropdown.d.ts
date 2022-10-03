import type { Components, JSX } from "../types/components";

interface GcDropdown extends Components.GcDropdown, HTMLElement {}
export const GcDropdown: {
  prototype: GcDropdown;
  new (): GcDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
