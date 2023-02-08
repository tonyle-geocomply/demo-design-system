import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcMenuItem {
  private nativeInput?;
  private tabindex?;
  /**
   * The class name
   */
  class?: string;
  /**
   * The id
   */
  gcId: string;
  /**
   * The color of text
   */
  color?: string;
  /**
   * The menu item value.
   */
  value?: string | number | null;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  /**
   * Menu item selection state.
   */
  selected: boolean;
  /**
   * The label
  */
  label?: string;
  /**
   * The color of dot
   */
  dot?: string;
  /**
  * The background
  */
  background?: string;
  /**
   * Emitted when the menu item is clicked.
   */
  gcMenuItemClick: EventEmitter;
  startSlotHasContent: boolean;
  endSlotHasContent: boolean;
  setFocus(): Promise<void>;
  setBlur(): Promise<void>;
  windowMouseUp(): void;
  windowKeyUp(evt: any): void;
  hasFocus: boolean;
  isActive: boolean;
  isHover: boolean;
  elm: HTMLElement;
  private clickHandler;
  private blurHandler;
  private focusHandler;
  private mouseDownHandler;
  private mouseEnterHandler;
  private mouseLeaveHandler;
  private keyDownHandler;
  private getStyles;
  componentWillLoad(): void;
  render: () => any;
}
