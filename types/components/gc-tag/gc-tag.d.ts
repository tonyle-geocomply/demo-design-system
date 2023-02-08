export declare class GcTag {
  /**
   * The class name
   */
  class?: string;
  /**
   * The id
   */
  gcId: string;
  /**
   * The type name
   */
  type: string;
  /**
   * The width of badge
   */
  width: string;
  /**
   * The width of badge
   */
  height: string;
  /**
   * The background of badge
   */
  background: string;
  /**
   * The color of badge
   */
  color: string;
  /**
   * The border width of badge
   */
  borderWidth: string;
  /**
   * The border color of badge
   */
  borderColor: string;
  /**
   * The border radius of badge
   */
  borderRadius: string;
  /**
 * The margin of badge
 */
  margin: string;
  private getClassNameFromType;
  private getClassName;
  private getStyle;
  render(): any;
}
