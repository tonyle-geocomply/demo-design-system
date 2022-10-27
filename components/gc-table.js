import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$d } from './gc-button2.js';
import { d as defineCustomElement$c } from './gc-checkbox2.js';
import { d as defineCustomElement$b } from './gc-drag-container2.js';
import { d as defineCustomElement$a } from './gc-draggable-item2.js';
import { d as defineCustomElement$9 } from './gc-dropdown2.js';
import { d as defineCustomElement$8 } from './gc-h22.js';
import { d as defineCustomElement$7 } from './gc-icon2.js';
import { d as defineCustomElement$6 } from './gc-link2.js';
import { d as defineCustomElement$5 } from './gc-menu2.js';
import { d as defineCustomElement$4 } from './gc-menu-item2.js';
import { d as defineCustomElement$3 } from './gc-pagination2.js';
import { d as defineCustomElement$2 } from './gc-spinner2.js';

const gcTableCss = ":host{display:block;height:100%;--table-border-color:var(--gc-color-second-grey);--z-index-table-header:12;--font-weight-table-header:600}.gc__table{height:100%;border:1px solid var(--table-border-color);font-size:12px}.gc__table .table-scroll-container{position:relative;overflow:auto;height:100%}.empty-table{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:24px;border:1px solid var(--gc-color-second-grey);background:var(--gc-color-contrast-white)}.empty-title{margin-bottom:14px}.gc__table.paginate .table-scroll-container{height:calc(100% - 2.4375rem)}.gc__table .table-scroll-container::-webkit-scrollbar{height:6px}.gc__table .table-scroll-container::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}.gc__table .table-scroll-container::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}.gc__table .pagination{display:flex;border-top:1px solid var(--table-border-color)}.gc__table .pagination .form-control{margin:0}.gc__table .pagination .select{margin:0;--input-border-radius:none;--input-border-style:none;border-left:1px solid var(--table-border-color);border-right:1px solid var(--table-border-color)}.gc__table .pagination .page-sizes-select{margin-inline-start:v(--spacing-3)}.gc__table .pagination .pagination-item-count{margin-inline-start:v(--spacing-4);flex:1;display:flex;align-items:center}.gc__row{display:flex;box-sizing:border-box;height:100%}.gc__row .columns-container{display:flex}.gc__row .gc__col{margin:0;box-sizing:border-box;vertical-align:middle;line-height:normal;border-right:1px solid var(--gc-color-second-grey);border-bottom:1px solid var(--gc-color-second-grey)}.gc__row .gc__col .col-content{display:flex;align-items:center;height:100%;justify-content:space-between}.gc__row .gc__col .col-content .col-text{padding:0 14px 0 14px;flex:1;display:block;display:-webkit-box;max-width:400px;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;word-break:break-word}.gc__row .gc__col .col-content .col-action{--button-border-radius:none}.gc__row .gc__col .col-content .col-action.has-focus{z-index:12}.gc__row .gc__col .col-content .checkbox{}.gc__row .gc__col.center .col-content{justify-content:center}.gc__row .gc__col:last-child{flex:1}.gc__row .fixed-columns{position:sticky;left:0;background:inherit}.header .fixed-columns{background:var(--gc-color-second-blue)}.gc__row .scrollable-columns{flex:1}.header{z-index:var(--z-index-table-header);font-weight:var(--font-weight-table-header);text-transform:uppercase;position:sticky;top:0;background:var(--gc-color-second-blue);color:var(--gc-color-contrast-white);height:50px;min-width:fit-content}.gc__table-body{min-width:fit-content}.header .left-panel{position:sticky;top:0;left:0}.header .gc__col{border-bottom:1px solid var(--table-border-color);cursor:pointer}.gc__table-body .gc__row{min-height:66px;height:auto}.gc__table-body>.gc__row:nth-child(even){background-color:var(--gc-color-contrast-grey)}.gc__table-body>.gc__row:nth-child(odd){background-color:var(--gc-color-contrast-white)}.gc__table-body>div.gc__row::nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-contrast-grey)}.gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-second-white)}.gc__table-body .gc__row .gc__col:focus{outline:none;z-index:1}.gc__table-body .left-panel{position:sticky;left:0}.table-footer{height:66px;background-color:var(--gc-color-contrast-white)}.table-footer .pagination{height:100%;padding:0 30px}.table-footer .pagination .pagination-right{display:flex;align-items:center}:host(.show-full-content) .gc__table-body .col-text{overflow:initial;white-space:initial;text-overflow:initial}.empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;}.gc__table-arrow{display:grid}gc-icon.disabled{opacity:0.5}gc-icon.down-arrow{margin-top:-4px}.gc__row .gc__col .col-content .col-actions{margin-right:14px}.col-center{text-align:center}.gc__table-setting{font-weight:600;display:flex;align-items:center;justify-content:space-between;background:var(--gc-color-contrast-white);padding:12px 30px 8px 30px;border-left:1px solid var(--gc-color-second-grey);border-right:1px solid var(--gc-color-second-grey)}.gc__table-setting .dropdown{min-width:473px}.gc__table-setting .gc__table-setting-cols-text{padding:14px 20px;display:flex;align-items:center;border-bottom:1px solid var(--gc-color-second-grey)}.gc__table-setting .gc__table-setting-cols-title{margin-left:12px}.gc__table-setting .gc__table-setting-cols{display:grid;grid-template-columns:1fr 1fr 1fr;padding:15px 20px;row-gap:14px}.gc__table-setting .gc__table-setting-col-item{display:flex;align-items:center}.gc__table-setting .gc__table-setting-col-item .sc-gc-checkbox-h{margin-bottom:0;margin-left:8px;line-height:13px;max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc__table-setting .gc__table-setting-col-item.disabled{cursor:not-allowed}.gc__table-setting label.gc__label.sc-gc-checkbox{color:var(--gc-color-strong-grey)}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(odd){background-color:inherit}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(even){background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .header,.gc__table-no-stripe .header .fixed-columns{background-color:inherit;color:var(--gc-color-text-grey)}.gc__table-no-border .gc__row .gc__col{border-right:0}.loading-section{position:absolute;right:0;left:0;top:50%}.gc__actions{margin-top:5px;display:flex}.gc__btn-action{margin-right:5px;display:none}.gc__btn-action.active{animation:fadeInShow 0.2s;display:block}@keyframes fadeInShow{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}";

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
    this.gcTableSettingChange = createEvent(this, "gc:table-setting-change", 7);
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
    this.gcId = 'gc-table';
    this.keyField = 'id';
    this.serverSide = false;
    this.sortable = true;
    this.sortOrder = '';
    this.paginate = true;
    this.page = 1;
    this.pageSize = 20;
    this.totalItems = 0;
    this.emptyState = {
      title: 'No items',
      description: 'There are no items to display',
    };
    this.settingColumns = false;
    this.isStripe = true;
    this.isBordered = true;
    this.settingTable = {};
    this.hoveredCell = {};
    this.isSelectAll = false;
    this.showingColumns = {};
    this.posColumns = {};
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
    this.onDrop = e => {
      const newValue = e.detail;
      const values = Object.values(newValue) && Object.values(newValue)[0];
      const swapCol = Object.keys(this.posColumns).find(key => this.posColumns[key] === values.position);
      let emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
        return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: idx } });
      }, {});
      const newPos = Object.keys(newValue).reduce((res, key) => {
        return Object.assign(Object.assign({}, res), { [key]: newValue[key].position });
      }, {});
      this.posColumns = Object.assign(Object.assign(Object.assign({}, this.posColumns), newPos), { [swapCol]: values.oldPos });
      emitValues = Object.assign(Object.assign(Object.assign({}, emitValues), newValue), { [swapCol]: { hidden: !this.showingColumns[swapCol], position: values.oldPos } });
      this.gcTableSettingChange.emit(emitValues);
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
      let showValue = false;
      if (this.settingTable && this.settingTable[col.name] && this.settingTable[col.name].hidden !== undefined) {
        showValue = this.settingTable[col.name].hidden ? false : true;
      }
      else {
        showValue = true;
      }
      res = Object.assign(Object.assign({}, res), { [col.name]: showValue });
      return res;
    }, {});
    this.posColumns = currentColumns.reduce((res, col, idx) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position - 1 : idx });
      return res;
    }, {});
  }
  watchSettingTablePropHandler(newSetting) {
    this.showingColumns = this.getColumns().reduce((res, col) => {
      let showValue = false;
      if (newSetting && newSetting[col.name] && newSetting[col.name].hidden !== undefined) {
        showValue = newSetting[col.name].hidden ? false : true;
      }
      else {
        showValue = true;
      }
      res = Object.assign(Object.assign({}, res), { [col.name]: showValue });
      return res;
    }, {});
    this.posColumns = this.getColumns().reduce((res, col, idx) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: newSetting && newSetting[col.name] ? newSetting[col.name].position : idx });
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
    const emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
      return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: idx } });
    }, {});
    this.gcTableSettingChange.emit(emitValues);
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
      fixedCols.push(h("div", { class: "gc__col center" }, h("div", { class: "col-content" })));
    }
    const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
    columnsWithPos.sort((a, b) => a.pos - b.pos);
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
    columnsWithPos.forEach(col => {
      if (this.showingColumns[col.name]) {
        let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}rem` : DEFAULT_CELL_WIDTH;
        if (col.width && countCurrentCol.length > 7)
          colWidth = col.width;
        const colEl = (h("div", { onClick: () => {
            if (!this.sortable || !col.sortable)
              return;
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
          }, class: { gc__col: true, sort: this.sortBy === col.name }, style: { width: colWidth, background: this.background } }, h("div", { class: "col-content" }, h("div", { class: "col-text" }, col.label), h("div", { class: "col-actions" }, (() => {
          if (!this.sortable || !col.sortable)
            return;
          return (h("div", { class: "gc__table-arrow" }, h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }), h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
        })()))));
        col.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      }
    });
    return (h("div", { class: "header" }, h("div", { class: "gc__row" }, h("div", { class: "fixed-columns columns-container" }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
  }
  renderBody() {
    const rows = [];
    let data = [...this.getData()];
    if (!this.serverSide) {
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
    data.forEach((row, idx) => {
      const fixedCols = [];
      const scrollCols = [];
      if (this.selectionType === 'checkbox')
        fixedCols.push(h("div", { class: { gc__col: true, center: true } }, h("div", { class: "col-content" })));
      const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
      columnsWithPos.forEach(column => {
        var _a, _b, _c;
        if (this.showingColumns[column.name]) {
          let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}rem` : DEFAULT_CELL_WIDTH;
          if (column.width && countCurrentCol.length > 7)
            colWidth = column.width;
          const conditionToDisplayActions = row.actions &&
            row.actions[column.name] &&
            column.actions &&
            column.actions.length > 0 &&
            ((_b = (_a = this.hoveredCell) === null || _a === void 0 ? void 0 : _a.column) === null || _b === void 0 ? void 0 : _b.name) === (column === null || column === void 0 ? void 0 : column.name) &&
            ((_c = this.hoveredCell) === null || _c === void 0 ? void 0 : _c.row) === row;
          const colEl = (h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
              width: colWidth,
              background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
            }, onMouseOver: () => this.onCellMouseOver(row, column), onClick: () => {
              const selection = window.getSelection();
              if (selection.type != 'Range')
                this.onCellClick(row, column);
            } }, h("div", { class: "col-content" }, h("div", { class: "col-text", innerHTML: row === null || row === void 0 ? void 0 : row[column.name] }, conditionToDisplayActions ? (h("div", { class: { gc__actions: true } }, column.actions.map(action => {
            const matchCondition = row.actions && row.actions[column.name] && row.actions[column.name].includes(action.key) ? true : false;
            return (h("gc-button", { class: `gc__btn-action ${matchCondition ? 'active' : ''}`, key: action.key, paddingText: "0 10px", height: "24px", href: action.onLink && row ? action.onLink(row) : null, disabled: action.disabled, target: action.target, "onGc:click": () => {
                if (action.onClick && row) {
                  action.onClick(row);
                }
              }, type: action.type }, action.name));
          }))) : null))));
          column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
        }
      });
      rows.push(h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
          background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
          border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
        } }, h("div", { class: "fixed-columns columns-container" }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
    });
    return h("div", { class: "gc__table-body" }, rows);
  }
  getTotalItems() {
    let totalItems = this.totalItems;
    if (this.paginate && !this.serverSide)
      totalItems = this.totalItems || this.getData().length;
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
      // if (isKeepAllColumns) {
      //   return this.columns;
      // }
      // if (this.settingTable) {
      //   let columnsWithPos = this.columns.map((col, i) => ({
      //     ...col,
      //     pos: (this.settingTable[col.name] && this.settingTable[col.name].position) || i,
      //   }));
      //   columnsWithPos.sort((a, b) => a.pos - b.pos);
      //   columnsWithPos = columnsWithPos.reduce((res, col) => {
      //     if (!this.settingTable[col.name] || (this.settingTable[col.name] && this.settingTable[col.name].hidden !== true)) {
      //       return [...res, col];
      //     }
      //     return [...res];
      //   }, []);
      //   return columnsWithPos;
      // }
      return this.columns;
    }
  }
  componentWillLoad() {
    this.showingColumns = this.getColumns().reduce((res, col) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] && this.settingTable[col.name].hidden ? false : true });
      return res;
    }, {});
    this.posColumns = this.getColumns().reduce((res, col, idx) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx });
      return res;
    }, {});
  }
  renderPagination() {
    let totalItems = this.getTotalItems();
    totalItems = totalItems ? totalItems.toLocaleString() : '';
    return (h("div", { class: "pagination" }, h("div", { class: "page-sizes-select" }), h("div", { class: "pagination-item-count" }, h("span", null, "Showing"), "\u00A0", this.pageSize * (this.page - 1) + 1, "\u00A0to\u00A0", this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(), "\u00A0of\u00A0", totalItems, "\u00A0", totalItems <= 1 ? 'entry' : 'entries'), h("div", { class: "pagination-right" }, h("div", { class: "table-footer-right-content" }, h("div", { class: "table-footer-right-content-pagination" }, h("gc-pagination", { activePage: this.page, total: this.getTotalItems(), pageSize: this.pageSize }))))));
  }
  renderSettingColumns() {
    if (this.settingColumns && this.getData().length > 0) {
      let totalItems = this.getTotalItems();
      totalItems = totalItems ? totalItems.toLocaleString() : '';
      const columnsWithPos = this.getColumns().map((col, idx) => (Object.assign(Object.assign({}, col), { pos: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const columns = columnsWithPos;
      return (h("div", { style: { background: this.background }, class: "gc__table-setting" }, h("slot", { name: "gc__table-setting-title" }, h("div", null, "Results: ", totalItems, " ", totalItems <= 1 ? 'entry' : 'entries', " found matching applied filters:")), h("div", null, h("gc-dropdown", { id: `dropdown_${this.gcId}` }, h("gc-link", { icon: "fa-solid fa-table-layout", color: "var(--gc-color-text-grey)" }, "Manage Table Columns"), h("div", { slot: "gc__dropdown-content", class: "dropdown" }, h("div", { class: "gc__table-setting-cols-text" }, h("gc-icon", { color: "red", name: "fa-regular fa-square-info" }), h("gc-h2", { class: "gc__table-setting-cols-title" }, "Manage Table Columns")), h("gc-drag-container", { "onGc:drop": this.onDrop, "class-container": "gc__table-setting-cols", "class-daggable": ".draggable-item", group: "table-setting-cols" }, columns.map(col => (h("gc-draggable-item", { "data-col-name": col.name, "data-col-check": `${this.showingColumns[col.name]}`, key: `${this.gcId}_${col.name}`, class: { 'draggable-item': !col.alwaysDisplay } }, h("div", { key: `${this.gcId}_${col.name}`, class: { 'gc__table-setting-col-item': true, 'disabled': col.alwaysDisplay } }, h("gc-icon", { color: "var(--gc-color-secondary-grey)", name: "fa-solid fa-grip-dots-vertical" }), h("gc-checkbox", { disabled: col.alwaysDisplay, "gc-name": `${this.gcId}_${col.name}`, label: col.label, checked: this.showingColumns[col.name], "onGc:change": e => this.onCheck(e, col.name) })))))))))));
    }
  }
  render() {
    if (this.isLoading) {
      return (h(Host, null, this.renderSettingColumns(), h("div", { class: { 'gc__table': true, 'sortable': this.sortable, 'paginate': this.paginate, 'gc__table-no-stripe': !this.isStripe, 'gc__table-no-border': !this.isBordered } }, h("div", { class: "table-scroll-container" }, this.renderHeader(), this.renderBody(), h("div", { class: "loading-section" }, h("gc-spinner", null))), this.paginate && (h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))));
    }
    return (h(Host, null, this.renderSettingColumns(), this.getData().length > 0 ? (h("div", { class: { 'gc__table': true, 'sortable': this.sortable, 'paginate': this.paginate, 'gc__table-no-stripe': !this.isStripe, 'gc__table-no-border': !this.isBordered } }, h("div", { class: "table-scroll-container" }, this.renderHeader(), this.renderBody()), this.paginate && (h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))) : (this.renderEmptyState())));
  }
  renderEmptyState() {
    return (h("div", { class: "empty-table" }, h("div", { class: "empty-title" }, h("gc-h2", null, "There is no records found matching applied filters")), h("gc-button", { onClick: () => this.onClearEmptyState(), type: "secondary", icon: "fa-regular fa-filter-slash" }, "Clear applied filters")));
  }
  get elm() { return this; }
  static get watchers() { return {
    "columns": ["watchColumnsPropHandler"],
    "settingTable": ["watchSettingTablePropHandler"]
  }; }
  static get style() { return gcTableCss; }
}, [1, "gc-table", {
    "columns": [1],
    "data": [1],
    "selectionType": [1, "selection-type"],
    "selectedRowKeys": [1040],
    "gcId": [1, "gc-id"],
    "keyField": [1, "key-field"],
    "serverSide": [4, "server-side"],
    "sortable": [4],
    "sortBy": [1025, "sort-by"],
    "sortOrder": [1025, "sort-order"],
    "paginate": [4],
    "page": [1026],
    "pageSize": [2, "page-size"],
    "totalItems": [1026, "total-items"],
    "emptyState": [1032, "empty-state"],
    "settingColumns": [4, "setting-columns"],
    "customRows": [1040],
    "customRowsBackground": [1, "custom-rows-background"],
    "customRowsBorder": [1, "custom-rows-border"],
    "isStripe": [4, "is-stripe"],
    "isBordered": [4, "is-bordered"],
    "background": [1],
    "isLoading": [4, "is-loading"],
    "settingTable": [8, "setting-table"],
    "hoveredCell": [32],
    "isSelectAll": [32],
    "showingColumns": [32],
    "posColumns": [32]
  }, [[0, "gc:change-page", "handleChangePage"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-table", "gc-button", "gc-checkbox", "gc-drag-container", "gc-draggable-item", "gc-dropdown", "gc-h2", "gc-icon", "gc-link", "gc-menu", "gc-menu-item", "gc-pagination", "gc-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTable$1);
      }
      break;
    case "gc-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "gc-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "gc-drag-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "gc-draggable-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "gc-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "gc-h2":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "gc-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-pagination":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcTable = GcTable$1;
const defineCustomElement = defineCustomElement$1;

export { GcTable, defineCustomElement };
