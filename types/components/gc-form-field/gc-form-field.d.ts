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
  render(): any;
}
