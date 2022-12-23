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

const fontawesomeMinCss = "/*!\n * Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n * Copyright 2022 Fonticons, Inc.\n */.fa{font-family:var(--fa-style-family,\"Font Awesome 6 Pro\");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-duotone,.fa-light,.fa-regular,.fa-sharp,.fa-sharp-solid,.fa-solid,.fa-thin,.fab,.fad,.fal,.far,.fas,.fass,.fat{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-light,.fa-regular,.fa-solid,.fa-thin,.fal,.far,.fas,.fat{font-family:\"Font Awesome 6 Pro\"}.fa-brands,.fab{font-family:\"Font Awesome 6 Brands\"}.fa-classic.fa-duotone,.fa-duotone,.fad{font-family:\"Font Awesome 6 Duotone\"}.fa-sharp,.fass{font-family:\"Font Awesome 6 Sharp\";font-weight:900}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index,auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-0:before{content:\"\\30\"}.fa-1:before{content:\"\\31\"}.fa-2:before{content:\"\\32\"}.fa-3:before{content:\"\\33\"}.fa-4:before{content:\"\\34\"}.fa-5:before{content:\"\\35\"}.fa-6:before{content:\"\\36\"}.fa-7:before{content:\"\\37\"}.fa-8:before{content:\"\\38\"}.fa-9:before{content:\"\\39\"}.fa-fill-drip:before{content:\"\\f576\"}.fa-arrows-to-circle:before{content:\"\\e4bd\"}.fa-chevron-circle-right:before,.fa-circle-chevron-right:before{content:\"\\f138\"}.fa-wagon-covered:before{content:\"\\f8ee\"}.fa-line-height:before{content:\"\\f871\"}.fa-bagel:before{content:\"\\e3d7\"}.fa-transporter-7:before{content:\"\\e2a8\"}.fa-at:before{content:\"\\40\"}.fa-rectangles-mixed:before{content:\"\\e323\"}.fa-phone-arrow-up-right:before,.fa-phone-arrow-up:before,.fa-phone-outgoing:before{content:\"\\e224\"}.fa-trash-alt:before,.fa-trash-can:before{content:\"\\f2ed\"}.fa-circle-l:before{content:\"\\e114\"}.fa-head-side-goggles:before,.fa-head-vr:before{content:\"\\f6ea\"}.fa-text-height:before{content:\"\\f034\"}.fa-user-times:before,.fa-user-xmark:before{content:\"\\f235\"}.fa-face-hand-yawn:before{content:\"\\e379\"}.fa-gauge-simple-min:before,.fa-tachometer-slowest:before{content:\"\\f62d\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-coffin:before{content:\"\\f6c6\"}.fa-comment-alt:before,.fa-message:before{content:\"\\f27a\"}.fa-bowl-salad:before,.fa-salad:before{content:\"\\f81e\"}.fa-info:before{content:\"\\f129\"}.fa-robot-astromech:before{content:\"\\e2d2\"}.fa-ring-diamond:before{content:\"\\e5ab\"}.fa-fondue-pot:before{content:\"\\e40d\"}.fa-theta:before{content:\"\\f69e\"}.fa-face-hand-peeking:before{content:\"\\e481\"}.fa-square-user:before{content:\"\\e283\"}.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before{content:\"\\f422\"}.fa-explosion:before{content:\"\\e4e9\"}.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before{content:\"\\f15c\"}.fa-wave-square:before{content:\"\\f83e\"}.fa-ring:before{content:\"\\f70b\"}.fa-building-un:before{content:\"\\e4d9\"}.fa-dice-three:before{content:\"\\f527\"}.fa-tire-pressure-warning:before{content:\"\\f633\"}.fa-wifi-2:before,.fa-wifi-fair:before{content:\"\\f6ab\"}.fa-calendar-alt:before,.fa-calendar-days:before{content:\"\\f073\"}.fa-mp3-player:before{content:\"\\f8ce\"}.fa-anchor-circle-check:before{content:\"\\e4aa\"}.fa-tally-4:before{content:\"\\e297\"}.fa-rectangle-history:before{content:\"\\e4a2\"}.fa-building-circle-arrow-right:before{content:\"\\e4d1\"}.fa-volleyball-ball:before,.fa-volleyball:before{content:\"\\f45f\"}.fa-sun-haze:before{content:\"\\f765\"}.fa-text-size:before{content:\"\\f894\"}.fa-ufo:before{content:\"\\e047\"}.fa-fork:before,.fa-utensil-fork:before{content:\"\\f2e3\"}.fa-arrows-up-to-line:before{content:\"\\e4c2\"}.fa-mobile-signal:before{content:\"\\e1ef\"}.fa-barcode-scan:before{content:\"\\f465\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-folder-arrow-down:before,.fa-folder-download:before{content:\"\\e053\"}.fa-circle-minus:before,.fa-minus-circle:before{content:\"\\f056\"}.fa-face-icicles:before{content:\"\\e37c\"}.fa-shovel:before{content:\"\\f713\"}.fa-door-open:before{content:\"\\f52b\"}.fa-films:before{content:\"\\e17a\"}.fa-right-from-bracket:before,.fa-sign-out-alt:before{content:\"\\f2f5\"}.fa-face-glasses:before{content:\"\\e377\"}.fa-nfc:before{content:\"\\e1f7\"}.fa-atom:before{content:\"\\f5d2\"}.fa-soap:before{content:\"\\e06e\"}.fa-heart-music-camera-bolt:before,.fa-icons:before{content:\"\\f86d\"}.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before{content:\"\\f539\"}.fa-closed-captioning-slash:before{content:\"\\e135\"}.fa-calculator-alt:before,.fa-calculator-simple:before{content:\"\\f64c\"}.fa-bridge-circle-check:before{content:\"\\e4c9\"}.fa-sliders-up:before,.fa-sliders-v:before{content:\"\\f3f1\"}.fa-location-minus:before,.fa-map-marker-minus:before{content:\"\\f609\"}.fa-pump-medical:before{content:\"\\e06a\"}.fa-fingerprint:before{content:\"\\f577\"}.fa-ski-boot:before{content:\"\\e3cc\"}.fa-rectangle-sd:before,.fa-standard-definition:before{content:\"\\e28a\"}.fa-h1:before{content:\"\\f313\"}.fa-hand-point-right:before{content:\"\\f0a4\"}.fa-magnifying-glass-location:before,.fa-search-location:before{content:\"\\f689\"}.fa-message-bot:before{content:\"\\e3b8\"}.fa-forward-step:before,.fa-step-forward:before{content:\"\\f051\"}.fa-face-smile-beam:before,.fa-smile-beam:before{content:\"\\f5b8\"}.fa-light-ceiling:before{content:\"\\e016\"}.fa-comment-alt-exclamation:before,.fa-message-exclamation:before{content:\"\\f4a5\"}.fa-bowl-scoop:before,.fa-bowl-shaved-ice:before{content:\"\\e3de\"}.fa-square-x:before{content:\"\\e286\"}.fa-utility-pole-double:before{content:\"\\e2c4\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-chevron-double-up:before,.fa-chevrons-up:before{content:\"\\f325\"}.fa-football-ball:before,.fa-football:before{content:\"\\f44e\"}.fa-user-vneck:before{content:\"\\e461\"}.fa-school-circle-exclamation:before{content:\"\\e56c\"}.fa-crop:before{content:\"\\f125\"}.fa-angle-double-down:before,.fa-angles-down:before{content:\"\\f103\"}.fa-users-rectangle:before{content:\"\\e594\"}.fa-people-roof:before{content:\"\\e537\"}.fa-arrow-square-right:before,.fa-square-arrow-right:before{content:\"\\f33b\"}.fa-location-plus:before,.fa-map-marker-plus:before{content:\"\\f60a\"}.fa-lightbulb-exclamation-on:before{content:\"\\e1ca\"}.fa-people-line:before{content:\"\\e534\"}.fa-beer-mug-empty:before,.fa-beer:before{content:\"\\f0fc\"}.fa-crate-empty:before{content:\"\\e151\"}.fa-diagram-predecessor:before{content:\"\\e477\"}.fa-transporter:before{content:\"\\e042\"}.fa-calendar-circle-user:before{content:\"\\e471\"}.fa-arrow-up-long:before,.fa-long-arrow-up:before{content:\"\\f176\"}.fa-person-carry-box:before,.fa-person-carry:before{content:\"\\f4cf\"}.fa-burn:before,.fa-fire-flame-simple:before{content:\"\\f46a\"}.fa-male:before,.fa-person:before{content:\"\\f183\"}.fa-laptop:before{content:\"\\f109\"}.fa-file-csv:before{content:\"\\f6dd\"}.fa-menorah:before{content:\"\\f676\"}.fa-union:before{content:\"\\f6a2\"}.fa-chevron-double-left:before,.fa-chevrons-left:before{content:\"\\f323\"}.fa-circle-heart:before,.fa-heart-circle:before{content:\"\\f4c7\"}.fa-truck-plane:before{content:\"\\e58f\"}.fa-record-vinyl:before{content:\"\\f8d9\"}.fa-bring-forward:before{content:\"\\f856\"}.fa-square-p:before{content:\"\\e279\"}.fa-face-grin-stars:before,.fa-grin-stars:before{content:\"\\f587\"}.fa-sigma:before{content:\"\\f68b\"}.fa-camera-movie:before{content:\"\\f8a9\"}.fa-bong:before{content:\"\\f55c\"}.fa-clarinet:before{content:\"\\f8ad\"}.fa-truck-flatbed:before{content:\"\\e2b6\"}.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before{content:\"\\f67b\"}.fa-arrow-down-up-across-line:before{content:\"\\e4af\"}.fa-leaf-heart:before{content:\"\\f4cb\"}.fa-house-building:before{content:\"\\e1b1\"}.fa-cheese-swiss:before{content:\"\\f7f0\"}.fa-spoon:before,.fa-utensil-spoon:before{content:\"\\f2e5\"}.fa-jar-wheat:before{content:\"\\e517\"}.fa-envelopes-bulk:before,.fa-mail-bulk:before{content:\"\\f674\"}.fa-file-circle-exclamation:before{content:\"\\e4eb\"}.fa-bow-arrow:before{content:\"\\f6b9\"}.fa-cart-xmark:before{content:\"\\e0dd\"}.fa-hexagon-xmark:before,.fa-times-hexagon:before,.fa-xmark-hexagon:before{content:\"\\f2ee\"}.fa-circle-h:before,.fa-hospital-symbol:before{content:\"\\f47e\"}.fa-merge:before{content:\"\\e526\"}.fa-pager:before{content:\"\\f815\"}.fa-cart-minus:before{content:\"\\e0db\"}.fa-address-book:before,.fa-contact-book:before{content:\"\\f2b9\"}.fa-pan-frying:before{content:\"\\e42c\"}.fa-grid-3:before,.fa-grid:before{content:\"\\e195\"}.fa-football-helmet:before{content:\"\\f44f\"}.fa-hand-love:before{content:\"\\e1a5\"}.fa-trees:before{content:\"\\f724\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-page:before{content:\"\\e428\"}.fa-k:before{content:\"\\4b\"}.fa-diagram-previous:before{content:\"\\e478\"}.fa-gauge-min:before,.fa-tachometer-alt-slowest:before{content:\"\\f628\"}.fa-folder-grid:before{content:\"\\e188\"}.fa-eggplant:before{content:\"\\e16c\"}.fa-ram:before{content:\"\\f70a\"}.fa-landmark-flag:before{content:\"\\e51c\"}.fa-lips:before{content:\"\\f600\"}.fa-pencil-alt:before,.fa-pencil:before{content:\"\\f303\"}.fa-backward:before{content:\"\\f04a\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-comments:before{content:\"\\f086\"}.fa-file-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-desktop-arrow-down:before{content:\"\\e155\"}.fa-code-pull-request:before{content:\"\\e13c\"}.fa-pumpkin:before{content:\"\\f707\"}.fa-clipboard-list:before{content:\"\\f46d\"}.fa-pen-field:before{content:\"\\e211\"}.fa-blueberries:before{content:\"\\e2e8\"}.fa-truck-loading:before,.fa-truck-ramp-box:before{content:\"\\f4de\"}.fa-note:before{content:\"\\e1ff\"}.fa-arrow-down-to-square:before{content:\"\\e096\"}.fa-user-check:before{content:\"\\f4fc\"}.fa-cloud-xmark:before{content:\"\\e35f\"}.fa-vial-virus:before{content:\"\\e597\"}.fa-book-alt:before,.fa-book-blank:before{content:\"\\f5d9\"}.fa-golf-flag-hole:before{content:\"\\e3ac\"}.fa-comment-alt-arrow-down:before,.fa-message-arrow-down:before{content:\"\\e1db\"}.fa-face-unamused:before{content:\"\\e39f\"}.fa-sheet-plastic:before{content:\"\\e571\"}.fa-circle-9:before{content:\"\\e0f6\"}.fa-blog:before{content:\"\\f781\"}.fa-user-ninja:before{content:\"\\f504\"}.fa-pencil-slash:before{content:\"\\e215\"}.fa-bowling-pins:before{content:\"\\f437\"}.fa-person-arrow-up-from-line:before{content:\"\\e539\"}.fa-down-right:before{content:\"\\e16b\"}.fa-scroll-torah:before,.fa-torah:before{content:\"\\f6a0\"}.fa-blinds-open:before{content:\"\\f8fc\"}.fa-fence:before{content:\"\\e303\"}.fa-arrow-alt-up:before,.fa-up:before{content:\"\\f357\"}.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before{content:\"\\f458\"}.fa-drumstick:before{content:\"\\f6d6\"}.fa-square-v:before{content:\"\\e284\"}.fa-face-awesome:before,.fa-gave-dandy:before{content:\"\\e409\"}.fa-dial-off:before{content:\"\\e162\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-face-smile-horns:before{content:\"\\e391\"}.fa-archive:before,.fa-box-archive:before{content:\"\\f187\"}.fa-grapes:before{content:\"\\e306\"}.fa-person-drowning:before{content:\"\\e545\"}.fa-dial-max:before{content:\"\\e15e\"}.fa-circle-m:before{content:\"\\e115\"}.fa-calendar-image:before{content:\"\\e0d4\"}.fa-caret-circle-down:before,.fa-circle-caret-down:before{content:\"\\f32d\"}.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before{content:\"\\f886\"}.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before{content:\"\\f58a\"}.fa-shish-kebab:before{content:\"\\f821\"}.fa-spray-can:before{content:\"\\f5bd\"}.fa-alarm-snooze:before{content:\"\\f845\"}.fa-scarecrow:before{content:\"\\f70d\"}.fa-truck-monster:before{content:\"\\f63b\"}.fa-gift-card:before{content:\"\\f663\"}.fa-w:before{content:\"\\57\"}.fa-code-pull-request-draft:before{content:\"\\e3fa\"}.fa-square-b:before{content:\"\\e264\"}.fa-elephant:before{content:\"\\f6da\"}.fa-earth-africa:before,.fa-globe-africa:before{content:\"\\f57c\"}.fa-rainbow:before{content:\"\\f75b\"}.fa-circle-notch:before{content:\"\\f1ce\"}.fa-tablet-alt:before,.fa-tablet-screen-button:before{content:\"\\f3fa\"}.fa-paw:before{content:\"\\f1b0\"}.fa-message-question:before{content:\"\\e1e3\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-trowel-bricks:before{content:\"\\e58a\"}.fa-square-3:before{content:\"\\e258\"}.fa-face-flushed:before,.fa-flushed:before{content:\"\\f579\"}.fa-hospital-user:before{content:\"\\f80d\"}.fa-microwave:before{content:\"\\e01b\"}.fa-tent-arrow-left-right:before{content:\"\\e57f\"}.fa-cart-circle-arrow-up:before{content:\"\\e3f0\"}.fa-trash-clock:before{content:\"\\e2b0\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-sprinkler-ceiling:before{content:\"\\e44c\"}.fa-browsers:before{content:\"\\e0cb\"}.fa-trillium:before{content:\"\\e588\"}.fa-music-slash:before{content:\"\\f8d1\"}.fa-truck-ramp:before{content:\"\\f4e0\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-box-tissue:before{content:\"\\e05b\"}.fa-circle-c:before{content:\"\\e101\"}.fa-star-christmas:before{content:\"\\f7d4\"}.fa-chart-bullet:before{content:\"\\e0e1\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-tree-christmas:before{content:\"\\f7db\"}.fa-tire-flat:before{content:\"\\f632\"}.fa-sunglasses:before{content:\"\\f892\"}.fa-badge:before{content:\"\\f335\"}.fa-comment-alt-edit:before,.fa-message-edit:before,.fa-message-pen:before{content:\"\\f4a4\"}.fa-bell-concierge:before,.fa-concierge-bell:before{content:\"\\f562\"}.fa-pen-ruler:before,.fa-pencil-ruler:before{content:\"\\f5ae\"}.fa-chess-rook-alt:before,.fa-chess-rook-piece:before{content:\"\\f448\"}.fa-square-root:before{content:\"\\f697\"}.fa-album-collection-circle-plus:before{content:\"\\e48e\"}.fa-people-arrows-left-right:before,.fa-people-arrows:before{content:\"\\e068\"}.fa-face-angry-horns:before{content:\"\\e368\"}.fa-mars-and-venus-burst:before{content:\"\\e523\"}.fa-tombstone:before{content:\"\\f720\"}.fa-caret-square-right:before,.fa-square-caret-right:before{content:\"\\f152\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-list-music:before{content:\"\\f8c9\"}.fa-sun-plant-wilt:before{content:\"\\e57a\"}.fa-toilets-portable:before{content:\"\\e584\"}.fa-hockey-puck:before{content:\"\\f453\"}.fa-hyphen:before{content:\"\\2d\"}.fa-table:before{content:\"\\f0ce\"}.fa-user-chef:before{content:\"\\e3d2\"}.fa-comment-alt-image:before,.fa-message-image:before{content:\"\\e1e0\"}.fa-users-medical:before{content:\"\\f830\"}.fa-sensor-alert:before,.fa-sensor-triangle-exclamation:before{content:\"\\e029\"}.fa-magnifying-glass-arrow-right:before{content:\"\\e521\"}.fa-digital-tachograph:before,.fa-tachograph-digital:before{content:\"\\f566\"}.fa-face-mask:before{content:\"\\e37f\"}.fa-pickleball:before{content:\"\\e435\"}.fa-star-sharp-half:before{content:\"\\e28c\"}.fa-users-slash:before{content:\"\\e073\"}.fa-clover:before{content:\"\\e139\"}.fa-meat:before{content:\"\\f814\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f3e5\"}.fa-star-and-crescent:before{content:\"\\f699\"}.fa-empty-set:before{content:\"\\f656\"}.fa-house-fire:before{content:\"\\e50c\"}.fa-minus-square:before,.fa-square-minus:before{content:\"\\f146\"}.fa-helicopter:before{content:\"\\f533\"}.fa-bird:before{content:\"\\e469\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-down:before,.fa-square-caret-down:before{content:\"\\f150\"}.fa-heart-half-alt:before,.fa-heart-half-stroke:before{content:\"\\e1ac\"}.fa-file-circle-question:before{content:\"\\e4ef\"}.fa-laptop-code:before{content:\"\\f5fc\"}.fa-joystick:before{content:\"\\f8c5\"}.fa-grill-fire:before{content:\"\\e5a4\"}.fa-rectangle-vertical-history:before{content:\"\\e237\"}.fa-swatchbook:before{content:\"\\f5c3\"}.fa-prescription-bottle:before{content:\"\\f485\"}.fa-bars:before,.fa-navicon:before{content:\"\\f0c9\"}.fa-keyboard-left:before{content:\"\\e1c3\"}.fa-people-group:before{content:\"\\e533\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-heart-broken:before,.fa-heart-crack:before{content:\"\\f7a9\"}.fa-face-beam-hand-over-mouth:before{content:\"\\e47c\"}.fa-droplet-percent:before,.fa-humidity:before{content:\"\\f750\"}.fa-external-link-square-alt:before,.fa-square-up-right:before{content:\"\\f360\"}.fa-face-kiss-beam:before,.fa-kiss-beam:before{content:\"\\f597\"}.fa-corn:before{content:\"\\f6c7\"}.fa-roller-coaster:before{content:\"\\e324\"}.fa-photo-film-music:before{content:\"\\e228\"}.fa-radar:before{content:\"\\e024\"}.fa-sickle:before{content:\"\\f822\"}.fa-film:before{content:\"\\f008\"}.fa-coconut:before{content:\"\\e2f6\"}.fa-ruler-horizontal:before{content:\"\\f547\"}.fa-shield-cross:before{content:\"\\f712\"}.fa-cassette-tape:before{content:\"\\f8ab\"}.fa-square-terminal:before{content:\"\\e32a\"}.fa-people-robbery:before{content:\"\\e536\"}.fa-lightbulb:before{content:\"\\f0eb\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-comment-middle:before{content:\"\\e149\"}.fa-trash-can-list:before{content:\"\\e2ab\"}.fa-block:before{content:\"\\e46a\"}.fa-circle-exclamation:before,.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-school-circle-xmark:before{content:\"\\e56d\"}.fa-arrow-right-from-bracket:before,.fa-sign-out:before{content:\"\\f08b\"}.fa-face-frown-slight:before{content:\"\\e376\"}.fa-chevron-circle-down:before,.fa-circle-chevron-down:before{content:\"\\f13a\"}.fa-sidebar-flip:before{content:\"\\e24f\"}.fa-unlock-alt:before,.fa-unlock-keyhole:before{content:\"\\f13e\"}.fa-temperature-list:before{content:\"\\e299\"}.fa-cloud-showers-heavy:before{content:\"\\f740\"}.fa-headphones-alt:before,.fa-headphones-simple:before{content:\"\\f58f\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-pipe-section:before{content:\"\\e438\"}.fa-space-station-moon-alt:before,.fa-space-station-moon-construction:before{content:\"\\e034\"}.fa-circle-dollar-to-slot:before,.fa-donate:before{content:\"\\f4b9\"}.fa-memory:before{content:\"\\f538\"}.fa-face-sleeping:before{content:\"\\e38d\"}.fa-road-spikes:before{content:\"\\e568\"}.fa-fire-burner:before{content:\"\\e4f1\"}.fa-squirrel:before{content:\"\\f71a\"}.fa-arrow-to-top:before,.fa-arrow-up-to-line:before{content:\"\\f341\"}.fa-flag:before{content:\"\\f024\"}.fa-face-cowboy-hat:before{content:\"\\e36e\"}.fa-hanukiah:before{content:\"\\f6e6\"}.fa-chart-scatter-3d:before{content:\"\\e0e8\"}.fa-square-code:before{content:\"\\e267\"}.fa-feather:before{content:\"\\f52d\"}.fa-volume-down:before,.fa-volume-low:before{content:\"\\f027\"}.fa-times-to-slot:before,.fa-vote-nay:before,.fa-xmark-to-slot:before{content:\"\\f771\"}.fa-box-alt:before,.fa-box-taped:before{content:\"\\f49a\"}.fa-comment-slash:before{content:\"\\f4b3\"}.fa-swords:before{content:\"\\f71d\"}.fa-cloud-sun-rain:before{content:\"\\f743\"}.fa-album:before{content:\"\\f89f\"}.fa-circle-n:before{content:\"\\e118\"}.fa-compress:before{content:\"\\f066\"}.fa-wheat-alt:before,.fa-wheat-awn:before{content:\"\\e2cd\"}.fa-ankh:before{content:\"\\f644\"}.fa-hands-holding-child:before{content:\"\\e4fa\"}.fa-asterisk:before{content:\"\\2a\"}.fa-key-skeleton-left-right:before{content:\"\\e3b4\"}.fa-comment-lines:before{content:\"\\f4b0\"}.fa-luchador-mask:before,.fa-luchador:before,.fa-mask-luchador:before{content:\"\\f455\"}.fa-check-square:before,.fa-square-check:before{content:\"\\f14a\"}.fa-shredder:before{content:\"\\f68a\"}.fa-book-open-alt:before,.fa-book-open-cover:before{content:\"\\e0c0\"}.fa-sandwich:before{content:\"\\f81f\"}.fa-peseta-sign:before{content:\"\\e221\"}.fa-parking-slash:before,.fa-square-parking-slash:before{content:\"\\f617\"}.fa-train-tunnel:before{content:\"\\e454\"}.fa-header:before,.fa-heading:before{content:\"\\f1dc\"}.fa-ghost:before{content:\"\\f6e2\"}.fa-face-anguished:before{content:\"\\e369\"}.fa-hockey-sticks:before{content:\"\\f454\"}.fa-abacus:before{content:\"\\f640\"}.fa-film-alt:before,.fa-film-simple:before{content:\"\\f3a0\"}.fa-list-squares:before,.fa-list:before{content:\"\\f03a\"}.fa-tree-palm:before{content:\"\\f82b\"}.fa-phone-square-alt:before,.fa-square-phone-flip:before{content:\"\\f87b\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-border-center-v:before{content:\"\\f89d\"}.fa-circle-dot:before,.fa-dot-circle:before{content:\"\\f192\"}.fa-clipboard-medical:before{content:\"\\e133\"}.fa-dizzy:before,.fa-face-dizzy:before{content:\"\\f567\"}.fa-egg:before{content:\"\\f7fb\"}.fa-arrow-alt-to-top:before,.fa-up-to-line:before{content:\"\\f34d\"}.fa-house-medical-circle-xmark:before{content:\"\\e513\"}.fa-watch-fitness:before{content:\"\\f63e\"}.fa-clock-nine-thirty:before{content:\"\\e34d\"}.fa-campground:before{content:\"\\f6bb\"}.fa-folder-plus:before{content:\"\\f65e\"}.fa-jug:before{content:\"\\f8c6\"}.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before{content:\"\\f1e3\"}.fa-snow-blowing:before{content:\"\\f761\"}.fa-paint-brush:before,.fa-paintbrush:before{content:\"\\f1fc\"}.fa-lock:before{content:\"\\f023\"}.fa-arrow-down-from-line:before,.fa-arrow-from-top:before{content:\"\\f345\"}.fa-gas-pump:before{content:\"\\f52f\"}.fa-signal-alt-slash:before,.fa-signal-bars-slash:before{content:\"\\f694\"}.fa-monkey:before{content:\"\\f6fb\"}.fa-pro:before,.fa-rectangle-pro:before{content:\"\\e235\"}.fa-house-night:before{content:\"\\e010\"}.fa-hot-tub-person:before,.fa-hot-tub:before{content:\"\\f593\"}.fa-blanket:before{content:\"\\f498\"}.fa-map-location:before,.fa-map-marked:before{content:\"\\f59f\"}.fa-house-flood-water:before{content:\"\\e50e\"}.fa-comments-question-check:before{content:\"\\e14f\"}.fa-tree:before{content:\"\\f1bb\"}.fa-arrows-cross:before{content:\"\\e0a2\"}.fa-backpack:before{content:\"\\f5d4\"}.fa-square-small:before{content:\"\\e27e\"}.fa-folder-arrow-up:before,.fa-folder-upload:before{content:\"\\e054\"}.fa-bridge-lock:before{content:\"\\e4cc\"}.fa-crosshairs-simple:before{content:\"\\e59f\"}.fa-sack-dollar:before{content:\"\\f81d\"}.fa-edit:before,.fa-pen-to-square:before{content:\"\\f044\"}.fa-sliders-h-square:before,.fa-square-sliders:before{content:\"\\f3f0\"}.fa-car-side:before{content:\"\\f5e4\"}.fa-comment-middle-top-alt:before,.fa-message-middle-top:before{content:\"\\e1e2\"}.fa-lightbulb-on:before{content:\"\\f672\"}.fa-knife:before,.fa-utensil-knife:before{content:\"\\f2e4\"}.fa-share-alt:before,.fa-share-nodes:before{content:\"\\f1e0\"}.fa-wave-sine:before{content:\"\\f899\"}.fa-heart-circle-minus:before{content:\"\\e4ff\"}.fa-circle-w:before{content:\"\\e12c\"}.fa-calendar-circle:before,.fa-circle-calendar:before{content:\"\\e102\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-microscope:before{content:\"\\f610\"}.fa-sunset:before{content:\"\\f767\"}.fa-sink:before{content:\"\\e06d\"}.fa-calendar-exclamation:before{content:\"\\f334\"}.fa-truck-container-empty:before{content:\"\\e2b5\"}.fa-hand-heart:before{content:\"\\f4bc\"}.fa-bag-shopping:before,.fa-shopping-bag:before{content:\"\\f290\"}.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before{content:\"\\f881\"}.fa-mitten:before{content:\"\\f7b5\"}.fa-reply-clock:before,.fa-reply-time:before{content:\"\\e239\"}.fa-person-rays:before{content:\"\\e54d\"}.fa-arrow-alt-right:before,.fa-right:before{content:\"\\f356\"}.fa-circle-f:before{content:\"\\e10e\"}.fa-users:before{content:\"\\f0c0\"}.fa-face-pleading:before{content:\"\\e386\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-flask-vial:before{content:\"\\e4f3\"}.fa-police-box:before{content:\"\\e021\"}.fa-cucumber:before{content:\"\\e401\"}.fa-head-side-brain:before{content:\"\\f808\"}.fa-hand-paper:before,.fa-hand:before{content:\"\\f256\"}.fa-biking-mountain:before,.fa-person-biking-mountain:before{content:\"\\f84b\"}.fa-utensils-slash:before{content:\"\\e464\"}.fa-print-magnifying-glass:before,.fa-print-search:before{content:\"\\f81a\"}.fa-folder-bookmark:before{content:\"\\e186\"}.fa-om:before{content:\"\\f679\"}.fa-pi:before{content:\"\\f67e\"}.fa-flask-potion:before,.fa-flask-round-potion:before{content:\"\\f6e1\"}.fa-face-shush:before{content:\"\\e38c\"}.fa-worm:before{content:\"\\e599\"}.fa-house-circle-xmark:before{content:\"\\e50b\"}.fa-plug:before{content:\"\\f1e6\"}.fa-calendar-circle-exclamation:before{content:\"\\e46e\"}.fa-square-i:before{content:\"\\e272\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-face-saluting:before{content:\"\\e484\"}.fa-gauge-simple-low:before,.fa-tachometer-slow:before{content:\"\\f62c\"}.fa-face-persevering:before{content:\"\\e385\"}.fa-camera-circle:before,.fa-circle-camera:before{content:\"\\e103\"}.fa-hand-spock:before{content:\"\\f259\"}.fa-spider-web:before{content:\"\\f719\"}.fa-circle-microphone:before,.fa-microphone-circle:before{content:\"\\e116\"}.fa-book-arrow-up:before{content:\"\\e0ba\"}.fa-popsicle:before{content:\"\\e43e\"}.fa-command:before{content:\"\\e142\"}.fa-blinds:before{content:\"\\f8fb\"}.fa-stopwatch:before{content:\"\\f2f2\"}.fa-saxophone:before{content:\"\\f8dc\"}.fa-square-2:before{content:\"\\e257\"}.fa-field-hockey-stick-ball:before,.fa-field-hockey:before{content:\"\\f44c\"}.fa-arrow-up-square-triangle:before,.fa-sort-shapes-up-alt:before{content:\"\\f88b\"}.fa-face-scream:before{content:\"\\e38b\"}.fa-square-m:before{content:\"\\e276\"}.fa-camera-web:before,.fa-webcam:before{content:\"\\f832\"}.fa-comment-arrow-down:before{content:\"\\e143\"}.fa-lightbulb-cfl:before{content:\"\\e5a6\"}.fa-window-frame-open:before{content:\"\\e050\"}.fa-face-kiss:before,.fa-kiss:before{content:\"\\f596\"}.fa-bridge-circle-xmark:before{content:\"\\e4cb\"}.fa-period:before{content:\"\\2e\"}.fa-face-grin-tongue:before,.fa-grin-tongue:before{content:\"\\f589\"}.fa-up-to-dotted-line:before{content:\"\\e457\"}.fa-thought-bubble:before{content:\"\\e32e\"}.fa-raygun:before{content:\"\\e025\"}.fa-flute:before{content:\"\\f8b9\"}.fa-acorn:before{content:\"\\f6ae\"}.fa-video-arrow-up-right:before{content:\"\\e2c9\"}.fa-grate-droplet:before{content:\"\\e194\"}.fa-seal-exclamation:before{content:\"\\e242\"}.fa-chess-bishop:before{content:\"\\f43a\"}.fa-message-sms:before{content:\"\\e1e5\"}.fa-coffee-beans:before{content:\"\\e13f\"}.fa-hat-witch:before{content:\"\\f6e7\"}.fa-face-grin-wink:before,.fa-grin-wink:before{content:\"\\f58c\"}.fa-clock-three-thirty:before{content:\"\\e357\"}.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-alarm-clock:before{content:\"\\f34e\"}.fa-eclipse:before{content:\"\\f749\"}.fa-face-relieved:before{content:\"\\e389\"}.fa-road-circle-check:before{content:\"\\e564\"}.fa-dice-five:before{content:\"\\f523\"}.fa-minus-octagon:before,.fa-octagon-minus:before{content:\"\\f308\"}.fa-rss-square:before,.fa-square-rss:before{content:\"\\f143\"}.fa-face-zany:before{content:\"\\e3a4\"}.fa-land-mine-on:before{content:\"\\e51b\"}.fa-square-arrow-up-left:before{content:\"\\e263\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-salt-shaker:before{content:\"\\e446\"}.fa-stamp:before{content:\"\\f5bf\"}.fa-file-plus:before{content:\"\\f319\"}.fa-draw-square:before{content:\"\\f5ef\"}.fa-toilet-paper-reverse-slash:before,.fa-toilet-paper-under-slash:before{content:\"\\e2a1\"}.fa-stairs:before{content:\"\\e289\"}.fa-drone-alt:before,.fa-drone-front:before{content:\"\\f860\"}.fa-glass-empty:before{content:\"\\e191\"}.fa-dial-high:before{content:\"\\e15c\"}.fa-user-construction:before,.fa-user-hard-hat:before,.fa-user-helmet-safety:before{content:\"\\f82c\"}.fa-i:before{content:\"\\49\"}.fa-hryvnia-sign:before,.fa-hryvnia:before{content:\"\\f6f2\"}.fa-arrow-down-left-and-arrow-up-right-to-center:before{content:\"\\e092\"}.fa-pills:before{content:\"\\f484\"}.fa-face-grin-wide:before,.fa-grin-alt:before{content:\"\\f581\"}.fa-tooth:before{content:\"\\f5c9\"}.fa-basketball-hoop:before{content:\"\\f435\"}.fa-objects-align-bottom:before{content:\"\\e3bb\"}.fa-v:before{content:\"\\56\"}.fa-sparkles:before{content:\"\\f890\"}.fa-squid:before{content:\"\\e450\"}.fa-leafy-green:before{content:\"\\e41d\"}.fa-circle-arrow-up-right:before{content:\"\\e0fc\"}.fa-calendars:before{content:\"\\e0d7\"}.fa-bangladeshi-taka-sign:before{content:\"\\e2e6\"}.fa-bicycle:before{content:\"\\f206\"}.fa-hammer-war:before{content:\"\\f6e4\"}.fa-circle-d:before{content:\"\\e104\"}.fa-spider-black-widow:before{content:\"\\f718\"}.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before{content:\"\\e579\"}.fa-pear:before{content:\"\\e20c\"}.fa-head-side-cough-slash:before{content:\"\\e062\"}.fa-triangle:before{content:\"\\f2ec\"}.fa-apartment:before{content:\"\\e468\"}.fa-ambulance:before,.fa-truck-medical:before{content:\"\\f0f9\"}.fa-pepper:before{content:\"\\e432\"}.fa-piano:before{content:\"\\f8d4\"}.fa-gun-squirt:before{content:\"\\e19d\"}.fa-wheat-awn-circle-exclamation:before{content:\"\\e598\"}.fa-snowman:before{content:\"\\f7d0\"}.fa-user-alien:before{content:\"\\e04a\"}.fa-shield-check:before{content:\"\\f2f7\"}.fa-mortar-pestle:before{content:\"\\f5a7\"}.fa-road-barrier:before{content:\"\\e562\"}.fa-chart-candlestick:before{content:\"\\e0e2\"}.fa-briefcase-blank:before{content:\"\\e0c8\"}.fa-school:before{content:\"\\f549\"}.fa-igloo:before{content:\"\\f7ae\"}.fa-bracket-round:before,.fa-parenthesis:before{content:\"\\28\"}.fa-joint:before{content:\"\\f595\"}.fa-horse-saddle:before{content:\"\\f8c3\"}.fa-mug-marshmallows:before{content:\"\\f7b7\"}.fa-filters:before{content:\"\\e17e\"}.fa-bell-on:before{content:\"\\f8fa\"}.fa-angle-right:before{content:\"\\f105\"}.fa-dial-med:before{content:\"\\e15f\"}.fa-horse:before{content:\"\\f6f0\"}.fa-q:before{content:\"\\51\"}.fa-monitor-heart-rate:before,.fa-monitor-waveform:before{content:\"\\f611\"}.fa-link-simple:before{content:\"\\e1cd\"}.fa-whistle:before{content:\"\\f460\"}.fa-g:before{content:\"\\47\"}.fa-fragile:before,.fa-wine-glass-crack:before{content:\"\\f4bb\"}.fa-slot-machine:before{content:\"\\e3ce\"}.fa-notes-medical:before{content:\"\\f481\"}.fa-car-wash:before{content:\"\\f5e6\"}.fa-escalator:before{content:\"\\e171\"}.fa-comment-image:before{content:\"\\e148\"}.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-dong-sign:before{content:\"\\e169\"}.fa-donut:before,.fa-doughnut:before{content:\"\\e406\"}.fa-capsules:before{content:\"\\f46b\"}.fa-poo-bolt:before,.fa-poo-storm:before{content:\"\\f75a\"}.fa-tally-1:before{content:\"\\e294\"}.fa-face-frown-open:before,.fa-frown-open:before{content:\"\\f57a\"}.fa-square-dashed:before{content:\"\\e269\"}.fa-square-j:before{content:\"\\e273\"}.fa-hand-point-up:before{content:\"\\f0a6\"}.fa-money-bill:before{content:\"\\f0d6\"}.fa-arrow-up-big-small:before,.fa-sort-size-up:before{content:\"\\f88e\"}.fa-barcode-read:before{content:\"\\f464\"}.fa-baguette:before{content:\"\\e3d8\"}.fa-bowl-soft-serve:before{content:\"\\e46b\"}.fa-face-holding-back-tears:before{content:\"\\e482\"}.fa-arrow-alt-square-up:before,.fa-square-up:before{content:\"\\f353\"}.fa-subway-tunnel:before,.fa-train-subway-tunnel:before{content:\"\\e2a3\"}.fa-exclamation-square:before,.fa-square-exclamation:before{content:\"\\f321\"}.fa-semicolon:before{content:\"\\3b\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-fan-table:before{content:\"\\e004\"}.fa-align-justify:before{content:\"\\f039\"}.fa-battery-1:before,.fa-battery-low:before{content:\"\\e0b1\"}.fa-credit-card-front:before{content:\"\\f38a\"}.fa-brain-arrow-curved-right:before,.fa-mind-share:before{content:\"\\f677\"}.fa-umbrella-beach:before{content:\"\\f5ca\"}.fa-helmet-un:before{content:\"\\e503\"}.fa-location-smile:before,.fa-map-marker-smile:before{content:\"\\f60d\"}.fa-arrow-left-to-line:before,.fa-arrow-to-left:before{content:\"\\f33e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-nigiri:before,.fa-sushi:before{content:\"\\e48a\"}.fa-comment-alt-captions:before,.fa-message-captions:before{content:\"\\e1de\"}.fa-trash-list:before{content:\"\\e2b1\"}.fa-bacon:before{content:\"\\f7e5\"}.fa-option:before{content:\"\\e318\"}.fa-hand-point-down:before{content:\"\\f0a7\"}.fa-arrow-up-from-bracket:before{content:\"\\e09a\"}.fa-trash-plus:before{content:\"\\e2b2\"}.fa-objects-align-top:before{content:\"\\e3c0\"}.fa-folder-blank:before,.fa-folder:before{content:\"\\f07b\"}.fa-face-anxious-sweat:before{content:\"\\e36a\"}.fa-credit-card-blank:before{content:\"\\f389\"}.fa-file-medical-alt:before,.fa-file-waveform:before{content:\"\\f478\"}.fa-microchip-ai:before{content:\"\\e1ec\"}.fa-mug:before{content:\"\\f874\"}.fa-plane-up-slash:before{content:\"\\e22e\"}.fa-radiation:before{content:\"\\f7b9\"}.fa-pen-circle:before{content:\"\\e20e\"}.fa-chart-simple:before{content:\"\\e473\"}.fa-crutches:before{content:\"\\f7f8\"}.fa-circle-parking:before,.fa-parking-circle:before{content:\"\\f615\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-leaf-oak:before{content:\"\\f6f7\"}.fa-square-bolt:before{content:\"\\e265\"}.fa-vial:before{content:\"\\f492\"}.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before{content:\"\\f624\"}.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before{content:\"\\e2ca\"}.fa-lambda:before{content:\"\\f66e\"}.fa-e:before{content:\"\\45\"}.fa-pizza:before{content:\"\\f817\"}.fa-bowl-chopsticks-noodles:before{content:\"\\e2ea\"}.fa-h3:before{content:\"\\f315\"}.fa-pen-alt:before,.fa-pen-clip:before{content:\"\\f305\"}.fa-bridge-circle-exclamation:before{content:\"\\e4ca\"}.fa-badge-percent:before{content:\"\\f646\"}.fa-user:before{content:\"\\f007\"}.fa-sensor:before{content:\"\\e028\"}.fa-comma:before{content:\"\\2c\"}.fa-school-circle-check:before{content:\"\\e56b\"}.fa-toilet-paper-reverse:before,.fa-toilet-paper-under:before{content:\"\\e2a0\"}.fa-light-emergency:before{content:\"\\e41f\"}.fa-arrow-down-to-arc:before{content:\"\\e4ae\"}.fa-dumpster:before{content:\"\\f793\"}.fa-shuttle-van:before,.fa-van-shuttle:before{content:\"\\f5b6\"}.fa-building-user:before{content:\"\\e4da\"}.fa-light-switch:before{content:\"\\e017\"}.fa-caret-square-left:before,.fa-square-caret-left:before{content:\"\\f191\"}.fa-highlighter:before{content:\"\\f591\"}.fa-heart-rate:before,.fa-wave-pulse:before{content:\"\\f5f8\"}.fa-key:before{content:\"\\f084\"}.fa-hat-santa:before{content:\"\\f7a7\"}.fa-tamale:before{content:\"\\e451\"}.fa-box-check:before{content:\"\\f467\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-steak:before{content:\"\\f824\"}.fa-location-crosshairs-slash:before,.fa-location-slash:before{content:\"\\f603\"}.fa-person-dolly:before{content:\"\\f4d0\"}.fa-globe:before{content:\"\\f0ac\"}.fa-synagogue:before{content:\"\\f69b\"}.fa-file-chart-column:before,.fa-file-chart-line:before{content:\"\\f659\"}.fa-person-half-dress:before{content:\"\\e548\"}.fa-folder-image:before{content:\"\\e18a\"}.fa-calendar-edit:before,.fa-calendar-pen:before{content:\"\\f333\"}.fa-road-bridge:before{content:\"\\e563\"}.fa-face-smile-tear:before{content:\"\\e393\"}.fa-comment-alt-plus:before,.fa-message-plus:before{content:\"\\f4a8\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-c:before{content:\"\\43\"}.fa-tablet-button:before{content:\"\\f10a\"}.fa-rectangle-history-circle-user:before{content:\"\\e4a4\"}.fa-building-lock:before{content:\"\\e4d6\"}.fa-chart-line-up:before{content:\"\\e0e5\"}.fa-mailbox:before{content:\"\\f813\"}.fa-truck-bolt:before{content:\"\\e3d0\"}.fa-pizza-slice:before{content:\"\\f818\"}.fa-money-bill-wave:before{content:\"\\f53a\"}.fa-area-chart:before,.fa-chart-area:before{content:\"\\f1fe\"}.fa-house-flag:before{content:\"\\e50d\"}.fa-person-circle-minus:before{content:\"\\e540\"}.fa-scalpel:before{content:\"\\f61d\"}.fa-ban:before,.fa-cancel:before{content:\"\\f05e\"}.fa-bell-exclamation:before{content:\"\\f848\"}.fa-bookmark-circle:before,.fa-circle-bookmark:before{content:\"\\e100\"}.fa-egg-fried:before{content:\"\\f7fc\"}.fa-face-weary:before{content:\"\\e3a1\"}.fa-uniform-martial-arts:before{content:\"\\e3d1\"}.fa-camera-rotate:before{content:\"\\e0d8\"}.fa-sun-dust:before{content:\"\\f764\"}.fa-comment-text:before{content:\"\\e14d\"}.fa-air-freshener:before,.fa-spray-can-sparkles:before{content:\"\\f5d0\"}.fa-signal-alt-4:before,.fa-signal-alt:before,.fa-signal-bars-strong:before,.fa-signal-bars:before{content:\"\\f690\"}.fa-diamond-exclamation:before{content:\"\\e405\"}.fa-star:before{content:\"\\f005\"}.fa-dial-min:before{content:\"\\e161\"}.fa-repeat:before{content:\"\\f363\"}.fa-cross:before{content:\"\\f654\"}.fa-file-caret-down:before,.fa-page-caret-down:before{content:\"\\e429\"}.fa-box:before{content:\"\\f466\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-clock-seven-thirty:before{content:\"\\e351\"}.fa-arrow-pointer:before,.fa-mouse-pointer:before{content:\"\\f245\"}.fa-clock-four-thirty:before{content:\"\\e34b\"}.fa-signal-alt-3:before,.fa-signal-bars-good:before{content:\"\\f693\"}.fa-cactus:before{content:\"\\f8a7\"}.fa-expand-arrows-alt:before,.fa-maximize:before{content:\"\\f31e\"}.fa-charging-station:before{content:\"\\f5e7\"}.fa-shapes:before,.fa-triangle-circle-square:before{content:\"\\f61f\"}.fa-plane-tail:before{content:\"\\e22c\"}.fa-gauge-simple-max:before,.fa-tachometer-fastest:before{content:\"\\f62b\"}.fa-circle-u:before{content:\"\\e127\"}.fa-shield-slash:before{content:\"\\e24b\"}.fa-phone-square-down:before,.fa-square-phone-hangup:before{content:\"\\e27a\"}.fa-arrow-up-left:before{content:\"\\e09d\"}.fa-transporter-1:before{content:\"\\e043\"}.fa-peanuts:before{content:\"\\e431\"}.fa-random:before,.fa-shuffle:before{content:\"\\f074\"}.fa-person-running:before,.fa-running:before{content:\"\\f70c\"}.fa-mobile-retro:before{content:\"\\e527\"}.fa-grip-lines-vertical:before{content:\"\\f7a5\"}.fa-arrow-up-from-square:before{content:\"\\e09c\"}.fa-file-dashed-line:before,.fa-page-break:before{content:\"\\f877\"}.fa-bracket-curly-right:before{content:\"\\7d\"}.fa-spider:before{content:\"\\f717\"}.fa-clock-three:before{content:\"\\e356\"}.fa-hands-bound:before{content:\"\\e4f9\"}.fa-scalpel-line-dashed:before,.fa-scalpel-path:before{content:\"\\f61e\"}.fa-file-invoice-dollar:before{content:\"\\f571\"}.fa-pipe-smoking:before{content:\"\\e3c4\"}.fa-face-astonished:before{content:\"\\e36b\"}.fa-window:before{content:\"\\f40e\"}.fa-plane-circle-exclamation:before{content:\"\\e556\"}.fa-ear:before{content:\"\\f5f0\"}.fa-file-lock:before{content:\"\\e3a6\"}.fa-diagram-venn:before{content:\"\\e15a\"}.fa-x-ray:before{content:\"\\f497\"}.fa-goal-net:before{content:\"\\e3ab\"}.fa-coffin-cross:before{content:\"\\e051\"}.fa-spell-check:before{content:\"\\f891\"}.fa-location-xmark:before,.fa-map-marker-times:before,.fa-map-marker-xmark:before{content:\"\\f60e\"}.fa-lasso:before{content:\"\\f8c8\"}.fa-slash:before{content:\"\\f715\"}.fa-person-to-portal:before,.fa-portal-enter:before{content:\"\\e022\"}.fa-calendar-star:before{content:\"\\f736\"}.fa-computer-mouse:before,.fa-mouse:before{content:\"\\f8cc\"}.fa-arrow-right-to-bracket:before,.fa-sign-in:before{content:\"\\f090\"}.fa-pegasus:before{content:\"\\f703\"}.fa-files-medical:before{content:\"\\f7fd\"}.fa-nfc-lock:before{content:\"\\e1f8\"}.fa-person-ski-lift:before,.fa-ski-lift:before{content:\"\\f7c8\"}.fa-square-6:before{content:\"\\e25b\"}.fa-shop-slash:before,.fa-store-alt-slash:before{content:\"\\e070\"}.fa-wind-turbine:before{content:\"\\f89b\"}.fa-sliders-simple:before{content:\"\\e253\"}.fa-badge-sheriff:before{content:\"\\f8a2\"}.fa-server:before{content:\"\\f233\"}.fa-virus-covid-slash:before{content:\"\\e4a9\"}.fa-intersection:before{content:\"\\f668\"}.fa-shop-lock:before{content:\"\\e4a5\"}.fa-family:before{content:\"\\e300\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-user-hair-buns:before{content:\"\\e3d3\"}.fa-blender-phone:before{content:\"\\f6b6\"}.fa-hourglass-clock:before{content:\"\\e41b\"}.fa-person-seat-reclined:before{content:\"\\e21f\"}.fa-paper-plane-alt:before,.fa-paper-plane-top:before,.fa-send:before{content:\"\\e20a\"}.fa-comment-alt-arrow-up:before,.fa-message-arrow-up:before{content:\"\\e1dc\"}.fa-lightbulb-exclamation:before{content:\"\\f671\"}.fa-layer-group-minus:before,.fa-layer-minus:before{content:\"\\f5fe\"}.fa-circle-e:before{content:\"\\e109\"}.fa-building-wheat:before{content:\"\\e4db\"}.fa-gauge-max:before,.fa-tachometer-alt-fastest:before{content:\"\\f626\"}.fa-person-breastfeeding:before{content:\"\\e53a\"}.fa-apostrophe:before{content:\"\\27\"}.fa-fire-hydrant:before{content:\"\\e17f\"}.fa-right-to-bracket:before,.fa-sign-in-alt:before{content:\"\\f2f6\"}.fa-video-plus:before{content:\"\\f4e1\"}.fa-arrow-alt-square-right:before,.fa-square-right:before{content:\"\\f352\"}.fa-comment-smile:before{content:\"\\f4b4\"}.fa-venus:before{content:\"\\f221\"}.fa-passport:before{content:\"\\f5ab\"}.fa-inbox-arrow-down:before,.fa-inbox-in:before{content:\"\\f310\"}.fa-heart-pulse:before,.fa-heartbeat:before{content:\"\\f21e\"}.fa-circle-8:before{content:\"\\e0f5\"}.fa-clouds-moon:before{content:\"\\f745\"}.fa-clock-ten-thirty:before{content:\"\\e355\"}.fa-people-carry-box:before,.fa-people-carry:before{content:\"\\f4ce\"}.fa-folder-user:before{content:\"\\e18e\"}.fa-trash-can-xmark:before{content:\"\\e2ae\"}.fa-temperature-high:before{content:\"\\f769\"}.fa-microchip:before{content:\"\\f2db\"}.fa-left-long-to-line:before{content:\"\\e41e\"}.fa-crown:before{content:\"\\f521\"}.fa-weight-hanging:before{content:\"\\f5cd\"}.fa-xmarks-lines:before{content:\"\\e59a\"}.fa-file-prescription:before{content:\"\\f572\"}.fa-calendar-range:before{content:\"\\e0d6\"}.fa-flower-daffodil:before{content:\"\\f800\"}.fa-hand-back-point-up:before{content:\"\\e1a2\"}.fa-weight-scale:before,.fa-weight:before{content:\"\\f496\"}.fa-star-exclamation:before{content:\"\\f2f3\"}.fa-books:before{content:\"\\f5db\"}.fa-user-friends:before,.fa-user-group:before{content:\"\\f500\"}.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before{content:\"\\f15e\"}.fa-layer-group-plus:before,.fa-layer-plus:before{content:\"\\f5ff\"}.fa-play-pause:before{content:\"\\e22f\"}.fa-block-question:before{content:\"\\e3dd\"}.fa-snooze:before,.fa-zzz:before{content:\"\\f880\"}.fa-scanner-image:before{content:\"\\f8f3\"}.fa-tv-retro:before{content:\"\\f401\"}.fa-square-t:before{content:\"\\e280\"}.fa-barn-silo:before,.fa-farm:before{content:\"\\f864\"}.fa-chess-knight:before{content:\"\\f441\"}.fa-bars-sort:before{content:\"\\e0ae\"}.fa-palette-boxes:before,.fa-pallet-alt:before,.fa-pallet-boxes:before{content:\"\\f483\"}.fa-face-laugh-squint:before,.fa-laugh-squint:before{content:\"\\f59b\"}.fa-code-simple:before{content:\"\\e13d\"}.fa-bolt-slash:before{content:\"\\e0b8\"}.fa-panel-fire:before{content:\"\\e42f\"}.fa-binary-circle-check:before{content:\"\\e33c\"}.fa-comment-minus:before{content:\"\\f4b1\"}.fa-burrito:before{content:\"\\f7ed\"}.fa-violin:before{content:\"\\f8ed\"}.fa-objects-column:before{content:\"\\e3c1\"}.fa-chevron-square-down:before,.fa-square-chevron-down:before{content:\"\\f329\"}.fa-comment-plus:before{content:\"\\f4b2\"}.fa-triangle-instrument:before,.fa-triangle-music:before{content:\"\\f8e2\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-user-pilot-tie:before{content:\"\\e2c1\"}.fa-piano-keyboard:before{content:\"\\f8d5\"}.fa-bed-empty:before{content:\"\\f8f9\"}.fa-arrow-circle-up:before,.fa-circle-arrow-up:before{content:\"\\f0aa\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-rectangle-portrait:before,.fa-rectangle-vertical:before{content:\"\\f2fb\"}.fa-person-walking:before,.fa-walking:before{content:\"\\f554\"}.fa-l:before{content:\"\\4c\"}.fa-signal-stream:before{content:\"\\f8dd\"}.fa-down-to-bracket:before{content:\"\\e4e7\"}.fa-circle-z:before{content:\"\\e130\"}.fa-stars:before{content:\"\\f762\"}.fa-fire:before{content:\"\\f06d\"}.fa-bed-pulse:before,.fa-procedures:before{content:\"\\f487\"}.fa-house-day:before{content:\"\\e00e\"}.fa-shuttle-space:before,.fa-space-shuttle:before{content:\"\\f197\"}.fa-shirt-long-sleeve:before{content:\"\\e3c7\"}.fa-chart-pie-alt:before,.fa-chart-pie-simple:before{content:\"\\f64e\"}.fa-face-laugh:before,.fa-laugh:before{content:\"\\f599\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-album-collection-circle-user:before{content:\"\\e48f\"}.fa-candy:before{content:\"\\e3e7\"}.fa-bowl-hot:before,.fa-soup:before{content:\"\\f823\"}.fa-flatbread:before{content:\"\\e40b\"}.fa-heart-circle-plus:before{content:\"\\e500\"}.fa-code-fork:before{content:\"\\e13b\"}.fa-city:before{content:\"\\f64f\"}.fa-signal-alt-1:before,.fa-signal-bars-weak:before{content:\"\\f691\"}.fa-microphone-alt:before,.fa-microphone-lines:before{content:\"\\f3c9\"}.fa-clock-twelve:before{content:\"\\e358\"}.fa-pepper-hot:before{content:\"\\f816\"}.fa-citrus-slice:before{content:\"\\e2f5\"}.fa-sheep:before{content:\"\\f711\"}.fa-unlock:before{content:\"\\f09c\"}.fa-colon-sign:before{content:\"\\e140\"}.fa-headset:before{content:\"\\f590\"}.fa-badger-honey:before{content:\"\\f6b4\"}.fa-h4:before{content:\"\\f86a\"}.fa-store-slash:before{content:\"\\e071\"}.fa-road-circle-xmark:before{content:\"\\e566\"}.fa-signal-slash:before{content:\"\\f695\"}.fa-user-minus:before{content:\"\\f503\"}.fa-mars-stroke-up:before,.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-champagne-glasses:before,.fa-glass-cheers:before{content:\"\\f79f\"}.fa-taco:before{content:\"\\f826\"}.fa-hexagon-plus:before,.fa-plus-hexagon:before{content:\"\\f300\"}.fa-clipboard:before{content:\"\\f328\"}.fa-house-circle-exclamation:before{content:\"\\e50a\"}.fa-file-arrow-up:before,.fa-file-upload:before{content:\"\\f574\"}.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before{content:\"\\f1eb\"}.fa-comments-alt:before,.fa-messages:before{content:\"\\f4b6\"}.fa-bath:before,.fa-bathtub:before{content:\"\\f2cd\"}.fa-umbrella-alt:before,.fa-umbrella-simple:before{content:\"\\e2bc\"}.fa-rectangle-history-circle-plus:before{content:\"\\e4a3\"}.fa-underline:before{content:\"\\f0cd\"}.fa-user-edit:before,.fa-user-pen:before{content:\"\\f4ff\"}.fa-binary-slash:before{content:\"\\e33e\"}.fa-square-o:before{content:\"\\e278\"}.fa-signature:before{content:\"\\f5b7\"}.fa-stroopwafel:before{content:\"\\f551\"}.fa-bold:before{content:\"\\f032\"}.fa-anchor-lock:before{content:\"\\e4ad\"}.fa-building-ngo:before{content:\"\\e4d7\"}.fa-transporter-3:before{content:\"\\e045\"}.fa-engine-exclamation:before,.fa-engine-warning:before{content:\"\\f5f2\"}.fa-circle-down-right:before{content:\"\\e108\"}.fa-square-k:before{content:\"\\e274\"}.fa-manat-sign:before{content:\"\\e1d5\"}.fa-money-check-edit:before,.fa-money-check-pen:before{content:\"\\f872\"}.fa-not-equal:before{content:\"\\f53e\"}.fa-border-style:before,.fa-border-top-left:before{content:\"\\f853\"}.fa-map-location-dot:before,.fa-map-marked-alt:before{content:\"\\f5a0\"}.fa-tilde:before{content:\"\\7e\"}.fa-jedi:before{content:\"\\f669\"}.fa-poll:before,.fa-square-poll-vertical:before{content:\"\\f681\"}.fa-arrow-down-square-triangle:before,.fa-sort-shapes-down-alt:before{content:\"\\f889\"}.fa-mug-hot:before{content:\"\\f7b6\"}.fa-dog-leashed:before{content:\"\\f6d4\"}.fa-battery-car:before,.fa-car-battery:before{content:\"\\f5df\"}.fa-face-downcast-sweat:before{content:\"\\e371\"}.fa-memo-circle-info:before{content:\"\\e49a\"}.fa-gift:before{content:\"\\f06b\"}.fa-dice-two:before{content:\"\\f528\"}.fa-volume-medium:before,.fa-volume:before{content:\"\\f6a8\"}.fa-transporter-5:before{content:\"\\e2a6\"}.fa-gauge-circle-bolt:before{content:\"\\e496\"}.fa-coin-front:before{content:\"\\e3fc\"}.fa-file-slash:before{content:\"\\e3a7\"}.fa-message-arrow-up-right:before{content:\"\\e1dd\"}.fa-treasure-chest:before{content:\"\\f723\"}.fa-chess-queen:before{content:\"\\f445\"}.fa-paint-brush-alt:before,.fa-paint-brush-fine:before,.fa-paintbrush-alt:before,.fa-paintbrush-fine:before{content:\"\\f5a9\"}.fa-glasses:before{content:\"\\f530\"}.fa-hood-cloak:before{content:\"\\f6ef\"}.fa-square-quote:before{content:\"\\e329\"}.fa-up-left:before{content:\"\\e2bd\"}.fa-bring-front:before{content:\"\\f857\"}.fa-chess-board:before{content:\"\\f43c\"}.fa-burger-cheese:before,.fa-cheeseburger:before{content:\"\\f7f1\"}.fa-building-circle-check:before{content:\"\\e4d2\"}.fa-repeat-1:before{content:\"\\f365\"}.fa-arrow-down-to-line:before,.fa-arrow-to-bottom:before{content:\"\\f33d\"}.fa-grid-5:before{content:\"\\e199\"}.fa-right-long-to-line:before{content:\"\\e444\"}.fa-person-chalkboard:before{content:\"\\e53d\"}.fa-mars-stroke-h:before,.fa-mars-stroke-right:before{content:\"\\f22b\"}.fa-hand-back-fist:before,.fa-hand-rock:before{content:\"\\f255\"}.fa-tally-5:before,.fa-tally:before{content:\"\\f69c\"}.fa-caret-square-up:before,.fa-square-caret-up:before{content:\"\\f151\"}.fa-cloud-showers-water:before{content:\"\\e4e4\"}.fa-bar-chart:before,.fa-chart-bar:before{content:\"\\f080\"}.fa-hands-bubbles:before,.fa-hands-wash:before{content:\"\\e05e\"}.fa-less-than-equal:before{content:\"\\f537\"}.fa-train:before{content:\"\\f238\"}.fa-up-from-dotted-line:before{content:\"\\e456\"}.fa-eye-low-vision:before,.fa-low-vision:before{content:\"\\f2a8\"}.fa-traffic-light-go:before{content:\"\\f638\"}.fa-face-exhaling:before{content:\"\\e480\"}.fa-sensor-fire:before{content:\"\\e02a\"}.fa-user-unlock:before{content:\"\\e058\"}.fa-hexagon-divide:before{content:\"\\e1ad\"}.fa-00:before{content:\"\\e467\"}.fa-crow:before{content:\"\\f520\"}.fa-betamax:before,.fa-cassette-betamax:before{content:\"\\f8a4\"}.fa-sailboat:before{content:\"\\e445\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-nfc-magnifying-glass:before{content:\"\\e1f9\"}.fa-file-binary:before{content:\"\\e175\"}.fa-circle-v:before{content:\"\\e12a\"}.fa-plus-square:before,.fa-square-plus:before{content:\"\\f0fe\"}.fa-bowl-scoops:before{content:\"\\e3df\"}.fa-mistletoe:before{content:\"\\f7b4\"}.fa-custard:before{content:\"\\e403\"}.fa-lacrosse-stick:before{content:\"\\e3b5\"}.fa-hockey-mask:before{content:\"\\f6ee\"}.fa-sunrise:before{content:\"\\f766\"}.fa-panel-ews:before{content:\"\\e42e\"}.fa-torii-gate:before{content:\"\\f6a1\"}.fa-cloud-exclamation:before{content:\"\\e491\"}.fa-comment-alt-lines:before,.fa-message-lines:before{content:\"\\f4a6\"}.fa-frog:before{content:\"\\f52e\"}.fa-bucket:before{content:\"\\e4cf\"}.fa-floppy-disk-pen:before{content:\"\\e182\"}.fa-image:before{content:\"\\f03e\"}.fa-window-frame:before{content:\"\\e04f\"}.fa-microphone:before{content:\"\\f130\"}.fa-cow:before{content:\"\\f6c8\"}.fa-square-ring:before{content:\"\\e44f\"}.fa-arrow-alt-from-top:before,.fa-down-from-line:before{content:\"\\f349\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-shield-times:before,.fa-shield-xmark:before{content:\"\\e24c\"}.fa-screwdriver:before{content:\"\\f54a\"}.fa-circle-sort-down:before,.fa-sort-circle-down:before{content:\"\\e031\"}.fa-folder-closed:before{content:\"\\e185\"}.fa-house-tsunami:before{content:\"\\e515\"}.fa-square-nfi:before{content:\"\\e576\"}.fa-forklift:before{content:\"\\f47a\"}.fa-arrow-up-from-ground-water:before{content:\"\\e4b5\"}.fa-bracket-square-right:before{content:\"\\5d\"}.fa-glass-martini-alt:before,.fa-martini-glass:before{content:\"\\f57b\"}.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before{content:\"\\f2ea\"}.fa-columns:before,.fa-table-columns:before{content:\"\\f0db\"}.fa-square-a:before{content:\"\\e25f\"}.fa-tick:before{content:\"\\e32f\"}.fa-lemon:before{content:\"\\f094\"}.fa-head-side-mask:before{content:\"\\e063\"}.fa-handshake:before{content:\"\\f2b5\"}.fa-gem:before{content:\"\\f3a5\"}.fa-dolly-box:before,.fa-dolly:before{content:\"\\f472\"}.fa-smoking:before{content:\"\\f48d\"}.fa-compress-arrows-alt:before,.fa-minimize:before{content:\"\\f78c\"}.fa-refrigerator:before{content:\"\\e026\"}.fa-monument:before{content:\"\\f5a6\"}.fa-octagon-xmark:before,.fa-times-octagon:before,.fa-xmark-octagon:before{content:\"\\f2f0\"}.fa-align-slash:before{content:\"\\f846\"}.fa-snowplow:before{content:\"\\f7d2\"}.fa-angle-double-right:before,.fa-angles-right:before{content:\"\\f101\"}.fa-truck-couch:before,.fa-truck-ramp-couch:before{content:\"\\f4dd\"}.fa-cannabis:before{content:\"\\f55f\"}.fa-circle-play:before,.fa-play-circle:before{content:\"\\f144\"}.fa-arrow-up-right-and-arrow-down-left-from-center:before{content:\"\\e0a0\"}.fa-tablets:before{content:\"\\f490\"}.fa-360-degrees:before{content:\"\\e2dc\"}.fa-ethernet:before{content:\"\\f796\"}.fa-eur:before,.fa-euro-sign:before,.fa-euro:before{content:\"\\f153\"}.fa-chair:before{content:\"\\f6c0\"}.fa-check-circle:before,.fa-circle-check:before{content:\"\\f058\"}.fa-money-simple-from-bracket:before{content:\"\\e313\"}.fa-bat:before{content:\"\\f6b5\"}.fa-circle-stop:before,.fa-stop-circle:before{content:\"\\f28d\"}.fa-head-side-headphones:before{content:\"\\f8c2\"}.fa-phone-rotary:before{content:\"\\f8d3\"}.fa-compass-drafting:before,.fa-drafting-compass:before{content:\"\\f568\"}.fa-plate-wheat:before{content:\"\\e55a\"}.fa-calendar-circle-minus:before{content:\"\\e46f\"}.fa-chopsticks:before{content:\"\\e3f7\"}.fa-car-mechanic:before,.fa-car-wrench:before{content:\"\\f5e3\"}.fa-icicles:before{content:\"\\f7ad\"}.fa-person-shelter:before{content:\"\\e54f\"}.fa-neuter:before{content:\"\\f22c\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-kazoo:before{content:\"\\f8c7\"}.fa-marker:before{content:\"\\f5a1\"}.fa-face-laugh-beam:before,.fa-laugh-beam:before{content:\"\\f59a\"}.fa-square-arrow-down-left:before{content:\"\\e261\"}.fa-battery-bolt:before{content:\"\\f376\"}.fa-tree-large:before{content:\"\\f7dd\"}.fa-helicopter-symbol:before{content:\"\\e502\"}.fa-aperture:before{content:\"\\e2df\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-file-magnifying-glass:before,.fa-file-search:before{content:\"\\f865\"}.fa-up-right:before{content:\"\\e2be\"}.fa-chevron-circle-up:before,.fa-circle-chevron-up:before{content:\"\\f139\"}.fa-user-police:before{content:\"\\e333\"}.fa-lari-sign:before{content:\"\\e1c8\"}.fa-volcano:before{content:\"\\f770\"}.fa-teddy-bear:before{content:\"\\e3cf\"}.fa-stocking:before{content:\"\\f7d5\"}.fa-person-walking-dashed-line-arrow-right:before{content:\"\\e553\"}.fa-image-slash:before{content:\"\\e1b7\"}.fa-mask-snorkel:before{content:\"\\e3b7\"}.fa-smoke:before{content:\"\\f760\"}.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before{content:\"\\f154\"}.fa-battery-exclamation:before{content:\"\\e0b0\"}.fa-viruses:before{content:\"\\e076\"}.fa-square-person-confined:before{content:\"\\e577\"}.fa-user-tie:before{content:\"\\f508\"}.fa-arrow-down-long:before,.fa-long-arrow-down:before{content:\"\\f175\"}.fa-tent-arrow-down-to-line:before{content:\"\\e57e\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-crystal-ball:before{content:\"\\e362\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-person-skating:before,.fa-skating:before{content:\"\\f7c5\"}.fa-star-shooting:before{content:\"\\e036\"}.fa-binary-lock:before{content:\"\\e33d\"}.fa-filter-circle-dollar:before,.fa-funnel-dollar:before{content:\"\\f662\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-arrow-circle-down:before,.fa-circle-arrow-down:before{content:\"\\f0ab\"}.fa-comment-edit:before,.fa-comment-pen:before{content:\"\\f4ae\"}.fa-arrow-right-to-file:before,.fa-file-import:before{content:\"\\f56f\"}.fa-banjo:before{content:\"\\f8a3\"}.fa-external-link-square:before,.fa-square-arrow-up-right:before{content:\"\\f14c\"}.fa-light-emergency-on:before{content:\"\\e420\"}.fa-kerning:before{content:\"\\f86f\"}.fa-box-open:before{content:\"\\f49e\"}.fa-square-f:before{content:\"\\e270\"}.fa-scroll:before{content:\"\\f70e\"}.fa-spa:before{content:\"\\f5bb\"}.fa-arrow-from-right:before,.fa-arrow-left-from-line:before{content:\"\\f344\"}.fa-strawberry:before{content:\"\\e32b\"}.fa-location-pin-lock:before{content:\"\\e51f\"}.fa-pause:before{content:\"\\f04c\"}.fa-clock-eight-thirty:before{content:\"\\e346\"}.fa-plane-alt:before,.fa-plane-engines:before{content:\"\\f3de\"}.fa-hill-avalanche:before{content:\"\\e507\"}.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-gauge-low:before,.fa-tachometer-alt-slow:before{content:\"\\f627\"}.fa-registered:before{content:\"\\f25d\"}.fa-trash-can-plus:before{content:\"\\e2ac\"}.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before{content:\"\\f516\"}.fa-globe-snow:before{content:\"\\f7a3\"}.fa-subscript:before{content:\"\\f12c\"}.fa-diamond-turn-right:before,.fa-directions:before{content:\"\\f5eb\"}.fa-integral:before{content:\"\\f667\"}.fa-burst:before{content:\"\\e4dc\"}.fa-house-laptop:before,.fa-laptop-house:before{content:\"\\e066\"}.fa-face-tired:before,.fa-tired:before{content:\"\\f5c8\"}.fa-money-bills:before{content:\"\\e1f3\"}.fa-blinds-raised:before{content:\"\\f8fd\"}.fa-smog:before{content:\"\\f75f\"}.fa-ufo-beam:before{content:\"\\e048\"}.fa-caret-circle-up:before,.fa-circle-caret-up:before{content:\"\\f331\"}.fa-user-vneck-hair-long:before{content:\"\\e463\"}.fa-square-a-lock:before{content:\"\\e44d\"}.fa-crutch:before{content:\"\\f7f7\"}.fa-gas-pump-slash:before{content:\"\\f5f4\"}.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-palette:before{content:\"\\f53f\"}.fa-transporter-4:before{content:\"\\e2a5\"}.fa-objects-align-right:before{content:\"\\e3bf\"}.fa-arrows-turn-right:before{content:\"\\e4c0\"}.fa-vest:before{content:\"\\e085\"}.fa-pig:before{content:\"\\f706\"}.fa-inbox-full:before{content:\"\\e1ba\"}.fa-circle-envelope:before,.fa-envelope-circle:before{content:\"\\e10c\"}.fa-construction:before,.fa-triangle-person-digging:before{content:\"\\f85d\"}.fa-ferry:before{content:\"\\e4ea\"}.fa-bullseye-arrow:before{content:\"\\f648\"}.fa-arrows-down-to-people:before{content:\"\\e4b9\"}.fa-seedling:before,.fa-sprout:before{content:\"\\f4d8\"}.fa-clock-seven:before{content:\"\\e350\"}.fa-arrows-alt-h:before,.fa-left-right:before{content:\"\\f337\"}.fa-boxes-packing:before{content:\"\\e4c7\"}.fa-arrow-circle-left:before,.fa-circle-arrow-left:before{content:\"\\f0a8\"}.fa-flashlight:before{content:\"\\f8b8\"}.fa-group-arrows-rotate:before{content:\"\\e4f6\"}.fa-bowl-food:before{content:\"\\e4c6\"}.fa-square-9:before{content:\"\\e25e\"}.fa-candy-cane:before{content:\"\\f786\"}.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before{content:\"\\f160\"}.fa-dollar-square:before,.fa-square-dollar:before,.fa-usd-square:before{content:\"\\f2e9\"}.fa-hand-holding-seedling:before{content:\"\\f4bf\"}.fa-comment-alt-check:before,.fa-message-check:before{content:\"\\f4a2\"}.fa-cloud-bolt:before,.fa-thunderstorm:before{content:\"\\f76c\"}.fa-remove-format:before,.fa-text-slash:before{content:\"\\f87d\"}.fa-watch:before{content:\"\\f2e1\"}.fa-circle-down-left:before{content:\"\\e107\"}.fa-text:before{content:\"\\f893\"}.fa-projector:before{content:\"\\f8d6\"}.fa-face-smile-wink:before,.fa-smile-wink:before{content:\"\\f4da\"}.fa-tombstone-alt:before,.fa-tombstone-blank:before{content:\"\\f721\"}.fa-chess-king-alt:before,.fa-chess-king-piece:before{content:\"\\f440\"}.fa-circle-6:before{content:\"\\e0f3\"}.fa-arrow-alt-left:before,.fa-left:before{content:\"\\f355\"}.fa-file-word:before{content:\"\\f1c2\"}.fa-file-powerpoint:before{content:\"\\f1c4\"}.fa-arrow-alt-square-down:before,.fa-square-down:before{content:\"\\f350\"}.fa-objects-align-center-vertical:before{content:\"\\e3bd\"}.fa-arrows-h:before,.fa-arrows-left-right:before{content:\"\\f07e\"}.fa-house-lock:before{content:\"\\e510\"}.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before{content:\"\\f0ed\"}.fa-wreath:before{content:\"\\f7e2\"}.fa-children:before{content:\"\\e4e1\"}.fa-meter-droplet:before{content:\"\\e1ea\"}.fa-blackboard:before,.fa-chalkboard:before{content:\"\\f51b\"}.fa-user-alt-slash:before,.fa-user-large-slash:before{content:\"\\f4fa\"}.fa-signal-4:before,.fa-signal-strong:before{content:\"\\f68f\"}.fa-lollipop:before,.fa-lollypop:before{content:\"\\e424\"}.fa-list-tree:before{content:\"\\e1d2\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-draw-circle:before{content:\"\\f5ed\"}.fa-cat-space:before{content:\"\\e001\"}.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before{content:\"\\e05f\"}.fa-rabbit-fast:before,.fa-rabbit-running:before{content:\"\\f709\"}.fa-memo-pad:before{content:\"\\e1da\"}.fa-mattress-pillow:before{content:\"\\e525\"}.fa-alarm-plus:before{content:\"\\f844\"}.fa-alicorn:before{content:\"\\f6b0\"}.fa-comment-question:before{content:\"\\e14b\"}.fa-gingerbread-man:before{content:\"\\f79d\"}.fa-guarani-sign:before{content:\"\\e19a\"}.fa-burger-fries:before{content:\"\\e0cd\"}.fa-mug-tea:before{content:\"\\f875\"}.fa-border-top:before{content:\"\\f855\"}.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before{content:\"\\f021\"}.fa-book-circle:before,.fa-circle-book-open:before{content:\"\\e0ff\"}.fa-arrows-to-dotted-line:before{content:\"\\e0a6\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-garage-open:before{content:\"\\e00b\"}.fa-shelves-empty:before{content:\"\\e246\"}.fa-cruzeiro-sign:before{content:\"\\e152\"}.fa-watch-apple:before{content:\"\\e2cb\"}.fa-watch-calculator:before{content:\"\\f8f0\"}.fa-list-dropdown:before{content:\"\\e1cf\"}.fa-cabinet-filing:before{content:\"\\f64b\"}.fa-burger-soda:before{content:\"\\f858\"}.fa-arrow-square-up:before,.fa-square-arrow-up:before{content:\"\\f33c\"}.fa-greater-than-equal:before{content:\"\\f532\"}.fa-pallet-box:before{content:\"\\e208\"}.fa-face-confounded:before{content:\"\\e36c\"}.fa-shield-alt:before,.fa-shield-halved:before{content:\"\\f3ed\"}.fa-truck-plow:before{content:\"\\f7de\"}.fa-atlas:before,.fa-book-atlas:before{content:\"\\f558\"}.fa-virus:before{content:\"\\e074\"}.fa-comment-middle-top:before{content:\"\\e14a\"}.fa-envelope-circle-check:before{content:\"\\e4e8\"}.fa-layer-group:before{content:\"\\f5fd\"}.fa-restroom-simple:before{content:\"\\e23a\"}.fa-arrows-to-dot:before{content:\"\\e4be\"}.fa-border-outer:before{content:\"\\f851\"}.fa-hashtag-lock:before{content:\"\\e415\"}.fa-clock-two-thirty:before{content:\"\\e35b\"}.fa-archway:before{content:\"\\f557\"}.fa-heart-circle-check:before{content:\"\\e4fd\"}.fa-house-chimney-crack:before,.fa-house-damage:before{content:\"\\f6f1\"}.fa-file-archive:before,.fa-file-zipper:before{content:\"\\f1c6\"}.fa-heart-half:before{content:\"\\e1ab\"}.fa-comment-check:before{content:\"\\f4ac\"}.fa-square:before{content:\"\\f0c8\"}.fa-memo:before{content:\"\\e1d8\"}.fa-glass-martini:before,.fa-martini-glass-empty:before{content:\"\\f000\"}.fa-couch:before{content:\"\\f4b8\"}.fa-cedi-sign:before{content:\"\\e0df\"}.fa-italic:before{content:\"\\f033\"}.fa-glass-citrus:before{content:\"\\f869\"}.fa-calendar-lines-pen:before{content:\"\\e472\"}.fa-church:before{content:\"\\f51d\"}.fa-person-snowmobiling:before,.fa-snowmobile:before{content:\"\\f7d1\"}.fa-face-hushed:before{content:\"\\e37b\"}.fa-comments-dollar:before{content:\"\\f653\"}.fa-link-simple-slash:before{content:\"\\e1ce\"}.fa-democrat:before{content:\"\\f747\"}.fa-face-confused:before{content:\"\\e36d\"}.fa-pinball:before{content:\"\\e229\"}.fa-z:before{content:\"\\5a\"}.fa-person-skiing:before,.fa-skiing:before{content:\"\\f7c9\"}.fa-deer:before{content:\"\\f78e\"}.fa-input-pipe:before{content:\"\\e1be\"}.fa-road-lock:before{content:\"\\e567\"}.fa-a:before{content:\"\\41\"}.fa-bookmark-slash:before{content:\"\\e0c2\"}.fa-temperature-arrow-down:before,.fa-temperature-down:before{content:\"\\e03f\"}.fa-mace:before{content:\"\\f6f8\"}.fa-feather-alt:before,.fa-feather-pointed:before{content:\"\\f56b\"}.fa-sausage:before{content:\"\\f820\"}.fa-trash-can-clock:before{content:\"\\e2aa\"}.fa-p:before{content:\"\\50\"}.fa-snowflake:before{content:\"\\f2dc\"}.fa-stomach:before{content:\"\\f623\"}.fa-newspaper:before{content:\"\\f1ea\"}.fa-ad:before,.fa-rectangle-ad:before{content:\"\\f641\"}.fa-guitar-electric:before{content:\"\\f8be\"}.fa-arrow-turn-down-right:before{content:\"\\e3d6\"}.fa-moon-cloud:before{content:\"\\f754\"}.fa-bread-slice-butter:before{content:\"\\e3e1\"}.fa-arrow-circle-right:before,.fa-circle-arrow-right:before{content:\"\\f0a9\"}.fa-user-group-crown:before,.fa-users-crown:before{content:\"\\f6a5\"}.fa-circle-i:before{content:\"\\e111\"}.fa-toilet-paper-check:before{content:\"\\e5b2\"}.fa-filter-circle-xmark:before{content:\"\\e17b\"}.fa-locust:before{content:\"\\e520\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before{content:\"\\f0cb\"}.fa-chart-waterfall:before{content:\"\\e0eb\"}.fa-face-party:before{content:\"\\e383\"}.fa-kidneys:before{content:\"\\f5fb\"}.fa-wifi-exclamation:before{content:\"\\e2cf\"}.fa-chart-network:before{content:\"\\f78a\"}.fa-person-dress-burst:before{content:\"\\e544\"}.fa-dice-d4:before{content:\"\\f6d0\"}.fa-money-check-alt:before,.fa-money-check-dollar:before{content:\"\\f53d\"}.fa-vector-square:before{content:\"\\f5cb\"}.fa-bread-slice:before{content:\"\\f7ec\"}.fa-language:before{content:\"\\f1ab\"}.fa-wheat-awn-slash:before{content:\"\\e338\"}.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before{content:\"\\f598\"}.fa-dagger:before{content:\"\\f6cb\"}.fa-podium:before{content:\"\\f680\"}.fa-memo-circle-check:before{content:\"\\e1d9\"}.fa-route-highway:before{content:\"\\f61a\"}.fa-arrow-alt-to-bottom:before,.fa-down-to-line:before{content:\"\\f34a\"}.fa-filter:before{content:\"\\f0b0\"}.fa-square-g:before{content:\"\\e271\"}.fa-circle-phone:before,.fa-phone-circle:before{content:\"\\e11b\"}.fa-clipboard-prescription:before{content:\"\\f5e8\"}.fa-user-nurse-hair:before{content:\"\\e45d\"}.fa-question:before{content:\"\\3f\"}.fa-file-signature:before{content:\"\\f573\"}.fa-toggle-large-on:before{content:\"\\e5b1\"}.fa-arrows-alt:before,.fa-up-down-left-right:before{content:\"\\f0b2\"}.fa-dryer-alt:before,.fa-dryer-heat:before{content:\"\\f862\"}.fa-house-chimney-user:before{content:\"\\e065\"}.fa-hand-holding-heart:before{content:\"\\f4be\"}.fa-arrow-up-small-big:before,.fa-sort-size-up-alt:before{content:\"\\f88f\"}.fa-train-track:before{content:\"\\e453\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-money-check:before{content:\"\\f53c\"}.fa-star-half-alt:before,.fa-star-half-stroke:before{content:\"\\f5c0\"}.fa-file-exclamation:before{content:\"\\f31a\"}.fa-code:before{content:\"\\f121\"}.fa-glass-whiskey:before,.fa-whiskey-glass:before{content:\"\\f7a0\"}.fa-moon-stars:before{content:\"\\f755\"}.fa-building-circle-exclamation:before{content:\"\\e4d3\"}.fa-clothes-hanger:before{content:\"\\e136\"}.fa-mobile-iphone:before,.fa-mobile-notch:before{content:\"\\e1ee\"}.fa-magnifying-glass-chart:before{content:\"\\e522\"}.fa-arrow-up-right-from-square:before,.fa-external-link:before{content:\"\\f08e\"}.fa-cubes-stacked:before{content:\"\\e4e6\"}.fa-images-user:before{content:\"\\e1b9\"}.fa-krw:before,.fa-won-sign:before,.fa-won:before{content:\"\\f159\"}.fa-image-polaroid-user:before{content:\"\\e1b6\"}.fa-virus-covid:before{content:\"\\e4a8\"}.fa-square-ellipsis:before{content:\"\\e26e\"}.fa-pie:before{content:\"\\f705\"}.fa-chess-knight-alt:before,.fa-chess-knight-piece:before{content:\"\\f442\"}.fa-austral-sign:before{content:\"\\e0a9\"}.fa-cloud-plus:before{content:\"\\e35e\"}.fa-f:before{content:\"\\46\"}.fa-leaf:before{content:\"\\f06c\"}.fa-bed-bunk:before{content:\"\\f8f8\"}.fa-road:before{content:\"\\f018\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-person-circle-plus:before{content:\"\\e541\"}.fa-chart-pie:before,.fa-pie-chart:before{content:\"\\f200\"}.fa-bolt-lightning:before{content:\"\\e0b7\"}.fa-clock-eight:before{content:\"\\e345\"}.fa-sack-xmark:before{content:\"\\e56a\"}.fa-file-excel:before{content:\"\\f1c3\"}.fa-file-contract:before{content:\"\\f56c\"}.fa-fish-fins:before{content:\"\\e4f2\"}.fa-circle-q:before{content:\"\\e11e\"}.fa-building-flag:before{content:\"\\e4d5\"}.fa-face-grin-beam:before,.fa-grin-beam:before{content:\"\\f582\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-face-disguise:before{content:\"\\e370\"}.fa-circle-arrow-down-right:before{content:\"\\e0fa\"}.fa-alien-8bit:before,.fa-alien-monster:before{content:\"\\f8f6\"}.fa-hand-point-ribbon:before{content:\"\\e1a6\"}.fa-poop:before{content:\"\\f619\"}.fa-object-exclude:before{content:\"\\e49c\"}.fa-telescope:before{content:\"\\e03e\"}.fa-location-pin:before,.fa-map-marker:before{content:\"\\f041\"}.fa-square-list:before{content:\"\\e489\"}.fa-kaaba:before{content:\"\\f66b\"}.fa-toilet-paper:before{content:\"\\f71e\"}.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before{content:\"\\f807\"}.fa-comment-code:before{content:\"\\e147\"}.fa-sim-cards:before{content:\"\\e251\"}.fa-starship:before{content:\"\\e039\"}.fa-eject:before{content:\"\\f052\"}.fa-arrow-alt-circle-right:before,.fa-circle-right:before{content:\"\\f35a\"}.fa-plane-circle-check:before{content:\"\\e555\"}.fa-seal:before{content:\"\\e241\"}.fa-user-cowboy:before{content:\"\\f8ea\"}.fa-hexagon-vertical-nft:before{content:\"\\e505\"}.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}.fa-bread-loaf:before{content:\"\\f7eb\"}.fa-rings-wedding:before{content:\"\\f81b\"}.fa-object-group:before{content:\"\\f247\"}.fa-french-fries:before{content:\"\\f803\"}.fa-chart-line:before,.fa-line-chart:before{content:\"\\f201\"}.fa-calendar-arrow-down:before,.fa-calendar-download:before{content:\"\\e0d0\"}.fa-send-back:before{content:\"\\f87e\"}.fa-mask-ventilator:before{content:\"\\e524\"}.fa-signature-lock:before{content:\"\\e3ca\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-map-signs:before,.fa-signs-post:before{content:\"\\f277\"}.fa-octagon-plus:before,.fa-plus-octagon:before{content:\"\\f301\"}.fa-cash-register:before{content:\"\\f788\"}.fa-person-circle-question:before{content:\"\\e542\"}.fa-melon-slice:before{content:\"\\e311\"}.fa-space-station-moon:before{content:\"\\e033\"}.fa-comment-alt-smile:before,.fa-message-smile:before{content:\"\\f4aa\"}.fa-cup-straw:before{content:\"\\e363\"}.fa-arrow-alt-from-right:before,.fa-left-from-line:before{content:\"\\f348\"}.fa-h:before{content:\"\\48\"}.fa-basket-shopping-simple:before,.fa-shopping-basket-alt:before{content:\"\\e0af\"}.fa-hands-heart:before,.fa-hands-holding-heart:before{content:\"\\f4c3\"}.fa-clock-nine:before{content:\"\\e34c\"}.fa-tarp:before{content:\"\\e57b\"}.fa-face-sleepy:before{content:\"\\e38e\"}.fa-hand-horns:before{content:\"\\e1a9\"}.fa-screwdriver-wrench:before,.fa-tools:before{content:\"\\f7d9\"}.fa-arrows-to-eye:before{content:\"\\e4bf\"}.fa-circle-three-quarters:before{content:\"\\e125\"}.fa-trophy-alt:before,.fa-trophy-star:before{content:\"\\f2eb\"}.fa-plug-circle-bolt:before{content:\"\\e55b\"}.fa-face-thermometer:before{content:\"\\e39a\"}.fa-shirt-running:before{content:\"\\e3c8\"}.fa-book-circle-arrow-up:before{content:\"\\e0bd\"}.fa-face-nauseated:before{content:\"\\e381\"}.fa-heart:before{content:\"\\f004\"}.fa-file-chart-pie:before{content:\"\\f65a\"}.fa-mars-and-venus:before{content:\"\\f224\"}.fa-home-user:before,.fa-house-user:before{content:\"\\e1b0\"}.fa-circle-arrow-down-left:before{content:\"\\e0f9\"}.fa-dumpster-fire:before{content:\"\\f794\"}.fa-hexagon-minus:before,.fa-minus-hexagon:before{content:\"\\f307\"}.fa-arrow-alt-to-left:before,.fa-left-to-line:before{content:\"\\f34b\"}.fa-house-crack:before{content:\"\\e3b1\"}.fa-paw-alt:before,.fa-paw-simple:before{content:\"\\f701\"}.fa-arrow-left-long-to-line:before{content:\"\\e3d4\"}.fa-brackets-round:before,.fa-parentheses:before{content:\"\\e0c5\"}.fa-cocktail:before,.fa-martini-glass-citrus:before{content:\"\\f561\"}.fa-user-shakespeare:before{content:\"\\e2c2\"}.fa-arrow-right-to-arc:before{content:\"\\e4b2\"}.fa-face-surprise:before,.fa-surprise:before{content:\"\\f5c2\"}.fa-bottle-water:before{content:\"\\e4c5\"}.fa-circle-pause:before,.fa-pause-circle:before{content:\"\\f28b\"}.fa-gauge-circle-plus:before{content:\"\\e498\"}.fa-folders:before{content:\"\\f660\"}.fa-angel:before{content:\"\\f779\"}.fa-value-absolute:before{content:\"\\f6a6\"}.fa-rabbit:before{content:\"\\f708\"}.fa-toilet-paper-slash:before{content:\"\\e072\"}.fa-apple-alt:before,.fa-apple-whole:before{content:\"\\f5d1\"}.fa-kitchen-set:before{content:\"\\e51a\"}.fa-lock-alt:before,.fa-lock-keyhole:before{content:\"\\f30d\"}.fa-r:before{content:\"\\52\"}.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-info-square:before,.fa-square-info:before{content:\"\\f30f\"}.fa-wifi-slash:before{content:\"\\f6ac\"}.fa-toilet-paper-xmark:before{content:\"\\e5b3\"}.fa-hands-holding-dollar:before,.fa-hands-usd:before{content:\"\\f4c5\"}.fa-cube:before{content:\"\\f1b2\"}.fa-arrow-down-triangle-square:before,.fa-sort-shapes-down:before{content:\"\\f888\"}.fa-bitcoin-sign:before{content:\"\\e0b4\"}.fa-shutters:before{content:\"\\e449\"}.fa-shield-dog:before{content:\"\\e573\"}.fa-solar-panel:before{content:\"\\f5ba\"}.fa-lock-open:before{content:\"\\f3c1\"}.fa-table-tree:before{content:\"\\e293\"}.fa-house-chimney-heart:before{content:\"\\e1b2\"}.fa-tally-3:before{content:\"\\e296\"}.fa-elevator:before{content:\"\\e16d\"}.fa-money-bill-transfer:before{content:\"\\e528\"}.fa-money-bill-trend-up:before{content:\"\\e529\"}.fa-house-flood-water-circle-arrow-right:before{content:\"\\e50f\"}.fa-poll-h:before,.fa-square-poll-horizontal:before{content:\"\\f682\"}.fa-circle:before{content:\"\\f111\"}.fa-cart-circle-exclamation:before{content:\"\\e3f2\"}.fa-sword:before{content:\"\\f71c\"}.fa-backward-fast:before,.fa-fast-backward:before{content:\"\\f049\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-user-astronaut:before{content:\"\\f4fb\"}.fa-plane-slash:before{content:\"\\e069\"}.fa-circle-dashed:before{content:\"\\e105\"}.fa-trademark:before{content:\"\\f25c\"}.fa-basketball-ball:before,.fa-basketball:before{content:\"\\f434\"}.fa-fork-knife:before,.fa-utensils-alt:before{content:\"\\f2e6\"}.fa-satellite-dish:before{content:\"\\f7c0\"}.fa-badge-check:before{content:\"\\f336\"}.fa-arrow-alt-circle-up:before,.fa-circle-up:before{content:\"\\f35b\"}.fa-slider:before{content:\"\\e252\"}.fa-mobile-alt:before,.fa-mobile-screen-button:before{content:\"\\f3cd\"}.fa-clock-one-thirty:before{content:\"\\e34f\"}.fa-inbox-arrow-up:before,.fa-inbox-out:before{content:\"\\f311\"}.fa-cloud-slash:before{content:\"\\e137\"}.fa-volume-high:before,.fa-volume-up:before{content:\"\\f028\"}.fa-users-rays:before{content:\"\\e593\"}.fa-wallet:before{content:\"\\f555\"}.fa-octagon-check:before{content:\"\\e426\"}.fa-flatbread-stuffed:before{content:\"\\e40c\"}.fa-clipboard-check:before{content:\"\\f46c\"}.fa-cart-circle-plus:before{content:\"\\e3f3\"}.fa-shipping-timed:before,.fa-truck-clock:before{content:\"\\f48c\"}.fa-pool-8-ball:before{content:\"\\e3c5\"}.fa-file-audio:before{content:\"\\f1c7\"}.fa-turn-down-left:before{content:\"\\e331\"}.fa-lock-hashtag:before{content:\"\\e423\"}.fa-chart-radar:before{content:\"\\e0e7\"}.fa-staff:before{content:\"\\f71b\"}.fa-burger:before,.fa-hamburger:before{content:\"\\f805\"}.fa-utility-pole:before{content:\"\\e2c3\"}.fa-transporter-6:before{content:\"\\e2a7\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-bugs:before{content:\"\\e4d0\"}.fa-vector-polygon:before{content:\"\\e2c7\"}.fa-diagram-nested:before{content:\"\\e157\"}.fa-rupee-sign:before,.fa-rupee:before{content:\"\\f156\"}.fa-file-image:before{content:\"\\f1c5\"}.fa-circle-question:before,.fa-question-circle:before{content:\"\\f059\"}.fa-image-user:before{content:\"\\e1b8\"}.fa-plane-departure:before{content:\"\\f5b0\"}.fa-handshake-slash:before{content:\"\\e060\"}.fa-book-bookmark:before{content:\"\\e0bb\"}.fa-border-center-h:before{content:\"\\f89c\"}.fa-can-food:before{content:\"\\e3e6\"}.fa-typewriter:before{content:\"\\f8e7\"}.fa-arrow-right-from-arc:before{content:\"\\e4b1\"}.fa-circle-k:before{content:\"\\e113\"}.fa-face-hand-over-mouth:before{content:\"\\e378\"}.fa-popcorn:before{content:\"\\f819\"}.fa-house-flood:before,.fa-house-water:before{content:\"\\f74f\"}.fa-object-subtract:before{content:\"\\e49e\"}.fa-code-branch:before{content:\"\\f126\"}.fa-warehouse-alt:before,.fa-warehouse-full:before{content:\"\\f495\"}.fa-hat-cowboy:before{content:\"\\f8c0\"}.fa-bridge:before{content:\"\\e4c8\"}.fa-phone-alt:before,.fa-phone-flip:before{content:\"\\f879\"}.fa-arrow-down-from-dotted-line:before{content:\"\\e090\"}.fa-square-quarters:before{content:\"\\e44e\"}.fa-truck-front:before{content:\"\\e2b7\"}.fa-cat:before{content:\"\\f6be\"}.fa-trash-xmark:before{content:\"\\e2b4\"}.fa-caret-circle-left:before,.fa-circle-caret-left:before{content:\"\\f32e\"}.fa-files:before{content:\"\\e178\"}.fa-anchor-circle-exclamation:before{content:\"\\e4ab\"}.fa-face-clouds:before{content:\"\\e47d\"}.fa-user-crown:before{content:\"\\f6a4\"}.fa-truck-field:before{content:\"\\e58d\"}.fa-route:before{content:\"\\f4d7\"}.fa-cart-circle-check:before{content:\"\\e3f1\"}.fa-clipboard-question:before{content:\"\\e4e3\"}.fa-panorama:before{content:\"\\e209\"}.fa-comment-medical:before{content:\"\\f7f5\"}.fa-teeth-open:before{content:\"\\f62f\"}.fa-user-tie-hair-long:before{content:\"\\e460\"}.fa-file-circle-minus:before{content:\"\\e4ed\"}.fa-head-side-medical:before{content:\"\\f809\"}.fa-tags:before{content:\"\\f02c\"}.fa-wine-glass:before{content:\"\\f4e3\"}.fa-fast-forward:before,.fa-forward-fast:before{content:\"\\f050\"}.fa-face-meh-blank:before,.fa-meh-blank:before{content:\"\\f5a4\"}.fa-user-robot:before{content:\"\\e04b\"}.fa-parking:before,.fa-square-parking:before{content:\"\\f540\"}.fa-card-diamond:before{content:\"\\e3ea\"}.fa-face-zipper:before{content:\"\\e3a5\"}.fa-face-raised-eyebrow:before{content:\"\\e388\"}.fa-house-signal:before{content:\"\\e012\"}.fa-chevron-square-up:before,.fa-square-chevron-up:before{content:\"\\f32c\"}.fa-bars-progress:before,.fa-tasks-alt:before{content:\"\\f828\"}.fa-faucet-drip:before{content:\"\\e006\"}.fa-arrows-to-line:before{content:\"\\e0a7\"}.fa-dolphin:before{content:\"\\e168\"}.fa-arrow-up-right:before{content:\"\\e09f\"}.fa-circle-r:before{content:\"\\e120\"}.fa-cart-flatbed:before,.fa-dolly-flatbed:before{content:\"\\f474\"}.fa-ban-smoking:before,.fa-smoking-ban:before{content:\"\\f54d\"}.fa-circle-sort-up:before,.fa-sort-circle-up:before{content:\"\\e032\"}.fa-terminal:before{content:\"\\f120\"}.fa-mobile-button:before{content:\"\\f10b\"}.fa-house-medical-flag:before{content:\"\\e514\"}.fa-basket-shopping:before,.fa-shopping-basket:before{content:\"\\f291\"}.fa-tape:before{content:\"\\f4db\"}.fa-chestnut:before{content:\"\\e3f6\"}.fa-bus-alt:before,.fa-bus-simple:before{content:\"\\f55e\"}.fa-eye:before{content:\"\\f06e\"}.fa-face-sad-cry:before,.fa-sad-cry:before{content:\"\\f5b3\"}.fa-heat:before{content:\"\\e00c\"}.fa-ticket-airline:before{content:\"\\e29a\"}.fa-boot-heeled:before{content:\"\\e33f\"}.fa-arrows-minimize:before,.fa-compress-arrows:before{content:\"\\e0a5\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-person-military-to-person:before{content:\"\\e54c\"}.fa-file-shield:before{content:\"\\e4f0\"}.fa-hexagon:before{content:\"\\f312\"}.fa-manhole:before{content:\"\\e1d6\"}.fa-user-slash:before{content:\"\\f506\"}.fa-pen:before{content:\"\\f304\"}.fa-tower-observation:before{content:\"\\e586\"}.fa-floppy-disks:before{content:\"\\e183\"}.fa-toilet-paper-blank-under:before,.fa-toilet-paper-reverse-alt:before{content:\"\\e29f\"}.fa-file-code:before{content:\"\\f1c9\"}.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before{content:\"\\f012\"}.fa-pump:before{content:\"\\e442\"}.fa-bus:before{content:\"\\f207\"}.fa-heart-circle-xmark:before{content:\"\\e501\"}.fa-arrow-up-left-from-circle:before{content:\"\\e09e\"}.fa-home-lg:before,.fa-house-chimney:before{content:\"\\e3af\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-dryer:before{content:\"\\f861\"}.fa-face-frown:before,.fa-frown:before{content:\"\\f119\"}.fa-chess-bishop-alt:before,.fa-chess-bishop-piece:before{content:\"\\f43b\"}.fa-shirt-tank-top:before{content:\"\\e3c9\"}.fa-diploma:before,.fa-scroll-ribbon:before{content:\"\\f5ea\"}.fa-screencast:before{content:\"\\e23e\"}.fa-walker:before{content:\"\\f831\"}.fa-prescription:before{content:\"\\f5b1\"}.fa-shop:before,.fa-store-alt:before{content:\"\\f54f\"}.fa-floppy-disk:before,.fa-save:before{content:\"\\f0c7\"}.fa-vihara:before{content:\"\\f6a7\"}.fa-face-kiss-closed-eyes:before{content:\"\\e37d\"}.fa-balance-scale-left:before,.fa-scale-unbalanced:before{content:\"\\f515\"}.fa-file-user:before{content:\"\\f65c\"}.fa-user-police-tie:before{content:\"\\e334\"}.fa-face-tongue-money:before{content:\"\\e39d\"}.fa-tennis-ball:before{content:\"\\f45e\"}.fa-square-l:before{content:\"\\e275\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-calendar-arrow-up:before,.fa-calendar-upload:before{content:\"\\e0d1\"}.fa-comment-dots:before,.fa-commenting:before{content:\"\\f4ad\"}.fa-plant-wilt:before{content:\"\\e5aa\"}.fa-scarf:before{content:\"\\f7c1\"}.fa-album-circle-plus:before{content:\"\\e48c\"}.fa-user-nurse-hair-long:before{content:\"\\e45e\"}.fa-diamond:before{content:\"\\f219\"}.fa-arrow-alt-square-left:before,.fa-square-left:before{content:\"\\f351\"}.fa-face-grin-squint:before,.fa-grin-squint:before{content:\"\\f585\"}.fa-circle-ellipsis-vertical:before{content:\"\\e10b\"}.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before{content:\"\\f4c0\"}.fa-grid-dividers:before{content:\"\\e3ad\"}.fa-bacterium:before{content:\"\\e05a\"}.fa-hand-pointer:before{content:\"\\f25a\"}.fa-drum-steelpan:before{content:\"\\f56a\"}.fa-hand-scissors:before{content:\"\\f257\"}.fa-hands-praying:before,.fa-praying-hands:before{content:\"\\f684\"}.fa-face-pensive:before{content:\"\\e384\"}.fa-user-music:before{content:\"\\f8eb\"}.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before{content:\"\\f01e\"}.fa-comments-alt-dollar:before,.fa-messages-dollar:before{content:\"\\f652\"}.fa-sensor-on:before{content:\"\\e02b\"}.fa-balloon:before{content:\"\\e2e3\"}.fa-biohazard:before{content:\"\\f780\"}.fa-chess-queen-alt:before,.fa-chess-queen-piece:before{content:\"\\f446\"}.fa-location-crosshairs:before,.fa-location:before{content:\"\\f601\"}.fa-mars-double:before{content:\"\\f227\"}.fa-house-leave:before,.fa-house-person-depart:before,.fa-house-person-leave:before{content:\"\\e00f\"}.fa-ruler-triangle:before{content:\"\\f61c\"}.fa-card-club:before{content:\"\\e3e9\"}.fa-child-dress:before{content:\"\\e59c\"}.fa-users-between-lines:before{content:\"\\e591\"}.fa-lungs-virus:before{content:\"\\e067\"}.fa-spinner-third:before{content:\"\\f3f4\"}.fa-face-grin-tears:before,.fa-grin-tears:before{content:\"\\f588\"}.fa-phone:before{content:\"\\f095\"}.fa-computer-mouse-scrollwheel:before,.fa-mouse-alt:before{content:\"\\f8cd\"}.fa-calendar-times:before,.fa-calendar-xmark:before{content:\"\\f273\"}.fa-child-reaching:before{content:\"\\e59d\"}.fa-table-layout:before{content:\"\\e290\"}.fa-narwhal:before{content:\"\\f6fe\"}.fa-ramp-loading:before{content:\"\\f4d4\"}.fa-calendar-circle-plus:before{content:\"\\e470\"}.fa-toothbrush:before{content:\"\\f635\"}.fa-border-inner:before{content:\"\\f84e\"}.fa-paw-claws:before{content:\"\\f702\"}.fa-kiwi-fruit:before{content:\"\\e30c\"}.fa-traffic-light-slow:before{content:\"\\f639\"}.fa-rectangle-code:before{content:\"\\e322\"}.fa-head-side-virus:before{content:\"\\e064\"}.fa-keyboard-brightness:before{content:\"\\e1c0\"}.fa-books-medical:before{content:\"\\f7e8\"}.fa-lightbulb-slash:before{content:\"\\f673\"}.fa-home-blank:before,.fa-house-blank:before{content:\"\\e487\"}.fa-square-5:before{content:\"\\e25a\"}.fa-heart-square:before,.fa-square-heart:before{content:\"\\f4c8\"}.fa-puzzle:before{content:\"\\e443\"}.fa-user-cog:before,.fa-user-gear:before{content:\"\\f4fe\"}.fa-pipe-circle-check:before{content:\"\\e436\"}.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before{content:\"\\f163\"}.fa-octagon-exclamation:before{content:\"\\e204\"}.fa-dial-low:before{content:\"\\e15d\"}.fa-door-closed:before{content:\"\\f52a\"}.fa-laptop-mobile:before,.fa-phone-laptop:before{content:\"\\f87a\"}.fa-conveyor-belt-alt:before,.fa-conveyor-belt-boxes:before{content:\"\\f46f\"}.fa-shield-virus:before{content:\"\\e06c\"}.fa-starfighter-alt-advanced:before,.fa-starfighter-twin-ion-engine-advanced:before{content:\"\\e28e\"}.fa-dice-six:before{content:\"\\f526\"}.fa-starfighter-alt:before,.fa-starfighter-twin-ion-engine:before{content:\"\\e038\"}.fa-rocket-launch:before{content:\"\\e027\"}.fa-mosquito-net:before{content:\"\\e52c\"}.fa-vent-damper:before{content:\"\\e465\"}.fa-bridge-water:before{content:\"\\e4ce\"}.fa-ban-bug:before,.fa-debug:before{content:\"\\f7f9\"}.fa-person-booth:before{content:\"\\f756\"}.fa-text-width:before{content:\"\\f035\"}.fa-garage-car:before{content:\"\\e00a\"}.fa-square-kanban:before{content:\"\\e488\"}.fa-hat-wizard:before{content:\"\\f6e8\"}.fa-pen-fancy:before{content:\"\\f5ac\"}.fa-coffee-pot:before{content:\"\\e002\"}.fa-mouse-field:before{content:\"\\e5a8\"}.fa-digging:before,.fa-person-digging:before{content:\"\\f85e\"}.fa-shower-alt:before,.fa-shower-down:before{content:\"\\e24d\"}.fa-box-circle-check:before{content:\"\\e0c4\"}.fa-brightness:before{content:\"\\e0c9\"}.fa-car-side-bolt:before{content:\"\\e344\"}.fa-ornament:before{content:\"\\f7b8\"}.fa-phone-arrow-down-left:before,.fa-phone-arrow-down:before,.fa-phone-incoming:before{content:\"\\e223\"}.fa-cloud-word:before{content:\"\\e138\"}.fa-hand-fingers-crossed:before{content:\"\\e1a3\"}.fa-trash:before{content:\"\\f1f8\"}.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before{content:\"\\f629\"}.fa-arrow-down-small-big:before,.fa-sort-size-down-alt:before{content:\"\\f88d\"}.fa-book-medical:before{content:\"\\f7e6\"}.fa-face-melting:before{content:\"\\e483\"}.fa-poo:before{content:\"\\f2fe\"}.fa-pen-alt-slash:before,.fa-pen-clip-slash:before{content:\"\\e20f\"}.fa-quote-right-alt:before,.fa-quote-right:before{content:\"\\f10e\"}.fa-scroll-old:before{content:\"\\f70f\"}.fa-guitars:before{content:\"\\f8bf\"}.fa-phone-xmark:before{content:\"\\e227\"}.fa-hose:before{content:\"\\e419\"}.fa-clock-six:before{content:\"\\e352\"}.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before{content:\"\\f553\"}.fa-square-r:before{content:\"\\e27c\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-envelope-open-dollar:before{content:\"\\f657\"}.fa-divide:before{content:\"\\f529\"}.fa-sun-cloud:before{content:\"\\f763\"}.fa-lamp-floor:before{content:\"\\e015\"}.fa-square-7:before{content:\"\\e25c\"}.fa-tenge-sign:before,.fa-tenge:before{content:\"\\f7d7\"}.fa-headphones:before{content:\"\\f025\"}.fa-hands-holding:before{content:\"\\f4c2\"}.fa-campfire:before{content:\"\\f6ba\"}.fa-circle-ampersand:before{content:\"\\e0f8\"}.fa-snowflakes:before{content:\"\\f7cf\"}.fa-hands-clapping:before{content:\"\\e1a8\"}.fa-republican:before{content:\"\\f75e\"}.fa-leaf-maple:before{content:\"\\f6f6\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-person-circle-xmark:before{content:\"\\e543\"}.fa-ruler:before{content:\"\\f545\"}.fa-cup-straw-swoosh:before{content:\"\\e364\"}.fa-temperature-hot:before,.fa-temperature-sun:before{content:\"\\f76a\"}.fa-align-left:before{content:\"\\f036\"}.fa-dice-d6:before{content:\"\\f6d1\"}.fa-restroom:before{content:\"\\f7bd\"}.fa-high-definition:before,.fa-rectangle-hd:before{content:\"\\e1ae\"}.fa-j:before{content:\"\\4a\"}.fa-galaxy:before{content:\"\\e008\"}.fa-users-viewfinder:before{content:\"\\e595\"}.fa-file-video:before{content:\"\\f1c8\"}.fa-cherries:before{content:\"\\e0ec\"}.fa-external-link-alt:before,.fa-up-right-from-square:before{content:\"\\f35d\"}.fa-circle-sort:before,.fa-sort-circle:before{content:\"\\e030\"}.fa-table-cells:before,.fa-th:before{content:\"\\f00a\"}.fa-file-pdf:before{content:\"\\f1c1\"}.fa-siren:before{content:\"\\e02d\"}.fa-arrow-up-to-dotted-line:before{content:\"\\e0a1\"}.fa-image-landscape:before,.fa-landscape:before{content:\"\\e1b5\"}.fa-tank-water:before{content:\"\\e452\"}.fa-curling-stone:before,.fa-curling:before{content:\"\\f44a\"}.fa-gamepad-alt:before,.fa-gamepad-modern:before{content:\"\\e5a2\"}.fa-messages-question:before{content:\"\\e1e7\"}.fa-bible:before,.fa-book-bible:before{content:\"\\f647\"}.fa-o:before{content:\"\\4f\"}.fa-medkit:before,.fa-suitcase-medical:before{content:\"\\f0fa\"}.fa-briefcase-arrow-right:before{content:\"\\e2f2\"}.fa-expand-wide:before{content:\"\\f320\"}.fa-clock-eleven-thirty:before{content:\"\\e348\"}.fa-rv:before{content:\"\\f7be\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-otter:before{content:\"\\f700\"}.fa-dreidel:before{content:\"\\f792\"}.fa-female:before,.fa-person-dress:before{content:\"\\f182\"}.fa-comment-dollar:before{content:\"\\f651\"}.fa-briefcase-clock:before,.fa-business-time:before{content:\"\\f64a\"}.fa-flower-tulip:before{content:\"\\f801\"}.fa-people-pants-simple:before{content:\"\\e21a\"}.fa-cloud-drizzle:before{content:\"\\f738\"}.fa-table-cells-large:before,.fa-th-large:before{content:\"\\f009\"}.fa-book-tanakh:before,.fa-tanakh:before{content:\"\\f827\"}.fa-solar-system:before{content:\"\\e02f\"}.fa-seal-question:before{content:\"\\e243\"}.fa-phone-volume:before,.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-disc-drive:before{content:\"\\f8b5\"}.fa-hat-cowboy-side:before{content:\"\\f8c1\"}.fa-rows:before,.fa-table-rows:before{content:\"\\e292\"}.fa-location-exclamation:before,.fa-map-marker-exclamation:before{content:\"\\f608\"}.fa-face-fearful:before{content:\"\\e375\"}.fa-clipboard-user:before{content:\"\\f7f3\"}.fa-bus-school:before{content:\"\\f5dd\"}.fa-film-slash:before{content:\"\\e179\"}.fa-square-arrow-down-right:before{content:\"\\e262\"}.fa-book-sparkles:before,.fa-book-spells:before{content:\"\\f6b8\"}.fa-washer:before,.fa-washing-machine:before{content:\"\\f898\"}.fa-child:before{content:\"\\f1ae\"}.fa-lira-sign:before{content:\"\\f195\"}.fa-user-visor:before{content:\"\\e04c\"}.fa-file-plus-minus:before{content:\"\\e177\"}.fa-chess-clock-alt:before,.fa-chess-clock-flip:before{content:\"\\f43e\"}.fa-satellite:before{content:\"\\f7bf\"}.fa-plane-lock:before{content:\"\\e558\"}.fa-steering-wheel:before{content:\"\\f622\"}.fa-tag:before{content:\"\\f02b\"}.fa-stretcher:before{content:\"\\f825\"}.fa-book-law:before,.fa-book-section:before{content:\"\\e0c1\"}.fa-inboxes:before{content:\"\\e1bb\"}.fa-coffee-bean:before{content:\"\\e13e\"}.fa-brackets-curly:before{content:\"\\f7ea\"}.fa-ellipsis-stroke-vertical:before,.fa-ellipsis-v-alt:before{content:\"\\f39c\"}.fa-comment:before{content:\"\\f075\"}.fa-square-1:before{content:\"\\e256\"}.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before{content:\"\\f1fd\"}.fa-head-side:before{content:\"\\f6e9\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-dolly-empty:before{content:\"\\f473\"}.fa-face-tissue:before{content:\"\\e39c\"}.fa-angle-double-up:before,.fa-angles-up:before{content:\"\\f102\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-chart-line-down:before{content:\"\\f64d\"}.fa-arrow-right-to-city:before{content:\"\\e4b3\"}.fa-lock-a:before{content:\"\\e422\"}.fa-ribbon:before{content:\"\\f4d6\"}.fa-lungs:before{content:\"\\f604\"}.fa-person-pinball:before{content:\"\\e21d\"}.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before{content:\"\\f887\"}.fa-apple-core:before{content:\"\\e08f\"}.fa-circle-y:before{content:\"\\e12f\"}.fa-h6:before{content:\"\\e413\"}.fa-litecoin-sign:before{content:\"\\e1d3\"}.fa-circle-small:before{content:\"\\e122\"}.fa-border-none:before{content:\"\\f850\"}.fa-arrow-turn-down-left:before{content:\"\\e2e1\"}.fa-circle-nodes:before{content:\"\\e4e2\"}.fa-parachute-box:before{content:\"\\f4cd\"}.fa-comment-alt-medical:before,.fa-message-medical:before{content:\"\\f7f4\"}.fa-rugby-ball:before{content:\"\\e3c6\"}.fa-comment-music:before{content:\"\\f8b0\"}.fa-indent:before{content:\"\\f03c\"}.fa-tree-alt:before,.fa-tree-deciduous:before{content:\"\\f400\"}.fa-puzzle-piece-alt:before,.fa-puzzle-piece-simple:before{content:\"\\e231\"}.fa-truck-field-un:before{content:\"\\e58e\"}.fa-nfc-trash:before{content:\"\\e1fd\"}.fa-hourglass-empty:before,.fa-hourglass:before{content:\"\\f254\"}.fa-mountain:before{content:\"\\f6fc\"}.fa-file-times:before,.fa-file-xmark:before{content:\"\\f317\"}.fa-home-heart:before,.fa-house-heart:before{content:\"\\f4c9\"}.fa-house-chimney-blank:before{content:\"\\e3b0\"}.fa-meter-bolt:before{content:\"\\e1e9\"}.fa-user-doctor:before,.fa-user-md:before{content:\"\\f0f0\"}.fa-slash-back:before{content:\"\\5c\"}.fa-circle-info:before,.fa-info-circle:before{content:\"\\f05a\"}.fa-fishing-rod:before{content:\"\\e3a8\"}.fa-hammer-crash:before{content:\"\\e414\"}.fa-cloud-meatball:before{content:\"\\f73b\"}.fa-camera-polaroid:before{content:\"\\f8aa\"}.fa-camera-alt:before,.fa-camera:before{content:\"\\f030\"}.fa-square-virus:before{content:\"\\e578\"}.fa-cart-arrow-up:before{content:\"\\e3ee\"}.fa-meteor:before{content:\"\\f753\"}.fa-car-on:before{content:\"\\e4dd\"}.fa-sleigh:before{content:\"\\f7cc\"}.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before{content:\"\\f162\"}.fa-square-4:before{content:\"\\e259\"}.fa-hand-holding-droplet:before,.fa-hand-holding-water:before{content:\"\\f4c1\"}.fa-waveform:before{content:\"\\f8f1\"}.fa-water:before{content:\"\\f773\"}.fa-star-sharp-half-alt:before,.fa-star-sharp-half-stroke:before{content:\"\\e28d\"}.fa-nfc-signal:before{content:\"\\e1fb\"}.fa-plane-prop:before{content:\"\\e22b\"}.fa-calendar-check:before{content:\"\\f274\"}.fa-clock-desk:before{content:\"\\e134\"}.fa-calendar-clock:before,.fa-calendar-time:before{content:\"\\e0d2\"}.fa-braille:before{content:\"\\f2a1\"}.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before{content:\"\\f486\"}.fa-plate-utensils:before{content:\"\\e43b\"}.fa-family-pants:before{content:\"\\e302\"}.fa-hose-reel:before{content:\"\\e41a\"}.fa-house-window:before{content:\"\\e3b3\"}.fa-landmark:before{content:\"\\f66f\"}.fa-truck:before{content:\"\\f0d1\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-cloud-rainbow:before{content:\"\\f73e\"}.fa-person-cane:before{content:\"\\e53c\"}.fa-alien:before{content:\"\\f8f5\"}.fa-tent:before{content:\"\\e57d\"}.fa-vest-patches:before{content:\"\\e086\"}.fa-people-dress-simple:before{content:\"\\e218\"}.fa-check-double:before{content:\"\\f560\"}.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before{content:\"\\f15d\"}.fa-bowling-ball-pin:before{content:\"\\e0c3\"}.fa-bell-school-slash:before{content:\"\\f5d6\"}.fa-plus-large:before{content:\"\\e59e\"}.fa-money-bill-wheat:before{content:\"\\e52a\"}.fa-camera-viewfinder:before,.fa-screenshot:before{content:\"\\e0da\"}.fa-comment-alt-music:before,.fa-message-music:before{content:\"\\f8af\"}.fa-car-building:before{content:\"\\f859\"}.fa-border-bottom-right:before,.fa-border-style-alt:before{content:\"\\f854\"}.fa-octagon:before{content:\"\\f306\"}.fa-comment-arrow-up-right:before{content:\"\\e145\"}.fa-octagon-divide:before{content:\"\\e203\"}.fa-cookie:before{content:\"\\f563\"}.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-tv-music:before{content:\"\\f8e6\"}.fa-hard-drive:before,.fa-hdd:before{content:\"\\f0a0\"}.fa-reel:before{content:\"\\e238\"}.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before{content:\"\\f586\"}.fa-dumbbell:before{content:\"\\f44b\"}.fa-list-alt:before,.fa-rectangle-list:before{content:\"\\f022\"}.fa-tarp-droplet:before{content:\"\\e57c\"}.fa-alarm-exclamation:before{content:\"\\f843\"}.fa-house-medical-circle-check:before{content:\"\\e511\"}.fa-traffic-cone:before{content:\"\\f636\"}.fa-grate:before{content:\"\\e193\"}.fa-arrow-down-right:before{content:\"\\e093\"}.fa-person-skiing-nordic:before,.fa-skiing-nordic:before{content:\"\\f7ca\"}.fa-calendar-plus:before{content:\"\\f271\"}.fa-person-from-portal:before,.fa-portal-exit:before{content:\"\\e023\"}.fa-plane-arrival:before{content:\"\\f5af\"}.fa-cowbell-circle-plus:before,.fa-cowbell-more:before{content:\"\\f8b4\"}.fa-arrow-alt-circle-left:before,.fa-circle-left:before{content:\"\\f359\"}.fa-distribute-spacing-vertical:before{content:\"\\e366\"}.fa-signal-alt-2:before,.fa-signal-bars-fair:before{content:\"\\f692\"}.fa-sportsball:before{content:\"\\e44b\"}.fa-subway:before,.fa-train-subway:before{content:\"\\f239\"}.fa-chart-gantt:before{content:\"\\e0e4\"}.fa-face-smile-upside-down:before{content:\"\\e395\"}.fa-ball-pile:before{content:\"\\f77e\"}.fa-badge-dollar:before{content:\"\\f645\"}.fa-money-bills-alt:before,.fa-money-bills-simple:before{content:\"\\e1f4\"}.fa-list-timeline:before{content:\"\\e1d1\"}.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before{content:\"\\e1bc\"}.fa-crop-alt:before,.fa-crop-simple:before{content:\"\\f565\"}.fa-money-bill-1:before,.fa-money-bill-alt:before{content:\"\\f3d1\"}.fa-left-long:before,.fa-long-arrow-alt-left:before{content:\"\\f30a\"}.fa-keyboard-down:before{content:\"\\e1c2\"}.fa-circle-up-right:before{content:\"\\e129\"}.fa-cloud-bolt-moon:before,.fa-thunderstorm-moon:before{content:\"\\f76d\"}.fa-dna:before{content:\"\\f471\"}.fa-virus-slash:before{content:\"\\e075\"}.fa-bracket-round-right:before{content:\"\\29\"}.fa-circle-5:before{content:\"\\e0f2\"}.fa-minus:before,.fa-subtract:before{content:\"\\f068\"}.fa-fire-flame:before,.fa-flame:before{content:\"\\f6df\"}.fa-arrow-alt-to-right:before,.fa-right-to-line:before{content:\"\\f34c\"}.fa-child-rifle:before{content:\"\\e4e0\"}.fa-gif:before{content:\"\\e190\"}.fa-chess:before{content:\"\\f439\"}.fa-trash-slash:before{content:\"\\e2b3\"}.fa-arrow-left-long:before,.fa-long-arrow-left:before{content:\"\\f177\"}.fa-plug-circle-check:before{content:\"\\e55c\"}.fa-font-case:before{content:\"\\f866\"}.fa-street-view:before{content:\"\\f21d\"}.fa-arrow-down-left:before{content:\"\\e091\"}.fa-franc-sign:before{content:\"\\e18f\"}.fa-flask-poison:before,.fa-flask-round-poison:before{content:\"\\f6e0\"}.fa-volume-off:before{content:\"\\f026\"}.fa-book-circle-arrow-right:before{content:\"\\e0bc\"}.fa-chart-user:before,.fa-user-chart:before{content:\"\\f6a3\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before{content:\"\\f2a3\"}.fa-presentation-screen:before,.fa-presentation:before{content:\"\\f685\"}.fa-circle-bolt:before{content:\"\\e0fe\"}.fa-face-smile-halo:before{content:\"\\e38f\"}.fa-cart-circle-arrow-down:before{content:\"\\e3ef\"}.fa-house-person-arrive:before,.fa-house-person-return:before,.fa-house-return:before{content:\"\\e011\"}.fa-comment-alt-times:before,.fa-message-times:before,.fa-message-xmark:before{content:\"\\f4ab\"}.fa-file-award:before,.fa-file-certificate:before{content:\"\\f5f3\"}.fa-user-doctor-hair-long:before{content:\"\\e459\"}.fa-camera-home:before,.fa-camera-security:before{content:\"\\f8fe\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-droplet-slash:before,.fa-tint-slash:before{content:\"\\f5c7\"}.fa-book-heart:before{content:\"\\f499\"}.fa-mosque:before{content:\"\\f678\"}.fa-duck:before{content:\"\\f6d8\"}.fa-mosquito:before{content:\"\\e52b\"}.fa-star-of-david:before{content:\"\\f69a\"}.fa-flag-alt:before,.fa-flag-swallowtail:before{content:\"\\f74c\"}.fa-person-military-rifle:before{content:\"\\e54b\"}.fa-car-garage:before{content:\"\\f5e2\"}.fa-cart-shopping:before,.fa-shopping-cart:before{content:\"\\f07a\"}.fa-book-font:before{content:\"\\e0bf\"}.fa-shield-plus:before{content:\"\\e24a\"}.fa-vials:before{content:\"\\f493\"}.fa-eye-dropper-full:before{content:\"\\e172\"}.fa-distribute-spacing-horizontal:before{content:\"\\e365\"}.fa-tablet-rugged:before{content:\"\\f48f\"}.fa-temperature-frigid:before,.fa-temperature-snow:before{content:\"\\f768\"}.fa-moped:before{content:\"\\e3b9\"}.fa-face-smile-plus:before,.fa-smile-plus:before{content:\"\\f5b9\"}.fa-radio-alt:before,.fa-radio-tuner:before{content:\"\\f8d8\"}.fa-face-swear:before{content:\"\\e399\"}.fa-water-arrow-down:before,.fa-water-lower:before{content:\"\\f774\"}.fa-scanner-touchscreen:before{content:\"\\f48a\"}.fa-circle-7:before{content:\"\\e0f4\"}.fa-plug-circle-plus:before{content:\"\\e55f\"}.fa-person-ski-jumping:before,.fa-ski-jump:before{content:\"\\f7c7\"}.fa-place-of-worship:before{content:\"\\f67f\"}.fa-water-arrow-up:before,.fa-water-rise:before{content:\"\\f775\"}.fa-waveform-lines:before,.fa-waveform-path:before{content:\"\\f8f2\"}.fa-split:before{content:\"\\e254\"}.fa-film-canister:before,.fa-film-cannister:before{content:\"\\f8b7\"}.fa-folder-times:before,.fa-folder-xmark:before{content:\"\\f65f\"}.fa-toilet-paper-alt:before,.fa-toilet-paper-blank:before{content:\"\\f71f\"}.fa-tablet-android-alt:before,.fa-tablet-screen:before{content:\"\\f3fc\"}.fa-hexagon-vertical-nft-slanted:before{content:\"\\e506\"}.fa-folder-music:before{content:\"\\e18d\"}.fa-desktop-medical:before,.fa-display-medical:before{content:\"\\e166\"}.fa-share-all:before{content:\"\\f367\"}.fa-peapod:before{content:\"\\e31c\"}.fa-chess-clock:before{content:\"\\f43d\"}.fa-axe:before{content:\"\\f6b2\"}.fa-square-d:before{content:\"\\e268\"}.fa-grip-vertical:before{content:\"\\f58e\"}.fa-mobile-signal-out:before{content:\"\\e1f0\"}.fa-arrow-turn-up:before,.fa-level-up:before{content:\"\\f148\"}.fa-u:before{content:\"\\55\"}.fa-arrow-up-from-dotted-line:before{content:\"\\e09b\"}.fa-square-root-alt:before,.fa-square-root-variable:before{content:\"\\f698\"}.fa-light-switch-on:before{content:\"\\e019\"}.fa-arrow-down-arrow-up:before,.fa-sort-alt:before{content:\"\\f883\"}.fa-raindrops:before{content:\"\\f75c\"}.fa-dash:before,.fa-minus-large:before{content:\"\\e404\"}.fa-clock-four:before,.fa-clock:before{content:\"\\f017\"}.fa-input-numeric:before{content:\"\\e1bd\"}.fa-truck-tow:before{content:\"\\e2b8\"}.fa-backward-step:before,.fa-step-backward:before{content:\"\\f048\"}.fa-pallet:before{content:\"\\f482\"}.fa-car-bolt:before{content:\"\\e341\"}.fa-arrows-maximize:before,.fa-expand-arrows:before{content:\"\\f31d\"}.fa-faucet:before{content:\"\\e005\"}.fa-cloud-sleet:before{content:\"\\f741\"}.fa-lamp-street:before{content:\"\\e1c5\"}.fa-list-radio:before{content:\"\\e1d0\"}.fa-pen-nib-slash:before{content:\"\\e4a1\"}.fa-baseball-bat-ball:before{content:\"\\f432\"}.fa-square-up-left:before{content:\"\\e282\"}.fa-overline:before{content:\"\\f876\"}.fa-s:before{content:\"\\53\"}.fa-timeline:before{content:\"\\e29c\"}.fa-keyboard:before{content:\"\\f11c\"}.fa-arrows-from-dotted-line:before{content:\"\\e0a3\"}.fa-usb-drive:before{content:\"\\f8e9\"}.fa-ballot:before{content:\"\\f732\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-location-dot-slash:before,.fa-map-marker-alt-slash:before{content:\"\\f605\"}.fa-cards:before{content:\"\\e3ed\"}.fa-clinic-medical:before,.fa-house-chimney-medical:before{content:\"\\f7f2\"}.fa-boxing-glove:before,.fa-glove-boxing:before{content:\"\\f438\"}.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-bell-school:before{content:\"\\f5d5\"}.fa-mobile-android-alt:before,.fa-mobile-screen:before{content:\"\\f3cf\"}.fa-plane-up:before{content:\"\\e22d\"}.fa-folder-heart:before{content:\"\\e189\"}.fa-circle-location-arrow:before,.fa-location-circle:before{content:\"\\f602\"}.fa-face-head-bandage:before{content:\"\\e37a\"}.fa-maki-roll:before,.fa-makizushi:before,.fa-sushi-roll:before{content:\"\\e48b\"}.fa-car-bump:before{content:\"\\f5e0\"}.fa-piggy-bank:before{content:\"\\f4d3\"}.fa-racquet:before{content:\"\\f45a\"}.fa-car-mirrors:before{content:\"\\e343\"}.fa-industry-alt:before,.fa-industry-windows:before{content:\"\\f3b3\"}.fa-bolt-auto:before{content:\"\\e0b6\"}.fa-battery-3:before,.fa-battery-half:before{content:\"\\f242\"}.fa-flux-capacitor:before{content:\"\\f8ba\"}.fa-mountain-city:before{content:\"\\e52e\"}.fa-coins:before{content:\"\\f51e\"}.fa-honey-pot:before{content:\"\\e418\"}.fa-olive:before{content:\"\\e316\"}.fa-khanda:before{content:\"\\f66d\"}.fa-filter-list:before{content:\"\\e17c\"}.fa-outlet:before{content:\"\\e01c\"}.fa-sliders-h:before,.fa-sliders:before{content:\"\\f1de\"}.fa-cauldron:before{content:\"\\f6bf\"}.fa-people:before{content:\"\\e216\"}.fa-folder-tree:before{content:\"\\f802\"}.fa-network-wired:before{content:\"\\f6ff\"}.fa-croissant:before{content:\"\\f7f6\"}.fa-map-pin:before{content:\"\\f276\"}.fa-hamsa:before{content:\"\\f665\"}.fa-cent-sign:before{content:\"\\e3f5\"}.fa-swords-laser:before{content:\"\\e03d\"}.fa-flask:before{content:\"\\f0c3\"}.fa-person-pregnant:before{content:\"\\e31e\"}.fa-square-u:before{content:\"\\e281\"}.fa-wand-sparkles:before{content:\"\\f72b\"}.fa-router:before{content:\"\\f8da\"}.fa-ellipsis-v:before,.fa-ellipsis-vertical:before{content:\"\\f142\"}.fa-sword-laser-alt:before{content:\"\\e03c\"}.fa-ticket:before{content:\"\\f145\"}.fa-power-off:before{content:\"\\f011\"}.fa-coin:before{content:\"\\f85c\"}.fa-laptop-slash:before{content:\"\\e1c7\"}.fa-long-arrow-alt-right:before,.fa-right-long:before{content:\"\\f30b\"}.fa-circle-b:before{content:\"\\e0fd\"}.fa-person-dress-simple:before{content:\"\\e21c\"}.fa-pipe-collar:before{content:\"\\e437\"}.fa-lights-holiday:before{content:\"\\f7b2\"}.fa-citrus:before{content:\"\\e2f4\"}.fa-flag-usa:before{content:\"\\f74d\"}.fa-laptop-file:before{content:\"\\e51d\"}.fa-teletype:before,.fa-tty:before{content:\"\\f1e4\"}.fa-chart-tree-map:before{content:\"\\e0ea\"}.fa-diagram-next:before{content:\"\\e476\"}.fa-person-rifle:before{content:\"\\e54e\"}.fa-clock-five-thirty:before{content:\"\\e34a\"}.fa-pipe-valve:before{content:\"\\e439\"}.fa-arrow-up-from-arc:before{content:\"\\e4b4\"}.fa-face-spiral-eyes:before{content:\"\\e485\"}.fa-compress-wide:before{content:\"\\f326\"}.fa-circle-phone-hangup:before,.fa-phone-circle-down:before{content:\"\\e11d\"}.fa-house-medical-circle-exclamation:before{content:\"\\e512\"}.fa-badminton:before{content:\"\\e33a\"}.fa-closed-captioning:before{content:\"\\f20a\"}.fa-hiking:before,.fa-person-hiking:before{content:\"\\f6ec\"}.fa-arrow-alt-from-left:before,.fa-right-from-line:before{content:\"\\f347\"}.fa-venus-double:before{content:\"\\f226\"}.fa-images:before{content:\"\\f302\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-shuttlecock:before{content:\"\\f45b\"}.fa-user-hair:before{content:\"\\e45a\"}.fa-eye-evil:before{content:\"\\f6db\"}.fa-people-pulling:before{content:\"\\e535\"}.fa-n:before{content:\"\\4e\"}.fa-garage:before{content:\"\\e009\"}.fa-cable-car:before,.fa-tram:before{content:\"\\f7da\"}.fa-shovel-snow:before{content:\"\\f7c3\"}.fa-cloud-rain:before{content:\"\\f73d\"}.fa-face-lying:before{content:\"\\e37e\"}.fa-sprinkler:before{content:\"\\e035\"}.fa-building-circle-xmark:before{content:\"\\e4d4\"}.fa-person-sledding:before,.fa-sledding:before{content:\"\\f7cb\"}.fa-game-console-handheld:before{content:\"\\f8bb\"}.fa-ship:before{content:\"\\f21a\"}.fa-clock-six-thirty:before{content:\"\\e353\"}.fa-battery-slash:before{content:\"\\f377\"}.fa-tugrik-sign:before{content:\"\\e2ba\"}.fa-arrows-down-to-line:before{content:\"\\e4b8\"}.fa-download:before{content:\"\\f019\"}.fa-inventory:before,.fa-shelves:before{content:\"\\f480\"}.fa-cloud-snow:before{content:\"\\f742\"}.fa-face-grin:before,.fa-grin:before{content:\"\\f580\"}.fa-backspace:before,.fa-delete-left:before{content:\"\\f55a\"}.fa-oven:before{content:\"\\e01d\"}.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before{content:\"\\f1fb\"}.fa-comment-captions:before{content:\"\\e146\"}.fa-comments-question:before{content:\"\\e14e\"}.fa-scribble:before{content:\"\\e23f\"}.fa-rotate-exclamation:before{content:\"\\e23c\"}.fa-file-circle-check:before{content:\"\\e5a0\"}.fa-glass:before{content:\"\\f804\"}.fa-loader:before{content:\"\\e1d4\"}.fa-forward:before{content:\"\\f04e\"}.fa-user-pilot:before{content:\"\\e2c0\"}.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f3ce\"}.fa-code-pull-request-closed:before{content:\"\\e3f9\"}.fa-face-meh:before,.fa-meh:before{content:\"\\f11a\"}.fa-align-center:before{content:\"\\f037\"}.fa-book-dead:before,.fa-book-skull:before{content:\"\\f6b7\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-face-dotted:before{content:\"\\e47f\"}.fa-face-worried:before{content:\"\\e3a3\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-heart-circle-exclamation:before{content:\"\\e4fe\"}.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before{content:\"\\f015\"}.fa-vector-circle:before{content:\"\\e2c6\"}.fa-car-circle-bolt:before{content:\"\\e342\"}.fa-calendar-week:before{content:\"\\f784\"}.fa-flying-disc:before{content:\"\\e3a9\"}.fa-laptop-medical:before{content:\"\\f812\"}.fa-square-down-right:before{content:\"\\e26c\"}.fa-b:before{content:\"\\42\"}.fa-seat-airline:before{content:\"\\e244\"}.fa-eclipse-alt:before,.fa-moon-over-sun:before{content:\"\\f74a\"}.fa-pipe:before{content:\"\\7c\"}.fa-file-medical:before{content:\"\\f477\"}.fa-potato:before{content:\"\\e440\"}.fa-dice-one:before{content:\"\\f525\"}.fa-circle-a:before{content:\"\\e0f7\"}.fa-helmet-battle:before{content:\"\\f6eb\"}.fa-butter:before{content:\"\\e3e4\"}.fa-blanket-fire:before{content:\"\\e3da\"}.fa-kiwi-bird:before{content:\"\\f535\"}.fa-castle:before{content:\"\\e0de\"}.fa-golf-club:before{content:\"\\f451\"}.fa-arrow-right-arrow-left:before,.fa-exchange:before{content:\"\\f0ec\"}.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before{content:\"\\f2f9\"}.fa-cutlery:before,.fa-utensils:before{content:\"\\f2e7\"}.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before{content:\"\\f161\"}.fa-balloons:before{content:\"\\e2e4\"}.fa-mill-sign:before{content:\"\\e1ed\"}.fa-bowl-rice:before{content:\"\\e2eb\"}.fa-timeline-arrow:before{content:\"\\e29d\"}.fa-skull:before{content:\"\\f54c\"}.fa-game-board-alt:before,.fa-game-board-simple:before{content:\"\\f868\"}.fa-circle-video:before,.fa-video-circle:before{content:\"\\e12b\"}.fa-chart-scatter-bubble:before{content:\"\\e0e9\"}.fa-house-turret:before{content:\"\\e1b4\"}.fa-banana:before{content:\"\\e2e5\"}.fa-hand-holding-skull:before{content:\"\\e1a4\"}.fa-people-dress:before{content:\"\\e217\"}.fa-couch-small:before,.fa-loveseat:before{content:\"\\f4cc\"}.fa-broadcast-tower:before,.fa-tower-broadcast:before{content:\"\\f519\"}.fa-truck-pickup:before{content:\"\\f63c\"}.fa-block-quote:before{content:\"\\e0b5\"}.fa-long-arrow-alt-up:before,.fa-up-long:before{content:\"\\f30c\"}.fa-stop:before{content:\"\\f04d\"}.fa-code-merge:before{content:\"\\f387\"}.fa-money-check-dollar-pen:before,.fa-money-check-edit-alt:before{content:\"\\f873\"}.fa-arrow-alt-from-bottom:before,.fa-up-from-line:before{content:\"\\f346\"}.fa-upload:before{content:\"\\f093\"}.fa-hurricane:before{content:\"\\f751\"}.fa-people-pants:before{content:\"\\e219\"}.fa-mound:before{content:\"\\e52d\"}.fa-windsock:before{content:\"\\f777\"}.fa-circle-half:before{content:\"\\e110\"}.fa-brake-warning:before{content:\"\\e0c7\"}.fa-toilet-portable:before{content:\"\\e583\"}.fa-compact-disc:before{content:\"\\f51f\"}.fa-file-arrow-down:before,.fa-file-download:before{content:\"\\f56d\"}.fa-sax-hot:before,.fa-saxophone-fire:before{content:\"\\f8db\"}.fa-camera-web-slash:before,.fa-webcam-slash:before{content:\"\\f833\"}.fa-folder-medical:before{content:\"\\e18c\"}.fa-folder-cog:before,.fa-folder-gear:before{content:\"\\e187\"}.fa-hand-wave:before{content:\"\\e1a7\"}.fa-arrow-up-arrow-down:before,.fa-sort-up-down:before{content:\"\\e099\"}.fa-caravan:before{content:\"\\f8ff\"}.fa-shield-cat:before{content:\"\\e572\"}.fa-comment-alt-slash:before,.fa-message-slash:before{content:\"\\f4a9\"}.fa-bolt:before,.fa-zap:before{content:\"\\f0e7\"}.fa-trash-can-check:before{content:\"\\e2a9\"}.fa-glass-water:before{content:\"\\e4f4\"}.fa-oil-well:before{content:\"\\e532\"}.fa-person-simple:before{content:\"\\e220\"}.fa-vault:before{content:\"\\e2c5\"}.fa-mars:before{content:\"\\f222\"}.fa-toilet:before{content:\"\\f7d8\"}.fa-plane-circle-xmark:before{content:\"\\e557\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before{content:\"\\f157\"}.fa-notes:before{content:\"\\e202\"}.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before{content:\"\\f158\"}.fa-trash-arrow-turn-left:before,.fa-trash-undo:before{content:\"\\f895\"}.fa-champagne-glass:before,.fa-glass-champagne:before{content:\"\\f79e\"}.fa-objects-align-center-horizontal:before{content:\"\\e3bc\"}.fa-sun:before{content:\"\\f185\"}.fa-trash-alt-slash:before,.fa-trash-can-slash:before{content:\"\\e2ad\"}.fa-screen-users:before,.fa-users-class:before{content:\"\\f63d\"}.fa-guitar:before{content:\"\\f7a6\"}.fa-arrow-square-left:before,.fa-square-arrow-left:before{content:\"\\f33a\"}.fa-square-8:before{content:\"\\e25d\"}.fa-face-smile-hearts:before{content:\"\\e390\"}.fa-brackets-square:before,.fa-brackets:before{content:\"\\f7e9\"}.fa-laptop-arrow-down:before{content:\"\\e1c6\"}.fa-hockey-stick-puck:before{content:\"\\e3ae\"}.fa-house-tree:before{content:\"\\e1b3\"}.fa-signal-2:before,.fa-signal-fair:before{content:\"\\f68d\"}.fa-face-laugh-wink:before,.fa-laugh-wink:before{content:\"\\f59c\"}.fa-circle-dollar:before,.fa-dollar-circle:before,.fa-usd-circle:before{content:\"\\f2e8\"}.fa-horse-head:before{content:\"\\f7ab\"}.fa-arrows-repeat:before,.fa-repeat-alt:before{content:\"\\f364\"}.fa-bore-hole:before{content:\"\\e4c3\"}.fa-industry:before{content:\"\\f275\"}.fa-image-polaroid:before{content:\"\\f8c4\"}.fa-wave-triangle:before{content:\"\\f89a\"}.fa-arrow-alt-circle-down:before,.fa-circle-down:before{content:\"\\f358\"}.fa-grill:before{content:\"\\e5a3\"}.fa-arrows-turn-to-dots:before{content:\"\\e4c1\"}.fa-analytics:before,.fa-chart-mixed:before{content:\"\\f643\"}.fa-florin-sign:before{content:\"\\e184\"}.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before{content:\"\\f884\"}.fa-less-than:before{content:\"\\3c\"}.fa-desktop-code:before,.fa-display-code:before{content:\"\\e165\"}.fa-face-drooling:before{content:\"\\e372\"}.fa-oil-temp:before,.fa-oil-temperature:before{content:\"\\f614\"}.fa-question-square:before,.fa-square-question:before{content:\"\\f2fd\"}.fa-air-conditioner:before{content:\"\\f8f4\"}.fa-angle-down:before{content:\"\\f107\"}.fa-mountains:before{content:\"\\f6fd\"}.fa-omega:before{content:\"\\f67a\"}.fa-car-tunnel:before{content:\"\\e4de\"}.fa-person-dolly-empty:before{content:\"\\f4d1\"}.fa-pan-food:before{content:\"\\e42b\"}.fa-head-side-cough:before{content:\"\\e061\"}.fa-grip-lines:before{content:\"\\f7a4\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-user-lock:before{content:\"\\f502\"}.fa-arrow-right-long:before,.fa-long-arrow-right:before{content:\"\\f178\"}.fa-tickets-airline:before{content:\"\\e29b\"}.fa-anchor-circle-xmark:before{content:\"\\e4ac\"}.fa-ellipsis-h:before,.fa-ellipsis:before{content:\"\\f141\"}.fa-nfc-slash:before{content:\"\\e1fc\"}.fa-chess-pawn:before{content:\"\\f443\"}.fa-first-aid:before,.fa-kit-medical:before{content:\"\\f479\"}.fa-grid-2-plus:before{content:\"\\e197\"}.fa-bells:before{content:\"\\f77f\"}.fa-person-through-window:before{content:\"\\e5a9\"}.fa-toolbox:before{content:\"\\f552\"}.fa-envelope-badge:before,.fa-envelope-dot:before{content:\"\\e16f\"}.fa-hands-holding-circle:before{content:\"\\e4fb\"}.fa-bug:before{content:\"\\f188\"}.fa-bowl-chopsticks:before{content:\"\\e2e9\"}.fa-credit-card-alt:before,.fa-credit-card:before{content:\"\\f09d\"}.fa-circle-s:before{content:\"\\e121\"}.fa-box-ballot:before{content:\"\\f735\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-hand-holding-hand:before{content:\"\\e4f7\"}.fa-user-tie-hair:before{content:\"\\e45f\"}.fa-podium-star:before{content:\"\\f758\"}.fa-business-front:before,.fa-party-back:before,.fa-trian-balbot:before,.fa-user-hair-mullet:before{content:\"\\e45c\"}.fa-microphone-stand:before{content:\"\\f8cb\"}.fa-book-open-reader:before,.fa-book-reader:before{content:\"\\f5da\"}.fa-family-dress:before{content:\"\\e301\"}.fa-circle-x:before{content:\"\\e12e\"}.fa-cabin:before{content:\"\\e46d\"}.fa-mountain-sun:before{content:\"\\e52f\"}.fa-chart-simple-horizontal:before{content:\"\\e474\"}.fa-arrows-left-right-to-line:before{content:\"\\e4ba\"}.fa-hand-back-point-left:before{content:\"\\e19f\"}.fa-comment-alt-dots:before,.fa-message-dots:before,.fa-messaging:before{content:\"\\f4a3\"}.fa-file-heart:before{content:\"\\e176\"}.fa-beer-foam:before,.fa-beer-mug:before{content:\"\\e0b3\"}.fa-dice-d20:before{content:\"\\f6cf\"}.fa-drone:before{content:\"\\f85f\"}.fa-truck-droplet:before{content:\"\\e58c\"}.fa-file-circle-xmark:before{content:\"\\e5a1\"}.fa-temperature-arrow-up:before,.fa-temperature-up:before{content:\"\\e040\"}.fa-medal:before{content:\"\\f5a2\"}.fa-bed:before{content:\"\\f236\"}.fa-book-copy:before{content:\"\\e0be\"}.fa-h-square:before,.fa-square-h:before{content:\"\\f0fd\"}.fa-square-c:before{content:\"\\e266\"}.fa-clock-two:before{content:\"\\e35a\"}.fa-square-ellipsis-vertical:before{content:\"\\e26f\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-bee:before{content:\"\\e0b2\"}.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-bell:before{content:\"\\f0f3\"}.fa-candy-bar:before,.fa-chocolate-bar:before{content:\"\\e3e8\"}.fa-xmark-large:before{content:\"\\e59b\"}.fa-pinata:before{content:\"\\e3c3\"}.fa-arrows-from-line:before{content:\"\\e0a4\"}.fa-superscript:before{content:\"\\f12b\"}.fa-bowl-spoon:before{content:\"\\e3e0\"}.fa-hexagon-check:before{content:\"\\e416\"}.fa-plug-circle-xmark:before{content:\"\\e560\"}.fa-star-of-life:before{content:\"\\f621\"}.fa-phone-slash:before{content:\"\\f3dd\"}.fa-traffic-light-stop:before{content:\"\\f63a\"}.fa-paint-roller:before{content:\"\\f5aa\"}.fa-accent-grave:before{content:\"\\60\"}.fa-hands-helping:before,.fa-handshake-angle:before{content:\"\\f4c4\"}.fa-circle-0:before{content:\"\\e0ed\"}.fa-dial-med-low:before{content:\"\\e160\"}.fa-location-dot:before,.fa-map-marker-alt:before{content:\"\\f3c5\"}.fa-crab:before{content:\"\\e3ff\"}.fa-box-full:before,.fa-box-open-full:before{content:\"\\f49c\"}.fa-file:before{content:\"\\f15b\"}.fa-greater-than:before{content:\"\\3e\"}.fa-quotes:before{content:\"\\e234\"}.fa-pretzel:before{content:\"\\e441\"}.fa-person-swimming:before,.fa-swimmer:before{content:\"\\f5c4\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-user-robot-xmarks:before{content:\"\\e4a7\"}.fa-comment-alt-quote:before,.fa-message-quote:before{content:\"\\e1e4\"}.fa-candy-corn:before{content:\"\\f6bd\"}.fa-folder-magnifying-glass:before,.fa-folder-search:before{content:\"\\e18b\"}.fa-notebook:before{content:\"\\e201\"}.fa-droplet:before,.fa-tint:before{content:\"\\f043\"}.fa-bullseye-pointer:before{content:\"\\f649\"}.fa-eraser:before{content:\"\\f12d\"}.fa-hexagon-image:before{content:\"\\e504\"}.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before{content:\"\\f57d\"}.fa-crate-apple:before{content:\"\\f6b1\"}.fa-apple-crate:before{content:\"\\f6b1\"}.fa-person-burst:before{content:\"\\e53b\"}.fa-game-board:before{content:\"\\f867\"}.fa-hat-chef:before{content:\"\\f86b\"}.fa-hand-back-point-right:before{content:\"\\e1a1\"}.fa-dove:before{content:\"\\f4ba\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-grid-4:before{content:\"\\e198\"}.fa-socks:before{content:\"\\f696\"}.fa-face-sunglasses:before{content:\"\\e398\"}.fa-inbox:before{content:\"\\f01c\"}.fa-square-0:before{content:\"\\e255\"}.fa-section:before{content:\"\\e447\"}.fa-box-up:before,.fa-square-this-way-up:before{content:\"\\f49f\"}.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before{content:\"\\f625\"}.fa-square-ampersand:before{content:\"\\e260\"}.fa-envelope-open-text:before{content:\"\\f658\"}.fa-lamp-desk:before{content:\"\\e014\"}.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before{content:\"\\f0f8\"}.fa-poll-people:before{content:\"\\f759\"}.fa-glass-whiskey-rocks:before,.fa-whiskey-glass-ice:before{content:\"\\f7a1\"}.fa-wine-bottle:before{content:\"\\f72f\"}.fa-chess-rook:before{content:\"\\f447\"}.fa-user-bounty-hunter:before{content:\"\\e2bf\"}.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before{content:\"\\f550\"}.fa-diagram-sankey:before{content:\"\\e158\"}.fa-cloud-hail-mixed:before{content:\"\\f73a\"}.fa-circle-up-left:before{content:\"\\e128\"}.fa-dharmachakra:before{content:\"\\f655\"}.fa-objects-align-left:before{content:\"\\e3be\"}.fa-oil-can-drip:before{content:\"\\e205\"}.fa-face-smiling-hands:before{content:\"\\e396\"}.fa-broccoli:before{content:\"\\e3e2\"}.fa-route-interstate:before{content:\"\\f61b\"}.fa-ear-muffs:before{content:\"\\f795\"}.fa-hotdog:before{content:\"\\f80f\"}.fa-transporter-empty:before{content:\"\\e046\"}.fa-blind:before,.fa-person-walking-with-cane:before{content:\"\\f29d\"}.fa-angle-90:before{content:\"\\e08d\"}.fa-rectangle-terminal:before{content:\"\\e236\"}.fa-kite:before{content:\"\\f6f4\"}.fa-drum:before{content:\"\\f569\"}.fa-scrubber:before{content:\"\\f2f8\"}.fa-ice-cream:before{content:\"\\f810\"}.fa-heart-circle-bolt:before{content:\"\\e4fc\"}.fa-fish-bones:before{content:\"\\e304\"}.fa-deer-rudolph:before{content:\"\\f78f\"}.fa-fax:before{content:\"\\f1ac\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-head-side-heart:before{content:\"\\e1aa\"}.fa-square-e:before{content:\"\\e26d\"}.fa-meter-fire:before{content:\"\\e1eb\"}.fa-cloud-hail:before{content:\"\\f739\"}.fa-check-to-slot:before,.fa-vote-yea:before{content:\"\\f772\"}.fa-money-from-bracket:before{content:\"\\e312\"}.fa-star-half:before{content:\"\\f089\"}.fa-car-bus:before{content:\"\\f85a\"}.fa-speaker:before{content:\"\\f8df\"}.fa-timer:before{content:\"\\e29e\"}.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before{content:\"\\f468\"}.fa-grill-hot:before{content:\"\\e5a5\"}.fa-ballot-check:before{content:\"\\f733\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-assistive-listening-systems:before,.fa-ear-listen:before{content:\"\\f2a2\"}.fa-file-minus:before{content:\"\\f318\"}.fa-tree-city:before{content:\"\\e587\"}.fa-play:before{content:\"\\f04b\"}.fa-font:before{content:\"\\f031\"}.fa-coffee-togo:before,.fa-cup-togo:before{content:\"\\f6c5\"}.fa-square-down-left:before{content:\"\\e26b\"}.fa-burger-lettuce:before{content:\"\\e3e3\"}.fa-rupiah-sign:before{content:\"\\e23d\"}.fa-magnifying-glass:before,.fa-search:before{content:\"\\f002\"}.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before{content:\"\\f45d\"}.fa-diagnoses:before,.fa-person-dots-from-line:before{content:\"\\f470\"}.fa-chevron-double-down:before,.fa-chevrons-down:before{content:\"\\f322\"}.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before{content:\"\\f82a\"}.fa-signal-3:before,.fa-signal-good:before{content:\"\\f68e\"}.fa-location-question:before,.fa-map-marker-question:before{content:\"\\f60b\"}.fa-floppy-disk-circle-xmark:before,.fa-floppy-disk-times:before,.fa-save-circle-xmark:before,.fa-save-times:before{content:\"\\e181\"}.fa-naira-sign:before{content:\"\\e1f6\"}.fa-peach:before{content:\"\\e20b\"}.fa-taxi-bus:before{content:\"\\e298\"}.fa-bracket-curly-left:before,.fa-bracket-curly:before{content:\"\\7b\"}.fa-lobster:before{content:\"\\e421\"}.fa-cart-flatbed-empty:before,.fa-dolly-flatbed-empty:before{content:\"\\f476\"}.fa-colon:before{content:\"\\3a\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-wand:before{content:\"\\f72a\"}.fa-walkie-talkie:before{content:\"\\f8ef\"}.fa-file-edit:before,.fa-file-pen:before{content:\"\\f31c\"}.fa-receipt:before{content:\"\\f543\"}.fa-table-picnic:before{content:\"\\e32d\"}.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before{content:\"\\f14b\"}.fa-circle-microphone-lines:before,.fa-microphone-circle-alt:before{content:\"\\e117\"}.fa-desktop-slash:before,.fa-display-slash:before{content:\"\\e2fa\"}.fa-suitcase-rolling:before{content:\"\\f5c1\"}.fa-person-circle-exclamation:before{content:\"\\e53f\"}.fa-transporter-2:before{content:\"\\e044\"}.fa-hand-receiving:before,.fa-hands-holding-diamond:before{content:\"\\f47c\"}.fa-money-bill-simple-wave:before{content:\"\\e1f2\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-bell-plus:before{content:\"\\f849\"}.fa-book-arrow-right:before{content:\"\\e0b9\"}.fa-hospitals:before{content:\"\\f80e\"}.fa-club:before{content:\"\\f327\"}.fa-skull-crossbones:before{content:\"\\f714\"}.fa-dewpoint:before,.fa-droplet-degree:before{content:\"\\f748\"}.fa-code-compare:before{content:\"\\e13a\"}.fa-list-dots:before,.fa-list-ul:before{content:\"\\f0ca\"}.fa-hand-holding-magic:before{content:\"\\f6e5\"}.fa-watermelon-slice:before{content:\"\\e337\"}.fa-circle-ellipsis:before{content:\"\\e10a\"}.fa-school-lock:before{content:\"\\e56f\"}.fa-tower-cell:before{content:\"\\e585\"}.fa-sd-cards:before{content:\"\\e240\"}.fa-down-long:before,.fa-long-arrow-alt-down:before{content:\"\\f309\"}.fa-envelopes:before{content:\"\\e170\"}.fa-phone-office:before{content:\"\\f67d\"}.fa-ranking-star:before{content:\"\\e561\"}.fa-chess-king:before{content:\"\\f43f\"}.fa-nfc-pen:before{content:\"\\e1fa\"}.fa-person-harassing:before{content:\"\\e549\"}.fa-hat-winter:before{content:\"\\f7a8\"}.fa-brazilian-real-sign:before{content:\"\\e46c\"}.fa-landmark-alt:before,.fa-landmark-dome:before{content:\"\\f752\"}.fa-bone-break:before{content:\"\\f5d8\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-down-from-dotted-line:before{content:\"\\e407\"}.fa-television:before,.fa-tv-alt:before,.fa-tv:before{content:\"\\f26c\"}.fa-border-left:before{content:\"\\f84f\"}.fa-circle-divide:before{content:\"\\e106\"}.fa-shrimp:before{content:\"\\e448\"}.fa-list-check:before,.fa-tasks:before{content:\"\\f0ae\"}.fa-diagram-subtask:before{content:\"\\e479\"}.fa-jug-detergent:before{content:\"\\e519\"}.fa-circle-user:before,.fa-user-circle:before{content:\"\\f2bd\"}.fa-square-y:before{content:\"\\e287\"}.fa-user-doctor-hair:before{content:\"\\e458\"}.fa-planet-ringed:before{content:\"\\e020\"}.fa-mushroom:before{content:\"\\e425\"}.fa-user-shield:before{content:\"\\f505\"}.fa-megaphone:before{content:\"\\f675\"}.fa-circle-exclamation-check:before{content:\"\\e10d\"}.fa-wind:before{content:\"\\f72e\"}.fa-box-dollar:before,.fa-box-usd:before{content:\"\\f4a0\"}.fa-car-burst:before,.fa-car-crash:before{content:\"\\f5e1\"}.fa-y:before{content:\"\\59\"}.fa-user-headset:before{content:\"\\f82d\"}.fa-arrows-retweet:before,.fa-retweet-alt:before{content:\"\\f361\"}.fa-person-snowboarding:before,.fa-snowboarding:before{content:\"\\f7ce\"}.fa-chevron-square-right:before,.fa-square-chevron-right:before{content:\"\\f32b\"}.fa-lacrosse-stick-ball:before{content:\"\\e3b6\"}.fa-shipping-fast:before,.fa-truck-fast:before{content:\"\\f48b\"}.fa-star-sharp:before{content:\"\\e28b\"}.fa-circle-1:before{content:\"\\e0ee\"}.fa-circle-star:before,.fa-star-circle:before{content:\"\\e123\"}.fa-fish:before{content:\"\\f578\"}.fa-cloud-fog:before,.fa-fog:before{content:\"\\f74e\"}.fa-waffle:before{content:\"\\e466\"}.fa-music-alt:before,.fa-music-note:before{content:\"\\f8cf\"}.fa-hexagon-exclamation:before{content:\"\\e417\"}.fa-cart-shopping-fast:before{content:\"\\e0dc\"}.fa-object-union:before{content:\"\\e49f\"}.fa-user-graduate:before{content:\"\\f501\"}.fa-starfighter:before{content:\"\\e037\"}.fa-adjust:before,.fa-circle-half-stroke:before{content:\"\\f042\"}.fa-arrow-right-long-to-line:before{content:\"\\e3d5\"}.fa-arrow-square-down:before,.fa-square-arrow-down:before{content:\"\\f339\"}.fa-clapperboard:before{content:\"\\e131\"}.fa-chevron-square-left:before,.fa-square-chevron-left:before{content:\"\\f32a\"}.fa-phone-intercom:before{content:\"\\e434\"}.fa-chain-horizontal:before,.fa-link-horizontal:before{content:\"\\e1cb\"}.fa-mango:before{content:\"\\e30f\"}.fa-music-alt-slash:before,.fa-music-note-slash:before{content:\"\\f8d0\"}.fa-circle-radiation:before,.fa-radiation-alt:before{content:\"\\f7ba\"}.fa-face-tongue-sweat:before{content:\"\\e39e\"}.fa-globe-stand:before{content:\"\\f5f6\"}.fa-baseball-ball:before,.fa-baseball:before{content:\"\\f433\"}.fa-circle-p:before{content:\"\\e11a\"}.fa-award-simple:before{content:\"\\e0ab\"}.fa-jet-fighter-up:before{content:\"\\e518\"}.fa-diagram-project:before,.fa-project-diagram:before{content:\"\\f542\"}.fa-pedestal:before{content:\"\\e20d\"}.fa-chart-pyramid:before{content:\"\\e0e6\"}.fa-sidebar:before{content:\"\\e24e\"}.fa-frosty-head:before,.fa-snowman-head:before{content:\"\\f79b\"}.fa-copy:before{content:\"\\f0c5\"}.fa-burger-glass:before{content:\"\\e0ce\"}.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before{content:\"\\f6a9\"}.fa-hand-sparkles:before{content:\"\\e05d\"}.fa-bars-filter:before{content:\"\\e0ad\"}.fa-paintbrush-pencil:before{content:\"\\e206\"}.fa-party-bell:before{content:\"\\e31a\"}.fa-user-vneck-hair:before{content:\"\\e462\"}.fa-jack-o-lantern:before{content:\"\\f30e\"}.fa-grip-horizontal:before,.fa-grip:before{content:\"\\f58d\"}.fa-share-from-square:before,.fa-share-square:before{content:\"\\f14d\"}.fa-keynote:before{content:\"\\f66c\"}.fa-gun:before{content:\"\\e19b\"}.fa-phone-square:before,.fa-square-phone:before{content:\"\\f098\"}.fa-add:before,.fa-plus:before{content:\"\\2b\"}.fa-expand:before{content:\"\\f065\"}.fa-computer:before{content:\"\\e4e5\"}.fa-fort:before{content:\"\\e486\"}.fa-cloud-check:before{content:\"\\e35c\"}.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:\"\\f00d\"}.fa-face-smirking:before{content:\"\\e397\"}.fa-arrows-up-down-left-right:before,.fa-arrows:before{content:\"\\f047\"}.fa-chalkboard-teacher:before,.fa-chalkboard-user:before{content:\"\\f51c\"}.fa-rhombus:before{content:\"\\e23b\"}.fa-claw-marks:before{content:\"\\f6c2\"}.fa-peso-sign:before{content:\"\\e222\"}.fa-face-smile-tongue:before{content:\"\\e394\"}.fa-cart-circle-xmark:before{content:\"\\e3f4\"}.fa-building-shield:before{content:\"\\e4d8\"}.fa-circle-phone-flip:before,.fa-phone-circle-alt:before{content:\"\\e11c\"}.fa-baby:before{content:\"\\f77c\"}.fa-users-line:before{content:\"\\e592\"}.fa-quote-left-alt:before,.fa-quote-left:before{content:\"\\f10d\"}.fa-tractor:before{content:\"\\f722\"}.fa-key-skeleton:before{content:\"\\f6f3\"}.fa-trash-arrow-up:before,.fa-trash-restore:before{content:\"\\f829\"}.fa-arrow-down-up-lock:before{content:\"\\e4b0\"}.fa-arrow-down-to-bracket:before{content:\"\\e094\"}.fa-lines-leaning:before{content:\"\\e51e\"}.fa-square-q:before{content:\"\\e27b\"}.fa-ruler-combined:before{content:\"\\f546\"}.fa-icons-alt:before,.fa-symbols:before{content:\"\\f86e\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-highlighter-line:before{content:\"\\e1af\"}.fa-bracket-left:before,.fa-bracket-square:before,.fa-bracket:before{content:\"\\5b\"}.fa-island-tree-palm:before,.fa-island-tropical:before{content:\"\\f811\"}.fa-arrow-from-left:before,.fa-arrow-right-from-line:before{content:\"\\f343\"}.fa-h2:before{content:\"\\f314\"}.fa-equals:before{content:\"\\3d\"}.fa-cake-slice:before,.fa-shortcake:before{content:\"\\e3e5\"}.fa-peanut:before{content:\"\\e430\"}.fa-wrench-simple:before{content:\"\\e2d1\"}.fa-blender:before{content:\"\\f517\"}.fa-teeth:before{content:\"\\f62e\"}.fa-tally-2:before{content:\"\\e295\"}.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-cars:before{content:\"\\f85b\"}.fa-axe-battle:before{content:\"\\f6b3\"}.fa-user-hair-long:before{content:\"\\e45b\"}.fa-map:before{content:\"\\f279\"}.fa-file-circle-info:before{content:\"\\e493\"}.fa-face-disappointed:before{content:\"\\e36f\"}.fa-lasso-sparkles:before{content:\"\\e1c9\"}.fa-clock-eleven:before{content:\"\\e347\"}.fa-rocket:before{content:\"\\f135\"}.fa-siren-on:before{content:\"\\e02e\"}.fa-clock-ten:before{content:\"\\e354\"}.fa-candle-holder:before{content:\"\\f6bc\"}.fa-video-arrow-down-left:before{content:\"\\e2c8\"}.fa-photo-film:before,.fa-photo-video:before{content:\"\\f87c\"}.fa-floppy-disk-circle-arrow-right:before,.fa-save-circle-arrow-right:before{content:\"\\e180\"}.fa-folder-minus:before{content:\"\\f65d\"}.fa-planet-moon:before{content:\"\\e01f\"}.fa-face-eyes-xmarks:before{content:\"\\e374\"}.fa-chart-scatter:before{content:\"\\f7ee\"}.fa-display-arrow-down:before{content:\"\\e164\"}.fa-store:before{content:\"\\f54e\"}.fa-arrow-trend-up:before{content:\"\\e098\"}.fa-plug-circle-minus:before{content:\"\\e55e\"}.fa-olive-branch:before{content:\"\\e317\"}.fa-angle:before{content:\"\\e08c\"}.fa-vacuum-robot:before{content:\"\\e04e\"}.fa-sign-hanging:before,.fa-sign:before{content:\"\\f4d9\"}.fa-square-divide:before{content:\"\\e26a\"}.fa-signal-stream-slash:before{content:\"\\e250\"}.fa-bezier-curve:before{content:\"\\f55b\"}.fa-eye-dropper-half:before{content:\"\\e173\"}.fa-store-lock:before{content:\"\\e4a6\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-cloud-bolt-sun:before,.fa-thunderstorm-sun:before{content:\"\\f76e\"}.fa-camera-slash:before{content:\"\\e0d9\"}.fa-comment-quote:before{content:\"\\e14c\"}.fa-tablet-android:before,.fa-tablet:before{content:\"\\f3fb\"}.fa-school-flag:before{content:\"\\e56e\"}.fa-message-code:before{content:\"\\e1df\"}.fa-glass-half-empty:before,.fa-glass-half-full:before,.fa-glass-half:before{content:\"\\e192\"}.fa-fill:before{content:\"\\f575\"}.fa-comment-alt-minus:before,.fa-message-minus:before{content:\"\\f4a7\"}.fa-angle-up:before{content:\"\\f106\"}.fa-drumstick-bite:before{content:\"\\f6d7\"}.fa-chain-horizontal-slash:before,.fa-link-horizontal-slash:before{content:\"\\e1cc\"}.fa-holly-berry:before{content:\"\\f7aa\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-bacteria:before{content:\"\\e059\"}.fa-clouds:before{content:\"\\f744\"}.fa-money-bill-simple:before{content:\"\\e1f1\"}.fa-hand-lizard:before{content:\"\\f258\"}.fa-table-pivot:before{content:\"\\e291\"}.fa-filter-slash:before{content:\"\\e17d\"}.fa-trash-can-arrow-turn-left:before,.fa-trash-can-undo:before,.fa-trash-undo-alt:before{content:\"\\f896\"}.fa-notdef:before{content:\"\\e1fe\"}.fa-disease:before{content:\"\\f7fa\"}.fa-person-to-door:before{content:\"\\e433\"}.fa-turntable:before{content:\"\\f8e4\"}.fa-briefcase-medical:before{content:\"\\f469\"}.fa-genderless:before{content:\"\\f22d\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-signal-1:before,.fa-signal-weak:before{content:\"\\f68c\"}.fa-clock-five:before{content:\"\\e349\"}.fa-retweet:before{content:\"\\f079\"}.fa-car-alt:before,.fa-car-rear:before{content:\"\\f5de\"}.fa-pump-soap:before{content:\"\\e06b\"}.fa-computer-classic:before{content:\"\\f8b1\"}.fa-frame:before{content:\"\\e495\"}.fa-video-slash:before{content:\"\\f4e2\"}.fa-battery-2:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-ellipsis-h-alt:before,.fa-ellipsis-stroke:before{content:\"\\f39b\"}.fa-radio:before{content:\"\\f8d7\"}.fa-baby-carriage:before,.fa-carriage-baby:before{content:\"\\f77d\"}.fa-face-expressionless:before{content:\"\\e373\"}.fa-down-to-dotted-line:before{content:\"\\e408\"}.fa-cloud-music:before{content:\"\\f8ae\"}.fa-traffic-light:before{content:\"\\f637\"}.fa-cloud-minus:before{content:\"\\e35d\"}.fa-thermometer:before{content:\"\\f491\"}.fa-shield-minus:before{content:\"\\e249\"}.fa-vr-cardboard:before{content:\"\\f729\"}.fa-car-tilt:before{content:\"\\f5e5\"}.fa-gauge-circle-minus:before{content:\"\\e497\"}.fa-brightness-low:before{content:\"\\e0ca\"}.fa-hand-middle-finger:before{content:\"\\f806\"}.fa-percent:before,.fa-percentage:before{content:\"\\25\"}.fa-truck-moving:before{content:\"\\f4df\"}.fa-glass-water-droplet:before{content:\"\\e4f5\"}.fa-conveyor-belt:before{content:\"\\f46e\"}.fa-location-check:before,.fa-map-marker-check:before{content:\"\\f606\"}.fa-coin-vertical:before{content:\"\\e3fd\"}.fa-display:before{content:\"\\e163\"}.fa-person-sign:before{content:\"\\f757\"}.fa-face-smile:before,.fa-smile:before{content:\"\\f118\"}.fa-phone-hangup:before{content:\"\\e225\"}.fa-signature-slash:before{content:\"\\e3cb\"}.fa-thumb-tack:before,.fa-thumbtack:before{content:\"\\f08d\"}.fa-wheat-slash:before{content:\"\\e339\"}.fa-trophy:before{content:\"\\f091\"}.fa-clouds-sun:before{content:\"\\f746\"}.fa-person-praying:before,.fa-pray:before{content:\"\\f683\"}.fa-hammer:before{content:\"\\f6e3\"}.fa-face-vomit:before{content:\"\\e3a0\"}.fa-speakers:before{content:\"\\f8e0\"}.fa-teletype-answer:before,.fa-tty-answer:before{content:\"\\e2b9\"}.fa-mug-tea-saucer:before{content:\"\\e1f5\"}.fa-diagram-lean-canvas:before{content:\"\\e156\"}.fa-alt:before{content:\"\\e08a\"}.fa-dial-med-high:before,.fa-dial:before{content:\"\\e15b\"}.fa-hand-peace:before{content:\"\\f25b\"}.fa-circle-trash:before,.fa-trash-circle:before{content:\"\\e126\"}.fa-rotate:before,.fa-sync-alt:before{content:\"\\f2f1\"}.fa-circle-quarters:before{content:\"\\e3f8\"}.fa-spinner:before{content:\"\\f110\"}.fa-tower-control:before{content:\"\\e2a2\"}.fa-arrow-up-triangle-square:before,.fa-sort-shapes-up:before{content:\"\\f88a\"}.fa-whale:before{content:\"\\f72c\"}.fa-robot:before{content:\"\\f544\"}.fa-peace:before{content:\"\\f67c\"}.fa-party-horn:before{content:\"\\e31b\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-sun-alt:before,.fa-sun-bright:before{content:\"\\e28f\"}.fa-warehouse:before{content:\"\\f494\"}.fa-lock-keyhole-open:before,.fa-lock-open-alt:before{content:\"\\f3c2\"}.fa-box-fragile:before,.fa-square-fragile:before,.fa-square-wine-glass-crack:before{content:\"\\f49b\"}.fa-arrow-up-right-dots:before{content:\"\\e4b7\"}.fa-square-n:before{content:\"\\e277\"}.fa-splotch:before{content:\"\\f5bc\"}.fa-face-grin-hearts:before,.fa-grin-hearts:before{content:\"\\f584\"}.fa-meter:before{content:\"\\e1e8\"}.fa-mandolin:before{content:\"\\f6f9\"}.fa-dice-four:before{content:\"\\f524\"}.fa-sim-card:before{content:\"\\f7c4\"}.fa-transgender-alt:before,.fa-transgender:before{content:\"\\f225\"}.fa-mercury:before{content:\"\\f223\"}.fa-up-from-bracket:before{content:\"\\e590\"}.fa-knife-kitchen:before{content:\"\\f6f5\"}.fa-border-right:before{content:\"\\f852\"}.fa-arrow-turn-down:before,.fa-level-down:before{content:\"\\f149\"}.fa-spade:before{content:\"\\f2f4\"}.fa-card-spade:before{content:\"\\e3ec\"}.fa-line-columns:before{content:\"\\f870\"}.fa-arrow-right-to-line:before,.fa-arrow-to-right:before{content:\"\\f340\"}.fa-person-falling-burst:before{content:\"\\e547\"}.fa-flag-pennant:before,.fa-pennant:before{content:\"\\f456\"}.fa-conveyor-belt-empty:before{content:\"\\e150\"}.fa-award:before{content:\"\\f559\"}.fa-ticket-alt:before,.fa-ticket-simple:before{content:\"\\f3ff\"}.fa-building:before{content:\"\\f1ad\"}.fa-angle-double-left:before,.fa-angles-left:before{content:\"\\f100\"}.fa-camcorder:before,.fa-video-handheld:before{content:\"\\f8a8\"}.fa-pancakes:before{content:\"\\e42d\"}.fa-album-circle-user:before{content:\"\\e48d\"}.fa-qrcode:before{content:\"\\f029\"}.fa-dice-d10:before{content:\"\\f6cd\"}.fa-fireplace:before{content:\"\\f79a\"}.fa-browser:before{content:\"\\f37e\"}.fa-pen-paintbrush:before,.fa-pencil-paintbrush:before{content:\"\\f618\"}.fa-fish-cooked:before{content:\"\\f7fe\"}.fa-chair-office:before{content:\"\\f6c1\"}.fa-nesting-dolls:before{content:\"\\e3ba\"}.fa-clock-rotate-left:before,.fa-history:before{content:\"\\f1da\"}.fa-trumpet:before{content:\"\\f8e3\"}.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before{content:\"\\f583\"}.fa-fire-smoke:before{content:\"\\f74b\"}.fa-phone-missed:before{content:\"\\e226\"}.fa-arrow-right-from-file:before,.fa-file-export:before{content:\"\\f56e\"}.fa-shield-blank:before,.fa-shield:before{content:\"\\f132\"}.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before{content:\"\\f885\"}.fa-arrows-repeat-1:before,.fa-repeat-1-alt:before{content:\"\\f366\"}.fa-gun-slash:before{content:\"\\e19c\"}.fa-avocado:before{content:\"\\e0aa\"}.fa-binary:before{content:\"\\e33b\"}.fa-glasses-alt:before,.fa-glasses-round:before{content:\"\\f5f5\"}.fa-phone-plus:before{content:\"\\f4d2\"}.fa-ditto:before{content:\"\\22\"}.fa-person-seat:before{content:\"\\e21e\"}.fa-house-medical:before{content:\"\\e3b2\"}.fa-golf-ball-tee:before,.fa-golf-ball:before{content:\"\\f450\"}.fa-chevron-circle-left:before,.fa-circle-chevron-left:before{content:\"\\f137\"}.fa-house-chimney-window:before{content:\"\\e00d\"}.fa-scythe:before{content:\"\\f710\"}.fa-pen-nib:before{content:\"\\f5ad\"}.fa-ban-parking:before,.fa-parking-circle-slash:before{content:\"\\f616\"}.fa-tent-arrow-turn-left:before{content:\"\\e580\"}.fa-face-diagonal-mouth:before{content:\"\\e47e\"}.fa-diagram-cells:before{content:\"\\e475\"}.fa-cricket-bat-ball:before,.fa-cricket:before{content:\"\\f449\"}.fa-tents:before{content:\"\\e582\"}.fa-magic:before,.fa-wand-magic:before{content:\"\\f0d0\"}.fa-dog:before{content:\"\\f6d3\"}.fa-pen-line:before{content:\"\\e212\"}.fa-atom-alt:before,.fa-atom-simple:before{content:\"\\f5d3\"}.fa-ampersand:before{content:\"\\26\"}.fa-carrot:before{content:\"\\f787\"}.fa-arrow-from-bottom:before,.fa-arrow-up-from-line:before{content:\"\\f342\"}.fa-moon:before{content:\"\\f186\"}.fa-pen-slash:before{content:\"\\e213\"}.fa-wine-glass-alt:before,.fa-wine-glass-empty:before{content:\"\\f5ce\"}.fa-square-star:before{content:\"\\e27f\"}.fa-cheese:before{content:\"\\f7ef\"}.fa-send-backward:before{content:\"\\f87f\"}.fa-yin-yang:before{content:\"\\f6ad\"}.fa-music:before{content:\"\\f001\"}.fa-compass-slash:before{content:\"\\f5e9\"}.fa-clock-one:before{content:\"\\e34e\"}.fa-file-music:before{content:\"\\f8b6\"}.fa-code-commit:before{content:\"\\f386\"}.fa-temperature-low:before{content:\"\\f76b\"}.fa-biking:before,.fa-person-biking:before{content:\"\\f84a\"}.fa-skeleton:before{content:\"\\f620\"}.fa-circle-g:before{content:\"\\e10f\"}.fa-circle-arrow-up-left:before{content:\"\\e0fb\"}.fa-coin-blank:before{content:\"\\e3fb\"}.fa-broom:before{content:\"\\f51a\"}.fa-vacuum:before{content:\"\\e04d\"}.fa-shield-heart:before{content:\"\\e574\"}.fa-card-heart:before{content:\"\\e3eb\"}.fa-lightbulb-cfl-on:before{content:\"\\e5a7\"}.fa-melon:before{content:\"\\e310\"}.fa-gopuram:before{content:\"\\f664\"}.fa-earth-oceania:before,.fa-globe-oceania:before{content:\"\\e47b\"}.fa-container-storage:before{content:\"\\f4b7\"}.fa-face-pouting:before{content:\"\\e387\"}.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before{content:\"\\f2d3\"}.fa-exploding-head:before,.fa-face-explode:before{content:\"\\e2fe\"}.fa-hashtag:before{content:\"\\23\"}.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before{content:\"\\f424\"}.fa-oil-can:before{content:\"\\f613\"}.fa-t:before{content:\"\\54\"}.fa-transformer-bolt:before{content:\"\\e2a4\"}.fa-hippo:before{content:\"\\f6ed\"}.fa-chart-column:before{content:\"\\e0e3\"}.fa-cassette-vhs:before,.fa-vhs:before{content:\"\\f8ec\"}.fa-infinity:before{content:\"\\f534\"}.fa-vial-circle-check:before{content:\"\\e596\"}.fa-chimney:before{content:\"\\f78b\"}.fa-object-intersect:before{content:\"\\e49d\"}.fa-person-arrow-down-to-line:before{content:\"\\e538\"}.fa-voicemail:before{content:\"\\f897\"}.fa-block-brick:before,.fa-wall-brick:before{content:\"\\e3db\"}.fa-fan:before{content:\"\\f863\"}.fa-bags-shopping:before{content:\"\\f847\"}.fa-paragraph-left:before,.fa-paragraph-rtl:before{content:\"\\f878\"}.fa-person-walking-luggage:before{content:\"\\e554\"}.fa-caravan-alt:before,.fa-caravan-simple:before{content:\"\\e000\"}.fa-turtle:before{content:\"\\f726\"}.fa-arrows-alt-v:before,.fa-up-down:before{content:\"\\f338\"}.fa-cloud-moon-rain:before{content:\"\\f73c\"}.fa-booth-curtain:before{content:\"\\f734\"}.fa-calendar:before{content:\"\\f133\"}.fa-box-heart:before{content:\"\\f49d\"}.fa-trailer:before{content:\"\\e041\"}.fa-user-doctor-message:before,.fa-user-md-chat:before{content:\"\\f82e\"}.fa-bahai:before,.fa-haykal:before{content:\"\\f666\"}.fa-amp-guitar:before{content:\"\\f8a1\"}.fa-sd-card:before{content:\"\\f7c2\"}.fa-volume-slash:before{content:\"\\f2e2\"}.fa-border-bottom:before{content:\"\\f84d\"}.fa-wifi-1:before,.fa-wifi-weak:before{content:\"\\f6aa\"}.fa-dragon:before{content:\"\\f6d5\"}.fa-shoe-prints:before{content:\"\\f54b\"}.fa-circle-plus:before,.fa-plus-circle:before{content:\"\\f055\"}.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before{content:\"\\f58b\"}.fa-hand-holding:before{content:\"\\f4bd\"}.fa-plug-circle-exclamation:before{content:\"\\e55d\"}.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before{content:\"\\f127\"}.fa-clone:before{content:\"\\f24d\"}.fa-person-walking-arrow-loop-left:before{content:\"\\e551\"}.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before{content:\"\\f882\"}.fa-fire-alt:before,.fa-fire-flame-curved:before{content:\"\\f7e4\"}.fa-tornado:before{content:\"\\f76f\"}.fa-file-circle-plus:before{content:\"\\e494\"}.fa-delete-right:before{content:\"\\e154\"}.fa-book-quran:before,.fa-quran:before{content:\"\\f687\"}.fa-circle-quarter:before{content:\"\\e11f\"}.fa-anchor:before{content:\"\\f13d\"}.fa-border-all:before{content:\"\\f84c\"}.fa-function:before{content:\"\\f661\"}.fa-angry:before,.fa-face-angry:before{content:\"\\f556\"}.fa-people-simple:before{content:\"\\e21b\"}.fa-cookie-bite:before{content:\"\\f564\"}.fa-arrow-trend-down:before{content:\"\\e097\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-face-monocle:before{content:\"\\e380\"}.fa-draw-polygon:before{content:\"\\f5ee\"}.fa-balance-scale:before,.fa-scale-balanced:before{content:\"\\f24e\"}.fa-calendar-lines:before,.fa-calendar-note:before{content:\"\\e0d5\"}.fa-arrow-down-big-small:before,.fa-sort-size-down:before{content:\"\\f88c\"}.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before{content:\"\\f62a\"}.fa-do-not-enter:before{content:\"\\f5ec\"}.fa-shower:before{content:\"\\f2cc\"}.fa-dice-d8:before{content:\"\\f6d2\"}.fa-desktop-alt:before,.fa-desktop:before{content:\"\\f390\"}.fa-m:before{content:\"\\4d\"}.fa-grip-dots-vertical:before{content:\"\\e411\"}.fa-face-viewfinder:before{content:\"\\e2ff\"}.fa-creemee:before,.fa-soft-serve:before{content:\"\\e400\"}.fa-h5:before{content:\"\\e412\"}.fa-hand-back-point-down:before{content:\"\\e19e\"}.fa-table-list:before,.fa-th-list:before{content:\"\\f00b\"}.fa-comment-sms:before,.fa-sms:before{content:\"\\f7cd\"}.fa-rectangle-landscape:before,.fa-rectangle:before{content:\"\\f2fa\"}.fa-clipboard-list-check:before{content:\"\\f737\"}.fa-turkey:before{content:\"\\f725\"}.fa-book:before{content:\"\\f02d\"}.fa-user-plus:before{content:\"\\f234\"}.fa-ice-skate:before{content:\"\\f7ac\"}.fa-check:before{content:\"\\f00c\"}.fa-battery-4:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-tomato:before{content:\"\\e330\"}.fa-sword-laser:before{content:\"\\e03b\"}.fa-house-circle-check:before{content:\"\\e509\"}.fa-buildings:before{content:\"\\e0cc\"}.fa-angle-left:before{content:\"\\f104\"}.fa-cart-flatbed-boxes:before,.fa-dolly-flatbed-alt:before{content:\"\\f475\"}.fa-diagram-successor:before{content:\"\\e47a\"}.fa-truck-arrow-right:before{content:\"\\e58b\"}.fa-square-w:before{content:\"\\e285\"}.fa-arrows-split-up-and-left:before{content:\"\\e4bc\"}.fa-lamp:before{content:\"\\f4ca\"}.fa-airplay:before{content:\"\\e089\"}.fa-fist-raised:before,.fa-hand-fist:before{content:\"\\f6de\"}.fa-shield-quartered:before{content:\"\\e575\"}.fa-slash-forward:before{content:\"\\2f\"}.fa-location-pen:before,.fa-map-marker-edit:before{content:\"\\f607\"}.fa-cloud-moon:before{content:\"\\f6c3\"}.fa-pot-food:before{content:\"\\e43f\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-person-falling:before{content:\"\\e546\"}.fa-image-portrait:before,.fa-portrait:before{content:\"\\f3e0\"}.fa-user-tag:before{content:\"\\f507\"}.fa-rug:before{content:\"\\e569\"}.fa-print-slash:before{content:\"\\f686\"}.fa-earth-europe:before,.fa-globe-europe:before{content:\"\\f7a2\"}.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before{content:\"\\f59d\"}.fa-hand-back-point-ribbon:before{content:\"\\e1a0\"}.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f410\"}.fa-tire-rugged:before{content:\"\\f634\"}.fa-lightbulb-dollar:before{content:\"\\f670\"}.fa-cowbell:before{content:\"\\f8b3\"}.fa-baht-sign:before{content:\"\\e0ac\"}.fa-corner:before{content:\"\\e3fe\"}.fa-chevron-double-right:before,.fa-chevrons-right:before{content:\"\\f324\"}.fa-book-open:before{content:\"\\f518\"}.fa-book-journal-whills:before,.fa-journal-whills:before{content:\"\\f66a\"}.fa-inhaler:before{content:\"\\f5f9\"}.fa-handcuffs:before{content:\"\\e4f8\"}.fa-snake:before{content:\"\\f716\"}.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before{content:\"\\f071\"}.fa-note-medical:before{content:\"\\e200\"}.fa-database:before{content:\"\\f1c0\"}.fa-down-left:before{content:\"\\e16a\"}.fa-arrow-turn-right:before,.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-face-thinking:before{content:\"\\e39b\"}.fa-turn-down-right:before{content:\"\\e455\"}.fa-bottle-droplet:before{content:\"\\e4c4\"}.fa-mask-face:before{content:\"\\e1d7\"}.fa-hill-rockslide:before{content:\"\\e508\"}.fa-scanner-keyboard:before{content:\"\\f489\"}.fa-circle-o:before{content:\"\\e119\"}.fa-grid-horizontal:before{content:\"\\e307\"}.fa-comment-alt-dollar:before,.fa-message-dollar:before{content:\"\\f650\"}.fa-exchange-alt:before,.fa-right-left:before{content:\"\\f362\"}.fa-columns-3:before{content:\"\\e361\"}.fa-paper-plane:before{content:\"\\f1d8\"}.fa-road-circle-exclamation:before{content:\"\\e565\"}.fa-dungeon:before{content:\"\\f6d9\"}.fa-hand-holding-box:before{content:\"\\f47b\"}.fa-input-text:before{content:\"\\e1bf\"}.fa-window-alt:before,.fa-window-flip:before{content:\"\\f40f\"}.fa-align-right:before{content:\"\\f038\"}.fa-scanner-gun:before,.fa-scanner:before{content:\"\\f488\"}.fa-tire:before{content:\"\\f631\"}.fa-engine:before{content:\"\\e16e\"}.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before{content:\"\\f53b\"}.fa-life-ring:before{content:\"\\f1cd\"}.fa-hands:before,.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-caret-circle-right:before,.fa-circle-caret-right:before{content:\"\\f330\"}.fa-wheat:before{content:\"\\f72d\"}.fa-file-spreadsheet:before{content:\"\\f65b\"}.fa-audio-description-slash:before{content:\"\\e0a8\"}.fa-calendar-day:before{content:\"\\f783\"}.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before{content:\"\\f5c5\"}.fa-arrows-up-down:before,.fa-arrows-v:before{content:\"\\f07d\"}.fa-chess-pawn-alt:before,.fa-chess-pawn-piece:before{content:\"\\f444\"}.fa-face-grimace:before,.fa-grimace:before{content:\"\\f57f\"}.fa-wheelchair-alt:before,.fa-wheelchair-move:before{content:\"\\e2ce\"}.fa-level-down-alt:before,.fa-turn-down:before{content:\"\\f3be\"}.fa-square-s:before{content:\"\\e27d\"}.fa-barcode-alt:before,.fa-rectangle-barcode:before{content:\"\\f463\"}.fa-person-walking-arrow-right:before{content:\"\\e552\"}.fa-envelope-square:before,.fa-square-envelope:before{content:\"\\f199\"}.fa-dice:before{content:\"\\f522\"}.fa-unicorn:before{content:\"\\f727\"}.fa-bowling-ball:before{content:\"\\f436\"}.fa-pompebled:before{content:\"\\e43d\"}.fa-brain:before{content:\"\\f5dc\"}.fa-watch-smart:before{content:\"\\e2cc\"}.fa-book-user:before{content:\"\\f7e7\"}.fa-sensor-cloud:before,.fa-sensor-smoke:before{content:\"\\e02c\"}.fa-clapperboard-play:before{content:\"\\e132\"}.fa-band-aid:before,.fa-bandage:before{content:\"\\f462\"}.fa-calendar-minus:before{content:\"\\f272\"}.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before{content:\"\\f057\"}.fa-circle-4:before{content:\"\\e0f1\"}.fa-gifts:before{content:\"\\f79c\"}.fa-album-collection:before{content:\"\\f8a0\"}.fa-hotel:before{content:\"\\f594\"}.fa-earth-asia:before,.fa-globe-asia:before{content:\"\\f57e\"}.fa-id-card-alt:before,.fa-id-card-clip:before{content:\"\\f47f\"}.fa-magnifying-glass-plus:before,.fa-search-plus:before{content:\"\\f00e\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-cloud-showers:before{content:\"\\f73f\"}.fa-user-clock:before{content:\"\\f4fd\"}.fa-onion:before{content:\"\\e427\"}.fa-clock-twelve-thirty:before{content:\"\\e359\"}.fa-arrow-down-to-dotted-line:before{content:\"\\e095\"}.fa-allergies:before,.fa-hand-dots:before{content:\"\\f461\"}.fa-file-invoice:before{content:\"\\f570\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-rectangle-wide:before{content:\"\\f2fc\"}.fa-comment-arrow-up:before{content:\"\\e144\"}.fa-garlic:before{content:\"\\e40e\"}.fa-coffee:before,.fa-mug-saucer:before{content:\"\\f0f4\"}.fa-brush:before{content:\"\\f55d\"}.fa-tree-decorated:before{content:\"\\f7dc\"}.fa-mask:before{content:\"\\f6fa\"}.fa-calendar-heart:before{content:\"\\e0d3\"}.fa-magnifying-glass-minus:before,.fa-search-minus:before{content:\"\\f010\"}.fa-flower:before{content:\"\\f7ff\"}.fa-ruler-vertical:before{content:\"\\f548\"}.fa-user-alt:before,.fa-user-large:before{content:\"\\f406\"}.fa-starship-freighter:before{content:\"\\e03a\"}.fa-train-tram:before{content:\"\\e5b4\"}.fa-bridge-suspension:before{content:\"\\e4cd\"}.fa-trash-check:before{content:\"\\e2af\"}.fa-user-nurse:before{content:\"\\f82f\"}.fa-boombox:before{content:\"\\f8a5\"}.fa-syringe:before{content:\"\\f48e\"}.fa-cloud-sun:before{content:\"\\f6c4\"}.fa-shield-exclamation:before{content:\"\\e247\"}.fa-stopwatch-20:before{content:\"\\e06f\"}.fa-square-full:before{content:\"\\f45c\"}.fa-grip-dots:before{content:\"\\e410\"}.fa-comment-exclamation:before{content:\"\\f4af\"}.fa-pen-swirl:before{content:\"\\e214\"}.fa-falafel:before{content:\"\\e40a\"}.fa-circle-2:before{content:\"\\e0ef\"}.fa-magnet:before{content:\"\\f076\"}.fa-jar:before{content:\"\\e516\"}.fa-gramophone:before{content:\"\\f8bd\"}.fa-dice-d12:before{content:\"\\f6ce\"}.fa-note-sticky:before,.fa-sticky-note:before{content:\"\\f249\"}.fa-arrow-alt-down:before,.fa-down:before{content:\"\\f354\"}.fa-100:before,.fa-hundred-points:before{content:\"\\e41c\"}.fa-paperclip-vertical:before{content:\"\\e3c2\"}.fa-wind-circle-exclamation:before,.fa-wind-warning:before{content:\"\\f776\"}.fa-location-pin-slash:before,.fa-map-marker-slash:before{content:\"\\f60c\"}.fa-face-sad-sweat:before{content:\"\\e38a\"}.fa-bug-slash:before{content:\"\\e490\"}.fa-cupcake:before{content:\"\\e402\"}.fa-light-switch-off:before{content:\"\\e018\"}.fa-toggle-large-off:before{content:\"\\e5b0\"}.fa-pen-fancy-slash:before{content:\"\\e210\"}.fa-truck-container:before{content:\"\\f4dc\"}.fa-boot:before{content:\"\\f782\"}.fa-arrow-up-from-water-pump:before{content:\"\\e4b6\"}.fa-file-check:before{content:\"\\f316\"}.fa-bone:before{content:\"\\f5d7\"}.fa-cards-blank:before{content:\"\\e4df\"}.fa-circle-3:before{content:\"\\e0f0\"}.fa-bench-tree:before{content:\"\\e2e7\"}.fa-keyboard-brightness-low:before{content:\"\\e1c1\"}.fa-ski-boot-ski:before{content:\"\\e3cd\"}.fa-brain-circuit:before{content:\"\\e0c6\"}.fa-user-injured:before{content:\"\\f728\"}.fa-block-brick-fire:before,.fa-firewall:before{content:\"\\e3dc\"}.fa-face-sad-tear:before,.fa-sad-tear:before{content:\"\\f5b4\"}.fa-plane:before{content:\"\\f072\"}.fa-tent-arrows-down:before{content:\"\\e581\"}.fa-exclamation:before{content:\"\\21\"}.fa-arrows-spin:before{content:\"\\e4bb\"}.fa-face-smile-relaxed:before{content:\"\\e392\"}.fa-comment-times:before,.fa-comment-xmark:before{content:\"\\f4b5\"}.fa-print:before{content:\"\\f02f\"}.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before{content:\"\\e2bb\"}.fa-face-nose-steam:before{content:\"\\e382\"}.fa-circle-waveform-lines:before,.fa-waveform-circle:before{content:\"\\e12d\"}.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before{content:\"\\24\"}.fa-ferris-wheel:before{content:\"\\e174\"}.fa-computer-speaker:before{content:\"\\f8b2\"}.fa-skull-cow:before{content:\"\\f8de\"}.fa-x:before{content:\"\\58\"}.fa-magnifying-glass-dollar:before,.fa-search-dollar:before{content:\"\\f688\"}.fa-users-cog:before,.fa-users-gear:before{content:\"\\f509\"}.fa-person-military-pointing:before{content:\"\\e54a\"}.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before{content:\"\\f19c\"}.fa-circle-t:before{content:\"\\e124\"}.fa-sack:before{content:\"\\f81c\"}.fa-grid-2:before{content:\"\\e196\"}.fa-camera-cctv:before,.fa-cctv:before{content:\"\\f8ac\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-trowel:before{content:\"\\e589\"}.fa-horizontal-rule:before{content:\"\\f86c\"}.fa-bed-alt:before,.fa-bed-front:before{content:\"\\f8f7\"}.fa-d:before{content:\"\\44\"}.fa-stapler:before{content:\"\\e5af\"}.fa-masks-theater:before,.fa-theater-masks:before{content:\"\\f630\"}.fa-kip-sign:before{content:\"\\e1c4\"}.fa-face-woozy:before{content:\"\\e3a2\"}.fa-cloud-question:before{content:\"\\e492\"}.fa-pineapple:before{content:\"\\e31f\"}.fa-hand-point-left:before{content:\"\\f0a5\"}.fa-gallery-thumbnails:before{content:\"\\e3aa\"}.fa-circle-j:before{content:\"\\e112\"}.fa-eyes:before{content:\"\\e367\"}.fa-handshake-alt:before,.fa-handshake-simple:before{content:\"\\f4c6\"}.fa-file-caret-up:before,.fa-page-caret-up:before{content:\"\\e42a\"}.fa-fighter-jet:before,.fa-jet-fighter:before{content:\"\\f0fb\"}.fa-comet:before{content:\"\\e003\"}.fa-share-alt-square:before,.fa-square-share-nodes:before{content:\"\\f1e1\"}.fa-shield-keyhole:before{content:\"\\e248\"}.fa-barcode:before{content:\"\\f02a\"}.fa-plus-minus:before{content:\"\\e43c\"}.fa-sliders-v-square:before,.fa-square-sliders-vertical:before{content:\"\\f3f2\"}.fa-video-camera:before,.fa-video:before{content:\"\\f03d\"}.fa-comment-middle-alt:before,.fa-message-middle:before{content:\"\\e1e1\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-hand-holding-medical:before{content:\"\\e05c\"}.fa-person-circle-check:before{content:\"\\e53e\"}.fa-square-z:before{content:\"\\e288\"}.fa-comment-alt-text:before,.fa-message-text:before{content:\"\\e1e6\"}.fa-level-up-alt:before,.fa-turn-up:before{content:\"\\f3bf\"}.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}";

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
    return (index$1.h(index$1.Host, null, index$1.h("i", { id: "icon", class: this.name, style: { fontSize: this.getSize(), color: this.color, fontWeight: this.fontWeight } })));
  }
};
GcIcon.style = fontawesomeMinCss;

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
