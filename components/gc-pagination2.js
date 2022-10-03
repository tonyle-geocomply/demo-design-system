import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gc-icon2.js';

const gcPaginationCss = ".gc__pagination{display:flex;align-items:center}.gc__pagination .gc__pagination-page{background:#FFFFFF;border:1px solid #DAE1E8;border-radius:6px;color:var(--gc-color-primary);padding:2px;width:26px;height:26px;text-align:center;align-items:center;display:flex;justify-content:center;margin-right:8px}.gc__pagination .gc__pagination-page:last-child{margin-right:0}.gc__pagination .gc__pagination-page.active,.gc__pagination .gc__pagination-page:hover{background:var(--gc-color-primary);color:#FFFFFF}.gc__pagination-dots{color:var(--gc-color-primary);margin-right:8px}";

const GcPagination = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "gc__pagination" }, h("div", { class: "gc__pagination-page active" }, "1"), h("div", { class: "gc__pagination-page" }, "2"), h("div", { class: "gc__pagination-page" }, "3"), h("div", { class: "gc__pagination-page" }, "4"), h("div", { class: "gc__pagination-dots" }, "..."), h("div", { class: "gc__pagination-page" }, "26"), h("div", { class: "gc__pagination-page" }, h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-right" }))));
  }
  static get style() { return gcPaginationCss; }
}, [1, "gc-pagination", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "gcFor": [1, "gc-for"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-pagination", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-pagination":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcPagination);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcPagination as G, defineCustomElement as d };
