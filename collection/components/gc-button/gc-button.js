import { Component, Prop, Listen, h } from '@stencil/core';
export class GcButton {
  constructor() {
    /**
     * The type name
     */
    this.type = 'primary';
  }
  getClassNameFromType() {
    return `gc__btn--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.disabled ? 'disabled' : ''} ${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  getColorIcon() {
    if (this.type === 'secondary') {
      return 'var(--gc-color-text-grey)';
    }
    return 'var(--gc-color-contrast-white)';
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
  }
  render() {
    return (h("button", { class: this.getClassName(), id: this.gcId },
      this.icon && (h("span", { class: "gc__button-icon" },
        h("gc-icon", { color: this.getColorIcon(), name: this.icon, size: "1rem" }))),
      h("span", { class: "gc__button-text" },
        h("slot", null))));
  }
  static get is() { return "gc-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-button.css"]
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
    "type": {
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
        "text": "The type name"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Is disabled"
      },
      "attribute": "disabled",
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
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
