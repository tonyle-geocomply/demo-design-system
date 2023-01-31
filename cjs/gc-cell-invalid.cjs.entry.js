'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-76b0c208.js');

const gcCellInvalidCss = ":host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:var(--gc-color-light-red)}";

const GcCellInvalid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The tooltip position
     */
    this.tooltipPosition = 'bottom';
  }
  render() {
    return (index.h("div", { class: "gc__cell-invalid" }, this.message ? (index.h("gc-dropdown", { trigger: "hover", positions: this.tooltipPosition }, index.h("gc-icon", { name: "fa-regular fa-circle-exclamation", size: "23px", color: "var(--gc-color-red)" }), index.h("div", { slot: "gc__dropdown-content", class: "menu", style: { padding: '16px' } }, index.h("div", null, this.message)))) : (index.h("gc-icon", { name: "fa-regular fa-square-info", size: "14px", color: "var(--gc-color-primary)" }))));
  }
};
GcCellInvalid.style = gcCellInvalidCss;

exports.gc_cell_invalid = GcCellInvalid;
