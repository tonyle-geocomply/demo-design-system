import type { Components, JSX } from "../types/components";

interface GcTooltip extends Components.GcTooltip, HTMLElement {}
export const GcTooltip: {
  prototype: GcTooltip;
  new (): GcTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
