import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './gc-icon2.js';
import { d as defineCustomElement$2 } from './gc-menu2.js';
import { d as defineCustomElement$1 } from './gc-menu-item2.js';
import { c as createPopper } from './popper.js';

const gcDropdownCss = ":host{display:inline-block;height:var(--dropdown-height, auto)}#tooltip{display:none;border:1px solid var(--gc-color-second-grey);border-radius:5px;background-color:var(--gc-color-contrast-white);font-size:13px;z-index:var(--gc-z-index-gc__dropdown-content)}#tooltip[data-show]{display:block}#arrow,#arrow::before{position:absolute;width:8px;height:8px;background:inherit}#arrow{visibility:hidden}#tooltip[data-popper-placement^='bottom']>#arrow::before{visibility:visible;content:'';width:0;height:0;top:-5px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey)}#tooltip[data-popper-placement^='bottom']>#arrow::after{visibility:visible;content:'';width:0;height:0;top:-4px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white}#tooltip[data-popper-placement^='right']>#arrow::before{visibility:visible;content:'';width:0;height:0;top:0px;left:-1px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey);background:transparent;rotate:270deg}#tooltip[data-popper-placement^='right']>#arrow::after{visibility:visible;content:'';width:0;height:0;top:0px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white;background:transparent;rotate:270deg}#tooltip[data-popper-placement^='left']>#arrow::before{visibility:visible;content:'';width:0;height:0;top:0px;left:-1px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey);background:transparent;rotate:360deg}#tooltip[data-popper-placement^='left']>#arrow::after{visibility:visible;content:'';width:0;height:0;top:0px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white;background:transparent;rotate:360deg}#tooltip[data-popper-placement^='top']>#arrow{bottom:-4px}#tooltip[data-popper-placement^='bottom']>#arrow{top:-4px}#tooltip[data-popper-placement^='left']>#arrow{right:-4px}#tooltip[data-popper-placement^='right']>#arrow{left:-12px}";

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
        return (h("gc-menu-item", { value: item.value, tabindex: this.isOpen ? '0' : '-1' }, item.icon && h("gc-icon", { name: item.icon, slot: "start", size: "sm" }), item.label, item.hint && h("span", { slot: "end" }, item.hint)));
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
    return (h(Host, null, h("div", { onClick: () => this.handleClick(), onMouseEnter: () => this.handleHover(), onMouseLeave: () => this.handleHover(), class: "slot-container", id: "host-element", "aria-describedby": "tooltip", ref: elm => (this.containerElm = elm) }, h("slot", null)), h("div", { class: "gc__dropdown-content", id: "tooltip", role: "tooltip", ref: elm => (this.dropdownElm = elm) }, this.renderItems(), h("slot", { name: "gc__dropdown-content" }), h("div", { id: "arrow", "data-popper-arrow": true }))));
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
    "position": [32]
  }, [[8, "click", "windowClick"]]]);
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
