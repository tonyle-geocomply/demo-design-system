import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcStep {
  protected calculatedHeight: number;
  protected mutationObserver: MutationObserver;
  get style(): {
    height: string;
  };
  element: HTMLElement;
  transitioning: boolean;
  /**
   * index of step item from top to bottom
   */
  index: number;
  /**
   * step item is open or opening (css transition)
   */
  open: boolean;
  /**
   * The mutation observer config to listen for content changes in the step item
   */
  mutationObserverConfig: {
    childList: boolean;
    subtree: boolean;
  };
  /**
   * The icon in step
   */
  icon: string;
  /**
   * The status in step
   */
  status: string;
  /**
   * Disabled in step
   */
  disabled: boolean;
  stateChanged(): void;
  /**
   * triggered when the step item is opened
   */
  openEvent: EventEmitter;
  /**
   * triggered when the content of the step item changes
   */
  contentChanged: EventEmitter;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  recalculateHeight(): void;
  /**
   * close the step item
   */
  closeItem(): Promise<void>;
  /**
   * open the step item
   */
  openItem(): Promise<void>;
  toggle(): void;
  handleTransitionEnd(): void;
  calculateHeight(): number;
  render(): any;
}
