import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcSteps {
  element: any;
  activeStep: string;
  oldStep: string;
  /**
   * triggered when the step item is active
   */
  gcStepChange: EventEmitter;
  /**
   * triggered before the step item is active
   */
  gcBeforeStepChange: EventEmitter;
  openEventHandler(event: CustomEvent): void;
  beforeOpenEventHandler(event: CustomEvent): void;
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
