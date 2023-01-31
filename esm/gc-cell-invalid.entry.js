import { r as registerInstance, h } from './index-f3c3d85b.js';

const gcCellInvalidCss = ":host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:var(--gc-color-light-red)}";

const GcCellInvalid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The tooltip position
     */
    this.tooltipPosition = 'bottom';
  }
  render() {
    return (h("div", { class: "gc__cell-invalid" }, this.message ? (h("gc-dropdown", { trigger: "hover", positions: this.tooltipPosition }, h("gc-icon", { name: "fa-regular fa-circle-exclamation", size: "23px", color: "var(--gc-color-red)" }), h("div", { slot: "gc__dropdown-content", class: "menu", style: { padding: '16px' } }, h("div", null, this.message)))) : (h("gc-icon", { name: "fa-regular fa-square-info", size: "14px", color: "var(--gc-color-primary)" }))));
  }
};
GcCellInvalid.style = gcCellInvalidCss;

export { GcCellInvalid as gc_cell_invalid };
