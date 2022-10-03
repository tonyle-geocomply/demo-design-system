import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const gcInputCss = "input.sc-gc-input{background:var(--gc-color-contrast-white);border:1px solid var(--gc-color-second-grey);border-radius:5px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative;display:inline-block;margin:0}input[disabled].sc-gc-input{color:#00000040;background-color:#f5f5f5;box-shadow:none;cursor:not-allowed;opacity:1}input.sc-gc-input:focus{background-color:var(--gc-color-contrast-white);border-color:var(--gc-color-primary);outline:0;box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.sc-gc-input::placeholder{color:var(--gc-color-placeholder)}.sc-gc-input:-ms-input-placeholder{color:var(--gc-color-placeholder)}.sc-gc-input::-ms-input-placeholder{color:var(--gc-color-placeholder)}";

const GcInput = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * The input type
     */
    this.type = 'text';
  }
  render() {
    return h("input", { class: this.class, name: this.gcName, id: this.gcId, type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled });
  }
  static get style() { return gcInputCss; }
}, [2, "gc-input", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "type": [1],
    "placeholder": [1],
    "disabled": [4],
    "value": [1],
    "gcName": [1, "gc-name"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-input"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcInput);
      }
      break;
  } });
}

export { GcInput as G, defineCustomElement as d };
