'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2351688e.js');
const utils = require('./utils-ec7ae488.js');

const gcButtonCss = "button{padding:0 30px;height:41px;border-radius:var(--border-radius-btn);box-shadow:none;border:0px;font-size:var(--gc-font-size);cursor:pointer}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:var( --gc-color-primary);color:var(--gc-color-contrast-white)}button.gc__btn--danger{background:var(--gc-color-danger);color:var(--gc-color-contrast-white)}button.gc__btn--secondary{background:#E8ECF0;color:#35383D;border:1px solid var(--gc-color-second-grey)}button>.gc__button-text{line-height:41px}button>.gc__button-icon{vertical-align:middle;margin-right:8px}";

const GcButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The type name
     */
    this.type = 'primary';
  }
  getClassNameFromType() {
    return `gc__btn--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.disabled ? 'disabled' : ''} ${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  getColorIcon() {
    if (this.type === 'secondary') {
      return 'var(--gc-color-text-grey)';
    }
    return 'var(--gc-color-contrast-white)';
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
  }
  render() {
    return (index.h("button", { class: this.getClassName(), id: this.gcId }, this.icon && (index.h("span", { class: "gc__button-icon" }, index.h("gc-icon", { color: this.getColorIcon(), name: this.icon }))), index.h("span", { class: "gc__button-text" }, index.h("slot", null))));
  }
};
GcButton.style = gcButtonCss;

const gcCheckboxCss = ":host{display:block;margin-bottom:15px}input{padding:0;height:initial;width:initial;margin-bottom:0;display:none;cursor:pointer}label{position:relative;cursor:pointer}label:before{content:'';appearance:none;border:1px solid var(--gc-color-second-grey);box-shadow:0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);padding:7px;display:inline-block;position:relative;vertical-align:bottom;cursor:pointer;margin-right:5px;border-radius:3px}input:checked+label:before{background-color:var(--gc-color-primary)}input:checked+label:after{content:'';display:block;position:absolute;top:3px;left:5px;width:4px;height:5px;border:1px solid var(--gc-color-contrast-white);border-width:0 2px 2px 0;transform:rotate(45deg)}input:disabled+label:before{border:1px solid var(--gc-color-second-grey);opacity:0.6;cursor:not-allowed}input:disabled+label{cursor:not-allowed;text-decoration:line-through;color:var(--gc-color-disabled)}";

const GcCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Is checked ?
     */
    this.checked = false;
    /**
     * Is disabled ?
     */
    this.disabled = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("input", { class: this.class, id: this.gcName, type: "checkbox", checked: this.checked, disabled: this.disabled }), index.h("label", { htmlFor: this.gcName }, this.label)));
  }
};
GcCheckbox.style = gcCheckboxCss;

const GcFormField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The input type
     */
    this.type = 'text';
  }
  render() {
    return (index.h(index.Host, null, index.h("gc-label", { "gc-for": this.gcName }, this.label), index.h("gc-input", { "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder })));
  }
};

const typographyCss$2 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey)}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}";

const GcH1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h1 ${this.class}` : 'gc-h1';
  }
  render() {
    return (index.h("h1", { class: this.getClassName(), id: this.gcId }, index.h("slot", null)));
  }
};
GcH1.style = typographyCss$2;

const typographyCss$1 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey)}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}";

const GcH2 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h2 ${this.class}` : 'gc-h2';
  }
  render() {
    return (index.h("h2", { class: this.getClassName(), id: this.gcId }, index.h("slot", null)));
  }
};
GcH2.style = typographyCss$1;

const typographyCss = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey)}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}";

const GcH3 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h3 ${this.class}` : 'gc-h3';
  }
  render() {
    return (index.h("h3", { class: this.getClassName(), id: this.gcId }, index.h("slot", null)));
  }
};
GcH3.style = typographyCss;

const gcIconCss = ":host{display:inline-block}.icon{line-height:0;color:var(--gc-color-primary)}:host(.inherit) .icon{color:inherit}";

const GcIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
     */
    this.size = 'md';
    this.color = '';
    this.svg = '';
  }
  async fetchSvg() {
    if (this.name) {
      let svgName = null;
      try {
        switch (this.name) {
          case 'caret-down':
            svgName = await Promise.resolve().then(function () { return require('./caret-down-84133e14.js'); });
            break;
          case 'caret-up':
            svgName = await Promise.resolve().then(function () { return require('./caret-up-2838455a.js'); });
            break;
          case 'search':
            svgName = await Promise.resolve().then(function () { return require('./search-b07dfa30.js'); });
            break;
          case 'clear-search':
            svgName = await Promise.resolve().then(function () { return require('./clear-search-b71855ad.js'); });
            break;
          case 'table-setting':
            svgName = await Promise.resolve().then(function () { return require('./table-setting-a825d1fb.js'); });
            break;
          case 'advanced-filter':
            svgName = await Promise.resolve().then(function () { return require('./advanced-filter-73bd796c.js'); });
            break;
          case 'anchor':
            svgName = await Promise.resolve().then(function () { return require('./anchor-fa873322.js'); });
            break;
          case 'calendar':
            svgName = await Promise.resolve().then(function () { return require('./calendar-0c4fe8fa.js'); });
            break;
          case 'money':
            svgName = await Promise.resolve().then(function () { return require('./money-ec8facd9.js'); });
            break;
          case 'fraud':
            svgName = await Promise.resolve().then(function () { return require('./fraud-5beac682.js'); });
            break;
          case 'right-arrow':
            svgName = await Promise.resolve().then(function () { return require('./right-arrow-a2d7908d.js'); });
            break;
          case 'square-info':
            svgName = await Promise.resolve().then(function () { return require('./square-info-c5154645.js'); });
            break;
          case 'user-group':
            svgName = await Promise.resolve().then(function () { return require('./user-group-9be788e0.js'); });
            break;
          case 'bell':
            svgName = await Promise.resolve().then(function () { return require('./bell-a148fefe.js'); });
            break;
          case 'home':
            svgName = await Promise.resolve().then(function () { return require('./home-be922c39.js'); });
            break;
          case 'circle-question':
            svgName = await Promise.resolve().then(function () { return require('./circle-question-23c61be8.js'); });
            break;
          default:
            this.svg = '';
            break;
        }
        this.svg = svgName.default;
      }
      catch (e) {
        this.svg = '';
      }
    }
  }
  async componentWillLoad() {
    await this.fetchSvg();
  }
  getSize() {
    let size;
    if (this.size === 'sm')
      size = '1rem';
    else if (!this.size || this.size === 'md')
      size = '1.25rem';
    else if (this.size === 'lg')
      size = '1.5rem';
    else if (this.size === 'xl')
      size = '1.75rem';
    else
      size = this.size;
    return size;
  }
  render() {
    let icon = this.svg.replace(/width="([^"]+)"/, 'width="' + this.getSize() + '"').replace(/height="([^"]+)"/, 'height="' + this.getSize() + '"');
    if (this.color) {
      icon = icon.replace(/fill="([^"]+)"/g, 'fill="' + this.color + '"');
    }
    if (!this.svg) {
      return null;
    }
    return (index.h(index.Host, null, index.h("div", { innerHTML: icon, class: { icon: true } })));
  }
};
GcIcon.style = gcIconCss;

const gcInputCss = "input{background:var(--gc-color-contrast-white);border:1px solid var(--gc-color-second-grey);border-radius:5px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative;display:inline-block;margin:0}input[disabled]{color:#00000040;background-color:#f5f5f5;box-shadow:none;cursor:not-allowed;opacity:1}input:focus{background-color:var(--gc-color-contrast-white);border-color:var(--gc-color-primary);outline:0;box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}::placeholder{color:var(--gc-color-second-grey)}:-ms-input-placeholder{color:var(--gc-color-second-grey)}::-ms-input-placeholder{color:var(--gc-color-second-grey)}";

const GcInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The input type
     */
    this.type = 'text';
  }
  render() {
    return index.h("input", { class: this.class, name: this.gcName, id: this.gcId, type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled });
  }
};
GcInput.style = gcInputCss;

const gcLabelCss = "label{font-family:var(--gc-font-family);font-weight:var(--gc-font-weight-label);font-size:var(--gc-font-size-label);color:var(--gc-color-label-grey);line-height:var(--gc-line-height-label);text-transform:uppercase}";

const GcLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class || '';
  }
  render() {
    return (index.h("label", { class: this.getClassName(), id: this.gcId, htmlFor: this.gcFor }, index.h("slot", null)));
  }
};
GcLabel.style = gcLabelCss;

const gcMenuCss = ":host{display:inline-block}.menu{background-color:var(--gc-color-contrast-white);border:1px solid var(--gc-color-second-grey);box-sizing:border-box;border-bottom-left-radius:5px;border-bottom-right-radius:5px}::slotted(*:last-child){border-bottom:0px}";

const GcMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
  render() {
    return (index.h("div", { part: "custom", class: "menu" }, index.h("slot", null)));
  }
  get elm() { return index.getElement(this); }
  static get watchers() { return {
    "emptyState": ["parseEmptyState"]
  }; }
};
GcMenu.style = gcMenuCss;

const gcMenuItemCss = ":host{display:block;border-bottom:1px solid var(--gc-color-second-grey)}.menu-item{cursor:pointer;padding:14px;box-sizing:border-box;display:flex;align-items:center;color:var(--gc-color-text-grey);outline:none}.menu-item .item-section{display:flex;align-items:center}.menu-item .slot-main{display:block;flex:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.menu-item:hover,.menu-item.has-focus:not(.active){background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end,.menu-item.has-focus:not(.active) .slot-end{color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end{color:var(--gc-color-contrast-white)}.menu-item.active,.menu-item.selected{background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item.disabled{cursor:not-allowed;color:var(--gc-color-disabled);background-color:var(--gc-color-contrast-white)}.menu-item.disabled:hover,.menu-item.disabled.has-focus:not(.active){color:var(--gc-color-disabled);background-color:var(--gc-color-contrast-white)}.menu-item.disabled.active,.menu-item.disabled.selected{color:var(-gc-color-contrast-white);background-color:var(--gc-color-disabled)}.menu-item:not(.start-slot-has-content) .slot-start{display:none}.menu-item:not(.end-slot-has-content) .slot-end{display:none}";

const GcMenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.goatMenuItemClick = index.createEvent(this, "goat:menu-item-click", 7);
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
    this.clickHandler = event => {
      if (!this.disabled) {
        this.goatMenuItemClick.emit({
          value: this.value || this.elm.innerText,
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
    this.keyDownHandler = evt => {
      if (evt.key == ' ') {
        evt.preventDefault();
        this.isActive = true;
        this.clickHandler(evt);
      }
    };
    this.render = () => {
      return (index.h(index.Host, { active: this.isActive, "has-focus": this.hasFocus }, index.h("div", { id: this.gcId, ref: el => (this.nativeInput = el), class: {
          'menu-item': true,
          'selected': this.selected,
          'active': this.isActive,
          'disabled': this.disabled,
          'has-focus': this.hasFocus,
          'start-slot-has-content': this.startSlotHasContent,
          'end-slot-has-content': this.endSlotHasContent,
          [this.class]: this.class ? true : false,
        }, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, "aria-disabled": this.disabled }, index.h("div", { class: "item-section slot-main" }, index.h("slot", null)))));
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
  get elm() { return index.getElement(this); }
};
GcMenuItem.style = gcMenuItemCss;

const GcOl = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-ol ${this.class}` : 'gc-ol';
  }
  render() {
    return (index.h("ol", { class: this.getClassName(), id: this.gcId }, index.h("slot", null)));
  }
};

const gcSelectCss = ".input-container{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--gc-color-contrast-white);border-color:var(--gc-color-second-grey);border-style:solid;border-bottom-width:1px;border-top-width:1px;border-left-width:1px;border-right-width:1px;border-radius:5px;padding:12px}.input-container .input{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;padding:0;color:v(--text-primary)}.input-container .input::placeholder{color:v(--text-placeholder)}.input-container .slot-container{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot::slotted(*){padding-bottom:0 !important;margin-bottom:0 !important;color:v(--color-neutral-400)}.input-container .slot-container slot::slotted(*) goat-icon{--color:v(--color-neutral-400)}.input-container.start-slot-has-content .input{padding-left:0.5rem}.input-container.end-slot-has-content .input{padding-right:0.5rem}.input-container:not(.start-slot-has-content) .slot-container.start{display:none}.input-container:not(.end-slot-has-content) .slot-container.end{display:none}.input-container .input-action{cursor:pointer}.input-container .input-action:hover{--text-color:var(--text-secondary)}.dropdown{position:relative}.dropdown .dropdown-content{z-index:var(--gc-z-index-dropdown-content);position:absolute;width:max-content;transition:transform 0.1s ease-out 0s}.dropdown .caret-down{transition:transform 0.1s ease-out 0s}.dropdown.is-open .dropdown-content{transform:scale(1)}.dropdown.is-open .caret-down{transform:rotate(180deg)}.dropdown.bottom-right .dropdown-content{top:calc(100%);left:0;transform-origin:top}.dropdown.bottom-left .dropdown-content{top:calc(100%);right:0;transform-origin:top}.dropdown.top-right .dropdown-content{bottom:calc(100%);left:0;transform-origin:bottom}.dropdown.top-left .dropdown-content{bottom:calc(100%);right:0;transform-origin:bottom}.dropdown.center .dropdown-content{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none}.select .dropdown-content{width:100%;min-width:10rem}.select .menu{width:100%}.select .display-value{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.select .multi-select-value{padding-inline-end:0.5rem}.select .multi-select-value:last-child{padding-inline-end:0}.select .input-container:not(.has-value) .display-value{color:v(--text-placeholder)}.select .start-search{height:10rem;display:flex;align-items:center;justify-content:center;flex-direction:column}.dropdown.bottom-right.is-open .input-container,.dropdown.bottom-left.is-open .input-container{border-bottom-width:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.dropdown.top-right.is-open .input-container,.dropdown.top-left.is-open .input-container{border-top-width:0;border-top-right-radius:0;border-top-left-radius:0}.dropdown.bottom-right.is-open .menu,.dropdown.bottom-left.is-open .menu{box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.dropdown.top-right.is-open .menu,.dropdown.top-left.is-open .menu{box-shadow:0px -3px 8px rgb(0 0 0 / 10%)}.dropdown.top-right.is-open gc-menu::part(custom){border-top-right-radius:5px;border-top-left-radius:5px;border-bottom-right-radius:0;border-bottom-left-radius:0}";

const GcSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.goatChange = index.createEvent(this, "goat:change", 7);
    this.p4ActionClick = index.createEvent(this, "goat:action-click", 7);
    this.goatSearch = index.createEvent(this, "goat:search", 7);
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
    this.goatSearch = utils.debounceEvent(this.goatSearch, this.debounce);
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
        return index.h("span", null, "\u00A0");
      }
    }
    else {
      if (!this.value && !this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return index.h("span", null, "\u00A0");
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
      if (utils.isMobile()) {
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
        const isOut = utils.isOutOfViewport(dropdownContentRect);
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
    return (index.h(index.Host, { "has-value": this.hasValue(), "has-focus": this.hasFocus, "is-open": this.isOpen, position: this.position }, index.h("div", { class: { 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen } }, index.h("div", { class: {
        'input-container': true,
        [`search-${this.search}`]: true,
        'has-focus': this.hasFocus,
        'disabled': this.disabled,
        'readonly': this.readonly,
        'has-value': this.hasValue(),
        'start-slot-has-content': this.startSlotHasContent,
        'end-slot-has-content': this.endSlotHasContent,
      } }, index.h("div", { class: "slot-container start" }, index.h("slot", { name: "start" })), (() => {
      if (this.search !== 'none' && this.isOpen) {
        return (index.h("input", Object.assign({ class: "input input-native", ref: input => (this.nativeInput = input), type: "text", value: this.searchString, placeholder: this.placeholder, onBlur: this.blurHandler, onFocus: this.focusHandler, onInput: this.onInput, onKeyDown: this.keyDownHandler }, this.configAria)));
      }
      else {
        return (index.h("div", Object.assign({ class: "input display-value", tabindex: "0", ref: input => (this.displayElement = input), "aria-disabled": this.disabled ? 'true' : null, onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler, onClick: evt => {
            evt.preventDefault();
            this.toggleList();
          } }, this.configAria), this.getDisplayValue()));
      }
    })(), index.h("div", { class: "slot-container end" }, index.h("slot", { name: "end" })), this.getModeIcon()), index.h("div", { class: "dropdown-content", ref: elm => (this.dropdownContentElm = elm) }, this.isOpen && this.renderDropdownList()))));
  }
  getModeIcon() {
    if (!this.disabled && !this.readonly)
      return index.h("gc-icon", { name: "caret-down", size: "10px", class: "input-action caret-down", role: "button", onClick: this.toggleList });
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
      return (index.h("gc-menu", { class: "menu", empty: filteredItems.length == 0, ref: el => (this.menuElm = el) }, (() => {
        return filteredItems.map(item => {
          return index.h("gc-menu-item", { value: item.value }, item.label || item.value);
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
  get elm() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
GcSelect.style = gcSelectCss;

const gcTagCss = ".gc__badge{border-radius:60px;text-align:center;color:var(--gc-color-contrast-white);padding:6px;display:inline-block}.gc__badge--primary{background-color:var(--gc-color-primary)}.gc__badge--success{background-color:var(--gc-color-green)}.gc__badge--warning{background-color:var(--gc-color-orange)}.gc__badge--danger{background-color:var(--gc-color-dark-red)}.gc__badge--info{background-color:var(--gc-color-cyan)}.gc__badge--processing{background-color:var(--gc-color-purple)}";

const GcTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The width of badge
     */
    this.width = '76px';
    /**
     * The background of badge
     */
    this.background = 'var(--gc-color-primary)';
    /**
     * The color of badge
     */
    this.color = 'var(--gc-color-contrast-white)';
    /**
     * The border width of badge
     */
    this.borderWidth = '0px';
    /**
     * The border color of badge
     */
    this.borderColor = 'none';
  }
  getClassNameFromType() {
    return `gc__badge gc__badge--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  getStyle() {
    return {
      width: this.width,
      color: this.color,
      backgroundColor: this.type ? '' : this.background,
      borderWidth: this.type ? 'none' : this.borderWidth || '1px',
      borderColor: this.type ? 'none' : this.borderColor,
      borderStyle: this.type ? 'none' : 'solid',
    };
  }
  render() {
    return (index.h("div", { style: this.getStyle(), class: this.getClassName(), id: this.gcId }, index.h("slot", null)));
  }
};
GcTag.style = gcTagCss;

const GcUl = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-ul ${this.class}` : 'gc-ul';
  }
  render() {
    return (index.h("ul", { class: this.getClassName(), id: this.gcId }, index.h("slot", null)));
  }
};

exports.gc_button = GcButton;
exports.gc_checkbox = GcCheckbox;
exports.gc_form_field = GcFormField;
exports.gc_h1 = GcH1;
exports.gc_h2 = GcH2;
exports.gc_h3 = GcH3;
exports.gc_icon = GcIcon;
exports.gc_input = GcInput;
exports.gc_label = GcLabel;
exports.gc_menu = GcMenu;
exports.gc_menu_item = GcMenuItem;
exports.gc_ol = GcOl;
exports.gc_select = GcSelect;
exports.gc_tag = GcTag;
exports.gc_ul = GcUl;
