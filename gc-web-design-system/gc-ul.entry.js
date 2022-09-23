import { r as registerInstance, h } from './index-592ba462.js';

const GcUl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ul", { class: "gc-ul" }, h("slot", null)));
  }
};

export { GcUl as gc_ul };
