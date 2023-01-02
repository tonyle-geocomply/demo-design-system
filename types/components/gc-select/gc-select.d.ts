import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class GcSelect implements ComponentInterface {
  /**
   * The class name
   */
  class?: string;
  /**
   * The id
   */
  gcId: string;
  /**
   * The input field placeholder.
   */
  placeholder: string;
  /**
   * The input field value.
   */
  value?: string | number;
  multiple: boolean;
  /**
   * The select input size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg';
  /**
   * Search type
   * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
   */
  search: 'none' | 'initial' | 'contains' | 'managed';
  /**
   * The input state.
   * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
   */
  state: 'success' | 'error' | 'warning' | 'default';
  /**
   * If true, required icon is show. Defaults to `false`.
   */
  required: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  readonly: boolean;
  showLoader: boolean;
  isOpen: boolean;
  configAria: any;
  type: string;
  background: string;
  /**
   *  [{
   *    label: 'Shivaji Varma',
   *    value: 'shivaji-varma'
   *  }]
   */
  items: string | [];
  positions: string;
  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  clearable: boolean;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
   */
  debounce: number;
  /**
   * Is error
   */
  isError?: boolean;
  /**
   * Default value
   */
  defaultValue?: string;
  /**
   * Emitted when the value has changed.
   */
  gcChange: EventEmitter;
  /**
   * Emitted when the action button is clicked..
   */
  p4ActionClick: EventEmitter;
  /**
   * Emitted when a keyboard input occurred.
   */
  gcSearch: EventEmitter;
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  setBlur(): Promise<void>;
  protected debounceChanged(): void;
  watchPropHandler(newValue: string): void;
  windowClick(evt: any): void;
  menuItemClick(evt: any): void;
  elm: HTMLElement;
  private nativeInput?;
  private dropdownContentElm?;
  private menuElm?;
  private dropdownContentHeight;
  private dropdownContentWidth;
  hasFocus: boolean;
  searchString: string;
  startSlotHasContent: boolean;
  endSlotHasContent: boolean;
  position: string;
  stateItems: any[];
  selectedColorItem: string;
  selectedDotItem: string;
  textValue: string;
  private displayElement?;
  tagDismissClick(evt: any): void;
  private getValues;
  private addItem;
  private removeItem;
  private selectHandler;
  private blurHandler;
  private focusHandler;
  private closeList;
  private openList;
  private toggleList;
  private keyDownHandler;
  private onInput;
  private hasValue;
  private getItems;
  private getItemByValue;
  private getDisplayValue;
  componentWillLoad(): void;
  fixPosition(): void;
  connectedCallback(): void;
  render(): any;
  private getModeIcon;
  private renderDropdownList;
  private filterItems;
}
