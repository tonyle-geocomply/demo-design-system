import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gc-icon2.js';

const gcInputCss = "input.sc-gc-input{background:var(--gc-color-contrast-white);border:1px solid var(--gc-color-second-grey);border-radius:5px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative;display:inline-block;margin:0}input[disabled].sc-gc-input{color:#00000040;background-color:#f5f5f5;box-shadow:none;cursor:not-allowed;opacity:1}input.sc-gc-input:focus{background-color:var(--gc-color-contrast-white);border-color:var(--gc-color-primary);outline:0;box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.sc-gc-input::placeholder{color:var(--gc-color-placeholder)}.sc-gc-input:-ms-input-placeholder{color:var(--gc-color-placeholder)}.sc-gc-input::-ms-input-placeholder{color:var(--gc-color-placeholder)}gc-icon.sc-gc-input{position:relative;top:-28px;left:12px}input.has-prefix.sc-gc-input{padding-left:36px}";

const GcInput = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcChange = createEvent(this, "gc:change", 7);
    /**
     * The input type
     */
    this.type = 'text';
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.value || '' });
    };
  }
  render() {
    return (h(Host, null, h("input", { class: this.prefixIcon ? `has-prefix ${this.class}` : this.class, name: this.gcName, onInput: this.onInput, id: this.gcId, type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled }), this.prefixIcon && h("gc-icon", { color: "var(--gc-color-primary)", name: this.prefixIcon })));
  }
  static get style() { return gcInputCss; }
}, [2, "gc-input", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "type": [1],
    "placeholder": [1],
    "disabled": [4],
    "value": [1],
    "gcName": [1, "gc-name"],
    "prefixIcon": [1, "prefix-icon"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-input", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcInput);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcInput as G, defineCustomElement as d };
