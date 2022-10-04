import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const typographyCss = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey)}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcH2$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getClassName() {
    return this.class ? `gc-h2 ${this.class}` : 'gc-h2';
  }
  render() {
    return (h("h2", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
  static get style() { return typographyCss; }
}, [1, "gc-h2", {
    "class": [1],
    "gcId": [1, "gc-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-h2"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-h2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcH2$1);
      }
      break;
  } });
}

const GcH2 = GcH2$1;
const defineCustomElement = defineCustomElement$1;

export { GcH2, defineCustomElement };
