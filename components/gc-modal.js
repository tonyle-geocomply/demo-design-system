import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gc-icon2.js';

const gcModalCss = ".sc-gc-modal-h{--z-index-modal:9999}.gc__modal-overlay.sc-gc-modal{z-index:var(--z-index-modal);opacity:0;visibility:hidden;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.42);-webkit-transition:opacity 0.5s, visibility 0s 0.5s;transition:opacity 0.5s, visibility 0s 0.5s;display:flex;align-items:center;justify-content:center}.is-visible.sc-gc-modal{opacity:1;visibility:visible;-webkit-transition:opacity 0.5s;transition:opacity 0.5s}.is-transparent.sc-gc-modal{opacity:0}.gc__modal-window.sc-gc-modal{background:white;border-radius:8px;width:488px;height:auto;min-height:100px;display:flex;align-items:center;justify-content:center}.gc__modal-window--content.sc-gc-modal{width:100%;height:100%}.gc__modal-heading.sc-gc-modal{display:flex;align-items:center;justify-content:center;margin-top:28px}.gc__modal-body.sc-gc-modal{background:white;align-items:center;justify-content:center;display:flex;margin-top:12px}.gc__modal-footer.sc-gc-modal{display:flex;align-items:center;justify-content:center;padding:4px 17px;margin-top:40px;margin-bottom:29px}";

const GcModal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcModalOpen = createEvent(this, "gc:modal-open", 7);
    /**
     * Is open?
     */
    this.open = false;
    /**
    * Width of modal
    */
    this.width = '';
    /**
     * Is transparent?
     */
    this.transparent = false;
    /**
     * Is custom content?
     */
    this.isCustomContent = false;
    /**
     * Header Icon
     */
    this.headerIcon = '';
  }
  onOpen(isOpen) {
    if (isOpen) {
      this.gcModalOpen.emit();
    }
  }
  getHeaderIcon() {
    if (this.headerIcon) {
      try {
        return JSON.parse(this.headerIcon);
      }
      catch (e) {
        return this.headerIcon || '';
      }
    }
  }
  render() {
    const header = this.getHeaderIcon();
    return (h("div", { class: 'gc__modal-overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '') }, h("div", { class: "gc__modal-window", style: { width: this.width } }, h("div", { class: "gc__modal-window--content" }, !this.isCustomContent && (h("div", { class: "gc__modal-heading" }, header && h("span", { style: { color: (header === null || header === void 0 ? void 0 : header.color) || 'var(--gc-color-primary)' }, class: "fa-stack fa-2x" }, h("gc-icon", { size: "62px", name: "fa fa-thin fa-circle fa-stack-1x" }), h("gc-icon", { size: "25px", name: `${(header === null || header === void 0 ? void 0 : header.name) || header} fa-stack-1x` })), h("slot", { name: "heading" }))), !this.isCustomContent && (h("div", { class: "gc__modal-body" }, h("slot", { name: "content" }))), !this.isCustomContent && (h("div", { class: "gc__modal-footer" }, h("slot", { name: "footer" }))), this.isCustomContent && h("slot", null)))));
  }
  static get watchers() { return {
    "open": ["onOpen"]
  }; }
  static get style() { return gcModalCss; }
}, [6, "gc-modal", {
    "open": [4],
    "width": [1],
    "transparent": [4],
    "isCustomContent": [4, "is-custom-content"],
    "headerIcon": [1, "header-icon"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-modal", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcModal$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcModal = GcModal$1;
const defineCustomElement = defineCustomElement$1;

export { GcModal, defineCustomElement };
