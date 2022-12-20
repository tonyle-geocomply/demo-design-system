import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Table
 * @description A configurable component for displaying tabular data.
 * @img /assets/img/table.png
 */
export declare class GcTable {
  elm: HTMLElement;
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
  columns: string | any[];
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
  data: string | any[];
  selectionType: 'checkbox' | undefined;
  selectedRowKeys: string[];
  gcId: string;
  keyField: string;
  serverSide: boolean;
  sortable: boolean;
  sortBy: string;
  sortOrder: 'asc' | 'desc' | '';
  paginate: boolean;
  page: number;
  pageSize: number;
  totalItems: number;
  emptyState: any;
  settingColumns?: boolean;
  customRows?: string[];
  customRowsBackground?: string;
  customRowsBorder?: string;
  isStripe?: boolean;
  isBordered?: boolean;
  isNoBorderedAll?: boolean;
  background?: string;
  isLoading?: false;
  settingTable?: any;
  customEmptyState?: string;
  isCustomHeader: boolean;
  isNoBorderedEmptyState: boolean;
  maxHeight: string;
  isExpandable: boolean;
  treeData: string | any[];
  loadingGroupIndex: any[];
  maxWidthInExpandRow: string;
  groupByFields: any[];
  groupByValue: string;
  expandedRows: any[];
  private hoveredCell;
  private isSelectAll;
  private showingColumns;
  private posColumns;
  private showTooltip;
  private clickedCell;
  private isStopScaleWidth;
  private totalExpanded;
  private selectedGroupBy;
  gcCellClick: EventEmitter;
  gcSelectChange: EventEmitter;
  gcSort: EventEmitter;
  gcChangePage: EventEmitter;
  gcClearEmptyState: EventEmitter;
  gcTableSettingChange: EventEmitter;
  gcTableCollapseChange: EventEmitter;
  gcTableGroupByChange: EventEmitter;
  watchGroupByValuePropHandler(newValue: string): void;
  watchExpandedRowsPropHandler(expandedRows: any): void;
  watchColumnsPropHandler(newValue: any): void;
  watchSettingTablePropHandler(newSetting: any): void;
  handleChangePage(ev: any): void;
  handleToggleTooltip(ev: any): void;
  handleResize(ev: any): void;
  handleOpenExpandableRowsEvent(evt: any): void;
  handleCloseExpandableRowsEvent(evt: any): void;
  onSelectAllClick: () => void;
  onRowSelectClick: (row: any) => void;
  onCellMouseOver: (row: any, column: any) => void;
  onCellMouseOut: () => void;
  onSelectChange(selectedRowKeys: any): void;
  onCellClick(row: any, column: any): void;
  onCheck(e: any, name: string): void;
  onClearEmptyState(): void;
  onSelectGroupByMenu(field: any): void;
  onDrop: (e: any) => void;
  renderHeader(): any;
  renderHeaderWithExpandableRows(): any;
  renderActions(row: any, column: any, conditionToDisplayActions: any): any;
  renderColumnContent(row: any, column: any, conditionToDisplayActions: any): any;
  renderBody(): any;
  renderBodyWithExpandableRows(): any;
  getTotalItems(): any;
  private getData;
  private getTreeData;
  private getColumns;
  componentWillLoad(): void;
  renderPagination(): any;
  renderSettingColumns(): any;
  render(): any;
  private renderEmptyState;
}
