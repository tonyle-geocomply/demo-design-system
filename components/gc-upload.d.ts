import type { Components, JSX } from "../types/components";

interface GcUpload extends Components.GcUpload, HTMLElement {}
export const GcUpload: {
  prototype: GcUpload;
  new (): GcUpload;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
