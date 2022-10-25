import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gc-icon2.js';

const gcButtonCss = "button{padding:0 20px;height:41px;border-radius:var(--border-radius-btn);box-shadow:none;border:0px;font-size:var(--gc-font-size);cursor:pointer}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:var( --gc-color-primary);color:var(--gc-color-contrast-white)}button.gc__btn--danger{background:var(--gc-color-danger);color:var(--gc-color-contrast-white)}button.gc__btn--secondary{background:#E8ECF0;color:#35383D}button.gc__btn--closed{background:var(--gc-color-third-grey);color:var(--gc-color-contrast-white)}button>.gc__button-text{line-height:41px}button>.gc__button-icon{vertical-align:middle;margin-right:8px}";

const GcButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcClick = createEvent(this, "gc:click", 7);
    /**
     * The type name
     */
    this.type = 'primary';
  }
  getClassNameFromType() {
    return `gc__btn--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.disabled ? 'disabled' : ''} ${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  getColorIcon() {
    if (this.type === 'secondary') {
      return 'var(--gc-color-text-grey)';
    }
    return 'var(--gc-color-contrast-white)';
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (this.href) {
      if (this.target) {
        window.open(this.href, this.target);
      }
      else {
        window.location.href = this.href;
      }
    }
  }
  onClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.gcClick.emit(ev);
  }
  renderButton() {
    return (h("button", { style: { height: this.height, padding: `0 ${this.paddingText}` }, onClick: e => this.onClick(e), class: this.getClassName(), id: this.gcId }, this.icon && (h("span", { class: "gc__button-icon" }, h("gc-icon", { color: this.getColorIcon(), name: this.icon, size: "1rem" }))), h("span", { style: { lineHeight: this.height }, class: "gc__button-text" }, h("slot", null))));
  }
  render() {
    if (this.href) {
      return (h("a", { href: this.href, target: this.target }, this.renderButton()));
    }
    return this.renderButton();
  }
  static get style() { return gcButtonCss; }
}, [1, "gc-button", {
    "class": [1],
    "type": [1],
    "disabled": [4],
    "gcId": [1, "gc-id"],
    "icon": [1],
    "href": [1],
    "target": [1],
    "height": [1],
    "paddingText": [1, "padding-text"]
  }, [[2, "click", "handleClick"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-button", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcButton);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcButton as G, defineCustomElement as d };
