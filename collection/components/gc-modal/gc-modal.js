import { Component, Prop, Watch, Event, h } from '@stencil/core';
export class GcModal {
  constructor() {
    /**
     * Is open?
     */
    this.open = false;
    /**
    * Width of modal
    */
    this.width = '';
    /**
     * Is transparent?
     */
    this.transparent = false;
    /**
     * Is custom content?
     */
    this.isCustomContent = false;
    /**
     * Header Icon
     */
    this.headerIcon = '';
  }
  onOpen(isOpen) {
    if (isOpen) {
      this.gcModalOpen.emit();
    }
  }
  getHeaderIcon() {
    if (this.headerIcon) {
      try {
        return JSON.parse(this.headerIcon);
      }
      catch (e) {
        return this.headerIcon || '';
      }
    }
  }
  render() {
    const header = this.getHeaderIcon();
    return (h("div", { class: 'gc__modal-overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '') },
      h("div", { class: "gc__modal-window", style: { width: this.width } },
        h("div", { class: "gc__modal-window--content" },
          !this.isCustomContent && (h("div", { class: "gc__modal-heading" },
            header && h("span", { style: { color: (header === null || header === void 0 ? void 0 : header.color) || 'var(--gc-color-primary)' }, class: "fa-stack fa-2x" },
              h("gc-icon", { size: "62px", name: "fa fa-thin fa-circle fa-stack-1x" }),
              h("gc-icon", { size: "25px", name: `${(header === null || header === void 0 ? void 0 : header.name) || header} fa-stack-1x` })),
            h("slot", { name: "heading" }))),
          !this.isCustomContent && (h("div", { class: "gc__modal-body" },
            h("slot", { name: "content" }))),
          !this.isCustomContent && (h("div", { class: "gc__modal-footer" },
            h("slot", { name: "footer" }))),
          this.isCustomContent && h("slot", null)))));
  }
  static get is() { return "gc-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-modal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-modal.css"]
  }; }
  static get properties() { return {
    "open": {
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
        "text": "Is open?"
      },
      "attribute": "open",
      "reflect": false,
      "defaultValue": "false"
    },
    "width": {
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
        "text": "Width of modal"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "''"
    },
    "transparent": {
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
        "text": "Is transparent?"
      },
      "attribute": "transparent",
      "reflect": false,
      "defaultValue": "false"
    },
    "isCustomContent": {
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
        "text": "Is custom content?"
      },
      "attribute": "is-custom-content",
      "reflect": false,
      "defaultValue": "false"
    },
    "headerIcon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Header Icon"
      },
      "attribute": "header-icon",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get events() { return [{
      "method": "gcModalOpen",
      "name": "gc:modal-open",
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
  static get watchers() { return [{
      "propName": "open",
      "methodName": "onOpen"
    }]; }
}
