export declare class GcSteps {
  element: any;
  openEventHandler(event: CustomEvent): void;
  /**
   * Open an step item
   * @param index
   */
  open(index: number): Promise<void>;
  /**
   * close an step item
   * @param index
   */
  close(index: number): Promise<void>;
  getStepItem(index: number): any;
  render(): any;
}
