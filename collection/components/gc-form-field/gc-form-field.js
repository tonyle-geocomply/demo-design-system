import { Component, Prop, Host, h, Event } from '@stencil/core';
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
  handleChange(evt) {
    this.value = evt.detail.value;
    this.gcFieldChange.emit({ value: evt.detail.value });
  }
  renderField() {
    switch (this.type) {
      case 'select':
        return (h("gc-select", { search: this.search, items: this.items, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText }));
      case 'textarea':
        return (h("gc-textarea", { "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText }));
      default:
        return (h("gc-input", { "prefix-icon": this.prefixIcon, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText }));
    }
  }
  render() {
    const input = this.renderField();
    return (h(Host, null,
      h("gc-label", { "gc-for": this.gcName }, this.label),
      input,
      this.infoText && h("div", { class: "gc__form-field-info" }, this.infoText),
      this.errorText && h("div", { class: "gc__form-field-error" }, this.errorText)));
  }
  static get is() { return "gc-form-field"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-form-field.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-form-field.css"]
  }; }
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
      "mutable": true,
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
      "reflect": true
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
    },
    "errorText": {
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
        "text": "Error text"
      },
      "attribute": "error-text",
      "reflect": false
    },
    "infoText": {
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
        "text": "Info text"
      },
      "attribute": "info-text",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "gcFieldChange",
      "name": "gc:field-change",
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
