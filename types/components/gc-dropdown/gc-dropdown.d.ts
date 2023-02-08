import { ComponentInterface } from '../../stencil-public-runtime';
export declare class GcDropdown implements ComponentInterface {
  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg';
  isOpen: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  /**
   * Positions
   *    | 'auto'
        | 'auto-left'
        | 'auto-right'
        | 'top'
        | 'top-left'
        | 'top-right'
        | 'bottom'
        | 'bottom-left'
        | 'bottom-right'
        | 'right'
        | 'right-start'
        | 'right-end'
        | 'left'
        | 'left-start'
        | 'left-end'
  */
  positions: string;
  items: any[];
  trigger: 'click' | 'hover';
  allowForceClose: boolean;
  suffixArrow: boolean;
  private containerElm?;
  private dropdownElm?;
  private popperInstance;
  elm: HTMLElement;
  hasFocus: boolean;
  position: any;
  isToggle: boolean;
  getPosition(position: any): any;
  componentWillLoad(): void;
  renderItems(): any;
  toggle(): void;
  windowClick(evt: any): void;
  componentDidLoad(): void;
  handleClick(): void;
  handleHover(): void;
  handleClickDropdown(): void;
  render(): any;
}
