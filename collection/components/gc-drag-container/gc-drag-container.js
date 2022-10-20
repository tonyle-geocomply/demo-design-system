import { Component, Host, h, Prop, Event } from '@stencil/core';
import { Sortable, Swap } from 'sortablejs/modular/sortable.core.esm';
Sortable.mount(new Swap());
export class GcDragContainer {
  componentDidLoad() {
    Sortable.create(this.container, {
      animation: 150,
      group: this.group,
      swap: true,
      swapClass: 'ghost',
      draggable: this.classDaggable,
      onUpdate: evt => {
        var _a, _b, _c, _d;
        if (((_b = (_a = evt === null || evt === void 0 ? void 0 : evt.item) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.colCheck) && ((_d = (_c = evt === null || evt === void 0 ? void 0 : evt.item) === null || _c === void 0 ? void 0 : _c.dataset) === null || _d === void 0 ? void 0 : _d.colName)) {
          this.gcDrop.emit({
            [evt.item.dataset.colName]: {
              position: evt.newIndex,
              oldPos: evt.oldIndex,
              hidden: evt.item.dataset.colCheck === 'true' ? false : true,
            },
          });
        }
      },
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: this.classContainer, ref: el => (this.container = el) },
        h("slot", null))));
  }
  static get is() { return "gc-drag-container"; }
  static get encapsulation() { return "scoped"; }
  static get properties() { return {
    "classContainer": {
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
      "attribute": "class-container",
      "reflect": false
    },
    "classDaggable": {
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
      "attribute": "class-daggable",
      "reflect": false
    },
    "group": {
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
      "attribute": "group",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "gcDrop",
      "name": "gc:drop",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when having change in drag and drop"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
