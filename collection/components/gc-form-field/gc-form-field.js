import { Component, Prop, Host, h } from '@stencil/core';
export class GcFormField {
  constructor() {
    /**
     * The input type
     */
    this.type = 'text';
    /**
     *  [{
     *    label: 'Shivaji Varma',
     *    value: 'shivaji-varma'
     *  }]
     */
    this.items = [];
    /**
     * Search type
     * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
     */
    this.search = 'none';
  }
  render() {
    const input = this.type === 'select' ? (h("gc-select", { search: this.search, items: this.items, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder })) : (h("gc-input", { "prefix-icon": this.prefixIcon, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder }));
    return (h(Host, null,
      h("gc-label", { "gc-for": this.gcName }, this.label),
      input));
  }
  static get is() { return "gc-form-field"; }
  static get encapsulation() { return "scoped"; }
  static get properties() { return {
    "label": {
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
        "text": "The label name"
      },
      "attribute": "label",
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
        "text": "The field name"
      },
      "attribute": "gc-name",
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
        "text": "The field id"
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
    "items": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | []",
        "resolved": "[] | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[{\n  label: 'Shivaji Varma',\n  value: 'shivaji-varma'\n}]"
      },
      "attribute": "items",
      "reflect": false,
      "defaultValue": "[]"
    },
    "search": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'none' | 'initial' | 'contains' | 'managed'",
        "resolved": "\"contains\" | \"initial\" | \"managed\" | \"none\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Search type\nPossible values are `\"none\"`, `\"initial\"`, `\"contains\"`, `\"managed\"`. Defaults to `\"none\"`."
      },
      "attribute": "search",
      "reflect": false,
      "defaultValue": "'none'"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Prefix icon"
      },
      "attribute": "prefix-icon",
      "reflect": false
    }
  }; }
}
