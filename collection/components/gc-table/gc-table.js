import { Component, Element, Event, h, Host, Prop, State, Listen, Watch } from '@stencil/core';
const DEFAULT_CELL_WIDTH = '16vw'; // in vw
const DEFAULT_MAXIMUM_TO_SCALE = 6;
/**
 * @name Table
 * @description A configurable component for displaying tabular data.
 * @img /assets/img/table.png
 */
export class GcTable {
  constructor() {
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
      fixedCols.push(h("div", { class: "gc__col center" },
        h("div", { class: "col-content" })));
    }
    const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
    columnsWithPos.sort((a, b) => a.pos - b.pos);
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
    columnsWithPos.forEach((col, i) => {
      if (this.showingColumns[col.name]) {
        let colWidth = countCurrentCol && countCurrentCol.length > 0 ? (i === columnsWithPos.length - 1 ? 'max-content' : `${100 / countCurrentCol.length}vw`) : DEFAULT_CELL_WIDTH;
        if (col.width && countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE)
          colWidth = i === columnsWithPos.length - 1 ? 'max-content' : col.width;
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
          }, class: { gc__col: true, sort: this.sortBy === col.name }, style: { width: colWidth, background: this.background } },
          h("div", { class: "col-content" },
            h("div", { class: "col-text" }, col.label),
            h("div", { class: "col-actions" }, (() => {
              if (!this.sortable || !col.sortable)
                return;
              return (h("div", { class: "gc__table-arrow" },
                h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }),
                h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
            })()))));
        col.fixed && countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE ? fixedCols.push(colEl) : scrollCols.push(colEl);
      }
    });
    return (h("div", { class: "header" },
      h("div", { class: "gc__row" },
        h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE ? 'relative' : 'sticky' } }, fixedCols),
        h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
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
        fixedCols.push(h("div", { class: { gc__col: true, center: true } },
          h("div", { class: "col-content" })));
      const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
      columnsWithPos.forEach(column => {
        var _a, _b, _c;
        if (this.showingColumns[column.name]) {
          let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}vw` : DEFAULT_CELL_WIDTH;
          if (column.width && countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE)
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
            } },
            h("div", { class: "col-content" },
              h("div", { class: "col-text", innerHTML: row === null || row === void 0 ? void 0 : row[column.name] }, conditionToDisplayActions ? (h("div", { class: { gc__actions: true } }, column.actions.map(action => {
                const matchCondition = row.actions && row.actions[column.name] && row.actions[column.name].includes(action.key) ? true : false;
                return (h("gc-button", { class: `gc__btn-action ${matchCondition ? 'active' : ''}`, key: action.key, paddingText: "10px 0", height: "24px", href: action.onLink && row ? action.onLink(row) : null, disabled: action.disabled, target: action.target, "onGc:click": () => {
                    if (action.onClick && row) {
                      action.onClick(row);
                    }
                  }, type: action.type }, action.name));
              }))) : null))));
          column.fixed && countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE ? fixedCols.push(colEl) : scrollCols.push(colEl);
        }
      });
      rows.push(h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
          background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
          border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
        } },
        h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE ? 'relative' : 'sticky' } }, fixedCols),
        h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
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
    return (h("div", { class: "pagination" },
      h("div", { class: "page-sizes-select" }),
      h("div", { class: "pagination-item-count" },
        h("span", null, "Showing"),
        "\u00A0",
        this.pageSize * (this.page - 1) + 1,
        "\u00A0to\u00A0",
        this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(),
        "\u00A0of\u00A0",
        totalItems,
        "\u00A0",
        totalItems <= 1 ? 'entry' : 'entries'),
      h("div", { class: "pagination-right" },
        h("div", { class: "table-footer-right-content" },
          h("div", { class: "table-footer-right-content-pagination" },
            h("gc-pagination", { activePage: this.page, total: this.getTotalItems(), pageSize: this.pageSize }))))));
  }
  renderSettingColumns() {
    if (this.settingColumns && this.getData().length > 0) {
      let totalItems = this.getTotalItems();
      totalItems = totalItems ? totalItems.toLocaleString() : '';
      const columnsWithPos = this.getColumns().map((col, idx) => (Object.assign(Object.assign({}, col), { pos: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const columns = columnsWithPos;
      return (h("div", { style: { background: this.background }, class: "gc__table-setting" },
        h("slot", { name: "gc__table-setting-title" },
          h("div", null,
            "Results: ",
            totalItems,
            " ",
            totalItems <= 1 ? 'entry' : 'entries',
            " found matching applied filters:")),
        h("div", null,
          h("gc-dropdown", { id: `dropdown_${this.gcId}` },
            h("gc-link", { icon: "fa-solid fa-table-layout", color: "#51666C" },
              h("span", { class: "gc__table-setting-manage-title" }, "Manage Table Columns")),
            h("div", { slot: "gc__dropdown-content", class: "dropdown" },
              h("div", { class: "gc__table-setting-cols-text" },
                h("gc-icon", { color: "red", name: "fa-regular fa-square-info" }),
                h("gc-h2", { class: "gc__table-setting-cols-title" }, "Manage Table Columns")),
              h("gc-drag-container", { "onGc:drop": this.onDrop, "class-container": "gc__table-setting-cols", "class-daggable": ".draggable-item", group: "table-setting-cols" }, columns.map(col => (h("gc-draggable-item", { "data-col-name": col.name, "data-col-check": `${this.showingColumns[col.name]}`, key: `${this.gcId}_${col.name}`, class: { 'draggable-item': !col.alwaysDisplay } },
                h("div", { key: `${this.gcId}_${col.name}`, class: { 'gc__table-setting-col-item': true, 'disabled': col.alwaysDisplay } },
                  h("gc-icon", { color: "var(--gc-color-secondary-grey)", name: "fa-solid fa-grip-dots-vertical" }),
                  h("gc-checkbox", { disabled: col.alwaysDisplay, "gc-name": `${this.gcId}_${col.name}`, label: col.label, checked: this.showingColumns[col.name], "onGc:change": e => this.onCheck(e, col.name) })))))))))));
    }
  }
  render() {
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
    if (this.isLoading) {
      return (h(Host, null,
        this.renderSettingColumns(),
        h("div", { class: { 'gc__table': true, 'sortable': this.sortable, 'paginate': this.paginate, 'gc__table-no-stripe': !this.isStripe, 'gc__table-no-border': !this.isBordered } },
          h("div", { class: "table-scroll-container", style: { overflow: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE ? 'hidden' : 'auto' } },
            this.renderHeader(),
            this.renderBody(),
            h("div", { class: "loading-section" },
              h("gc-spinner", null))),
          this.paginate && (h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))));
    }
    return (h(Host, null,
      this.renderSettingColumns(),
      this.getData().length > 0 ? (h("div", { class: { 'gc__table': true, 'sortable': this.sortable, 'paginate': this.paginate, 'gc__table-no-stripe': !this.isStripe, 'gc__table-no-border': !this.isBordered } },
        h("div", { class: "table-scroll-container", style: { overflow: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE ? 'hidden' : 'auto' } },
          this.renderHeader(),
          this.renderBody()),
        this.paginate && (h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))) : (this.renderEmptyState())));
  }
  renderEmptyState() {
    return (h("div", { class: "empty-table" },
      h("div", { class: "empty-title" },
        h("gc-h2", null, "There is no records found matching applied filters")),
      h("gc-button", { onClick: () => this.onClearEmptyState(), type: "secondary", icon: "fa-regular fa-filter-slash" }, "Clear applied filters")));
  }
  static get is() { return "gc-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-table.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-table.css"]
  }; }
  static get properties() { return {
    "columns": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | any[]",
        "resolved": "any[] | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Grid columns configuration.\n[\n{\n  \"name\":\"name\",\n  \"label\":\"Name\",\n  \"width\":300,\n  \"fixed\":true\n },\n{\n  \"name\":\"age\",\n  \"label\":\"Age\"\n}\n]"
      },
      "attribute": "columns",
      "reflect": false,
      "defaultValue": "[]"
    },
    "data": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | any[]",
        "resolved": "any[] | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Grid data to display on table\n[{\n 'id': '5e7118ddce4b3d577956457f',\n 'age': 21,\n 'name': 'John',\n 'company': 'India',\n 'email': 'john@example.com',\n 'phone': '+1 (839) 560-3581',\n 'address': '326 Irving Street, Grimsley, Texas, 4048'\n }]"
      },
      "attribute": "data",
      "reflect": false,
      "defaultValue": "[]"
    },
    "selectionType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'checkbox' | undefined",
        "resolved": "\"checkbox\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "selection-type",
      "reflect": false
    },
    "selectedRowKeys": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "gcId": {
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
      "attribute": "gc-id",
      "reflect": false,
      "defaultValue": "'gc-table'"
    },
    "keyField": {
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
      "attribute": "key-field",
      "reflect": false,
      "defaultValue": "'id'"
    },
    "serverSide": {
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
        "text": ""
      },
      "attribute": "server-side",
      "reflect": false,
      "defaultValue": "false"
    },
    "sortable": {
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
        "text": ""
      },
      "attribute": "sortable",
      "reflect": false,
      "defaultValue": "true"
    },
    "sortBy": {
      "type": "string",
      "mutable": true,
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
      "attribute": "sort-by",
      "reflect": false
    },
    "sortOrder": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'asc' | 'desc' | ''",
        "resolved": "\"\" | \"asc\" | \"desc\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sort-order",
      "reflect": false,
      "defaultValue": "''"
    },
    "paginate": {
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
        "text": ""
      },
      "attribute": "paginate",
      "reflect": false,
      "defaultValue": "true"
    },
    "page": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "page",
      "reflect": false,
      "defaultValue": "1"
    },
    "pageSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "page-size",
      "reflect": false,
      "defaultValue": "20"
    },
    "totalItems": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "total-items",
      "reflect": false,
      "defaultValue": "0"
    },
    "emptyState": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "empty-state",
      "reflect": false,
      "defaultValue": "{\n    title: 'No items',\n    description: 'There are no items to display',\n  }"
    },
    "settingColumns": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "setting-columns",
      "reflect": false,
      "defaultValue": "false"
    },
    "customRows": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "customRowsBackground": {
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
        "text": ""
      },
      "attribute": "custom-rows-background",
      "reflect": false
    },
    "customRowsBorder": {
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
        "text": ""
      },
      "attribute": "custom-rows-border",
      "reflect": false
    },
    "isStripe": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-stripe",
      "reflect": false,
      "defaultValue": "true"
    },
    "isBordered": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-bordered",
      "reflect": false,
      "defaultValue": "true"
    },
    "background": {
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
        "text": ""
      },
      "attribute": "background",
      "reflect": false
    },
    "isLoading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "false",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-loading",
      "reflect": false
    },
    "settingTable": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "setting-table",
      "reflect": false,
      "defaultValue": "{}"
    }
  }; }
  static get states() { return {
    "hoveredCell": {},
    "isSelectAll": {},
    "showingColumns": {},
    "posColumns": {}
  }; }
  static get events() { return [{
      "method": "gcCellClick",
      "name": "gc:table-cell-click",
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
    }, {
      "method": "gcSelectChange",
      "name": "gc:table-select-change",
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
    }, {
      "method": "gcSort",
      "name": "gc:sort",
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
    }, {
      "method": "gcChangePage",
      "name": "gc:change-page",
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
    }, {
      "method": "gcClearEmptyState",
      "name": "gc:clear-empty-state",
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
    }, {
      "method": "gcTableSettingChange",
      "name": "gc:table-setting-change",
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
  static get elementRef() { return "elm"; }
  static get watchers() { return [{
      "propName": "columns",
      "methodName": "watchColumnsPropHandler"
    }, {
      "propName": "settingTable",
      "methodName": "watchSettingTablePropHandler"
    }]; }
  static get listeners() { return [{
      "name": "gc:change-page",
      "method": "handleChangePage",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
