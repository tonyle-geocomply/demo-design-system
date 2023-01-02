import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const gcMenuItemCss = ":host{display:block;border-bottom:1px solid var(--gc-color-second-grey);font-weight:400}:host(*:last-child) .menu-item-white{border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(*:first-child) .menu-item-white{border-top-right-radius:6px;border-top-left-radius:6px}:host(*:first-child) .menu-item-white:hover{border-top-right-radius:0px;border-top-left-radius:0px}.menu-item{cursor:pointer;padding:14px;box-sizing:border-box;display:flex;align-items:center;color:var(--gc-color-text-grey);outline:none}.menu-item-white{background:white}.menu-item .item-section{display:flex;align-items:center}.menu-item .slot-main{display:block;flex:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:inherit}.menu-item:hover,.menu-item.has-focus:not(.active){background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end,.menu-item.has-focus:not(.active) .slot-end{color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end{color:var(--gc-color-contrast-white)}.menu-item.active,.menu-item.selected{background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item.disabled{cursor:not-allowed;color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled);opacity:0.2}.menu-item.disabled.menu-item-white.active,.menu-item.disabled.menu-item-white{background-color:white}.menu-item.disabled:hover,.menu-item.disabled.has-focus:not(.active){color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled)}.menu-item.disabled.active,.menu-item.disabled.selected{color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled)}.menu-item:not(.start-slot-has-content) .slot-start{display:none}.menu-item:not(.end-slot-has-content) .slot-end{display:none}:host:last-child{border-bottom:0px}.dot{border-radius:50%;background:white;width:13px;height:13px;margin-right:8px;display:inline-block;vertical-align:middle;margin-top:-2px}";

const GcMenuItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.goatMenuItemClick = createEvent(this, "gc:menu-item-click", 7);
    this.tabindex = 1;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * Menu item selection state.
     */
    this.selected = false;
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.hasFocus = false;
    this.isActive = false;
    this.isHover = false;
    this.clickHandler = event => {
      if (!this.disabled) {
        this.goatMenuItemClick.emit({
          value: this.value || '',
          color: this.color || '',
          label: this.label || '',
          dot: this.dot || '',
        });
      }
      else {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
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
    this.mouseEnterHandler = () => {
      this.isHover = true;
    };
    this.mouseLeaveHandler = () => {
      this.isHover = false;
    };
    this.keyDownHandler = evt => {
      if (evt.key == ' ') {
        evt.preventDefault();
        this.isActive = true;
        this.clickHandler(evt);
      }
    };
    this.getStyles = () => {
      if (this.color) {
        return {
          color: this.disabled ? 'var(--gc-color-disabled)' : this.isHover ? 'var(--gc-color-contrast-white)' : this.color,
        };
      }
      return {};
    };
    this.render = () => {
      return (h(Host, { active: this.isActive, "has-focus": this.hasFocus }, h("div", { id: this.gcId, ref: el => (this.nativeInput = el), class: {
          'menu-item': true,
          'selected': this.selected,
          'active': this.isActive,
          'disabled': this.disabled,
          'has-focus': this.hasFocus,
          'start-slot-has-content': this.startSlotHasContent,
          'end-slot-has-content': this.endSlotHasContent,
          'menu-item-white': this.background === 'white',
          [this.class]: this.class ? true : false,
        }, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, onMouseEnter: this.mouseEnterHandler, onMouseLeave: this.mouseLeaveHandler, "aria-disabled": this.disabled }, h("div", { style: this.getStyles(), class: "item-section slot-main" }, this.dot && h("div", { style: { background: this.dot }, class: "dot" }), h("slot", null)))));
    };
  }
  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && evt.key == ' ')
      this.isActive = false;
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }
  get elm() { return this; }
  static get style() { return gcMenuItemCss; }
}, [1, "gc-menu-item", {
    "class": [1],
    "gcId": [1, "gc-id"],
    "color": [1],
    "value": [1032],
    "disabled": [516],
    "selected": [516],
    "label": [1],
    "dot": [1],
    "background": [1],
    "startSlotHasContent": [32],
    "endSlotHasContent": [32],
    "hasFocus": [32],
    "isActive": [32],
    "isHover": [32],
    "setFocus": [64],
    "setBlur": [64]
  }, [[9, "mouseup", "windowMouseUp"], [8, "keyup", "windowKeyUp"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcMenuItem);
      }
      break;
  } });
}

export { GcMenuItem as G, defineCustomElement as d };
