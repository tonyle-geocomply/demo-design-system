import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const GcSteps$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcStepChange = createEvent(this, "gc:step-change", 7);
    this.gcBeforeStepChange = createEvent(this, "gc:before-step-change", 7);
    this.activeStep = '';
    this.oldStep = '';
    this.customOpen = false;
  }
  openEventHandler(event) {
    const children = this.element.querySelectorAll('gc-step');
    const oldIndex = this.activeStep !== event.detail.index ? this.activeStep : this.oldStep;
    const newIndex = event.detail.index;
    const eventBefore = this.gcBeforeStepChange.emit({ index: newIndex, oldIndex });
    if (eventBefore.defaultPrevented) {
      return false;
    }
    this.gcStepChange.emit({ index: newIndex, oldIndex });
    children[event.detail.index].openItem();
    this.oldStep = oldIndex;
    this.activeStep = newIndex;
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
  componentWillLoad() {
    if (this.customOpen) {
      const children = this.element.querySelectorAll('gc-step');
      for (let i = 0; i < children.length; i++) {
        children[i].customOpen = true;
      }
    }
  }
  render() {
    const children = this.element.querySelectorAll('gc-step');
    return (h("div", { style: { paddingBottom: children && children[children.length - 1].index && children[children.length - 1].index == this.activeStep ? '30px' : '' } }, h("slot", null)));
  }
  get element() { return this; }
}, [6, "gc-steps", {
    "customOpen": [4, "custom-open"],
    "activeStep": [32],
    "oldStep": [32],
    "open": [64],
    "close": [64]
  }, [[0, "beforeOpenEvent", "openEventHandler"]]]);
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
