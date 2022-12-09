import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gc-icon2.js';

const gcAlertCss = ".gc__alert{width:fit-content;padding:12px;border-radius:8px}.gc__alert.gc__alert-info{background-color:#e6f4ff;border:1px solid var(--gc-color-primary);color:var(--gc-color-primary)}.gc__alert.gc__alert-error{background-color:#FFF8F8;border:1px solid var(--gc-color-red);color:var(--gc-color-red)}.gc__alert.gc__alert-success{background-color:rgba(21, 191, 33, 0.05);border:1px solid var(--gc-color-green);color:var(--gc-color-green)}.gc__alert-message{display:flex;align-items:center}.gc__alert-content{margin-left:12px}";

const GcAlert$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The type of alert: info | success | error
     */
    this.type = 'info';
  }
  getClassName() {
    return this.type ? `gc__alert gc__alert-${this.type}` : 'gc__alert';
  }
  getIcon() {
    switch (this.type) {
      case 'error':
        return 'fa-regular fa-circle-exclamation';
      case 'success':
        return 'fa-light fa-thumbs-up';
      default:
        return 'fa-regular fa-square-info';
    }
  }
  render() {
    return (h("div", { class: this.getClassName() }, h("div", { class: "gc__alert-message" }, h("gc-icon", { name: this.getIcon() }), h("div", { class: "gc__alert-content" }, this.content)), h("slot", null)));
  }
  static get style() { return gcAlertCss; }
}, [1, "gc-alert", {
    "type": [1],
    "content": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-alert", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-alert":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcAlert$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcAlert = GcAlert$1;
const defineCustomElement = defineCustomElement$1;

export { GcAlert, defineCustomElement };
