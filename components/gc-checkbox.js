import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcCheckboxCss = ":host{display:block;margin-bottom:15px}input{padding:0;height:initial;width:initial;margin-bottom:0;display:none;cursor:pointer}label{position:relative;cursor:pointer}label:before{content:'';appearance:none;border:1px solid var(--gc-color-second-grey);box-shadow:0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);padding:7px;display:inline-block;position:relative;vertical-align:bottom;cursor:pointer;margin-right:5px;border-radius:3px}input:checked+label:before{background-color:var(--gc-color-primary)}input:checked+label:after{content:'';display:block;position:absolute;top:3px;left:5px;width:4px;height:5px;border:1px solid var(--gc-color-contrast-white);border-width:0 2px 2px 0;transform:rotate(45deg)}input:disabled+label:before{border:1px solid var(--gc-color-second-grey);opacity:0.6;cursor:not-allowed}input:disabled+label{cursor:not-allowed;text-decoration:line-through;color:var(--gc-color-disabled)}";

const GcCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Is checked ?
     */
    this.checked = false;
    /**
     * Is disabled ?
     */
    this.disabled = false;
  }
  render() {
    return (h(Host, null, h("input", { class: this.class, id: this.gcName, type: "checkbox", checked: this.checked, disabled: this.disabled }), h("label", { htmlFor: this.gcName }, this.label)));
  }
  static get style() { return gcCheckboxCss; }
}, [1, "gc-checkbox", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "gcName": [1, "gc-name"],
    "label": [1],
    "checked": [4],
    "disabled": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcCheckbox$1);
      }
      break;
  } });
}

const GcCheckbox = GcCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { GcCheckbox, defineCustomElement };
