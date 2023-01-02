import type { Components, JSX } from "../types/components";

interface GcCard extends Components.GcCard, HTMLElement {}
export const GcCard: {
  prototype: GcCard;
  new (): GcCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
