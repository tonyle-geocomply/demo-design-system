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
   * Emitted when the menu item is clicked.
   */
  goatMenuItemClick: EventEmitter;
  startSlotHasContent: boolean;
  endSlotHasContent: boolean;
  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  setBlur(): Promise<void>;
  windowMouseUp(): void;
  windowKeyUp(evt: any): void;
  hasFocus: boolean;
  isActive: boolean;
  elm: HTMLElement;
  private clickHandler;
  private blurHandler;
  private focusHandler;
  private mouseDownHandler;
  private keyDownHandler;
  componentWillLoad(): void;
  render: () => any;
}
