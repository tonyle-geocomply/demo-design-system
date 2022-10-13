import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as debounceEvent, a as isMobile, b as isOutOfViewport } from './utils.js';
import { d as defineCustomElement$3 } from './gc-icon2.js';
import { d as defineCustomElement$2 } from './gc-menu2.js';
import { d as defineCustomElement$1 } from './gc-menu-item2.js';

const gcSelectCss = ".input-container.sc-gc-select{display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--gc-color-contrast-grey);border-color:var(--gc-color-second-grey);border-style:solid;border-radius:5px;border-width:1px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative}.input-container.sc-gc-select .input.sc-gc-select{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;padding:0}.input-container.sc-gc-select .slot-container.sc-gc-select{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot.sc-gc-select-s>*{padding-bottom:0 !important;margin-bottom:0 !important}.input-container.start-slot-has-content.sc-gc-select .input.sc-gc-select{padding-left:0.5rem}.input-container.end-slot-has-content.sc-gc-select .input.sc-gc-select{padding-right:0.5rem}.input-container.sc-gc-select:not(.start-slot-has-content) .slot-container.start.sc-gc-select{display:none}.input-container.sc-gc-select:not(.end-slot-has-content) .slot-container.end.sc-gc-select{display:none}.input-container.sc-gc-select .input-action.sc-gc-select{cursor:pointer}.input-container.sc-gc-select .input-action.sc-gc-select:hover{--text-color:var(--text-secondary)}.dropdown.sc-gc-select{position:relative;display:block;background:var(--gc-color-contrast-grey)}.dropdown.sc-gc-select .gc__dropdown-content.sc-gc-select{z-index:var(--gc-z-index-gc__dropdown-content);position:absolute;width:max-content;transition:transform 0.1s ease-out 0s}.dropdown.sc-gc-select .caret-down.sc-gc-select{transition:transform 0.1s ease-out 0s}.dropdown.is-open.sc-gc-select .gc__dropdown-content.sc-gc-select{transform:scale(1)}.dropdown.is-open.sc-gc-select .caret-down.sc-gc-select{transform:rotate(180deg)}.dropdown.bottom-right.sc-gc-select .gc__dropdown-content.sc-gc-select{top:calc(100%);left:0;transform-origin:top}.dropdown.bottom-left.sc-gc-select .gc__dropdown-content.sc-gc-select{top:calc(100%);right:0;transform-origin:top}.dropdown.top-right.sc-gc-select .gc__dropdown-content.sc-gc-select{bottom:calc(100%);left:0;transform-origin:bottom}.dropdown.top-left.sc-gc-select .gc__dropdown-content.sc-gc-select{bottom:calc(100%);right:0;transform-origin:bottom}.dropdown.center.sc-gc-select .gc__dropdown-content.sc-gc-select{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none}.select.sc-gc-select .gc__dropdown-content.sc-gc-select{width:100%;min-width:10rem}.select.sc-gc-select .menu.sc-gc-select{width:100%}.select.sc-gc-select .display-value.sc-gc-select{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;color:var(--gc-color-placeholder)}.select.sc-gc-select .has-value.sc-gc-select .display-value.sc-gc-select{color:var(--gc-color-text-grey)}.select.sc-gc-select .multi-select-value.sc-gc-select{padding-inline-end:0.5rem}.select.sc-gc-select .multi-select-value.sc-gc-select:last-child{padding-inline-end:0}.select.sc-gc-select .start-search.sc-gc-select{height:10rem;display:flex;align-items:center;justify-content:center;flex-direction:column}.dropdown.bottom-right.is-open.sc-gc-select .input-container.sc-gc-select,.dropdown.bottom-left.is-open.sc-gc-select .input-container.sc-gc-select{border-bottom-width:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.dropdown.top-right.is-open.sc-gc-select .input-container.sc-gc-select,.dropdown.top-left.is-open.sc-gc-select .input-container.sc-gc-select{border-top-width:0;border-top-right-radius:0;border-top-left-radius:0}.dropdown.top-right.is-open.sc-gc-select gc-menu.sc-gc-select::part(custom){border-top-right-radius:5px;border-top-left-radius:5px;border-bottom-right-radius:0;border-bottom-left-radius:0}div.input-container.search-none.sc-gc-select.has-value.sc-gc-select>div.input.display-value.sc-gc-select.sc-gc-select{color:var(--gc-color-grey-text)}div.input-container.search-contains.sc-gc-select.has-value.sc-gc-select>div.input.display-value.sc-gc-select.sc-gc-select{color:var(--gc-color-grey-text)}.gc__section-hidden.sc-gc-select{flex:1}";

const GcSelect = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.goatChange = createEvent(this, "gc:change", 7);
    this.p4ActionClick = createEvent(this, "gc:action-click", 7);
    this.goatSearch = createEvent(this, "gc:search", 7);
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
  componentDidLoad() {
    this.stateItems = this.getItems();
    if (this.value) {
      const selectedItem = this.stateItems.find(item => item.value === this.value);
      if (selectedItem.color) {
        this.selectedColorItem = selectedItem.color;
      }
    }
  }
  render() {
    return (h(Host, { id: this.gcId, "has-value": this.hasValue(), "has-focus": this.hasFocus, "is-open": this.isOpen, position: this.position }, h("div", { class: { 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen } }, h("div", { class: {
        'input-container': true,
        [`search-${this.search}`]: true,
        'has-focus': this.hasFocus,
        'disabled': this.disabled,
        'readonly': this.readonly,
        'has-value': this.hasValue(),
        'start-slot-has-content': this.startSlotHasContent,
        'end-slot-has-content': this.endSlotHasContent,
      } }, h("div", { class: "slot-container start" }, h("slot", { name: "start" })), (() => {
      if (this.search !== 'none' && this.isOpen) {
        return (h("input", Object.assign({ class: "input input-native", ref: input => (this.nativeInput = input), type: "text", value: this.searchString, placeholder: this.placeholder, onBlur: this.blurHandler, onFocus: this.focusHandler, onInput: this.onInput, onKeyDown: this.keyDownHandler }, this.configAria)));
      }
      else {
        return (h("div", { class: "gc__section-hidden" }, h("div", Object.assign({ class: "input display-value", tabindex: "0", ref: input => (this.displayElement = input), "aria-disabled": this.disabled ? 'true' : null, onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler, onClick: evt => {
            evt.preventDefault();
            this.toggleList();
          } }, this.configAria), this.getDisplayValue()), h("input", { id: this.gcId, style: { display: 'none' }, value: this.value })));
      }
    })(), h("div", { class: "slot-container end" }, h("slot", { name: "end" })), this.getModeIcon()), h("div", { class: "gc__dropdown-content", ref: elm => (this.dropdownContentElm = elm) }, this.isOpen && this.renderDropdownList()))));
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
    return items.filter(item => {
      return !this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase());
    });
  }
  get elm() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
  static get style() { return gcSelectCss; }
}, [6, "gc-select", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "placeholder": [1],
    "value": [1032],
    "multiple": [4],
    "size": [513],
    "search": [1],
    "state": [513],
    "required": [516],
    "disabled": [516],
    "readonly": [516],
    "showLoader": [4, "show-loader"],
    "isOpen": [1028, "is-open"],
    "configAria": [1544, "config-aria"],
    "items": [1],
    "positions": [1],
    "clearable": [4],
    "debounce": [2],
    "hasFocus": [32],
    "searchString": [32],
    "startSlotHasContent": [32],
    "endSlotHasContent": [32],
    "position": [32],
    "stateItems": [32],
    "selectedColorItem": [32],
    "setFocus": [64],
    "setBlur": [64]
  }, [[8, "click", "windowClick"], [0, "gc:menu-item-click", "menuItemClick"], [0, "gc:tag-dismiss", "tagDismissClick"], [9, "scroll", "fixPosition"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-select", "gc-icon", "gc-menu", "gc-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcSelect);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcSelect as G, defineCustomElement as d };
