import type { Components, JSX } from "../types/components";

interface GcMenu extends Components.GcMenu, HTMLElement {}
export const GcMenu: {
  prototype: GcMenu;
  new (): GcMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
