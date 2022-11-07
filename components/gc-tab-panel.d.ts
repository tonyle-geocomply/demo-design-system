import type { Components, JSX } from "../types/components";

interface GcTabPanel extends Components.GcTabPanel, HTMLElement {}
export const GcTabPanel: {
  prototype: GcTabPanel;
  new (): GcTabPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
