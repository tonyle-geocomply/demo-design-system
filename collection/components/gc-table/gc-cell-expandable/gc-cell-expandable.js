import { Component, Host, h, Prop, Event, Method, Element, State, Watch, Listen } from '@stencil/core';
export class GcCellExpandable {
  constructor() {
    this.calculatedHeight = 0;
    this.maxHeight = '1500px';
    this.fieldName = '';
    this.value = '';
    this.total = 0;
    this.numberOfEntryPerPage = 0;
    this.maxWidth = '';
    this.transitioning = false;
    this.isResize = false;
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
     * The tooltip message
     */
    this.tooltipMessage = '';
    /**
     * The total text
     */
    this.totalText = '';
    /**
     * The link to redirect
     */
    this.linkTo = '';
  }
  get style() {
    return {
      maxHeight: this.isResize && this.open ? this.maxHeight : this.open ? this.maxHeight : '0px',
    };
  }
  stateChanged(value) {
    if (this.disabled)
      return;
    if (value) {
      this.openExpandableRowsEvent.emit({
        index: this.index,
      });
    }
    else {
      this.closeExpandableRowsEvent.emit({
        index: this.index,
      });
    }
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-cell-expandable');
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
  toggle() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      if (this.shouldOpen) {
        return;
      }
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
    this.calculatedHeight = this.element.querySelector('gc-cell-expandable > section > div').clientHeight;
    return this.calculatedHeight;
  }
  render() {
    return (h(Host, null,
      h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true } },
        h("div", { class: "gc__step-item-title", style: { width: this.maxWidth || 'calc(97vw + 10px)' } },
          h("div", { onClick: () => this.toggle(), class: { 'transitioning-rotate': this.open, 'gc__step-item-icon': true }, onTransitionEnd: () => this.handleTransitionEnd() },
            h("gc-icon", { name: "fa-solid fa-chevron-down", color: "var(--gc-color-primary)", size: "10px" })),
          h("div", { class: "gc__step-item-title--content" },
            h("div", null,
              this.fieldName,
              ": ",
              h("b", null, this.value)),
            this.total > 0 ? h("div", { class: "divider" }) : null,
            this.total > 0 ? (h("gc-dropdown", { trigger: "hover", positions: "right" },
              h("gc-link", { gcTo: this.linkTo, target: "_blank", stopPropagation: true },
                h("b", null,
                  this.total,
                  " total ",
                  this.totalText)),
              h("div", { slot: "gc__dropdown-content", style: { padding: '16px' } },
                h("div", null, this.tooltipMessage)))) : null),
          h("div", { class: "gc__step-item-title--entry" }, this.numberOfEntryPerPage > 0 && this.open ? `Showing last ${this.numberOfEntryPerPage} of ${this.total} entries` : null))),
      h("section", { class: { 'gc__steps-section': true, 'transitioning': this.transitioning, 'open': this.open }, style: this.style },
        h("div", null,
          h("slot", null)))));
  }
  static get is() { return "gc-cell-expandable"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-cell-expandable.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-cell-expandable.css"]
  }; }
  static get properties() { return {
    "maxHeight": {
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
      "attribute": "max-height",
      "reflect": false,
      "defaultValue": "'1500px'"
    },
    "fieldName": {
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
      "attribute": "field-name",
      "reflect": false,
      "defaultValue": "''"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "total": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "total",
      "reflect": false,
      "defaultValue": "0"
    },
    "numberOfEntryPerPage": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "number-of-entry-per-page",
      "reflect": false,
      "defaultValue": "0"
    },
    "maxWidth": {
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
      "attribute": "max-width",
      "reflect": false,
      "defaultValue": "''"
    },
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
    "tooltipMessage": {
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
        "text": "The tooltip message"
      },
      "attribute": "tooltip-message",
      "reflect": false,
      "defaultValue": "''"
    },
    "totalText": {
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
        "text": "The total text"
      },
      "attribute": "total-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "linkTo": {
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
        "text": "The link to redirect"
      },
      "attribute": "link-to",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "transitioning": {},
    "isResize": {}
  }; }
  static get events() { return [{
      "method": "openExpandableRowsEvent",
      "name": "openExpandableRowsEvent",
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
      "method": "closeExpandableRowsEvent",
      "name": "closeExpandableRowsEvent",
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
