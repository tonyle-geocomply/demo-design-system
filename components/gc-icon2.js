import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const GcIcon = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
     */
    this.size = 'md';
    this.color = '';
    this.fontWeight = '';
  }
  getSize() {
    let size;
    if (this.size === 'sm')
      size = '1rem';
    else if (!this.size || this.size === 'md')
      size = '1.25rem';
    else if (this.size === 'lg')
      size = '1.5rem';
    else if (this.size === 'xl')
      size = '1.75rem';
    else
      size = this.size;
    return size;
  }
  render() {
    return (h(Host, null, h("i", { class: this.name, style: { fontSize: this.getSize(), color: this.color, fontWeight: this.fontWeight } })));
  }
}, [0, "gc-icon", {
    "name": [513],
    "size": [513],
    "color": [513],
    "fontWeight": [513, "font-weight"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcIcon);
      }
      break;
  } });
}

export { GcIcon as G, defineCustomElement as d };
