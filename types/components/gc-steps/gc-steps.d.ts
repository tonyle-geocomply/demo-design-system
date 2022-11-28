import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcSteps {
  element: any;
  activeStep: string;
  activeStatus: string;
  oldStep: string;
  activeStepState: boolean;
  customOpen: boolean;
  /**
   * triggered when the step item is active
   */
  gcStepChange: EventEmitter;
  /**
   * triggered before the step item is active
   */
  gcBeforeStepChange: EventEmitter;
  openEventHandler(event: CustomEvent): boolean;
  closeEventHandler(event: CustomEvent): void;
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
  componentWillLoad(): void;
  render(): any;
}
