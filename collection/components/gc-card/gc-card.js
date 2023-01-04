import { Component, Prop, h } from '@stencil/core';
export class GcCard {
  constructor() {
    /**
     * The width of card
     */
    this.width = '267px';
    /**
     * The height of card
     */
    this.height = 'auto';
    /**
     * The height of card
     */
    this.background = '#ffffff';
  }
  getClassName() {
    return this.class ? `gc__card ${this.class}` : 'gc__card';
  }
  render() {
    return (h("div", { class: this.getClassName(), style: { width: this.width, height: this.height, background: this.background } },
      this.heading || this.icon ? (h("div", { class: "gc__card-heading" },
        this.icon && h("gc-icon", { color: "var(--gc-color-primary)", name: this.icon }),
        this.heading || '')) : null,
      h("slot", null)));
  }
  static get is() { return "gc-card"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-card.css"]
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
    "width": {
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
        "text": "The width of card"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'267px'"
    },
    "height": {
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
        "text": "The height of card"
      },
      "attribute": "height",
      "reflect": false,
      "defaultValue": "'auto'"
    },
    "background": {
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
        "text": "The height of card"
      },
      "attribute": "background",
      "reflect": false,
      "defaultValue": "'#ffffff'"
    },
    "heading": {
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
        "text": "The heading in header"
      },
      "attribute": "heading",
      "reflect": false
    },
    "icon": {
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
        "text": "The icon in header"
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
