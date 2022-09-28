import { Component, h, Host, Prop, State } from '@stencil/core';
export class GcIcon {
  constructor() {
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
            svgName = await import('../assets/caret-down.svg');
            break;
          case 'caret-up':
            svgName = await import('../assets/caret-up.svg');
            break;
          case 'search':
            svgName = await import('../assets/search.svg');
            break;
          case 'clear-search':
            svgName = await import('../assets/clear-search.svg');
            break;
          case 'table-setting':
            svgName = await import('../assets/table-setting.svg');
            break;
          case 'advanced-filter':
            svgName = await import('../assets/advanced-filter.svg');
            break;
          case 'anchor':
            svgName = await import('../assets/anchor.svg');
            break;
          case 'calendar':
            svgName = await import('../assets/calendar.svg');
            break;
          case 'money':
            svgName = await import('../assets/money.svg');
            break;
          case 'fraud':
            svgName = await import('../assets/fraud.svg');
            break;
          case 'right-arrow':
            svgName = await import('../assets/right-arrow.svg');
            break;
          case 'square-info':
            svgName = await import('../assets/square-info.svg');
            break;
          case 'user-group':
            svgName = await import('../assets/user-group.svg');
            break;
          case 'bell':
            svgName = await import('../assets/bell.svg');
            break;
          case 'home':
            svgName = await import('../assets/home.svg');
            break;
          case 'circle-question':
            svgName = await import('../assets/circle-question.svg');
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
    return (h(Host, null,
      h("div", { innerHTML: icon, class: { icon: true } })));
  }
  static get is() { return "gc-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-icon.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": true
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md' | 'lg' | 'xl' | string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The Icon size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`, `\"xl\"` and size in pixel. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "'md'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "svg": {}
  }; }
}
