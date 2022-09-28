import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const gcLabelCss = "label{font-family:var(--gc-font-family);font-weight:var(--gc-font-weight-label);font-size:var(--gc-font-size-label);color:var(--gc-color-label-grey);line-height:var(--gc-line-height-label);text-transform:uppercase}";

const GcLabel = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getClassName() {
    return this.class || '';
  }
  render() {
    return (h("label", { class: this.getClassName(), id: this.gcId, htmlFor: this.gcFor }, h("slot", null)));
  }
  static get style() { return gcLabelCss; }
}, [1, "gc-label", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "gcFor": [1, "gc-for"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-label"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcLabel);
      }
      break;
  } });
}

export { GcLabel as G, defineCustomElement as d };
