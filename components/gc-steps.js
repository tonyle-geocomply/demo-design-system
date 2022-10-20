import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const GcSteps$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  openEventHandler(event) {
    const children = this.element.querySelectorAll('gc-step');
    for (let i = 0; i < children.length; i++) {
      if (event.detail.index != i) {
        children[i].closeItem();
      }
    }
  }
  /**
   * Open an step item
   * @param index
   */
  async open(index) {
    this.getStepItem(index).openItem();
  }
  /**
   * close an step item
   * @param index
   */
  async close(index) {
    this.getStepItem(index).closeItem();
  }
  getStepItem(index) {
    const children = this.element.querySelectorAll('gc-step');
    if (index >= 0 && index < children.length) {
      return children[index];
    }
    else {
      throw new Error('index out of bounds');
    }
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get element() { return this; }
}, [6, "gc-steps", {
    "open": [64],
    "close": [64]
  }, [[0, "openEvent", "openEventHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-steps"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-steps":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcSteps$1);
      }
      break;
  } });
}

const GcSteps = GcSteps$1;
const defineCustomElement = defineCustomElement$1;

export { GcSteps, defineCustomElement };
