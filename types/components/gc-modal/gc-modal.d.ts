import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcModal {
  /**
   * Is open?
   */
  open: boolean;
  /**
  * Width of modal
  */
  width: string;
  /**
   * Is transparent?
   */
  transparent: boolean;
  /**
   * Is custom content?
   */
  isCustomContent: boolean;
  gcModalOpen: EventEmitter;
  onOpen(isOpen: any): void;
  render(): any;
}
