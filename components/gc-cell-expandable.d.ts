import type { Components, JSX } from "../types/components";

interface GcCellExpandable extends Components.GcCellExpandable, HTMLElement {}
export const GcCellExpandable: {
  prototype: GcCellExpandable;
  new (): GcCellExpandable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
