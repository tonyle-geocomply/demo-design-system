import { Component, Host, h, Prop, Event, Method, Element, State, Watch, Listen } from '@stencil/core';
export class GcStep {
  constructor() {
    this.calculatedHeight = 0;
    this.transitioning = false;
    this.isResize = false;
    this.openCount = 0;
    /**
     * index of step item from top to bottom
     */
    this.index = '';
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
    /**
     * Should open in step
     */
    this.shouldOpen = false;
    /**
     * Customize in step opening
     */
    this.customOpen = false;
  }
  get style() {
    return {
      height: this.isResize && this.open ? 'auto' : this.open ? this.calculatedHeight + 'px' : '0px',
    };
  }
  stateChanged(value) {
    if (this.disabled)
      return;
    if (value) {
      this.openEvent.emit({
        index: this.index,
      });
      this.openCount = this.openCount + 1;
    }
    else {
      this.closeEvent.emit({
        index: this.index,
      });
      this.openCount = 0;
    }
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-step');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i + '';
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
  recalculateHeight() {
    const oldCalculatedHeight = this.calculatedHeight;
    if (this.calculateHeight() != oldCalculatedHeight && this.open) {
      this.transitioning = true;
    }
  }
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  handleContentChanged() {
    this.recalculateHeight();
  }
  handleResize() {
    this.isResize = true;
  }
  /**
   * close the step item
   */
  async closeItem() {
    this.open = false;
    this.shouldOpen = false;
  }
  /**
   * open the step item
   */
  async openItem() {
    this.disabled = false;
    this.open = true;
  }
  /**
   * before open the step item
   */
  async beforeOpenItem() {
    this.beforeOpenEvent.emit({
      index: this.index,
    });
  }
  toggle() {
    if (this.customOpen || this.disabled) {
      return;
    }
    if (this.open) {
      if (this.shouldOpen) {
        return;
      }
      this.closeItem();
    }
    else {
      this.beforeOpenItem();
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
    const opacityCondition = this.disabled;
    return (h(Host, null,
      h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true, 'gc__head-opacity': opacityCondition }, onClick: () => this.toggle() },
        h("div", { class: "gc__step-item-title" },
          h("div", { style: { borderColor: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' }, class: { 'transitioning-rotate': this.transitioning && this.open && this.openCount === 1, 'gc__step-item-icon': true }, onTransitionEnd: () => this.handleTransitionEnd() }, successCondition ? (h("gc-icon", { name: "fa-regular fa-check", color: "var(--gc-color-green)", size: "24px" })) : (h("gc-icon", { name: this.icon, color: "var(--gc-color-primary)", size: "22px" }))),
          h("div", { class: "gc__step-item-title--content" },
            h("div", { style: { color: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' } },
              h("slot", { name: "title" })),
            h("slot", { name: "description" }))),
        !this.open && h("hr", null)),
      h("section", { 
        // onTransitionEnd={() => this.handleTransitionEnd()}
        class: { 'gc__steps-section': true, 'transitioning': this.transitioning, 'open': this.open }, style: this.style },
        h("div", null,
          h("slot", null)))));
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
        "text": "index of step item from top to bottom"
      },
      "attribute": "index",
      "reflect": true,
      "defaultValue": "''"
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
    },
    "shouldOpen": {
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
        "text": "Should open in step"
      },
      "attribute": "should-open",
      "reflect": false,
      "defaultValue": "false"
    },
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
        "text": "Customize in step opening"
      },
      "attribute": "custom-open",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "transitioning": {},
    "isResize": {},
    "openCount": {}
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
      "method": "beforeOpenEvent",
      "name": "beforeOpenEvent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "triggered before the step item is opened"
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
    },
    "beforeOpenItem": {
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
        "text": "before open the step item",
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
      "method": "handleContentChanged",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
