import { Component, Host, h, Prop, Element, State } from '@stencil/core';
export class GcTagGroup {
  constructor() {
    this.maxWidth = '';
    this.headingText = '';
    this.isToggle = false;
    this.widthOfBlock = '';
  }
  handleToggle() {
    this.isToggle = !this.isToggle;
  }
  componentDidLoad() {
    const keepTagsBlocks = document.getElementsByClassName('gc__keep-tags');
    this.widthOfBlock = keepTagsBlocks[0].clientWidth + 'px';
  }
  render() {
    const text = this.isToggle ? 'Hide' : 'Show more';
    return (h(Host, null,
      h("div", { class: "gc__keep-tags" },
        h("slot", { name: "keep-tags" })),
      h("gc-dropdown", null,
        h("div", { onClick: () => this.handleToggle(), class: "show-more-text", style: { width: this.widthOfBlock } }, text),
        h("div", { slot: "gc__dropdown-content" },
          this.headingText && h("div", { class: "gc__dropdown-heading" }, this.headingText),
          h("div", { class: "gc__dropdown-block", style: { maxWidth: this.maxWidth } },
            h("slot", null))))));
  }
  static get is() { return "gc-tag-group"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-tag-group.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-tag-group.css"]
  }; }
  static get properties() { return {
    "maxWidth": {
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
      "attribute": "max-width",
      "reflect": false,
      "defaultValue": "''"
    },
    "headingText": {
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
      "attribute": "heading-text",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "isToggle": {},
    "widthOfBlock": {}
  }; }
  static get elementRef() { return "element"; }
}
