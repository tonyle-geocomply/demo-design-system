import type { Components, JSX } from "../types/components";

interface GcIcon extends Components.GcIcon, HTMLElement {}
export const GcIcon: {
  prototype: GcIcon;
  new (): GcIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
