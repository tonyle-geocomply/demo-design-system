import { Component, Prop, h } from '@stencil/core';
export class GcUl {
  getClassName() {
    return this.class ? `gc-ul ${this.class}` : 'gc-ul';
  }
  render() {
    return (h("ul", { class: this.getClassName(), id: this.gcId },
      h("slot", null)));
  }
  static get is() { return "gc-ul"; }
  static get encapsulation() { return "scoped"; }
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
