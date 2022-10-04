import { Component, Element, Event, h, Host, Prop, State } from '@stencil/core';
const DEFAULT_CELL_WIDTH = '16rem'; // in rem
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
      fixedCols.push(h("div", { class: "col center" },
        h("div", { class: "col-content" })));
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
        }, class: { col: true, sort: this.sortBy === col.name }, style: { width: colWidth } },
        h("div", { class: "col-content" },
          h("div", { class: "col-text" }, col.label),
          h("div", { class: "col-actions" }, (() => {
            if (!this.sortable)
              return;
            return (h("div", { class: "gc__table-arrow" },
              h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "10px" }),
              h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "10px" })));
          })()))));
      col.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
    });
    return (h("div", { class: "header" },
      h("div", { class: "row" },
        h("div", { class: "fixed-columns columns-container" }, fixedCols),
        h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
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
        fixedCols.push(h("div", { class: { col: true, center: true } },
          h("div", { class: "col-content" })));
      this.getColumns().forEach(column => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (column.width)
          colWidth = column.width;
        const colEl = (h("div", { tabindex: "1", class: { 'col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: { width: colWidth }, onMouseOver: () => this.onCellMouseOver(row, column), onClick: () => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, column);
          } },
          h("div", { class: "col-content" },
            h("div", { class: "col-text", title: row === null || row === void 0 ? void 0 : row[column.name], innerHTML: row === null || row === void 0 ? void 0 : row[column.name] }))));
        column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      });
      rows.push(h("div", { class: { 'row': true, 'row-hover': this.hoveredCell.row === row } },
        h("div", { class: "fixed-columns columns-container" }, fixedCols),
        h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
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
      return (h("div", { class: "pagination" },
        h("div", { class: "page-sizes-select" }),
        h("div", { class: "pagination-item-count" },
          h("span", null, "Showing"),
          "\u00A0",
          this.pageSize * (this.page - 1) + 1,
          "\u00A0 to\u00A0",
          this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(),
          "\u00A0 of\u00A0",
          this.getTotalItems(),
          "\u00A0 entries"),
        h("div", { class: "pagination-right" },
          h("div", { class: "table-footer-right-content" },
            h("div", { class: "table-footer-right-content-pagination" },
              h("gc-pagination", null))))));
  }
  render() {
    return (h(Host, null,
      h("div", { class: { table: true, sortable: this.sortable, paginate: this.paginate } },
        h("div", { class: "table-scroll-container" },
          this.renderHeader(),
          this.getData().length ? this.renderBody() : this.renderEmptyState()),
        h("div", { class: "table-footer" }, this.renderPagination()))));
  }
  renderEmptyState() {
    return h("div", { class: "empty-table" });
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
    "managed": {
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
      "attribute": "managed",
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
      "attribute": "total-items",
      "reflect": false
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
    }
  }; }
  static get states() { return {
    "hoveredCell": {},
    "isSelectAll": {}
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
      "method": "gcPage",
      "name": "gc:page",
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
}
