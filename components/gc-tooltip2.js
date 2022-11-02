import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as copyClipboard } from './utils.js';
import { d as defineCustomElement$2 } from './gc-button2.js';
import { d as defineCustomElement$1 } from './gc-icon2.js';

const gcTooltipCss = ".sc-gc-tooltip-h{--z-index-tooltip:999}.has-tooltip.sc-gc-tooltip{display:inline}.tooltip-wrapper.sc-gc-tooltip{position:absolute;display:none}.has-tooltip.active.sc-gc-tooltip .tooltip-wrapper.sc-gc-tooltip{display:block;z-index:var(--z-index-tooltip)}.tooltip.sc-gc-tooltip{display:block;position:relative;top:1em;max-width:400px;color:var(--gc-color-text-grey);background:white;border-radius:4px;border:1px solid var(--gc-color-second-grey);padding:10px}.tooltip.sc-gc-tooltip:before{content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;left:50%;margin-left:-8px;border-top:0px;border-bottom:8px solid var(--gc-color-second-grey)}.tooltip.sc-gc-tooltip:after{content:'';position:absolute;bottom:100%;left:50%;margin-left:-8px;width:0;height:0;border-bottom:8px solid white;border-right:8px solid transparent;border-left:8px solid transparent}";

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
    this.showTooltip = !this.showTooltip;
    this.gcToggleTooltip.emit(this.showTooltip);
  }
  render() {
    return (h("div", { onClick: () => this.onToggleTooltip(), style: { color: 'var(--gc-color-text-grey)', textDecoration: 'underline', cursor: 'pointer' }, class: { 'has-tooltip': true, 'active': this.isToggle ? this.showTooltip && this.isToggle : this.showTooltip } }, this.renderCutText(), h("span", { class: "tooltip-wrapper" }, h("div", { class: "tooltip", style: { right: this.rightPos || '35%', top: this.topPos || '1rem' } }, this.content, this.getIsCopyText() && (h("div", { style: { marginTop: '8px' } }, h("gc-button", { height: "29px", type: "primary", "onGc:click": () => copyClipboard(this.content, () => {
        this.isCopied = !this.isCopied;
      }) }, this.isCopied ? 'Copied' : this.getIsCopyText().text || 'Copy')))))));
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
