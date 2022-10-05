import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gc-icon2.js';

const gcPaginationCss = ".gc__pagination{display:flex;align-items:center}.gc__pagination .gc__pagination-page{background:#FFFFFF;border:1px solid #DAE1E8;border-radius:6px;color:var(--gc-color-primary);padding:2px;width:26px;height:26px;text-align:center;align-items:center;display:flex;justify-content:center;margin-right:8px;cursor:pointer}.gc__pagination .gc__pagination-page:last-child{margin-right:0}.gc__pagination .gc__pagination-page.active,.gc__pagination .gc__pagination-page:hover{background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.gc__pagination-dots{color:var(--gc-color-primary);margin-right:8px}.gc__pagination .gc__pagination-page.active,.gc__pagination .gc__pagination-page:hover>gc-icon>i{color:var(--gc-color-contrast-white) !important}";

const GcPagination = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcChangePage = createEvent(this, "gc:change-page", 7);
    /**
     * The page size
     */
    this.pageSize = 20;
    /**
     * The page size
     */
    this.activePage = 1;
    /**
     * The total
     */
    this.total = 20;
    this.onChange = num => {
      this.activePage = num;
      this.gcChangePage.emit({ value: num });
    };
  }
  getMaxPage() {
    if (this.total % this.pageSize === 0) {
      return this.total / this.pageSize;
    }
    return Math.floor(this.total / this.pageSize) + 1;
  }
  renderPagination(c, m) {
    const current = c, last = m, delta = 2, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [];
    let l;
    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(h("div", { onClick: () => this.onChange(l + 1), class: { 'gc__pagination-page': true, 'active': c === l + 1 } }, l + 1));
        }
        else if (i - l !== 1) {
          rangeWithDots.push(h("div", { class: "gc__pagination-dots" }, "..."));
        }
      }
      rangeWithDots.push(h("div", { onClick: () => this.onChange(i), class: { 'gc__pagination-page': true, 'active': c === i } }, i));
      l = i;
    }
    return rangeWithDots;
  }
  render() {
    return (h("div", { class: "gc__pagination" }, this.activePage !== 1 && (h("div", { onClick: () => this.onChange(this.activePage - 1), class: "gc__pagination-page" }, h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-left" }))), this.renderPagination(this.activePage, this.getMaxPage()), this.activePage !== this.getMaxPage() && (h("div", { onClick: () => this.onChange(this.activePage + 1), class: "gc__pagination-page" }, h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-right" })))));
  }
  static get style() { return gcPaginationCss; }
}, [1, "gc-pagination", {
    "pageSize": [2, "page-size"],
    "activePage": [1026, "active-page"],
    "total": [2]
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
