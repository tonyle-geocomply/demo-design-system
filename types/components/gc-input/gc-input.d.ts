import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcInput {
  /**
   * The class name
   */
  class?: string;
  /**
   * The id
   */
  gcId?: string;
  /**
   * The input type
   */
  type: string;
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
   * The name of input
   */
  prefixIcon?: string;
  /**
   * Is error
   */
  isError?: boolean;
  /**
   * Emitted when the value has changed.
   */
  gcChange: EventEmitter;
  private onInput;
  render(): any;
}
