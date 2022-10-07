import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$a } from './gc-button2.js';
import { d as defineCustomElement$9 } from './gc-checkbox2.js';
import { d as defineCustomElement$8 } from './gc-dropdown2.js';
import { d as defineCustomElement$7 } from './gc-h22.js';
import { d as defineCustomElement$6 } from './gc-icon2.js';
import { d as defineCustomElement$5 } from './gc-link2.js';
import { d as defineCustomElement$4 } from './gc-menu2.js';
import { d as defineCustomElement$3 } from './gc-menu-item2.js';
import { d as defineCustomElement$2 } from './gc-pagination2.js';

const gcTableCss = ":host{display:block;height:100%;min-height:20em;--table-border-color:var(--gc-color-second-grey);--z-index-table-header:12;--font-weight-table-header:600}.table{height:100%;border:1px solid var(--table-border-color);font-size:12px}.table .table-scroll-container{position:relative;overflow:auto;height:100%}.empty-table{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:18px;border:1px solid var(--gc-color-second-grey)}.table.paginate .table-scroll-container{height:calc(100% - 2.4375rem)}.table .pagination{display:flex;border-top:1px solid var(--table-border-color)}.table .pagination .form-control{margin:0}.table .pagination .select{margin:0;--input-border-radius:none;--input-border-style:none;border-left:1px solid var(--table-border-color);border-right:1px solid var(--table-border-color)}.table .pagination .page-sizes-select{margin-inline-start:v(--spacing-3)}.table .pagination .pagination-item-count{margin-inline-start:v(--spacing-4);flex:1;display:flex;align-items:center}.row{display:flex;box-sizing:border-box;height:100%}.row .columns-container{display:flex}.row .col{margin:0;box-sizing:border-box;vertical-align:middle;line-height:normal;border-right:1px solid var(--gc-color-second-grey);border-bottom:1px solid var(--gc-color-second-grey)}.row .col .col-content{display:flex;align-items:center;height:100%;justify-content:space-between}.row .col .col-content .col-text{padding:0 14px 0 14px;flex:1;display:block;display:-webkit-box;max-width:400px;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3}.row .col .col-content .col-action{--button-border-radius:none}.row .col .col-content .col-action.has-focus{z-index:12}.row .col .col-content .checkbox{}.row .col.center .col-content{justify-content:center}.row .col:last-child{flex:1}.row .fixed-columns{position:sticky;left:0;background:inherit}.header .fixed-columns{background:var(--gc-color-second-blue)}.row .scrollable-columns{flex:1}.header{z-index:var(--z-index-table-header);font-weight:var(--font-weight-table-header);text-transform:uppercase;position:sticky;top:0;background:var(--gc-color-second-blue);color:var(--gc-color-contrast-white);height:50px;min-width:fit-content}.body{min-width:fit-content}.header .left-panel{position:sticky;top:0;left:0}.header .col{border-bottom:1px solid var(--table-border-color);cursor:pointer}.body .row{height:66px}.body>.row:nth-child(even){background-color:var(--gc-color-contrast-grey)}.body>.row:nth-child(odd){background-color:var(--gc-color-contrast-white)}.body>div.row::nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-contrast-grey)}.body>div.row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-second-white)}.body .row .col:focus{outline:none;z-index:1}.body .left-panel{position:sticky;left:0}.table-footer{height:66px;background-color:var(--gc-color-contrast-white)}.table-footer .pagination{height:100%;padding:0 14px}.table-footer .pagination .pagination-right{display:flex;align-items:center}:host(.show-full-content) .body .col-text{overflow:initial;white-space:initial;text-overflow:initial}.empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;}.gc__table-arrow{display:grid}gc-icon.disabled{opacity:0.5}gc-icon.down-arrow{margin-top:-4px}.row .col .col-content .col-actions{margin-right:14px}.col-center{text-align:center}.gc__table-setting{font-weight:600;display:flex;align-items:center;justify-content:space-between;background:var(--gc-color-contrast-white);padding:12px 30px 8px 30px;border-left:1px solid var(--gc-color-second-grey);border-right:1px solid var(--gc-color-second-grey)}.gc__table-setting .dropdown{width:473px}.gc__table-setting .gc__table-setting-cols-text{padding:0 20px;display:flex;align-items:center;border-bottom:1px solid var(--gc-color-second-grey)}.gc__table-setting .gc__table-setting-cols-title{margin-left:12px}.gc__table-setting .gc__table-setting-cols{display:grid;grid-template-columns:1fr 1fr;padding:15px 20px;row-gap:9px}.gc__table-setting .gc__table-setting-col-item{display:flex}.gc__table-setting .gc__table-setting-col-item .sc-gc-checkbox-h{margin-bottom:0;margin-left:8px;line-height:13px}";

const DEFAULT_CELL_WIDTH = '16rem'; // in rem
const GcTable$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcCellClick = createEvent(this, "gc:table-cell-click", 7);
    this.gcSelectChange = createEvent(this, "gc:table-select-change", 7);
    this.gcSort = createEvent(this, "gc:sort", 7);
    this.gcChangePage = createEvent(this, "gc:change-page", 7);
    this.gcClearEmptyState = createEvent(this, "gc:clear-empty-state", 7);
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
    this.settingColumns = false;
    this.hoveredCell = {};
    this.isSelectAll = false;
    this.showingColumns = {};
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
  watchColumnsPropHandler(newValue) {
    let currentColumns = [];
    if (typeof newValue === 'string') {
      try {
        currentColumns = JSON.parse(newValue);
      }
      catch (e) {
        currentColumns = [];
      }
    }
    this.showingColumns = currentColumns.reduce((res, col) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: true });
      return res;
    }, {});
  }
  handleChangePage(ev) {
    this.page = ev.detail.value;
  }
  onSelectChange(selectedRowKeys) {
    this.selectedRowKeys = selectedRowKeys;
    this.gcSelectChange.emit({ value: this.selectedRowKeys, isSelectAll: this.isSelectAll });
  }
  onCellClick(row, col) {
    this.gcCellClick.emit({ record: row, column: col });
  }
  onCheck(e, name) {
    this.showingColumns = Object.assign(Object.assign({}, this.showingColumns), { [name]: e.detail.value });
  }
  onClearEmptyState() {
    if (this.gcClearEmptyState) {
      this.gcClearEmptyState.emit({});
    }
  }
  renderHeader() {
    const fixedCols = [];
    const scrollCols = [];
    if (this.selectionType === 'checkbox') {
      fixedCols.push(h("div", { class: "col center" }, h("div", { class: "col-content" })));
    }
    this.getColumns().forEach(col => {
      if (this.showingColumns[col.name]) {
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
          return (h("div", { class: "gc__table-arrow" }, h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "11px", "font-weight": "bold" }), h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "11px", "font-weight": "bold" })));
        })()))));
        col.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      }
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
        if (this.showingColumns[column.name]) {
          let colWidth = DEFAULT_CELL_WIDTH;
          if (column.width)
            colWidth = column.width;
          const colEl = (h("div", { tabindex: "1", class: { 'col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: { width: colWidth }, onMouseOver: () => this.onCellMouseOver(row, column), onClick: () => {
              const selection = window.getSelection();
              if (selection.type != 'Range')
                this.onCellClick(row, column);
            } }, h("div", { class: "col-content" }, h("div", { class: "col-text", title: row === null || row === void 0 ? void 0 : row[column.name], innerHTML: row === null || row === void 0 ? void 0 : row[column.name] }))));
          column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
        }
      });
      rows.push(h("div", { class: { 'row': true, 'row-hover': this.hoveredCell.row === row } }, h("div", { class: "fixed-columns columns-container" }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
    });
    return h("div", { class: "body" }, rows);
  }
  getTotalItems() {
    let totalItems = this.totalItems;
    if (this.paginate && !this.managed)
      totalItems = this.getData().length;
    return totalItems || this.getData().length;
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
  componentWillLoad() {
    this.showingColumns = this.getColumns().reduce((res, col) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: true });
      return res;
    }, {});
  }
  renderPagination() {
    if (this.paginate) {
      return (h("div", { class: "pagination" }, h("div", { class: "page-sizes-select" }), h("div", { class: "pagination-item-count" }, h("span", null, "Showing"), "\u00A0", this.pageSize * (this.page - 1) + 1, "\u00A0 to\u00A0", this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(), "\u00A0 of\u00A0", this.getTotalItems(), "\u00A0 entries"), h("div", { class: "pagination-right" }, h("div", { class: "table-footer-right-content" }, h("div", { class: "table-footer-right-content-pagination" }, h("gc-pagination", { total: this.getTotalItems(), pageSize: this.pageSize }))))));
    }
  }
  renderSettingColumns() {
    if (this.settingColumns && this.getData().length > 0) {
      const totalItems = this.getTotalItems();
      const columns = this.getColumns();
      return (h("div", { class: "gc__table-setting" }, h("div", null, "Results: ", totalItems, " entries found matching applied filters:"), h("div", null, h("gc-dropdown", { id: "dropdown" }, h("gc-link", { icon: "fa-solid fa-table-layout", color: "var(--gc-color-text-grey)" }, "Manage Table Columns"), h("div", { slot: "dropdown-content", class: "dropdown" }, h("div", { class: "gc__table-setting-cols-text" }, h("gc-icon", { color: "red", name: "fa-regular fa-square-info" }), h("gc-h2", { class: "gc__table-setting-cols-title" }, "Manage Table Columns")), h("div", { class: "gc__table-setting-cols" }, columns.map(col => (h("div", { class: "gc__table-setting-col-item" }, h("gc-icon", { color: "var(--gc-color-secondary-grey)", name: "fa-solid fa-grip-dots-vertical" }), h("gc-checkbox", { disabled: col.alwaysDisplay, "gc-name": col.name, label: col.label, checked: true, "onGc:change": e => this.onCheck(e, col.name) }))))))))));
    }
  }
  render() {
    return (h(Host, null, this.renderSettingColumns(), this.getData().length > 0 ? (h("div", { class: { table: true, sortable: this.sortable, paginate: this.paginate } }, h("div", { class: "table-scroll-container" }, this.renderHeader(), this.renderBody()), h("div", { class: "table-footer" }, this.renderPagination()))) : (this.renderEmptyState())));
  }
  renderEmptyState() {
    return (h("div", { class: "empty-table" }, h("gc-h2", null, "There is no records found matching applied filters"), h("gc-button", { onClick: () => this.onClearEmptyState(), type: "secondary", icon: "fa-regular fa-filter-slash" }, "Clear applied filters")));
  }
  get elm() { return this; }
  static get watchers() { return {
    "columns": ["watchColumnsPropHandler"]
  }; }
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
    "page": [1026],
    "pageSize": [2, "page-size"],
    "totalItems": [1032, "total-items"],
    "emptyState": [1032, "empty-state"],
    "settingColumns": [4, "setting-columns"],
    "hoveredCell": [32],
    "isSelectAll": [32],
    "showingColumns": [32]
  }, [[0, "gc:change-page", "handleChangePage"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-table", "gc-button", "gc-checkbox", "gc-dropdown", "gc-h2", "gc-icon", "gc-link", "gc-menu", "gc-menu-item", "gc-pagination"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTable$1);
      }
      break;
    case "gc-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "gc-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "gc-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "gc-h2":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "gc-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-menu-item":
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
