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
  /**
   * Custom how to display
   */
  isCustom?: boolean;
  maxFileSize?: number;
  dragging: boolean;
  progress: number;
  fileName: string;
  disableState: boolean;
  errorState: string;
  gcUploadedFile: EventEmitter;
  gcUploadProgress: EventEmitter;
  gcUploadCompleted: EventEmitter;
  gcUploadError: EventEmitter;
  private getIcon;
  private getAcceptFiles;
  componentDidLoad(): void;
  handleChange(e: any): void;
  render(): any;
}
