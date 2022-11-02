import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './gc-icon2.js';
import { d as defineCustomElement$7 } from './gc-input2.js';
import { d as defineCustomElement$6 } from './gc-label2.js';
import { d as defineCustomElement$5 } from './gc-menu2.js';
import { d as defineCustomElement$4 } from './gc-menu-item2.js';
import { d as defineCustomElement$3 } from './gc-select2.js';
import { d as defineCustomElement$2 } from './gc-textarea2.js';

const gcFormFieldCss = ".sc-gc-form-field-h{width:100%}gc-label.sc-gc-form-field{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc__form-field-error.sc-gc-form-field{color:var(--gc-color-red);font-size:11px;text-align:right}.gc__form-field-info.sc-gc-form-field{color:#7A7A7A;font-size:11px;text-align:right}";

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
  handleChange(evt) {
    this.value = evt.detail.value;
    this.gcFieldChange.emit({ value: evt.detail.value });
  }
  renderField() {
    switch (this.type) {
      case 'select':
        return (h("gc-select", { search: this.search, items: this.items, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText }));
      case 'textarea':
        return (h("gc-textarea", { "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText }));
      default:
        return (h("gc-input", { "prefix-icon": this.prefixIcon, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText }));
    }
  }
  render() {
    const input = this.renderField();
    return (h(Host, null, h("gc-label", { "gc-for": this.gcName }, this.label), input, this.infoText && h("div", { class: "gc__form-field-info" }, this.infoText), this.errorText && h("div", { class: "gc__form-field-error" }, this.errorText)));
  }
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
    "prefixIcon": [1, "prefix-icon"],
    "errorText": [1, "error-text"],
    "infoText": [1, "info-text"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-form-field", "gc-icon", "gc-input", "gc-label", "gc-menu", "gc-menu-item", "gc-select", "gc-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-form-field":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcFormField$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "gc-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "gc-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-textarea":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcFormField = GcFormField$1;
const defineCustomElement = defineCustomElement$1;

export { GcFormField, defineCustomElement };
