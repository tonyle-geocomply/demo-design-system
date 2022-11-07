import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcTabPanelCss = ".sc-gc-tab-panel-h{display:none}[active].sc-gc-tab-panel-h{display:block;margin-top:8px}";

const GcTabPanel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.active = false;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return gcTabPanelCss; }
}, [6, "gc-tab-panel", {
    "value": [513],
    "active": [516]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-tab-panel"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-tab-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTabPanel$1);
      }
      break;
  } });
}

const GcTabPanel = GcTabPanel$1;
const defineCustomElement = defineCustomElement$1;

export { GcTabPanel, defineCustomElement };
