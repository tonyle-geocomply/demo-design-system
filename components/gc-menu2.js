import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const gcMenuCss = ":host{display:inline-block}.menu{background-color:var(--gc-color-contrast-white);border:1px solid var(--gc-color-second-grey);box-sizing:border-box;border-bottom-left-radius:5px;border-bottom-right-radius:5px}::slotted(*:last-child){border-bottom:0px}";

const GcMenu = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    return (h("div", { part: "custom", class: "menu" }, h("slot", null)));
  }
  get elm() { return this; }
  static get watchers() { return {
    "emptyState": ["parseEmptyState"]
  }; }
  static get style() { return gcMenuCss; }
}, [1, "gc-menu", {
    "showLoader": [4, "show-loader"],
    "value": [1032],
    "empty": [1028],
    "emptyState": [1032, "empty-state"],
    "internalEmptyState": [32],
    "setFocus": [64]
  }, [[8, "keydown", "handleKeyDown"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcMenu);
      }
      break;
  } });
}

export { GcMenu as G, defineCustomElement as d };
