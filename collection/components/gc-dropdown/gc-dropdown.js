import { Component, Element, Listen, h, Host, Prop, State } from '@stencil/core';
import { createPopper } from '@popperjs/core';
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
    /**
     * Positions
     *    | 'auto'
          | 'auto-left'
          | 'auto-right'
          | 'top'
          | 'top-left'
          | 'top-right'
          | 'bottom'
          | 'bottom-left'
          | 'bottom-right'
          | 'right'
          | 'right-start'
          | 'right-end'
          | 'left'
          | 'left-start'
          | 'left-end'
    */
    this.positions = 'bottom,bottom-right,top,top-right,bottom-left,top-left';
    this.items = null;
    this.trigger = 'click';
    this.hasFocus = false;
    this.position = '';
  }
  getPosition(position) {
    switch (position) {
      case 'auto-left':
        return 'auto-start';
      case 'auto-right':
        return 'auto-end';
      case 'top-left':
        return 'top';
      case 'top-right':
        return 'top';
      case 'bottom-left':
        return 'bottom';
      case 'bottom-right':
        return 'bottom';
      default:
        return position;
    }
  }
  componentWillLoad() {
    if (this.positions) {
      const firstPos = this.positions.split(',')[0];
      this.position = firstPos ? this.getPosition(firstPos) : 'bottom';
    }
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
  toggle() {
    if (!this.dropdownElm.hasAttribute('data-show')) {
      this.dropdownElm.setAttribute('data-show', '');
      // We need to tell Popper to update the tooltip position
      // after we show the tooltip, otherwise it will be incorrect
      this.popperInstance.update();
      return;
    }
    this.dropdownElm.removeAttribute('data-show');
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) {
        return;
      }
    }
    this.dropdownElm.removeAttribute('data-show');
  }
  componentDidLoad() {
    this.popperInstance = createPopper(this.containerElm, this.dropdownElm, {
      placement: this.position || 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }
  handleClick() {
    if (this.trigger === 'click') {
      this.toggle();
    }
  }
  handleHover() {
    if (this.trigger === 'hover') {
      this.toggle();
    }
  }
  render() {
    return (h(Host, { onMouseLeave: () => this.handleHover() },
      h("div", { onClick: () => this.handleClick(), onMouseEnter: () => this.handleHover(), class: "slot-container", id: "host-element", "aria-describedby": "tooltip", ref: elm => (this.containerElm = elm) },
        h("slot", null)),
      h("div", { class: "gc__dropdown-content", id: "tooltip", role: "tooltip", ref: elm => (this.dropdownElm = elm) },
        this.renderItems(),
        h("slot", { name: "gc__dropdown-content" }),
        h("div", { id: "arrow", "data-popper-arrow": true }))));
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
        "text": "Positions\n   | 'auto'\n   | 'auto-left'\n   | 'auto-right'\n   | 'top'\n   | 'top-left'\n   | 'top-right'\n   | 'bottom'\n   | 'bottom-left'\n   | 'bottom-right'\n   | 'right'\n   | 'right-start'\n   | 'right-end'\n   | 'left'\n   | 'left-start'\n   | 'left-end'"
      },
      "attribute": "positions",
      "reflect": false,
      "defaultValue": "'bottom,bottom-right,top,top-right,bottom-left,top-left'"
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
    },
    "trigger": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'click' | 'hover'",
        "resolved": "\"click\" | \"hover\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "trigger",
      "reflect": false,
      "defaultValue": "'click'"
    }
  }; }
  static get states() { return {
    "hasFocus": {},
    "position": {}
  }; }
  static get elementRef() { return "elm"; }
  static get listeners() { return [{
      "name": "click",
      "method": "windowClick",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
