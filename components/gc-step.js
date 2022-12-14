import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gc-icon2.js';

const gcStepCss = ".gc__steps-section.sc-gc-step{overflow:hidden}.gc__steps-section.open.sc-gc-step{overflow:unset}.gc__steps-section.sc-gc-step div.sc-gc-step{padding:0px 40px;border-left:1px solid #DAE1E8;margin-left:44px}.gc__step-item-title.sc-gc-step{display:flex;align-items:center;padding-left:20px}.gc__step-item-icon.sc-gc-step{border-radius:50%;border-width:2px;border-style:solid;width:48px;height:48px}.gc__step-item-icon.sc-gc-step>gc-icon.sc-gc-step{display:flex;align-items:center;justify-content:center;width:-moz-available;width:-webkit-fill-available;width:fill-available;height:44px;position:relative}.gc__step-item-title--content.sc-gc-step{margin-left:14px}.transitioning.sc-gc-step{transition:max-height .35s ease}header.gc__head.sc-gc-step{margin-top:12px;cursor:pointer}header.gc__head-opening.sc-gc-step{margin-bottom:10px}header.gc__head-opacity.sc-gc-step{opacity:0.5;cursor:not-allowed}.transitioning-rotate.sc-gc-step{transition:transform .3s ease-in-out;transform:rotateY(90deg)}header.gc__head.sc-gc-step hr.sc-gc-step{border-top:1px solid var(--gc-color-second-grey);margin-top:12px;margin-bottom:0px;border-bottom:0px}.sc-gc-step-s>div[slot=\"title\"]{font-weight:700;font-size:12px}.sc-gc-step-s>div[slot=\"description\"]{font-weight:600;font-size:15px}";

const GcStep$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.openEvent = createEvent(this, "openEvent", 7);
    this.beforeOpenEvent = createEvent(this, "beforeOpenEvent", 7);
    this.closeEvent = createEvent(this, "closeEvent", 7);
    this.contentChanged = createEvent(this, "contentChanged", 7);
    this.calculatedHeight = 0;
    this.maxHeight = '1500px';
    this.transitioning = false;
    this.isResize = false;
    this.openCount = 0;
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
     * The icon in step
     */
    this.icon = 'fa-regular fa-building-shield';
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
     * Customize in step opening
     */
    this.customOpen = false;
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
      this.openEvent.emit({
        index: this.index,
      });
      this.openCount = this.openCount + 1;
    }
    else {
      this.closeEvent.emit({
        index: this.index,
      });
      this.openCount = 0;
    }
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-step');
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
  /**
   * before open the step item
   */
  async beforeOpenItem() {
    this.beforeOpenEvent.emit({
      index: this.index,
    });
  }
  toggle() {
    if (this.customOpen || this.disabled) {
      return;
    }
    if (this.open) {
      if (this.shouldOpen) {
        return;
      }
      this.closeItem();
    }
    else {
      this.beforeOpenItem();
    }
  }
  handleTransitionEnd() {
    this.transitioning = false;
    this.openCount = 0;
  }
  calculateHeight() {
    this.calculatedHeight = this.element.querySelector('gc-step > section > div').clientHeight;
    return this.calculatedHeight;
  }
  render() {
    const successCondition = !this.open && this.status === 'success';
    const opacityCondition = this.disabled;
    return (h(Host, null, h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true, 'gc__head-opacity': opacityCondition }, onClick: () => this.toggle() }, h("div", { class: "gc__step-item-title" }, h("div", { style: { borderColor: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' }, class: { 'transitioning-rotate': this.transitioning && this.open && this.openCount === 1, 'gc__step-item-icon': true }, onTransitionEnd: () => this.handleTransitionEnd() }, successCondition ? (h("gc-icon", { name: "fa-regular fa-check", color: "var(--gc-color-green)", size: "24px" })) : (h("gc-icon", { name: this.icon, color: "var(--gc-color-primary)", size: "22px" }))), h("div", { class: "gc__step-item-title--content" }, h("div", { style: { color: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' } }, h("slot", { name: "title" })), h("slot", { name: "description" }))), !this.open && h("hr", null)), h("section", {
      // onTransitionEnd={() => this.handleTransitionEnd()}
      class: { 'gc__steps-section': true, 'transitioning': this.transitioning, 'open': this.open }, style: this.style
    }, h("div", null, h("slot", null)))));
  }
  get element() { return this; }
  static get watchers() { return {
    "open": ["stateChanged"]
  }; }
  static get style() { return gcStepCss; }
}, [6, "gc-step", {
    "maxHeight": [1, "max-height"],
    "index": [1537],
    "open": [1540],
    "mutationObserverConfig": [16],
    "icon": [1537],
    "status": [1537],
    "disabled": [1540],
    "shouldOpen": [1028, "should-open"],
    "customOpen": [4, "custom-open"],
    "transitioning": [32],
    "isResize": [32],
    "openCount": [32],
    "closeItem": [64],
    "openItem": [64],
    "beforeOpenItem": [64]
  }, [[0, "contentChanged", "handleContentChanged"], [9, "resize", "handleResize"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-step", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-step":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcStep$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcStep = GcStep$1;
const defineCustomElement = defineCustomElement$1;

export { GcStep, defineCustomElement };
