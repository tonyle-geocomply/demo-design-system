import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './gc-icon2.js';
import { d as defineCustomElement$2 } from './gc-pagination2.js';

const gcTableCss = ":host{display:block;height:100%;min-height:20em;--table-border-color:#DAE1E8;--z-index-table-header:12}.table{height:100%;border:1px solid var(--table-border-color);font-size:12px}.table .table-scroll-container{position:relative;overflow:auto;height:100%}.table .empty-table{height:80%;display:flex;align-items:center;justify-content:center}.table.paginate .table-scroll-container{height:calc(100% - 2.4375rem)}.table .pagination{display:flex;border-top:1px solid var(--table-border-color)}.table .pagination .form-control{margin:0}.table .pagination .select{margin:0;--input-border-radius:none;--input-border-style:none;border-left:1px solid var(--table-border-color);border-right:1px solid var(--table-border-color)}.table .pagination .page-sizes-select{margin-inline-start:v(--spacing-3)}.table .pagination .pagination-item-count{margin-inline-start:v(--spacing-4);flex:1;display:flex;align-items:center}.row{display:flex;box-sizing:border-box;height:100%}.row .columns-container{display:flex}.row .col{margin:0;box-sizing:border-box;vertical-align:middle;line-height:normal;border-right:1px solid #DAE1E8;border-bottom:1px solid #DAE1E8}.row .col .col-content{display:flex;align-items:center;height:100%}.row .col .col-content .col-text{padding:0 14px 0 14px;flex:1;display:block;display:-webkit-box;max-width:400px;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3}.row .col .col-content .col-action{--button-border-radius:none}.row .col .col-content .col-action.has-focus{z-index:12}.row .col .col-content .checkbox{}.row .col.center .col-content{justify-content:center}.row .col:last-child{flex:1}.row .fixed-columns{position:sticky;left:0}.body .row:nth-child(odd) .fixed-columns{background-color:#FFFEFF}.body .row:nth-child(even) .fixed-columns{background-color:#F4F7FA}.header .fixed-columns{background:#397FF7}.row .scrollable-columns{flex:1}.header{z-index:var(--z-index-table-header);font-weight:bold;text-transform:uppercase;position:sticky;top:0;background:#397FF7;color:white;height:50px;min-width:fit-content}.body{min-width:fit-content}.header .left-panel{position:sticky;top:0;left:0}.header .col{border-bottom:1px solid var(--table-border-color);cursor:pointer}.body .row{height:66px}.body .row:nth-child(even){background-color:#F4F7FA}.body .row:nth-child(odd){background-color:#FFFEFF}.body>div>div.fixed-columns.columns-container>div:nth-child(even)>div{background-color:#F4F7FA}.body>div>div.fixed-columns.columns-container>div:nth-child(odd)>div{background-color:#FFFEFF}.body .row:hover{}.body .row:hover .col{}.body .row .col{}.body .row .col:focus{outline:none;z-index:1}.body .left-panel{position:sticky;left:0}.table-footer{height:66px}.table-footer .pagination{height:100%;padding:0 14px}.table-footer .pagination .pagination-right{display:flex;align-items:center}:host(.show-full-content) .body .col-text{overflow:initial;white-space:initial;text-overflow:initial}.empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;}.gc__table-arrow{display:grid}gc-icon.disabled{opacity:0.5}gc-icon.down-arrow{margin-top:4px}.row .col .col-content .col-actions{margin-right:14px}.col-center{text-align:center}";

const DEFAULT_CELL_WIDTH = '16rem'; // in rem
const GcTable$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcCellClick = createEvent(this, "gc:table-cell-click", 7);
    this.gcSelectChange = createEvent(this, "gc:table-select-change", 7);
    this.gcSort = createEvent(this, "gc:sort", 7);
    this.gcPage = createEvent(this, "gc:page", 7);
    /**
     * Grid columns configuration.
     * [
     * {
     *   "name":"name",
     *   "label":"Name",
     *   "width":300,
     *   "fixed":true
     *  },
     * {
     *   "name":"age",
     *   "label":"Age"
     * }
     * ]
     */
    this.columns = [];
    /**
     * Grid data to display on table
     * [{
     *  'id': '5e7118ddce4b3d577956457f',
     *  'age': 21,
     *  'name': 'John',
     *  'company': 'India',
     *  'email': 'john@example.com',
     *  'phone': '+1 (839) 560-3581',
     *  'address': '326 Irving Street, Grimsley, Texas, 4048'
     *  }]
     */
    this.data = [];
    this.selectedRowKeys = [];
    this.keyField = 'id';
    this.managed = false;
    this.sortable = true;
    this.sortOrder = '';
    this.paginate = true;
    this.page = 1;
    this.pageSize = 20;
    this.emptyState = {
      title: 'No items',
      description: 'There are no items to display',
    };
    this.hoveredCell = {};
    this.isSelectAll = false;
    this.onSelectAllClick = () => {
      let selectedRowKeys = [];
      this.isSelectAll = !this.isSelectAll;
      if (this.isSelectAll)
        selectedRowKeys = this.getData().map(row => row[this.keyField]);
      this.onSelectChange(selectedRowKeys);
    };
    this.onRowSelectClick = row => {
      let selectedRowKeys = [...this.selectedRowKeys];
      if (selectedRowKeys.includes(row[this.keyField])) {
        this.isSelectAll = false;
        selectedRowKeys = selectedRowKeys.filter(rowId => rowId !== row[this.keyField]);
      }
      else {
        selectedRowKeys.push(row[this.keyField]);
      }
      this.onSelectChange(selectedRowKeys);
    };
    this.onCellMouseOver = (row, column) => {
      this.hoveredCell = { row, column };
    };
  }
  onSelectChange(selectedRowKeys) {
    this.selectedRowKeys = selectedRowKeys;
    this.gcSelectChange.emit({ value: this.selectedRowKeys, isSelectAll: this.isSelectAll });
  }
  onCellClick(row, col) {
    this.gcCellClick.emit({ record: row, column: col });
  }
  renderHeader() {
    const fixedCols = [];
    const scrollCols = [];
    if (this.selectionType === 'checkbox') {
      fixedCols.push(h("div", { class: "col center" }, h("div", { class: "col-content" })));
    }
    this.getColumns().forEach(col => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = col.width;
      const colEl = (h("div", { onClick: () => {
          if (this.sortBy === col.name) {
            if (this.sortOrder === 'asc')
              this.sortOrder = 'desc';
            else {
              this.sortBy = null;
            }
          }
          else {
            this.sortBy = col.name;
            this.sortOrder = 'asc';
          }
          this.gcSort.emit({ sortBy: this.sortBy, sortOrder: this.sortOrder });
        }, class: { col: true, sort: this.sortBy === col.name }, style: { width: colWidth } }, h("div", { class: "col-content" }, h("div", { class: "col-text" }, col.label), h("div", { class: "col-actions" }, (() => {
        if (!this.sortable)
          return;
        return (h("div", { class: "gc__table-arrow" }, h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "10px" }), h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "10px" })));
      })()))));
      col.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
    });
    return (h("div", { class: "header" }, h("div", { class: "row" }, h("div", { class: "fixed-columns columns-container" }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
  }
  renderBody() {
    const rows = [];
    let data = [...this.getData()];
    if (!this.managed) {
      if (this.sortable && this.sortBy) {
        data = data.sort((a, b) => {
          if (a[this.sortBy] < b[this.sortBy])
            return this.sortOrder === 'asc' ? -1 : 1;
          if (a[this.sortBy] > b[this.sortBy])
            return this.sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
      }
      if (this.paginate) {
        data = data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
      }
    }
    data.forEach(row => {
      const fixedCols = [];
      const scrollCols = [];
      if (this.selectionType === 'checkbox')
        fixedCols.push(h("div", { class: { col: true, center: true } }, h("div", { class: "col-content" })));
      this.getColumns().forEach(column => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (column.width)
          colWidth = column.width;
        const colEl = (h("div", { tabindex: "1", class: { 'col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: { width: colWidth }, onMouseOver: () => this.onCellMouseOver(row, column), onClick: () => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, column);
          } }, h("div", { class: "col-content" }, h("div", { class: "col-text", title: row === null || row === void 0 ? void 0 : row[column.name], innerHTML: row === null || row === void 0 ? void 0 : row[column.name] }))));
        column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      });
      rows.push(h("div", { class: { 'row': true, 'row-hover': this.hoveredCell.row === row } }, h("div", { class: "fixed-columns columns-container" }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
    });
    return h("div", { class: "body" }, rows);
  }
  getTotalItems() {
    let totalItems = this.totalItems;
    if (this.paginate && !this.managed)
      totalItems = this.getData().length;
    return totalItems;
  }
  getData() {
    if (this.data) {
      if (typeof this.data === 'string') {
        try {
          return JSON.parse(this.data);
        }
        catch (e) {
          return [];
        }
      }
      return this.data;
    }
  }
  getColumns() {
    if (this.columns) {
      if (typeof this.columns === 'string') {
        try {
          return JSON.parse(this.columns);
        }
        catch (e) {
          return [];
        }
      }
      return this.columns;
    }
  }
  renderPagination() {
    if (this.paginate)
      return (h("div", { class: "pagination" }, h("div", { class: "page-sizes-select" }), h("div", { class: "pagination-item-count" }, h("span", null, "Showing"), "\u00A0", this.pageSize * (this.page - 1) + 1, "\u00A0 to\u00A0", this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(), "\u00A0 of\u00A0", this.getTotalItems(), "\u00A0 entries"), h("div", { class: "pagination-right" }, h("div", { class: "table-footer-right-content" }, h("div", { class: "table-footer-right-content-pagination" }, h("gc-pagination", null))))));
  }
  render() {
    return (h(Host, null, h("div", { class: { table: true, sortable: this.sortable, paginate: this.paginate } }, h("div", { class: "table-scroll-container" }, this.renderHeader(), this.getData().length ? this.renderBody() : this.renderEmptyState()), h("div", { class: "table-footer" }, this.renderPagination()))));
  }
  renderEmptyState() {
    return h("div", { class: "empty-table" });
  }
  get elm() { return this; }
  static get style() { return gcTableCss; }
}, [1, "gc-table", {
    "columns": [1],
    "data": [1],
    "selectionType": [1, "selection-type"],
    "selectedRowKeys": [1040],
    "keyField": [1, "key-field"],
    "managed": [4],
    "sortable": [4],
    "sortBy": [1025, "sort-by"],
    "sortOrder": [1025, "sort-order"],
    "paginate": [4],
    "page": [2],
    "pageSize": [2, "page-size"],
    "totalItems": [1032, "total-items"],
    "emptyState": [1032, "empty-state"],
    "hoveredCell": [32],
    "isSelectAll": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-table", "gc-icon", "gc-pagination"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTable$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-pagination":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcTable = GcTable$1;
const defineCustomElement = defineCustomElement$1;

export { GcTable, defineCustomElement };
