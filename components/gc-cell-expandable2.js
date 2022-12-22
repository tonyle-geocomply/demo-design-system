import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './gc-dropdown2.js';
import { d as defineCustomElement$4 } from './gc-icon2.js';
import { d as defineCustomElement$3 } from './gc-link2.js';
import { d as defineCustomElement$2 } from './gc-menu2.js';
import { d as defineCustomElement$1 } from './gc-menu-item2.js';

const gcCellExpandableCss = ".is-loading.sc-gc-cell-expandable-h .gc__steps-section.sc-gc-cell-expandable{position:relative;width:100vw;opacity:0.3}.gc__steps-section.sc-gc-cell-expandable{overflow:hidden;background:white}.gc__steps-section.open.sc-gc-cell-expandable{overflow:unset}.gc__steps-section.sc-gc-cell-expandable div.sc-gc-cell-expandable{border-left:1px solid #DAE1E8}.gc__step-item-title.sc-gc-cell-expandable{display:flex;align-items:center;padding-left:12px;position:sticky;left:0}.gc__step-item-icon.sc-gc-cell-expandable{cursor:pointer;border-radius:50%;border-width:1px;border-style:solid;border-color:#DAE1E8;width:34px;height:34px;transition:transform .5s}.gc__step-item-icon.sc-gc-cell-expandable>gc-icon.sc-gc-cell-expandable{display:flex;align-items:center;justify-content:center;width:-moz-available;width:-webkit-fill-available;width:fill-available;height:34px;position:relative}.gc__step-item-title--content.sc-gc-cell-expandable{margin-left:14px;display:flex;align-items:center}.gc__step-item-title--entry.sc-gc-cell-expandable{margin-left:auto}.transitioning.sc-gc-cell-expandable{transition:max-height .35s ease}header.gc__head.sc-gc-cell-expandable{border-bottom:1px solid var(--gc-color-second-grey);height:60px;display:flex}header.gc__head-opacity.sc-gc-cell-expandable{opacity:0.5;cursor:not-allowed}.transitioning-rotate.sc-gc-cell-expandable{transform:rotate(-180deg)}header.gc__head.sc-gc-cell-expandable hr.sc-gc-cell-expandable{border-top:1px solid var(--gc-color-second-grey);margin-top:12px;margin-bottom:0px;border-bottom:0px}.sc-gc-cell-expandable-s>div[slot=\"title\"]{font-weight:700;font-size:12px}.sc-gc-cell-expandable-s>div[slot=\"description\"]{font-weight:600;font-size:15px}.divider.sc-gc-cell-expandable{width:1px;height:21px;background:#E0E0E0;margin-left:12px;margin-right:12px}";

const GcCellExpandable = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.openExpandableRowsEvent = createEvent(this, "openExpandableRowsEvent", 7);
    this.closeExpandableRowsEvent = createEvent(this, "closeExpandableRowsEvent", 7);
    this.contentChanged = createEvent(this, "contentChanged", 7);
    this.calculatedHeight = 0;
    this.maxHeight = '1500px';
    this.fieldName = '';
    this.value = '';
    this.total = 0;
    this.numberOfEntryPerPage = 0;
    this.maxWidth = '';
    this.transitioning = false;
    this.isResize = false;
    /**
     * index of step item from top to bottom
     */
    this.index = '';
    /**
     * step item is open or opening (css transition)
     */
    this.open = false;
    /**
     * The mutation observer config to listen for content changes in the step item
     */
    this.mutationObserverConfig = { childList: true, subtree: true };
    /**
     * The status in step
     */
    this.status = '';
    /**
     * Disabled in step
     */
    this.disabled = false;
    /**
     * Should open in step
     */
    this.shouldOpen = false;
    /**
     * The tooltip message
     */
    this.tooltipMessage = '';
    /**
     * The total text
     */
    this.totalText = '';
    /**
     * The link to redirect
     */
    this.linkTo = '';
  }
  get style() {
    return {
      maxHeight: this.isResize && this.open ? this.maxHeight : this.open ? this.maxHeight : '0px',
    };
  }
  stateChanged(value) {
    if (this.disabled)
      return;
    if (value) {
      this.openExpandableRowsEvent.emit({
        index: this.index,
      });
    }
    else {
      this.closeExpandableRowsEvent.emit({
        index: this.index,
      });
    }
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-cell-expandable');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i + '';
      }
    }
    this.mutationObserver = new MutationObserver(() => this.contentChanged.emit());
    this.mutationObserver.observe(this.element, this.mutationObserverConfig);
  }
  componentDidLoad() {
    this.calculateHeight();
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  recalculateHeight() {
    const oldCalculatedHeight = this.calculatedHeight;
    if (this.calculateHeight() != oldCalculatedHeight && this.open) {
      this.transitioning = true;
    }
  }
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  handleContentChanged() {
    this.recalculateHeight();
  }
  handleResize() {
    this.isResize = true;
  }
  /**
   * close the step item
   */
  async closeItem() {
    this.open = false;
    this.shouldOpen = false;
  }
  /**
   * open the step item
   */
  async openItem() {
    this.disabled = false;
    this.open = true;
  }
  toggle() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      if (this.shouldOpen) {
        return;
      }
      this.closeItem();
    }
    else {
      this.openItem();
    }
  }
  handleTransitionEnd() {
    this.transitioning = false;
  }
  calculateHeight() {
    this.calculatedHeight = this.element.querySelector('gc-cell-expandable > section > div').clientHeight;
    return this.calculatedHeight;
  }
  render() {
    return (h(Host, null, h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true } }, h("div", { class: "gc__step-item-title", style: { width: this.maxWidth || 'calc(97vw + 10px)' } }, h("div", { onClick: () => this.toggle(), class: { 'transitioning-rotate': this.open, 'gc__step-item-icon': true }, onTransitionEnd: () => this.handleTransitionEnd() }, h("gc-icon", { name: "fa-solid fa-chevron-down", color: "var(--gc-color-primary)", size: "10px" })), h("div", { class: "gc__step-item-title--content" }, h("div", null, this.fieldName, ": ", h("b", null, this.value)), this.total > 0 ? h("div", { class: "divider" }) : null, this.total > 0 ? (h("gc-dropdown", { trigger: "hover", positions: "right" }, h("gc-link", { gcTo: this.linkTo, target: "_blank", stopPropagation: true }, h("b", null, this.total, " total ", this.totalText)), h("div", { slot: "gc__dropdown-content", style: { padding: '16px' } }, h("div", null, this.tooltipMessage)))) : null), h("div", { class: "gc__step-item-title--entry" }, this.numberOfEntryPerPage > 0 && this.open ? `Showing last ${this.numberOfEntryPerPage} of ${this.total} entries` : null))), h("section", { class: { 'gc__steps-section': true, 'transitioning': this.transitioning, 'open': this.open }, style: this.style }, h("div", null, h("slot", null)))));
  }
  get element() { return this; }
  static get watchers() { return {
    "open": ["stateChanged"]
  }; }
  static get style() { return gcCellExpandableCss; }
}, [6, "gc-cell-expandable", {
    "maxHeight": [1, "max-height"],
    "fieldName": [1, "field-name"],
    "value": [1],
    "total": [2],
    "numberOfEntryPerPage": [2, "number-of-entry-per-page"],
    "maxWidth": [1, "max-width"],
    "index": [1537],
    "open": [1540],
    "mutationObserverConfig": [16],
    "status": [1537],
    "disabled": [1540],
    "shouldOpen": [1028, "should-open"],
    "tooltipMessage": [1, "tooltip-message"],
    "totalText": [1, "total-text"],
    "linkTo": [1, "link-to"],
    "transitioning": [32],
    "isResize": [32],
    "closeItem": [64],
    "openItem": [64]
  }, [[0, "contentChanged", "handleContentChanged"], [9, "resize", "handleResize"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-cell-expandable", "gc-dropdown", "gc-icon", "gc-link", "gc-menu", "gc-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-cell-expandable":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcCellExpandable);
      }
      break;
    case "gc-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-link":
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

export { GcCellExpandable as G, defineCustomElement as d };
