import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$f } from './gc-button2.js';
import { d as defineCustomElement$e } from './gc-cell-expandable2.js';
import { d as defineCustomElement$d } from './gc-checkbox2.js';
import { d as defineCustomElement$c } from './gc-drag-container2.js';
import { d as defineCustomElement$b } from './gc-draggable-item2.js';
import { d as defineCustomElement$a } from './gc-dropdown2.js';
import { d as defineCustomElement$9 } from './gc-h22.js';
import { d as defineCustomElement$8 } from './gc-icon2.js';
import { d as defineCustomElement$7 } from './gc-link2.js';
import { d as defineCustomElement$6 } from './gc-menu2.js';
import { d as defineCustomElement$5 } from './gc-menu-item2.js';
import { d as defineCustomElement$4 } from './gc-pagination2.js';
import { d as defineCustomElement$3 } from './gc-spinner2.js';
import { d as defineCustomElement$2 } from './gc-tooltip2.js';

const gcTableCss = ":host{display:block;height:100%;--table-border-color:var(--gc-color-second-grey);--z-index-table-header:12;--z-index-fixed-col:13;--font-weight-table-header:600}.is-loading{position:relative}.gc__table{height:100%;border:1px solid var(--table-border-color);font-size:12px}.gc__table-loading{opacity:0.3}.gc__table .table-scroll-container{position:relative;overflow:auto;height:100%}.empty-table{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:24px;border:1px solid var(--gc-color-second-grey);background:var(--gc-color-contrast-white)}.empty-child-table{display:flex;align-items:baseline;justify-content:center;flex-direction:column;padding:24px;border:1px solid var(--gc-color-second-grey);background:var(--gc-color-contrast-white)}.empty-table-no-bordered{border:none}.empty-title{margin-bottom:14px}.gc__table.paginate .table-scroll-container{height:calc(100% - 2.4375rem)}.gc__table .table-scroll-container::-webkit-scrollbar{width:6px;height:6px}.gc__table .table-scroll-container::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}.gc__table .table-scroll-container::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}.gc__table .pagination{display:flex;border-top:1px solid var(--table-border-color)}.gc__table .pagination .form-control{margin:0}.gc__table .pagination .select{margin:0;--input-border-radius:none;--input-border-style:none;border-left:1px solid var(--table-border-color);border-right:1px solid var(--table-border-color)}.gc__table .pagination .page-sizes-select{margin-inline-start:v(--spacing-3)}.gc__table .pagination .pagination-item-count{margin-inline-start:v(--spacing-4);flex:1;display:flex;align-items:center}.gc__row{display:flex;box-sizing:border-box;height:100%}.gc__row .columns-container{display:flex}.gc__row .gc__col{margin:0;box-sizing:border-box;vertical-align:middle;line-height:normal;border-right:1px solid var(--gc-color-second-grey);border-bottom:1px solid var(--gc-color-second-grey)}.gc__row .gc__col .col-content{display:flex;align-items:center;height:100%;justify-content:space-between}.gc__row .gc__col .col-content .col-text{padding:0 14px 0 14px;flex:1;display:block;word-break:break-word}.header .gc__row .gc__col .col-content .col-text{word-break:inherit}.gc__row .gc__col .col-content .col-action{--button-border-radius:none}.gc__row .gc__col .col-content .col-action.has-focus{z-index:12}.gc__row .gc__col.center .col-content{justify-content:center}.gc__row .gc__col:last-child{flex:1}.gc__row .fixed-columns{position:sticky;left:0;background:inherit}.gc__row .fixed-right-columns{position:sticky;right:0;background:inherit}.header .fixed-columns{background:var(--gc-color-second-blue);z-index:var(--z-index-fixed-col)}.gc__row .scrollable-columns{flex:1}.header{z-index:var(--z-index-table-header);font-weight:var(--font-weight-table-header);text-transform:uppercase;position:sticky;top:0;background:var(--gc-color-second-blue);color:var(--gc-color-contrast-white);height:50px;min-width:fit-content}.header-with-expandable{z-index:var(--z-index-table-header);font-weight:var(--font-weight-table-header);text-transform:uppercase;position:sticky;top:0;background:var(--gc-color-second-blue);color:var(--gc-color-contrast-white);opacity:0;min-width:fit-content;transition:opacity 2s linear;height:0px;transform:translateY(-50px)}.header-with-expandable.transition{opacity:1;height:50px;transform:translateY(0px)}.gc__table-body{min-width:fit-content}.header .left-panel{position:sticky;top:0;left:0}.header .gc__col{border-bottom:1px solid var(--table-border-color)}.header .gc__col.sort{cursor:pointer}.gc__table-body .gc__row{min-height:66px;height:auto}.gc__table-body>.gc__row:nth-child(even){background-color:var(--gc-color-contrast-grey)}.gc__table-body>.gc__row:nth-child(odd){background-color:var(--gc-color-contrast-white)}.gc__table-body>div.gc__row::nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-contrast-grey)}.gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-second-white)}.gc__table-body .gc__row .gc__col:focus{outline:none;z-index:1}.gc__table-body .left-panel{position:sticky;left:0}.table-footer{height:66px;background-color:var(--gc-color-contrast-white)}.table-footer .pagination{height:100%;padding:0 30px}.table-footer .pagination .pagination-right{display:flex;align-items:center}:host(.show-full-content) .gc__table-body .col-text{overflow:initial;white-space:initial;text-overflow:initial}.empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;}.gc__table-arrow{display:grid}.header gc-icon{opacity:0.5}.header-with-expandable gc-icon{opacity:0.5}gc-icon.disabled{opacity:1}gc-icon.down-arrow{margin-top:-4px}.gc__row .gc__col .col-content .col-actions{margin-right:14px}.col-center{text-align:center}.gc__table-setting{font-weight:600;font-size:12px;display:flex;align-items:center;justify-content:space-between;background:var(--gc-color-contrast-white);padding:12px 30px 8px 30px;border-left:1px solid var(--gc-color-second-grey);border-right:1px solid var(--gc-color-second-grey)}.gc__table-setting .dropdown{min-width:473px}.gc__table-setting .gc__table-setting-cols-text{padding:14px 20px;display:flex;align-items:center;border-bottom:1px solid var(--gc-color-second-grey)}.gc__table-setting .gc__table-setting-cols-title{margin-left:12px}.gc__table-setting .gc__table-setting-cols{display:grid;padding:17px 20px;row-gap:17px;column-gap:17px;grid-auto-flow:column;grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr}.gc__table-setting .gc__table-setting-cols.less-cols{grid-template-rows:1fr 1fr 1fr 1fr}.gc__table-setting .gc__table-setting-col-item{display:flex;align-items:center}.gc__table-setting .gc__table-setting-col-item .sc-gc-checkbox-h{margin-bottom:0;margin-left:8px;line-height:13px;max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc__table-setting .gc__table-setting-col-item gc-icon{cursor:move}.gc__table-setting .gc__table-setting-col-item.disabled{cursor:not-allowed}.gc__table-setting label.gc__label.sc-gc-checkbox{color:var(--gc-color-text-grey)}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(odd){background-color:inherit}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(even){background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .header,.gc__table-no-stripe .header .fixed-columns{background-color:inherit;color:var(--gc-color-text-grey)}.gc__table-no-border .gc__row .gc__col{border-right:0}.loading-section{width:50%;height:50%;overflow:auto;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;z-index:9999999999}.gc__actions{margin-top:5px;display:flex}.gc__btn-action{margin-right:5px;display:none}.gc__btn-action.active{animation:fadeInShow 0.2s;display:block}.gc__table-setting-manage-title{font-weight:600;font-size:12px;line-height:17px;color:#51666C}.gc__table-setting-manage-title-group-by{font-weight:600;font-size:12px;line-height:17px;color:var(--gc-color-primary);cursor:pointer}.gc__table-body>gc-cell-expandable:nth-child(even)>header{background-color:var(--gc-color-contrast-grey)}.gc__table-body>gc-cell-expandable:nth-child(odd)>header{background-color:var(--gc-color-contrast-white)}.gc__table-divider{width:1px;background-color:#E0E0E0;margin:0 16px}.gc__loading-distance{height:100px;background:white;height:100px;width:100%}@keyframes fadeInShow{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}";

const DEFAULT_CELL_WIDTH = '16vw'; // in vw
const DEFAULT_MAXIMUM_TO_SCALE = 6;
const MAX_LONG_TEXT = 100;
const DEFAULT_SCREEN_WIDTH_TO_STOP_SCALE = 1024;
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
    this.gcTableCollapseChange = createEvent(this, "gc:table-collapse-change", 7);
    this.gcTableGroupByChange = createEvent(this, "gc:table-group-by-change", 7);
    this.gcTableChildDataChange = createEvent(this, "gc:table-child-data-change", 7);
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
    this.isNoBorderedAll = false;
    this.settingTable = {};
    this.isCustomHeader = false;
    this.isNoBorderedEmptyState = false;
    this.maxHeight = '';
    this.isExpandable = false;
    this.treeData = [];
    this.loadingGroupIndex = [];
    this.maxWidthInExpandRow = '';
    this.groupByFields = [];
    this.groupByValue = '';
    this.expandedRows = [];
    this.width = '';
    this.isSWapColSettingColumns = false;
    this.hoveredCell = {};
    this.isSelectAll = false;
    this.showingColumns = {};
    this.posColumns = {};
    this.showTooltip = false;
    this.clickedCell = {};
    this.isStopScaleWidth = false;
    this.totalExpanded = 0;
    this.selectedGroupBy = 'Select Grouping';
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
    this.onCellMouseOut = () => {
      this.hoveredCell = { row: '', column: '' };
    };
    this.onDrop = e => {
      const newValue = e.detail;
      const currentList = newValue.currentList;
      const dataColumn = this.getColumns();
      const fixedCols = dataColumn.filter(col => col.alwaysDisplay);
      const fixedColsValue = fixedCols.reduce((res, col, idx) => {
        return Object.assign(Object.assign({}, res), { [col.name]: { hidden: false, position: idx } });
      }, {});
      const fixedCount = fixedCols === null || fixedCols === void 0 ? void 0 : fixedCols.length;
      let emitValues = currentList.reduce((res, key, idx) => {
        return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: idx + fixedCount } });
      }, {});
      emitValues = Object.assign(Object.assign({}, fixedColsValue), emitValues);
      const newPos = currentList.reduce((res, key, idx) => {
        return Object.assign(Object.assign({}, res), { [key]: idx + fixedCount });
      }, {});
      this.posColumns = Object.assign(Object.assign({}, this.posColumns), newPos);
      this.gcTableSettingChange.emit(emitValues);
    };
  }
  watchTreeDataPropHandler(newValue) {
    if (typeof newValue !== 'string') {
      this.totalExpanded = 0;
    }
  }
  watchGroupByValuePropHandler(newValue) {
    if (!newValue) {
      this.selectedGroupBy = 'Select Grouping';
      return;
    }
    if (this.isExpandable) {
      this.totalExpanded = 0;
      let foundGroudBy = undefined;
      if (this.groupByFields.length > 0) {
        foundGroudBy = this.groupByFields.find(field => field.value == newValue);
      }
      if (foundGroudBy) {
        this.selectedGroupBy = foundGroudBy.label;
      }
    }
  }
  watchExpandedRowsPropHandler(expandedRows) {
    if (expandedRows.length > 0) {
      this.gcTableChildDataChange.emit({ expandedRows });
    }
  }
  watchColumnsPropHandler(newValue) {
    let currentColumns = newValue;
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
  handleToggleTooltip(ev) {
    this.showTooltip = ev.detail.value;
  }
  handleResize(ev) {
    this.isStopScaleWidth = ev.target.innerWidth <= DEFAULT_SCREEN_WIDTH_TO_STOP_SCALE;
  }
  handleOpenExpandableRowsEvent(evt) {
    this.totalExpanded += 1;
    this.gcTableCollapseChange.emit({ index: evt.detail.index, expanded: true });
  }
  handleCloseExpandableRowsEvent(evt) {
    if (this.totalExpanded > 0) {
      this.totalExpanded -= 1;
    }
    this.gcTableCollapseChange.emit({ index: evt.detail.index, expanded: false });
  }
  onRefresh() {
    var _a, _b;
    if ((_a = this.elm) === null || _a === void 0 ? void 0 : _a.forceUpdate) {
      (_b = this.elm) === null || _b === void 0 ? void 0 : _b.forceUpdate();
    }
  }
  onSelectChange(selectedRowKeys) {
    this.selectedRowKeys = selectedRowKeys;
    this.gcSelectChange.emit({ value: this.selectedRowKeys, isSelectAll: this.isSelectAll });
  }
  onCellClick(row, column) {
    this.clickedCell = { row, column };
    this.gcCellClick.emit({ record: row, column });
  }
  onCheck(e, name) {
    this.showingColumns = Object.assign(Object.assign({}, this.showingColumns), { [name]: e.detail.value });
    const emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
      return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: this.posColumns && this.posColumns[key] !== undefined ? this.posColumns[key] : idx } });
    }, {});
    this.gcTableSettingChange.emit(emitValues);
    if (this.totalExpanded > 0) {
      this.gcTableChildDataChange.emit({ expandedRows: this.expandedRows });
    }
  }
  onClearEmptyState() {
    if (this.gcClearEmptyState) {
      this.gcClearEmptyState.emit({});
    }
  }
  onSelectGroupByMenu(field) {
    this.selectedGroupBy = field.label;
    this.gcTableGroupByChange.emit(field);
  }
  renderHeader() {
    const fixedCols = [];
    const scrollCols = [];
    let fixedLastCol = undefined;
    if (this.selectionType === 'checkbox') {
      fixedCols.push(h("div", { class: "gc__col center" }, h("div", { class: "col-content" })));
    }
    const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
    columnsWithPos.sort((a, b) => a.pos - b.pos);
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
    columnsWithPos.forEach((col, i) => {
      if (this.showingColumns[col.name]) {
        let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
        if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
          colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : col.width || this.getColumns()[i].width;
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
          }, class: { gc__col: true, sort: this.sortBy === col.name || col.sortable }, style: { width: colWidth, background: this.background, padding: col.padding } }, h("div", { class: "col-content" }, h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label), h("div", { class: "col-actions" }, (() => {
          if (!this.sortable || !col.sortable || columnsWithPos.length === 1)
            return;
          return (h("div", { class: "gc__table-arrow" }, h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }), h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
        })()))));
        if (i === columnsWithPos.length - 1 && col.name === 'custom_actions') {
          fixedLastCol = (h("div", { class: { gc__col: true, sort: false }, style: { width: `${col.actions.length * 3}vw`, background: this.background } }, h("div", { class: "col-content" }, h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label))));
        }
        else {
          col.fixed && (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
            ? fixedCols.push(colEl)
            : scrollCols.push(colEl);
        }
      }
    });
    return (h("div", { class: "header" }, h("div", { class: "gc__row" }, h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols), h("div", { class: "fixed-right-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedLastCol))));
  }
  renderHeaderWithExpandableRows() {
    const scrollCols = [];
    const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
    columnsWithPos.sort((a, b) => a.pos - b.pos);
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
    columnsWithPos.forEach((col, i) => {
      if (this.showingColumns[col.name]) {
        let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
        if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
          colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : col.width || this.getColumns()[i].width;
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
          }, class: { gc__col: true, sort: this.sortBy === col.name || col.sortable }, style: { width: colWidth, background: this.background, padding: col.padding } }, h("div", { class: "col-content" }, h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label), h("div", { class: "col-actions" }, (() => {
          if (!this.sortable || !col.sortable || columnsWithPos.length === 1)
            return;
          return (h("div", { class: "gc__table-arrow" }, h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }), h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
        })()))));
        scrollCols.push(colEl);
      }
    });
    console.log({ totalExpand: this.totalExpanded });
    return (h("div", { class: { 'header-with-expandable': true, 'transition': this.totalExpanded > 0 } }, h("div", { class: "gc__row" }, h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
  }
  renderActions(row, column, conditionToDisplayActions) {
    return conditionToDisplayActions ? (h("div", { class: { gc__actions: true } }, column.actions.map(action => {
      const matchCondition = row.actions && row.actions[column.name] && row.actions[column.name].includes(action.key) ? true : false;
      return (h("gc-button", { class: `gc__btn-action ${matchCondition ? 'active' : ''}`, key: action.key, paddingText: "10px 0", height: "24px", href: action.onLink && row ? action.onLink(row) : null, disabled: action.disabled, target: action.target, "onGc:click": () => {
          if (action.onClick && row) {
            action.onClick(row);
          }
        }, type: action.type }, action.name));
    }))) : null;
  }
  renderColumnContent(row, column, conditionToDisplayActions) {
    var _a, _b;
    if ((column.isLongText && (row === null || row === void 0 ? void 0 : row[column.name]) && (row === null || row === void 0 ? void 0 : row[column.name].length) > MAX_LONG_TEXT) || column.isCopyText) {
      return (h("div", { class: "col-text", style: { padding: column.paddingText || '' } }, h("gc-tooltip", { isLongText: column.isLongText, isCopyText: column.isCopyText, content: row === null || row === void 0 ? void 0 : row[column.name], isToggle: ((_a = this.clickedCell) === null || _a === void 0 ? void 0 : _a.row) === row && ((_b = this.clickedCell) === null || _b === void 0 ? void 0 : _b.column.name) === column.name }), this.renderActions(row, column, conditionToDisplayActions)));
    }
    if ((row === null || row === void 0 ? void 0 : row[column.name]) && typeof (row === null || row === void 0 ? void 0 : row[column.name]) === 'string' && (row === null || row === void 0 ? void 0 : row[column.name].includes('gc-cell-invalid'))) {
      return h("div", { class: "col-text", innerHTML: row === null || row === void 0 ? void 0 : row[column.name], style: { height: '100%', padding: '0' } });
    }
    return (h("div", { class: "col-text", innerHTML: row === null || row === void 0 ? void 0 : row[column.name], style: { padding: column.paddingText || '' } }, this.renderActions(row, column, conditionToDisplayActions)));
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
      let fixedLastCol = undefined;
      if (this.selectionType === 'checkbox')
        fixedCols.push(h("div", { class: { gc__col: true, center: true } }, h("div", { class: "col-content" })));
      const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
      columnsWithPos.forEach((column, i) => {
        var _a;
        if (this.showingColumns[column.name]) {
          let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
          if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
            colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : column.width || this.getColumns()[i].width;
          const conditionToDisplayActions = row.actions && row.actions[column.name] && column.actions && column.actions.length > 0 && ((_a = this.hoveredCell) === null || _a === void 0 ? void 0 : _a.row) === row;
          const colEl = (h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
              width: colWidth,
              background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
              padding: column.padding,
            }, onMouseOver: () => this.onCellMouseOver(row, column), onMouseOut: () => this.onCellMouseOut(), onClick: () => {
              const selection = window.getSelection();
              if (selection.type != 'Range')
                this.onCellClick(row, column);
            } }, h("div", { class: "col-content" }, this.renderColumnContent(row, column, conditionToDisplayActions))));
          if (i === columnsWithPos.length - 1 && column.name === 'custom_actions') {
            fixedLastCol = (h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
                width: `${column.actions.length * 3}vw`,
                background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
              }, onMouseOver: () => this.onCellMouseOver(row, column), onMouseOut: () => this.onCellMouseOut(), onClick: () => {
                const selection = window.getSelection();
                if (selection.type != 'Range')
                  this.onCellClick(row, column);
              } }, h("div", { class: "col-content", style: { justifyContent: 'space-evenly' } }, column.actions.map(action => (h("gc-button", { "onGc:click": () => action.onClick(row), type: action.type, height: "27px", paddingText: "8px" }, h("gc-icon", { color: "white", size: "16px", name: action.icon })))))));
          }
          else {
            column.fixed && (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
              ? fixedCols.push(colEl)
              : scrollCols.push(colEl);
          }
        }
      });
      rows.push(h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
          background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
          border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
        } }, h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols), h("div", { class: "fixed-right-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedLastCol)));
    });
    return (h("div", { style: { maxHeight: this.maxHeight }, class: "gc__table-body" }, rows));
  }
  renderBodyWithExpandableRows() {
    const treeData = [...this.getTreeData()];
    const collapsedRows = [];
    treeData.forEach(expandedRow => {
      const rows = [];
      const { index, field_name: fieldName, value, total, tooltip_message: tooltipMessage, total_text: totalText, link_to: linkTo, data = [], number_of_entry_per_page: numberOfEntryPerPage = 0, } = expandedRow;
      data.forEach((row, idx) => {
        const scrollCols = [];
        const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
        columnsWithPos.sort((a, b) => a.pos - b.pos);
        const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
        columnsWithPos.forEach((column, i) => {
          var _a;
          if (this.showingColumns[column.name]) {
            let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
            if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
              colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : column.width || this.getColumns()[i].width;
            const conditionToDisplayActions = row.actions && row.actions[column.name] && column.actions && column.actions.length > 0 && ((_a = this.hoveredCell) === null || _a === void 0 ? void 0 : _a.row) === row;
            const colEl = (h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
                width: colWidth,
                background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
                padding: column.padding,
              }, onMouseOver: () => this.onCellMouseOver(row, column), onMouseOut: () => this.onCellMouseOut(), onClick: () => {
                const selection = window.getSelection();
                if (selection.type != 'Range')
                  this.onCellClick(row, column);
              } }, h("div", { class: "col-content" }, this.renderColumnContent(row, column, conditionToDisplayActions))));
            scrollCols.push(colEl);
          }
        });
        rows.push(h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
            background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
            border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
          } }, h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
      });
      const expandableRows = (h("gc-cell-expandable", { class: { 'is-loading': this.loadingGroupIndex.includes(`${index}`) }, index: index, fieldName: fieldName, value: value, total: total, totalText: totalText, linkTo: linkTo, tooltipMessage: tooltipMessage, numberOfEntryPerPage: numberOfEntryPerPage || data.length, maxWidth: this.maxWidthInExpandRow, isLoading: this.loadingGroupIndex.includes(`${index}`) }, this.loadingGroupIndex.includes(`${index}`) && h("div", { class: "loading-section" }, rows.length >= 4 ? h("gc-spinner", null) : null), rows));
      collapsedRows.push(expandableRows);
    });
    return (h("div", { style: { maxHeight: this.maxHeight }, class: "gc__table-body" }, collapsedRows));
  }
  getTotalItems() {
    let totalItems = this.totalItems;
    const length = this.isExpandable ? this.getTreeData().length : this.getData().length;
    if (this.paginate && !this.serverSide)
      totalItems = this.totalItems || length;
    return totalItems || length;
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
  getTreeData() {
    if (this.treeData) {
      if (typeof this.treeData === 'string') {
        try {
          return JSON.parse(this.treeData);
        }
        catch (e) {
          return [];
        }
      }
      return this.treeData;
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
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] && this.settingTable[col.name].hidden ? false : true });
      return res;
    }, {});
    this.posColumns = this.getColumns().reduce((res, col, idx) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx });
      return res;
    }, {});
    if (this.isExpandable) {
      let foundGroudBy = undefined;
      if (this.groupByFields.length > 0) {
        foundGroudBy = this.groupByFields.find(field => field.value == this.groupByValue);
      }
      if (foundGroudBy) {
        this.selectedGroupBy = foundGroudBy.label;
      }
    }
  }
  renderPagination() {
    let totalItems = this.getTotalItems();
    if (totalItems <= this.pageSize) {
      return null;
    }
    totalItems = totalItems ? totalItems.toLocaleString() : '';
    return (h("div", { style: { background: this.background }, class: "table-footer" }, h("div", { class: "pagination" }, h("div", { class: "page-sizes-select" }), h("div", { class: "pagination-item-count" }, h("span", null, "Showing"), "\u00A0", this.pageSize * (this.page - 1) + 1, "\u00A0to\u00A0", this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(), "\u00A0of\u00A0", totalItems || 0, "\u00A0", +totalItems === 1 ? 'entry' : 'entries'), h("div", { class: "pagination-right" }, h("div", { class: "table-footer-right-content" }, h("div", { class: "table-footer-right-content-pagination" }, h("gc-pagination", { activePage: this.page, total: this.getTotalItems(), pageSize: this.pageSize })))))));
  }
  renderSettingColumns() {
    if (this.settingColumns || this.customEmptyState || this.isNoBorderedAll || this.isCustomHeader) {
      let totalItems = this.getTotalItems();
      totalItems = totalItems ? totalItems.toLocaleString() : '';
      const columnsWithPos = this.getColumns().map((col, idx) => (Object.assign(Object.assign({}, col), { pos: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const columns = columnsWithPos.filter(col => col.name !== 'custom_actions');
      const filteredGroupByFields = this.groupByFields.filter(field => field.label != this.selectedGroupBy);
      return (h("div", { style: { background: this.background, border: this.isNoBorderedAll ? '0' : '' }, class: "gc__table-setting" }, this.customEmptyState || this.isNoBorderedAll || this.isCustomHeader ? (h("div", null, h("slot", { name: "gc__table-setting-title" }))) : (h("slot", { name: "gc__table-setting-title" }, "Results: ", totalItems || 0, " ", +totalItems === 1 ? 'entry' : 'entries', " found matching applied filters:")), h("div", { style: { display: 'flex' } }, !!(this.groupByFields.length > 0) && (h("div", null, h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-layer-group", size: "14px" }), "\u00A0", h("b", { style: { marginRight: '6px' } }, "Group by:"), h("gc-dropdown", { id: "dropdown_group_by", trigger: "click", allowForceClose: true, suffixArrow: true }, h("gc-link", { color: "var(--gc-color-primary)" }, h("span", { class: "gc__table-setting-manage-title-group-by" }, this.selectedGroupBy)), h("gc-menu", { slot: "gc__dropdown-content", class: "menu-no-border", style: { width: '200px' } }, filteredGroupByFields.map(field => (h("gc-menu-item", { background: "white", value: field.value, "onGc:menu-item-click": () => this.onSelectGroupByMenu(field) }, h("span", { style: { opacity: field.value === '' ? '0.5' : '1' } }, field.label)))))))), !!(this.groupByFields.length > 0) && h("div", { class: "gc__table-divider" }), this.settingColumns && (h("gc-dropdown", { id: `dropdown_${this.gcId}` }, h("gc-link", { icon: "fa-solid fa-table-layout", color: "#51666C" }, h("span", { class: "gc__table-setting-manage-title" }, "Manage Table Columns")), h("div", { slot: "gc__dropdown-content", class: "dropdown" }, h("div", { class: "gc__table-setting-cols-text" }, h("gc-icon", { color: "red", name: "fa-regular fa-square-info" }), h("gc-h2", { class: "gc__table-setting-cols-title" }, "Manage Table Columns")), h("gc-drag-container", { "onGc:drop": this.onDrop, "class-container": `gc__table-setting-cols ${columns.length < 6 ? 'less-cols' : ''}`, "class-draggable": ".draggable-item", group: "table-setting-cols" }, columns.map(col => (h("gc-draggable-item", { "data-col-name": col.name, "data-col-check": `${this.showingColumns[col.name]}`, "data-id": col.name, key: `${this.gcId}_${col.name}`, class: { 'draggable-item': !col.alwaysDisplay } }, h("div", { key: `${this.gcId}_${col.name}`, class: { 'gc__table-setting-col-item': true, 'disabled': col.alwaysDisplay } }, h("gc-icon", { color: "var(--gc-color-secondary-grey)", name: "fa-solid fa-grip-dots-vertical" }), h("gc-checkbox", { disabled: col.alwaysDisplay || false, "gc-name": `${this.gcId}_${col.name}`, label: col.label, checked: col.alwaysDisplay || this.showingColumns[col.name], "onGc:change": e => this.onCheck(e, col.name) }))))))))))));
    }
  }
  render() {
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
    const conditionShowing = this.isExpandable ? this.getTreeData().length > 0 : this.getData().length > 0;
    return (h(Host, null, this.renderSettingColumns(), h("div", { class: { 'is-loading': this.isLoading, 'table-data': true } }, this.isLoading && (h("div", { class: "loading-section" }, h("gc-spinner", null))), conditionShowing ? (h("div", { style: { border: this.isNoBorderedAll && !this.isStripe ? '0' : '' }, class: {
        'gc__table': true,
        'sortable': this.sortable,
        'paginate': this.paginate,
        'gc__table-no-stripe': !this.isStripe,
        'gc__table-no-border': !this.isBordered,
        'gc__table-loading': this.isLoading,
      } }, h("div", { class: "table-scroll-container", style: {
        overflow: (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth) || (this.isExpandable && this.totalExpanded === 0) ? 'hidden' : 'auto',
        width: this.isExpandable && this.totalExpanded === 0 ? this.width : '',
        position: this.showTooltip ? 'static' : 'inherit',
      } }, this.isExpandable ? this.renderHeaderWithExpandableRows() : this.renderHeader(), this.isExpandable ? this.renderBodyWithExpandableRows() : this.renderBody()), this.paginate && this.renderPagination())) : (this.renderEmptyState()))));
  }
  renderEmptyState() {
    if (this.customEmptyState) {
      return h("div", { class: { 'gc__table-loading': this.isLoading }, innerHTML: this.customEmptyState });
    }
    if (this.isLoading) {
      return (h("div", { class: { 'empty-table': true, 'empty-table-no-bordered': this.isNoBorderedEmptyState, 'gc__table-loading': this.isLoading } }, h("div", { class: "gc__loading-distance" })));
    }
    return (h("div", { class: { 'empty-table': true, 'empty-table-no-bordered': this.isNoBorderedEmptyState, 'gc__table-loading': this.isLoading } }, h("div", { class: "empty-title" }, h("gc-h2", null, "There is no records found matching applied filters")), h("gc-button", { onClick: () => this.onClearEmptyState(), type: "secondary", icon: "fa-regular fa-filter-slash" }, "Clear applied filters")));
  }
  get elm() { return this; }
  static get watchers() { return {
    "treeData": ["watchTreeDataPropHandler"],
    "groupByValue": ["watchGroupByValuePropHandler"],
    "expandedRows": ["watchExpandedRowsPropHandler"],
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
    "isNoBorderedAll": [4, "is-no-bordered-all"],
    "background": [1],
    "isLoading": [4, "is-loading"],
    "settingTable": [8, "setting-table"],
    "customEmptyState": [1, "custom-empty-state"],
    "isCustomHeader": [4, "is-custom-header"],
    "isNoBorderedEmptyState": [4, "is-no-bordered-empty-state"],
    "maxHeight": [1, "max-height"],
    "isExpandable": [4, "is-expandable"],
    "treeData": [1, "tree-data"],
    "loadingGroupIndex": [16],
    "maxWidthInExpandRow": [1, "max-width-in-expand-row"],
    "groupByFields": [16],
    "groupByValue": [1, "group-by-value"],
    "expandedRows": [1040],
    "width": [1],
    "isSWapColSettingColumns": [4, "is-s-wap-col-setting-columns"],
    "hoveredCell": [32],
    "isSelectAll": [32],
    "showingColumns": [32],
    "posColumns": [32],
    "showTooltip": [32],
    "clickedCell": [32],
    "isStopScaleWidth": [32],
    "totalExpanded": [32],
    "selectedGroupBy": [32]
  }, [[0, "gc:change-page", "handleChangePage"], [0, "gc:toggle-tooltip", "handleToggleTooltip"], [9, "resize", "handleResize"], [0, "openExpandableRowsEvent", "handleOpenExpandableRowsEvent"], [0, "closeExpandableRowsEvent", "handleCloseExpandableRowsEvent"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-table", "gc-button", "gc-cell-expandable", "gc-checkbox", "gc-drag-container", "gc-draggable-item", "gc-dropdown", "gc-h2", "gc-icon", "gc-link", "gc-menu", "gc-menu-item", "gc-pagination", "gc-spinner", "gc-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTable$1);
      }
      break;
    case "gc-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "gc-cell-expandable":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "gc-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "gc-drag-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "gc-draggable-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "gc-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "gc-h2":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "gc-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "gc-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gc-pagination":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gc-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gc-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcTable = GcTable$1;
const defineCustomElement = defineCustomElement$1;

export { GcTable, defineCustomElement };
