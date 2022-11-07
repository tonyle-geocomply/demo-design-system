import type { Components, JSX } from "../types/components";

interface GcTabs extends Components.GcTabs, HTMLElement {}
export const GcTabs: {
  prototype: GcTabs;
  new (): GcTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
