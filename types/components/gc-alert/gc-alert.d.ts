export declare class GcAlert {
  /**
   * The type of alert: info | success | error
   */
  type?: string;
  /**
   * The content of alert
   */
  content?: string;
  private getClassName;
  private getIcon;
  render(): any;
}
