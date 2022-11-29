import { Component, Prop, h } from '@stencil/core';
export class GcSpinner {
  constructor() {
    /**
    * Is float above background
    */
    this.isFloat = false;
  }
  getClass() {
    return {
      'gc__spinner': true,
      'gc__spinner-float': this.isFloat,
    };
  }
  render() {
    return (h("div", { class: this.getClass() },
      h("div", { class: "gc__spinner-loading" },
        h("svg", { width: "20", height: "23", viewBox: "0 0 20 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          h("g", { "clip-path": "url(#clip0_219_2389)" },
            h("path", { d: "M19.6042 -9.53674e-07V9.49906C19.6042 15.684 16.2297 20.6158 9.80211 23C3.37455 20.6158 0 15.684 0 9.49906V-9.53674e-07H19.6042ZM17.7157 1.90039H1.88859V9.49906C1.88859 14.6727 4.53899 18.7562 9.80211 20.9801C15.0623 18.7562 17.7157 14.6727 17.7157 9.49906V1.90039ZM6.26829 6.18504V9.49906C6.26829 12.4516 7.27051 14.6348 9.80211 16.13C12.0528 14.7951 13.1361 12.9763 13.3765 10.5104H8.68983V8.52846H15.4389V9.49906C15.4389 13.3815 13.5909 16.4536 9.81371 18.3539C6.06549 16.4536 4.25802 13.3815 4.25802 9.49906V4.20301H15.4273V6.18504H6.26829Z", fill: "#0046FC" })),
          h("defs", null,
            h("clipPath", { id: "clip0_219_2389" },
              h("rect", { width: "20", height: "23", fill: "white" })))))));
  }
  static get is() { return "gc-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-spinner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-spinner.css"]
  }; }
  static get properties() { return {
    "isFloat": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Is float above background"
      },
      "attribute": "is-float",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
