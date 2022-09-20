import { r as registerInstance, h } from './index-592ba462.js';

const gcButtonCss = "button{padding:0 30px;height:41px;border-radius:var(--border-radius-btn);box-shadow:none;border:0px;font-size:var(--gc-font-size)}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:var( --gc-color-primary);color:var(--gc-color-contrast-white)}button.gc__btn--danger{background:var(--gc-color-danger);color:var(--gc-color-contrast-white)}button.gc__btn--secondary{background:#E8ECF0;color:#35383D;border:1px solid var(--gc-color-second-grey)}";

const GcButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The type name
     */
    this.type = 'primary';
  }
  getClassNameFromType() {
    return `gc__btn--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.disabled ? 'disabled' : ''} ${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
  }
  render() {
    return (h("button", { class: this.getClassName() }, h("slot", null)));
  }
};
GcButton.style = gcButtonCss;

export { GcButton as gc_button };
