import { Component, Element, Event, h, Host, Prop, State, Listen, Watch } from '@stencil/core';
const DEFAULT_CELL_WIDTH = '16vw'; // in vw
const DEFAULT_MAXIMUM_TO_SCALE = 6;
const MAX_LONG_TEXT = 100;
const DEFAULT_SCREEN_WIDTH_TO_STOP_SCALE = 1024;
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
      const values = Object.values(newValue) && Object.values(newValue)[0];
      const swapCol = Object.keys(this.posColumns).find(key => this.posColumns[key] === values.position);
      let emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
        return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: this.posColumns && this.posColumns[key] !== undefined ? this.posColumns[key] : idx } });
      }, {});
      const newPos = Object.keys(newValue).reduce((res, key) => {
        return Object.assign(Object.assign({}, res), { [key]: newValue[key].position });
      }, {});
      this.posColumns = Object.assign(Object.assign(Object.assign({}, this.posColumns), newPos), { [swapCol]: values.oldPos });
      emitValues = Object.assign(Object.assign(Object.assign({}, emitValues), newValue), { [swapCol]: { hidden: !this.showingColumns[swapCol], position: values.oldPos } });
      this.gcTableSettingChange.emit(emitValues);
    };
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
      fixedCols.push(h("div", { class: "gc__col center" },
        h("div", { class: "col-content" })));
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
          }, class: { gc__col: true, sort: this.sortBy === col.name || col.sortable }, style: { width: colWidth, background: this.background, padding: col.padding } },
          h("div", { class: "col-content" },
            h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label),
            h("div", { class: "col-actions" }, (() => {
              if (!this.sortable || !col.sortable || columnsWithPos.length === 1)
                return;
              return (h("div", { class: "gc__table-arrow" },
                h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }),
                h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
            })()))));
        if (i === columnsWithPos.length - 1 && col.name === 'custom_actions') {
          fixedLastCol = (h("div", { class: { gc__col: true, sort: false }, style: { width: `${col.actions.length * 3}vw`, background: this.background } },
            h("div", { class: "col-content" },
              h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label))));
        }
        else {
          col.fixed && (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
            ? fixedCols.push(colEl)
            : scrollCols.push(colEl);
        }
      }
    });
    return (h("div", { class: "header" },
      h("div", { class: "gc__row" },
        h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedCols),
        h("div", { class: "scrollable-columns columns-container" }, scrollCols),
        h("div", { class: "fixed-right-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedLastCol))));
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
          }, class: { gc__col: true, sort: this.sortBy === col.name || col.sortable }, style: { width: colWidth, background: this.background, padding: col.padding } },
          h("div", { class: "col-content" },
            h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label),
            h("div", { class: "col-actions" }, (() => {
              if (!this.sortable || !col.sortable || columnsWithPos.length === 1)
                return;
              return (h("div", { class: "gc__table-arrow" },
                h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }),
                h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
            })()))));
        scrollCols.push(colEl);
      }
    });
    return (h("div", { class: { 'header-with-expandable': true, 'transition': this.totalExpanded > 0 } },
      h("div", { class: "gc__row" },
        h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
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
      return (h("div", { class: "col-text", style: { padding: column.paddingText || '' } },
        h("gc-tooltip", { isLongText: column.isLongText, isCopyText: column.isCopyText, content: row === null || row === void 0 ? void 0 : row[column.name], isToggle: ((_a = this.clickedCell) === null || _a === void 0 ? void 0 : _a.row) === row && ((_b = this.clickedCell) === null || _b === void 0 ? void 0 : _b.column.name) === column.name }),
        this.renderActions(row, column, conditionToDisplayActions)));
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
        fixedCols.push(h("div", { class: { gc__col: true, center: true } },
          h("div", { class: "col-content" })));
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
            } },
            h("div", { class: "col-content" }, this.renderColumnContent(row, column, conditionToDisplayActions))));
          if (i === columnsWithPos.length - 1 && column.name === 'custom_actions') {
            fixedLastCol = (h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
                width: `${column.actions.length * 3}vw`,
                background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
              }, onMouseOver: () => this.onCellMouseOver(row, column), onMouseOut: () => this.onCellMouseOut(), onClick: () => {
                const selection = window.getSelection();
                if (selection.type != 'Range')
                  this.onCellClick(row, column);
              } },
              h("div", { class: "col-content", style: { justifyContent: 'space-evenly' } }, column.actions.map(action => (h("gc-button", { "onGc:click": () => action.onClick(row), type: action.type, height: "27px", paddingText: "8px" },
                h("gc-icon", { color: "white", size: "16px", name: action.icon })))))));
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
        } },
        h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedCols),
        h("div", { class: "scrollable-columns columns-container" }, scrollCols),
        h("div", { class: "fixed-right-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedLastCol)));
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
              } },
              h("div", { class: "col-content" }, this.renderColumnContent(row, column, conditionToDisplayActions))));
            scrollCols.push(colEl);
          }
        });
        rows.push(h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
            background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
            border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
          } },
          h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
      });
      const expandableRows = (h("gc-cell-expandable", { class: { 'is-loading': this.loadingGroupIndex.includes(`${index}`) }, index: index, fieldName: fieldName, value: value, total: total, totalText: totalText, linkTo: linkTo, tooltipMessage: tooltipMessage, numberOfEntryPerPage: numberOfEntryPerPage || data.length, maxWidth: this.maxWidthInExpandRow },
        this.loadingGroupIndex.includes(`${index}`) && (h("div", { class: "loading-section" },
          h("gc-spinner", null))),
        rows.length > 0 ? rows : (h("div", { class: { 'empty-child-table': true, 'empty-table-no-bordered': true } },
          h("div", null,
            h("gc-h2", null, "There is no records found matching applied filters"))))));
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
        totalItems || 0,
        "\u00A0",
        +totalItems === 1 ? 'entry' : 'entries'),
      h("div", { class: "pagination-right" },
        h("div", { class: "table-footer-right-content" },
          h("div", { class: "table-footer-right-content-pagination" },
            h("gc-pagination", { activePage: this.page, total: this.getTotalItems(), pageSize: this.pageSize }))))));
  }
  renderSettingColumns() {
    if (this.settingColumns || this.customEmptyState || this.isNoBorderedAll || this.isCustomHeader) {
      let totalItems = this.getTotalItems();
      totalItems = totalItems ? totalItems.toLocaleString() : '';
      const columnsWithPos = this.getColumns().map((col, idx) => (Object.assign(Object.assign({}, col), { pos: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const columns = columnsWithPos.filter(col => col.name !== 'custom_actions');
      return (h("div", { style: { background: this.background, border: this.isNoBorderedAll ? '0' : '' }, class: "gc__table-setting" },
        this.customEmptyState || this.isNoBorderedAll || this.isCustomHeader ? (h("div", null,
          h("slot", { name: "gc__table-setting-title" }))) : (h("slot", { name: "gc__table-setting-title" },
          "Results: ",
          totalItems || 0,
          " ",
          +totalItems === 1 ? 'entry' : 'entries',
          " found matching applied filters:")),
        h("div", { style: { display: 'flex' } },
          !!(this.groupByFields.length > 0) && (h("div", null,
            h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-layer-group", size: "14px" }),
            "\u00A0",
            h("b", null, "Group by"),
            ":\u00A0",
            h("gc-dropdown", { id: "dropdown_group_by", trigger: "click", allowForceClose: true, suffixArrow: true },
              h("gc-link", { color: "var(--gc-color-primary)" },
                h("span", { class: "gc__table-setting-manage-title-group-by" }, this.selectedGroupBy)),
              h("gc-menu", { slot: "gc__dropdown-content", class: "menu-no-border", style: { width: '200px' } }, this.groupByFields.map((field, idx) => (h("gc-menu-item", { background: "white", value: field.value, "onGc:menu-item-click": () => this.onSelectGroupByMenu(field) },
                h("span", { style: { opacity: idx === 0 ? '0.5' : '1' } }, field.label)))))))),
          !!(this.groupByFields.length > 0) && h("div", { class: "gc__table-divider" }),
          this.settingColumns && (h("gc-dropdown", { id: `dropdown_${this.gcId}` },
            h("gc-link", { icon: "fa-solid fa-table-layout", color: "#51666C" },
              h("span", { class: "gc__table-setting-manage-title" }, "Manage Table Columns")),
            h("div", { slot: "gc__dropdown-content", class: "dropdown" },
              h("div", { class: "gc__table-setting-cols-text" },
                h("gc-icon", { color: "red", name: "fa-regular fa-square-info" }),
                h("gc-h2", { class: "gc__table-setting-cols-title" }, "Manage Table Columns")),
              h("gc-drag-container", { "onGc:drop": this.onDrop, "class-container": `gc__table-setting-cols ${columns.length < 6 ? 'less-cols' : ''}`, "class-daggable": ".draggable-item", group: "table-setting-cols" }, columns.map(col => (h("gc-draggable-item", { "data-col-name": col.name, "data-col-check": `${this.showingColumns[col.name]}`, key: `${this.gcId}_${col.name}`, class: { 'draggable-item': !col.alwaysDisplay } },
                h("div", { key: `${this.gcId}_${col.name}`, class: { 'gc__table-setting-col-item': true, 'disabled': col.alwaysDisplay } },
                  h("gc-icon", { color: "var(--gc-color-secondary-grey)", name: "fa-solid fa-grip-dots-vertical" }),
                  h("gc-checkbox", { disabled: col.alwaysDisplay || false, "gc-name": `${this.gcId}_${col.name}`, label: col.label, checked: col.alwaysDisplay || this.showingColumns[col.name], "onGc:change": e => this.onCheck(e, col.name) }))))))))))));
    }
  }
  render() {
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
    const conditionShowing = this.isExpandable ? this.getTreeData().length > 0 : this.getData().length > 0;
    return (h(Host, { class: { 'is-loading': this.isLoading } },
      this.isLoading && (h("div", { class: "loading-section" },
        h("gc-spinner", null))),
      this.renderSettingColumns(),
      conditionShowing ? (h("div", { style: { border: this.isNoBorderedAll && !this.isStripe ? '0' : '' }, class: {
          'gc__table': true,
          'sortable': this.sortable,
          'paginate': this.paginate,
          'gc__table-no-stripe': !this.isStripe,
          'gc__table-no-border': !this.isBordered,
          'gc__table-loading': this.isLoading,
        } },
        h("div", { class: "table-scroll-container", style: {
            overflow: (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth) || (this.isExpandable && this.totalExpanded === 0) ? 'hidden' : 'auto',
            position: this.showTooltip ? 'static' : 'inherit',
          } },
          this.isExpandable ? this.renderHeaderWithExpandableRows() : this.renderHeader(),
          this.isExpandable ? this.renderBodyWithExpandableRows() : this.renderBody()),
        this.paginate && (h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))) : (this.renderEmptyState())));
  }
  renderEmptyState() {
    if (this.customEmptyState) {
      return h("div", { class: { 'gc__table-loading': this.isLoading }, innerHTML: this.customEmptyState });
    }
    return (h("div", { class: { 'empty-table': true, 'empty-table-no-bordered': this.isNoBorderedEmptyState, 'gc__table-loading': this.isLoading } },
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
    "isNoBorderedAll": {
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
      "attribute": "is-no-bordered-all",
      "reflect": false,
      "defaultValue": "false"
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
    },
    "customEmptyState": {
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
      "attribute": "custom-empty-state",
      "reflect": false
    },
    "isCustomHeader": {
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
      "attribute": "is-custom-header",
      "reflect": false,
      "defaultValue": "false"
    },
    "isNoBorderedEmptyState": {
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
      "attribute": "is-no-bordered-empty-state",
      "reflect": false,
      "defaultValue": "false"
    },
    "maxHeight": {
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
      "attribute": "max-height",
      "reflect": false,
      "defaultValue": "''"
    },
    "isExpandable": {
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
      "attribute": "is-expandable",
      "reflect": false,
      "defaultValue": "false"
    },
    "treeData": {
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
        "text": ""
      },
      "attribute": "tree-data",
      "reflect": false,
      "defaultValue": "[]"
    },
    "loadingGroupIndex": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
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
    "maxWidthInExpandRow": {
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
      "attribute": "max-width-in-expand-row",
      "reflect": false,
      "defaultValue": "''"
    },
    "groupByFields": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
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
    "groupByValue": {
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
      "attribute": "group-by-value",
      "reflect": false,
      "defaultValue": "''"
    },
    "expandedRows": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "hoveredCell": {},
    "isSelectAll": {},
    "showingColumns": {},
    "posColumns": {},
    "showTooltip": {},
    "clickedCell": {},
    "isStopScaleWidth": {},
    "totalExpanded": {},
    "selectedGroupBy": {}
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
    }, {
      "method": "gcTableCollapseChange",
      "name": "gc:table-collapse-change",
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
      "method": "gcTableGroupByChange",
      "name": "gc:table-group-by-change",
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
      "method": "gcTableChildDataChange",
      "name": "gc:table-child-data-change",
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
      "propName": "groupByValue",
      "methodName": "watchGroupByValuePropHandler"
    }, {
      "propName": "expandedRows",
      "methodName": "watchExpandedRowsPropHandler"
    }, {
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
    }, {
      "name": "gc:toggle-tooltip",
      "method": "handleToggleTooltip",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "openExpandableRowsEvent",
      "method": "handleOpenExpandableRowsEvent",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "closeExpandableRowsEvent",
      "method": "handleCloseExpandableRowsEvent",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
