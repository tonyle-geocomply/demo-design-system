import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { i as isEventTriggerByElement, a as isMobile, b as isOutOfViewport } from './utils.js';
import { d as defineCustomElement$3 } from './gc-icon2.js';
import { d as defineCustomElement$2 } from './gc-menu2.js';
import { d as defineCustomElement$1 } from './gc-menu-item2.js';

const gcDropdownCss = ":host{display:inline-block;height:var(--dropdown-height, auto)}.dropdown{position:relative;height:var(--dropdown-height, auto)}.dropdown .dropdown-button{border:none;background:none;padding:0;margin:0;height:100%;width:100%}.dropdown .dropdown-button .slot-container{height:100%}.dropdown .gc__dropdown-content{z-index:var(--gc-z-index-gc__dropdown-content);position:absolute;width:max-content;transform:scale(0);transition:transform 0.1s ease-out 0s}.dropdown.is-open .gc__dropdown-content{transform:scale(1)}.dropdown.bottom-right .gc__dropdown-content{top:calc(100% + 0.5rem);left:0;transform-origin:top}.dropdown.bottom-left .gc__dropdown-content{top:calc(100% + 0.5rem);right:0;transform-origin:top}.dropdown.top-right .gc__dropdown-content{bottom:calc(100% + 0.5rem);left:0;transform-origin:bottom}.dropdown.top-left .gc__dropdown-content{bottom:calc(100% + 0.5rem);right:0;transform-origin:bottom}.dropdown.center .gc__dropdown-content{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none}.dropdown .items{min-width:12rem}:host([has-focus]) .dropdown{outline:none}div.gc__dropdown-content{border:1px solid var(--gc-color-second-grey);border-radius:5px;background-color:var(--gc-color-contrast-white)}.bottom-right div.gc__dropdown-content::before{content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;left:15%;margin-left:-10px;border-top:0px;border-bottom:8px solid var(--gc-color-second-grey)}.bottom-right div.gc__dropdown-content::after{border-bottom:8px solid white;margin-top:2px;z-index:1;content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;left:15%;margin-left:-10px}.bottom-left div.gc__dropdown-content::before{content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;right:15%;margin-left:-10px;border-top:0px;border-bottom:8px solid var(--gc-color-second-grey)}.bottom-left div.gc__dropdown-content::after{border-bottom:8px solid white;margin-top:2px;z-index:1;content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;right:15%;margin-left:-10px}";

const GcDropdown = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    this.trigger = 'click';
    this.hasFocus = false;
    this.openList = () => {
      if (!this.disabled && !this.isOpen) {
        this.isOpen = true;
        setTimeout(() => {
          const dropdownContent = this.elm.querySelector('[slot="gc__dropdown-content"]');
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
    this.mouseEnterHandler = () => {
      if (this.trigger === 'hover') {
        this.isOpen = true;
      }
    };
    this.mouseLeaveHandler = () => {
      if (this.trigger === 'hover') {
        this.isOpen = false;
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
        return (h("gc-menu-item", { value: item.value, tabindex: this.isOpen ? '0' : '-1' }, item.icon && h("gc-icon", { name: item.icon, slot: "start", size: "sm" }), item.label, item.hint && h("span", { slot: "end" }, item.hint)));
      })));
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, "is-open": this.isOpen }, h("div", { class: {
        'dropdown': true,
        [this.position]: true,
        'is-open': this.isOpen,
      }, onMouseEnter: this.mouseEnterHandler, onMouseLeave: this.mouseLeaveHandler }, h("button", { class: "dropdown-button", onKeyDown: this.keyDownHandler, tabindex: "-1", onBlur: this.blurHandler, onFocus: this.focusHandler, disabled: this.disabled, onClick: () => {
        this.toggleList();
      } }, h("div", { class: "slot-container" }, h("slot", null))), h("div", { class: "gc__dropdown-content" }, this.renderItems(), h("slot", { name: "gc__dropdown-content" })))));
  }
  get elm() { return this; }
  static get style() { return gcDropdownCss; }
}, [1, "gc-dropdown", {
    "size": [1],
    "isOpen": [1028, "is-open"],
    "disabled": [4],
    "positions": [1],
    "items": [16],
    "trigger": [1],
    "hasFocus": [32],
    "position": [32],
    "setFocus": [64]
  }, [[8, "click", "windowClick"], [8, "gc:menu-item-click", "listenMenuItemClick"], [8, "gc:click", "listenClick"], [8, "keydown", "listenKeyDown"], [9, "scroll", "fixPosition"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-dropdown", "gc-icon", "gc-menu", "gc-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcDropdown);
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

export { GcDropdown as G, defineCustomElement as d };
