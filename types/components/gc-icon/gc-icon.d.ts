export declare class GcIcon {
  name: string;
  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg' | 'xl' | string;
  color: string;
  svg: string;
  fetchSvg(): Promise<void>;
  componentWillLoad(): Promise<void>;
  private getSize;
  render(): any;
}
