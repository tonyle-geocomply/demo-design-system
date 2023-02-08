import type { Components, JSX } from "../types/components";

interface GcTagGroup extends Components.GcTagGroup, HTMLElement {}
export const GcTagGroup: {
  prototype: GcTagGroup;
  new (): GcTagGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
