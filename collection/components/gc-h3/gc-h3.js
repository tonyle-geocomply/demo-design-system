import { Component, Prop, h } from '@stencil/core';
export class GcH3 {
  getClassName() {
    return this.class ? `gc-h3 ${this.class}` : 'gc-h3';
  }
  render() {
    return (h("h3", { class: this.getClassName(), id: this.gcId },
      h("slot", null)));
  }
  static get is() { return "gc-h3"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["../../global/styles/typography.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../../global/styles/typography.css"]
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
    }
  }; }
}
