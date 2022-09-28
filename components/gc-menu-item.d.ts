import type { Components, JSX } from "../types/components";

interface GcMenuItem extends Components.GcMenuItem, HTMLElement {}
export const GcMenuItem: {
  prototype: GcMenuItem;
  new (): GcMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
