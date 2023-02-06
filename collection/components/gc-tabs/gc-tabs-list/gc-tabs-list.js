import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
export class GcTabsList {
  constructor() {
    this.variant = 'line';
    this.managed = false;
  }
  tabClick(evt) {
    if (!this.managed) {
      this.deselectAllTabs();
      evt.target.selected = true;
    }
  }
  deselectAllTabs() {
    var _a;
    const tabs = (_a = this.elm) === null || _a === void 0 ? void 0 : _a.querySelectorAll('gc-tab');
    tabs.forEach(tab => {
      tab.selected = false;
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: { 'tabs-list': true, [`variant-${this.variant}`]: true } },
        h("div", { class: "tabs-container" },
          h("slot", null)))));
  }
  static get is() { return "gc-tabs-list"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-tabs-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-tabs-list.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'line' | 'contained'",
        "resolved": "\"contained\" | \"line\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'line'"
    },
    "managed": {
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
        "text": ""
      },
      "attribute": "managed",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "elm"; }
  static get listeners() { return [{
      "name": "gc:tab-click",
      "method": "tabClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
