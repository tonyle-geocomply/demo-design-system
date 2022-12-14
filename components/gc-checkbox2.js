import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const gcCheckboxCss = ".sc-gc-checkbox-h{display:block}input.sc-gc-checkbox{padding:0;height:initial;width:initial;margin-bottom:0;display:none;cursor:pointer}label.gc__label.sc-gc-checkbox{position:relative;cursor:pointer;box-sizing:inherit !important;font-weight:normal !important;color:var(--gc-color-text-grey);font-size:13px;text-transform:initial;margin-bottom:0;display:initial}label.gc__label.sc-gc-checkbox:before{content:'';appearance:none;border:1px solid var(--gc-color-second-grey);box-shadow:0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);padding:7px;display:inline-block;position:relative;vertical-align:text-bottom;cursor:pointer;margin-right:5px;border-radius:3px}input.sc-gc-checkbox:checked+label.gc__label.sc-gc-checkbox:before{background-color:var(--gc-color-primary);border:0;padding:8px}input.sc-gc-checkbox:checked+label.gc__label.sc-gc-checkbox:after{content:'';display:block;position:absolute;top:1px;left:5px;width:4px;height:7px;border:1px solid var(--gc-color-contrast-white);border-width:0 2px 2px 0;transform:rotate(40deg);box-sizing:initial}input.sc-gc-checkbox:disabled+label.gc__label.sc-gc-checkbox:before{border:1px solid var(--gc-color-second-grey);opacity:0.6;cursor:not-allowed}input.sc-gc-checkbox:disabled+label.gc__label.sc-gc-checkbox{cursor:not-allowed;text-decoration:line-through;color:var(--gc-color-disabled)}input.sc-gc-checkbox:disabled:checked+label.gc__label.sc-gc-checkbox:before{border:0;opacity:0.6;cursor:not-allowed}input.sc-gc-checkbox:disabled:checked+label.gc__label.sc-gc-checkbox{cursor:not-allowed;text-decoration:none}";

const GcCheckbox = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcChange = createEvent(this, "gc:change", 7);
    /**
     * Is checked ?
     */
    this.checked = false;
    /**
     * Is disabled ?
     */
    this.disabled = false;
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.checked || false });
    };
  }
  render() {
    return (h(Host, null, h("input", { class: this.class, id: this.gcName, type: "checkbox", onInput: this.onInput, checked: this.checked, disabled: this.disabled }), h("label", { class: "gc__label", htmlFor: this.gcName }, this.label)));
  }
  static get style() { return gcCheckboxCss; }
}, [2, "gc-checkbox", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "gcName": [1, "gc-name"],
    "label": [1],
    "checked": [4],
    "disabled": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcCheckbox);
      }
      break;
  } });
}

export { GcCheckbox as G, defineCustomElement as d };
