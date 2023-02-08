import type { Components, JSX } from "../types/components";

interface GcSteps extends Components.GcSteps, HTMLElement {}
export const GcSteps: {
  prototype: GcSteps;
  new (): GcSteps;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
