import { r as registerInstance, h } from './index-592ba462.js';

const typographyCss = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey)}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}";

const GcH2 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("h3", { class: "gc-h3" }, h("slot", null)));
  }
};
GcH2.style = typographyCss;

export { GcH2 as gc_h3 };
