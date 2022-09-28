import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './gc-input2.js';
import { d as defineCustomElement$2 } from './gc-label2.js';

const GcFormField$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The input type
     */
    this.type = 'text';
  }
  render() {
    return (h(Host, null, h("gc-label", { "gc-for": this.gcName }, this.label), h("gc-input", { "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder })));
  }
}, [1, "gc-form-field", {
    "label": [1],
    "gcName": [1, "gc-name"],
    "type": [1],
    "placeholder": [1],
    "disabled": [4],
    "value": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-form-field", "gc-input", "gc-label"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-form-field":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcFormField$1);
      }
      break;
    case "gc-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcFormField = GcFormField$1;
const defineCustomElement = defineCustomElement$1;

export { GcFormField, defineCustomElement };
