import { EventEmitter } from '../../../stencil-public-runtime';
export declare class GcCellExpandable {
  protected calculatedHeight: number;
  protected mutationObserver: MutationObserver;
  maxHeight: string;
  fieldName: string;
  value: string;
  total: number;
  numberOfEntryPerPage: number;
  maxWidth: string;
  get style(): {
    maxHeight: string;
  };
  element: HTMLElement;
  transitioning: boolean;
  isResize: boolean;
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
   * The tooltip message
   */
  tooltipMessage: string;
  /**
   * The total text
   */
  totalText: string;
  stateChanged(value: any): void;
  /**
   * triggered when the step item is opened
   */
  openExpandableRowsEvent: EventEmitter;
  /**
   * triggered when the step item is opened
   */
  closeExpandableRowsEvent: EventEmitter;
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
  toggle(): void;
  handleTransitionEnd(): void;
  calculateHeight(): number;
  render(): any;
}
