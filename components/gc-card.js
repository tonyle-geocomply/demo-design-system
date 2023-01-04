import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gc-icon2.js';

const gcCardCss = ".gc__card.sc-gc-card{border:1px solid var(--gc-color-second-grey);border-radius:5px 5px 0px 0px;box-sizing:border-box}.gc__card-heading.sc-gc-card{height:55px;display:flex;align-items:center;border-bottom:1px solid var(--gc-color-second-grey);padding:0 20px;font-weight:600}.gc__card-heading.sc-gc-card gc-icon.sc-gc-card{margin-right:8px}";

const GcCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * The width of card
     */
    this.width = '267px';
    /**
     * The height of card
     */
    this.height = 'auto';
    /**
     * The height of card
     */
    this.background = '#ffffff';
  }
  getClassName() {
    return this.class ? `gc__card ${this.class}` : 'gc__card';
  }
  render() {
    return (h("div", { class: this.getClassName(), style: { width: this.width, height: this.height, background: this.background } }, this.heading || this.icon ? (h("div", { class: "gc__card-heading" }, this.icon && h("gc-icon", { color: "var(--gc-color-primary)", name: this.icon }), this.heading || '')) : null, h("slot", null)));
  }
  static get style() { return gcCardCss; }
}, [6, "gc-card", {
    "class": [1],
    "width": [1],
    "height": [1],
    "background": [1],
    "heading": [1],
    "icon": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-card", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcCard$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcCard = GcCard$1;
const defineCustomElement = defineCustomElement$1;

export { GcCard, defineCustomElement };
