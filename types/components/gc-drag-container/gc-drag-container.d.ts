import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcDragContainer {
  classContainer: string;
  classDaggable: string;
  group: string;
  /**
   * Emitted when having change in drag and drop
   */
  gcDrop: EventEmitter;
  private container;
  componentDidLoad(): void;
  render(): any;
}
