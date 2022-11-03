import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcTextarea {
  /**
   * The class name
   */
  class?: string;
  /**
   * The id
   */
  gcId?: string;
  /**
   * The placeholder
   */
  placeholder?: string;
  /**
   * Is disabled ?
   */
  disabled?: boolean;
  /**
   * The input value
   */
  value?: string;
  /**
   * The name of input
   */
  gcName?: string;
  /**
   * Specifies the visible width of a text area
   */
  cols?: number;
  /**
   * Specifies the visible number of lines in a text area
   */
  rows?: number;
  /**
   * Specifies the maximum number of characters allowed in the text area
   */
  maxlength?: number;
  /**
   * Is error
   */
  isError?: boolean;
  /**
   * Height of textarea
   */
  height?: string;
  /**
   * Emitted when the value has changed.
   */
  gcChange: EventEmitter;
  private onInput;
  render(): any;
}
