import { ComponentInterface } from '../../stencil-public-runtime';
export declare class GcMenu implements ComponentInterface {
  elm: HTMLElement;
  showLoader: boolean;
  value?: string | number;
  empty: boolean;
  emptyState: any;
  internalEmptyState: any;
  parseEmptyState(): void;
  handleKeyDown(evt: KeyboardEvent): void;
  /**
   * Sets focus on first menu item. Use this method instead of the global
   * `element.focus()`.
   */
  setFocus(): Promise<void>;
  private getFirstItem;
  private focusNextItem;
  private focusPreviousItem;
  componentDidLoad(): void;
  private renderEmptyState;
  render(): any;
}
