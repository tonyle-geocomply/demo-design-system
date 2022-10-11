import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcFormField {
  /**
   * The label name
   */
  label?: string;
  /**
   * The field name
   */
  gcName?: string;
  /**
   * The field id
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
   *  [{
   *    label: 'Shivaji Varma',
   *    value: 'shivaji-varma'
   *  }]
   */
  items: string | [];
  /**
   * Search type
   * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
   */
  search: 'none' | 'initial' | 'contains' | 'managed';
  /**
   * Prefix icon
   */
  prefixIcon: string;
  /**
 * Emitted when the value has changed.
 */
  gcFieldChange: EventEmitter;
  watchPropHandler(newValue: string): void;
  handleChange(evt: any): void;
  render(): any;
}
