import { Component, Listen, h, Element, State, Method, Event, Prop } from '@stencil/core';
export class GcSteps {
  constructor() {
    this.activeStep = '';
    this.activeStatus = '';
    this.oldStep = '';
    this.activeStepState = false;
    this.customOpen = false;
  }
  openEventHandler(event) {
    const children = this.element.querySelectorAll('gc-step');
    const oldIndex = this.activeStep !== event.detail.index ? this.activeStep : this.oldStep;
    const newIndex = event.detail.index;
    const eventBefore = this.gcBeforeStepChange.emit({ index: newIndex, oldIndex });
    this.activeStep = newIndex;
    this.activeStatus = 'open';
    if (eventBefore.defaultPrevented) {
      return false;
    }
    this.gcStepChange.emit({ index: newIndex, oldIndex });
    children[event.detail.index].openItem();
    this.oldStep = oldIndex;
    for (let i = 0; i < children.length; i++) {
      if (event.detail.index != i) {
        children[i].closeItem();
      }
    }
  }
  closeEventHandler(event) {
    if (event.detail.index === this.activeStep) {
      this.activeStatus = 'close';
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
  componentWillLoad() {
    if (this.customOpen) {
      const children = this.element.querySelectorAll('gc-step');
      for (let i = 0; i < children.length; i++) {
        children[i].customOpen = true;
      }
    }
  }
  render() {
    const children = this.element.querySelectorAll('gc-step');
    return (h("div", { style: {
        paddingBottom: children && children[children.length - 1].index && children[children.length - 1].index == this.activeStep && this.activeStatus === 'open' ? '30px' : '',
      } },
      h("slot", null)));
  }
  static get is() { return "gc-steps"; }
  static get encapsulation() { return "scoped"; }
  static get properties() { return {
    "customOpen": {
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
      "attribute": "custom-open",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "activeStep": {},
    "activeStatus": {},
    "oldStep": {},
    "activeStepState": {}
  }; }
  static get events() { return [{
      "method": "gcStepChange",
      "name": "gc:step-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "triggered when the step item is active"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "gcBeforeStepChange",
      "name": "gc:before-step-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "triggered before the step item is active"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
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
      "name": "beforeOpenEvent",
      "method": "openEventHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "closeEvent",
      "method": "closeEventHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
