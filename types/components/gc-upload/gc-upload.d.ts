import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcUpload {
  private container;
  /**
   * Width of upload
   */
  width?: string;
  /**
   * Accept type
   */
  acceptType?: string;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Option
   */
  option?: {};
  dragging: boolean;
  progress: number;
  fileName: string;
  disableState: boolean;
  gcUploadedFile: EventEmitter;
  gcUploadProgress: EventEmitter;
  gcUploadCompleted: EventEmitter;
  private getIcon;
  private getAcceptFiles;
  componentDidLoad(): void;
  render(): any;
}
