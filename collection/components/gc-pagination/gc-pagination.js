import { Component, Prop, h } from '@stencil/core';
export class GcPagination {
  render() {
    return (h("div", { class: "gc__pagination" },
      h("div", { class: "gc__pagination-page active" }, "1"),
      h("div", { class: "gc__pagination-page" }, "2"),
      h("div", { class: "gc__pagination-page" }, "3"),
      h("div", { class: "gc__pagination-page" }, "4"),
      h("div", { class: "gc__pagination-dots" }, "..."),
      h("div", { class: "gc__pagination-page" }, "26"),
      h("div", { class: "gc__pagination-page" },
        h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-right" }))));
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
    "class": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The class name"
      },
      "attribute": "class",
      "reflect": false
    },
    "gcId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The id"
      },
      "attribute": "gc-id",
      "reflect": false
    },
    "gcFor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Label for what component"
      },
      "attribute": "gc-for",
      "reflect": false
    }
  }; }
}
