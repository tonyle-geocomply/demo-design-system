import type { Components, JSX } from "../types/components";

interface GcTabsList extends Components.GcTabsList, HTMLElement {}
export const GcTabsList: {
  prototype: GcTabsList;
  new (): GcTabsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
