import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcStep {
  protected calculatedHeight: number;
  protected mutationObserver: MutationObserver;
  maxHeight: string;
  get style(): {
    maxHeight: string;
  };
  element: HTMLElement;
  transitioning: boolean;
  isResize: boolean;
  openCount: number;
  /**
   * index of step item from top to bottom
   */
  index: string;
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
  /**
   * Should open in step
   */
  shouldOpen: boolean;
  /**
   * Customize in step opening
   */
  customOpen: boolean;
  stateChanged(value: any): void;
  /**
   * triggered when the step item is opened
   */
  openEvent: EventEmitter;
  /**
   * triggered before the step item is opened
   */
  beforeOpenEvent: EventEmitter;
  /**
   * triggered when the step item is opened
   */
  closeEvent: EventEmitter;
  /**
   * triggered when the content of the step item changes
   */
  contentChanged: EventEmitter;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  recalculateHeight(): void;
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  handleContentChanged(): void;
  handleResize(): void;
  /**
   * close the step item
   */
  closeItem(): Promise<void>;
  /**
   * open the step item
   */
  openItem(): Promise<void>;
  /**
   * before open the step item
   */
  beforeOpenItem(): Promise<void>;
  toggle(): void;
  handleTransitionEnd(): void;
  calculateHeight(): number;
  render(): any;
}
