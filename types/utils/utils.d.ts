import { EventEmitter } from '../stencil-public-runtime';
export declare function format(first: string, middle: string, last: string): string;
export declare const getComponentIndex: () => string;
export declare const isMobile: () => boolean;
export declare const isOutOfViewport: (bounding: DOMRect) => any;
export declare const observeThemeChange: (callback: any) => void;
export declare const isDarkMode: () => boolean;
export declare enum ElementSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
  X_LARGE = "xl",
  XX_LARGE = "xxl",
  XXX_LARGE = "xxxl"
}
export declare function isEventTriggerByElement(event: any, element: any): boolean;
export declare function isEventNotTriggerByElement(event: any, element: any): boolean;
export declare const debounceEvent: (event: EventEmitter, wait: number) => EventEmitter;
export declare const debounce: (func: (...args: any[]) => void, wait?: number) => (...args: any[]) => any;
export declare function loadScriptModule(src: any): Promise<unknown>;
export declare function loadScript(src: any): Promise<unknown>;
export declare const getFromObject: (obj: any, path: any, defaultValue?: any) => any;
export declare const copyClipboard: (content: string, callback?: any) => Promise<unknown>;
export declare const getIconExtension: (fileExtension: string) => string;
export declare const getAcceptTypes: (fileExtension: string) => string;
