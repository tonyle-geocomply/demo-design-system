import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const gcProgressCss = ".progress{border-radius:16px;font-size:10px;color:#000!important;background-color:#f1f1f1!important;height:11px;margin-top:10px;animation:progress-bar-stripes 2s linear infinite}.bar{color:#fff!important;background-color:var(--gc-color-primary);border-radius:16px;font-size:10px;height:11px}.progress-text{margin-left:16px}";

const GcProgress = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "progress", style: { width: this.width } }, h("div", { class: "bar", style: { width: `${this.percent}%` } }, h("span", { class: "progress-text" }, this.percent, "%"))));
  }
  static get style() { return gcProgressCss; }
}, [1, "gc-progress", {
    "percent": [2],
    "width": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-progress":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcProgress);
      }
      break;
  } });
}

export { GcProgress as G, defineCustomElement as d };
