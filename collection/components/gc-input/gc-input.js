import { Component, Prop, h, Host, Event } from '@stencil/core';
export class GcInput {
  constructor() {
    /**
     * The input type
     */
    this.type = 'text';
    /**
     * Is error
     */
    this.isError = false;
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.value || '' });
    };
  }
  render() {
    return (h(Host, null,
      h("input", { class: this.prefixIcon ? `has-prefix ${this.class || ''} ${this.isError ? 'has-error' : ''}` : `${this.class || ''} ${this.isError ? 'has-error' : ''}`, name: this.gcName, onInput: this.onInput, id: this.gcId, type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled, autoComplete: "off" }),
      this.prefixIcon && h("gc-icon", { color: "var(--gc-color-primary)", name: this.prefixIcon })));
  }
  static get is() { return "gc-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-input.css"]
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
        "text": "The input type"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "placeholder": {
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
        "text": "The placeholder"
      },
      "attribute": "placeholder",
      "reflect": false
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
        "text": "Is disabled ?"
      },
      "attribute": "disabled",
      "reflect": false
    },
    "value": {
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
        "text": "The input value"
      },
      "attribute": "value",
      "reflect": false
    },
    "gcName": {
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
        "text": "The name of input"
      },
      "attribute": "gc-name",
      "reflect": false
    },
    "prefixIcon": {
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
        "text": "The name of input"
      },
      "attribute": "prefix-icon",
      "reflect": false
    },
    "isError": {
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
        "text": "Is error"
      },
      "attribute": "is-error",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "gcChange",
      "name": "gc:change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the value has changed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
