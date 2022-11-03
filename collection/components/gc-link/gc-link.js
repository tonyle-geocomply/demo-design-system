import { Component, Prop, h } from '@stencil/core';
export class GcLink {
  constructor() {
    /**
     * target link
     */
    this.target = '_self';
  }
  getClassName() {
    return this.class ? `gc-link ${this.class}` : 'gc-link';
  }
  onClickIcon() {
    window.open(this.gcTo, this.target);
  }
  render() {
    if (this.icon) {
      return (h("div", { style: { display: 'flex', alignItems: 'baseline', cursor: 'pointer', fontSize: this.size } },
        h("gc-icon", { onClick: () => this.onClickIcon(), name: this.icon, size: this.size || '13px', color: "#397FF7" }),
        h("a", { target: this.target, style: { color: this.color || 'var(--gc-color-primary)', marginLeft: '8px' }, class: this.getClassName(), id: this.gcId, href: this.gcTo },
          h("slot", null))));
    }
    return (h("a", { target: this.target, style: { color: this.color || 'var(--gc-color-primary)', fontSize: this.size }, class: this.getClassName(), id: this.gcId, href: this.gcTo },
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
    },
    "target": {
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
        "text": "target link"
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "size": {
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
        "text": "Size of link"
      },
      "attribute": "size",
      "reflect": false
    }
  }; }
}
