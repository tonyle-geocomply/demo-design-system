import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './gc-dropdown2.js';
import { d as defineCustomElement$4 } from './gc-icon2.js';
import { d as defineCustomElement$3 } from './gc-menu2.js';
import { d as defineCustomElement$2 } from './gc-menu-item2.js';

const gcTagGroupCss = ".show-more-text.sc-gc-tag-group{text-align:center;cursor:pointer;text-decoration:underline}.gc__dropdown-heading.sc-gc-tag-group{height:41px;font-size:15px;background:#DFE3E7;display:flex;align-items:center;padding:0 13px;font-weight:700}.gc__dropdown-block.sc-gc-tag-group{padding:13px}.gc__keep-tags.sc-gc-tag-group{width:fit-content}";

const GcTagGroup$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.maxWidth = '';
    this.headingText = '';
    this.isToggle = false;
    this.widthOfBlock = '';
  }
  handleToggle() {
    this.isToggle = !this.isToggle;
  }
  componentDidLoad() {
    const keepTagsBlocks = document.getElementsByClassName('gc__keep-tags');
    this.widthOfBlock = keepTagsBlocks[0].clientWidth + 'px';
  }
  render() {
    const text = this.isToggle ? 'Hide' : 'Show more';
    return (h(Host, null, h("div", { class: "gc__keep-tags" }, h("slot", { name: "keep-tags" })), h("gc-dropdown", null, h("div", { onClick: () => this.handleToggle(), class: "show-more-text", style: { width: this.widthOfBlock } }, text), h("div", { slot: "gc__dropdown-content" }, this.headingText && h("div", { class: "gc__dropdown-heading" }, this.headingText), h("div", { class: "gc__dropdown-block", style: { maxWidth: this.maxWidth } }, h("slot", null))))));
  }
  get element() { return this; }
  static get style() { return gcTagGroupCss; }
}, [6, "gc-tag-group", {
    "maxWidth": [1, "max-width"],
    "headingText": [1, "heading-text"],
    "isToggle": [32],
    "widthOfBlock": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-tag-group", "gc-dropdown", "gc-icon", "gc-menu", "gc-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-tag-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTagGroup$1);
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

const GcTagGroup = GcTagGroup$1;
const defineCustomElement = defineCustomElement$1;

export { GcTagGroup, defineCustomElement };
