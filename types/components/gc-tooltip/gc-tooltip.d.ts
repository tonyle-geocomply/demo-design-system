import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcTooltip {
  elm: HTMLElement;
  /**
   * Is Copy Text?
   */
  isCopyText?: any;
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
  gcToggleTooltip: EventEmitter;
  private showTooltip;
  private isCopied;
  private getIsCopyText;
  windowClick(evt: any): boolean;
  renderCutText(): any;
  onToggleTooltip(): void;
  render(): any;
}
