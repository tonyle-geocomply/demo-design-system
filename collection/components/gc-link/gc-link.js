import { Component, Prop, h } from '@stencil/core';
export class GcLink {
  getClassName() {
    return this.class ? `gc-link ${this.class}` : 'gc-link';
  }
  render() {
    if (this.icon) {
      return (h("div", { style: { display: 'flex', alignItems: 'baseline', cursor: 'pointer' } },
        h("gc-icon", { name: this.icon, size: "sm", color: "#397FF7" }),
        h("a", { style: { color: this.color || 'var(--gc-color-primary)', marginLeft: '8px' }, class: this.getClassName(), id: this.gcId, href: this.gcTo },
          h("slot", null))));
    }
    return (h("a", { style: { color: this.color || 'var(--gc-color-primary)' }, class: this.getClassName(), id: this.gcId, href: this.gcTo },
      h("slot", null)));
  }
  static get is() { return "gc-link"; }
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The id"
      },
      "attribute": "gc-id",
      "reflect": false
    },
    "gcTo": {
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
        "text": "Go to link"
      },
      "attribute": "gc-to",
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
        "text": "Icon name"
      },
      "attribute": "icon",
      "reflect": false
    },
    "color": {
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
        "text": "The color of link"
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
