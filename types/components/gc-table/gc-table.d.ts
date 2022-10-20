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
  hiddenColumns?: string[];
  customRows?: string[];
  customRowsBackground?: string;
  customRowsBorder?: string;
  isStripe?: boolean;
  isBordered?: boolean;
  background?: string;
  isLoading?: false;
  settingTable?: any;
  private hoveredCell;
  private isSelectAll;
  private showingColumns;
  private posColumns;
  gcCellClick: EventEmitter;
  gcSelectChange: EventEmitter;
  gcSort: EventEmitter;
  gcChangePage: EventEmitter;
  gcClearEmptyState: EventEmitter;
  gcTableSettingChange: EventEmitter;
  watchColumnsPropHandler(newValue: any): void;
  watchHiddenColumnsPropHandler(hiddenCols: string[]): void;
  handleChangePage(ev: any): void;
  onSelectAllClick: () => void;
  onRowSelectClick: (row: any) => void;
  onCellMouseOver: (row: any, column: any) => void;
  onSelectChange(selectedRowKeys: any): void;
  onCellClick(row: any, col: any): void;
  onCheck(e: any, name: string): void;
  onClearEmptyState(): void;
  onDrop: (e: any) => void;
  renderHeader(): any;
  renderBody(): any;
  getTotalItems(): any;
  private getData;
  private getColumns;
  componentWillLoad(): void;
  renderPagination(): any;
  renderSettingColumns(): any;
  render(): any;
  private renderEmptyState;
}
