import { Component, Element, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { isEventTriggerByElement, isMobile, isOutOfViewport } from '../../utils/utils';
export class GcDropdown {
  constructor() {
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    this.isOpen = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.positions = 'bottom-right,top-right,bottom-left,top-left';
    this.items = null;
    this.hasFocus = false;
    this.openList = () => {
      if (!this.disabled && !this.isOpen) {
        this.isOpen = true;
        setTimeout(() => {
          const dropdownContent = this.elm.querySelector('[slot="dropdown-content"]');
          this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
          this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
          this.fixPosition();
        }, 100);
      }
    };
    this.toggleList = () => {
      if (this.isOpen)
        this.closeList();
      else
        this.openList();
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.keyDownHandler = evt => {
      const $menuElm = this.getMenuElement();
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          evt.preventDefault();
          $menuElm === null || $menuElm === void 0 ? void 0 : $menuElm.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          $menuElm === null || $menuElm === void 0 ? void 0 : $menuElm.setFocus(); // focus on previous item
        }
      }
    };
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) {
        return;
      }
    }
    this.isOpen = false;
  }
  async setFocus(elm) {
    const firstChild = elm.children[0] || this.elm.children[0];
    if (firstChild.setFocus) {
      firstChild.setFocus();
    }
  }
  listenMenuItemClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }
  listenClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }
  listenKeyDown(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      if (evt.key === 'Escape') {
        this.closeList();
      }
    }
  }
  closeList() {
    if (!this.disabled && this.isOpen) {
      this.isOpen = false;
      setTimeout(() => {
        this.setFocus(this.elm);
      }, 100);
    }
  }
  componentWillLoad() {
    if (this.positions) {
      this.position = this.positions.split(',')[0];
    }
  }
  fixPosition() {
    if (this.isOpen && this.dropdownContentHeight && this.dropdownContentWidth) {
      if (isMobile()) {
        this.position = 'center';
        return;
      }
      const positions = this.positions.split(',');
      for (let i = 0; i < positions.length; i++) {
        const dropdownButtonRect = this.elm.getBoundingClientRect();
        const dropdownContentRect = {};
        if (positions[i] === 'bottom-right') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'top-right') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'bottom-left') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        else if (positions[i] === 'top-left') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        const isOut = isOutOfViewport(dropdownContentRect);
        if (!isOut.any) {
          this.position = positions[i];
          break;
        }
      }
    }
  }
  getMenuElement() {
    return this.elm.querySelector('gc-menu');
  }
  renderItems() {
    if (this.items)
      return (h("gc-menu", { class: "items" }, this.items.map(item => {
        return (h("gc-menu-item", { value: item.value, tabindex: this.isOpen ? '0' : '-1' },
          item.icon && h("gc-icon", { name: item.icon, slot: "start", size: "sm" }),
          item.label,
          item.hint && h("span", { slot: "end" }, item.hint)));
      })));
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, "is-open": this.isOpen },
      h("div", { class: {
          'dropdown': true,
          [this.position]: true,
          'is-open': this.isOpen,
        } },
        h("button", { class: "dropdown-button", onKeyDown: this.keyDownHandler, tabindex: "-1", onBlur: this.blurHandler, onFocus: this.focusHandler, disabled: this.disabled, onClick: () => {
            this.toggleList();
          } },
          h("div", { class: "slot-container" },
            h("slot", null))),
        h("div", { class: "dropdown-content" },
          this.renderItems(),
          h("slot", { name: "dropdown-content" })))));
  }
  static get is() { return "gc-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-dropdown.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-dropdown.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md' | 'lg'",
        "resolved": "\"lg\" | \"md\" | \"sm\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The button size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'md'"
    },
    "isOpen": {
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
        "text": ""
      },
      "attribute": "is-open",
      "reflect": false,
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
      "reflect": false,
      "defaultValue": "false"
    },
    "positions": {
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
      "attribute": "positions",
      "reflect": false,
      "defaultValue": "'bottom-right,top-right,bottom-left,top-left'"
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "hasFocus": {},
    "position": {}
  }; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "(elm?: HTMLElement) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
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
      "name": "click",
      "method": "windowClick",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "gc:menu-item-click",
      "method": "listenMenuItemClick",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "gc:click",
      "method": "listenClick",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "listenKeyDown",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "scroll",
      "method": "fixPosition",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}