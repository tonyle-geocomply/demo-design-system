import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const gcTextareaCss = ".sc-gc-textarea-h{display:flex}textarea.sc-gc-textarea{background:var(--gc-color-contrast-grey);border:1px solid var(--gc-color-second-grey);border-radius:5px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative;display:inline-block;margin:0}textarea.has-error.sc-gc-textarea{background:#FFF9F9;border:1px solid var(--gc-color-red)}textarea[disabled].sc-gc-textarea{color:#00000040;background-color:#f5f5f5;box-shadow:none;cursor:not-allowed;opacity:1}textarea.sc-gc-textarea:focus{background-color:var(--gc-color-contrast-grey);border-color:var(--gc-color-primary);outline:0;box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.sc-gc-textarea::placeholder{color:var(--gc-color-placeholder)}.sc-gc-textarea:-ms-input-placeholder{color:var(--gc-color-placeholder)}.sc-gc-textarea::-ms-input-placeholder{color:var(--gc-color-placeholder)}textarea.sc-gc-textarea::-webkit-scrollbar{height:3px;width:3px}textarea.sc-gc-textarea::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}textarea.sc-gc-textarea::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}";

const GcTextarea = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcChange = createEvent(this, "gc:change", 7);
    /**
     * Is error
     */
    this.isError = false;
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.value || '' });
    };
  }
  render() {
    return (h(Host, null, h("textarea", { class: `${this.class || ''} ${this.isError ? 'has-error' : ''}`, name: this.gcName, onInput: this.onInput, id: this.gcId, value: this.value, placeholder: this.placeholder, disabled: this.disabled, maxlength: this.maxlength, rows: this.rows, cols: this.cols })));
  }
  static get style() { return gcTextareaCss; }
}, [2, "gc-textarea", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "placeholder": [1],
    "disabled": [4],
    "value": [1],
    "gcName": [1, "gc-name"],
    "cols": [2],
    "rows": [2],
    "maxlength": [2],
    "isError": [4, "is-error"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-textarea":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTextarea);
      }
      break;
  } });
}

export { GcTextarea as G, defineCustomElement as d };
