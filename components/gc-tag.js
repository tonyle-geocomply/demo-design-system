import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const gcTagCss = ".gc__badge{border-radius:60px;text-align:center;color:var(--gc-color-contrast-white);padding:6px;display:inline-block}.gc__badge--primary{background-color:var(--gc-color-primary)}.gc__badge--success{background-color:var(--gc-color-green)}.gc__badge--warning{background-color:var(--gc-color-orange)}.gc__badge--danger{background-color:var(--gc-color-dark-red)}.gc__badge--info{background-color:var(--gc-color-cyan)}.gc__badge--processing{background-color:var(--gc-color-purple)}";

const GcTag$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The width of badge
     */
    this.width = '76px';
    /**
     * The background of badge
     */
    this.background = 'var(--gc-color-primary)';
    /**
     * The color of badge
     */
    this.color = 'var(--gc-color-contrast-white)';
    /**
     * The border width of badge
     */
    this.borderWidth = '0px';
    /**
     * The border color of badge
     */
    this.borderColor = 'none';
  }
  getClassNameFromType() {
    return `gc__badge gc__badge--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  getStyle() {
    return {
      width: this.width,
      color: this.color,
      backgroundColor: this.type ? '' : this.background,
      borderWidth: this.type ? 'none' : this.borderWidth || '1px',
      borderColor: this.type ? 'none' : this.borderColor,
      borderStyle: this.type ? 'none' : 'solid',
    };
  }
  render() {
    return (h("div", { style: this.getStyle(), class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
  static get style() { return gcTagCss; }
}, [1, "gc-tag", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "type": [1],
    "width": [1],
    "background": [1],
    "color": [1],
    "borderWidth": [1, "border-width"],
    "borderColor": [1, "border-color"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-tag"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-tag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTag$1);
      }
      break;
  } });
}

const GcTag = GcTag$1;
const defineCustomElement = defineCustomElement$1;

export { GcTag, defineCustomElement };
