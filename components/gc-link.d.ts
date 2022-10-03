import type { Components, JSX } from "../types/components";

interface GcLink extends Components.GcLink, HTMLElement {}
export const GcLink: {
  prototype: GcLink;
  new (): GcLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
