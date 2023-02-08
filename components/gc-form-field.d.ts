import type { Components, JSX } from "../types/components";

interface GcFormField extends Components.GcFormField, HTMLElement {}
export const GcFormField: {
  prototype: GcFormField;
  new (): GcFormField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
