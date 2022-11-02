import { Component, Prop, State, Listen, Element, Event, h } from '@stencil/core';
import { copyClipboard } from '../../utils/utils';
const MAX_LONG_TEXT = 100;
export class GcTooltip {
  constructor() {
    /**
   * Is Long Text?
   */
    this.isLongText = false;
    /**
     * Is Toggle?
     */
    this.isToggle = false;
    /**
   * Right position
   */
    this.rightPos = '';
    /**
     * Top position
     */
    this.topPos = '';
    this.showTooltip = false;
    this.isCopied = false;
  }
  getIsCopyText() {
    if (this.isCopyText) {
      if (typeof this.isCopyText === 'string') {
        try {
          return JSON.parse(this.isCopyText);
        }
        catch (e) {
          return undefined;
        }
      }
      return this.isCopyText;
    }
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) {
        return;
      }
    }
    if (this.isCopied)
      return false;
    this.showTooltip = false;
    this.gcToggleTooltip.emit(this.showTooltip);
  }
  renderCutText() {
    const isCopyText = this.getIsCopyText();
    if (this.isLongText) {
      return this.content.length > MAX_LONG_TEXT ? this.content.slice(0, MAX_LONG_TEXT) + '...' : this.content;
    }
    if (isCopyText && this.content) {
      if (isCopyText.remainSuffix) {
        return this.content.length > +isCopyText.remainSuffix ? '...' + this.content.slice(-isCopyText.remainSuffix) : this.content;
      }
      if (isCopyText.remainPrefix) {
        return this.content.length > +isCopyText.remainPrefix ? this.content.slice(0, isCopyText.remainPrefix) + '...' : this.content;
      }
    }
    return this.content;
  }
  onToggleTooltip() {
    if (this.isCopied) {
      setTimeout(() => {
        this.isCopied = false;
      }, 500);
      return;
    }
    this.showTooltip = !this.showTooltip;
    this.gcToggleTooltip.emit(this.showTooltip);
  }
  render() {
    return (h("div", { onClick: () => this.onToggleTooltip(), style: { color: 'var(--gc-color-text-grey)', textDecoration: 'underline', cursor: 'pointer' }, class: { 'has-tooltip': true, 'active': this.isToggle ? this.showTooltip && this.isToggle : this.showTooltip } },
      this.renderCutText(),
      h("span", { class: "tooltip-wrapper" },
        h("div", { class: "tooltip", style: { right: this.rightPos || '35%', top: this.topPos || '1rem' } },
          this.content,
          this.getIsCopyText() && (h("div", { style: { marginTop: '8px' } },
            h("gc-button", { height: "29px", type: "primary", "onGc:click": () => copyClipboard(this.content, () => {
                this.isCopied = !this.isCopied;
              }) }, this.isCopied ? 'Copied' : this.getIsCopyText().text || 'Copy')))))));
  }
  static get is() { return "gc-tooltip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-tooltip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-tooltip.css"]
  }; }
  static get properties() { return {
    "isCopyText": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Is Copy Text?"
      },
      "attribute": "is-copy-text",
      "reflect": false
    },
    "isLongText": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Is Long Text?"
      },
      "attribute": "is-long-text",
      "reflect": false,
      "defaultValue": "false"
    },
    "content": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The content"
      },
      "attribute": "content",
      "reflect": false
    },
    "isToggle": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Is Toggle?"
      },
      "attribute": "is-toggle",
      "reflect": false,
      "defaultValue": "false"
    },
    "rightPos": {
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
        "text": "Right position"
      },
      "attribute": "right-pos",
      "reflect": false,
      "defaultValue": "''"
    },
    "topPos": {
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
        "text": "Top position"
      },
      "attribute": "top-pos",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "showTooltip": {},
    "isCopied": {}
  }; }
  static get events() { return [{
      "method": "gcToggleTooltip",
      "name": "gc:toggle-tooltip",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "elm"; }
  static get listeners() { return [{
      "name": "click",
      "method": "windowClick",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
