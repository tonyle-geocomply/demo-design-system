import { Component, Prop, h } from '@stencil/core';
export class GcLabel {
  getClassName() {
    return this.class || '';
  }
  render() {
    return (h("label", { class: this.getClassName(), id: this.gcId, htmlFor: this.gcFor },
      h("slot", null)));
  }
  static get is() { return "gc-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-label.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-label.css"]
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
