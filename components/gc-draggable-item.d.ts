import type { Components, JSX } from "../types/components";

interface GcDraggableItem extends Components.GcDraggableItem, HTMLElement {}
export const GcDraggableItem: {
  prototype: GcDraggableItem;
  new (): GcDraggableItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
