import type { Components, JSX } from "../types/components";

interface GcInput extends Components.GcInput, HTMLElement {}
export const GcInput: {
  prototype: GcInput;
  new (): GcInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
