import { Component, Element, Event, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, isMobile, isOutOfViewport } from '../../utils/utils';
export class GcSelect {
  constructor() {
    /**
     * The input field value.
     */
    this.value = '';
    this.multiple = false;
    /**
     * The select input size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Search type
     * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
     */
    this.search = 'none';
    /**
     * The input state.
     * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
     */
    this.state = 'default';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.readonly = false;
    this.showLoader = false;
    this.isOpen = false;
    this.configAria = {};
    /**
     *  [{
     *    label: 'Shivaji Varma',
     *    value: 'shivaji-varma'
     *  }]
     */
    this.items = [];
    this.positions = 'bottom-right,top-right,bottom-left,top-left';
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearable = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
     */
    this.debounce = 300;
    /**
     * Is error
     */
    this.isError = false;
    this.hasFocus = false;
    this.searchString = '';
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.stateItems = [];
    this.selectedColorItem = '';
    this.selectHandler = selectItemValue => {
      if (!this.disabled && !this.readonly) {
        // if (this.search !== 'none') {
        //   const item = this.getItemByValue(selectItemValue);
        //   this.searchString = item.label;
        // }
        this.stateItems = this.getItems().filter(item => item.value !== selectItemValue);
        this.addItem(selectItemValue);
      }
      this.closeList();
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.closeList = () => {
      if (!this.disabled && !this.readonly && this.isOpen) {
        this.isOpen = false;
        setTimeout(() => this.setFocus(), 100);
      }
    };
    this.openList = () => {
      if (!this.disabled && !this.readonly && !this.isOpen) {
        this.isOpen = true;
        if (this.search !== 'none') {
          this.searchString = '';
          setTimeout(() => {
            const dropdownContent = this.dropdownContentElm;
            this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
            this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
            this.fixPosition();
            this.nativeInput.focus();
          }, 100);
        }
        else {
          setTimeout(() => {
            const dropdownContent = this.dropdownContentElm;
            this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
            this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
            this.fixPosition();
          }, 100);
        }
      }
    };
    this.toggleList = () => {
      if (this.isOpen)
        this.closeList();
      else
        this.openList();
    };
    this.keyDownHandler = evt => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          evt.preventDefault();
          this.menuElm.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          this.menuElm.setFocus(); // focus on previous item
        }
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      this.searchString = input.value || '';
      if (!this.searchString) {
        this.value = '';
      }
      this.goatSearch.emit({ value: this.searchString });
    };
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    this.displayElement.focus();
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
  debounceChanged() {
    this.goatSearch = debounceEvent(this.goatSearch, this.debounce);
  }
  watchPropHandler(newValue) {
    this.value = newValue;
    if (this.stateItems.length > 0) {
      const selectedItem = this.stateItems.find(item => item.value === newValue);
      if (selectedItem && selectedItem.color) {
        this.selectedColorItem = selectedItem.color;
      }
    }
    if (!newValue) {
      this.stateItems = this.getItems();
    }
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm)
        return;
    }
    this.isOpen = false;
  }
  menuItemClick(evt) {
    this.selectHandler(evt.detail.value);
    this.selectedColorItem = evt.detail.color;
  }
  tagDismissClick(evt) {
    this.removeItem(evt.detail.value);
  }
  getValues() {
    if (this.value)
      return this.value.toString().split(',');
    else
      return [];
  }
  addItem(selectItemValue) {
    let value = this.getValues();
    if (!selectItemValue) {
      this.value = '';
      this.goatChange.emit({ value: selectItemValue });
      return;
    }
    if (!value.includes(selectItemValue)) {
      if (!this.multiple)
        value = [];
      value.push(selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value });
    }
  }
  removeItem(selectItemValue) {
    let value = this.getValues();
    if (value.includes(selectItemValue)) {
      value = value.filter(item => item !== selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value });
    }
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getItems() {
    if (this.items) {
      if (typeof this.items === 'string') {
        return JSON.parse(this.items);
      }
      return this.items;
    }
  }
  getItemByValue(value) {
    if (this.items) {
      const items = this.getItems();
      return items.find(item => {
        return item.value == value;
      });
    }
  }
  getDisplayValue() {
    if (!this.multiple) {
      if (this.items) {
        const item = this.getItemByValue(this.value);
        if (item && item.value) {
          return h("span", { style: { color: this.selectedColorItem } }, item.label);
        }
      }
      if (!this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return h("span", null, "\u00A0");
      }
    }
    else {
      if (!this.value && !this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return h("span", null, "\u00A0");
      }
    }
  }
  componentWillLoad() {
    if (this.positions)
      this.position = this.positions.split(',')[0];
    if (this.elm.getAttributeNames) {
      this.elm.getAttributeNames().forEach((name) => {
        if (name.includes('aria-')) {
          this.configAria[name] = this.elm.getAttribute(name);
          this.elm.removeAttribute(name);
        }
      });
    }
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
    this.stateItems = this.getItems();
    if (this.value) {
      const selectedItem = this.stateItems.find(item => item.value === this.value);
      if (selectedItem && selectedItem.color) {
        this.selectedColorItem = selectedItem.color;
        this.stateItems = this.getItems().filter(item => item.value !== selectedItem.value);
      }
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
  connectedCallback() {
    this.debounceChanged();
  }
  render() {
    return (h(Host, { id: this.gcId, "has-value": this.hasValue(), "has-focus": this.hasFocus, "is-open": this.isOpen, position: this.position },
      h("div", { class: { 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen } },
        h("div", { onClick: evt => {
            evt.preventDefault();
            this.toggleList();
          }, class: {
            'input-container': true,
            [`search-${this.search}`]: true,
            'has-focus': this.hasFocus,
            'disabled': this.disabled,
            'readonly': this.readonly,
            'has-value': this.hasValue(),
            'start-slot-has-content': this.startSlotHasContent,
            'end-slot-has-content': this.endSlotHasContent,
            'has-error': this.isError,
          } },
          h("div", { class: "slot-container start" },
            h("slot", { name: "start" })),
          (() => {
            if (this.search !== 'none' && this.isOpen) {
              const item = this.getItemByValue(this.value);
              return (h("input", Object.assign({ class: "input input-native", ref: input => (this.nativeInput = input), type: "text", value: this.hasValue() ? item === null || item === void 0 ? void 0 : item.label : this.searchString, placeholder: this.placeholder, onBlur: this.blurHandler, onFocus: this.focusHandler, onInput: this.onInput, onKeyDown: this.keyDownHandler }, this.configAria)));
            }
            else {
              return (h("div", { class: "gc__section-hidden" },
                h("div", Object.assign({ class: "input display-value", tabindex: "0", ref: input => (this.displayElement = input), "aria-disabled": this.disabled ? 'true' : null, onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler }, this.configAria), this.getDisplayValue()),
                h("input", { id: this.gcId, style: { display: 'none' }, value: this.value })));
            }
          })(),
          h("div", { class: "slot-container end" },
            h("slot", { name: "end" })),
          this.getModeIcon()),
        h("div", { class: "gc__dropdown-content", ref: elm => (this.dropdownContentElm = elm) }, this.isOpen && this.renderDropdownList()))));
  }
  getModeIcon() {
    if (!this.disabled && !this.readonly)
      return h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-solid fa-caret-down", size: "10px", class: "input-action caret-down", role: "button", onClick: this.toggleList });
  }
  renderDropdownList() {
    // if (this.search === 'managed' && !this.items.length) {
    //   return (
    //     <goat-menu class="menu" ref={el => (this.menuElm = el)}>
    //       <div class="start-search">
    //         <goat-icon name="search" size={this.size} />
    //         <goat-text shade="secondary">Start typing to perform search</goat-text>
    //       </div>
    //     </goat-menu>
    //   );
    // }
    if (this.items) {
      const filteredItems = this.filterItems();
      return (h("gc-menu", { class: "menu", empty: filteredItems.length == 0, ref: el => (this.menuElm = el) }, (() => {
        return filteredItems.map(item => {
          return (h("gc-menu-item", { disabled: item.disabled, color: item.color, value: item.value }, item.label || item.value));
        });
      })()));
    }
  }
  filterItems() {
    if (this.search === 'managed')
      return this.getItems();
    const items = this.search !== 'none' ? this.getItems() : this.stateItems;
    if (this.hasValue() && !this.searchString) {
      return items.filter(item => {
        return item.value !== this.value;
      });
    }
    return items.filter(item => {
      return !this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase());
    });
  }
  static get is() { return "gc-select"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-select.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-select.css"]
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
    "placeholder": {
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
        "text": "The input field placeholder."
      },
      "attribute": "placeholder",
      "reflect": false
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
        "text": "The input field value."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "''"
    },
    "multiple": {
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
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
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
        "text": "The select input size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "'md'"
    },
    "search": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'none' | 'initial' | 'contains' | 'managed'",
        "resolved": "\"contains\" | \"initial\" | \"managed\" | \"none\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Search type\nPossible values are `\"none\"`, `\"initial\"`, `\"contains\"`, `\"managed\"`. Defaults to `\"none\"`."
      },
      "attribute": "search",
      "reflect": false,
      "defaultValue": "'none'"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'success' | 'error' | 'warning' | 'default'",
        "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`."
      },
      "attribute": "state",
      "reflect": true,
      "defaultValue": "'default'"
    },
    "required": {
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
        "text": "If true, required icon is show. Defaults to `false`."
      },
      "attribute": "required",
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
    "readonly": {
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
      "attribute": "readonly",
      "reflect": true,
      "defaultValue": "false"
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
        "text": ""
      },
      "attribute": "show-loader",
      "reflect": false,
      "defaultValue": "false"
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
    "configAria": {
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
      "attribute": "config-aria",
      "reflect": true,
      "defaultValue": "{}"
    },
    "items": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | []",
        "resolved": "[] | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[{\n  label: 'Shivaji Varma',\n  value: 'shivaji-varma'\n}]"
      },
      "attribute": "items",
      "reflect": false,
      "defaultValue": "[]"
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
    "clearable": {
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
        "text": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input."
      },
      "attribute": "clearable",
      "reflect": false,
      "defaultValue": "false"
    },
    "debounce": {
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
        "text": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke."
      },
      "attribute": "debounce",
      "reflect": false,
      "defaultValue": "300"
    },
    "isError": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Is error"
      },
      "attribute": "is-error",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "hasFocus": {},
    "searchString": {},
    "startSlotHasContent": {},
    "endSlotHasContent": {},
    "position": {},
    "stateItems": {},
    "selectedColorItem": {}
  }; }
  static get events() { return [{
      "method": "goatChange",
      "name": "gc:change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the value has changed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "p4ActionClick",
      "name": "gc:action-click",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the action button is clicked.."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "goatSearch",
      "name": "gc:search",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a keyboard input occurred."
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
        "text": "Sets focus on the native `input` in `ion-input`. Use this method instead of the global\n`input.focus()`.",
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
  static get watchers() { return [{
      "propName": "debounce",
      "methodName": "debounceChanged"
    }, {
      "propName": "value",
      "methodName": "watchPropHandler"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "windowClick",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "gc:menu-item-click",
      "method": "menuItemClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "gc:tag-dismiss",
      "method": "tagDismissClick",
      "target": undefined,
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
