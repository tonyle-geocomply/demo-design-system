import { Component, Element, Event, h, Host, Listen, Method, Prop, State } from '@stencil/core';
export class GcTab {
  constructor() {
    /**
     * Button selection state.
     */
    this.selected = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * Show loader.
     */
    this.showLoader = false;
    this.hasFocus = false;
    this.isActive = false;
    this.slotHasContent = false;
    this.clickHandler = () => {
      this.gcTabClick.emit({
        value: this.value,
        target: this.target,
      });
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.mouseDownHandler = () => {
      this.isActive = true;
    };
    this.keyDownHandler = evt => {
      if (evt.key == ' ') {
        this.isActive = true;
        this.clickHandler();
      }
    };
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && evt.key === ' ')
      this.isActive = false;
  }
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  async triggerClick() {
    if (this.nativeInput) {
      this.nativeInput.click();
    }
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // gc-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.slotHasContent = this.elm.hasChildNodes();
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, active: this.isActive },
      h("div", { class: {
          'gc__tab': true,
          'disabled': this.disabled,
          'selected': this.selected,
          'has-focus': this.hasFocus,
          'active': this.isActive,
          'has-content': this.slotHasContent,
          'show-loader': this.showLoader,
        } },
        h("div", { class: "gc__tab-background" }),
        h("button", { class: "native-button", tabindex: this.tabindex, ref: input => (this.nativeInput = input), onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, disabled: this.disabled, "aria-disabled": (this.disabled || this.showLoader) + '' },
          h("div", { class: "gc__tab-content" },
            h("div", { class: "slot-container" },
              this.icon && (h("span", { style: { marginRight: '8px' } },
                h("gc-icon", { name: this.icon, size: "sm" }))),
              h("slot", null)))))));
  }
  static get is() { return "gc-tab"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-tab.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-tab.css"]
  }; }
  static get properties() { return {
    "selected": {
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
        "text": "Button selection state."
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true, the user cannot interact with the button. Defaults to `false`."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
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
      "reflect": false
    },
    "target": {
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
      "attribute": "target",
      "reflect": false
    },
    "showLoader": {
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
        "text": "Show loader."
      },
      "attribute": "show-loader",
      "reflect": false,
      "defaultValue": "false"
    },
    "icon": {
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
        "text": "The icon of tab."
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
  static get states() { return {
    "hasFocus": {},
    "isActive": {},
    "slotHasContent": {}
  }; }
  static get events() { return [{
      "method": "gcTabClick",
      "name": "gc:tab-click",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "On click of tab, a CustomEvent 'gc:tab-click' will be triggered."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
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
        "text": "",
        "tags": []
      }
    },
    "triggerClick": {
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "elm"; }
  static get listeners() { return [{
      "name": "mouseup",
      "method": "windowMouseUp",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "keyup",
      "method": "windowKeyUp",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
