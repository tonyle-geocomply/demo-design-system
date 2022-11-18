import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as copyClipboard } from './utils.js';
import { d as defineCustomElement$2 } from './gc-button2.js';
import { d as defineCustomElement$1 } from './gc-icon2.js';
import { c as createPopper } from './popper.js';

const gcTooltipCss = ".sc-gc-tooltip-h{--z-index-tooltip:999}#tooltip.sc-gc-tooltip{display:none;background-color:var(--gc-color-contrast-white);z-index:var(--z-index-tooltip);max-width:400px;color:var(--gc-color-text-grey);background:white;border-radius:4px;border:1px solid var(--gc-color-second-grey);padding:10px}#tooltip[data-show].sc-gc-tooltip{display:block}#arrow.sc-gc-tooltip,#arrow.sc-gc-tooltip::before{position:absolute;width:8px;height:8px;background:inherit}#arrow.sc-gc-tooltip{visibility:hidden}#arrow.sc-gc-tooltip::before{visibility:visible;content:'';width:0;height:0;top:-5px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey)}#arrow.sc-gc-tooltip::after{visibility:visible;content:'';width:0;height:0;top:-4px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white}#tooltip[data-popper-placement^='top'].sc-gc-tooltip>#arrow.sc-gc-tooltip{bottom:-4px}#tooltip[data-popper-placement^='bottom'].sc-gc-tooltip>#arrow.sc-gc-tooltip{top:-4px}#tooltip[data-popper-placement^='left'].sc-gc-tooltip>#arrow.sc-gc-tooltip{right:-4px}#tooltip[data-popper-placement^='right'].sc-gc-tooltip>#arrow.sc-gc-tooltip{left:-4px}.slot-container.sc-gc-tooltip{width:fit-content}";

const MAX_LONG_TEXT = 100;
const GcTooltip = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcToggleTooltip = createEvent(this, "gc:toggle-tooltip", 7);
    /**
     * Is Long Text?
     */
    this.isLongText = false;
    /**
     * Is Toggle?
     */
    this.isToggle = false;
    /**
     * Right position
     */
    this.rightPos = '';
    /**
     * Top position
     */
    this.topPos = '';
    /**
     * Is Popover?
     */
    this.isPopover = false;
    this.showTooltip = false;
    this.isCopied = false;
  }
  getIsCopyText() {
    if (this.isCopyText) {
      if (typeof this.isCopyText === 'string') {
        try {
          return JSON.parse(this.isCopyText);
        }
        catch (e) {
          return undefined;
        }
      }
      return this.isCopyText;
    }
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) {
        return;
      }
    }
    if (this.isCopied)
      return false;
    this.showTooltip = false;
    this.dropdownElm.removeAttribute('data-show');
    this.gcToggleTooltip.emit(this.showTooltip);
  }
  renderCutText() {
    const isCopyText = this.getIsCopyText();
    if (this.isLongText) {
      return this.content.length > MAX_LONG_TEXT ? this.content.slice(0, MAX_LONG_TEXT) + '...' : this.content;
    }
    if (isCopyText && this.content) {
      if (isCopyText.remainSuffix) {
        return this.content.length > +isCopyText.remainSuffix ? '...' + this.content.slice(-isCopyText.remainSuffix) : this.content;
      }
      if (isCopyText.remainPrefix) {
        return this.content.length > +isCopyText.remainPrefix ? this.content.slice(0, isCopyText.remainPrefix) + '...' : this.content;
      }
    }
    return this.content;
  }
  onToggleTooltip() {
    if (this.isCopied) {
      setTimeout(() => {
        this.isCopied = false;
      }, 500);
      return;
    }
    if (!this.dropdownElm.hasAttribute('data-show')) {
      this.dropdownElm.setAttribute('data-show', '');
      // We need to tell Popper to update the tooltip position
      // after we show the tooltip, otherwise it will be incorrect
      this.popperInstance.update();
    }
    else {
      this.dropdownElm.removeAttribute('data-show');
    }
    this.showTooltip = !this.showTooltip;
    this.gcToggleTooltip.emit(this.showTooltip);
  }
  componentDidLoad() {
    this.popperInstance = createPopper(this.containerElm, this.dropdownElm, {
      placement: 'bottom',
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
  render() {
    return (h(Host, null, h("div", { style: { color: 'var(--gc-color-text-grey)', textDecoration: this.isPopover ? '' : 'underline', cursor: 'pointer' }, onClick: () => this.onToggleTooltip(), class: "slot-container", id: "host-element", "aria-describedby": "tooltip", ref: elm => (this.containerElm = elm) }, this.renderCutText()), h("div", { class: "gc__dropdown-content", id: "tooltip", role: "tooltip", ref: elm => (this.dropdownElm = elm) }, this.content, this.getIsCopyText() && (h("div", { style: { marginTop: '8px' } }, h("gc-button", { height: "29px", type: "primary", "onGc:click": () => copyClipboard(this.content, () => {
        this.isCopied = !this.isCopied;
      }) }, this.isCopied ? 'Copied' : this.getIsCopyText().text || 'Copy'))), h("div", { id: "arrow", "data-popper-arrow": true }))));
  }
  get elm() { return this; }
  static get style() { return gcTooltipCss; }
}, [2, "gc-tooltip", {
    "isCopyText": [8, "is-copy-text"],
    "isLongText": [4, "is-long-text"],
    "content": [8],
    "isToggle": [4, "is-toggle"],
    "rightPos": [1, "right-pos"],
    "topPos": [1, "top-pos"],
    "isPopover": [4, "is-popover"],
    "showTooltip": [32],
    "isCopied": [32]
  }, [[8, "click", "windowClick"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-tooltip", "gc-button", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTooltip);
      }
      break;
    case "gc-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GcTooltip as G, defineCustomElement as d };
