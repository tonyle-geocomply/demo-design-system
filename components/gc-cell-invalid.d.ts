import type { Components, JSX } from "../types/components";

interface GcCellInvalid extends Components.GcCellInvalid, HTMLElement {}
export const GcCellInvalid: {
  prototype: GcCellInvalid;
  new (): GcCellInvalid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
