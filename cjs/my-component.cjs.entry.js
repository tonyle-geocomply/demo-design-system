'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2351688e.js');
const utils = require('./utils-ec7ae488.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return utils.format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
