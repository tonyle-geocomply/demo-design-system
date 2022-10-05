import { Component, Prop, h, Event } from '@stencil/core';
export class GcPagination {
  constructor() {
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
    return (h("div", { class: "gc__pagination" },
      this.activePage !== 1 && (h("div", { onClick: () => this.onChange(this.activePage - 1), class: "gc__pagination-page" },
        h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-left" }))),
      this.renderPagination(this.activePage, this.getMaxPage()),
      this.activePage !== this.getMaxPage() && (h("div", { onClick: () => this.onChange(this.activePage + 1), class: "gc__pagination-page" },
        h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-right" })))));
  }
  static get is() { return "gc-pagination"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-pagination.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-pagination.css"]
  }; }
  static get properties() { return {
    "pageSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The page size"
      },
      "attribute": "page-size",
      "reflect": false,
      "defaultValue": "20"
    },
    "activePage": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The page size"
      },
      "attribute": "active-page",
      "reflect": false,
      "defaultValue": "1"
    },
    "total": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The total"
      },
      "attribute": "total",
      "reflect": false,
      "defaultValue": "20"
    }
  }; }
  static get events() { return [{
      "method": "gcChangePage",
      "name": "gc:change-page",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the value has changed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
