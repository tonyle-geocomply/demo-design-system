import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gc-icon2.js';

const gcTabCss = ".sc-gc-tab-h{flex:1;--z-index-tab:999}.gc__tab.sc-gc-tab{position:relative;display:flex;align-items:center;justify-content:center;height:50px}.gc__tab.sc-gc-tab .native-button.sc-gc-tab{height:100%;cursor:pointer;z-index:var(--z-index-tab);background:transparent;padding:0;border:none;outline:none;width:100%;display:flex;align-items:center;justify-content:center;color:#727272;font-weight:600;font-size:13px;line-height:23px;border-right:1px solid var(--gc-color-second-grey);border-bottom:1px solid var(--gc-color-second-grey)}.sc-gc-tab-h:last-child .native-button.sc-gc-tab{border-right:0;border-radius:0px 6px 0 0}.sc-gc-tab-h:first-child .gc__tab-background.sc-gc-tab{border-radius:6px 0 0}.sc-gc-tab-h:last-child .gc__tab-background.sc-gc-tab{border-radius:0px 6px 0 0}.sc-gc-tab-h:first-child .native-button.sc-gc-tab{border-right:0;border-radius:6px 0 0}.gc__tab.sc-gc-tab .gc__tab-background.sc-gc-tab{display:block;position:absolute;width:100%;height:100%;pointer-events:none}.gc__tab.disabled.sc-gc-tab .native-button.sc-gc-tab{cursor:not-allowed}.gc__tab.has-content.sc-gc-tab .slot-container.sc-gc-tab{display:flex}.gc__tab.sc-gc-tab .gc__tab-background.sc-gc-tab{background:var(--gc-color-light-grey)}.gc__tab.selected.sc-gc-tab .native-button.sc-gc-tab{color:#FFFFFF;background:var(--gc-color-second-blue);border:none}.gc__tab.selected.sc-gc-tab .native-button.sc-gc-tab:after{content:'';position:absolute;top:100%;left:50%;margin-left:-8px;width:0;height:0;border-top:solid 4px var(--gc-color-second-blue);border-left:solid 8px transparent;border-right:solid 8px transparent}.gc__tab.disabled.sc-gc-tab .native-button.sc-gc-tab{color:#727272}";

const GcTab$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcTabClick = createEvent(this, "gc:tab-click", 7);
    /**
     * Button selection state.
     */
    this.selected = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * Show loader.
     */
    this.showLoader = false;
    this.hasFocus = false;
    this.isActive = false;
    this.slotHasContent = false;
    this.clickHandler = () => {
      this.gcTabClick.emit({
        value: this.value,
        target: this.target,
      });
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.mouseDownHandler = () => {
      this.isActive = true;
    };
    this.keyDownHandler = evt => {
      if (evt.key == ' ') {
        this.isActive = true;
        this.clickHandler();
      }
    };
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && evt.key === ' ')
      this.isActive = false;
  }
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  async triggerClick() {
    if (this.nativeInput) {
      this.nativeInput.click();
    }
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // gc-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.slotHasContent = this.elm.hasChildNodes();
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, active: this.isActive }, h("div", { class: {
        'gc__tab': true,
        'disabled': this.disabled,
        'selected': this.selected,
        'has-focus': this.hasFocus,
        'active': this.isActive,
        'has-content': this.slotHasContent,
        'show-loader': this.showLoader,
      } }, h("div", { class: "gc__tab-background" }), h("button", { class: "native-button", tabindex: this.tabindex, ref: input => (this.nativeInput = input), onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, disabled: this.disabled, "aria-disabled": (this.disabled || this.showLoader) + '' }, h("div", { class: "gc__tab-content" }, h("div", { class: "slot-container" }, this.icon && (h("span", { style: { marginRight: '8px' } }, h("gc-icon", { name: this.icon, size: "sm" }))), h("slot", null)))))));
  }
  get elm() { return this; }
  static get style() { return gcTabCss; }
}, [6, "gc-tab", {
    "selected": [516],
    "disabled": [516],
    "value": [1],
    "target": [1],
    "showLoader": [4, "show-loader"],
    "icon": [1],
    "hasFocus": [32],
    "isActive": [32],
    "slotHasContent": [32],
    "setFocus": [64],
    "triggerClick": [64]
  }, [[9, "mouseup", "windowMouseUp"], [8, "keyup", "windowKeyUp"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-tab", "gc-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTab$1);
      }
      break;
    case "gc-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GcTab = GcTab$1;
const defineCustomElement = defineCustomElement$1;

export { GcTab, defineCustomElement };
