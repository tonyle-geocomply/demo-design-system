import type { Components, JSX } from "../types/components";

interface GcAlert extends Components.GcAlert, HTMLElement {}
export const GcAlert: {
  prototype: GcAlert;
  new (): GcAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
