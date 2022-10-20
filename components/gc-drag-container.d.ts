import type { Components, JSX } from "../types/components";

interface GcDragContainer extends Components.GcDragContainer, HTMLElement {}
export const GcDragContainer: {
  prototype: GcDragContainer;
  new (): GcDragContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
