import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcButton {
  /**
   * The class name
   */
  class?: string;
  /**
   * The type name
   */
  type: string;
  /**
   * Is disabled
   */
  disabled?: boolean;
  /**
   * The id
   */
  gcId: string;
  /**
   * Icon name
   */
  icon?: string;
  /**
   * href
   */
  href?: string;
  /**
   * target
   */
  target?: string;
  /**
   * height
   */
  height?: string;
  /**
   * padding text
   */
  paddingText?: string;
  /**
   * Emitted when click button
   */
  gcClick: EventEmitter;
  private getClassNameFromType;
  private getClassName;
  private getColorIcon;
  handleClick(ev: any): void;
  onClick(ev: any): void;
  private renderButton;
  render(): any;
}
