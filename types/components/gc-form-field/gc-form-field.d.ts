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
   * Error text
   */
  errorText: string;
  /**
   * Info text
   */
  infoText: string;
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
   * Height of textarea
   */
  height?: string;
  /**
   * Default value
   */
  defaultValue?: string;
  /**
   * Resize in textarea
   */
  resize?: string;
  /**
   * Is error
   */
  isError: boolean;
  /**
   * Emitted when the value has changed.
   */
  gcFieldChange: EventEmitter;
  handleSearchSelect(evt: any): void;
  handleChange(evt: any): void;
  renderField(): any;
  render(): any;
}
