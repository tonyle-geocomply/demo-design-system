import type { Components, JSX } from "../types/components";

interface GcLabel extends Components.GcLabel, HTMLElement {}
export const GcLabel: {
  prototype: GcLabel;
  new (): GcLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
