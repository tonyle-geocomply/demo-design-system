import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcTabsListCss = ".tabs-list.sc-gc-tabs-list{display:flex;position:relative}.tabs-list slot.sc-gc-tabs-list-s>button{display:block;margin:0;--button-border-width:0.125rem;--button-border-radius:0}.tabs-list.sc-gc-tabs-list .tabs-container.sc-gc-tabs-list{z-index:1;width:100%;display:flex}";

const GcTabsList$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.variant = 'line';
    this.managed = false;
  }
  tabClick(evt) {
    if (!this.managed) {
      this.deselectAllTabs();
      evt.target.selected = true;
    }
  }
  deselectAllTabs() {
    var _a;
    const tabs = (_a = this.elm) === null || _a === void 0 ? void 0 : _a.querySelectorAll('gc-tab');
    tabs.forEach(tab => {
      tab.selected = false;
    });
  }
  render() {
    return (h(Host, null, h("div", { class: { 'tabs-list': true, [`variant-${this.variant}`]: true } }, h("div", { class: "tabs-container" }, h("slot", null)))));
  }
  get elm() { return this; }
  static get style() { return gcTabsListCss; }
}, [6, "gc-tabs-list", {
    "variant": [1],
    "managed": [4]
  }, [[0, "gc:tab-click", "tabClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-tabs-list"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-tabs-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTabsList$1);
      }
      break;
  } });
}

const GcTabsList = GcTabsList$1;
const defineCustomElement = defineCustomElement$1;

export { GcTabsList, defineCustomElement };
