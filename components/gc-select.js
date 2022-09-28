import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as debounceEvent, i as isMobile, a as isOutOfViewport } from './utils.js';
import { d as defineCustomElement$4 } from './gc-icon2.js';
import { d as defineCustomElement$3 } from './gc-menu2.js';
import { d as defineCustomElement$2 } from './gc-menu-item2.js';

const gcSelectCss = ".input-container{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--gc-color-contrast-white);border-color:var(--gc-color-second-grey);border-style:solid;border-bottom-width:1px;border-top-width:1px;border-left-width:1px;border-right-width:1px;border-radius:5px;padding:12px}.input-container .input{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;padding:0;color:v(--text-primary)}.input-container .input::placeholder{color:v(--text-placeholder)}.input-container .slot-container{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot::slotted(*){padding-bottom:0 !important;margin-bottom:0 !important;color:v(--color-neutral-400)}.input-container .slot-container slot::slotted(*) goat-icon{--color:v(--color-neutral-400)}.input-container.start-slot-has-content .input{padding-left:0.5rem}.input-container.end-slot-has-content .input{padding-right:0.5rem}.input-container:not(.start-slot-has-content) .slot-container.start{display:none}.input-container:not(.end-slot-has-content) .slot-container.end{display:none}.input-container .input-action{cursor:pointer}.input-container .input-action:hover{--text-color:var(--text-secondary)}.dropdown{position:relative}.dropdown .dropdown-content{z-index:var(--gc-z-index-dropdown-content);position:absolute;width:max-content;transition:transform 0.1s ease-out 0s}.dropdown .caret-down{transition:transform 0.1s ease-out 0s}.dropdown.is-open .dropdown-content{transform:scale(1)}.dropdown.is-open .caret-down{transform:rotate(180deg)}.dropdown.bottom-right .dropdown-content{top:calc(100%);left:0;transform-origin:top}.dropdown.bottom-left .dropdown-content{top:calc(100%);right:0;transform-origin:top}.dropdown.top-right .dropdown-content{bottom:calc(100%);left:0;transform-origin:bottom}.dropdown.top-left .dropdown-content{bottom:calc(100%);right:0;transform-origin:bottom}.dropdown.center .dropdown-content{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none}.select .dropdown-content{width:100%;min-width:10rem}.select .menu{width:100%}.select .display-value{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.select .multi-select-value{padding-inline-end:0.5rem}.select .multi-select-value:last-child{padding-inline-end:0}.select .input-container:not(.has-value) .display-value{color:v(--text-placeholder)}.select .start-search{height:10rem;display:flex;align-items:center;justify-content:center;flex-direction:column}.dropdown.bottom-right.is-open .input-container,.dropdown.bottom-left.is-open .input-container{border-bottom-width:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.dropdown.top-right.is-open .input-container,.dropdown.top-left.is-open .input-container{border-top-width:0;border-top-right-radius:0;border-top-left-radius:0}.dropdown.bottom-right.is-open .menu,.dropdown.bottom-left.is-open .menu{box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.dropdown.top-right.is-open .menu,.dropdown.top-left.is-open .menu{box-shadow:0px -3px 8px rgb(0 0 0 / 10%)}.dropdown.top-right.is-open gc-menu::part(custom){border-top-right-radius:5px;border-top-left-radius:5px;border-bottom-right-radius:0;border-bottom-left-radius:0}";

const GcSelect$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.goatChange = createEvent(this, "goat:change", 7);
    this.p4ActionClick = createEvent(this, "goat:action-click", 7);
    this.goatSearch = createEvent(this, "goat:search", 7);
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
    this.selectHandler = selectItemValue => {
      if (!this.disabled && !this.readonly) {
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
          console.log('inside select');
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
    if (!value.includes(selectItemValue)) {
      if (!this.multiple)
        value = [];
      value.push(selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value, newItem: this.getItemByValue(selectItemValue) });
    }
  }
  removeItem(selectItemValue) {
    let value = this.getValues();
    if (value.includes(selectItemValue)) {
      value = value.filter(item => item !== selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value, removedItem: this.getItemByValue(selectItemValue) });
    }
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getItems() {
    if (this.items) {
      if (typeof (this.items) === 'string') {
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
        if (item) {
          return item.label;
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
  render() {
    return (h(Host, { "has-value": this.hasValue(), "has-focus": this.hasFocus, "is-open": this.isOpen, position: this.position }, h("div", { class: { 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen } }, h("div", { class: {
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
        return (h("div", Object.assign({ class: "input display-value", tabindex: "0", ref: input => (this.displayElement = input), "aria-disabled": this.disabled ? 'true' : null, onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler, onClick: evt => {
            evt.preventDefault();
            this.toggleList();
          } }, this.configAria), this.getDisplayValue()));
      }
    })(), h("div", { class: "slot-container end" }, h("slot", { name: "end" })), this.getModeIcon()), h("div", { class: "dropdown-content", ref: elm => (this.dropdownContentElm = elm) }, this.isOpen && this.renderDropdownList()))));
  }
  getModeIcon() {
    if (!this.disabled && !this.readonly)
      return h("gc-icon", { name: "caret-down", size: "10px", class: "input-action caret-down", role: "button", onClick: this.toggleList });
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
          return h("gc-menu-item", { value: item.value }, item.label || item.value);
        });
      })()));
    }
  }
  filterItems() {
    if (this.search === 'managed')
      return this.items;
    const items = this.getItems();
    return items.filter(item => {
      return !this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase());
    });
  }
  get elm() { return this; }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
  static get style() { return gcSelectCss; }
}, [1, "gc-select", {
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
    "setFocus": [64],
    "setBlur": [64]
  }, [[8, "click", "windowClick"], [0, "goat:menu-item-click", "menuItemClick"], [0, "goat:tag-dismiss", "tagDismissClick"], [9, "scroll", "fixPosition"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-select", "gc-icon", "gc-menu", "gc-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcSelect$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcSelect = GcSelect$1;
const defineCustomElement = defineCustomElement$1;

export { GcSelect, defineCustomElement };
