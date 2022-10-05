import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcPagination {
  /**
   * The page size
   */
  pageSize: number;
  /**
   * The page size
   */
  activePage: number;
  /**
   * The total
   */
  total: number;
  /**
   * Emitted when the value has changed.
   */
  gcChangePage: EventEmitter;
  private onChange;
  private getMaxPage;
  private renderPagination;
  render(): any;
}
