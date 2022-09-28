/* GcWebDesignSystem custom elements */
export { GcButton as GcButton } from '../types/components/gc-button/gc-button';
export { GcCheckbox as GcCheckbox } from '../types/components/gc-checkbox/gc-checkbox';
export { GcFormField as GcFormField } from '../types/components/gc-form-field/gc-form-field';
export { GcH1 as GcH1 } from '../types/components/gc-h1/gc-h1';
export { GcH2 as GcH2 } from '../types/components/gc-h2/gc-h2';
export { GcH3 as GcH3 } from '../types/components/gc-h3/gc-h3';
export { GcIcon as GcIcon } from '../types/components/gc-icon/gc-icon';
export { GcInput as GcInput } from '../types/components/gc-input/gc-input';
export { GcLabel as GcLabel } from '../types/components/gc-label/gc-label';
export { GcMenu as GcMenu } from '../types/components/gc-menu/gc-menu';
export { GcMenuItem as GcMenuItem } from '../types/components/gc-menu-item/gc-menu-item';
export { GcOl as GcOl } from '../types/components/gc-ol/gc-ol';
export { GcSelect as GcSelect } from '../types/components/gc-select/gc-select';
export { GcTag as GcTag } from '../types/components/gc-tag/gc-tag';
export { GcUl as GcUl } from '../types/components/gc-ul/gc-ul';
export { MyComponent as MyComponent } from '../types/components/my-component/my-component';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
