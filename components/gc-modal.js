import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const gcModalCss = ".sc-gc-modal-h{--z-index-modal:9999}.gc__modal-overlay.sc-gc-modal{z-index:var(--z-index-modal);opacity:0;visibility:hidden;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.42);-webkit-transition:opacity 0.5s, visibility 0s 0.5s;transition:opacity 0.5s, visibility 0s 0.5s;display:flex;align-items:center;justify-content:center}.is-visible.sc-gc-modal{opacity:1;visibility:visible;-webkit-transition:opacity 0.5s;transition:opacity 0.5s}.is-transparent.sc-gc-modal{opacity:0}.gc__modal-window.sc-gc-modal{background:white;border-radius:8px;width:488px;height:auto;min-height:100px;display:flex;align-items:center;justify-content:center}.gc__modal-window--content.sc-gc-modal{width:100%;height:100%}.gc__modal-heading.sc-gc-modal{min-height:70px;display:flex;align-items:center;justify-content:center}.gc__modal-body.sc-gc-modal{background:#F4F7FA;min-height:100px;align-items:center;justify-content:center;display:flex}.gc__modal-footer.sc-gc-modal{min-height:70px;display:flex;align-items:center;justify-content:flex-end;padding:4px 17px}";

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
  }
  onOpen(isOpen) {
    if (isOpen) {
      this.gcModalOpen.emit();
    }
  }
  render() {
    return (h("div", { class: 'gc__modal-overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '') }, h("div", { class: "gc__modal-window", style: { width: this.width } }, h("div", { class: "gc__modal-window--content" }, !this.isCustomContent && (h("div", { class: "gc__modal-heading" }, h("slot", { name: "heading" }))), !this.isCustomContent && (h("div", { class: "gc__modal-body" }, h("slot", { name: "content" }))), !this.isCustomContent && (h("div", { class: "gc__modal-footer" }, h("slot", { name: "footer" }))), this.isCustomContent && h("slot", null)))));
  }
  static get watchers() { return {
    "open": ["onOpen"]
  }; }
  static get style() { return gcModalCss; }
}, [6, "gc-modal", {
    "open": [4],
    "width": [1],
    "transparent": [4],
    "isCustomContent": [4, "is-custom-content"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcModal$1);
      }
      break;
  } });
}

const GcModal = GcModal$1;
const defineCustomElement = defineCustomElement$1;

export { GcModal, defineCustomElement };
