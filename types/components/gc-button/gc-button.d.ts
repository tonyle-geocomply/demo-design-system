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
  private getClassNameFromType;
  private getClassName;
  private getColorIcon;
  handleClick(ev: any): void;
  render(): any;
}
