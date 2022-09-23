import type { Components, JSX } from "../types/components";

interface GcButton extends Components.GcButton, HTMLElement {}
export const GcButton: {
  prototype: GcButton;
  new (): GcButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
