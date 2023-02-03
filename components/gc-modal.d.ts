import type { Components, JSX } from "../types/components";

interface GcModal extends Components.GcModal, HTMLElement {}
export const GcModal: {
  prototype: GcModal;
  new (): GcModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
