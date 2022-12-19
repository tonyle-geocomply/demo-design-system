export declare class GcLink {
  /**
   * The class name
   */
  class?: string;
  /**
   * The id
   */
  gcId?: string;
  /**
   * Go to link
   */
  gcTo?: string;
  /**
   * Icon name
   */
  icon?: string;
  /**
   * The color of link
   */
  color: string;
  /**
   * target link
   */
  target?: string;
  /**
   * Size of link
   */
  size?: string;
  /**
 * Stop propagation
 */
  stopPropagation: boolean;
  private getClassName;
  private onClickIcon;
  private onClick;
  render(): any;
}
