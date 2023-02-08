import type { Components, JSX } from "../types/components";

interface GcPagination extends Components.GcPagination, HTMLElement {}
export const GcPagination: {
  prototype: GcPagination;
  new (): GcPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
