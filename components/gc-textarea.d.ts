import type { Components, JSX } from "../types/components";

interface GcTextarea extends Components.GcTextarea, HTMLElement {}
export const GcTextarea: {
  prototype: GcTextarea;
  new (): GcTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
