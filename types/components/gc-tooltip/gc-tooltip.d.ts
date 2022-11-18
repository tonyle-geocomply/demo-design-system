import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcTooltip {
  elm: HTMLElement;
  /**
   * Is Copy Text?
   */
  isCopyText?: any;
  /**
   * Is Long Text?
   */
  isLongText: boolean;
  /**
   * The content
   */
  content?: any;
  /**
   * Is Toggle?
   */
  isToggle: boolean;
  /**
   * Right position
   */
  rightPos: string;
  /**
   * Top position
   */
  topPos: string;
  /**
   * Is Popover?
   */
  isPopover: boolean;
  gcToggleTooltip: EventEmitter;
  private showTooltip;
  private isCopied;
  private containerElm?;
  private dropdownElm?;
  private popperInstance;
  private getIsCopyText;
  windowClick(evt: any): boolean;
  renderCutText(): any;
  onToggleTooltip(): void;
  componentDidLoad(): void;
  render(): any;
}
