import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const GcUl$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  getClassName() {
    return this.class ? `gc-ul ${this.class}` : 'gc-ul';
  }
  render() {
    return (h("ul", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
}, [6, "gc-ul", {
    "class": [1],
    "gcId": [1, "gc-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-ul"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-ul":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcUl$1);
      }
      break;
  } });
}

const GcUl = GcUl$1;
const defineCustomElement = defineCustomElement$1;

export { GcUl, defineCustomElement };
