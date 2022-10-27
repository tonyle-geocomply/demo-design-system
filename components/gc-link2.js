import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gc-icon2.js';

const typographyCss = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcLink = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * target link
     */
    this.target = '_self';
  }
  getClassName() {
    return this.class ? `gc-link ${this.class}` : 'gc-link';
  }
  onClickIcon() {
    window.open(this.gcTo, this.target);
  }
  render() {
    if (this.icon) {
      return (h("div", { style: { display: 'flex', alignItems: 'baseline', cursor: 'pointer' } }, h("gc-icon", { onClick: () => this.onClickIcon(), name: this.icon, size: "13px", color: "#397FF7" }), h("a", { target: this.target, style: { color: this.color || 'var(--gc-color-primary)', marginLeft: '8px' }, class: this.getClassName(), id: this.gcId, href: this.gcTo }, h("slot", null))));
    }
    return (h("a", { target: this.target, style: { color: this.color || 'var(--gc-color-primary)' }, class: this.getClassName(), id: this.gcId, href: this.gcTo }, h("slot", null)));
  }
  static get style() { return typographyCss; }
}, [1, "gc-link", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "gcTo": [1, "gc-to"],
    "icon": [1],
    "color": [1],
    "target": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-link", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcLink);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcLink as G, defineCustomElement as d };
