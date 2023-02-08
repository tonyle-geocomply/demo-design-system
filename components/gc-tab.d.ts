import type { Components, JSX } from "../types/components";

interface GcTab extends Components.GcTab, HTMLElement {}
export const GcTab: {
  prototype: GcTab;
  new (): GcTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
