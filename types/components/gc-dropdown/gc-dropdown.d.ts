import { ComponentInterface } from '../../stencil-public-runtime';
export declare class GcDropdown implements ComponentInterface {
  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg';
  isOpen: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  positions: string;
  items: any[];
  trigger: 'click' | 'hover';
  windowClick(evt: any): void;
  setFocus(elm?: HTMLElement): Promise<void>;
  listenMenuItemClick(evt: any): void;
  listenClick(evt: any): void;
  listenKeyDown(evt: KeyboardEvent): void;
  elm: HTMLElement;
  hasFocus: boolean;
  position: string;
  private dropdownContentHeight;
  private dropdownContentWidth;
  private closeList;
  private openList;
  componentWillLoad(): void;
  fixPosition(): void;
  private toggleList;
  private blurHandler;
  private focusHandler;
  private keyDownHandler;
  private mouseEnterHandler;
  private mouseLeaveHandler;
  private getMenuElement;
  renderItems(): any;
  render(): any;
}
