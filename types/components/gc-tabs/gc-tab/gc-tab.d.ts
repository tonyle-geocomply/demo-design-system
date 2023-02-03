import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
export declare class GcTab implements ComponentInterface {
  gid: string;
  /**
   * Button selection state.
   */
  selected: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  value: string;
  target: string;
  /**
   * Show loader.
   */
  showLoader: boolean;
  /**
   * The icon of tab.
   */
  icon?: string;
  /**
   * On click of tab, a CustomEvent 'gc:tab-click' will be triggered.
   */
  gcTabClick: EventEmitter;
  hasFocus: boolean;
  isActive: boolean;
  slotHasContent: boolean;
  elm: any;
  private tabindex?;
  private nativeInput?;
  windowMouseUp(): void;
  windowKeyUp(evt: any): void;
  setFocus(): Promise<void>;
  triggerClick(): Promise<void>;
  private clickHandler;
  private blurHandler;
  private focusHandler;
  private mouseDownHandler;
  private keyDownHandler;
  componentWillLoad(): void;
  render(): any;
}
