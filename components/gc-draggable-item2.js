import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcDraggableItemCss = ".sc-gc-draggable-item-h{display:block;background:white;width:fit-content}.sc-gc-draggable-item-h:hover{cursor:pointer}.ghost.sc-gc-draggable-item-h{background:var(--gc-color-secondary)}";

const GcDraggableItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return gcDraggableItemCss; }
}, [6, "gc-draggable-item"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-draggable-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-draggable-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcDraggableItem);
      }
      break;
  } });
}

export { GcDraggableItem as G, defineCustomElement as d };
