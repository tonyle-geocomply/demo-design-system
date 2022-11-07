import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class GcTabsList implements ComponentInterface {
  variant: 'line' | 'contained';
  managed: boolean;
  elm: any;
  tabClick(evt: any): void;
  deselectAllTabs(): void;
  render(): any;
}
