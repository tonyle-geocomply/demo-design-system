import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const GcOl$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  getClassName() {
    return this.class ? `gc-ol ${this.class}` : 'gc-ol';
  }
  render() {
    return (h("ol", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
}, [6, "gc-ol", {
    "class": [1],
    "gcId": [1, "gc-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-ol"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-ol":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcOl$1);
      }
      break;
  } });
}

const GcOl = GcOl$1;
const defineCustomElement = defineCustomElement$1;

export { GcOl, defineCustomElement };
