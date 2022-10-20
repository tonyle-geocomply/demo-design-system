import { Component, Host, h } from '@stencil/core';
export class GcDraggableItem {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "gc-draggable-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["gc-draggable-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-draggable-item.css"]
  }; }
}
