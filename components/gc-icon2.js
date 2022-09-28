import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcIconCss = ":host{display:inline-block}.icon{line-height:0;color:var(--gc-color-primary)}:host(.inherit) .icon{color:inherit}";

const GcIcon = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
     */
    this.size = 'md';
    this.color = '';
    this.svg = '';
  }
  async fetchSvg() {
    if (this.name) {
      let svgName = null;
      try {
        switch (this.name) {
          case 'caret-down':
            svgName = await import('./caret-down.js');
            break;
          case 'caret-up':
            svgName = await import('./caret-up.js');
            break;
          case 'search':
            svgName = await import('./search.js');
            break;
          case 'clear-search':
            svgName = await import('./clear-search.js');
            break;
          case 'table-setting':
            svgName = await import('./table-setting.js');
            break;
          case 'advanced-filter':
            svgName = await import('./advanced-filter.js');
            break;
          case 'anchor':
            svgName = await import('./anchor.js');
            break;
          case 'calendar':
            svgName = await import('./calendar.js');
            break;
          case 'money':
            svgName = await import('./money.js');
            break;
          case 'fraud':
            svgName = await import('./fraud.js');
            break;
          case 'right-arrow':
            svgName = await import('./right-arrow.js');
            break;
          case 'square-info':
            svgName = await import('./square-info.js');
            break;
          case 'user-group':
            svgName = await import('./user-group.js');
            break;
          case 'bell':
            svgName = await import('./bell.js');
            break;
          case 'home':
            svgName = await import('./home.js');
            break;
          case 'circle-question':
            svgName = await import('./circle-question.js');
            break;
          default:
            this.svg = '';
            break;
        }
        this.svg = svgName.default;
      }
      catch (e) {
        this.svg = '';
      }
    }
  }
  async componentWillLoad() {
    await this.fetchSvg();
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
    let icon = this.svg.replace(/width="([^"]+)"/, 'width="' + this.getSize() + '"').replace(/height="([^"]+)"/, 'height="' + this.getSize() + '"');
    if (this.color) {
      icon = icon.replace(/fill="([^"]+)"/g, 'fill="' + this.color + '"');
    }
    if (!this.svg) {
      return null;
    }
    return (h(Host, null, h("div", { innerHTML: icon, class: { icon: true } })));
  }
  static get style() { return gcIconCss; }
}, [1, "gc-icon", {
    "name": [513],
    "size": [513],
    "color": [513],
    "svg": [32]
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
