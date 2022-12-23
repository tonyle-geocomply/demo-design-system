'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-76b0c208.js');

const gcAlertCss = ".gc__alert{width:fit-content;padding:12px;border-radius:8px}.gc__alert.gc__alert-info{background-color:#e6f4ff;border:1px solid var(--gc-color-primary);color:var(--gc-color-primary)}.gc__alert.gc__alert-error{background-color:var(--gc-color-light-red);border:1px solid var(--gc-color-red);color:var(--gc-color-red)}.gc__alert.gc__alert-success{background-color:rgba(21, 191, 33, 0.05);border:1px solid var(--gc-color-green);color:var(--gc-color-green)}.gc__alert-message{display:flex;align-items:center}.gc__alert-content{margin-left:12px}";

const GcAlert = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    /**
     * The type of alert: info | success | error
     */
    this.type = 'info';
  }
  getClassName() {
    return this.type ? `gc__alert gc__alert-${this.type}` : 'gc__alert';
  }
  getIcon() {
    switch (this.type) {
      case 'error':
        return 'fa-regular fa-circle-exclamation';
      case 'success':
        return 'fa-light fa-thumbs-up';
      default:
        return 'fa-regular fa-square-info';
    }
  }
  render() {
    return (index$1.h("div", { class: this.getClassName() }, index$1.h("div", { class: "gc__alert-message" }, index$1.h("gc-icon", { name: this.getIcon() }), index$1.h("div", { class: "gc__alert-content" }, this.content)), index$1.h("slot", null)));
  }
};
GcAlert.style = gcAlertCss;

const gcButtonCss = "button{padding:0 15px;height:41px;border-radius:var(--border-radius-btn);box-shadow:none;border:0px;font-size:var(--gc-font-size);cursor:pointer;font-weight:500}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:var( --gc-color-primary);color:var(--gc-color-contrast-white)}button.gc__btn--danger{background:var(--gc-color-danger);color:var(--gc-color-contrast-white)}button.gc__btn--secondary{background:#E8ECF0;color:#35383D}button.gc__btn--closed{background:var(--gc-color-third-grey);color:var(--gc-color-contrast-white)}button>.gc__button-text{line-height:41px}button>.gc__button-icon{vertical-align:middle;margin-right:8px}";

const GcButton = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcClick = index$1.createEvent(this, "gc:click", 7);
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
  getColorIcon() {
    if (this.type === 'secondary') {
      return 'var(--gc-color-text-grey)';
    }
    return 'var(--gc-color-contrast-white)';
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (this.href) {
      if (this.target) {
        window.open(this.href, this.target);
      }
      else {
        window.location.href = this.href;
      }
    }
  }
  onClick(ev) {
    if (this.disabled || this.href) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.gcClick.emit(ev);
  }
  renderButton() {
    return (index$1.h("button", { style: { height: this.height, padding: this.paddingText ? `0 ${this.paddingText}` : undefined }, onClick: e => this.onClick(e), class: this.getClassName(), id: this.gcId }, this.icon && (index$1.h("span", { class: "gc__button-icon" }, index$1.h("gc-icon", { color: this.getColorIcon(), name: this.icon, size: "1rem" }))), index$1.h("span", { style: { lineHeight: this.height }, class: "gc__button-text" }, index$1.h("slot", null))));
  }
  render() {
    if (this.href) {
      return (index$1.h("a", { href: this.href, target: this.target }, this.renderButton()));
    }
    return this.renderButton();
  }
};
GcButton.style = gcButtonCss;

const gcCellExpandableCss = ".is-loading.sc-gc-cell-expandable-h .gc__steps-section.sc-gc-cell-expandable{position:relative;width:100vw;opacity:0.3}.gc__steps-section.sc-gc-cell-expandable{overflow:hidden;background:white}.gc__steps-section.open.sc-gc-cell-expandable{overflow:unset}.gc__steps-section.sc-gc-cell-expandable div.sc-gc-cell-expandable{border-left:1px solid #DAE1E8}.gc__step-item-title.sc-gc-cell-expandable{display:flex;align-items:center;padding-left:12px;position:sticky;left:0}.gc__step-item-icon.sc-gc-cell-expandable{cursor:pointer;border-radius:50%;border-width:1px;border-style:solid;border-color:#DAE1E8;width:34px;height:34px;transition:transform .5s}.gc__step-item-icon.sc-gc-cell-expandable>gc-icon.sc-gc-cell-expandable{display:flex;align-items:center;justify-content:center;width:-moz-available;width:-webkit-fill-available;width:fill-available;height:34px;position:relative}.gc__step-item-title--content.sc-gc-cell-expandable{margin-left:14px;display:flex;align-items:center}.gc__step-item-title--entry.sc-gc-cell-expandable{margin-left:auto}.transitioning.sc-gc-cell-expandable{transition:max-height .35s ease}header.gc__head.sc-gc-cell-expandable{border-bottom:1px solid var(--gc-color-second-grey);height:60px;display:flex}header.gc__head-opacity.sc-gc-cell-expandable{opacity:0.5;cursor:not-allowed}.transitioning-rotate.sc-gc-cell-expandable{transform:rotate(-180deg)}header.gc__head.sc-gc-cell-expandable hr.sc-gc-cell-expandable{border-top:1px solid var(--gc-color-second-grey);margin-top:12px;margin-bottom:0px;border-bottom:0px}.sc-gc-cell-expandable-s>div[slot=\"title\"]{font-weight:700;font-size:12px}.sc-gc-cell-expandable-s>div[slot=\"description\"]{font-weight:600;font-size:15px}.divider.sc-gc-cell-expandable{width:1px;height:21px;background:#E0E0E0;margin-left:12px;margin-right:12px}";

const GcCellExpandable = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.openExpandableRowsEvent = index$1.createEvent(this, "openExpandableRowsEvent", 7);
    this.closeExpandableRowsEvent = index$1.createEvent(this, "closeExpandableRowsEvent", 7);
    this.contentChanged = index$1.createEvent(this, "contentChanged", 7);
    this.calculatedHeight = 0;
    this.maxHeight = '1500px';
    this.fieldName = '';
    this.value = '';
    this.total = 0;
    this.numberOfEntryPerPage = 0;
    this.maxWidth = '';
    this.transitioning = false;
    this.isResize = false;
    /**
     * index of step item from top to bottom
     */
    this.index = '';
    /**
     * step item is open or opening (css transition)
     */
    this.open = false;
    /**
     * The mutation observer config to listen for content changes in the step item
     */
    this.mutationObserverConfig = { childList: true, subtree: true };
    /**
     * The status in step
     */
    this.status = '';
    /**
     * Disabled in step
     */
    this.disabled = false;
    /**
     * Should open in step
     */
    this.shouldOpen = false;
    /**
     * The tooltip message
     */
    this.tooltipMessage = '';
    /**
     * The total text
     */
    this.totalText = '';
    /**
     * The link to redirect
     */
    this.linkTo = '';
  }
  get style() {
    return {
      maxHeight: this.isResize && this.open ? this.maxHeight : this.open ? this.maxHeight : '0px',
    };
  }
  stateChanged(value) {
    if (this.disabled)
      return;
    if (value) {
      this.openExpandableRowsEvent.emit({
        index: this.index,
      });
    }
    else {
      this.closeExpandableRowsEvent.emit({
        index: this.index,
      });
    }
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-cell-expandable');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i + '';
      }
    }
    this.mutationObserver = new MutationObserver(() => this.contentChanged.emit());
    this.mutationObserver.observe(this.element, this.mutationObserverConfig);
  }
  componentDidLoad() {
    this.calculateHeight();
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  recalculateHeight() {
    const oldCalculatedHeight = this.calculatedHeight;
    if (this.calculateHeight() != oldCalculatedHeight && this.open) {
      this.transitioning = true;
    }
  }
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  handleContentChanged() {
    this.recalculateHeight();
  }
  handleResize() {
    this.isResize = true;
  }
  /**
   * close the step item
   */
  async closeItem() {
    this.open = false;
    this.shouldOpen = false;
  }
  /**
   * open the step item
   */
  async openItem() {
    this.disabled = false;
    this.open = true;
  }
  toggle() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      if (this.shouldOpen) {
        return;
      }
      this.closeItem();
    }
    else {
      this.openItem();
    }
  }
  handleTransitionEnd() {
    this.transitioning = false;
  }
  calculateHeight() {
    this.calculatedHeight = this.element.querySelector('gc-cell-expandable > section > div').clientHeight;
    return this.calculatedHeight;
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true } }, index$1.h("div", { class: "gc__step-item-title", style: { width: this.maxWidth || 'calc(97vw + 10px)' } }, index$1.h("div", { onClick: () => this.toggle(), class: { 'transitioning-rotate': this.open, 'gc__step-item-icon': true }, onTransitionEnd: () => this.handleTransitionEnd() }, index$1.h("gc-icon", { name: "fa-solid fa-chevron-down", color: "var(--gc-color-primary)", size: "10px" })), index$1.h("div", { class: "gc__step-item-title--content" }, index$1.h("div", null, this.fieldName, ": ", index$1.h("b", null, this.value)), this.total > 0 ? index$1.h("div", { class: "divider" }) : null, this.total > 0 ? (index$1.h("gc-dropdown", { trigger: "hover", positions: "right" }, index$1.h("gc-link", { gcTo: this.linkTo, target: "_blank", stopPropagation: true }, index$1.h("b", null, this.total, " total ", this.totalText)), index$1.h("div", { slot: "gc__dropdown-content", style: { padding: '16px' } }, index$1.h("div", null, this.tooltipMessage)))) : null), index$1.h("div", { class: "gc__step-item-title--entry" }, this.numberOfEntryPerPage > 0 && this.open ? `Showing last ${this.numberOfEntryPerPage} of ${this.total} entries` : null))), index$1.h("section", { class: { 'gc__steps-section': true, 'transitioning': this.transitioning, 'open': this.open }, style: this.style }, index$1.h("div", null, index$1.h("slot", null)))));
  }
  get element() { return index$1.getElement(this); }
  static get watchers() { return {
    "open": ["stateChanged"]
  }; }
};
GcCellExpandable.style = gcCellExpandableCss;

const gcCheckboxCss = ".sc-gc-checkbox-h{display:block}input.sc-gc-checkbox{padding:0;height:initial;width:initial;margin-bottom:0;display:none;cursor:pointer}label.gc__label.sc-gc-checkbox{position:relative;cursor:pointer;box-sizing:inherit !important;font-weight:normal !important;color:var(--gc-color-text-grey);font-size:13px;text-transform:initial;margin-bottom:0;display:initial}label.gc__label.sc-gc-checkbox:before{content:'';appearance:none;border:1px solid var(--gc-color-second-grey);box-shadow:0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);padding:7px;display:inline-block;position:relative;vertical-align:text-bottom;cursor:pointer;margin-right:5px;border-radius:3px}input.sc-gc-checkbox:checked+label.gc__label.sc-gc-checkbox:before{background-color:var(--gc-color-primary);border:0;padding:8px}input.sc-gc-checkbox:checked+label.gc__label.sc-gc-checkbox:after{content:'';display:block;position:absolute;top:1px;left:5px;width:4px;height:7px;border:1px solid var(--gc-color-contrast-white);border-width:0 2px 2px 0;transform:rotate(40deg);box-sizing:initial}input.sc-gc-checkbox:disabled+label.gc__label.sc-gc-checkbox:before{border:1px solid var(--gc-color-second-grey);opacity:0.6;cursor:not-allowed}input.sc-gc-checkbox:disabled+label.gc__label.sc-gc-checkbox{cursor:not-allowed;text-decoration:line-through;color:var(--gc-color-disabled)}input.sc-gc-checkbox:disabled:checked+label.gc__label.sc-gc-checkbox:before{border:0;opacity:0.6;cursor:not-allowed}input.sc-gc-checkbox:disabled:checked+label.gc__label.sc-gc-checkbox{cursor:not-allowed;text-decoration:none}";

const GcCheckbox = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcChange = index$1.createEvent(this, "gc:change", 7);
    /**
     * Is checked ?
     */
    this.checked = false;
    /**
     * Is disabled ?
     */
    this.disabled = false;
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.checked || false });
    };
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("input", { class: this.class, id: this.gcName, type: "checkbox", onInput: this.onInput, checked: this.checked, disabled: this.disabled }), index$1.h("label", { class: "gc__label", htmlFor: this.gcName }, this.label)));
  }
};
GcCheckbox.style = gcCheckboxCss;

/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var version = "1.15.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend$1(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }

          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend$1,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

Sortable.mount(new SwapPlugin());
const GcDragContainer = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcDrop = index$1.createEvent(this, "gc:drop", 7);
  }
  componentDidLoad() {
    Sortable.create(this.container, {
      animation: 150,
      group: this.group,
      swap: true,
      swapClass: 'ghost',
      draggable: this.classDaggable,
      onUpdate: evt => {
        var _a, _b, _c, _d;
        if (((_b = (_a = evt === null || evt === void 0 ? void 0 : evt.item) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.colCheck) && ((_d = (_c = evt === null || evt === void 0 ? void 0 : evt.item) === null || _c === void 0 ? void 0 : _c.dataset) === null || _d === void 0 ? void 0 : _d.colName)) {
          this.gcDrop.emit({
            [evt.item.dataset.colName]: {
              position: evt.newIndex,
              oldPos: evt.oldIndex,
              hidden: evt.item.dataset.colCheck === 'true' ? false : true,
            },
          });
        }
      },
    });
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("div", { class: this.classContainer, ref: el => (this.container = el) }, index$1.h("slot", null))));
  }
};

const gcDraggableItemCss = ".sc-gc-draggable-item-h{display:block;background:white}.sc-gc-draggable-item-h:hover{cursor:pointer}.ghost.sc-gc-draggable-item-h{background:var(--gc-color-secondary)}";

const GcDraggableItem = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("slot", null)));
  }
};
GcDraggableItem.style = gcDraggableItemCss;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const gcDropdownCss = ":host{display:inline-block;height:var(--dropdown-height, auto)}#tooltip{display:none;border:1px solid var(--gc-color-second-grey);border-radius:6px;background-color:var(--gc-color-contrast-white);font-size:13px;z-index:var(--gc-z-index-gc__dropdown-content)}#tooltip[data-show]{display:block}#arrow,#arrow::before{position:absolute;width:8px;height:8px;background:inherit}#arrow{visibility:hidden}#tooltip[data-popper-placement^='bottom']>#arrow::before{visibility:visible;content:'';width:0;height:0;top:-5px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey)}#tooltip[data-popper-placement^='bottom']>#arrow::after{visibility:visible;content:'';width:0;height:0;top:-4px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white}#tooltip[data-popper-placement^='right']>#arrow::before{visibility:visible;content:'';width:0;height:0;top:0px;left:-1px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey);background:transparent;rotate:270deg}#tooltip[data-popper-placement^='right']>#arrow::after{visibility:visible;content:'';width:0;height:0;top:0px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white;background:transparent;rotate:270deg}#tooltip[data-popper-placement^='left']>#arrow::before{visibility:visible;content:'';width:0;height:0;top:0px;left:-1px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey);background:transparent;rotate:360deg}#tooltip[data-popper-placement^='left']>#arrow::after{visibility:visible;content:'';width:0;height:0;top:0px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white;background:transparent;rotate:360deg}#tooltip[data-popper-placement^='top']>#arrow{bottom:-4px}#tooltip[data-popper-placement^='bottom']>#arrow{top:-4px}#tooltip[data-popper-placement^='left']>#arrow{right:-4px}#tooltip[data-popper-placement^='right']>#arrow{left:-12px}.suffix-arrow{margin-left:12px;color:var(--gc-color-primary)}";

const GcDropdown = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    this.isOpen = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
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
    this.positions = 'bottom,bottom-right,top,top-right,bottom-left,top-left';
    this.items = null;
    this.trigger = 'click';
    this.allowForceClose = false;
    this.suffixArrow = false;
    this.hasFocus = false;
    this.position = '';
    this.isToggle = false;
  }
  getPosition(position) {
    switch (position) {
      case 'auto-left':
        return 'auto-start';
      case 'auto-right':
        return 'auto-end';
      case 'top-left':
        return 'top';
      case 'top-right':
        return 'top';
      case 'bottom-left':
        return 'bottom';
      case 'bottom-right':
        return 'bottom';
      default:
        return position;
    }
  }
  componentWillLoad() {
    if (this.positions) {
      const firstPos = this.positions.split(',')[0];
      this.position = firstPos ? this.getPosition(firstPos) : 'bottom';
    }
  }
  renderItems() {
    if (this.items)
      return (index$1.h("gc-menu", { class: "items" }, this.items.map(item => {
        return (index$1.h("gc-menu-item", { value: item.value, tabindex: this.isOpen ? '0' : '-1' }, item.icon && index$1.h("gc-icon", { name: item.icon, slot: "start", size: "sm" }), item.label, item.hint && index$1.h("span", { slot: "end" }, item.hint)));
      })));
  }
  toggle() {
    if (!this.dropdownElm.hasAttribute('data-show')) {
      this.isToggle = true;
      this.dropdownElm.setAttribute('data-show', '');
      // We need to tell Popper to update the tooltip position
      // after we show the tooltip, otherwise it will be incorrect
      this.popperInstance.update();
      return;
    }
    this.isToggle = false;
    this.dropdownElm.removeAttribute('data-show');
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) {
        return;
      }
    }
    this.dropdownElm.removeAttribute('data-show');
    this.isToggle = false;
  }
  componentDidLoad() {
    this.popperInstance = createPopper(this.containerElm, this.dropdownElm, {
      placement: this.position || 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }
  handleClick() {
    if (this.trigger === 'click') {
      this.toggle();
    }
  }
  handleHover() {
    if (this.trigger === 'hover') {
      this.toggle();
    }
  }
  handleClickDropdown() {
    if (this.allowForceClose) {
      this.toggle();
    }
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("div", { onClick: () => this.handleClick(), onMouseEnter: () => this.handleHover(), onMouseLeave: () => this.handleHover(), class: "slot-container", id: "host-element", "aria-describedby": "tooltip", ref: elm => (this.containerElm = elm) }, index$1.h("slot", null), this.suffixArrow ? index$1.h("span", { class: "suffix-arrow" }, index$1.h("gc-icon", { size: "12px", name: `fa-solid fa-caret-${this.isToggle ? 'up' : 'down'}` })) : null), index$1.h("div", { onClick: () => this.handleClickDropdown(), class: "gc__dropdown-content", id: "tooltip", role: "tooltip", ref: elm => (this.dropdownElm = elm) }, this.renderItems(), index$1.h("slot", { name: "gc__dropdown-content" }), index$1.h("div", { id: "arrow", "data-popper-arrow": true }))));
  }
  get elm() { return index$1.getElement(this); }
};
GcDropdown.style = gcDropdownCss;

const gcFormFieldCss = ".sc-gc-form-field-h{width:100%}gc-label.sc-gc-form-field{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc__form-field-error.sc-gc-form-field{color:var(--gc-color-red);font-size:11px;text-align:right}.gc__form-field-info.sc-gc-form-field{color:#7A7A7A;font-size:11px;text-align:right;margin-top:5px}";

const GcFormField = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcFieldChange = index$1.createEvent(this, "gc:field-change", 7);
    /**
     * The input type
     */
    this.type = 'text';
    /**
     *  [{
     *    label: 'Shivaji Varma',
     *    value: 'shivaji-varma'
     *  }]
     */
    this.items = [];
    /**
     * Search type
     * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
     */
    this.search = 'none';
    /**
     * Is error
     */
    this.isError = false;
  }
  handleSearchSelect(evt) {
    var _a;
    if (!((_a = evt.detail) === null || _a === void 0 ? void 0 : _a.value)) {
      this.value = '';
    }
  }
  handleChange(evt) {
    this.value = evt.detail.value;
    if (this.type === 'select') {
      this.gcFieldChange.emit({ value: evt.detail.value, label: evt.detail.label });
      return;
    }
    this.gcFieldChange.emit({ value: evt.detail.value });
  }
  renderField() {
    switch (this.type) {
      case 'select':
        return (index$1.h("gc-select", { search: this.search, items: this.items, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, defaultValue: this.defaultValue, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "onGc:search": e => this.handleSearchSelect(e), "is-error": !!this.errorText || this.isError }));
      case 'textarea':
        return (index$1.h("gc-textarea", { "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText || this.isError, cols: this.cols, rows: this.rows, height: this.height, maxlength: this.maxlength, resize: this.resize }));
      default:
        return (index$1.h("gc-input", { "prefix-icon": this.prefixIcon, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e), "is-error": !!this.errorText || this.isError }));
    }
  }
  render() {
    const input = this.renderField();
    return (index$1.h(index$1.Host, null, index$1.h("gc-label", { "gc-for": this.gcName }, this.label), input, this.infoText && index$1.h("div", { class: "gc__form-field-info" }, this.infoText), this.errorText && index$1.h("div", { class: "gc__form-field-error" }, this.errorText)));
  }
};
GcFormField.style = gcFormFieldCss;

const typographyCss$3 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcH1 = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h1 ${this.class}` : 'gc-h1';
  }
  render() {
    return (index$1.h("h1", { class: this.getClassName(), id: this.gcId }, index$1.h("slot", null)));
  }
};
GcH1.style = typographyCss$3;

const typographyCss$2 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcH2 = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h2 ${this.class}` : 'gc-h2';
  }
  render() {
    return (index$1.h("h2", { class: this.getClassName(), id: this.gcId }, index$1.h("slot", null)));
  }
};
GcH2.style = typographyCss$2;

const typographyCss$1 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcH3 = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h3 ${this.class}` : 'gc-h3';
  }
  render() {
    return (index$1.h("h3", { class: this.getClassName(), id: this.gcId }, index$1.h("slot", null)));
  }
};
GcH3.style = typographyCss$1;

const GcIcon = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
     */
    this.size = 'md';
    this.color = '';
    this.fontWeight = '';
  }
  getSize() {
    let size;
    if (this.size === 'sm')
      size = '1rem';
    else if (!this.size || this.size === 'md')
      size = '1.25rem';
    else if (this.size === 'lg')
      size = '1.5rem';
    else if (this.size === 'xl')
      size = '1.75rem';
    else
      size = this.size;
    return size;
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("i", { class: this.name, style: { fontSize: this.getSize(), color: this.color, fontWeight: this.fontWeight } })));
  }
};

const gcInputCss = ".sc-gc-input-h{display:flex}input.sc-gc-input{background:var(--gc-color-contrast-grey);border:1px solid var(--gc-color-second-grey);border-radius:5px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative;display:inline-block;margin:0}input.has-error.sc-gc-input{background:#FFF9F9;border:1px solid var(--gc-color-red)}input[disabled].sc-gc-input{color:#00000040;background-color:#f5f5f5;box-shadow:none;cursor:not-allowed;opacity:1}input.sc-gc-input:focus{background-color:var(--gc-color-contrast-grey);border-color:var(--gc-color-primary);outline:0;box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.sc-gc-input::placeholder{color:var(--gc-color-placeholder)}.sc-gc-input:-ms-input-placeholder{color:var(--gc-color-placeholder)}.sc-gc-input::-ms-input-placeholder{color:var(--gc-color-placeholder)}gc-icon.sc-gc-input{position:absolute;margin-top:12px;margin-left:12px}input.has-prefix.sc-gc-input{padding-left:36px}";

const GcInput = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcChange = index$1.createEvent(this, "gc:change", 7);
    /**
     * The input type
     */
    this.type = 'text';
    /**
     * Is error
     */
    this.isError = false;
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.value || '' });
    };
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("input", { class: this.prefixIcon ? `has-prefix ${this.class || ''} ${this.isError ? 'has-error' : ''}` : `${this.class || ''} ${this.isError ? 'has-error' : ''}`, name: this.gcName, onInput: this.onInput, id: this.gcId, type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled, autoComplete: "off" }), this.prefixIcon && index$1.h("gc-icon", { color: "var(--gc-color-primary)", name: this.prefixIcon })));
  }
};
GcInput.style = gcInputCss;

const gcLabelCss = "label{font-family:var(--gc-font-family);font-weight:var(--gc-font-weight-label);font-size:var(--gc-font-size-label);color:var(--gc-color-label-grey);line-height:var(--gc-line-height-label);text-transform:uppercase}";

const GcLabel = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class || '';
  }
  render() {
    return (index$1.h("label", { class: this.getClassName(), id: this.gcId, htmlFor: this.gcFor }, index$1.h("slot", null)));
  }
};
GcLabel.style = gcLabelCss;

const typographyCss = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcLink = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    /**
     * target link
     */
    this.target = '_self';
    /**
   * Stop propagation
   */
    this.stopPropagation = false;
  }
  getClassName() {
    return this.class ? `gc-link ${this.class}` : 'gc-link';
  }
  onClickIcon() {
    window.open(this.gcTo, this.target);
  }
  onClick(e) {
    if (this.stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
      window.open(this.gcTo, this.target);
    }
  }
  render() {
    if (this.icon) {
      return (index$1.h("div", { style: { display: 'flex', alignItems: 'baseline', cursor: 'pointer', fontSize: this.size } }, index$1.h("gc-icon", { onClick: () => this.onClickIcon(), name: this.icon, size: this.size || '13px', color: "#397FF7" }), index$1.h("a", { target: this.target, style: { color: this.color || 'var(--gc-color-primary)', marginLeft: '8px' }, class: this.getClassName(), id: this.gcId, href: this.gcTo }, index$1.h("slot", null))));
    }
    return (index$1.h("a", { onClick: e => this.onClick(e), target: this.target, style: { color: this.color || 'var(--gc-color-primary)', fontSize: this.size }, class: this.getClassName(), id: this.gcId, href: this.gcTo }, index$1.h("slot", null)));
  }
};
GcLink.style = typographyCss;

const gcMenuCss = ":host{display:inline-block}.menu{background:var(--gc-color-contrast-grey);border:1px solid var(--gc-color-second-grey);box-sizing:border-box;border-bottom-left-radius:5px;border-bottom-right-radius:5px}:host(.menu-no-border) .menu{border:0px}::slotted(*:last-child){border-bottom:0px}";

const GcMenu = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.showLoader = false;
    this.empty = false;
    this.emptyState = {
      headline: 'No items',
      description: 'There are no items to display',
    };
  }
  parseEmptyState() {
    if (typeof this.emptyState === 'string') {
      this.internalEmptyState = JSON.parse(this.emptyState);
    }
  }
  handleKeyDown(evt) {
    const path = evt.composedPath();
    let menuItem = null;
    for (const elm of path) {
      // @ts-ignore
      if (elm.tagName === 'GC-MENU-ITEM') {
        menuItem = elm;
      }
      if (elm !== this.elm)
        continue;
      if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.focusNextItem(menuItem);
      }
      else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.focusPreviousItem(menuItem);
      }
    }
  }
  /**
   * Sets focus on first menu item. Use this method instead of the global
   * `element.focus()`.
   */
  async setFocus() {
    const firstMenuItem = this.getFirstItem();
    firstMenuItem === null || firstMenuItem === void 0 ? void 0 : firstMenuItem.setFocus();
  }
  getFirstItem() {
    return this.elm.querySelector('gc-menu-item');
  }
  focusNextItem(currentItem) {
    let nextItem = currentItem.nextElementSibling;
    do {
      if (nextItem && nextItem.tagName === 'GC-MENU-ITEM' && !nextItem.disabled) {
        nextItem.setFocus();
        return;
      }
      if (!nextItem) {
        nextItem = this.elm.querySelector('gc-menu-item');
      }
      else {
        nextItem = nextItem.nextElementSibling;
      }
    } while (nextItem !== currentItem);
  }
  focusPreviousItem(currentItem) {
    let previousItem = currentItem.previousElementSibling;
    do {
      if (previousItem && previousItem.tagName === 'GC-MENU-ITEM' && !previousItem.disabled) {
        previousItem.setFocus();
        return;
      }
      if (!previousItem) {
        previousItem = this.elm.querySelector('gc-menu-item:last-child');
      }
      else {
        previousItem = previousItem.previousElementSibling;
      }
    } while (previousItem !== currentItem);
  }
  componentDidLoad() {
    this.parseEmptyState();
  }
  renderEmptyState() {
    if (this.empty) {
      return index$1.h("div", { style: { textAlign: 'center', padding: '12px' } }, "Empty data");
    }
  }
  render() {
    return (index$1.h("div", { part: "custom", class: "menu" }, index$1.h("slot", null), this.renderEmptyState()));
  }
  get elm() { return index$1.getElement(this); }
  static get watchers() { return {
    "emptyState": ["parseEmptyState"]
  }; }
};
GcMenu.style = gcMenuCss;

const gcMenuItemCss = ":host{display:block;border-bottom:1px solid var(--gc-color-second-grey);font-weight:400}:host(*:last-child) .menu-item-white{border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(*:first-child) .menu-item-white{border-top-right-radius:6px;border-top-left-radius:6px}:host(*:first-child) .menu-item-white:hover{border-top-right-radius:0px;border-top-left-radius:0px}.menu-item{cursor:pointer;padding:14px;box-sizing:border-box;display:flex;align-items:center;color:var(--gc-color-text-grey);outline:none}.menu-item-white{background:white}.menu-item .item-section{display:flex;align-items:center}.menu-item .slot-main{display:block;flex:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:inherit}.menu-item:hover,.menu-item.has-focus:not(.active){background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end,.menu-item.has-focus:not(.active) .slot-end{color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end{color:var(--gc-color-contrast-white)}.menu-item.active,.menu-item.selected{background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item.disabled{cursor:not-allowed;color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled);opacity:0.2}.menu-item.disabled:hover,.menu-item.disabled.has-focus:not(.active){color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled)}.menu-item.disabled.active,.menu-item.disabled.selected{color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled)}.menu-item:not(.start-slot-has-content) .slot-start{display:none}.menu-item:not(.end-slot-has-content) .slot-end{display:none}:host:last-child{border-bottom:0px}.dot{border-radius:50%;background:white;width:13px;height:13px;margin-right:8px;display:inline-block;vertical-align:middle;margin-top:-2px}";

const GcMenuItem = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.goatMenuItemClick = index$1.createEvent(this, "gc:menu-item-click", 7);
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
      return (index$1.h(index$1.Host, { active: this.isActive, "has-focus": this.hasFocus }, index$1.h("div", { id: this.gcId, ref: el => (this.nativeInput = el), class: {
          'menu-item': true,
          'selected': this.selected,
          'active': this.isActive,
          'disabled': this.disabled,
          'has-focus': this.hasFocus,
          'start-slot-has-content': this.startSlotHasContent,
          'end-slot-has-content': this.endSlotHasContent,
          'menu-item-white': this.background === 'white',
          [this.class]: this.class ? true : false,
        }, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, onMouseEnter: this.mouseEnterHandler, onMouseLeave: this.mouseLeaveHandler, "aria-disabled": this.disabled }, index$1.h("div", { style: this.getStyles(), class: "item-section slot-main" }, this.dot && index$1.h("div", { style: { background: this.dot }, class: "dot" }), index$1.h("slot", null)))));
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
  get elm() { return index$1.getElement(this); }
};
GcMenuItem.style = gcMenuItemCss;

const gcModalCss = ".sc-gc-modal-h{--z-index-modal:9999}.gc__modal-overlay.sc-gc-modal{z-index:var(--z-index-modal);opacity:0;visibility:hidden;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.42);-webkit-transition:opacity 0.5s, visibility 0s 0.5s;transition:opacity 0.5s, visibility 0s 0.5s;display:flex;align-items:center;justify-content:center}.is-visible.sc-gc-modal{opacity:1;visibility:visible;-webkit-transition:opacity 0.5s;transition:opacity 0.5s}.is-transparent.sc-gc-modal{opacity:0}.gc__modal-window.sc-gc-modal{background:white;border-radius:8px;width:488px;height:auto;min-height:100px;display:flex;align-items:center;justify-content:center}.gc__modal-window--content.sc-gc-modal{width:100%;height:100%}.gc__modal-heading.sc-gc-modal{display:flex;align-items:center;justify-content:center;margin-top:32px}.gc__modal-body.sc-gc-modal{background:white;align-items:center;justify-content:center;display:flex;margin-top:12px}.gc__modal-footer.sc-gc-modal{display:flex;align-items:center;justify-content:center;padding:4px 17px;margin-top:35px;margin-bottom:28px}";

const GcModal = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcModalOpen = index$1.createEvent(this, "gc:modal-open", 7);
    /**
     * Is open?
     */
    this.open = false;
    /**
    * Width of modal
    */
    this.width = '';
    /**
     * Is transparent?
     */
    this.transparent = false;
    /**
     * Is custom content?
     */
    this.isCustomContent = false;
    /**
     * Header Icon
     */
    this.headerIcon = '';
  }
  onOpen(isOpen) {
    if (isOpen) {
      this.gcModalOpen.emit();
    }
  }
  getHeaderIcon() {
    if (this.headerIcon) {
      try {
        return JSON.parse(this.headerIcon);
      }
      catch (e) {
        return this.headerIcon || '';
      }
    }
  }
  render() {
    const header = this.getHeaderIcon();
    return (index$1.h("div", { class: 'gc__modal-overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '') }, index$1.h("div", { class: "gc__modal-window", style: { width: this.width } }, index$1.h("div", { class: "gc__modal-window--content" }, !this.isCustomContent && (index$1.h("div", { class: "gc__modal-heading" }, header && index$1.h("span", { style: { color: (header === null || header === void 0 ? void 0 : header.color) || 'var(--gc-color-primary)' }, class: "fa-stack fa-2x" }, index$1.h("gc-icon", { size: "62px", name: "fa fa-thin fa-circle fa-stack-1x" }), index$1.h("gc-icon", { size: "25px", name: `${(header === null || header === void 0 ? void 0 : header.name) || header} fa-stack-1x` })), index$1.h("slot", { name: "heading" }))), !this.isCustomContent && (index$1.h("div", { class: "gc__modal-body" }, index$1.h("slot", { name: "content" }))), !this.isCustomContent && (index$1.h("div", { class: "gc__modal-footer" }, index$1.h("slot", { name: "footer" }))), this.isCustomContent && index$1.h("slot", null)))));
  }
  static get watchers() { return {
    "open": ["onOpen"]
  }; }
};
GcModal.style = gcModalCss;

const GcOl = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-ol ${this.class}` : 'gc-ol';
  }
  render() {
    return (index$1.h("ol", { class: this.getClassName(), id: this.gcId }, index$1.h("slot", null)));
  }
};

const gcPaginationCss = ".gc__pagination{display:flex;align-items:center}.gc__pagination .gc__pagination-page{background:#FFFFFF;border:1px solid var(--gc-color-second-grey);border-radius:6px;color:var(--gc-color-primary);padding:2px;min-width:26px;height:26px;text-align:center;align-items:center;display:flex;justify-content:center;margin-right:8px;cursor:pointer}.gc__pagination .gc__pagination-page:last-child{margin-right:0}.gc__pagination .gc__pagination-page:last-child i{line-height:26px}.gc__pagination .gc__pagination-page.active,.gc__pagination .gc__pagination-page:hover{background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.gc__pagination-dots{color:var(--gc-color-primary);margin-right:8px}.gc__pagination .gc__pagination-page.active,.gc__pagination .gc__pagination-page:hover>gc-icon>i{color:var(--gc-color-contrast-white) !important}";

const GcPagination = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcChangePage = index$1.createEvent(this, "gc:change-page", 7);
    /**
     * The page size
     */
    this.pageSize = 20;
    /**
     * The page size
     */
    this.activePage = 1;
    /**
     * The total
     */
    this.total = 20;
    this.onChange = num => {
      this.activePage = num;
      this.gcChangePage.emit({ value: num });
    };
  }
  getMaxPage() {
    if (this.total % this.pageSize === 0) {
      return this.total / this.pageSize;
    }
    return Math.floor(this.total / this.pageSize) + 1;
  }
  renderPagination(c, m, d = 3) {
    const current = c, last = m, delta = d, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [];
    let l;
    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(index$1.h("div", { onClick: () => this.onChange(l + 1), class: { 'gc__pagination-page': true, 'active': c === l + 1 } }, l + 1));
        }
        else if (i - l !== 1) {
          rangeWithDots.push(index$1.h("div", { class: "gc__pagination-dots" }, "..."));
        }
      }
      rangeWithDots.push(index$1.h("div", { onClick: () => this.onChange(i), class: { 'gc__pagination-page': true, 'active': c === i } }, i));
      l = i;
    }
    return rangeWithDots;
  }
  render() {
    return (index$1.h("div", { class: "gc__pagination" }, this.activePage !== 1 && (index$1.h("div", { onClick: () => this.onChange(this.activePage - 1), class: "gc__pagination-page" }, index$1.h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-left", size: "sm" }))), this.renderPagination(this.activePage, this.getMaxPage()), this.activePage !== this.getMaxPage() && (index$1.h("div", { onClick: () => this.onChange(this.activePage + 1), class: "gc__pagination-page" }, index$1.h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-right", size: "sm" })))));
  }
};
GcPagination.style = gcPaginationCss;

const gcProgressCss = ".progress{border-radius:16px;font-size:10px;color:#000!important;background-color:#f1f1f1!important;height:11px;margin-top:10px;animation:progress-bar-stripes 2s linear infinite}.bar{color:#fff!important;background-color:var(--gc-color-primary);border-radius:16px;font-size:10px;height:11px}.progress-text{margin-left:16px}";

const GcProgress = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  render() {
    return (index$1.h("div", { class: "progress", style: { width: this.width } }, index$1.h("div", { class: "bar", style: { width: `${this.percent}%` } }, index$1.h("span", { class: "progress-text" }, this.percent, "%"))));
  }
};
GcProgress.style = gcProgressCss;

const isMobile = function () {
  let check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
const isOutOfViewport = function (bounding) {
  // Check if it's out of the viewport on each side
  const out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  out.all = out.top && out.left && out.bottom && out.right;
  return out;
};
(() => {
  const callbacks = [];
  const elem = document.documentElement;
  let lastClassName = elem.getAttribute('data-theme');
  window.setInterval(function () {
    const className = elem.getAttribute('data-theme');
    if (className !== lastClassName) {
      callbacks.forEach(callback => callback());
      lastClassName = className;
    }
  }, 10);
  return function (callback) {
    callbacks.push(callback);
  };
})();
var ElementSize;
(function (ElementSize) {
  ElementSize["SMALL"] = "sm";
  ElementSize["MEDIUM"] = "md";
  ElementSize["LARGE"] = "lg";
  ElementSize["X_LARGE"] = "xl";
  ElementSize["XX_LARGE"] = "xxl";
  ElementSize["XXX_LARGE"] = "xxxl";
})(ElementSize || (ElementSize = {}));
const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
const copyClipboard = (content, callback = undefined) => {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(content);
    if (callback)
      callback();
  }
  else {
    // text area method
    const textArea = document.createElement('textarea');
    textArea.value = content;
    // make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise(() => {
      if (document.execCommand) {
        document.execCommand('copy');
      }
      textArea.remove();
      if (callback)
        callback();
    });
  }
};
const getIconExtension = (fileExtension) => {
  switch (fileExtension) {
    case 'csv':
      return 'fa-file-csv';
    case 'pdf':
      return 'fa-file-pdf';
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'tiff':
      return 'fa-file-image';
    case 'xls':
    case 'xl':
    case 'xlsx':
      return 'fa-file-excel';
    case 'ppt':
    case 'pptx':
      return 'fa-file-powerpoint';
    case 'doc':
    case 'docx':
      return 'fa-file-word';
    case 'txt':
      return 'fa-file-alt';
    case 'md':
      return 'fa-file-markdown';
    default:
      return 'fa-file';
  }
};
const getAcceptTypes = (fileExtension) => {
  switch (fileExtension) {
    case 'csv':
      return '.csv';
    case 'pdf':
      return '.pdf';
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'tiff':
      return '.png, .jpg, .jpeg, .tiff';
    case 'xls':
    case 'xl':
    case 'xlsx':
      return '.xls, .xlsx';
    case 'ppt':
    case 'pptx':
      return '.ppt, .pptx';
    case 'doc':
    case 'docx':
      return '.doc, .docx';
    case 'txt':
      return '.txt';
    case 'md':
      return '.md';
    default:
      return '*';
  }
};

const gcSelectCss = ".input-container.sc-gc-select{display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--gc-color-contrast-grey);border-color:var(--gc-color-second-grey);border-style:solid;border-radius:5px;border-width:1px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative}.input-container.sc-gc-select .input.sc-gc-select{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;padding:0}.input-container.sc-gc-select .slot-container.sc-gc-select{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot.sc-gc-select-s>*{padding-bottom:0 !important;margin-bottom:0 !important}.input-container.start-slot-has-content.sc-gc-select .input.sc-gc-select{padding-left:0.5rem}.input-container.end-slot-has-content.sc-gc-select .input.sc-gc-select{padding-right:0.5rem}.input-container.sc-gc-select:not(.start-slot-has-content) .slot-container.start.sc-gc-select{display:none}.input-container.sc-gc-select:not(.end-slot-has-content) .slot-container.end.sc-gc-select{display:none}.input-container.sc-gc-select .input-action.sc-gc-select{cursor:pointer}.input-container.sc-gc-select .input-action.sc-gc-select:hover{--text-color:var(--text-secondary)}.dropdown.sc-gc-select{position:relative;display:block;background:var(--gc-color-contrast-grey)}.dropdown.sc-gc-select .gc__dropdown-content.sc-gc-select{z-index:var(--gc-z-index-gc__dropdown-content);position:absolute;width:max-content;transition:transform 0.1s ease-out 0s}.dropdown.sc-gc-select .caret-down.sc-gc-select{transition:transform 0.1s ease-out 0s}.dropdown.is-open.sc-gc-select .gc__dropdown-content.sc-gc-select{transform:scale(1)}.dropdown.is-open.sc-gc-select .caret-down.sc-gc-select{transform:rotate(180deg)}.dropdown.bottom-right.sc-gc-select .gc__dropdown-content.sc-gc-select{top:calc(100%);left:0;transform-origin:top}.dropdown.bottom-left.sc-gc-select .gc__dropdown-content.sc-gc-select{top:calc(100%);right:0;transform-origin:top}.dropdown.top-right.sc-gc-select .gc__dropdown-content.sc-gc-select{bottom:calc(100%);left:0;transform-origin:bottom}.dropdown.top-left.sc-gc-select .gc__dropdown-content.sc-gc-select{bottom:calc(100%);right:0;transform-origin:bottom}.select.sc-gc-select{cursor:pointer}.select.sc-gc-select .gc__dropdown-content.sc-gc-select{width:100%;min-width:10rem}.select.sc-gc-select .menu.sc-gc-select{width:100%;max-height:260px;overflow-x:auto;margin-bottom:-3px}.select.sc-gc-select .menu.sc-gc-select::-webkit-scrollbar{width:2px}.select.sc-gc-select .menu.sc-gc-select::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}.select.sc-gc-select .menu.sc-gc-select::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}.select.sc-gc-select .display-value.sc-gc-select{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--gc-color-placeholder);max-width:98%}.select.sc-gc-select .has-value.sc-gc-select .display-value.sc-gc-select{color:var(--gc-color-text-grey)}.select.sc-gc-select .multi-select-value.sc-gc-select{padding-inline-end:0.5rem}.select.sc-gc-select .multi-select-value.sc-gc-select:last-child{padding-inline-end:0}.select.sc-gc-select .start-search.sc-gc-select{height:10rem;display:flex;align-items:center;justify-content:center;flex-direction:column}.dropdown.bottom-right.is-open.sc-gc-select .input-container.sc-gc-select,.dropdown.bottom-left.is-open.sc-gc-select .input-container.sc-gc-select{border-bottom-width:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.dropdown.top-right.is-open.sc-gc-select .input-container.sc-gc-select,.dropdown.top-left.is-open.sc-gc-select .input-container.sc-gc-select{border-top-width:0;border-top-right-radius:0;border-top-left-radius:0}.dropdown.top-right.is-open.sc-gc-select gc-menu.sc-gc-select::part(custom){border-top-right-radius:5px;border-top-left-radius:5px;border-bottom-right-radius:0;border-bottom-left-radius:0}div.input-container.search-none.sc-gc-select.has-value.sc-gc-select>div.input.display-value.sc-gc-select.sc-gc-select{color:var(--gc-color-grey-text)}div.input-container.search-contains.sc-gc-select.has-value.sc-gc-select>div.input.display-value.sc-gc-select.sc-gc-select{color:var(--gc-color-grey-text)}div.input-container.has-error.sc-gc-select{background:#FFF9F9;border:1px solid var(--gc-color-red)}.gc__section-hidden.sc-gc-select{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--gc-color-placeholder);max-width:98%}.gc__select-dot.sc-gc-select{border-radius:50%;background:white;width:13px;height:13px;margin-right:8px;display:inline-block;vertical-align:middle;margin-top:-2px}.gc__select-disabled.sc-gc-select{opacity:0.7;cursor:not-allowed}.gc__select-disabled.sc-gc-select .input-container.sc-gc-select{opacity:0.7;cursor:not-allowed}.gc__select-disabled.sc-gc-select .input-container.sc-gc-select .gc__section-hidden.sc-gc-select{opacity:0.7;cursor:not-allowed}";

const GcSelect = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcChange = index$1.createEvent(this, "gc:change", 7);
    this.p4ActionClick = index$1.createEvent(this, "gc:action-click", 7);
    this.gcSearch = index$1.createEvent(this, "gc:search", 7);
    /**
     * The input field value.
     */
    this.value = '';
    this.multiple = false;
    /**
     * The select input size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Search type
     * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
     */
    this.search = 'none';
    /**
     * The input state.
     * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
     */
    this.state = 'default';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.readonly = false;
    this.showLoader = false;
    this.isOpen = false;
    this.configAria = {};
    this.type = 'default';
    /**
     *  [{
     *    label: 'Shivaji Varma',
     *    value: 'shivaji-varma'
     *  }]
     */
    this.items = [];
    this.positions = 'bottom-right,top-right,bottom-left,top-left';
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearable = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
     */
    this.debounce = 300;
    /**
     * Is error
     */
    this.isError = false;
    this.hasFocus = false;
    this.searchString = '';
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.stateItems = [];
    this.selectedColorItem = '';
    this.selectedDotItem = '';
    this.textValue = '';
    this.selectHandler = (selectItemValue, selectedLabel) => {
      if (!this.disabled && !this.readonly) {
        // if (this.search !== 'none') {
        //   const item = this.getItemByValue(selectItemValue);
        //   this.searchString = item.label;
        // }
        this.stateItems = this.getItems().filter(item => item.value != selectItemValue);
        this.addItem(selectItemValue, selectedLabel);
      }
      this.closeList();
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.closeList = () => {
      if (!this.disabled && !this.readonly && this.isOpen) {
        this.isOpen = false;
        setTimeout(() => this.setFocus(), 100);
      }
    };
    this.openList = () => {
      if (!this.disabled && !this.readonly && !this.isOpen) {
        this.isOpen = true;
        if (this.search !== 'none') {
          this.searchString = '';
          const item = this.getItemByValue(this.value);
          this.textValue = this.value ? item.label : '';
          setTimeout(() => {
            const dropdownContent = this.dropdownContentElm;
            this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
            this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
            this.fixPosition();
            this.nativeInput.focus();
          }, 100);
        }
        else {
          setTimeout(() => {
            const dropdownContent = this.dropdownContentElm;
            this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
            this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
            this.fixPosition();
          }, 100);
        }
      }
    };
    this.toggleList = () => {
      if (this.isOpen)
        this.closeList();
      else
        this.openList();
    };
    this.keyDownHandler = evt => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          evt.preventDefault();
          this.menuElm.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          this.menuElm.setFocus(); // focus on previous item
        }
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      this.searchString = input.value || '';
      if (!this.searchString) {
        this.value = '';
      }
      this.gcSearch.emit({ value: this.searchString });
      if (!this.value && this.search !== 'none') {
        this.gcChange.emit({ value: '', label: '' });
      }
    };
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    this.displayElement.focus();
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
  debounceChanged() {
    this.gcSearch = debounceEvent(this.gcSearch, this.debounce);
  }
  watchPropHandler(newValue) {
    this.value = newValue;
    const selectedItem = this.stateItems.length > 0 ? this.stateItems.find(item => item.value == newValue) : this.getItems().find(item => item.value == newValue);
    if (selectedItem && (selectedItem.color || selectedItem.dot)) {
      this.selectedColorItem = selectedItem.color;
      this.selectedDotItem = selectedItem.dot;
    }
    if (!newValue) {
      this.stateItems = this.getItems();
      this.selectedColorItem = '';
      this.selectedDotItem = '';
    }
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm)
        return;
    }
    this.isOpen = false;
  }
  menuItemClick(evt) {
    this.selectHandler(evt.detail.value, evt.detail.label);
    this.selectedColorItem = evt.detail.color;
    this.selectedDotItem = evt.detail.dot;
  }
  tagDismissClick(evt) {
    this.removeItem(evt.detail.value);
  }
  getValues() {
    if (this.value)
      return this.value.toString().split(',');
    else
      return [];
  }
  addItem(selectItemValue, selectedLabel) {
    let value = this.getValues();
    if (!selectItemValue) {
      this.value = '';
      this.gcChange.emit({ value: selectItemValue, label: selectedLabel });
      return;
    }
    if (!value.includes(selectItemValue)) {
      if (!this.multiple)
        value = [];
      value.push(selectItemValue);
      this.value = value.join(',');
      this.gcChange.emit({ value: this.value, label: selectedLabel });
    }
  }
  removeItem(selectItemValue) {
    let value = this.getValues();
    if (value.includes(selectItemValue)) {
      value = value.filter(item => item !== selectItemValue);
      this.value = value.join(',');
      this.gcChange.emit({ value: this.value });
    }
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getItems() {
    if (this.items) {
      if (typeof this.items === 'string') {
        return JSON.parse(this.items);
      }
      return this.items;
    }
  }
  getItemByValue(value) {
    if (this.items) {
      const items = this.getItems();
      return items.find(item => {
        return item.value == value;
      });
    }
  }
  getDisplayValue() {
    if (!this.multiple) {
      if (this.items) {
        const item = this.getItemByValue(this.value);
        if (item && item.value) {
          return (index$1.h("span", { style: { color: this.selectedColorItem } }, this.selectedDotItem && index$1.h("div", { style: { background: this.selectedDotItem }, class: "gc__select-dot" }), item.label));
        }
      }
      if (!this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return index$1.h("span", null, "\u00A0");
      }
    }
    else {
      if (!this.value && !this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return index$1.h("span", null, "\u00A0");
      }
    }
  }
  componentWillLoad() {
    if (this.positions)
      this.position = this.positions.split(',')[0];
    if (this.elm.getAttributeNames) {
      this.elm.getAttributeNames().forEach((name) => {
        if (name.includes('aria-')) {
          this.configAria[name] = this.elm.getAttribute(name);
          this.elm.removeAttribute(name);
        }
      });
    }
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
    this.stateItems = this.getItems();
    if (this.value || this.defaultValue) {
      const selectedItem = this.getItems().find(item => item.value == this.value || item.value == this.defaultValue);
      if (selectedItem && (selectedItem.color || selectedItem.dot)) {
        this.selectedColorItem = (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.color) || '';
        this.selectedDotItem = (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.dot) || '';
        this.stateItems = this.getItems().filter(item => item.value != selectedItem.value);
      }
    }
  }
  fixPosition() {
    if (this.isOpen && this.dropdownContentHeight && this.dropdownContentWidth) {
      if (isMobile()) {
        this.position = 'center';
        return;
      }
      const positions = this.positions.split(',');
      for (let i = 0; i < positions.length; i++) {
        const dropdownButtonRect = this.elm.getBoundingClientRect();
        const dropdownContentRect = {};
        if (positions[i] === 'bottom-right') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'top-right') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'bottom-left') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        else if (positions[i] === 'top-left') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        const isOut = isOutOfViewport(dropdownContentRect);
        if (!isOut.any) {
          this.position = positions[i];
          break;
        }
      }
    }
  }
  connectedCallback() {
    this.debounceChanged();
  }
  render() {
    return (index$1.h(index$1.Host, { id: this.gcId, "has-value": this.hasValue(), "has-focus": this.hasFocus, "is-open": this.isOpen, position: this.position }, index$1.h("div", { class: { 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen, 'gc__select-disabled': this.disabled } }, index$1.h("div", { onClick: evt => {
        evt.preventDefault();
        this.toggleList();
      }, class: {
        'input-container': true,
        [`search-${this.search}`]: true,
        'has-focus': this.hasFocus,
        'disabled': this.disabled,
        'readonly': this.readonly,
        'has-value': this.hasValue(),
        'start-slot-has-content': this.startSlotHasContent,
        'end-slot-has-content': this.endSlotHasContent,
        'has-error': this.isError,
      } }, index$1.h("div", { class: "slot-container start" }, index$1.h("slot", { name: "start" })), (() => {
      if (this.search !== 'none' && this.isOpen) {
        return (index$1.h("input", Object.assign({ class: {
            'input input-native': true,
            'disabled': this.disabled,
          }, ref: input => (this.nativeInput = input), type: "text", value: this.textValue, placeholder: this.placeholder, onBlur: this.blurHandler, onFocus: this.focusHandler, onInput: this.onInput, onKeyDown: this.keyDownHandler, autoComplete: "off" }, this.configAria)));
      }
      else {
        return (index$1.h("div", { class: "gc__section-hidden" }, index$1.h("div", Object.assign({ class: "input display-value", tabindex: "0", ref: input => (this.displayElement = input), "aria-disabled": this.disabled ? 'true' : null, onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler }, this.configAria), this.getDisplayValue()), index$1.h("input", { id: this.gcId, style: { display: 'none' }, value: this.value })));
      }
    })(), index$1.h("div", { class: "slot-container end" }, index$1.h("slot", { name: "end" })), this.getModeIcon()), index$1.h("div", { class: "gc__dropdown-content", ref: elm => (this.dropdownContentElm = elm) }, this.isOpen && this.renderDropdownList()))));
  }
  getModeIcon() {
    if (!this.disabled && !this.readonly)
      return index$1.h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-solid fa-caret-down", size: "10px", class: "input-action caret-down", role: "button", onClick: this.toggleList });
  }
  renderDropdownList() {
    // if (this.search === 'managed' && !this.items.length) {
    //   return (
    //     <goat-menu class="menu" ref={el => (this.menuElm = el)}>
    //       <div class="start-search">
    //         <goat-icon name="search" size={this.size} />
    //         <goat-text shade="secondary">Start typing to perform search</goat-text>
    //       </div>
    //     </goat-menu>
    //   );
    // }
    if (this.items) {
      const filteredItems = this.filterItems();
      return (index$1.h("gc-menu", { class: "menu", empty: filteredItems.length == 0, ref: el => (this.menuElm = el) }, (() => {
        return filteredItems.map(item => {
          return (index$1.h("gc-menu-item", { disabled: item.disabled, dot: item.dot, color: item.color, value: item.value, label: item.label }, item.label || item.value));
        });
      })()));
    }
  }
  filterItems() {
    if (this.search === 'managed')
      return this.getItems();
    const items = this.search !== 'none' ? this.getItems() : this.stateItems;
    if (!this.searchString) {
      return items.filter(item => {
        return item.value != this.value;
      });
    }
    return items.filter(item => {
      return !this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase());
    });
  }
  get elm() { return index$1.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["watchPropHandler"]
  }; }
};
GcSelect.style = gcSelectCss;

const gcSpinnerCss = ":host{--z-index-floating:1001;--background-color-behind:rgba(255,255,255, 0.5)}.gc__spinner{display:flex;align-items:center;justify-content:center}.gc__spinner-float{position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:var(--z-index-floating);overflow:hidden;background:var(--background-color-behind)}.gc__spinner-loading{display:inline-block}.gc__spinner-loading>svg{display:inline-block;width:49px;height:58px;animation:lds-circle 0.8s cubic-bezier(0, 0.2, 0.8, 1) infinite}@keyframes lds-circle{0%,100%{animation-timing-function:cubic-bezier(0.5, 0, 1, 0.5)}0%{transform:rotateY(0deg)}50%{transform:rotateY(0deg);animation-timing-function:cubic-bezier(0, 0.5, 0.5, 1)}100%{transform:rotateY(360deg)}}";

const GcSpinner = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    /**
    * Is float above background
    */
    this.isFloat = false;
  }
  getClass() {
    return {
      'gc__spinner': true,
      'gc__spinner-float': this.isFloat,
    };
  }
  render() {
    return (index$1.h("div", { class: this.getClass() }, index$1.h("div", { class: "gc__spinner-loading" }, index$1.h("svg", { width: "20", height: "23", viewBox: "0 0 20 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index$1.h("g", { "clip-path": "url(#clip0_219_2389)" }, index$1.h("path", { d: "M19.6042 -9.53674e-07V9.49906C19.6042 15.684 16.2297 20.6158 9.80211 23C3.37455 20.6158 0 15.684 0 9.49906V-9.53674e-07H19.6042ZM17.7157 1.90039H1.88859V9.49906C1.88859 14.6727 4.53899 18.7562 9.80211 20.9801C15.0623 18.7562 17.7157 14.6727 17.7157 9.49906V1.90039ZM6.26829 6.18504V9.49906C6.26829 12.4516 7.27051 14.6348 9.80211 16.13C12.0528 14.7951 13.1361 12.9763 13.3765 10.5104H8.68983V8.52846H15.4389V9.49906C15.4389 13.3815 13.5909 16.4536 9.81371 18.3539C6.06549 16.4536 4.25802 13.3815 4.25802 9.49906V4.20301H15.4273V6.18504H6.26829Z", fill: "#0046FC" })), index$1.h("defs", null, index$1.h("clipPath", { id: "clip0_219_2389" }, index$1.h("rect", { width: "20", height: "23", fill: "white" })))))));
  }
};
GcSpinner.style = gcSpinnerCss;

const gcStepCss = ".gc__steps-section.sc-gc-step{overflow:hidden}.gc__steps-section.open.sc-gc-step{overflow:unset}.gc__steps-section.sc-gc-step div.sc-gc-step{padding:0px 40px;border-left:1px solid #DAE1E8;margin-left:44px}.gc__step-item-title.sc-gc-step{display:flex;align-items:center;padding-left:20px}.gc__step-item-icon.sc-gc-step{border-radius:50%;border-width:2px;border-style:solid;width:48px;height:48px}.gc__step-item-icon.sc-gc-step>gc-icon.sc-gc-step{display:flex;align-items:center;justify-content:center;width:-moz-available;width:-webkit-fill-available;width:fill-available;height:44px;position:relative}.gc__step-item-title--content.sc-gc-step{margin-left:14px}.transitioning.sc-gc-step{transition:max-height .35s ease}header.gc__head.sc-gc-step{margin-top:12px;cursor:pointer}header.gc__head-opening.sc-gc-step{margin-bottom:10px}header.gc__head-opacity.sc-gc-step{opacity:0.5;cursor:not-allowed}.transitioning-rotate.sc-gc-step{transition:transform .3s ease-in-out;transform:rotateY(90deg)}header.gc__head.sc-gc-step hr.sc-gc-step{border-top:1px solid var(--gc-color-second-grey);margin-top:12px;margin-bottom:0px;border-bottom:0px}.sc-gc-step-s>div[slot=\"title\"]{font-weight:700;font-size:12px}.sc-gc-step-s>div[slot=\"description\"]{font-weight:600;font-size:15px}";

const GcStep = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.openEvent = index$1.createEvent(this, "openEvent", 7);
    this.beforeOpenEvent = index$1.createEvent(this, "beforeOpenEvent", 7);
    this.closeEvent = index$1.createEvent(this, "closeEvent", 7);
    this.contentChanged = index$1.createEvent(this, "contentChanged", 7);
    this.calculatedHeight = 0;
    this.maxHeight = '1500px';
    this.transitioning = false;
    this.isResize = false;
    this.openCount = 0;
    /**
     * index of step item from top to bottom
     */
    this.index = '';
    /**
     * step item is open or opening (css transition)
     */
    this.open = false;
    /**
     * The mutation observer config to listen for content changes in the step item
     */
    this.mutationObserverConfig = { childList: true, subtree: true };
    /**
     * The icon in step
     */
    this.icon = 'fa-regular fa-building-shield';
    /**
     * The status in step
     */
    this.status = '';
    /**
     * Disabled in step
     */
    this.disabled = false;
    /**
     * Should open in step
     */
    this.shouldOpen = false;
    /**
     * Customize in step opening
     */
    this.customOpen = false;
  }
  get style() {
    return {
      maxHeight: this.isResize && this.open ? this.maxHeight : this.open ? this.maxHeight : '0px',
    };
  }
  stateChanged(value) {
    if (this.disabled)
      return;
    if (value) {
      this.openEvent.emit({
        index: this.index,
      });
      this.openCount = this.openCount + 1;
    }
    else {
      this.closeEvent.emit({
        index: this.index,
      });
      this.openCount = 0;
    }
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-step');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i + '';
      }
    }
    this.mutationObserver = new MutationObserver(() => this.contentChanged.emit());
    this.mutationObserver.observe(this.element, this.mutationObserverConfig);
  }
  componentDidLoad() {
    this.calculateHeight();
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  recalculateHeight() {
    const oldCalculatedHeight = this.calculatedHeight;
    if (this.calculateHeight() != oldCalculatedHeight && this.open) {
      this.transitioning = true;
    }
  }
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  handleContentChanged() {
    this.recalculateHeight();
  }
  handleResize() {
    this.isResize = true;
  }
  /**
   * close the step item
   */
  async closeItem() {
    this.open = false;
    this.shouldOpen = false;
  }
  /**
   * open the step item
   */
  async openItem() {
    this.disabled = false;
    this.open = true;
  }
  /**
   * before open the step item
   */
  async beforeOpenItem() {
    this.beforeOpenEvent.emit({
      index: this.index,
    });
  }
  toggle() {
    if (this.customOpen || this.disabled) {
      return;
    }
    if (this.open) {
      if (this.shouldOpen) {
        return;
      }
      this.closeItem();
    }
    else {
      this.beforeOpenItem();
    }
  }
  handleTransitionEnd() {
    this.transitioning = false;
    this.openCount = 0;
  }
  calculateHeight() {
    this.calculatedHeight = this.element.querySelector('gc-step > section > div').clientHeight;
    return this.calculatedHeight;
  }
  render() {
    const successCondition = !this.open && this.status === 'success';
    const opacityCondition = this.disabled;
    return (index$1.h(index$1.Host, null, index$1.h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true, 'gc__head-opacity': opacityCondition }, onClick: () => this.toggle() }, index$1.h("div", { class: "gc__step-item-title" }, index$1.h("div", { style: { borderColor: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' }, class: { 'transitioning-rotate': this.transitioning && this.open && this.openCount === 1, 'gc__step-item-icon': true }, onTransitionEnd: () => this.handleTransitionEnd() }, successCondition ? (index$1.h("gc-icon", { name: "fa-regular fa-check", color: "var(--gc-color-green)", size: "24px" })) : (index$1.h("gc-icon", { name: this.icon, color: "var(--gc-color-primary)", size: "22px" }))), index$1.h("div", { class: "gc__step-item-title--content" }, index$1.h("div", { style: { color: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' } }, index$1.h("slot", { name: "title" })), index$1.h("slot", { name: "description" }))), !this.open && index$1.h("hr", null)), index$1.h("section", {
      // onTransitionEnd={() => this.handleTransitionEnd()}
      class: { 'gc__steps-section': true, 'transitioning': this.transitioning, 'open': this.open }, style: this.style
    }, index$1.h("div", null, index$1.h("slot", null)))));
  }
  get element() { return index$1.getElement(this); }
  static get watchers() { return {
    "open": ["stateChanged"]
  }; }
};
GcStep.style = gcStepCss;

const GcSteps = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcStepChange = index$1.createEvent(this, "gc:step-change", 7);
    this.gcBeforeStepChange = index$1.createEvent(this, "gc:before-step-change", 7);
    this.activeStep = '';
    this.activeStatus = '';
    this.oldStep = '';
    this.activeStepState = false;
    this.customOpen = false;
  }
  openEventHandler(event) {
    const children = this.element.querySelectorAll('gc-step');
    const oldIndex = this.activeStep !== event.detail.index ? this.activeStep : this.oldStep;
    const newIndex = event.detail.index;
    const eventBefore = this.gcBeforeStepChange.emit({ index: newIndex, oldIndex });
    this.activeStep = newIndex;
    this.activeStatus = 'open';
    if (eventBefore.defaultPrevented) {
      return false;
    }
    this.gcStepChange.emit({ index: newIndex, oldIndex });
    children[event.detail.index].openItem();
    this.oldStep = oldIndex;
    for (let i = 0; i < children.length; i++) {
      if (event.detail.index != i) {
        children[i].closeItem();
      }
    }
  }
  closeEventHandler(event) {
    if (event.detail.index === this.activeStep) {
      this.activeStatus = 'close';
    }
  }
  /**
   * Open an step item
   * @param index
   */
  async open(index) {
    this.getStepItem(index).openItem();
  }
  /**
   * close an step item
   * @param index
   */
  async close(index) {
    this.getStepItem(index).closeItem();
  }
  getStepItem(index) {
    const children = this.element.querySelectorAll('gc-step');
    if (index >= 0 && index < children.length) {
      return children[index];
    }
    else {
      throw new Error('index out of bounds');
    }
  }
  componentWillLoad() {
    if (this.customOpen) {
      const children = this.element.querySelectorAll('gc-step');
      for (let i = 0; i < children.length; i++) {
        children[i].customOpen = true;
      }
    }
  }
  render() {
    const children = this.element.querySelectorAll('gc-step');
    return (index$1.h("div", { style: {
        paddingBottom: children && children[children.length - 1].index && children[children.length - 1].index == this.activeStep && this.activeStatus === 'open' ? '30px' : '',
      } }, index$1.h("slot", null)));
  }
  get element() { return index$1.getElement(this); }
};

const gcTabCss = ".sc-gc-tab-h{flex:1;--z-index-tab:999}.gc__tab.sc-gc-tab{position:relative;display:flex;align-items:center;justify-content:center;height:50px}.gc__tab.sc-gc-tab .native-button.sc-gc-tab{height:100%;cursor:pointer;z-index:var(--z-index-tab);background:transparent;padding:0;border:none;outline:none;width:100%;display:flex;align-items:center;justify-content:center;color:#727272;font-weight:600;font-size:13px;line-height:23px;border-right:1px solid var(--gc-color-second-grey);border-bottom:1px solid var(--gc-color-second-grey)}.sc-gc-tab-h:last-child .native-button.sc-gc-tab{border-right:0;border-radius:0px 6px 0 0}.sc-gc-tab-h:first-child .gc__tab-background.sc-gc-tab{border-radius:6px 0 0}.sc-gc-tab-h:last-child .gc__tab-background.sc-gc-tab{border-radius:0px 6px 0 0}.sc-gc-tab-h:first-child .native-button.sc-gc-tab{border-right:0;border-radius:6px 0 0}.gc__tab.sc-gc-tab .gc__tab-background.sc-gc-tab{display:block;position:absolute;width:100%;height:100%;pointer-events:none}.gc__tab.disabled.sc-gc-tab .native-button.sc-gc-tab{cursor:not-allowed}.gc__tab.has-content.sc-gc-tab .slot-container.sc-gc-tab{display:flex;line-height:18px}.gc__tab.sc-gc-tab .gc__tab-background.sc-gc-tab{background:var(--gc-color-light-grey)}.gc__tab.selected.sc-gc-tab .native-button.sc-gc-tab{color:#FFFFFF;background:var(--gc-color-second-blue);border:none}.gc__tab.selected.sc-gc-tab .native-button.sc-gc-tab:after{content:'';position:absolute;top:100%;left:50%;margin-left:-8px;width:0;height:0;border-top:solid 4px var(--gc-color-second-blue);border-left:solid 8px transparent;border-right:solid 8px transparent}.gc__tab.disabled.sc-gc-tab .native-button.sc-gc-tab{color:#727272}";

const GcTab = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcTabClick = index$1.createEvent(this, "gc:tab-click", 7);
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
    return (index$1.h(index$1.Host, { "has-focus": this.hasFocus, active: this.isActive }, index$1.h("div", { class: {
        'gc__tab': true,
        'disabled': this.disabled,
        'selected': this.selected,
        'has-focus': this.hasFocus,
        'active': this.isActive,
        'has-content': this.slotHasContent,
        'show-loader': this.showLoader,
      } }, index$1.h("div", { class: "gc__tab-background" }), index$1.h("button", { class: "native-button", tabindex: this.tabindex, ref: input => (this.nativeInput = input), onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, disabled: this.disabled, "aria-disabled": (this.disabled || this.showLoader) + '' }, index$1.h("div", { class: "gc__tab-content" }, index$1.h("div", { class: "slot-container" }, this.icon && (index$1.h("span", { style: { marginRight: '8px', verticalAlign: 'middle' } }, index$1.h("gc-icon", { name: this.icon, size: "18px" }))), index$1.h("slot", null)))))));
  }
  get elm() { return index$1.getElement(this); }
};
GcTab.style = gcTabCss;

const gcTabPanelCss = ".sc-gc-tab-panel-h{display:none}[active].sc-gc-tab-panel-h{display:block;margin-top:8px}";

const GcTabPanel = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("slot", null)));
  }
};
GcTabPanel.style = gcTabPanelCss;

const gcTableCss = ":host{display:block;height:100%;--table-border-color:var(--gc-color-second-grey);--z-index-table-header:12;--z-index-fixed-col:13;--font-weight-table-header:600}:host(.is-loading){position:relative}.gc__table{height:100%;border:1px solid var(--table-border-color);font-size:12px}.gc__table-loading{opacity:0.3}.gc__table .table-scroll-container{position:relative;overflow:auto;height:100%}.empty-table{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:24px;border:1px solid var(--gc-color-second-grey);background:var(--gc-color-contrast-white)}.empty-child-table{display:flex;align-items:baseline;justify-content:center;flex-direction:column;padding:24px;border:1px solid var(--gc-color-second-grey);background:var(--gc-color-contrast-white)}.empty-table-no-bordered{border:none}.empty-title{margin-bottom:14px}.gc__table.paginate .table-scroll-container{height:calc(100% - 2.4375rem)}.gc__table .table-scroll-container::-webkit-scrollbar{width:6px;height:6px}.gc__table .table-scroll-container::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}.gc__table .table-scroll-container::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}.gc__table .pagination{display:flex;border-top:1px solid var(--table-border-color)}.gc__table .pagination .form-control{margin:0}.gc__table .pagination .select{margin:0;--input-border-radius:none;--input-border-style:none;border-left:1px solid var(--table-border-color);border-right:1px solid var(--table-border-color)}.gc__table .pagination .page-sizes-select{margin-inline-start:v(--spacing-3)}.gc__table .pagination .pagination-item-count{margin-inline-start:v(--spacing-4);flex:1;display:flex;align-items:center}.gc__row{display:flex;box-sizing:border-box;height:100%}.gc__row .columns-container{display:flex}.gc__row .gc__col{margin:0;box-sizing:border-box;vertical-align:middle;line-height:normal;border-right:1px solid var(--gc-color-second-grey);border-bottom:1px solid var(--gc-color-second-grey)}.gc__row .gc__col .col-content{display:flex;align-items:center;height:100%;justify-content:space-between}.gc__row .gc__col .col-content .col-text{padding:0 14px 0 14px;flex:1;display:block;word-break:break-word}.header .gc__row .gc__col .col-content .col-text{word-break:inherit}.gc__row .gc__col .col-content .col-action{--button-border-radius:none}.gc__row .gc__col .col-content .col-action.has-focus{z-index:12}.gc__row .gc__col.center .col-content{justify-content:center}.gc__row .gc__col:last-child{flex:1}.gc__row .fixed-columns{position:sticky;left:0;background:inherit}.gc__row .fixed-right-columns{position:sticky;right:0;background:inherit}.header .fixed-columns{background:var(--gc-color-second-blue);z-index:var(--z-index-fixed-col)}.gc__row .scrollable-columns{flex:1}.header{z-index:var(--z-index-table-header);font-weight:var(--font-weight-table-header);text-transform:uppercase;position:sticky;top:0;background:var(--gc-color-second-blue);color:var(--gc-color-contrast-white);height:50px;min-width:fit-content}.header-with-expandable{z-index:var(--z-index-table-header);font-weight:var(--font-weight-table-header);text-transform:uppercase;position:sticky;top:0;background:var(--gc-color-second-blue);color:var(--gc-color-contrast-white);opacity:0;min-width:fit-content;transition:opacity 2s linear;height:0px;transform:translateY(-50px)}.header-with-expandable.transition{opacity:1;height:50px;transform:translateY(0px)}.gc__table-body{min-width:fit-content}.header .left-panel{position:sticky;top:0;left:0}.header .gc__col{border-bottom:1px solid var(--table-border-color)}.header .gc__col.sort{cursor:pointer}.gc__table-body .gc__row{min-height:66px;height:auto}.gc__table-body>.gc__row:nth-child(even){background-color:var(--gc-color-contrast-grey)}.gc__table-body>.gc__row:nth-child(odd){background-color:var(--gc-color-contrast-white)}.gc__table-body>div.gc__row::nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-contrast-grey)}.gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-second-white)}.gc__table-body .gc__row .gc__col:focus{outline:none;z-index:1}.gc__table-body .left-panel{position:sticky;left:0}.table-footer{height:66px;background-color:var(--gc-color-contrast-white)}.table-footer .pagination{height:100%;padding:0 30px}.table-footer .pagination .pagination-right{display:flex;align-items:center}:host(.show-full-content) .gc__table-body .col-text{overflow:initial;white-space:initial;text-overflow:initial}.empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;}.gc__table-arrow{display:grid}.header gc-icon{opacity:0.5}.header-with-expandable gc-icon{opacity:0.5}gc-icon.disabled{opacity:1}gc-icon.down-arrow{margin-top:-4px}.gc__row .gc__col .col-content .col-actions{margin-right:14px}.col-center{text-align:center}.gc__table-setting{font-weight:600;font-size:12px;display:flex;align-items:center;justify-content:space-between;background:var(--gc-color-contrast-white);padding:12px 30px 8px 30px;border-left:1px solid var(--gc-color-second-grey);border-right:1px solid var(--gc-color-second-grey)}.gc__table-setting .dropdown{min-width:473px}.gc__table-setting .gc__table-setting-cols-text{padding:14px 20px;display:flex;align-items:center;border-bottom:1px solid var(--gc-color-second-grey)}.gc__table-setting .gc__table-setting-cols-title{margin-left:12px}.gc__table-setting .gc__table-setting-cols{display:grid;padding:17px 20px;row-gap:17px;column-gap:17px;grid-auto-flow:column;grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr}.gc__table-setting .gc__table-setting-cols.less-cols{grid-template-rows:1fr 1fr 1fr 1fr}.gc__table-setting .gc__table-setting-col-item{display:flex;align-items:center}.gc__table-setting .gc__table-setting-col-item .sc-gc-checkbox-h{margin-bottom:0;margin-left:8px;line-height:13px;max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc__table-setting .gc__table-setting-col-item gc-icon{cursor:move}.gc__table-setting .gc__table-setting-col-item.disabled{cursor:not-allowed}.gc__table-setting label.gc__label.sc-gc-checkbox{color:var(--gc-color-text-grey)}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(odd){background-color:inherit}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(even){background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .header,.gc__table-no-stripe .header .fixed-columns{background-color:inherit;color:var(--gc-color-text-grey)}.gc__table-no-border .gc__row .gc__col{border-right:0}.loading-section{width:50%;height:50%;overflow:auto;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;z-index:9999999999}.gc__actions{margin-top:5px;display:flex}.gc__btn-action{margin-right:5px;display:none}.gc__btn-action.active{animation:fadeInShow 0.2s;display:block}.gc__table-setting-manage-title{font-weight:600;font-size:12px;line-height:17px;color:#51666C}.gc__table-setting-manage-title-group-by{font-weight:600;font-size:12px;line-height:17px;color:var(--gc-color-primary);cursor:pointer}.gc__table-body>gc-cell-expandable:nth-child(even)>header{background-color:var(--gc-color-contrast-grey)}.gc__table-body>gc-cell-expandable:nth-child(odd)>header{background-color:var(--gc-color-contrast-white)}.gc__table-divider{width:1px;background-color:#E0E0E0;margin:0 16px}@keyframes fadeInShow{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}";

const DEFAULT_CELL_WIDTH = '16vw'; // in vw
const DEFAULT_MAXIMUM_TO_SCALE = 6;
const MAX_LONG_TEXT$1 = 100;
const DEFAULT_SCREEN_WIDTH_TO_STOP_SCALE = 1024;
const GcTable = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcCellClick = index$1.createEvent(this, "gc:table-cell-click", 7);
    this.gcSelectChange = index$1.createEvent(this, "gc:table-select-change", 7);
    this.gcSort = index$1.createEvent(this, "gc:sort", 7);
    this.gcChangePage = index$1.createEvent(this, "gc:change-page", 7);
    this.gcClearEmptyState = index$1.createEvent(this, "gc:clear-empty-state", 7);
    this.gcTableSettingChange = index$1.createEvent(this, "gc:table-setting-change", 7);
    this.gcTableCollapseChange = index$1.createEvent(this, "gc:table-collapse-change", 7);
    this.gcTableGroupByChange = index$1.createEvent(this, "gc:table-group-by-change", 7);
    this.gcTableChildDataChange = index$1.createEvent(this, "gc:table-child-data-change", 7);
    /**
     * Grid columns configuration.
     * [
     * {
     *   "name":"name",
     *   "label":"Name",
     *   "width":300,
     *   "fixed":true
     *  },
     * {
     *   "name":"age",
     *   "label":"Age"
     * }
     * ]
     */
    this.columns = [];
    /**
     * Grid data to display on table
     * [{
     *  'id': '5e7118ddce4b3d577956457f',
     *  'age': 21,
     *  'name': 'John',
     *  'company': 'India',
     *  'email': 'john@example.com',
     *  'phone': '+1 (839) 560-3581',
     *  'address': '326 Irving Street, Grimsley, Texas, 4048'
     *  }]
     */
    this.data = [];
    this.selectedRowKeys = [];
    this.gcId = 'gc-table';
    this.keyField = 'id';
    this.serverSide = false;
    this.sortable = true;
    this.sortOrder = '';
    this.paginate = true;
    this.page = 1;
    this.pageSize = 20;
    this.totalItems = 0;
    this.emptyState = {
      title: 'No items',
      description: 'There are no items to display',
    };
    this.settingColumns = false;
    this.isStripe = true;
    this.isBordered = true;
    this.isNoBorderedAll = false;
    this.settingTable = {};
    this.isCustomHeader = false;
    this.isNoBorderedEmptyState = false;
    this.maxHeight = '';
    this.isExpandable = false;
    this.treeData = [];
    this.loadingGroupIndex = [];
    this.maxWidthInExpandRow = '';
    this.groupByFields = [];
    this.groupByValue = '';
    this.expandedRows = [];
    this.hoveredCell = {};
    this.isSelectAll = false;
    this.showingColumns = {};
    this.posColumns = {};
    this.showTooltip = false;
    this.clickedCell = {};
    this.isStopScaleWidth = false;
    this.totalExpanded = 0;
    this.selectedGroupBy = 'Select Grouping';
    this.onSelectAllClick = () => {
      let selectedRowKeys = [];
      this.isSelectAll = !this.isSelectAll;
      if (this.isSelectAll)
        selectedRowKeys = this.getData().map(row => row[this.keyField]);
      this.onSelectChange(selectedRowKeys);
    };
    this.onRowSelectClick = row => {
      let selectedRowKeys = [...this.selectedRowKeys];
      if (selectedRowKeys.includes(row[this.keyField])) {
        this.isSelectAll = false;
        selectedRowKeys = selectedRowKeys.filter(rowId => rowId !== row[this.keyField]);
      }
      else {
        selectedRowKeys.push(row[this.keyField]);
      }
      this.onSelectChange(selectedRowKeys);
    };
    this.onCellMouseOver = (row, column) => {
      this.hoveredCell = { row, column };
    };
    this.onCellMouseOut = () => {
      this.hoveredCell = { row: '', column: '' };
    };
    this.onDrop = e => {
      const newValue = e.detail;
      const values = Object.values(newValue) && Object.values(newValue)[0];
      const swapCol = Object.keys(this.posColumns).find(key => this.posColumns[key] === values.position);
      let emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
        return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: this.posColumns && this.posColumns[key] !== undefined ? this.posColumns[key] : idx } });
      }, {});
      const newPos = Object.keys(newValue).reduce((res, key) => {
        return Object.assign(Object.assign({}, res), { [key]: newValue[key].position });
      }, {});
      this.posColumns = Object.assign(Object.assign(Object.assign({}, this.posColumns), newPos), { [swapCol]: values.oldPos });
      emitValues = Object.assign(Object.assign(Object.assign({}, emitValues), newValue), { [swapCol]: { hidden: !this.showingColumns[swapCol], position: values.oldPos } });
      this.gcTableSettingChange.emit(emitValues);
    };
  }
  watchTreeDataPropHandler(newValue) {
    if (typeof newValue !== 'string') {
      if (newValue && newValue.length === 0) {
        this.totalExpanded = 0;
      }
    }
  }
  watchGroupByValuePropHandler(newValue) {
    if (!newValue) {
      this.selectedGroupBy = 'Select Grouping';
      return;
    }
    if (this.isExpandable) {
      this.totalExpanded = 0;
      let foundGroudBy = undefined;
      if (this.groupByFields.length > 0) {
        foundGroudBy = this.groupByFields.find(field => field.value == newValue);
      }
      if (foundGroudBy) {
        this.selectedGroupBy = foundGroudBy.label;
      }
    }
  }
  watchExpandedRowsPropHandler(expandedRows) {
    if (expandedRows.length > 0) {
      this.gcTableChildDataChange.emit({ expandedRows });
    }
  }
  watchColumnsPropHandler(newValue) {
    let currentColumns = newValue;
    if (typeof newValue === 'string') {
      try {
        currentColumns = JSON.parse(newValue);
      }
      catch (e) {
        currentColumns = [];
      }
    }
    this.showingColumns = currentColumns.reduce((res, col) => {
      let showValue = false;
      if (this.settingTable && this.settingTable[col.name] && this.settingTable[col.name].hidden !== undefined) {
        showValue = this.settingTable[col.name].hidden ? false : true;
      }
      else {
        showValue = true;
      }
      res = Object.assign(Object.assign({}, res), { [col.name]: showValue });
      return res;
    }, {});
    this.posColumns = currentColumns.reduce((res, col, idx) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position - 1 : idx });
      return res;
    }, {});
  }
  watchSettingTablePropHandler(newSetting) {
    this.showingColumns = this.getColumns().reduce((res, col) => {
      let showValue = false;
      if (newSetting && newSetting[col.name] && newSetting[col.name].hidden !== undefined) {
        showValue = newSetting[col.name].hidden ? false : true;
      }
      else {
        showValue = true;
      }
      res = Object.assign(Object.assign({}, res), { [col.name]: showValue });
      return res;
    }, {});
    this.posColumns = this.getColumns().reduce((res, col, idx) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: newSetting && newSetting[col.name] ? newSetting[col.name].position : idx });
      return res;
    }, {});
  }
  handleChangePage(ev) {
    this.page = ev.detail.value;
  }
  handleToggleTooltip(ev) {
    this.showTooltip = ev.detail.value;
  }
  handleResize(ev) {
    this.isStopScaleWidth = ev.target.innerWidth <= DEFAULT_SCREEN_WIDTH_TO_STOP_SCALE;
  }
  handleOpenExpandableRowsEvent(evt) {
    this.totalExpanded += 1;
    this.gcTableCollapseChange.emit({ index: evt.detail.index, expanded: true });
  }
  handleCloseExpandableRowsEvent(evt) {
    if (this.totalExpanded > 0) {
      this.totalExpanded -= 1;
    }
    this.gcTableCollapseChange.emit({ index: evt.detail.index, expanded: false });
  }
  onSelectChange(selectedRowKeys) {
    this.selectedRowKeys = selectedRowKeys;
    this.gcSelectChange.emit({ value: this.selectedRowKeys, isSelectAll: this.isSelectAll });
  }
  onCellClick(row, column) {
    this.clickedCell = { row, column };
    this.gcCellClick.emit({ record: row, column });
  }
  onCheck(e, name) {
    this.showingColumns = Object.assign(Object.assign({}, this.showingColumns), { [name]: e.detail.value });
    const emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
      return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: this.posColumns && this.posColumns[key] !== undefined ? this.posColumns[key] : idx } });
    }, {});
    this.gcTableSettingChange.emit(emitValues);
    if (this.totalExpanded > 0) {
      this.gcTableChildDataChange.emit({ expandedRows: this.expandedRows });
    }
  }
  onClearEmptyState() {
    if (this.gcClearEmptyState) {
      this.gcClearEmptyState.emit({});
    }
  }
  onSelectGroupByMenu(field) {
    this.selectedGroupBy = field.label;
    this.gcTableGroupByChange.emit(field);
  }
  renderHeader() {
    const fixedCols = [];
    const scrollCols = [];
    let fixedLastCol = undefined;
    if (this.selectionType === 'checkbox') {
      fixedCols.push(index$1.h("div", { class: "gc__col center" }, index$1.h("div", { class: "col-content" })));
    }
    const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
    columnsWithPos.sort((a, b) => a.pos - b.pos);
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
    columnsWithPos.forEach((col, i) => {
      if (this.showingColumns[col.name]) {
        let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
        if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
          colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : col.width || this.getColumns()[i].width;
        const colEl = (index$1.h("div", { onClick: () => {
            if (!this.sortable || !col.sortable)
              return;
            if (this.sortBy === col.name) {
              if (this.sortOrder === 'asc')
                this.sortOrder = 'desc';
              else {
                this.sortBy = null;
              }
            }
            else {
              this.sortBy = col.name;
              this.sortOrder = 'asc';
            }
            this.gcSort.emit({ sortBy: this.sortBy, sortOrder: this.sortOrder });
          }, class: { gc__col: true, sort: this.sortBy === col.name || col.sortable }, style: { width: colWidth, background: this.background, padding: col.padding } }, index$1.h("div", { class: "col-content" }, index$1.h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label), index$1.h("div", { class: "col-actions" }, (() => {
          if (!this.sortable || !col.sortable || columnsWithPos.length === 1)
            return;
          return (index$1.h("div", { class: "gc__table-arrow" }, index$1.h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }), index$1.h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
        })()))));
        if (i === columnsWithPos.length - 1 && col.name === 'custom_actions') {
          fixedLastCol = (index$1.h("div", { class: { gc__col: true, sort: false }, style: { width: `${col.actions.length * 3}vw`, background: this.background } }, index$1.h("div", { class: "col-content" }, index$1.h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label))));
        }
        else {
          col.fixed && (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
            ? fixedCols.push(colEl)
            : scrollCols.push(colEl);
        }
      }
    });
    return (index$1.h("div", { class: "header" }, index$1.h("div", { class: "gc__row" }, index$1.h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedCols), index$1.h("div", { class: "scrollable-columns columns-container" }, scrollCols), index$1.h("div", { class: "fixed-right-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedLastCol))));
  }
  renderHeaderWithExpandableRows() {
    const scrollCols = [];
    const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
    columnsWithPos.sort((a, b) => a.pos - b.pos);
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
    columnsWithPos.forEach((col, i) => {
      if (this.showingColumns[col.name]) {
        let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
        if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
          colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : col.width || this.getColumns()[i].width;
        const colEl = (index$1.h("div", { onClick: () => {
            if (!this.sortable || !col.sortable)
              return;
            if (this.sortBy === col.name) {
              if (this.sortOrder === 'asc')
                this.sortOrder = 'desc';
              else {
                this.sortBy = null;
              }
            }
            else {
              this.sortBy = col.name;
              this.sortOrder = 'asc';
            }
            this.gcSort.emit({ sortBy: this.sortBy, sortOrder: this.sortOrder });
          }, class: { gc__col: true, sort: this.sortBy === col.name || col.sortable }, style: { width: colWidth, background: this.background, padding: col.padding } }, index$1.h("div", { class: "col-content" }, index$1.h("div", { class: "col-text", style: { padding: col.paddingText || '' } }, col.label), index$1.h("div", { class: "col-actions" }, (() => {
          if (!this.sortable || !col.sortable || columnsWithPos.length === 1)
            return;
          return (index$1.h("div", { class: "gc__table-arrow" }, index$1.h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }), index$1.h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
        })()))));
        scrollCols.push(colEl);
      }
    });
    return (index$1.h("div", { class: { 'header-with-expandable': true, 'transition': this.totalExpanded > 0 } }, index$1.h("div", { class: "gc__row" }, index$1.h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
  }
  renderActions(row, column, conditionToDisplayActions) {
    return conditionToDisplayActions ? (index$1.h("div", { class: { gc__actions: true } }, column.actions.map(action => {
      const matchCondition = row.actions && row.actions[column.name] && row.actions[column.name].includes(action.key) ? true : false;
      return (index$1.h("gc-button", { class: `gc__btn-action ${matchCondition ? 'active' : ''}`, key: action.key, paddingText: "10px 0", height: "24px", href: action.onLink && row ? action.onLink(row) : null, disabled: action.disabled, target: action.target, "onGc:click": () => {
          if (action.onClick && row) {
            action.onClick(row);
          }
        }, type: action.type }, action.name));
    }))) : null;
  }
  renderColumnContent(row, column, conditionToDisplayActions) {
    var _a, _b;
    if ((column.isLongText && (row === null || row === void 0 ? void 0 : row[column.name]) && (row === null || row === void 0 ? void 0 : row[column.name].length) > MAX_LONG_TEXT$1) || column.isCopyText) {
      return (index$1.h("div", { class: "col-text", style: { padding: column.paddingText || '' } }, index$1.h("gc-tooltip", { isLongText: column.isLongText, isCopyText: column.isCopyText, content: row === null || row === void 0 ? void 0 : row[column.name], isToggle: ((_a = this.clickedCell) === null || _a === void 0 ? void 0 : _a.row) === row && ((_b = this.clickedCell) === null || _b === void 0 ? void 0 : _b.column.name) === column.name }), this.renderActions(row, column, conditionToDisplayActions)));
    }
    if ((row === null || row === void 0 ? void 0 : row[column.name]) && typeof (row === null || row === void 0 ? void 0 : row[column.name]) === 'string' && (row === null || row === void 0 ? void 0 : row[column.name].includes('gc-cell-invalid'))) {
      return index$1.h("div", { class: "col-text", innerHTML: row === null || row === void 0 ? void 0 : row[column.name], style: { height: '100%', padding: '0' } });
    }
    return (index$1.h("div", { class: "col-text", innerHTML: row === null || row === void 0 ? void 0 : row[column.name], style: { padding: column.paddingText || '' } }, this.renderActions(row, column, conditionToDisplayActions)));
  }
  renderBody() {
    const rows = [];
    let data = [...this.getData()];
    if (!this.serverSide) {
      if (this.sortable && this.sortBy) {
        data = data.sort((a, b) => {
          if (a[this.sortBy] < b[this.sortBy])
            return this.sortOrder === 'asc' ? -1 : 1;
          if (a[this.sortBy] > b[this.sortBy])
            return this.sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
      }
      if (this.paginate) {
        data = data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
      }
    }
    data.forEach((row, idx) => {
      const fixedCols = [];
      const scrollCols = [];
      let fixedLastCol = undefined;
      if (this.selectionType === 'checkbox')
        fixedCols.push(index$1.h("div", { class: { gc__col: true, center: true } }, index$1.h("div", { class: "col-content" })));
      const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
      columnsWithPos.forEach((column, i) => {
        var _a;
        if (this.showingColumns[column.name]) {
          let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
          if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
            colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : column.width || this.getColumns()[i].width;
          const conditionToDisplayActions = row.actions && row.actions[column.name] && column.actions && column.actions.length > 0 && ((_a = this.hoveredCell) === null || _a === void 0 ? void 0 : _a.row) === row;
          const colEl = (index$1.h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
              width: colWidth,
              background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
              padding: column.padding,
            }, onMouseOver: () => this.onCellMouseOver(row, column), onMouseOut: () => this.onCellMouseOut(), onClick: () => {
              const selection = window.getSelection();
              if (selection.type != 'Range')
                this.onCellClick(row, column);
            } }, index$1.h("div", { class: "col-content" }, this.renderColumnContent(row, column, conditionToDisplayActions))));
          if (i === columnsWithPos.length - 1 && column.name === 'custom_actions') {
            fixedLastCol = (index$1.h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
                width: `${column.actions.length * 3}vw`,
                background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
              }, onMouseOver: () => this.onCellMouseOver(row, column), onMouseOut: () => this.onCellMouseOut(), onClick: () => {
                const selection = window.getSelection();
                if (selection.type != 'Range')
                  this.onCellClick(row, column);
              } }, index$1.h("div", { class: "col-content", style: { justifyContent: 'space-evenly' } }, column.actions.map(action => (index$1.h("gc-button", { "onGc:click": () => action.onClick(row), type: action.type, height: "27px", paddingText: "8px" }, index$1.h("gc-icon", { color: "white", size: "16px", name: action.icon })))))));
          }
          else {
            column.fixed && (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
              ? fixedCols.push(colEl)
              : scrollCols.push(colEl);
          }
        }
      });
      rows.push(index$1.h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
          background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
          border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
        } }, index$1.h("div", { class: "fixed-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedCols), index$1.h("div", { class: "scrollable-columns columns-container" }, scrollCols), index$1.h("div", { class: "fixed-right-columns columns-container", style: { position: countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth ? 'relative' : 'sticky' } }, fixedLastCol)));
    });
    return (index$1.h("div", { style: { maxHeight: this.maxHeight }, class: "gc__table-body" }, rows));
  }
  renderBodyWithExpandableRows() {
    const treeData = [...this.getTreeData()];
    const collapsedRows = [];
    treeData.forEach(expandedRow => {
      const rows = [];
      const { index, field_name: fieldName, value, total, tooltip_message: tooltipMessage, total_text: totalText, link_to: linkTo, data = [], number_of_entry_per_page: numberOfEntryPerPage = 0, } = expandedRow;
      data.forEach((row, idx) => {
        const scrollCols = [];
        const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
        columnsWithPos.sort((a, b) => a.pos - b.pos);
        const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key] && key !== 'custom_actions');
        columnsWithPos.forEach((column, i) => {
          var _a;
          if (this.showingColumns[column.name]) {
            let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}%` : DEFAULT_CELL_WIDTH;
            if (countCurrentCol.length > DEFAULT_MAXIMUM_TO_SCALE || (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && this.isStopScaleWidth))
              colWidth = i === columnsWithPos.length - 1 ? DEFAULT_CELL_WIDTH : column.width || this.getColumns()[i].width;
            const conditionToDisplayActions = row.actions && row.actions[column.name] && column.actions && column.actions.length > 0 && ((_a = this.hoveredCell) === null || _a === void 0 ? void 0 : _a.row) === row;
            const colEl = (index$1.h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
                width: colWidth,
                background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
                padding: column.padding,
              }, onMouseOver: () => this.onCellMouseOver(row, column), onMouseOut: () => this.onCellMouseOut(), onClick: () => {
                const selection = window.getSelection();
                if (selection.type != 'Range')
                  this.onCellClick(row, column);
              } }, index$1.h("div", { class: "col-content" }, this.renderColumnContent(row, column, conditionToDisplayActions))));
            scrollCols.push(colEl);
          }
        });
        rows.push(index$1.h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
            background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
            border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
          } }, index$1.h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
      });
      const expandableRows = (index$1.h("gc-cell-expandable", { class: { 'is-loading': this.loadingGroupIndex.includes(`${index}`) }, index: index, fieldName: fieldName, value: value, total: total, totalText: totalText, linkTo: linkTo, tooltipMessage: tooltipMessage, numberOfEntryPerPage: numberOfEntryPerPage || data.length, maxWidth: this.maxWidthInExpandRow }, this.loadingGroupIndex.includes(`${index}`) && (index$1.h("div", { class: "loading-section" }, index$1.h("gc-spinner", null))), rows));
      collapsedRows.push(expandableRows);
    });
    return (index$1.h("div", { style: { maxHeight: this.maxHeight }, class: "gc__table-body" }, collapsedRows));
  }
  getTotalItems() {
    let totalItems = this.totalItems;
    const length = this.isExpandable ? this.getTreeData().length : this.getData().length;
    if (this.paginate && !this.serverSide)
      totalItems = this.totalItems || length;
    return totalItems || length;
  }
  getData() {
    if (this.data) {
      if (typeof this.data === 'string') {
        try {
          return JSON.parse(this.data);
        }
        catch (e) {
          return [];
        }
      }
      return this.data;
    }
  }
  getTreeData() {
    if (this.treeData) {
      if (typeof this.treeData === 'string') {
        try {
          return JSON.parse(this.treeData);
        }
        catch (e) {
          return [];
        }
      }
      return this.treeData;
    }
  }
  getColumns() {
    if (this.columns) {
      if (typeof this.columns === 'string') {
        try {
          return JSON.parse(this.columns);
        }
        catch (e) {
          return [];
        }
      }
      return this.columns;
    }
  }
  componentWillLoad() {
    this.showingColumns = this.getColumns().reduce((res, col) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] && this.settingTable[col.name].hidden ? false : true });
      return res;
    }, {});
    this.posColumns = this.getColumns().reduce((res, col, idx) => {
      res = Object.assign(Object.assign({}, res), { [col.name]: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx });
      return res;
    }, {});
    if (this.isExpandable) {
      let foundGroudBy = undefined;
      if (this.groupByFields.length > 0) {
        foundGroudBy = this.groupByFields.find(field => field.value == this.groupByValue);
      }
      if (foundGroudBy) {
        this.selectedGroupBy = foundGroudBy.label;
      }
    }
  }
  renderPagination() {
    let totalItems = this.getTotalItems();
    totalItems = totalItems ? totalItems.toLocaleString() : '';
    return (index$1.h("div", { class: "pagination" }, index$1.h("div", { class: "page-sizes-select" }), index$1.h("div", { class: "pagination-item-count" }, index$1.h("span", null, "Showing"), "\u00A0", this.pageSize * (this.page - 1) + 1, "\u00A0to\u00A0", this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(), "\u00A0of\u00A0", totalItems || 0, "\u00A0", +totalItems === 1 ? 'entry' : 'entries'), index$1.h("div", { class: "pagination-right" }, index$1.h("div", { class: "table-footer-right-content" }, index$1.h("div", { class: "table-footer-right-content-pagination" }, index$1.h("gc-pagination", { activePage: this.page, total: this.getTotalItems(), pageSize: this.pageSize }))))));
  }
  renderSettingColumns() {
    if (this.settingColumns || this.customEmptyState || this.isNoBorderedAll || this.isCustomHeader) {
      let totalItems = this.getTotalItems();
      totalItems = totalItems ? totalItems.toLocaleString() : '';
      const columnsWithPos = this.getColumns().map((col, idx) => (Object.assign(Object.assign({}, col), { pos: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const columns = columnsWithPos.filter(col => col.name !== 'custom_actions');
      const filteredGroupByFields = this.groupByFields.filter(field => field.label != this.selectedGroupBy);
      return (index$1.h("div", { style: { background: this.background, border: this.isNoBorderedAll ? '0' : '' }, class: "gc__table-setting" }, this.customEmptyState || this.isNoBorderedAll || this.isCustomHeader ? (index$1.h("div", null, index$1.h("slot", { name: "gc__table-setting-title" }))) : (index$1.h("slot", { name: "gc__table-setting-title" }, "Results: ", totalItems || 0, " ", +totalItems === 1 ? 'entry' : 'entries', " found matching applied filters:")), index$1.h("div", { style: { display: 'flex' } }, !!(this.groupByFields.length > 0) && (index$1.h("div", null, index$1.h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-layer-group", size: "14px" }), "\u00A0", index$1.h("b", { style: { marginRight: '6px' } }, "Group by:"), index$1.h("gc-dropdown", { id: "dropdown_group_by", trigger: "click", allowForceClose: true, suffixArrow: true }, index$1.h("gc-link", { color: "var(--gc-color-primary)" }, index$1.h("span", { class: "gc__table-setting-manage-title-group-by" }, this.selectedGroupBy)), index$1.h("gc-menu", { slot: "gc__dropdown-content", class: "menu-no-border", style: { width: '200px' } }, filteredGroupByFields.map(field => (index$1.h("gc-menu-item", { background: "white", value: field.value, "onGc:menu-item-click": () => this.onSelectGroupByMenu(field) }, index$1.h("span", { style: { opacity: field.value === '' ? '0.5' : '1' } }, field.label)))))))), !!(this.groupByFields.length > 0) && index$1.h("div", { class: "gc__table-divider" }), this.settingColumns && (index$1.h("gc-dropdown", { id: `dropdown_${this.gcId}` }, index$1.h("gc-link", { icon: "fa-solid fa-table-layout", color: "#51666C" }, index$1.h("span", { class: "gc__table-setting-manage-title" }, "Manage Table Columns")), index$1.h("div", { slot: "gc__dropdown-content", class: "dropdown" }, index$1.h("div", { class: "gc__table-setting-cols-text" }, index$1.h("gc-icon", { color: "red", name: "fa-regular fa-square-info" }), index$1.h("gc-h2", { class: "gc__table-setting-cols-title" }, "Manage Table Columns")), index$1.h("gc-drag-container", { "onGc:drop": this.onDrop, "class-container": `gc__table-setting-cols ${columns.length < 6 ? 'less-cols' : ''}`, "class-daggable": ".draggable-item", group: "table-setting-cols" }, columns.map(col => (index$1.h("gc-draggable-item", { "data-col-name": col.name, "data-col-check": `${this.showingColumns[col.name]}`, key: `${this.gcId}_${col.name}`, class: { 'draggable-item': !col.alwaysDisplay } }, index$1.h("div", { key: `${this.gcId}_${col.name}`, class: { 'gc__table-setting-col-item': true, 'disabled': col.alwaysDisplay } }, index$1.h("gc-icon", { color: "var(--gc-color-secondary-grey)", name: "fa-solid fa-grip-dots-vertical" }), index$1.h("gc-checkbox", { disabled: col.alwaysDisplay || false, "gc-name": `${this.gcId}_${col.name}`, label: col.label, checked: col.alwaysDisplay || this.showingColumns[col.name], "onGc:change": e => this.onCheck(e, col.name) }))))))))))));
    }
  }
  render() {
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
    const conditionShowing = this.isExpandable ? this.getTreeData().length > 0 : this.getData().length > 0;
    return (index$1.h(index$1.Host, { class: { 'is-loading': this.isLoading } }, this.isLoading && (index$1.h("div", { class: "loading-section" }, index$1.h("gc-spinner", null))), this.renderSettingColumns(), conditionShowing ? (index$1.h("div", { style: { border: this.isNoBorderedAll && !this.isStripe ? '0' : '' }, class: {
        'gc__table': true,
        'sortable': this.sortable,
        'paginate': this.paginate,
        'gc__table-no-stripe': !this.isStripe,
        'gc__table-no-border': !this.isBordered,
        'gc__table-loading': this.isLoading,
      } }, index$1.h("div", { class: "table-scroll-container", style: {
        overflow: (countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE && !this.isStopScaleWidth) ||
          (this.isExpandable && this.totalExpanded === 0 && countCurrentCol.length <= DEFAULT_MAXIMUM_TO_SCALE)
          ? 'hidden'
          : 'auto',
        position: this.showTooltip ? 'static' : 'inherit',
      } }, this.isExpandable ? this.renderHeaderWithExpandableRows() : this.renderHeader(), this.isExpandable ? this.renderBodyWithExpandableRows() : this.renderBody()), this.paginate && (index$1.h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))) : (this.renderEmptyState())));
  }
  renderEmptyState() {
    if (this.customEmptyState) {
      return index$1.h("div", { class: { 'gc__table-loading': this.isLoading }, innerHTML: this.customEmptyState });
    }
    return (index$1.h("div", { class: { 'empty-table': true, 'empty-table-no-bordered': this.isNoBorderedEmptyState, 'gc__table-loading': this.isLoading } }, index$1.h("div", { class: "empty-title" }, index$1.h("gc-h2", null, "There is no records found matching applied filters")), index$1.h("gc-button", { onClick: () => this.onClearEmptyState(), type: "secondary", icon: "fa-regular fa-filter-slash" }, "Clear applied filters")));
  }
  get elm() { return index$1.getElement(this); }
  static get watchers() { return {
    "treeData": ["watchTreeDataPropHandler"],
    "groupByValue": ["watchGroupByValuePropHandler"],
    "expandedRows": ["watchExpandedRowsPropHandler"],
    "columns": ["watchColumnsPropHandler"],
    "settingTable": ["watchSettingTablePropHandler"]
  }; }
};
GcTable.style = gcTableCss;

const GcTabs = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcTabChange = index$1.createEvent(this, "gc:tab-change", 7);
  }
  tabClick(evt) {
    if (evt.detail.target) {
      this.selectTab(evt.detail.target);
      this.gcTabChange.emit(evt.detail.target);
    }
  }
  selectTab(target) {
    const tabs = this.getTabs();
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].selected = target === tabs[i].target;
    }
    const tabPanels = this.getTabPanels();
    for (let i = 0; i < tabPanels.length; i++) {
      tabPanels[i].active = target === tabPanels[i].value;
    }
  }
  getTabs() {
    var _a;
    return (_a = this.elm) === null || _a === void 0 ? void 0 : _a.querySelectorAll('gc-tab');
  }
  getTabPanels() {
    var _a;
    return (_a = this.elm) === null || _a === void 0 ? void 0 : _a.querySelectorAll('gc-tab-panel');
  }
  tabsHaveTarget() {
    var _a;
    return (_a = this.elm) === null || _a === void 0 ? void 0 : _a.querySelector('gc-tab[target]');
  }
  componentDidLoad() {
    var _a;
    if (!this.tabsHaveTarget()) {
      const tabs = this.getTabs();
      tabs.forEach((tab, index) => {
        tab.setAttribute('target', 'tab-' + index);
      });
      this.getTabPanels().forEach((tab, index) => {
        tab.setAttribute('value', 'tab-' + index);
      });
      if (tabs.length)
        this.selectTab('tab-0');
    }
    else {
      if ('getAttributeNode' in this.elm) {
        const selectedTab = (_a = this.elm) === null || _a === void 0 ? void 0 : _a.querySelector('gc-tab[selected]');
        if (selectedTab)
          this.selectTab(selectedTab['target']);
      }
    }
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("slot", null)));
  }
  get elm() { return index$1.getElement(this); }
};

const gcTabsListCss = ".tabs-list.sc-gc-tabs-list{display:flex;position:relative}.tabs-list slot.sc-gc-tabs-list-s>button{display:block;margin:0;--button-border-width:0.125rem;--button-border-radius:0}.tabs-list.sc-gc-tabs-list .tabs-container.sc-gc-tabs-list{z-index:1;width:100%;display:flex}";

const GcTabsList = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.variant = 'line';
    this.managed = false;
  }
  tabClick(evt) {
    if (!this.managed) {
      this.deselectAllTabs();
      evt.target.selected = true;
    }
  }
  deselectAllTabs() {
    var _a;
    const tabs = (_a = this.elm) === null || _a === void 0 ? void 0 : _a.querySelectorAll('gc-tab');
    tabs.forEach(tab => {
      tab.selected = false;
    });
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("div", { class: { 'tabs-list': true, [`variant-${this.variant}`]: true } }, index$1.h("div", { class: "tabs-container" }, index$1.h("slot", null)))));
  }
  get elm() { return index$1.getElement(this); }
};
GcTabsList.style = gcTabsListCss;

const gcTagCss = ".gc__badge{border-radius:60px;text-align:center;color:var(--gc-color-contrast-white);padding:10px;display:inline-block}.gc__badge--primary{background-color:var(--gc-color-primary)}.gc__badge--success{background-color:var(--gc-color-green)}.gc__badge--warning{background-color:var(--gc-color-orange)}.gc__badge--danger{background-color:var(--gc-color-dark-red)}.gc__badge--info{background-color:var(--gc-color-cyan)}.gc__badge--processing{background-color:var(--gc-color-purple)}.gc__badge--dark{background-color:var(--gc-color-third-grey)}";

const GcTag = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    /**
     * The width of badge
     */
    this.width = 'auto';
    /**
     * The width of badge
     */
    this.height = '';
    /**
     * The background of badge
     */
    this.background = 'var(--gc-color-primary)';
    /**
     * The color of badge
     */
    this.color = 'var(--gc-color-contrast-white)';
    /**
     * The border width of badge
     */
    this.borderWidth = '0px';
    /**
     * The border color of badge
     */
    this.borderColor = 'none';
  }
  getClassNameFromType() {
    return `gc__badge gc__badge--${this.type}`;
  }
  getClassName() {
    return this.class ? `${this.getClassNameFromType()} ${this.class}` : `${this.getClassNameFromType()}`;
  }
  getStyle() {
    return {
      width: this.width,
      color: this.color,
      backgroundColor: this.type ? '' : this.background,
      borderWidth: this.type ? 'none' : this.borderWidth || '1px',
      borderColor: this.type ? 'none' : this.borderColor,
      borderStyle: this.type ? 'none' : 'solid',
      height: this.height,
      lineHeight: this.height,
    };
  }
  render() {
    return (index$1.h("div", { style: this.getStyle(), class: this.getClassName(), id: this.gcId }, index$1.h("slot", null)));
  }
};
GcTag.style = gcTagCss;

const gcTextareaCss = ".sc-gc-textarea-h{display:flex}textarea.sc-gc-textarea{background:var(--gc-color-contrast-grey);border:1px solid var(--gc-color-second-grey);border-radius:5px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative;display:inline-block;margin:0}textarea.has-error.sc-gc-textarea{background:#FFF9F9;border:1px solid var(--gc-color-red)}textarea[disabled].sc-gc-textarea{color:#00000040;background-color:#f5f5f5;box-shadow:none;cursor:not-allowed;opacity:1}textarea.sc-gc-textarea:focus{background-color:var(--gc-color-contrast-grey);border-color:var(--gc-color-primary);outline:0;box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.sc-gc-textarea::placeholder{color:var(--gc-color-placeholder)}.sc-gc-textarea:-ms-input-placeholder{color:var(--gc-color-placeholder)}.sc-gc-textarea::-ms-input-placeholder{color:var(--gc-color-placeholder)}textarea.sc-gc-textarea::-webkit-scrollbar{height:3px;width:3px}textarea.sc-gc-textarea::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}textarea.sc-gc-textarea::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}";

const GcTextarea = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcChange = index$1.createEvent(this, "gc:change", 7);
    /**
     * Is error
     */
    this.isError = false;
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.value || '' });
    };
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("textarea", { style: { height: this.height, resize: this.resize }, class: `${this.class || ''} ${this.isError ? 'has-error' : ''}`, name: this.gcName, onInput: this.onInput, id: this.gcId, value: this.value, placeholder: this.placeholder, disabled: this.disabled, maxlength: this.maxlength, rows: this.rows, cols: this.cols })));
  }
};
GcTextarea.style = gcTextareaCss;

const gcTooltipCss = ".sc-gc-tooltip-h{--z-index-tooltip:999}#tooltip.sc-gc-tooltip{display:none;background-color:var(--gc-color-contrast-white);z-index:var(--z-index-tooltip);max-width:400px;color:var(--gc-color-text-grey);background:white;border-radius:4px;border:1px solid var(--gc-color-second-grey);padding:10px}#tooltip[data-show].sc-gc-tooltip{display:block}#arrow.sc-gc-tooltip,#arrow.sc-gc-tooltip::before{position:absolute;width:8px;height:8px;background:inherit}#arrow.sc-gc-tooltip{visibility:hidden}#arrow.sc-gc-tooltip::before{visibility:visible;content:'';width:0;height:0;top:-5px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--gc-color-second-grey)}#arrow.sc-gc-tooltip::after{visibility:visible;content:'';width:0;height:0;top:-4px;position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white}#tooltip[data-popper-placement^='top'].sc-gc-tooltip>#arrow.sc-gc-tooltip{bottom:-4px}#tooltip[data-popper-placement^='bottom'].sc-gc-tooltip>#arrow.sc-gc-tooltip{top:-4px}#tooltip[data-popper-placement^='left'].sc-gc-tooltip>#arrow.sc-gc-tooltip{right:-4px}#tooltip[data-popper-placement^='right'].sc-gc-tooltip>#arrow.sc-gc-tooltip{left:-4px}.slot-container.sc-gc-tooltip{width:fit-content}";

const MAX_LONG_TEXT = 100;
const GcTooltip = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcToggleTooltip = index$1.createEvent(this, "gc:toggle-tooltip", 7);
    /**
     * Is Long Text?
     */
    this.isLongText = false;
    /**
     * Is Toggle?
     */
    this.isToggle = false;
    /**
     * Right position
     */
    this.rightPos = '';
    /**
     * Top position
     */
    this.topPos = '';
    /**
     * Is Popover?
     */
    this.isPopover = false;
    this.showTooltip = false;
    this.isCopied = false;
  }
  getIsCopyText() {
    if (this.isCopyText) {
      if (typeof this.isCopyText === 'string') {
        try {
          return JSON.parse(this.isCopyText);
        }
        catch (e) {
          return undefined;
        }
      }
      return this.isCopyText;
    }
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) {
        return;
      }
    }
    this.showTooltip = false;
    this.dropdownElm.removeAttribute('data-show');
    this.gcToggleTooltip.emit(this.showTooltip);
  }
  renderCutText() {
    const isCopyText = this.getIsCopyText();
    if (this.isLongText) {
      return this.content.length > MAX_LONG_TEXT ? this.content.slice(0, MAX_LONG_TEXT) + '...' : this.content;
    }
    if (isCopyText && this.content) {
      if (isCopyText.remainSuffix) {
        return this.content.length > +isCopyText.remainSuffix ? '...' + this.content.slice(-isCopyText.remainSuffix) : this.content;
      }
      if (isCopyText.remainPrefix) {
        return this.content.length > +isCopyText.remainPrefix ? this.content.slice(0, isCopyText.remainPrefix) + '...' : this.content;
      }
    }
    return this.content;
  }
  onToggleTooltip() {
    if (this.isCopied) {
      return;
    }
    if (!this.dropdownElm.hasAttribute('data-show')) {
      this.dropdownElm.setAttribute('data-show', '');
      // We need to tell Popper to update the tooltip position
      // after we show the tooltip, otherwise it will be incorrect
      this.popperInstance.update();
    }
    else {
      this.dropdownElm.removeAttribute('data-show');
    }
    this.showTooltip = !this.showTooltip;
    this.gcToggleTooltip.emit(this.showTooltip);
  }
  componentDidLoad() {
    this.popperInstance = createPopper(this.containerElm, this.dropdownElm, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }
  render() {
    return (index$1.h(index$1.Host, null, index$1.h("div", { style: { color: 'var(--gc-color-text-grey)', textDecoration: this.isPopover ? '' : 'underline', cursor: 'pointer' }, onClick: () => this.onToggleTooltip(), class: "slot-container", id: "host-element", "aria-describedby": "tooltip", ref: elm => (this.containerElm = elm) }, this.renderCutText()), index$1.h("div", { class: "gc__dropdown-content", id: "tooltip", role: "tooltip", ref: elm => (this.dropdownElm = elm) }, this.content, this.getIsCopyText() && (index$1.h("div", { style: { marginTop: '8px' } }, index$1.h("gc-button", { height: "29px", type: "primary", "onGc:click": () => copyClipboard(this.content, () => {
        this.isCopied = !this.isCopied;
        setTimeout(() => {
          this.isCopied = false;
        }, 500);
      }) }, this.isCopied ? 'Copied' : this.getIsCopyText().text || 'Copy'))), index$1.h("div", { id: "arrow", "data-popper-arrow": true }))));
  }
  get elm() { return index$1.getElement(this); }
};
GcTooltip.style = gcTooltipCss;

const GcUl = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-ul ${this.class}` : 'gc-ul';
  }
  render() {
    return (index$1.h("ul", { class: this.getClassName(), id: this.gcId }, index$1.h("slot", null)));
  }
};

var objectExtend = extend;

/*
  var obj = {a: 3, b: 5};
  extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 4, b: 5, c: 8}

  var obj = {a: 3, b: 5};
  extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 3, b: 5}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3]}

  extend({a: 4, b: 5}); // {a: 4, b: 5}
  extend({a: 4, b: 5}, 3); {a: 4, b: 5}
  extend({a: 4, b: 5}, true); {a: 4, b: 5}
  extend('hello', {a: 4, b: 5}); // throws
  extend(3, {a: 4, b: 5}); // throws
*/

function extend(/* [deep], obj1, obj2, [objn] */) {
  var args = [].slice.call(arguments);
  var deep = false;
  if (typeof args[0] == 'boolean') {
    deep = args.shift();
  }
  var result = args[0];
  if (isUnextendable(result)) {
    throw new Error('extendee must be an object');
  }
  var extenders = args.slice(1);
  var len = extenders.length;
  for (var i = 0; i < len; i++) {
    var extender = extenders[i];
    for (var key in extender) {
      if (Object.prototype.hasOwnProperty.call(extender, key)) {
        var value = extender[key];
        if (deep && isCloneable(value)) {
          var base = Array.isArray(value) ? [] : {};
          result[key] = extend(
            true,
            Object.prototype.hasOwnProperty.call(result, key) && !isUnextendable(result[key])
              ? result[key]
              : base,
            value
          );
        } else {
          result[key] = value;
        }
      }
    }
  }
  return result;
}

function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}

function isUnextendable(val) {
  return !val || (typeof val != 'object' && typeof val != 'function');
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

class $4040acfd8584338d$export$2e2bcd8739ae039 {
    // Add an event listener for given event
    on(event, fn) {
        this._callbacks = this._callbacks || {
        };
        // Create namespace for this event
        if (!this._callbacks[event]) this._callbacks[event] = [];
        this._callbacks[event].push(fn);
        return this;
    }
    emit(event, ...args) {
        this._callbacks = this._callbacks || {
        };
        let callbacks = this._callbacks[event];
        if (callbacks) for (let callback of callbacks)callback.apply(this, args);
        // trigger a corresponding DOM event
        if (this.element) this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
            args: args
        }));
        return this;
    }
    makeEvent(eventName, detail) {
        let params = {
            bubbles: true,
            cancelable: true,
            detail: detail
        };
        if (typeof window.CustomEvent === "function") return new CustomEvent(eventName, params);
        else {
            // IE 11 support
            // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
    }
    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.
    off(event, fn) {
        if (!this._callbacks || arguments.length === 0) {
            this._callbacks = {
            };
            return this;
        }
        // specific event
        let callbacks = this._callbacks[event];
        if (!callbacks) return this;
        // remove all handlers
        if (arguments.length === 1) {
            delete this._callbacks[event];
            return this;
        }
        // remove specific handler
        for(let i = 0; i < callbacks.length; i++){
            let callback = callbacks[i];
            if (callback === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }
        return this;
    }
}



var $fd6031f88dce2e32$exports = {};
$fd6031f88dce2e32$exports = "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail=\"\"></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size=\"\"></span></div>\n    <div class=\"dz-filename\"><span data-dz-name=\"\"></span></div>\n  </div>\n  <div class=\"dz-progress\">\n    <span class=\"dz-upload\" data-dz-uploadprogress=\"\"></span>\n  </div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage=\"\"></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z\"></path>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z\"></path>\n    </svg>\n  </div>\n</div>\n";


let $4ca367182776f80b$var$defaultOptions = {
    /**
   * Has to be specified on elements other than form (or when the form doesn't
   * have an `action` attribute).
   *
   * You can also provide a function that will be called with `files` and
   * `dataBlocks`  and must return the url as string.
   */ url: null,
    /**
   * Can be changed to `"put"` if necessary. You can also provide a function
   * that will be called with `files` and must return the method (since `v3.12.0`).
   */ method: "post",
    /**
   * Will be set on the XHRequest.
   */ withCredentials: false,
    /**
   * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
   * If set to null or 0, no timeout is going to be set.
   */ timeout: null,
    /**
   * How many file uploads to process in parallel (See the
   * Enqueuing file uploads documentation section for more info)
   */ parallelUploads: 2,
    /**
   * Whether to send multiple files in one request. If
   * this it set to true, then the fallback file input element will
   * have the `multiple` attribute as well. This option will
   * also trigger additional events (like `processingmultiple`). See the events
   * documentation section for more information.
   */ uploadMultiple: false,
    /**
   * Whether you want files to be uploaded in chunks to your server. This can't be
   * used in combination with `uploadMultiple`.
   *
   * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
   */ chunking: false,
    /**
   * If `chunking` is enabled, this defines whether **every** file should be chunked,
   * even if the file size is below chunkSize. This means, that the additional chunk
   * form data will be submitted and the `chunksUploaded` callback will be invoked.
   */ forceChunking: false,
    /**
   * If `chunking` is `true`, then this defines the chunk size in bytes.
   */ chunkSize: 2097152,
    /**
   * If `true`, the individual chunks of a file are being uploaded simultaneously.
   */ parallelChunkUploads: false,
    /**
   * Whether a chunk should be retried if it fails.
   */ retryChunks: false,
    /**
   * If `retryChunks` is true, how many times should it be retried.
   */ retryChunksLimit: 3,
    /**
   * The maximum filesize (in MiB) that is allowed to be uploaded.
   */ maxFilesize: 256,
    /**
   * The name of the file param that gets transferred.
   * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
   * Dropzone will append `[]` to the name.
   */ paramName: "file",
    /**
   * Whether thumbnails for images should be generated
   */ createImageThumbnails: true,
    /**
   * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
   */ maxThumbnailFilesize: 10,
    /**
   * If `null`, the ratio of the image will be used to calculate it.
   */ thumbnailWidth: 120,
    /**
   * The same as `thumbnailWidth`. If both are null, images will not be resized.
   */ thumbnailHeight: 120,
    /**
   * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
   * Can be either `contain` or `crop`.
   */ thumbnailMethod: "crop",
    /**
   * If set, images will be resized to these dimensions before being **uploaded**.
   * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
   * ratio of the file will be preserved.
   *
   * The `options.transformFile` function uses these options, so if the `transformFile` function
   * is overridden, these options don't do anything.
   */ resizeWidth: null,
    /**
   * See `resizeWidth`.
   */ resizeHeight: null,
    /**
   * The mime type of the resized image (before it gets uploaded to the server).
   * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
   * See `resizeWidth` for more information.
   */ resizeMimeType: null,
    /**
   * The quality of the resized images. See `resizeWidth`.
   */ resizeQuality: 0.8,
    /**
   * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
   * Can be either `contain` or `crop`.
   */ resizeMethod: "contain",
    /**
   * The base that is used to calculate the **displayed** filesize. You can
   * change this to 1024 if you would rather display kibibytes, mebibytes,
   * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
   * not `1 kilobyte`. You can change this to `1024` if you don't care about
   * validity.
   */ filesizeBase: 1000,
    /**
   * If not `null` defines how many files this Dropzone handles. If it exceeds,
   * the event `maxfilesexceeded` will be called. The dropzone element gets the
   * class `dz-max-files-reached` accordingly so you can provide visual
   * feedback.
   */ maxFiles: null,
    /**
   * An optional object to send additional headers to the server. Eg:
   * `{ "My-Awesome-Header": "header value" }`
   */ headers: null,
    /**
   * Should the default headers be set or not?
   * Accept: application/json <- for requesting json response
   * Cache-Control: no-cache <- Request shouldnt be cached
   * X-Requested-With: XMLHttpRequest <- We sent the request via XMLHttpRequest
   */ defaultHeaders: true,
    /**
   * If `true`, the dropzone element itself will be clickable, if `false`
   * nothing will be clickable.
   *
   * You can also pass an HTML element, a CSS selector (for multiple elements)
   * or an array of those. In that case, all of those elements will trigger an
   * upload when clicked.
   */ clickable: true,
    /**
   * Whether hidden files in directories should be ignored.
   */ ignoreHiddenFiles: true,
    /**
   * The default implementation of `accept` checks the file's mime type or
   * extension against this list. This is a comma separated list of mime
   * types or file extensions.
   *
   * Eg.: `image/*,application/pdf,.psd`
   *
   * If the Dropzone is `clickable` this option will also be used as
   * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
   * parameter on the hidden file input as well.
   */ acceptedFiles: null,
    /**
   * **Deprecated!**
   * Use acceptedFiles instead.
   */ acceptedMimeTypes: null,
    /**
   * If false, files will be added to the queue but the queue will not be
   * processed automatically.
   * This can be useful if you need some additional user input before sending
   * files (or if you want want all files sent at once).
   * If you're ready to send the file simply call `myDropzone.processQueue()`.
   *
   * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
   * section for more information.
   */ autoProcessQueue: true,
    /**
   * If false, files added to the dropzone will not be queued by default.
   * You'll have to call `enqueueFile(file)` manually.
   */ autoQueue: true,
    /**
   * If `true`, this will add a link to every file preview to remove or cancel (if
   * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
   * and `dictRemoveFile` options are used for the wording.
   */ addRemoveLinks: false,
    /**
   * Defines where to display the file previews – if `null` the
   * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
   * selector. The element should have the `dropzone-previews` class so
   * the previews are displayed properly.
   */ previewsContainer: null,
    /**
   * Set this to `true` if you don't want previews to be shown.
   */ disablePreviews: false,
    /**
   * This is the element the hidden input field (which is used when clicking on the
   * dropzone to trigger file selection) will be appended to. This might
   * be important in case you use frameworks to switch the content of your page.
   *
   * Can be a selector string, or an element directly.
   */ hiddenInputContainer: "body",
    /**
   * If null, no capture type will be specified
   * If camera, mobile devices will skip the file selection and choose camera
   * If microphone, mobile devices will skip the file selection and choose the microphone
   * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
   * On apple devices multiple must be set to false.  AcceptedFiles may need to
   * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
   */ capture: null,
    /**
   * **Deprecated**. Use `renameFile` instead.
   */ renameFilename: null,
    /**
   * A function that is invoked before the file is uploaded to the server and renames the file.
   * This function gets the `File` as argument and can use the `file.name`. The actual name of the
   * file that gets used during the upload can be accessed through `file.upload.filename`.
   */ renameFile: null,
    /**
   * If `true` the fallback will be forced. This is very useful to test your server
   * implementations first and make sure that everything works as
   * expected without dropzone if you experience problems, and to test
   * how your fallbacks will look.
   */ forceFallback: false,
    /**
   * The text used before any files are dropped.
   */ dictDefaultMessage: "Drop files here to upload",
    /**
   * The text that replaces the default message text it the browser is not supported.
   */ dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
    /**
   * The text that will be added before the fallback form.
   * If you provide a  fallback element yourself, or if this option is `null` this will
   * be ignored.
   */ dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
    /**
   * If the filesize is too big.
   * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
   */ dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
    /**
   * If the file doesn't match the file type.
   */ dictInvalidFileType: "You can't upload files of this type.",
    /**
   * If the server response was invalid.
   * `{{statusCode}}` will be replaced with the servers status code.
   */ dictResponseError: "Server responded with {{statusCode}} code.",
    /**
   * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
   */ dictCancelUpload: "Cancel upload",
    /**
   * The text that is displayed if an upload was manually canceled
   */ dictUploadCanceled: "Upload canceled.",
    /**
   * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
   */ dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
    /**
   * If `addRemoveLinks` is true, the text to be used to remove a file.
   */ dictRemoveFile: "Remove file",
    /**
   * If this is not null, then the user will be prompted before removing a file.
   */ dictRemoveFileConfirmation: null,
    /**
   * Displayed if `maxFiles` is st and exceeded.
   * The string `{{maxFiles}}` will be replaced by the configuration value.
   */ dictMaxFilesExceeded: "You can not upload any more files.",
    /**
   * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
   * `b` for bytes.
   */ dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
    },
    /**
   * Called when dropzone initialized
   * You can add event listeners here
   */ init () {
    },
    /**
   * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
   * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
   * of a function, this needs to return a map.
   *
   * The default implementation does nothing for normal uploads, but adds relevant information for
   * chunked uploads.
   *
   * This is the same as adding hidden input fields in the form element.
   */ params (files, xhr, chunk) {
        if (chunk) return {
            dzuuid: chunk.file.upload.uuid,
            dzchunkindex: chunk.index,
            dztotalfilesize: chunk.file.size,
            dzchunksize: this.options.chunkSize,
            dztotalchunkcount: chunk.file.upload.totalChunkCount,
            dzchunkbyteoffset: chunk.index * this.options.chunkSize
        };
    },
    /**
   * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
   * and a `done` function as parameters.
   *
   * If the done function is invoked without arguments, the file is "accepted" and will
   * be processed. If you pass an error message, the file is rejected, and the error
   * message will be displayed.
   * This function will not be called if the file is too big or doesn't match the mime types.
   */ accept (file, done) {
        return done();
    },
    /**
   * The callback that will be invoked when all chunks have been uploaded for a file.
   * It gets the file for which the chunks have been uploaded as the first parameter,
   * and the `done` function as second. `done()` needs to be invoked when everything
   * needed to finish the upload process is done.
   */ chunksUploaded: function(file, done) {
        done();
    },
    /**
   * Sends the file as binary blob in body instead of form data.
   * If this is set, the `params` option will be ignored.
   * It's an error to set this to `true` along with `uploadMultiple` since
   * multiple files cannot be in a single binary body.
   */ binaryBody: false,
    /**
   * Gets called when the browser is not supported.
   * The default implementation shows the fallback input field and adds
   * a text.
   */ fallback () {
        // This code should pass in IE7... :(
        let messageElement;
        this.element.className = `${this.element.className} dz-browser-not-supported`;
        for (let child of this.element.getElementsByTagName("div"))if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message"; // Removes the 'dz-default' class
            break;
        }
        if (!messageElement) {
            messageElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement('<div class="dz-message"><span></span></div>');
            this.element.appendChild(messageElement);
        }
        let span = messageElement.getElementsByTagName("span")[0];
        if (span) {
            if (span.textContent != null) span.textContent = this.options.dictFallbackMessage;
            else if (span.innerText != null) span.innerText = this.options.dictFallbackMessage;
        }
        return this.element.appendChild(this.getFallbackForm());
    },
    /**
   * Gets called to calculate the thumbnail dimensions.
   *
   * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
   *
   *  - `srcWidth` & `srcHeight` (required)
   *  - `trgWidth` & `trgHeight` (required)
   *  - `srcX` & `srcY` (optional, default `0`)
   *  - `trgX` & `trgY` (optional, default `0`)
   *
   * Those values are going to be used by `ctx.drawImage()`.
   */ resize (file, width, height, resizeMethod) {
        let info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
        };
        let srcRatio = file.width / file.height;
        // Automatically calculate dimensions if not specified
        if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
        } else if (width == null) width = height * srcRatio;
        else if (height == null) height = width / srcRatio;
        // Make sure images aren't upscaled
        width = Math.min(width, info.srcWidth);
        height = Math.min(height, info.srcHeight);
        let trgRatio = width / height;
        if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === "crop") {
                if (srcRatio > trgRatio) {
                    info.srcHeight = file.height;
                    info.srcWidth = info.srcHeight * trgRatio;
                } else {
                    info.srcWidth = file.width;
                    info.srcHeight = info.srcWidth / trgRatio;
                }
            } else if (resizeMethod === "contain") {
                // Method 'contain'
                if (srcRatio > trgRatio) height = width / srcRatio;
                else width = height * srcRatio;
            } else throw new Error(`Unknown resizeMethod '${resizeMethod}'`);
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        info.trgWidth = width;
        info.trgHeight = height;
        return info;
    },
    /**
   * Can be used to transform the file (for example, resize an image if necessary).
   *
   * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
   * images according to those dimensions.
   *
   * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
   * to be invoked with the file when the transformation is done.
   */ transformFile (file, done) {
        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
        else return done(file);
    },
    /**
   * A string that contains the template used for each dropped
   * file. Change it to fulfill your needs but make sure to properly
   * provide all elements.
   *
   * If you want to use an actual HTML element instead of providing a String
   * as a config option, you could create a div with the id `tpl`,
   * put the template inside it and provide the element like this:
   *
   *     document
   *       .querySelector('#tpl')
   *       .innerHTML
   *
   */ previewTemplate: (/*@__PURE__*/$parcel$interopDefault($fd6031f88dce2e32$exports)),
    /*
   Those functions register themselves to the events on init and handle all
   the user interface specific stuff. Overwriting them won't break the upload
   but can break the way it's displayed.
   You can overwrite them if you don't like the default behavior. If you just
   want to add an additional event handler, register it on the dropzone object
   and don't overwrite those options.
   */ // Those are self explanatory and simply concern the DragnDrop.
    drop (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    dragstart (e) {
    },
    dragend (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    dragenter (e) {
        return this.element.classList.add("dz-drag-hover");
    },
    dragover (e) {
        return this.element.classList.add("dz-drag-hover");
    },
    dragleave (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    paste (e) {
    },
    // Called whenever there are no files left in the dropzone anymore, and the
    // dropzone should be displayed as if in the initial state.
    reset () {
        return this.element.classList.remove("dz-started");
    },
    // Called when a file is added to the queue
    // Receives `file`
    addedfile (file) {
        if (this.element === this.previewsContainer) this.element.classList.add("dz-started");
        if (this.previewsContainer && !this.options.disablePreviews) {
            file.previewElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility
            this.previewsContainer.appendChild(file.previewElement);
            for (var node of file.previewElement.querySelectorAll("[data-dz-name]"))node.textContent = file.name;
            for (node of file.previewElement.querySelectorAll("[data-dz-size]"))node.innerHTML = this.filesize(file.size);
            if (this.options.addRemoveLinks) {
                file._removeLink = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`);
                file.previewElement.appendChild(file._removeLink);
            }
            let removeFileEvent = (e)=>{
                e.preventDefault();
                e.stopPropagation();
                if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictCancelUploadConfirmation, ()=>this.removeFile(file)
                );
                else {
                    if (this.options.dictRemoveFileConfirmation) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictRemoveFileConfirmation, ()=>this.removeFile(file)
                    );
                    else return this.removeFile(file);
                }
            };
            for (let removeLink of file.previewElement.querySelectorAll("[data-dz-remove]"))removeLink.addEventListener("click", removeFileEvent);
        }
    },
    // Called whenever a file is removed.
    removedfile (file) {
        if (file.previewElement != null && file.previewElement.parentNode != null) file.previewElement.parentNode.removeChild(file.previewElement);
        return this._updateMaxFilesReachedClass();
    },
    // Called when a thumbnail has been generated
    // Receives `file` and `dataUrl`
    thumbnail (file, dataUrl) {
        if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            for (let thumbnailElement of file.previewElement.querySelectorAll("[data-dz-thumbnail]")){
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
            }
            return setTimeout(()=>file.previewElement.classList.add("dz-image-preview")
            , 1);
        }
    },
    // Called whenever an error occurs
    // Receives `file` and `message`
    error (file, message) {
        if (file.previewElement) {
            file.previewElement.classList.add("dz-error");
            if (typeof message !== "string" && message.error) message = message.error;
            for (let node of file.previewElement.querySelectorAll("[data-dz-errormessage]"))node.textContent = message;
        }
    },
    errormultiple () {
    },
    // Called when a file gets processed. Since there is a cue, not all added
    // files are processed immediately.
    // Receives `file`
    processing (file) {
        if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");
            if (file._removeLink) return file._removeLink.innerHTML = this.options.dictCancelUpload;
        }
    },
    processingmultiple () {
    },
    // Called whenever the upload progress gets updated.
    // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
    // To get the total number of bytes of the file, use `file.size`
    uploadprogress (file, progress, bytesSent) {
        if (file.previewElement) for (let node of file.previewElement.querySelectorAll("[data-dz-uploadprogress]"))node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = `${progress}%`;
    },
    // Called whenever the total upload progress gets updated.
    // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
    totaluploadprogress () {
    },
    // Called just before the file is sent. Gets the `xhr` object as second
    // parameter, so you can modify it (for example to add a CSRF token) and a
    // `formData` object to add additional information.
    sending () {
    },
    sendingmultiple () {
    },
    // When the complete upload is finished and successful
    // Receives `file`
    success (file) {
        if (file.previewElement) return file.previewElement.classList.add("dz-success");
    },
    successmultiple () {
    },
    // When the upload is canceled.
    canceled (file) {
        return this.emit("error", file, this.options.dictUploadCanceled);
    },
    canceledmultiple () {
    },
    // When the upload is finished, either with success or an error.
    // Receives `file`
    complete (file) {
        if (file._removeLink) file._removeLink.innerHTML = this.options.dictRemoveFile;
        if (file.previewElement) return file.previewElement.classList.add("dz-complete");
    },
    completemultiple () {
    },
    maxfilesexceeded () {
    },
    maxfilesreached () {
    },
    queuecomplete () {
    },
    addedfiles () {
    }
};
var $4ca367182776f80b$export$2e2bcd8739ae039 = $4ca367182776f80b$var$defaultOptions;


class $3ed269f2f0fb224b$export$2e2bcd8739ae039 extends $4040acfd8584338d$export$2e2bcd8739ae039 {
    static initClass() {
        // Exposing the emitter class, mainly for tests
        this.prototype.Emitter = $4040acfd8584338d$export$2e2bcd8739ae039;
        /*
     This is a list of all available events you can register on a dropzone object.

     You can register an event handler like this:

     dropzone.on("dragEnter", function() { });

     */ this.prototype.events = [
            "drop",
            "dragstart",
            "dragend",
            "dragenter",
            "dragover",
            "dragleave",
            "addedfile",
            "addedfiles",
            "removedfile",
            "thumbnail",
            "error",
            "errormultiple",
            "processing",
            "processingmultiple",
            "uploadprogress",
            "totaluploadprogress",
            "sending",
            "sendingmultiple",
            "success",
            "successmultiple",
            "canceled",
            "canceledmultiple",
            "complete",
            "completemultiple",
            "reset",
            "maxfilesexceeded",
            "maxfilesreached",
            "queuecomplete", 
        ];
        this.prototype._thumbnailQueue = [];
        this.prototype._processingThumbnail = false;
    }
    // Returns all files that have been accepted
    getAcceptedFiles() {
        return this.files.filter((file)=>file.accepted
        ).map((file)=>file
        );
    }
    // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.
    getRejectedFiles() {
        return this.files.filter((file)=>!file.accepted
        ).map((file)=>file
        );
    }
    getFilesWithStatus(status) {
        return this.files.filter((file)=>file.status === status
        ).map((file)=>file
        );
    }
    // Returns all files that are in the queue
    getQueuedFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED);
    }
    getUploadingFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING);
    }
    getAddedFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED);
    }
    // Files that are either queued or uploading
    getActiveFiles() {
        return this.files.filter((file)=>file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED
        ).map((file)=>file
        );
    }
    // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.
    init() {
        // In case it isn't set already
        if (this.element.tagName === "form") this.element.setAttribute("enctype", "multipart/form-data");
        if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) this.element.appendChild($3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`));
        if (this.clickableElements.length) {
            let setupHiddenFileInput = ()=>{
                if (this.hiddenFileInput) this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = document.createElement("input");
                this.hiddenFileInput.setAttribute("type", "file");
                if (this.options.maxFiles === null || this.options.maxFiles > 1) this.hiddenFileInput.setAttribute("multiple", "multiple");
                this.hiddenFileInput.className = "dz-hidden-input";
                if (this.options.acceptedFiles !== null) this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles);
                if (this.options.capture !== null) this.hiddenFileInput.setAttribute("capture", this.options.capture);
                // Making sure that no one can "tab" into this field.
                this.hiddenFileInput.setAttribute("tabindex", "-1");
                // Not setting `display="none"` because some browsers don't accept clicks
                // on elements that aren't displayed.
                this.hiddenFileInput.style.visibility = "hidden";
                this.hiddenFileInput.style.position = "absolute";
                this.hiddenFileInput.style.top = "0";
                this.hiddenFileInput.style.left = "0";
                this.hiddenFileInput.style.height = "0";
                this.hiddenFileInput.style.width = "0";
                $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput);
                this.hiddenFileInput.addEventListener("change", ()=>{
                    let { files: files  } = this.hiddenFileInput;
                    if (files.length) for (let file of files)this.addFile(file);
                    this.emit("addedfiles", files);
                    setupHiddenFileInput();
                });
            };
            setupHiddenFileInput();
        }
        this.URL = window.URL !== null ? window.URL : window.webkitURL;
        // Setup all event listeners on the Dropzone object itself.
        // They're not in @setupEventListeners() because they shouldn't be removed
        // again when the dropzone gets disabled.
        for (let eventName of this.events)this.on(eventName, this.options[eventName]);
        this.on("uploadprogress", ()=>this.updateTotalUploadProgress()
        );
        this.on("removedfile", ()=>this.updateTotalUploadProgress()
        );
        this.on("canceled", (file)=>this.emit("complete", file)
        );
        // Emit a `queuecomplete` event if all files finished uploading.
        this.on("complete", (file)=>{
            if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) // This needs to be deferred so that `queuecomplete` really triggers after `complete`
            return setTimeout(()=>this.emit("queuecomplete")
            , 0);
        });
        const containsFiles = function(e) {
            if (e.dataTransfer.types) // Because e.dataTransfer.types is an Object in
            // IE, we need to iterate like this instead of
            // using e.dataTransfer.types.some()
            for(var i = 0; i < e.dataTransfer.types.length; i++){
                if (e.dataTransfer.types[i] === "Files") return true;
            }
            return false;
        };
        let noPropagation = function(e) {
            // If there are no files, we don't want to stop
            // propagation so we don't interfere with other
            // drag and drop behaviour.
            if (!containsFiles(e)) return;
            e.stopPropagation();
            if (e.preventDefault) return e.preventDefault();
            else return e.returnValue = false;
        };
        // Create the listeners
        this.listeners = [
            {
                element: this.element,
                events: {
                    dragstart: (e)=>{
                        return this.emit("dragstart", e);
                    },
                    dragenter: (e)=>{
                        noPropagation(e);
                        return this.emit("dragenter", e);
                    },
                    dragover: (e)=>{
                        // Makes it possible to drag files from chrome's download bar
                        // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
                        // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
                        let efct;
                        try {
                            efct = e.dataTransfer.effectAllowed;
                        } catch (error) {
                        }
                        e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                        noPropagation(e);
                        return this.emit("dragover", e);
                    },
                    dragleave: (e)=>{
                        return this.emit("dragleave", e);
                    },
                    drop: (e)=>{
                        noPropagation(e);
                        return this.drop(e);
                    },
                    dragend: (e)=>{
                        return this.emit("dragend", e);
                    }
                }
            }, 
        ];
        this.clickableElements.forEach((clickableElement)=>{
            return this.listeners.push({
                element: clickableElement,
                events: {
                    click: (evt)=>{
                        // Only the actual dropzone or the message element should trigger file selection
                        if (clickableElement !== this.element || evt.target === this.element || $3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside(evt.target, this.element.querySelector(".dz-message"))) this.hiddenFileInput.click(); // Forward the click
                        return true;
                    }
                }
            });
        });
        this.enable();
        return this.options.init.call(this);
    }
    // Not fully tested yet
    destroy() {
        this.disable();
        this.removeAllFiles(true);
        if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
            this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
            this.hiddenFileInput = null;
        }
        delete this.element.dropzone;
        return $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.splice($3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.indexOf(this), 1);
    }
    updateTotalUploadProgress() {
        let totalUploadProgress;
        let totalBytesSent = 0;
        let totalBytes = 0;
        let activeFiles = this.getActiveFiles();
        if (activeFiles.length) {
            for (let file of this.getActiveFiles()){
                totalBytesSent += file.upload.bytesSent;
                totalBytes += file.upload.total;
            }
            totalUploadProgress = 100 * totalBytesSent / totalBytes;
        } else totalUploadProgress = 100;
        return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    }
    // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.
    _getParamName(n) {
        if (typeof this.options.paramName === "function") return this.options.paramName(n);
        else return `${this.options.paramName}${this.options.uploadMultiple ? `[${n}]` : ""}`;
    }
    // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData
    _renameFile(file) {
        if (typeof this.options.renameFile !== "function") return file.name;
        return this.options.renameFile(file);
    }
    // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(
    getFallbackForm() {
        let existingFallback, form;
        if (existingFallback = this.getExistingFallback()) return existingFallback;
        let fieldsString = '<div class="dz-fallback">';
        if (this.options.dictFallbackText) fieldsString += `<p>${this.options.dictFallbackText}</p>`;
        fieldsString += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? 'multiple="multiple"' : undefined} /><input type="submit" value="Upload!"></div>`;
        let fields = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(fieldsString);
        if (this.element.tagName !== "FORM") {
            form = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`);
            form.appendChild(fields);
        } else {
            // Make sure that the enctype and method attributes are set properly
            this.element.setAttribute("enctype", "multipart/form-data");
            this.element.setAttribute("method", this.options.method);
        }
        return form != null ? form : fields;
    }
    // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(
    getExistingFallback() {
        let getFallback = function(elements) {
            for (let el of elements){
                if (/(^| )fallback($| )/.test(el.className)) return el;
            }
        };
        for (let tagName of [
            "div",
            "form"
        ]){
            var fallback;
            if (fallback = getFallback(this.element.getElementsByTagName(tagName))) return fallback;
        }
    }
    // Activates all listeners stored in @listeners
    setupEventListeners() {
        return this.listeners.map((elementListeners)=>(()=>{
                let result = [];
                for(let event in elementListeners.events){
                    let listener = elementListeners.events[event];
                    result.push(elementListeners.element.addEventListener(event, listener, false));
                }
                return result;
            })()
        );
    }
    // Deactivates all listeners stored in @listeners
    removeEventListeners() {
        return this.listeners.map((elementListeners)=>(()=>{
                let result = [];
                for(let event in elementListeners.events){
                    let listener = elementListeners.events[event];
                    result.push(elementListeners.element.removeEventListener(event, listener, false));
                }
                return result;
            })()
        );
    }
    // Removes all event listeners and cancels all files in the queue or being processed.
    disable() {
        this.clickableElements.forEach((element)=>element.classList.remove("dz-clickable")
        );
        this.removeEventListeners();
        this.disabled = true;
        return this.files.map((file)=>this.cancelUpload(file)
        );
    }
    enable() {
        delete this.disabled;
        this.clickableElements.forEach((element)=>element.classList.add("dz-clickable")
        );
        return this.setupEventListeners();
    }
    // Returns a nicely formatted filesize
    filesize(size) {
        let selectedSize = 0;
        let selectedUnit = "b";
        if (size > 0) {
            let units = [
                "tb",
                "gb",
                "mb",
                "kb",
                "b"
            ];
            for(let i = 0; i < units.length; i++){
                let unit = units[i];
                let cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                if (size >= cutoff) {
                    selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                    selectedUnit = unit;
                    break;
                }
            }
            selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
        }
        return `<strong>${selectedSize}</strong> ${this.options.dictFileSizeUnits[selectedUnit]}`;
    }
    // Adds or removes the `dz-max-files-reached` class from the form.
    _updateMaxFilesReachedClass() {
        if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
            if (this.getAcceptedFiles().length === this.options.maxFiles) this.emit("maxfilesreached", this.files);
            return this.element.classList.add("dz-max-files-reached");
        } else return this.element.classList.remove("dz-max-files-reached");
    }
    drop(e) {
        if (!e.dataTransfer) return;
        this.emit("drop", e);
        // Convert the FileList to an Array
        // This is necessary for IE11
        let files = [];
        for(let i = 0; i < e.dataTransfer.files.length; i++)files[i] = e.dataTransfer.files[i];
        // Even if it's a folder, files.length will contain the folders.
        if (files.length) {
            let { items: items  } = e.dataTransfer;
            if (items && items.length && items[0].webkitGetAsEntry != null) // The browser supports dropping of folders, so handle items instead of files
            this._addFilesFromItems(items);
            else this.handleFiles(files);
        }
        this.emit("addedfiles", files);
    }
    paste(e) {
        if ($3ed269f2f0fb224b$var$__guard__(e != null ? e.clipboardData : undefined, (x)=>x.items
        ) == null) return;
        this.emit("paste", e);
        let { items: items  } = e.clipboardData;
        if (items.length) return this._addFilesFromItems(items);
    }
    handleFiles(files) {
        for (let file of files)this.addFile(file);
    }
    // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.
    _addFilesFromItems(items) {
        return (()=>{
            let result = [];
            for (let item of items){
                var entry;
                if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) result.push(this.addFile(item.getAsFile()));
                    else if (entry.isDirectory) // Append all files from that directory to files
                    result.push(this._addFilesFromDirectory(entry, entry.name));
                    else result.push(undefined);
                } else if (item.getAsFile != null) {
                    if (item.kind == null || item.kind === "file") result.push(this.addFile(item.getAsFile()));
                    else result.push(undefined);
                } else result.push(undefined);
            }
            return result;
        })();
    }
    // Goes through the directory, and adds each file it finds recursively
    _addFilesFromDirectory(directory, path) {
        let dirReader = directory.createReader();
        let errorHandler = (error)=>$3ed269f2f0fb224b$var$__guardMethod__(console, "log", (o)=>o.log(error)
            )
        ;
        var readEntries = ()=>{
            return dirReader.readEntries((entries)=>{
                if (entries.length > 0) {
                    for (let entry of entries){
                        if (entry.isFile) entry.file((file)=>{
                            if (this.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") return;
                            file.fullPath = `${path}/${file.name}`;
                            return this.addFile(file);
                        });
                        else if (entry.isDirectory) this._addFilesFromDirectory(entry, `${path}/${entry.name}`);
                    }
                    // Recursively call readEntries() again, since browser only handle
                    // the first 100 entries.
                    // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
                    readEntries();
                }
                return null;
            }, errorHandler);
        };
        return readEntries();
    }
    // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.
    accept(file, done) {
        if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1048576) done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
        else if (!$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile(file, this.options.acceptedFiles)) done(this.options.dictInvalidFileType);
        else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
            done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
            this.emit("maxfilesexceeded", file);
        } else this.options.accept.call(this, file, done);
    }
    addFile(file) {
        file.upload = {
            uuid: $3ed269f2f0fb224b$export$2e2bcd8739ae039.uuidv4(),
            progress: 0,
            // Setting the total upload size to file.size for the beginning
            // It's actual different than the size to be transmitted.
            total: file.size,
            bytesSent: 0,
            filename: this._renameFile(file)
        };
        this.files.push(file);
        file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED;
        this.emit("addedfile", file);
        this._enqueueThumbnail(file);
        this.accept(file, (error)=>{
            if (error) {
                file.accepted = false;
                this._errorProcessing([
                    file
                ], error); // Will set the file.status
            } else {
                file.accepted = true;
                if (this.options.autoQueue) this.enqueueFile(file);
                 // Will set .accepted = true
            }
            this._updateMaxFilesReachedClass();
        });
    }
    // Wrapper for enqueueFile
    enqueueFiles(files) {
        for (let file of files)this.enqueueFile(file);
        return null;
    }
    enqueueFile(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED && file.accepted === true) {
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
            if (this.options.autoProcessQueue) return setTimeout(()=>this.processQueue()
            , 0); // Deferring the call
        } else throw new Error("This file can't be queued because it has already been processed or was rejected.");
    }
    _enqueueThumbnail(file) {
        if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1048576) {
            this._thumbnailQueue.push(file);
            return setTimeout(()=>this._processThumbnailQueue()
            , 0); // Deferring the call
        }
    }
    _processThumbnailQueue() {
        if (this._processingThumbnail || this._thumbnailQueue.length === 0) return;
        this._processingThumbnail = true;
        let file = this._thumbnailQueue.shift();
        return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (dataUrl)=>{
            this.emit("thumbnail", file, dataUrl);
            this._processingThumbnail = false;
            return this._processThumbnailQueue();
        });
    }
    // Can be called by the user to remove a file
    removeFile(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) this.cancelUpload(file);
        this.files = $3ed269f2f0fb224b$var$without(this.files, file);
        this.emit("removedfile", file);
        if (this.files.length === 0) return this.emit("reset");
    }
    // Removes all files that aren't currently processed from the list
    removeAllFiles(cancelIfNecessary) {
        // Create a copy of files since removeFile() changes the @files array.
        if (cancelIfNecessary == null) cancelIfNecessary = false;
        for (let file of this.files.slice())if (file.status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || cancelIfNecessary) this.removeFile(file);
        return null;
    }
    // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.
    resizeImage(file, width, height, resizeMethod, callback) {
        return this.createThumbnail(file, width, height, resizeMethod, true, (dataUrl, canvas)=>{
            if (canvas == null) // The image has not been resized
            return callback(file);
            else {
                let { resizeMimeType: resizeMimeType  } = this.options;
                if (resizeMimeType == null) resizeMimeType = file.type;
                let resizedDataURL = canvas.toDataURL(resizeMimeType, this.options.resizeQuality);
                if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") // Now add the original EXIF information
                resizedDataURL = $3ed269f2f0fb224b$var$ExifRestore.restore(file.dataURL, resizedDataURL);
                return callback($3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob(resizedDataURL));
            }
        });
    }
    createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            file.dataURL = fileReader.result;
            // Don't bother creating a thumbnail for SVG images since they're vector
            if (file.type === "image/svg+xml") {
                if (callback != null) callback(fileReader.result);
                return;
            }
            this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
        };
        fileReader.readAsDataURL(file);
    }
    // `mockFile` needs to have these attributes:
    //
    //     { name: 'name', size: 12345, imageUrl: '' }
    //
    // `callback` will be invoked when the image has been downloaded and displayed.
    // `crossOrigin` will be added to the `img` tag when accessing the file.
    displayExistingFile(mockFile, imageUrl, callback, crossOrigin, resizeThumbnail = true) {
        this.emit("addedfile", mockFile);
        this.emit("complete", mockFile);
        if (!resizeThumbnail) {
            this.emit("thumbnail", mockFile, imageUrl);
            if (callback) callback();
        } else {
            let onDone = (thumbnail)=>{
                this.emit("thumbnail", mockFile, thumbnail);
                if (callback) callback();
            };
            mockFile.dataURL = imageUrl;
            this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
        }
    }
    createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
        // Not using `new Image` here because of a bug in latest Chrome versions.
        // See https://github.com/enyo/dropzone/pull/226
        let img = document.createElement("img");
        if (crossOrigin) img.crossOrigin = crossOrigin;
        // fixOrientation is not needed anymore with browsers handling imageOrientation
        fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
        img.onload = ()=>{
            let loadExif = (callback)=>callback(1)
            ;
            if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) loadExif = (callback)=>EXIF.getData(img, function() {
                    return callback(EXIF.getTag(this, "Orientation"));
                })
            ;
            return loadExif((orientation)=>{
                file.width = img.width;
                file.height = img.height;
                let resizeInfo = this.options.resize.call(this, file, width, height, resizeMethod);
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = resizeInfo.trgWidth;
                canvas.height = resizeInfo.trgHeight;
                if (orientation > 4) {
                    canvas.width = resizeInfo.trgHeight;
                    canvas.height = resizeInfo.trgWidth;
                }
                switch(orientation){
                    case 2:
                        // horizontal flip
                        ctx.translate(canvas.width, 0);
                        ctx.scale(-1, 1);
                        break;
                    case 3:
                        // 180° rotate left
                        ctx.translate(canvas.width, canvas.height);
                        ctx.rotate(Math.PI);
                        break;
                    case 4:
                        // vertical flip
                        ctx.translate(0, canvas.height);
                        ctx.scale(1, -1);
                        break;
                    case 5:
                        // vertical flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.scale(1, -1);
                        break;
                    case 6:
                        // 90° rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(0, -canvas.width);
                        break;
                    case 7:
                        // horizontal flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(canvas.height, -canvas.width);
                        ctx.scale(-1, 1);
                        break;
                    case 8:
                        // 90° rotate left
                        ctx.rotate(-0.5 * Math.PI);
                        ctx.translate(-canvas.height, 0);
                        break;
                }
                // This is a bugfix for iOS' scaling bug.
                $3ed269f2f0fb224b$var$drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                let thumbnail = canvas.toDataURL("image/png");
                if (callback != null) return callback(thumbnail, canvas);
            });
        };
        if (callback != null) img.onerror = callback;
        return img.src = file.dataURL;
    }
    // Goes through the queue and processes files if there aren't too many already.
    processQueue() {
        let { parallelUploads: parallelUploads  } = this.options;
        let processingLength = this.getUploadingFiles().length;
        let i = processingLength;
        // There are already at least as many files uploading than should be
        if (processingLength >= parallelUploads) return;
        let queuedFiles = this.getQueuedFiles();
        if (!(queuedFiles.length > 0)) return;
        if (this.options.uploadMultiple) // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
        else while(i < parallelUploads){
            if (!queuedFiles.length) return;
             // Nothing left to process
            this.processFile(queuedFiles.shift());
            i++;
        }
    }
    // Wrapper for `processFiles`
    processFile(file) {
        return this.processFiles([
            file
        ]);
    }
    // Loads the file, then calls finishedLoading()
    processFiles(files) {
        for (let file of files){
            file.processing = true; // Backwards compatibility
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING;
            this.emit("processing", file);
        }
        if (this.options.uploadMultiple) this.emit("processingmultiple", files);
        return this.uploadFiles(files);
    }
    _getFilesWithXhr(xhr) {
        return this.files.filter((file)=>file.xhr === xhr
        ).map((file)=>file
        );
    }
    // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.
    cancelUpload(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) {
            let groupedFiles = this._getFilesWithXhr(file.xhr);
            for (let groupedFile of groupedFiles)groupedFile.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
            if (typeof file.xhr !== "undefined") file.xhr.abort();
            for (let groupedFile1 of groupedFiles)this.emit("canceled", groupedFile1);
            if (this.options.uploadMultiple) this.emit("canceledmultiple", groupedFiles);
        } else if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED) {
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
            this.emit("canceled", file);
            if (this.options.uploadMultiple) this.emit("canceledmultiple", [
                file
            ]);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    resolveOption(option, ...args) {
        if (typeof option === "function") return option.apply(this, args);
        return option;
    }
    uploadFile(file) {
        return this.uploadFiles([
            file
        ]);
    }
    uploadFiles(files) {
        this._transformFiles(files, (transformedFiles)=>{
            if (this.options.chunking) {
                // Chunking is not allowed to be used with `uploadMultiple` so we know
                // that there is only __one__file.
                let transformedFile = transformedFiles[0];
                files[0].upload.chunked = this.options.chunking && (this.options.forceChunking || transformedFile.size > this.options.chunkSize);
                files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / this.options.chunkSize);
            }
            if (files[0].upload.chunked) {
                // This file should be sent in chunks!
                // If the chunking option is set, we **know** that there can only be **one** file, since
                // uploadMultiple is not allowed with this option.
                let file = files[0];
                let transformedFile = transformedFiles[0];
                file.upload.chunks = [];
                let handleNextChunk = ()=>{
                    let chunkIndex = 0;
                    // Find the next item in file.upload.chunks that is not defined yet.
                    while(file.upload.chunks[chunkIndex] !== undefined)chunkIndex++;
                    // This means, that all chunks have already been started.
                    if (chunkIndex >= file.upload.totalChunkCount) return;
                    let start = chunkIndex * this.options.chunkSize;
                    let end = Math.min(start + this.options.chunkSize, transformedFile.size);
                    let dataBlock = {
                        name: this._getParamName(0),
                        data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
                        filename: file.upload.filename,
                        chunkIndex: chunkIndex
                    };
                    file.upload.chunks[chunkIndex] = {
                        file: file,
                        index: chunkIndex,
                        dataBlock: dataBlock,
                        status: $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING,
                        progress: 0,
                        retries: 0
                    };
                    this._uploadData(files, [
                        dataBlock
                    ]);
                };
                file.upload.finishedChunkUpload = (chunk, response)=>{
                    let allFinished = true;
                    chunk.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
                    // Clear the data from the chunk
                    chunk.dataBlock = null;
                    chunk.response = chunk.xhr.responseText;
                    chunk.responseHeaders = chunk.xhr.getAllResponseHeaders();
                    // Leaving this reference to xhr will cause memory leaks.
                    chunk.xhr = null;
                    for(let i = 0; i < file.upload.totalChunkCount; i++){
                        if (file.upload.chunks[i] === undefined) return handleNextChunk();
                        if (file.upload.chunks[i].status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS) allFinished = false;
                    }
                    if (allFinished) this.options.chunksUploaded(file, ()=>{
                        this._finished(files, response, null);
                    });
                };
                if (this.options.parallelChunkUploads) for(let i = 0; i < file.upload.totalChunkCount; i++)handleNextChunk();
                else handleNextChunk();
            } else {
                let dataBlocks = [];
                for(let i = 0; i < files.length; i++)dataBlocks[i] = {
                    name: this._getParamName(i),
                    data: transformedFiles[i],
                    filename: files[i].upload.filename
                };
                this._uploadData(files, dataBlocks);
            }
        });
    }
    /// Returns the right chunk for given file and xhr
    _getChunk(file, xhr) {
        for(let i = 0; i < file.upload.totalChunkCount; i++){
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) return file.upload.chunks[i];
        }
    }
    // This function actually uploads the file(s) to the server.
    //
    //  If dataBlocks contains the actual data to upload (meaning, that this could
    // either be transformed files, or individual chunks for chunked upload) then
    // they will be used for the actual data to upload.
    _uploadData(files, dataBlocks) {
        let xhr = new XMLHttpRequest();
        // Put the xhr object in the file objects to be able to reference it later.
        for (let file of files)file.xhr = xhr;
        if (files[0].upload.chunked) // Put the xhr object in the right chunk object, so it can be associated
        // later, and found with _getChunk.
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
        let method = this.resolveOption(this.options.method, files, dataBlocks);
        let url = this.resolveOption(this.options.url, files, dataBlocks);
        xhr.open(method, url, true);
        // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8
        let timeout = this.resolveOption(this.options.timeout, files);
        if (timeout) xhr.timeout = this.resolveOption(this.options.timeout, files);
        // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
        xhr.withCredentials = !!this.options.withCredentials;
        xhr.onload = (e)=>{
            this._finishedUploading(files, xhr, e);
        };
        xhr.ontimeout = ()=>{
            this._handleUploadError(files, xhr, `Request timedout after ${this.options.timeout / 1000} seconds`);
        };
        xhr.onerror = ()=>{
            this._handleUploadError(files, xhr);
        };
        // Some browsers do not have the .upload property
        let progressObj = xhr.upload != null ? xhr.upload : xhr;
        progressObj.onprogress = (e)=>this._updateFilesUploadProgress(files, xhr, e)
        ;
        let headers = this.options.defaultHeaders ? {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
        } : {
        };
        if (this.options.binaryBody) headers["Content-Type"] = files[0].type;
        if (this.options.headers) objectExtend(headers, this.options.headers);
        for(let headerName in headers){
            let headerValue = headers[headerName];
            if (headerValue) xhr.setRequestHeader(headerName, headerValue);
        }
        if (this.options.binaryBody) {
            // Since the file is going to be sent as binary body, it doesn't make
            // any sense to generate `FormData` for it.
            for (let file of files)this.emit("sending", file, xhr);
            if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr);
            this.submitRequest(xhr, null, files);
        } else {
            let formData = new FormData();
            // Adding all @options parameters
            if (this.options.params) {
                let additionalParams = this.options.params;
                if (typeof additionalParams === "function") additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                for(let key in additionalParams){
                    let value = additionalParams[key];
                    if (Array.isArray(value)) // The additional parameter contains an array,
                    // so lets iterate over it to attach each value
                    // individually.
                    for(let i = 0; i < value.length; i++)formData.append(key, value[i]);
                    else formData.append(key, value);
                }
            }
            // Let the user add additional data if necessary
            for (let file of files)this.emit("sending", file, xhr, formData);
            if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr, formData);
            this._addFormElementData(formData);
            // Finally add the files
            // Has to be last because some servers (eg: S3) expect the file to be the last parameter
            for(let i = 0; i < dataBlocks.length; i++){
                let dataBlock = dataBlocks[i];
                formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
            }
            this.submitRequest(xhr, formData, files);
        }
    }
    // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
    _transformFiles(files, done) {
        let transformedFiles = [];
        // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.
        let doneCounter = 0;
        for(let i = 0; i < files.length; i++)this.options.transformFile.call(this, files[i], (transformedFile)=>{
            transformedFiles[i] = transformedFile;
            if (++doneCounter === files.length) done(transformedFiles);
        });
    }
    // Takes care of adding other input elements of the form to the AJAX request
    _addFormElementData(formData) {
        // Take care of other input elements
        if (this.element.tagName === "FORM") for (let input of this.element.querySelectorAll("input, textarea, select, button")){
            let inputName = input.getAttribute("name");
            let inputType = input.getAttribute("type");
            if (inputType) inputType = inputType.toLowerCase();
            // If the input doesn't have a name, we can't use it.
            if (typeof inputName === "undefined" || inputName === null) continue;
            if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                // Possibly multiple values
                for (let option of input.options)if (option.selected) formData.append(inputName, option.value);
            } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) formData.append(inputName, input.value);
        }
    }
    // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.
    _updateFilesUploadProgress(files, xhr, e) {
        if (!files[0].upload.chunked) // Handle file uploads without chunking
        for (let file of files){
            if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) continue;
            if (e) {
                file.upload.progress = 100 * e.loaded / e.total;
                file.upload.total = e.total;
                file.upload.bytesSent = e.loaded;
            } else {
                // No event, so we're at 100%
                file.upload.progress = 100;
                file.upload.bytesSent = file.upload.total;
            }
            this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
        }
        else {
            // Handle chunked file uploads
            // Chunked upload is not compatible with uploading multiple files in one
            // request, so we know there's only one file.
            let file = files[0];
            // Since this is a chunked upload, we need to update the appropriate chunk
            // progress.
            let chunk = this._getChunk(file, xhr);
            if (e) {
                chunk.progress = 100 * e.loaded / e.total;
                chunk.total = e.total;
                chunk.bytesSent = e.loaded;
            } else {
                // No event, so we're at 100%
                chunk.progress = 100;
                chunk.bytesSent = chunk.total;
            }
            // Now tally the *file* upload progress from its individual chunks
            file.upload.progress = 0;
            file.upload.total = 0;
            file.upload.bytesSent = 0;
            for(let i = 0; i < file.upload.totalChunkCount; i++)if (file.upload.chunks[i] && typeof file.upload.chunks[i].progress !== "undefined") {
                file.upload.progress += file.upload.chunks[i].progress;
                file.upload.total += file.upload.chunks[i].total;
                file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
            // Since the process is a percentage, we need to divide by the amount of
            // chunks we've used.
            file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
            this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
        }
    }
    _finishedUploading(files, xhr, e) {
        let response;
        if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
        if (xhr.readyState !== 4) return;
        if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
            response = xhr.responseText;
            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) try {
                response = JSON.parse(response);
            } catch (error) {
                e = error;
                response = "Invalid JSON response from server.";
            }
        }
        this._updateFilesUploadProgress(files, xhr);
        if (!(200 <= xhr.status && xhr.status < 300)) this._handleUploadError(files, xhr, response);
        else if (files[0].upload.chunked) files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
        else this._finished(files, response, e);
    }
    _handleUploadError(files, xhr, response) {
        if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
        if (files[0].upload.chunked && this.options.retryChunks) {
            let chunk = this._getChunk(files[0], xhr);
            if ((chunk.retries++) < this.options.retryChunksLimit) {
                this._uploadData(files, [
                    chunk.dataBlock
                ]);
                return;
            } else console.warn("Retried this chunk too often. Giving up.");
        }
        this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
    }
    submitRequest(xhr, formData, files) {
        if (xhr.readyState != 1) {
            console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
            return;
        }
        if (this.options.binaryBody) {
            if (files[0].upload.chunked) {
                const chunk = this._getChunk(files[0], xhr);
                xhr.send(chunk.dataBlock.data);
            } else xhr.send(files[0]);
        } else xhr.send(formData);
    }
    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.
    _finished(files, responseText, e) {
        for (let file of files){
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
            this.emit("success", file, responseText, e);
            this.emit("complete", file);
        }
        if (this.options.uploadMultiple) {
            this.emit("successmultiple", files, responseText, e);
            this.emit("completemultiple", files);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.
    _errorProcessing(files, message, xhr) {
        for (let file of files){
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR;
            this.emit("error", file, message, xhr);
            this.emit("complete", file);
        }
        if (this.options.uploadMultiple) {
            this.emit("errormultiple", files, message, xhr);
            this.emit("completemultiple", files);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    static uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
        });
    }
    constructor(el, options){
        super();
        let fallback, left;
        this.element = el;
        this.clickableElements = [];
        this.listeners = [];
        this.files = []; // All files
        if (typeof this.element === "string") this.element = document.querySelector(this.element);
        // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.
        if (!this.element || this.element.nodeType == null) throw new Error("Invalid dropzone element.");
        if (this.element.dropzone) throw new Error("Dropzone already attached.");
        // Now add this dropzone to the instances.
        $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.push(this);
        // Put the dropzone inside the element itself.
        this.element.dropzone = this;
        let elementOptions = (left = $3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(this.element)) != null ? left : {
        };
        this.options = objectExtend(true, {
        }, $4ca367182776f80b$export$2e2bcd8739ae039, elementOptions, options != null ? options : {
        });
        this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, "");
        // If the browser failed, just call the fallback and leave
        if (this.options.forceFallback || !$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported()) return this.options.fallback.call(this);
        // @options.url = @element.getAttribute "action" unless @options.url?
        if (this.options.url == null) this.options.url = this.element.getAttribute("action");
        if (!this.options.url) throw new Error("No URL provided.");
        if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
        if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
        if (this.options.binaryBody && this.options.uploadMultiple) throw new Error("You cannot set both: binaryBody and uploadMultiple.");
        // Backwards compatibility
        if (this.options.acceptedMimeTypes) {
            this.options.acceptedFiles = this.options.acceptedMimeTypes;
            delete this.options.acceptedMimeTypes;
        }
        // Backwards compatibility
        if (this.options.renameFilename != null) this.options.renameFile = (file)=>this.options.renameFilename.call(this, file.name, file)
        ;
        if (typeof this.options.method === "string") this.options.method = this.options.method.toUpperCase();
        if ((fallback = this.getExistingFallback()) && fallback.parentNode) // Remove the fallback
        fallback.parentNode.removeChild(fallback);
        // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false
        if (this.options.previewsContainer !== false) {
            if (this.options.previewsContainer) this.previewsContainer = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.previewsContainer, "previewsContainer");
            else this.previewsContainer = this.element;
        }
        if (this.options.clickable) {
            if (this.options.clickable === true) this.clickableElements = [
                this.element
            ];
            else this.clickableElements = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements(this.options.clickable, "clickable");
        }
        this.init();
    }
}
$3ed269f2f0fb224b$export$2e2bcd8739ae039.initClass();
// This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>
$3ed269f2f0fb224b$export$2e2bcd8739ae039.options = {
};
// Returns the options for an element or undefined if none available.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement = function(element) {
    // Get the `Dropzone.options.elementId` for this element if it exists
    if (element.getAttribute("id")) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.options[$3ed269f2f0fb224b$var$camelize(element.getAttribute("id"))];
    else return undefined;
};
// Holds a list of all dropzone instances
$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances = [];
// Returns the dropzone for given element if any
$3ed269f2f0fb224b$export$2e2bcd8739ae039.forElement = function(element) {
    if (typeof element === "string") element = document.querySelector(element);
    if ((element != null ? element.dropzone : undefined) == null) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return element.dropzone;
};
// Looks for all .dropzone elements and creates a dropzone for them
$3ed269f2f0fb224b$export$2e2bcd8739ae039.discover = function() {
    let dropzones;
    if (document.querySelectorAll) dropzones = document.querySelectorAll(".dropzone");
    else {
        dropzones = [];
        // IE :(
        let checkElements = (elements)=>(()=>{
                let result = [];
                for (let el of elements)if (/(^| )dropzone($| )/.test(el.className)) result.push(dropzones.push(el));
                else result.push(undefined);
                return result;
            })()
        ;
        checkElements(document.getElementsByTagName("div"));
        checkElements(document.getElementsByTagName("form"));
    }
    return (()=>{
        let result = [];
        for (let dropzone of dropzones)// Create a dropzone unless auto discover has been disabled for specific element
        if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(dropzone) !== false) result.push(new $3ed269f2f0fb224b$export$2e2bcd8739ae039(dropzone));
        else result.push(undefined);
        return result;
    })();
};
// Some browsers support drag and drog functionality, but not correctly.
//
// So I created a blocklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
$3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = [
    // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
    /opera.*(Macintosh|Windows Phone).*version\/12/i, 
];
// Checks if the browser is supported
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported = function() {
    let capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
        if (!("classList" in document.createElement("a"))) capableBrowser = false;
        else {
            if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers !== undefined) // Since this has been renamed, this makes sure we don't break older
            // configuration.
            $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = $3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers;
            // The browser supports the API, but may be blocked.
            for (let regex of $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers)if (regex.test(navigator.userAgent)) {
                capableBrowser = false;
                continue;
            }
        }
    } else capableBrowser = false;
    return capableBrowser;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob = function(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(",")[1]);
    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for(let i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--)ia[i] = byteString.charCodeAt(i);
    // write the ArrayBuffer to a blob
    return new Blob([
        ab
    ], {
        type: mimeString
    });
};
// Returns an array without the rejected item
const $3ed269f2f0fb224b$var$without = (list, rejectedItem)=>list.filter((item)=>item !== rejectedItem
    ).map((item)=>item
    )
;
// abc-def_ghi -> abcDefGhi
const $3ed269f2f0fb224b$var$camelize = (str)=>str.replace(/[\-_](\w)/g, (match)=>match.charAt(1).toUpperCase()
    )
;
// Creates an element from string
$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement = function(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
};
// Tests if given element is inside (or simply is) the container
$3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside = function(element, container) {
    if (element === container) return true;
     // Coffeescript doesn't support do/while loops
    while(element = element.parentNode){
        if (element === container) return true;
    }
    return false;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement = function(el, name) {
    let element;
    if (typeof el === "string") element = document.querySelector(el);
    else if (el.nodeType != null) element = el;
    if (element == null) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector or a plain HTML element.`);
    return element;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements = function(els, name) {
    let el, elements;
    if (els instanceof Array) {
        elements = [];
        try {
            for (el of els)elements.push(this.getElement(el, name));
        } catch (e) {
            elements = null;
        }
    } else if (typeof els === "string") {
        elements = [];
        for (el of document.querySelectorAll(els))elements.push(el);
    } else if (els.nodeType != null) elements = [
        els
    ];
    if (elements == null || !elements.length) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
    return elements;
};
// Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) return accepted();
    else if (rejected != null) return rejected();
};
// Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile = function(file, acceptedFiles) {
    if (!acceptedFiles) return true;
     // If there are no accepted mime types, it's OK
    acceptedFiles = acceptedFiles.split(",");
    let mimeType = file.type;
    let baseMimeType = mimeType.replace(/\/.*$/, "");
    for (let validType of acceptedFiles){
        validType = validType.trim();
        if (validType.charAt(0) === ".") {
            if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) return true;
        } else if (/\/\*$/.test(validType)) {
            // This is something like a image/* mime type
            if (baseMimeType === validType.replace(/\/.*$/, "")) return true;
        } else {
            if (mimeType === validType) return true;
        }
    }
    return false;
};
// Augment jQuery
if (typeof jQuery !== "undefined" && jQuery !== null) jQuery.fn.dropzone = function(options) {
    return this.each(function() {
        return new $3ed269f2f0fb224b$export$2e2bcd8739ae039(this, options);
    });
};
// Dropzone file status codes
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED = "added";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED = "queued";
// For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ACCEPTED = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING = "uploading";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.PROCESSING = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING; // alias
$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED = "canceled";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR = "error";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS = "success";
/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */ // Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
let $3ed269f2f0fb224b$var$detectVerticalSquash = function(img) {
    let ih = img.naturalHeight;
    let canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let { data: data  } = ctx.getImageData(1, 0, 1, ih);
    // search image edge pixel position in case it is squashed vertically.
    let sy = 0;
    let ey = ih;
    let py = ih;
    while(py > sy){
        let alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) ey = py;
        else sy = py;
        py = ey + sy >> 1;
    }
    let ratio = py / ih;
    if (ratio === 0) return 1;
    else return ratio;
};
// A replacement for context.drawImage
// (args are for source and destination).
var $3ed269f2f0fb224b$var$drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    let vertSquashRatio = $3ed269f2f0fb224b$var$detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};
// Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html
class $3ed269f2f0fb224b$var$ExifRestore {
    static initClass() {
        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }
    static encode64(input) {
        let output = "";
        let chr1 = undefined;
        let chr2 = undefined;
        let chr3 = "";
        let enc1 = undefined;
        let enc2 = undefined;
        let enc3 = undefined;
        let enc4 = "";
        let i = 0;
        while(true){
            chr1 = input[i++];
            chr2 = input[i++];
            chr3 = input[i++];
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;
            if (isNaN(chr2)) enc3 = enc4 = 64;
            else if (isNaN(chr3)) enc4 = 64;
            output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
            if (!(i < input.length)) break;
        }
        return output;
    }
    static restore(origFileBase64, resizedFileBase64) {
        if (!origFileBase64.match("data:image/jpeg;base64,")) return resizedFileBase64;
        let rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
        let segments = this.slice2Segments(rawImage);
        let image = this.exifManipulation(resizedFileBase64, segments);
        return `data:image/jpeg;base64,${this.encode64(image)}`;
    }
    static exifManipulation(resizedFileBase64, segments) {
        let exifArray = this.getExifArray(segments);
        let newImageArray = this.insertExif(resizedFileBase64, exifArray);
        let aBuffer = new Uint8Array(newImageArray);
        return aBuffer;
    }
    static getExifArray(segments) {
        let seg = undefined;
        let x = 0;
        while(x < segments.length){
            seg = segments[x];
            if (seg[0] === 255 & seg[1] === 225) return seg;
            x++;
        }
        return [];
    }
    static insertExif(resizedFileBase64, exifArray) {
        let imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
        let buf = this.decode64(imageData);
        let separatePoint = buf.indexOf(255, 3);
        let mae = buf.slice(0, separatePoint);
        let ato = buf.slice(separatePoint);
        let array = mae;
        array = array.concat(exifArray);
        array = array.concat(ato);
        return array;
    }
    static slice2Segments(rawImageArray) {
        let head = 0;
        let segments = [];
        while(true){
            var length;
            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) break;
            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) head += 2;
            else {
                length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                let endPoint = head + length + 2;
                let seg = rawImageArray.slice(head, endPoint);
                segments.push(seg);
                head = endPoint;
            }
            if (head > rawImageArray.length) break;
        }
        return segments;
    }
    static decode64(input) {
        let chr1 = undefined;
        let chr2 = undefined;
        let chr3 = "";
        let enc1 = undefined;
        let enc2 = undefined;
        let enc3 = undefined;
        let enc4 = "";
        let i = 0;
        let buf = [];
        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        let base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while(true){
            enc1 = this.KEY_STR.indexOf(input.charAt(i++));
            enc2 = this.KEY_STR.indexOf(input.charAt(i++));
            enc3 = this.KEY_STR.indexOf(input.charAt(i++));
            enc4 = this.KEY_STR.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            buf.push(chr1);
            if (enc3 !== 64) buf.push(chr2);
            if (enc4 !== 64) buf.push(chr3);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
            if (!(i < input.length)) break;
        }
        return buf;
    }
}
$3ed269f2f0fb224b$var$ExifRestore.initClass();
function $3ed269f2f0fb224b$var$__guard__(value, transform) {
    return typeof value !== "undefined" && value !== null ? transform(value) : undefined;
}
function $3ed269f2f0fb224b$var$__guardMethod__(obj, methodName, transform) {
    if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") return transform(obj, methodName);
    else return undefined;
}

const gcUploadCss = ":host{display:block}input[type=\"file\"]{display:none}.dropzone{background:var(--gc-color-contrast-grey);border-radius:5px;border:1px dashed var(--gc-color-fourth-grey);border-image:none;padding:30px 22px;cursor:pointer;height:100%;min-height:275px}.dropzone-dragging{opacity:0.5;background:#ECF5FE;border:1px dashed var(--gc-color-primary)}.gc__dropzone-heading,.gc__dropzone-body,.gc__dropzone-buttons,.gc__dropzone-notes,.gc__dropzone-icon{text-align:center}.gc__dropzone-heading{font-size:14px;font-weight:600}.gc__dropzone-extension{margin-top:10px}.gc__dropzone-body{margin-top:10px}.gc__dropzone-buttons{margin-top:20px}.gc__dropzone-notes{margin-top:20px;font-style:italic;font-size:12px;font-weight:400}.gc__dropzone-icon{font-size:14px;color:var(--gc-color-primary);margin-top:15px}.gc__dropzone-type{color:var(--gc-color-fourth-grey);font-size:12px;margin-top:8px}.gc__dropzone-body div{font-weight:400}.gc__dropzone-body b{font-weight:600}.gc__dropzone-filename{font-size:12px;margin-top:8px;text-align:center;font-weight:400}";

const TIMEOUT = 700;
const GcUpload = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.gcUploadedFile = index$1.createEvent(this, "gc:uploaded-file", 7);
    this.gcUploadProgress = index$1.createEvent(this, "gc:upload-progress", 7);
    this.gcUploadCompleted = index$1.createEvent(this, "gc:upload-completed", 7);
    /**
     * Width of upload
     */
    this.width = '430px';
    /**
     * Accept type
     */
    this.acceptType = 'xlsx';
    /**
     * Disabled
     */
    this.disabled = false;
    /**
     * Option
     */
    this.option = {};
    /**
     * Custom how to display
     */
    this.isCustom = false;
    this.dragging = false;
    this.progress = 0;
    this.fileName = '';
    this.disableState = false;
  }
  getIcon() {
    return getIconExtension(this.acceptType);
  }
  getAcceptFiles() {
    return getAcceptTypes(this.acceptType);
  }
  componentDidLoad() {
    if (!this.isCustom) {
      const dropzone = new $3ed269f2f0fb224b$export$2e2bcd8739ae039(this.container, Object.assign({ disablePreviews: true, clickable: this.disabled || !this.disableState, acceptedFiles: this.getAcceptFiles() }, this.option));
      if (dropzone && dropzone.on) {
        dropzone.on('addedfile', file => {
          this.gcUploadedFile.emit({ file });
        });
        dropzone.on('uploadprogress', (file, progress, bytesSent) => {
          this.dragging = false;
          this.fileName = file.upload.filename;
          this.disableState = true;
          this.progress = Math.floor(progress * 1);
          this.gcUploadProgress.emit({ file, progress, bytesSent });
        });
        dropzone.on('complete', file => {
          setTimeout(() => {
            this.fileName = '';
            this.progress = 0;
            this.disableState = false;
          }, TIMEOUT);
          this.gcUploadCompleted.emit(file);
        });
        dropzone.on('dragover', () => {
          this.dragging = true;
        });
        dropzone.on('dragleave', () => {
          this.dragging = false;
        });
      }
    }
  }
  handleChange(e) {
    var _a;
    if ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.files) {
      this.gcUploadedFile.emit({ file: e.target.files[0] });
    }
  }
  render() {
    if (this.isCustom) {
      return (index$1.h(index$1.Host, null, index$1.h("label", { htmlFor: "file-upload", class: "custom-file-upload" }, index$1.h("slot", null)), index$1.h("input", { accept: this.getAcceptFiles(), id: "file-upload", type: "file", onChange: (e) => this.handleChange(e) })));
    }
    return (index$1.h(index$1.Host, null, index$1.h("form", { id: "dropzone", action: "/upload", class: { 'dropzone': true, 'dropzone-dragging': this.dragging }, ref: el => (this.container = el), style: { width: this.width } }, index$1.h("div", { class: "dz-message" }, !this.fileName && (index$1.h("div", { class: "gc__dropzone-heading" }, index$1.h("slot", { name: "gc__dropzone-heading" }))), index$1.h("div", { class: "gc__dropzone-icon" }, index$1.h("gc-icon", { name: `fa-regular ${this.getIcon()}`, size: "40px", color: "var(--gc-color-primary)" }), index$1.h("div", { class: "gc__dropzone-extension" }, "*.", this.acceptType)), !!this.fileName && index$1.h("div", { class: "gc__dropzone-filename" }, this.fileName), !this.fileName && (index$1.h("div", { class: "gc__dropzone-body" }, index$1.h("slot", { name: "gc__dropzone-body" }))), !this.fileName && (index$1.h("div", { class: "gc__dropzone-buttons" }, index$1.h("gc-button", { id: "browse_files", type: "primary", "padding-text": "30px", height: "32px" }, "Browse Files"), index$1.h("div", { class: "gc__dropzone-type" }, "Drop your *.", this.acceptType, " file here"))), !this.fileName && (index$1.h("div", { class: "gc__dropzone-notes" }, index$1.h("slot", { name: "gc__dropzone-notes" }))))), !!this.progress && index$1.h("gc-progress", { percent: this.progress, width: `calc(${this.width} + 45px)` })));
  }
};
GcUpload.style = gcUploadCss;

exports.gc_alert = GcAlert;
exports.gc_button = GcButton;
exports.gc_cell_expandable = GcCellExpandable;
exports.gc_checkbox = GcCheckbox;
exports.gc_drag_container = GcDragContainer;
exports.gc_draggable_item = GcDraggableItem;
exports.gc_dropdown = GcDropdown;
exports.gc_form_field = GcFormField;
exports.gc_h1 = GcH1;
exports.gc_h2 = GcH2;
exports.gc_h3 = GcH3;
exports.gc_icon = GcIcon;
exports.gc_input = GcInput;
exports.gc_label = GcLabel;
exports.gc_link = GcLink;
exports.gc_menu = GcMenu;
exports.gc_menu_item = GcMenuItem;
exports.gc_modal = GcModal;
exports.gc_ol = GcOl;
exports.gc_pagination = GcPagination;
exports.gc_progress = GcProgress;
exports.gc_select = GcSelect;
exports.gc_spinner = GcSpinner;
exports.gc_step = GcStep;
exports.gc_steps = GcSteps;
exports.gc_tab = GcTab;
exports.gc_tab_panel = GcTabPanel;
exports.gc_table = GcTable;
exports.gc_tabs = GcTabs;
exports.gc_tabs_list = GcTabsList;
exports.gc_tag = GcTag;
exports.gc_textarea = GcTextarea;
exports.gc_tooltip = GcTooltip;
exports.gc_ul = GcUl;
exports.gc_upload = GcUpload;
