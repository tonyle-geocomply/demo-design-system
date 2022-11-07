import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class GcTabs implements ComponentInterface {
  elm: any;
  tabClick(evt: any): void;
  /**
   * On click of tab, a CustomEvent 'gc:tab-click' will be triggered.
   */
  gcTabChange: EventEmitter;
  selectTab(target: any): void;
  getTabs(): any;
  getTabPanels(): any;
  tabsHaveTarget(): any;
  componentDidLoad(): void;
  render(): any;
}
