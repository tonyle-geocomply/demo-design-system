import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const gcSpinnerCss = ":host{--z-index-floating:9999999999;--background-color-behind:rgba(255,255,255, 0.5)}.gc__spinner{display:flex;align-items:center;justify-content:center}.gc__spinner-float{position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:var(--z-index-floating);overflow:hidden;background:var(--background-color-behind)}.gc__spinner-loading{display:inline-block}.gc__spinner-loading>svg{display:inline-block;width:49px;height:58px;animation:lds-circle 2s cubic-bezier(0, 0.2, 0.8, 1) infinite}@keyframes lds-circle{0%,100%{animation-timing-function:cubic-bezier(0.5, 0, 1, 0.5)}0%{transform:rotateY(0deg)}50%{transform:rotateY(0deg);animation-timing-function:cubic-bezier(0, 0.5, 0.5, 1)}100%{transform:rotateY(360deg)}}";

const GcSpinner$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
   * Is float above background
   */
    this.isFloat = false;
  }
  getClass() {
    return {
      'gc__spinner': true,
      'gc__spinner-float': this.isFloat,
    };
  }
  render() {
    return (h("div", { class: this.getClass() }, h("div", { class: "gc__spinner-loading" }, h("svg", { width: "20", height: "23", viewBox: "0 0 20 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#clip0_219_2389)" }, h("path", { d: "M19.6042 -9.53674e-07V9.49906C19.6042 15.684 16.2297 20.6158 9.80211 23C3.37455 20.6158 0 15.684 0 9.49906V-9.53674e-07H19.6042ZM17.7157 1.90039H1.88859V9.49906C1.88859 14.6727 4.53899 18.7562 9.80211 20.9801C15.0623 18.7562 17.7157 14.6727 17.7157 9.49906V1.90039ZM6.26829 6.18504V9.49906C6.26829 12.4516 7.27051 14.6348 9.80211 16.13C12.0528 14.7951 13.1361 12.9763 13.3765 10.5104H8.68983V8.52846H15.4389V9.49906C15.4389 13.3815 13.5909 16.4536 9.81371 18.3539C6.06549 16.4536 4.25802 13.3815 4.25802 9.49906V4.20301H15.4273V6.18504H6.26829Z", fill: "#0046FC" })), h("defs", null, h("clipPath", { id: "clip0_219_2389" }, h("rect", { width: "20", height: "23", fill: "white" })))))));
  }
  static get style() { return gcSpinnerCss; }
}, [1, "gc-spinner", {
    "isFloat": [4, "is-float"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-spinner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcSpinner$1);
      }
      break;
  } });
}

const GcSpinner = GcSpinner$1;
const defineCustomElement = defineCustomElement$1;

export { GcSpinner, defineCustomElement };
