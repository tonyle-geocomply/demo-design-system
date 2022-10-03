import { Component, h, Host, Prop } from '@stencil/core';
export class GcIcon {
  constructor() {
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
     */
    this.size = 'md';
    this.color = '';
  }
  getSize() {
    let size;
    if (this.size === 'sm')
      size = '1rem';
    else if (!this.size || this.size === 'md')
      size = '1.25rem';
    else if (this.size === 'lg')
      size = '1.5rem';
    else if (this.size === 'xl')
      size = '1.75rem';
    else
      size = this.size;
    return size;
  }
  render() {
    return (h(Host, null,
      h("i", { class: this.name, style: { fontSize: this.getSize(), color: this.color } })));
  }
  static get is() { return "gc-icon"; }
  static get originalStyleUrls() { return {
    "$": ["../../global/fontawesome-pro/css/all.min.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../../global/fontawesome-pro/css/all.min.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": ""
      },
      "attribute": "name",
      "reflect": true
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md' | 'lg' | 'xl' | string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The Icon size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`, `\"xl\"` and size in pixel. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "'md'"
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
        "text": ""
      },
      "attribute": "color",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
}
