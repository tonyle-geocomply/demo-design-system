import { Component, Prop, h } from '@stencil/core';
export class GcAlert {
  constructor() {
    /**
     * The type of alert: info | success | error
     */
    this.type = 'info';
  }
  getClassName() {
    return this.type ? `gc__alert gc__alert-${this.type}` : 'gc__alert';
  }
  getIcon() {
    switch (this.type) {
      case 'error':
        return 'fa-regular fa-circle-exclamation';
      case 'success':
        return 'fa-light fa-thumbs-up';
      default:
        return 'fa-regular fa-square-info';
    }
  }
  render() {
    return (h("div", { class: this.getClassName() },
      h("div", { class: "gc__alert-message" },
        h("gc-icon", { name: this.getIcon() }),
        h("div", { class: "gc__alert-content" }, this.content)),
      h("slot", null)));
  }
  static get is() { return "gc-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-alert.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-alert.css"]
  }; }
  static get properties() { return {
    "type": {
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
        "text": "The type of alert: info | success | error"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'info'"
    },
    "content": {
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
        "text": "The content of alert"
      },
      "attribute": "content",
      "reflect": false
    }
  }; }
}
