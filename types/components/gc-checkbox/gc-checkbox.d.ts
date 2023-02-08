import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcCheckbox {
  /**
   * The class name
   */
  class?: string;
  /**
   * The id
   */
  gcId: string;
  /**
   * The name of checkbox
   */
  gcName: string;
  /**
   * The label of checkbox
   */
  label?: string;
  /**
   * Is checked ?
   */
  checked: boolean;
  /**
   * Is disabled ?
   */
  disabled: boolean;
  /**
   * Emitted when the value has changed.
   */
  gcChange: EventEmitter;
  private onInput;
  render(): any;
}
