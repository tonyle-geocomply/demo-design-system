import { Component, Host, h, Prop, Event, Method, Element, State, Watch, Listen } from '@stencil/core';
export class GcStep {
  constructor() {
    this.calculatedHeight = 0;
    this.transitioning = false;
    /**
     * index of step item from top to bottom
     */
    this.index = -1;
    /**
     * step item is open or opening (css transition)
     */
    this.open = false;
    /**
     * The mutation observer config to listen for content changes in the step item
     */
    this.mutationObserverConfig = { childList: true, subtree: true };
    /**
     * The icon in step
     */
    this.icon = 'fa-regular fa-building-shield';
    /**
     * The status in step
     */
    this.status = '';
    /**
     * Disabled in step
     */
    this.disabled = false;
  }
  get style() {
    return {
      height: this.open ? this.calculatedHeight + 'px' : '0px',
    };
  }
  stateChanged() {
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-step');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i;
      }
    }
    this.mutationObserver = new MutationObserver(() => this.contentChanged.emit());
    this.mutationObserver.observe(this.element, this.mutationObserverConfig);
  }
  componentDidLoad() {
    this.calculateHeight();
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  recalculateHeight() {
    const oldCalculatedHeight = this.calculatedHeight;
    if (this.calculateHeight() != oldCalculatedHeight && this.open) {
      this.transitioning = true;
    }
  }
  /**
   * close the step item
   */
  async closeItem() {
    this.open = false;
    this.closeEvent.emit({
      index: this.index,
    });
  }
  /**
   * open the step item
   */
  async openItem() {
    this.open = true;
    this.openEvent.emit({
      index: this.index,
    });
  }
  toggle() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      this.closeItem();
    }
    else {
      this.openItem();
    }
  }
  handleTransitionEnd() {
    this.transitioning = false;
  }
  calculateHeight() {
    this.calculatedHeight = this.element.querySelector('gc-step > section > div').clientHeight;
    return this.calculatedHeight;
  }
  render() {
    const successCondition = !this.open && this.status === 'success';
    const opacityCondition = !this.open && this.status !== 'success';
    const children = this.element.parentElement.querySelectorAll('gc-step');
    return (h(Host, null,
      h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true, 'gc__head-opacity': opacityCondition }, onClick: () => this.toggle() },
        h("div", { class: "gc__step-item-title" },
          h("div", { style: { borderColor: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' }, class: { 'transitioning-rotate': this.transitioning && this.open, 'gc__step-item-icon': true } }, successCondition ? (h("gc-icon", { name: "fa-regular fa-check", color: "var(--gc-color-green)", size: "24px" })) : (h("gc-icon", { name: this.icon, color: "var(--gc-color-primary)", size: "22px" }))),
          h("div", { class: "gc__step-item-title--content" },
            h("div", { style: { color: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' } },
              h("slot", { name: "title" })),
            h("slot", { name: "description" }))),
        !this.open && h("hr", null)),
      h("section", { onTransitionEnd: () => this.handleTransitionEnd(), class: { 'gc__steps-section': true, 'transitioning': this.transitioning, 'open': this.open }, style: this.style },
        h("div", null,
          h("slot", null))),
      +this.index === children.length - 1 && (h("div", { style: { marginTop: '30px' } }))));
  }
  static get is() { return "gc-step"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-step.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-step.css"]
  }; }
  static get properties() { return {
    "index": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "index of step item from top to bottom"
      },
      "attribute": "index",
      "reflect": true,
      "defaultValue": "-1"
    },
    "open": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "step item is open or opening (css transition)"
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    },
    "mutationObserverConfig": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ childList: boolean; subtree: boolean; }",
        "resolved": "{ childList: boolean; subtree: boolean; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The mutation observer config to listen for content changes in the step item"
      },
      "defaultValue": "{ childList: true, subtree: true }"
    },
    "icon": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The icon in step"
      },
      "attribute": "icon",
      "reflect": true,
      "defaultValue": "'fa-regular fa-building-shield'"
    },
    "status": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The status in step"
      },
      "attribute": "status",
      "reflect": true,
      "defaultValue": "''"
    },
    "disabled": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disabled in step"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "transitioning": {}
  }; }
  static get events() { return [{
      "method": "openEvent",
      "name": "openEvent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "triggered when the step item is opened"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "closeEvent",
      "name": "closeEvent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "triggered when the step item is opened"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "contentChanged",
      "name": "contentChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "triggered when the content of the step item changes"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "closeItem": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "close the step item",
        "tags": []
      }
    },
    "openItem": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "open the step item",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "stateChanged"
    }]; }
  static get listeners() { return [{
      "name": "contentChanged",
      "method": "recalculateHeight",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
