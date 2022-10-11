import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './gc-icon2.js';
import { d as defineCustomElement$6 } from './gc-input2.js';
import { d as defineCustomElement$5 } from './gc-label2.js';
import { d as defineCustomElement$4 } from './gc-menu2.js';
import { d as defineCustomElement$3 } from './gc-menu-item2.js';
import { d as defineCustomElement$2 } from './gc-select2.js';

const gcFormFieldCss = "gc-label.sc-gc-form-field{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";

const GcFormField$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcFieldChange = createEvent(this, "gc:field-change", 7);
    /**
     * The input type
     */
    this.type = 'text';
    /**
     *  [{
     *    label: 'Shivaji Varma',
     *    value: 'shivaji-varma'
     *  }]
     */
    this.items = [];
    /**
     * Search type
     * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
     */
    this.search = 'none';
  }
  watchPropHandler(newValue) {
    this.value = newValue;
  }
  handleChange(evt) {
    this.gcFieldChange.emit({ value: evt.detail.value });
  }
  render() {
    const input = this.type === 'select' ? (h("gc-select", { search: this.search, items: this.items, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e) })) : (h("gc-input", { "prefix-icon": this.prefixIcon, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e) }));
    return (h(Host, null, h("gc-label", { "gc-for": this.gcName }, this.label), input));
  }
  static get watchers() { return {
    "value": ["watchPropHandler"]
  }; }
  static get style() { return gcFormFieldCss; }
}, [2, "gc-form-field", {
    "label": [1],
    "gcName": [1, "gc-name"],
    "gcId": [1, "gc-id"],
    "type": [1],
    "placeholder": [1],
    "disabled": [4],
    "value": [1537],
    "items": [1],
    "search": [1],
    "prefixIcon": [1, "prefix-icon"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-form-field", "gc-icon", "gc-input", "gc-label", "gc-menu", "gc-menu-item", "gc-select"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-form-field":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcFormField$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "gc-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "gc-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcFormField = GcFormField$1;
const defineCustomElement = defineCustomElement$1;

export { GcFormField, defineCustomElement };
