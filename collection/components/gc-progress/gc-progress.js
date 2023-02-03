import { Component, Prop, h } from '@stencil/core';
export class GcProgress {
  render() {
    return (h("div", { class: "progress", style: { width: this.width } },
      h("div", { class: "bar", style: { width: `${this.percent}%` } },
        h("span", { class: "progress-text" },
          this.percent,
          "%"))));
  }
  static get is() { return "gc-progress"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-progress.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-progress.css"]
  }; }
  static get properties() { return {
    "percent": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The percent of progress"
      },
      "attribute": "percent",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The width of progress"
      },
      "attribute": "width",
      "reflect": false
    }
  }; }
}
