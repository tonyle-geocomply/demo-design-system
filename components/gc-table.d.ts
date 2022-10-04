import type { Components, JSX } from "../types/components";

interface GcTable extends Components.GcTable, HTMLElement {}
export const GcTable: {
  prototype: GcTable;
  new (): GcTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
