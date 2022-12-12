import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './gc-dropdown2.js';
import { d as defineCustomElement$4 } from './gc-icon2.js';
import { d as defineCustomElement$3 } from './gc-menu2.js';
import { d as defineCustomElement$2 } from './gc-menu-item2.js';

const gcCellInvalidCss = ":host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:var(--gc-color-light-red)}";

const GcCellInvalid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The tooltip position
     */
    this.tooltipPosition = 'bottom';
  }
  render() {
    return (h("div", { class: "gc__cell-invalid" }, this.message ? (h("gc-dropdown", { id: "tootip", trigger: "hover", positions: this.tooltipPosition }, h("gc-icon", { name: "fa-regular fa-circle-exclamation", size: "23px", color: "var(--gc-color-red)" }), h("div", { slot: "gc__dropdown-content", class: "menu", style: { padding: '16px' } }, h("div", null, this.message)))) : (h("gc-icon", { name: "fa-regular fa-square-info", size: "14px", color: "var(--gc-color-primary)" }))));
  }
  static get style() { return gcCellInvalidCss; }
}, [1, "gc-cell-invalid", {
    "message": [1],
    "tooltipPosition": [1, "tooltip-position"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-cell-invalid", "gc-dropdown", "gc-icon", "gc-menu", "gc-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-cell-invalid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcCellInvalid$1);
      }
      break;
    case "gc-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcCellInvalid = GcCellInvalid$1;
const defineCustomElement = defineCustomElement$1;

export { GcCellInvalid, defineCustomElement };
