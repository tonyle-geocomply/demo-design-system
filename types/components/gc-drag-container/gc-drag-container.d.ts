import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcDragContainer {
  classContainer: string;
  classDraggable: string;
  group: string;
  isSwap: boolean;
  /**
   * Emitted when having change in drag and drop
   */
  gcDrop: EventEmitter;
  private container;
  private sortable;
  componentDidLoad(): void;
  handleUpdate(evt: any): void;
  render(): any;
}
