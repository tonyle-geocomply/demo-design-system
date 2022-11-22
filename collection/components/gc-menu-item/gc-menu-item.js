import { Component, Element, Event, h, Host, Listen, Method, Prop, State } from '@stencil/core';
export class GcMenuItem {
  constructor() {
    this.tabindex = 1;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * Menu item selection state.
     */
    this.selected = false;
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.hasFocus = false;
    this.isActive = false;
    this.isHover = false;
    this.clickHandler = event => {
      if (!this.disabled) {
        this.goatMenuItemClick.emit({
          value: this.value || '',
          color: this.color || '',
          label: this.label || '',
          dot: this.dot || '',
        });
      }
      else {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
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
    this.mouseEnterHandler = () => {
      this.isHover = true;
    };
    this.mouseLeaveHandler = () => {
      this.isHover = false;
    };
    this.keyDownHandler = evt => {
      if (evt.key == ' ') {
        evt.preventDefault();
        this.isActive = true;
        this.clickHandler(evt);
      }
    };
    this.getStyles = () => {
      if (this.color) {
        return {
          color: this.disabled ? 'var(--gc-color-disabled)' : this.isHover ? 'var(--gc-color-contrast-white)' : this.color,
        };
      }
      return {};
    };
    this.render = () => {
      return (h(Host, { active: this.isActive, "has-focus": this.hasFocus },
        h("div", { id: this.gcId, ref: el => (this.nativeInput = el), class: {
            'menu-item': true,
            'selected': this.selected,
            'active': this.isActive,
            'disabled': this.disabled,
            'has-focus': this.hasFocus,
            'start-slot-has-content': this.startSlotHasContent,
            'end-slot-has-content': this.endSlotHasContent,
            [this.class]: this.class ? true : false,
          }, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, onMouseEnter: this.mouseEnterHandler, onMouseLeave: this.mouseLeaveHandler, "aria-disabled": this.disabled },
          h("div", { style: this.getStyles(), class: "item-section slot-main" },
            this.dot && h("div", { style: { background: this.dot }, class: "dot" }),
            h("slot", null)))));
    };
  }
  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && evt.key == ' ')
      this.isActive = false;
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }
  static get is() { return "gc-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-menu-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-menu-item.css"]
  }; }
  static get properties() { return {
    "class": {
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
        "text": "The class name"
      },
      "attribute": "class",
      "reflect": false
    },
    "gcId": {
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
        "text": "The id"
      },
      "attribute": "gc-id",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The color of text"
      },
      "attribute": "color",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "string | number | null",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The menu item value."
      },
      "attribute": "value",
      "reflect": false
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
        "text": "Menu item selection state."
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "label": {
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
        "text": "The label"
      },
      "attribute": "label",
      "reflect": false
    },
    "dot": {
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
        "text": "The color of dot"
      },
      "attribute": "dot",
      "reflect": false
    }
  }; }
  static get states() { return {
    "startSlotHasContent": {},
    "endSlotHasContent": {},
    "hasFocus": {},
    "isActive": {},
    "isHover": {}
  }; }
  static get events() { return [{
      "method": "goatMenuItemClick",
      "name": "gc:menu-item-click",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the menu item is clicked."
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
        "text": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
        "tags": []
      }
    },
    "setBlur": {
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
        "text": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
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
