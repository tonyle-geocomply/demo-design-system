import { Component, Element, h, Listen, Method, Prop, State, Watch } from '@stencil/core';
export class GcMenu {
  constructor() {
    this.showLoader = false;
    this.empty = false;
    this.emptyState = {
      headline: 'No items',
      description: 'There are no items to display',
    };
  }
  parseEmptyState() {
    if (typeof this.emptyState === 'string') {
      this.internalEmptyState = JSON.parse(this.emptyState);
    }
  }
  handleKeyDown(evt) {
    const path = evt.composedPath();
    let menuItem = null;
    for (const elm of path) {
      // @ts-ignore
      if (elm.tagName === 'GC-MENU-ITEM') {
        menuItem = elm;
      }
      if (elm !== this.elm)
        continue;
      if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.focusNextItem(menuItem);
      }
      else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.focusPreviousItem(menuItem);
      }
    }
  }
  /**
   * Sets focus on first menu item. Use this method instead of the global
   * `element.focus()`.
   */
  async setFocus() {
    const firstMenuItem = this.getFirstItem();
    firstMenuItem === null || firstMenuItem === void 0 ? void 0 : firstMenuItem.setFocus();
  }
  getFirstItem() {
    return this.elm.querySelector('gc-menu-item');
  }
  focusNextItem(currentItem) {
    let nextItem = currentItem.nextElementSibling;
    do {
      if (nextItem && nextItem.tagName === 'GC-MENU-ITEM' && !nextItem.disabled) {
        nextItem.setFocus();
        return;
      }
      if (!nextItem) {
        nextItem = this.elm.querySelector('gc-menu-item');
      }
      else {
        nextItem = nextItem.nextElementSibling;
      }
    } while (nextItem !== currentItem);
  }
  focusPreviousItem(currentItem) {
    let previousItem = currentItem.previousElementSibling;
    do {
      if (previousItem && previousItem.tagName === 'GC-MENU-ITEM' && !previousItem.disabled) {
        previousItem.setFocus();
        return;
      }
      if (!previousItem) {
        previousItem = this.elm.querySelector('gc-menu-item:last-child');
      }
      else {
        previousItem = previousItem.previousElementSibling;
      }
    } while (previousItem !== currentItem);
  }
  componentDidLoad() {
    this.parseEmptyState();
  }
  renderEmptyState() {
    if (this.empty) {
      return h("div", { style: { textAlign: 'center', padding: '12px' } }, "Empty data");
    }
  }
  render() {
    return (h("div", { part: "custom", class: "menu" },
      h("slot", null),
      this.renderEmptyState()));
  }
  static get is() { return "gc-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-menu.css"]
  }; }
  static get properties() { return {
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
        "text": ""
      },
      "attribute": "show-loader",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "string | number",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "empty": {
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
      "attribute": "empty",
      "reflect": false,
      "defaultValue": "false"
    },
    "emptyState": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "empty-state",
      "reflect": false,
      "defaultValue": "{\n    headline: 'No items',\n    description: 'There are no items to display',\n  }"
    }
  }; }
  static get states() { return {
    "internalEmptyState": {}
  }; }
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
        "text": "Sets focus on first menu item. Use this method instead of the global\n`element.focus()`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "elm"; }
  static get watchers() { return [{
      "propName": "emptyState",
      "methodName": "parseEmptyState"
    }]; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "handleKeyDown",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
