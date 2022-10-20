import { Component, Host, Listen, h, Element, Method } from '@stencil/core';
export class GcSteps {
  openEventHandler(event) {
    const children = this.element.querySelectorAll('gc-step');
    for (let i = 0; i < children.length; i++) {
      if (event.detail.index != i) {
        children[i].closeItem();
      }
    }
  }
  /**
   * Open an step item
   * @param index
   */
  async open(index) {
    this.getStepItem(index).openItem();
  }
  /**
   * close an step item
   * @param index
   */
  async close(index) {
    this.getStepItem(index).closeItem();
  }
  getStepItem(index) {
    const children = this.element.querySelectorAll('gc-step');
    if (index >= 0 && index < children.length) {
      return children[index];
    }
    else {
      throw new Error('index out of bounds');
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "gc-steps"; }
  static get encapsulation() { return "scoped"; }
  static get methods() { return {
    "open": {
      "complexType": {
        "signature": "(index: number) => Promise<void>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "index"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Open an step item",
        "tags": [{
            "name": "param",
            "text": "index"
          }]
      }
    },
    "close": {
      "complexType": {
        "signature": "(index: number) => Promise<void>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "index"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "close an step item",
        "tags": [{
            "name": "param",
            "text": "index"
          }]
      }
    }
  }; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "openEvent",
      "method": "openEventHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
