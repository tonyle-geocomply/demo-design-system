import { Component, Prop, h } from '@stencil/core';
export class GcCellInvalid {
  constructor() {
    /**
     * The tooltip position
     */
    this.tooltipPosition = 'bottom-end';
  }
  render() {
    return (h("div", { class: "gc__cell-invalid" }, this.message ? (h("gc-dropdown", { trigger: "hover", positions: this.tooltipPosition },
      h("gc-icon", { name: "fa-regular fa-circle-exclamation", size: "23px", color: "var(--gc-color-red)" }),
      h("div", { slot: "gc__dropdown-content", class: "menu", style: { padding: '16px' } },
        h("div", null, this.message)))) : (h("gc-icon", { name: "fa-regular fa-square-info", size: "14px", color: "var(--gc-color-primary)" }))));
  }
  static get is() { return "gc-cell-invalid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-cell-invalid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-cell-invalid.css"]
  }; }
  static get properties() { return {
    "message": {
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
        "text": "The error message"
      },
      "attribute": "message",
      "reflect": false
    },
    "tooltipPosition": {
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
        "text": "The tooltip position"
      },
      "attribute": "tooltip-position",
      "reflect": false,
      "defaultValue": "'bottom-end'"
    }
  }; }
}
