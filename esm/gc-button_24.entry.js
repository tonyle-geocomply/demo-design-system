import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-f3c3d85b.js';

const gcButtonCss = "button{padding:0 15px;height:41px;border-radius:var(--border-radius-btn);box-shadow:none;border:0px;font-size:var(--gc-font-size);cursor:pointer}button.disabled{opacity:0.5;cursor:not-allowed}button.gc__btn--primary{background:var( --gc-color-primary);color:var(--gc-color-contrast-white)}button.gc__btn--danger{background:var(--gc-color-danger);color:var(--gc-color-contrast-white)}button.gc__btn--secondary{background:#E8ECF0;color:#35383D}button.gc__btn--closed{background:var(--gc-color-third-grey);color:var(--gc-color-contrast-white)}button>.gc__button-text{line-height:41px}button>.gc__button-icon{vertical-align:middle;margin-right:8px}";

const GcButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcClick = createEvent(this, "gc:click", 7);
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
    return (h("button", { style: { height: this.height, padding: this.paddingText ? `0 ${this.paddingText}` : undefined }, onClick: e => this.onClick(e), class: this.getClassName(), id: this.gcId }, this.icon && (h("span", { class: "gc__button-icon" }, h("gc-icon", { color: this.getColorIcon(), name: this.icon, size: "1rem" }))), h("span", { style: { lineHeight: this.height }, class: "gc__button-text" }, h("slot", null))));
  }
  render() {
    if (this.href) {
      return (h("a", { href: this.href, target: this.target }, this.renderButton()));
    }
    return this.renderButton();
  }
};
GcButton.style = gcButtonCss;

const gcCheckboxCss = ".sc-gc-checkbox-h{display:block}input.sc-gc-checkbox{padding:0;height:initial;width:initial;margin-bottom:0;display:none;cursor:pointer}label.gc__label.sc-gc-checkbox{position:relative;cursor:pointer;box-sizing:inherit !important;font-weight:normal !important;color:var(--gc-color-text-grey);font-size:13px;text-transform:initial;margin-bottom:0;display:initial}label.gc__label.sc-gc-checkbox:before{content:'';appearance:none;border:1px solid var(--gc-color-second-grey);box-shadow:0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);padding:7px;display:inline-block;position:relative;vertical-align:text-bottom;cursor:pointer;margin-right:5px;border-radius:3px}input.sc-gc-checkbox:checked+label.gc__label.sc-gc-checkbox:before{background-color:var(--gc-color-primary);border:0;padding:8px}input.sc-gc-checkbox:checked+label.gc__label.sc-gc-checkbox:after{content:'';display:block;position:absolute;top:1px;left:5px;width:4px;height:7px;border:1px solid var(--gc-color-contrast-white);border-width:0 2px 2px 0;transform:rotate(40deg);box-sizing:initial}input.sc-gc-checkbox:disabled+label.gc__label.sc-gc-checkbox:before{border:1px solid var(--gc-color-second-grey);opacity:0.6;cursor:not-allowed}input.sc-gc-checkbox:disabled+label.gc__label.sc-gc-checkbox{cursor:not-allowed;text-decoration:line-through;color:var(--gc-color-disabled)}input.sc-gc-checkbox:disabled:checked+label.gc__label.sc-gc-checkbox:before{border:0;opacity:0.6;cursor:not-allowed}input.sc-gc-checkbox:disabled:checked+label.gc__label.sc-gc-checkbox{cursor:not-allowed;text-decoration:none}";

const GcCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcChange = createEvent(this, "gc:change", 7);
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
    return (h(Host, null, h("input", { class: this.class, id: this.gcName, type: "checkbox", onInput: this.onInput, checked: this.checked, disabled: this.disabled }), h("label", { class: "gc__label", htmlFor: this.gcName }, this.label)));
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

function extend(dst, src) {
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
  extend: extend,
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
    registerInstance(this, hostRef);
    this.gcDrop = createEvent(this, "gc:drop", 7);
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
    return (h(Host, null, h("div", { class: this.classContainer, ref: el => (this.container = el) }, h("slot", null))));
  }
};

const gcDraggableItemCss = ".sc-gc-draggable-item-h{display:block;background:white}.sc-gc-draggable-item-h:hover{cursor:pointer}.ghost.sc-gc-draggable-item-h{background:var(--gc-color-secondary)}";

const GcDraggableItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
GcDraggableItem.style = gcDraggableItemCss;

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
  let callbacks = [];
  const elem = document.documentElement;
  let lastClassName = elem.getAttribute('data-theme');
  window.setInterval(function () {
    let className = elem.getAttribute('data-theme');
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
function isEventTriggerByElement(event, element) {
  const path = event.composedPath();
  for (const elm of path) {
    if (elm === element)
      return true;
  }
  return false;
}
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

const gcDropdownCss = ":host{display:inline-block;height:var(--dropdown-height, auto)}.dropdown{position:relative;height:var(--dropdown-height, auto)}.dropdown .dropdown-button{border:none;background:none;padding:0;margin:0;height:100%;width:100%}.dropdown .dropdown-button .slot-container{height:100%}.dropdown .gc__dropdown-content{z-index:var(--gc-z-index-gc__dropdown-content);position:absolute;width:max-content;transform:scale(0);transition:transform 0.1s ease-out 0s}.dropdown.is-open .gc__dropdown-content{transform:scale(1)}.dropdown.bottom-right .gc__dropdown-content{top:calc(100% + 0.5rem);left:0;transform-origin:top}.dropdown.bottom-left .gc__dropdown-content{top:calc(100% + 0.5rem);right:0;transform-origin:top}.dropdown.top-right .gc__dropdown-content{bottom:calc(100% + 0.5rem);left:0;transform-origin:bottom}.dropdown.top-left .gc__dropdown-content{bottom:calc(100% + 0.5rem);right:0;transform-origin:bottom}.dropdown.center .gc__dropdown-content{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none}.dropdown .items{min-width:12rem}:host([has-focus]) .dropdown{outline:none}div.gc__dropdown-content{border:1px solid var(--gc-color-second-grey);border-radius:5px;background-color:var(--gc-color-contrast-white)}.bottom-right div.gc__dropdown-content::before{content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;left:15%;margin-left:-10px;border-top:0px;border-bottom:8px solid var(--gc-color-second-grey)}.bottom-right div.gc__dropdown-content::after{border-bottom:8px solid white;margin-top:2px;z-index:1;content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;left:15%;margin-left:-10px}.bottom-left div.gc__dropdown-content::before{content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;right:15%;margin-left:-10px;border-top:0px;border-bottom:8px solid var(--gc-color-second-grey)}.bottom-left div.gc__dropdown-content::after{border-bottom:8px solid white;margin-top:2px;z-index:1;content:\"\";position:absolute;border-left:8px solid transparent;border-right:8px solid transparent;top:-9px;right:15%;margin-left:-10px}.bottom-right div.gc__dropdown-content-small::before{left:10px}.bottom-right div.gc__dropdown-content-small::after{left:10px}.bottom-left div.gc__dropdown-content-small::before{right:10px}.bottom-left div.gc__dropdown-content-small::after{right:10px}";

const GcDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    this.positions = 'bottom-right,top-right,bottom-left,top-left';
    this.items = null;
    this.trigger = 'click';
    this.hasFocus = false;
    this.openList = () => {
      if (!this.disabled && !this.isOpen) {
        this.isOpen = true;
        setTimeout(() => {
          const dropdownContent = this.elm.querySelector('[slot="gc__dropdown-content"]');
          this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
          this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
          this.fixPosition();
        }, 100);
      }
    };
    this.toggleList = () => {
      if (this.isOpen)
        this.closeList();
      else
        this.openList();
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.keyDownHandler = evt => {
      const $menuElm = this.getMenuElement();
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          evt.preventDefault();
          $menuElm === null || $menuElm === void 0 ? void 0 : $menuElm.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          $menuElm === null || $menuElm === void 0 ? void 0 : $menuElm.setFocus(); // focus on previous item
        }
      }
    };
    this.mouseEnterHandler = () => {
      if (this.trigger === 'hover') {
        this.isOpen = true;
      }
    };
    this.mouseLeaveHandler = () => {
      if (this.trigger === 'hover') {
        this.isOpen = false;
      }
    };
  }
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) {
        return;
      }
    }
    this.isOpen = false;
  }
  async setFocus(elm) {
    const firstChild = elm.children[0] || this.elm.children[0];
    if (firstChild.setFocus) {
      firstChild.setFocus();
    }
  }
  listenMenuItemClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }
  listenClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }
  listenKeyDown(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      if (evt.key === 'Escape') {
        this.closeList();
      }
    }
  }
  closeList() {
    if (!this.disabled && this.isOpen) {
      this.isOpen = false;
      setTimeout(() => {
        this.setFocus(this.elm);
      }, 100);
    }
  }
  componentWillLoad() {
    if (this.positions) {
      this.position = this.positions.split(',')[0];
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
  getMenuElement() {
    return this.elm.querySelector('gc-menu');
  }
  renderItems() {
    if (this.items)
      return (h("gc-menu", { class: "items" }, this.items.map(item => {
        return (h("gc-menu-item", { value: item.value, tabindex: this.isOpen ? '0' : '-1' }, item.icon && h("gc-icon", { name: item.icon, slot: "start", size: "sm" }), item.label, item.hint && h("span", { slot: "end" }, item.hint)));
      })));
  }
  componentDidLoad() {
    if (this.containerElm.getBoundingClientRect().width < 100) {
      this.dropdownElm.classList.add("gc__dropdown-content-small");
    }
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, "is-open": this.isOpen }, h("div", { class: {
        'dropdown': true,
        [this.position]: true,
        'is-open': this.isOpen,
      }, onMouseEnter: this.mouseEnterHandler, onMouseLeave: this.mouseLeaveHandler }, h("button", { class: "dropdown-button", onKeyDown: this.keyDownHandler, tabindex: "-1", onBlur: this.blurHandler, onFocus: this.focusHandler, disabled: this.disabled, onClick: () => {
        this.toggleList();
      } }, h("div", { class: "slot-container", ref: elm => (this.containerElm = elm) }, h("slot", null))), h("div", { class: "gc__dropdown-content", ref: elm => (this.dropdownElm = elm) }, this.renderItems(), h("slot", { name: "gc__dropdown-content" })))));
  }
  get elm() { return getElement(this); }
};
GcDropdown.style = gcDropdownCss;

const gcFormFieldCss = "gc-label.sc-gc-form-field{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";

const GcFormField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcFieldChange = createEvent(this, "gc:field-change", 7);
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
  }
  handleChange(evt) {
    this.value = evt.detail.value;
    this.gcFieldChange.emit({ value: evt.detail.value });
  }
  render() {
    const input = this.type === 'select' ? (h("gc-select", { search: this.search, items: this.items, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e) })) : (h("gc-input", { "prefix-icon": this.prefixIcon, "gc-id": this.gcId, "gc-name": this.gcName, value: this.value, disabled: this.disabled, type: this.type, placeholder: this.placeholder, "onGc:change": e => this.handleChange(e) }));
    return (h(Host, null, h("gc-label", { "gc-for": this.gcName }, this.label), input));
  }
};
GcFormField.style = gcFormFieldCss;

const typographyCss$3 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcH1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h1 ${this.class}` : 'gc-h1';
  }
  render() {
    return (h("h1", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
};
GcH1.style = typographyCss$3;

const typographyCss$2 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcH2 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h2 ${this.class}` : 'gc-h2';
  }
  render() {
    return (h("h2", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
};
GcH2.style = typographyCss$2;

const typographyCss$1 = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcH3 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-h3 ${this.class}` : 'gc-h3';
  }
  render() {
    return (h("h3", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
};
GcH3.style = typographyCss$1;

const allMinCss = "/*!\n * Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n * Copyright 2022 Fonticons, Inc.\n */.fa{font-family:var(--fa-style-family,\"Font Awesome 6 Pro\");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-duotone,.fa-light,.fa-regular,.fa-sharp,.fa-sharp-solid,.fa-solid,.fa-thin,.fab,.fad,.fal,.far,.fas,.fass,.fat{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-light,.fa-regular,.fa-solid,.fa-thin,.fal,.far,.fas,.fat{font-family:\"Font Awesome 6 Pro\"}.fa-brands,.fab{font-family:\"Font Awesome 6 Brands\"}.fa-classic.fa-duotone,.fa-duotone,.fad{font-family:\"Font Awesome 6 Duotone\"}.fa-sharp,.fass{font-family:\"Font Awesome 6 Sharp\";font-weight:900}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index,auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-0:before{content:\"\\30\"}.fa-1:before{content:\"\\31\"}.fa-2:before{content:\"\\32\"}.fa-3:before{content:\"\\33\"}.fa-4:before{content:\"\\34\"}.fa-5:before{content:\"\\35\"}.fa-6:before{content:\"\\36\"}.fa-7:before{content:\"\\37\"}.fa-8:before{content:\"\\38\"}.fa-9:before{content:\"\\39\"}.fa-fill-drip:before{content:\"\\f576\"}.fa-arrows-to-circle:before{content:\"\\e4bd\"}.fa-chevron-circle-right:before,.fa-circle-chevron-right:before{content:\"\\f138\"}.fa-wagon-covered:before{content:\"\\f8ee\"}.fa-line-height:before{content:\"\\f871\"}.fa-bagel:before{content:\"\\e3d7\"}.fa-transporter-7:before{content:\"\\e2a8\"}.fa-at:before{content:\"\\40\"}.fa-rectangles-mixed:before{content:\"\\e323\"}.fa-phone-arrow-up-right:before,.fa-phone-arrow-up:before,.fa-phone-outgoing:before{content:\"\\e224\"}.fa-trash-alt:before,.fa-trash-can:before{content:\"\\f2ed\"}.fa-circle-l:before{content:\"\\e114\"}.fa-head-side-goggles:before,.fa-head-vr:before{content:\"\\f6ea\"}.fa-text-height:before{content:\"\\f034\"}.fa-user-times:before,.fa-user-xmark:before{content:\"\\f235\"}.fa-face-hand-yawn:before{content:\"\\e379\"}.fa-gauge-simple-min:before,.fa-tachometer-slowest:before{content:\"\\f62d\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-coffin:before{content:\"\\f6c6\"}.fa-comment-alt:before,.fa-message:before{content:\"\\f27a\"}.fa-bowl-salad:before,.fa-salad:before{content:\"\\f81e\"}.fa-info:before{content:\"\\f129\"}.fa-robot-astromech:before{content:\"\\e2d2\"}.fa-ring-diamond:before{content:\"\\e5ab\"}.fa-fondue-pot:before{content:\"\\e40d\"}.fa-theta:before{content:\"\\f69e\"}.fa-face-hand-peeking:before{content:\"\\e481\"}.fa-square-user:before{content:\"\\e283\"}.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before{content:\"\\f422\"}.fa-explosion:before{content:\"\\e4e9\"}.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before{content:\"\\f15c\"}.fa-wave-square:before{content:\"\\f83e\"}.fa-ring:before{content:\"\\f70b\"}.fa-building-un:before{content:\"\\e4d9\"}.fa-dice-three:before{content:\"\\f527\"}.fa-tire-pressure-warning:before{content:\"\\f633\"}.fa-wifi-2:before,.fa-wifi-fair:before{content:\"\\f6ab\"}.fa-calendar-alt:before,.fa-calendar-days:before{content:\"\\f073\"}.fa-mp3-player:before{content:\"\\f8ce\"}.fa-anchor-circle-check:before{content:\"\\e4aa\"}.fa-tally-4:before{content:\"\\e297\"}.fa-rectangle-history:before{content:\"\\e4a2\"}.fa-building-circle-arrow-right:before{content:\"\\e4d1\"}.fa-volleyball-ball:before,.fa-volleyball:before{content:\"\\f45f\"}.fa-sun-haze:before{content:\"\\f765\"}.fa-text-size:before{content:\"\\f894\"}.fa-ufo:before{content:\"\\e047\"}.fa-fork:before,.fa-utensil-fork:before{content:\"\\f2e3\"}.fa-arrows-up-to-line:before{content:\"\\e4c2\"}.fa-mobile-signal:before{content:\"\\e1ef\"}.fa-barcode-scan:before{content:\"\\f465\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-folder-arrow-down:before,.fa-folder-download:before{content:\"\\e053\"}.fa-circle-minus:before,.fa-minus-circle:before{content:\"\\f056\"}.fa-face-icicles:before{content:\"\\e37c\"}.fa-shovel:before{content:\"\\f713\"}.fa-door-open:before{content:\"\\f52b\"}.fa-films:before{content:\"\\e17a\"}.fa-right-from-bracket:before,.fa-sign-out-alt:before{content:\"\\f2f5\"}.fa-face-glasses:before{content:\"\\e377\"}.fa-nfc:before{content:\"\\e1f7\"}.fa-atom:before{content:\"\\f5d2\"}.fa-soap:before{content:\"\\e06e\"}.fa-heart-music-camera-bolt:before,.fa-icons:before{content:\"\\f86d\"}.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before{content:\"\\f539\"}.fa-closed-captioning-slash:before{content:\"\\e135\"}.fa-calculator-alt:before,.fa-calculator-simple:before{content:\"\\f64c\"}.fa-bridge-circle-check:before{content:\"\\e4c9\"}.fa-sliders-up:before,.fa-sliders-v:before{content:\"\\f3f1\"}.fa-location-minus:before,.fa-map-marker-minus:before{content:\"\\f609\"}.fa-pump-medical:before{content:\"\\e06a\"}.fa-fingerprint:before{content:\"\\f577\"}.fa-ski-boot:before{content:\"\\e3cc\"}.fa-rectangle-sd:before,.fa-standard-definition:before{content:\"\\e28a\"}.fa-h1:before{content:\"\\f313\"}.fa-hand-point-right:before{content:\"\\f0a4\"}.fa-magnifying-glass-location:before,.fa-search-location:before{content:\"\\f689\"}.fa-message-bot:before{content:\"\\e3b8\"}.fa-forward-step:before,.fa-step-forward:before{content:\"\\f051\"}.fa-face-smile-beam:before,.fa-smile-beam:before{content:\"\\f5b8\"}.fa-light-ceiling:before{content:\"\\e016\"}.fa-comment-alt-exclamation:before,.fa-message-exclamation:before{content:\"\\f4a5\"}.fa-bowl-scoop:before,.fa-bowl-shaved-ice:before{content:\"\\e3de\"}.fa-square-x:before{content:\"\\e286\"}.fa-utility-pole-double:before{content:\"\\e2c4\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-chevron-double-up:before,.fa-chevrons-up:before{content:\"\\f325\"}.fa-football-ball:before,.fa-football:before{content:\"\\f44e\"}.fa-user-vneck:before{content:\"\\e461\"}.fa-school-circle-exclamation:before{content:\"\\e56c\"}.fa-crop:before{content:\"\\f125\"}.fa-angle-double-down:before,.fa-angles-down:before{content:\"\\f103\"}.fa-users-rectangle:before{content:\"\\e594\"}.fa-people-roof:before{content:\"\\e537\"}.fa-arrow-square-right:before,.fa-square-arrow-right:before{content:\"\\f33b\"}.fa-location-plus:before,.fa-map-marker-plus:before{content:\"\\f60a\"}.fa-lightbulb-exclamation-on:before{content:\"\\e1ca\"}.fa-people-line:before{content:\"\\e534\"}.fa-beer-mug-empty:before,.fa-beer:before{content:\"\\f0fc\"}.fa-crate-empty:before{content:\"\\e151\"}.fa-diagram-predecessor:before{content:\"\\e477\"}.fa-transporter:before{content:\"\\e042\"}.fa-calendar-circle-user:before{content:\"\\e471\"}.fa-arrow-up-long:before,.fa-long-arrow-up:before{content:\"\\f176\"}.fa-person-carry-box:before,.fa-person-carry:before{content:\"\\f4cf\"}.fa-burn:before,.fa-fire-flame-simple:before{content:\"\\f46a\"}.fa-male:before,.fa-person:before{content:\"\\f183\"}.fa-laptop:before{content:\"\\f109\"}.fa-file-csv:before{content:\"\\f6dd\"}.fa-menorah:before{content:\"\\f676\"}.fa-union:before{content:\"\\f6a2\"}.fa-chevron-double-left:before,.fa-chevrons-left:before{content:\"\\f323\"}.fa-circle-heart:before,.fa-heart-circle:before{content:\"\\f4c7\"}.fa-truck-plane:before{content:\"\\e58f\"}.fa-record-vinyl:before{content:\"\\f8d9\"}.fa-bring-forward:before{content:\"\\f856\"}.fa-square-p:before{content:\"\\e279\"}.fa-face-grin-stars:before,.fa-grin-stars:before{content:\"\\f587\"}.fa-sigma:before{content:\"\\f68b\"}.fa-camera-movie:before{content:\"\\f8a9\"}.fa-bong:before{content:\"\\f55c\"}.fa-clarinet:before{content:\"\\f8ad\"}.fa-truck-flatbed:before{content:\"\\e2b6\"}.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before{content:\"\\f67b\"}.fa-arrow-down-up-across-line:before{content:\"\\e4af\"}.fa-leaf-heart:before{content:\"\\f4cb\"}.fa-house-building:before{content:\"\\e1b1\"}.fa-cheese-swiss:before{content:\"\\f7f0\"}.fa-spoon:before,.fa-utensil-spoon:before{content:\"\\f2e5\"}.fa-jar-wheat:before{content:\"\\e517\"}.fa-envelopes-bulk:before,.fa-mail-bulk:before{content:\"\\f674\"}.fa-file-circle-exclamation:before{content:\"\\e4eb\"}.fa-bow-arrow:before{content:\"\\f6b9\"}.fa-cart-xmark:before{content:\"\\e0dd\"}.fa-hexagon-xmark:before,.fa-times-hexagon:before,.fa-xmark-hexagon:before{content:\"\\f2ee\"}.fa-circle-h:before,.fa-hospital-symbol:before{content:\"\\f47e\"}.fa-merge:before{content:\"\\e526\"}.fa-pager:before{content:\"\\f815\"}.fa-cart-minus:before{content:\"\\e0db\"}.fa-address-book:before,.fa-contact-book:before{content:\"\\f2b9\"}.fa-pan-frying:before{content:\"\\e42c\"}.fa-grid-3:before,.fa-grid:before{content:\"\\e195\"}.fa-football-helmet:before{content:\"\\f44f\"}.fa-hand-love:before{content:\"\\e1a5\"}.fa-trees:before{content:\"\\f724\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-page:before{content:\"\\e428\"}.fa-k:before{content:\"\\4b\"}.fa-diagram-previous:before{content:\"\\e478\"}.fa-gauge-min:before,.fa-tachometer-alt-slowest:before{content:\"\\f628\"}.fa-folder-grid:before{content:\"\\e188\"}.fa-eggplant:before{content:\"\\e16c\"}.fa-ram:before{content:\"\\f70a\"}.fa-landmark-flag:before{content:\"\\e51c\"}.fa-lips:before{content:\"\\f600\"}.fa-pencil-alt:before,.fa-pencil:before{content:\"\\f303\"}.fa-backward:before{content:\"\\f04a\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-comments:before{content:\"\\f086\"}.fa-file-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-desktop-arrow-down:before{content:\"\\e155\"}.fa-code-pull-request:before{content:\"\\e13c\"}.fa-pumpkin:before{content:\"\\f707\"}.fa-clipboard-list:before{content:\"\\f46d\"}.fa-pen-field:before{content:\"\\e211\"}.fa-blueberries:before{content:\"\\e2e8\"}.fa-truck-loading:before,.fa-truck-ramp-box:before{content:\"\\f4de\"}.fa-note:before{content:\"\\e1ff\"}.fa-arrow-down-to-square:before{content:\"\\e096\"}.fa-user-check:before{content:\"\\f4fc\"}.fa-cloud-xmark:before{content:\"\\e35f\"}.fa-vial-virus:before{content:\"\\e597\"}.fa-book-alt:before,.fa-book-blank:before{content:\"\\f5d9\"}.fa-golf-flag-hole:before{content:\"\\e3ac\"}.fa-comment-alt-arrow-down:before,.fa-message-arrow-down:before{content:\"\\e1db\"}.fa-face-unamused:before{content:\"\\e39f\"}.fa-sheet-plastic:before{content:\"\\e571\"}.fa-circle-9:before{content:\"\\e0f6\"}.fa-blog:before{content:\"\\f781\"}.fa-user-ninja:before{content:\"\\f504\"}.fa-pencil-slash:before{content:\"\\e215\"}.fa-bowling-pins:before{content:\"\\f437\"}.fa-person-arrow-up-from-line:before{content:\"\\e539\"}.fa-down-right:before{content:\"\\e16b\"}.fa-scroll-torah:before,.fa-torah:before{content:\"\\f6a0\"}.fa-blinds-open:before{content:\"\\f8fc\"}.fa-fence:before{content:\"\\e303\"}.fa-arrow-alt-up:before,.fa-up:before{content:\"\\f357\"}.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before{content:\"\\f458\"}.fa-drumstick:before{content:\"\\f6d6\"}.fa-square-v:before{content:\"\\e284\"}.fa-face-awesome:before,.fa-gave-dandy:before{content:\"\\e409\"}.fa-dial-off:before{content:\"\\e162\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-face-smile-horns:before{content:\"\\e391\"}.fa-archive:before,.fa-box-archive:before{content:\"\\f187\"}.fa-grapes:before{content:\"\\e306\"}.fa-person-drowning:before{content:\"\\e545\"}.fa-dial-max:before{content:\"\\e15e\"}.fa-circle-m:before{content:\"\\e115\"}.fa-calendar-image:before{content:\"\\e0d4\"}.fa-caret-circle-down:before,.fa-circle-caret-down:before{content:\"\\f32d\"}.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before{content:\"\\f886\"}.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before{content:\"\\f58a\"}.fa-shish-kebab:before{content:\"\\f821\"}.fa-spray-can:before{content:\"\\f5bd\"}.fa-alarm-snooze:before{content:\"\\f845\"}.fa-scarecrow:before{content:\"\\f70d\"}.fa-truck-monster:before{content:\"\\f63b\"}.fa-gift-card:before{content:\"\\f663\"}.fa-w:before{content:\"\\57\"}.fa-code-pull-request-draft:before{content:\"\\e3fa\"}.fa-square-b:before{content:\"\\e264\"}.fa-elephant:before{content:\"\\f6da\"}.fa-earth-africa:before,.fa-globe-africa:before{content:\"\\f57c\"}.fa-rainbow:before{content:\"\\f75b\"}.fa-circle-notch:before{content:\"\\f1ce\"}.fa-tablet-alt:before,.fa-tablet-screen-button:before{content:\"\\f3fa\"}.fa-paw:before{content:\"\\f1b0\"}.fa-message-question:before{content:\"\\e1e3\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-trowel-bricks:before{content:\"\\e58a\"}.fa-square-3:before{content:\"\\e258\"}.fa-face-flushed:before,.fa-flushed:before{content:\"\\f579\"}.fa-hospital-user:before{content:\"\\f80d\"}.fa-microwave:before{content:\"\\e01b\"}.fa-tent-arrow-left-right:before{content:\"\\e57f\"}.fa-cart-circle-arrow-up:before{content:\"\\e3f0\"}.fa-trash-clock:before{content:\"\\e2b0\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-sprinkler-ceiling:before{content:\"\\e44c\"}.fa-browsers:before{content:\"\\e0cb\"}.fa-trillium:before{content:\"\\e588\"}.fa-music-slash:before{content:\"\\f8d1\"}.fa-truck-ramp:before{content:\"\\f4e0\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-box-tissue:before{content:\"\\e05b\"}.fa-circle-c:before{content:\"\\e101\"}.fa-star-christmas:before{content:\"\\f7d4\"}.fa-chart-bullet:before{content:\"\\e0e1\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-tree-christmas:before{content:\"\\f7db\"}.fa-tire-flat:before{content:\"\\f632\"}.fa-sunglasses:before{content:\"\\f892\"}.fa-badge:before{content:\"\\f335\"}.fa-comment-alt-edit:before,.fa-message-edit:before,.fa-message-pen:before{content:\"\\f4a4\"}.fa-bell-concierge:before,.fa-concierge-bell:before{content:\"\\f562\"}.fa-pen-ruler:before,.fa-pencil-ruler:before{content:\"\\f5ae\"}.fa-chess-rook-alt:before,.fa-chess-rook-piece:before{content:\"\\f448\"}.fa-square-root:before{content:\"\\f697\"}.fa-album-collection-circle-plus:before{content:\"\\e48e\"}.fa-people-arrows-left-right:before,.fa-people-arrows:before{content:\"\\e068\"}.fa-face-angry-horns:before{content:\"\\e368\"}.fa-mars-and-venus-burst:before{content:\"\\e523\"}.fa-tombstone:before{content:\"\\f720\"}.fa-caret-square-right:before,.fa-square-caret-right:before{content:\"\\f152\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-list-music:before{content:\"\\f8c9\"}.fa-sun-plant-wilt:before{content:\"\\e57a\"}.fa-toilets-portable:before{content:\"\\e584\"}.fa-hockey-puck:before{content:\"\\f453\"}.fa-hyphen:before{content:\"\\2d\"}.fa-table:before{content:\"\\f0ce\"}.fa-user-chef:before{content:\"\\e3d2\"}.fa-comment-alt-image:before,.fa-message-image:before{content:\"\\e1e0\"}.fa-users-medical:before{content:\"\\f830\"}.fa-sensor-alert:before,.fa-sensor-triangle-exclamation:before{content:\"\\e029\"}.fa-magnifying-glass-arrow-right:before{content:\"\\e521\"}.fa-digital-tachograph:before,.fa-tachograph-digital:before{content:\"\\f566\"}.fa-face-mask:before{content:\"\\e37f\"}.fa-pickleball:before{content:\"\\e435\"}.fa-star-sharp-half:before{content:\"\\e28c\"}.fa-users-slash:before{content:\"\\e073\"}.fa-clover:before{content:\"\\e139\"}.fa-meat:before{content:\"\\f814\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f3e5\"}.fa-star-and-crescent:before{content:\"\\f699\"}.fa-empty-set:before{content:\"\\f656\"}.fa-house-fire:before{content:\"\\e50c\"}.fa-minus-square:before,.fa-square-minus:before{content:\"\\f146\"}.fa-helicopter:before{content:\"\\f533\"}.fa-bird:before{content:\"\\e469\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-down:before,.fa-square-caret-down:before{content:\"\\f150\"}.fa-heart-half-alt:before,.fa-heart-half-stroke:before{content:\"\\e1ac\"}.fa-file-circle-question:before{content:\"\\e4ef\"}.fa-laptop-code:before{content:\"\\f5fc\"}.fa-joystick:before{content:\"\\f8c5\"}.fa-grill-fire:before{content:\"\\e5a4\"}.fa-rectangle-vertical-history:before{content:\"\\e237\"}.fa-swatchbook:before{content:\"\\f5c3\"}.fa-prescription-bottle:before{content:\"\\f485\"}.fa-bars:before,.fa-navicon:before{content:\"\\f0c9\"}.fa-keyboard-left:before{content:\"\\e1c3\"}.fa-people-group:before{content:\"\\e533\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-heart-broken:before,.fa-heart-crack:before{content:\"\\f7a9\"}.fa-face-beam-hand-over-mouth:before{content:\"\\e47c\"}.fa-droplet-percent:before,.fa-humidity:before{content:\"\\f750\"}.fa-external-link-square-alt:before,.fa-square-up-right:before{content:\"\\f360\"}.fa-face-kiss-beam:before,.fa-kiss-beam:before{content:\"\\f597\"}.fa-corn:before{content:\"\\f6c7\"}.fa-roller-coaster:before{content:\"\\e324\"}.fa-photo-film-music:before{content:\"\\e228\"}.fa-radar:before{content:\"\\e024\"}.fa-sickle:before{content:\"\\f822\"}.fa-film:before{content:\"\\f008\"}.fa-coconut:before{content:\"\\e2f6\"}.fa-ruler-horizontal:before{content:\"\\f547\"}.fa-shield-cross:before{content:\"\\f712\"}.fa-cassette-tape:before{content:\"\\f8ab\"}.fa-square-terminal:before{content:\"\\e32a\"}.fa-people-robbery:before{content:\"\\e536\"}.fa-lightbulb:before{content:\"\\f0eb\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-comment-middle:before{content:\"\\e149\"}.fa-trash-can-list:before{content:\"\\e2ab\"}.fa-block:before{content:\"\\e46a\"}.fa-circle-exclamation:before,.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-school-circle-xmark:before{content:\"\\e56d\"}.fa-arrow-right-from-bracket:before,.fa-sign-out:before{content:\"\\f08b\"}.fa-face-frown-slight:before{content:\"\\e376\"}.fa-chevron-circle-down:before,.fa-circle-chevron-down:before{content:\"\\f13a\"}.fa-sidebar-flip:before{content:\"\\e24f\"}.fa-unlock-alt:before,.fa-unlock-keyhole:before{content:\"\\f13e\"}.fa-temperature-list:before{content:\"\\e299\"}.fa-cloud-showers-heavy:before{content:\"\\f740\"}.fa-headphones-alt:before,.fa-headphones-simple:before{content:\"\\f58f\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-pipe-section:before{content:\"\\e438\"}.fa-space-station-moon-alt:before,.fa-space-station-moon-construction:before{content:\"\\e034\"}.fa-circle-dollar-to-slot:before,.fa-donate:before{content:\"\\f4b9\"}.fa-memory:before{content:\"\\f538\"}.fa-face-sleeping:before{content:\"\\e38d\"}.fa-road-spikes:before{content:\"\\e568\"}.fa-fire-burner:before{content:\"\\e4f1\"}.fa-squirrel:before{content:\"\\f71a\"}.fa-arrow-to-top:before,.fa-arrow-up-to-line:before{content:\"\\f341\"}.fa-flag:before{content:\"\\f024\"}.fa-face-cowboy-hat:before{content:\"\\e36e\"}.fa-hanukiah:before{content:\"\\f6e6\"}.fa-chart-scatter-3d:before{content:\"\\e0e8\"}.fa-square-code:before{content:\"\\e267\"}.fa-feather:before{content:\"\\f52d\"}.fa-volume-down:before,.fa-volume-low:before{content:\"\\f027\"}.fa-times-to-slot:before,.fa-vote-nay:before,.fa-xmark-to-slot:before{content:\"\\f771\"}.fa-box-alt:before,.fa-box-taped:before{content:\"\\f49a\"}.fa-comment-slash:before{content:\"\\f4b3\"}.fa-swords:before{content:\"\\f71d\"}.fa-cloud-sun-rain:before{content:\"\\f743\"}.fa-album:before{content:\"\\f89f\"}.fa-circle-n:before{content:\"\\e118\"}.fa-compress:before{content:\"\\f066\"}.fa-wheat-alt:before,.fa-wheat-awn:before{content:\"\\e2cd\"}.fa-ankh:before{content:\"\\f644\"}.fa-hands-holding-child:before{content:\"\\e4fa\"}.fa-asterisk:before{content:\"\\2a\"}.fa-key-skeleton-left-right:before{content:\"\\e3b4\"}.fa-comment-lines:before{content:\"\\f4b0\"}.fa-luchador-mask:before,.fa-luchador:before,.fa-mask-luchador:before{content:\"\\f455\"}.fa-check-square:before,.fa-square-check:before{content:\"\\f14a\"}.fa-shredder:before{content:\"\\f68a\"}.fa-book-open-alt:before,.fa-book-open-cover:before{content:\"\\e0c0\"}.fa-sandwich:before{content:\"\\f81f\"}.fa-peseta-sign:before{content:\"\\e221\"}.fa-parking-slash:before,.fa-square-parking-slash:before{content:\"\\f617\"}.fa-train-tunnel:before{content:\"\\e454\"}.fa-header:before,.fa-heading:before{content:\"\\f1dc\"}.fa-ghost:before{content:\"\\f6e2\"}.fa-face-anguished:before{content:\"\\e369\"}.fa-hockey-sticks:before{content:\"\\f454\"}.fa-abacus:before{content:\"\\f640\"}.fa-film-alt:before,.fa-film-simple:before{content:\"\\f3a0\"}.fa-list-squares:before,.fa-list:before{content:\"\\f03a\"}.fa-tree-palm:before{content:\"\\f82b\"}.fa-phone-square-alt:before,.fa-square-phone-flip:before{content:\"\\f87b\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-border-center-v:before{content:\"\\f89d\"}.fa-circle-dot:before,.fa-dot-circle:before{content:\"\\f192\"}.fa-clipboard-medical:before{content:\"\\e133\"}.fa-dizzy:before,.fa-face-dizzy:before{content:\"\\f567\"}.fa-egg:before{content:\"\\f7fb\"}.fa-arrow-alt-to-top:before,.fa-up-to-line:before{content:\"\\f34d\"}.fa-house-medical-circle-xmark:before{content:\"\\e513\"}.fa-watch-fitness:before{content:\"\\f63e\"}.fa-clock-nine-thirty:before{content:\"\\e34d\"}.fa-campground:before{content:\"\\f6bb\"}.fa-folder-plus:before{content:\"\\f65e\"}.fa-jug:before{content:\"\\f8c6\"}.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before{content:\"\\f1e3\"}.fa-snow-blowing:before{content:\"\\f761\"}.fa-paint-brush:before,.fa-paintbrush:before{content:\"\\f1fc\"}.fa-lock:before{content:\"\\f023\"}.fa-arrow-down-from-line:before,.fa-arrow-from-top:before{content:\"\\f345\"}.fa-gas-pump:before{content:\"\\f52f\"}.fa-signal-alt-slash:before,.fa-signal-bars-slash:before{content:\"\\f694\"}.fa-monkey:before{content:\"\\f6fb\"}.fa-pro:before,.fa-rectangle-pro:before{content:\"\\e235\"}.fa-house-night:before{content:\"\\e010\"}.fa-hot-tub-person:before,.fa-hot-tub:before{content:\"\\f593\"}.fa-blanket:before{content:\"\\f498\"}.fa-map-location:before,.fa-map-marked:before{content:\"\\f59f\"}.fa-house-flood-water:before{content:\"\\e50e\"}.fa-comments-question-check:before{content:\"\\e14f\"}.fa-tree:before{content:\"\\f1bb\"}.fa-arrows-cross:before{content:\"\\e0a2\"}.fa-backpack:before{content:\"\\f5d4\"}.fa-square-small:before{content:\"\\e27e\"}.fa-folder-arrow-up:before,.fa-folder-upload:before{content:\"\\e054\"}.fa-bridge-lock:before{content:\"\\e4cc\"}.fa-crosshairs-simple:before{content:\"\\e59f\"}.fa-sack-dollar:before{content:\"\\f81d\"}.fa-edit:before,.fa-pen-to-square:before{content:\"\\f044\"}.fa-sliders-h-square:before,.fa-square-sliders:before{content:\"\\f3f0\"}.fa-car-side:before{content:\"\\f5e4\"}.fa-comment-middle-top-alt:before,.fa-message-middle-top:before{content:\"\\e1e2\"}.fa-lightbulb-on:before{content:\"\\f672\"}.fa-knife:before,.fa-utensil-knife:before{content:\"\\f2e4\"}.fa-share-alt:before,.fa-share-nodes:before{content:\"\\f1e0\"}.fa-wave-sine:before{content:\"\\f899\"}.fa-heart-circle-minus:before{content:\"\\e4ff\"}.fa-circle-w:before{content:\"\\e12c\"}.fa-calendar-circle:before,.fa-circle-calendar:before{content:\"\\e102\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-microscope:before{content:\"\\f610\"}.fa-sunset:before{content:\"\\f767\"}.fa-sink:before{content:\"\\e06d\"}.fa-calendar-exclamation:before{content:\"\\f334\"}.fa-truck-container-empty:before{content:\"\\e2b5\"}.fa-hand-heart:before{content:\"\\f4bc\"}.fa-bag-shopping:before,.fa-shopping-bag:before{content:\"\\f290\"}.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before{content:\"\\f881\"}.fa-mitten:before{content:\"\\f7b5\"}.fa-reply-clock:before,.fa-reply-time:before{content:\"\\e239\"}.fa-person-rays:before{content:\"\\e54d\"}.fa-arrow-alt-right:before,.fa-right:before{content:\"\\f356\"}.fa-circle-f:before{content:\"\\e10e\"}.fa-users:before{content:\"\\f0c0\"}.fa-face-pleading:before{content:\"\\e386\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-flask-vial:before{content:\"\\e4f3\"}.fa-police-box:before{content:\"\\e021\"}.fa-cucumber:before{content:\"\\e401\"}.fa-head-side-brain:before{content:\"\\f808\"}.fa-hand-paper:before,.fa-hand:before{content:\"\\f256\"}.fa-biking-mountain:before,.fa-person-biking-mountain:before{content:\"\\f84b\"}.fa-utensils-slash:before{content:\"\\e464\"}.fa-print-magnifying-glass:before,.fa-print-search:before{content:\"\\f81a\"}.fa-folder-bookmark:before{content:\"\\e186\"}.fa-om:before{content:\"\\f679\"}.fa-pi:before{content:\"\\f67e\"}.fa-flask-potion:before,.fa-flask-round-potion:before{content:\"\\f6e1\"}.fa-face-shush:before{content:\"\\e38c\"}.fa-worm:before{content:\"\\e599\"}.fa-house-circle-xmark:before{content:\"\\e50b\"}.fa-plug:before{content:\"\\f1e6\"}.fa-calendar-circle-exclamation:before{content:\"\\e46e\"}.fa-square-i:before{content:\"\\e272\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-face-saluting:before{content:\"\\e484\"}.fa-gauge-simple-low:before,.fa-tachometer-slow:before{content:\"\\f62c\"}.fa-face-persevering:before{content:\"\\e385\"}.fa-camera-circle:before,.fa-circle-camera:before{content:\"\\e103\"}.fa-hand-spock:before{content:\"\\f259\"}.fa-spider-web:before{content:\"\\f719\"}.fa-circle-microphone:before,.fa-microphone-circle:before{content:\"\\e116\"}.fa-book-arrow-up:before{content:\"\\e0ba\"}.fa-popsicle:before{content:\"\\e43e\"}.fa-command:before{content:\"\\e142\"}.fa-blinds:before{content:\"\\f8fb\"}.fa-stopwatch:before{content:\"\\f2f2\"}.fa-saxophone:before{content:\"\\f8dc\"}.fa-square-2:before{content:\"\\e257\"}.fa-field-hockey-stick-ball:before,.fa-field-hockey:before{content:\"\\f44c\"}.fa-arrow-up-square-triangle:before,.fa-sort-shapes-up-alt:before{content:\"\\f88b\"}.fa-face-scream:before{content:\"\\e38b\"}.fa-square-m:before{content:\"\\e276\"}.fa-camera-web:before,.fa-webcam:before{content:\"\\f832\"}.fa-comment-arrow-down:before{content:\"\\e143\"}.fa-lightbulb-cfl:before{content:\"\\e5a6\"}.fa-window-frame-open:before{content:\"\\e050\"}.fa-face-kiss:before,.fa-kiss:before{content:\"\\f596\"}.fa-bridge-circle-xmark:before{content:\"\\e4cb\"}.fa-period:before{content:\"\\2e\"}.fa-face-grin-tongue:before,.fa-grin-tongue:before{content:\"\\f589\"}.fa-up-to-dotted-line:before{content:\"\\e457\"}.fa-thought-bubble:before{content:\"\\e32e\"}.fa-raygun:before{content:\"\\e025\"}.fa-flute:before{content:\"\\f8b9\"}.fa-acorn:before{content:\"\\f6ae\"}.fa-video-arrow-up-right:before{content:\"\\e2c9\"}.fa-grate-droplet:before{content:\"\\e194\"}.fa-seal-exclamation:before{content:\"\\e242\"}.fa-chess-bishop:before{content:\"\\f43a\"}.fa-message-sms:before{content:\"\\e1e5\"}.fa-coffee-beans:before{content:\"\\e13f\"}.fa-hat-witch:before{content:\"\\f6e7\"}.fa-face-grin-wink:before,.fa-grin-wink:before{content:\"\\f58c\"}.fa-clock-three-thirty:before{content:\"\\e357\"}.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before{content:\"\\f2a4\"}.fa-alarm-clock:before{content:\"\\f34e\"}.fa-eclipse:before{content:\"\\f749\"}.fa-face-relieved:before{content:\"\\e389\"}.fa-road-circle-check:before{content:\"\\e564\"}.fa-dice-five:before{content:\"\\f523\"}.fa-minus-octagon:before,.fa-octagon-minus:before{content:\"\\f308\"}.fa-rss-square:before,.fa-square-rss:before{content:\"\\f143\"}.fa-face-zany:before{content:\"\\e3a4\"}.fa-land-mine-on:before{content:\"\\e51b\"}.fa-square-arrow-up-left:before{content:\"\\e263\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-salt-shaker:before{content:\"\\e446\"}.fa-stamp:before{content:\"\\f5bf\"}.fa-file-plus:before{content:\"\\f319\"}.fa-draw-square:before{content:\"\\f5ef\"}.fa-toilet-paper-reverse-slash:before,.fa-toilet-paper-under-slash:before{content:\"\\e2a1\"}.fa-stairs:before{content:\"\\e289\"}.fa-drone-alt:before,.fa-drone-front:before{content:\"\\f860\"}.fa-glass-empty:before{content:\"\\e191\"}.fa-dial-high:before{content:\"\\e15c\"}.fa-user-construction:before,.fa-user-hard-hat:before,.fa-user-helmet-safety:before{content:\"\\f82c\"}.fa-i:before{content:\"\\49\"}.fa-hryvnia-sign:before,.fa-hryvnia:before{content:\"\\f6f2\"}.fa-arrow-down-left-and-arrow-up-right-to-center:before{content:\"\\e092\"}.fa-pills:before{content:\"\\f484\"}.fa-face-grin-wide:before,.fa-grin-alt:before{content:\"\\f581\"}.fa-tooth:before{content:\"\\f5c9\"}.fa-basketball-hoop:before{content:\"\\f435\"}.fa-objects-align-bottom:before{content:\"\\e3bb\"}.fa-v:before{content:\"\\56\"}.fa-sparkles:before{content:\"\\f890\"}.fa-squid:before{content:\"\\e450\"}.fa-leafy-green:before{content:\"\\e41d\"}.fa-circle-arrow-up-right:before{content:\"\\e0fc\"}.fa-calendars:before{content:\"\\e0d7\"}.fa-bangladeshi-taka-sign:before{content:\"\\e2e6\"}.fa-bicycle:before{content:\"\\f206\"}.fa-hammer-war:before{content:\"\\f6e4\"}.fa-circle-d:before{content:\"\\e104\"}.fa-spider-black-widow:before{content:\"\\f718\"}.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before{content:\"\\e579\"}.fa-pear:before{content:\"\\e20c\"}.fa-head-side-cough-slash:before{content:\"\\e062\"}.fa-triangle:before{content:\"\\f2ec\"}.fa-apartment:before{content:\"\\e468\"}.fa-ambulance:before,.fa-truck-medical:before{content:\"\\f0f9\"}.fa-pepper:before{content:\"\\e432\"}.fa-piano:before{content:\"\\f8d4\"}.fa-gun-squirt:before{content:\"\\e19d\"}.fa-wheat-awn-circle-exclamation:before{content:\"\\e598\"}.fa-snowman:before{content:\"\\f7d0\"}.fa-user-alien:before{content:\"\\e04a\"}.fa-shield-check:before{content:\"\\f2f7\"}.fa-mortar-pestle:before{content:\"\\f5a7\"}.fa-road-barrier:before{content:\"\\e562\"}.fa-chart-candlestick:before{content:\"\\e0e2\"}.fa-briefcase-blank:before{content:\"\\e0c8\"}.fa-school:before{content:\"\\f549\"}.fa-igloo:before{content:\"\\f7ae\"}.fa-bracket-round:before,.fa-parenthesis:before{content:\"\\28\"}.fa-joint:before{content:\"\\f595\"}.fa-horse-saddle:before{content:\"\\f8c3\"}.fa-mug-marshmallows:before{content:\"\\f7b7\"}.fa-filters:before{content:\"\\e17e\"}.fa-bell-on:before{content:\"\\f8fa\"}.fa-angle-right:before{content:\"\\f105\"}.fa-dial-med:before{content:\"\\e15f\"}.fa-horse:before{content:\"\\f6f0\"}.fa-q:before{content:\"\\51\"}.fa-monitor-heart-rate:before,.fa-monitor-waveform:before{content:\"\\f611\"}.fa-link-simple:before{content:\"\\e1cd\"}.fa-whistle:before{content:\"\\f460\"}.fa-g:before{content:\"\\47\"}.fa-fragile:before,.fa-wine-glass-crack:before{content:\"\\f4bb\"}.fa-slot-machine:before{content:\"\\e3ce\"}.fa-notes-medical:before{content:\"\\f481\"}.fa-car-wash:before{content:\"\\f5e6\"}.fa-escalator:before{content:\"\\e171\"}.fa-comment-image:before{content:\"\\e148\"}.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-dong-sign:before{content:\"\\e169\"}.fa-donut:before,.fa-doughnut:before{content:\"\\e406\"}.fa-capsules:before{content:\"\\f46b\"}.fa-poo-bolt:before,.fa-poo-storm:before{content:\"\\f75a\"}.fa-tally-1:before{content:\"\\e294\"}.fa-face-frown-open:before,.fa-frown-open:before{content:\"\\f57a\"}.fa-square-dashed:before{content:\"\\e269\"}.fa-square-j:before{content:\"\\e273\"}.fa-hand-point-up:before{content:\"\\f0a6\"}.fa-money-bill:before{content:\"\\f0d6\"}.fa-arrow-up-big-small:before,.fa-sort-size-up:before{content:\"\\f88e\"}.fa-barcode-read:before{content:\"\\f464\"}.fa-baguette:before{content:\"\\e3d8\"}.fa-bowl-soft-serve:before{content:\"\\e46b\"}.fa-face-holding-back-tears:before{content:\"\\e482\"}.fa-arrow-alt-square-up:before,.fa-square-up:before{content:\"\\f353\"}.fa-subway-tunnel:before,.fa-train-subway-tunnel:before{content:\"\\e2a3\"}.fa-exclamation-square:before,.fa-square-exclamation:before{content:\"\\f321\"}.fa-semicolon:before{content:\"\\3b\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-fan-table:before{content:\"\\e004\"}.fa-align-justify:before{content:\"\\f039\"}.fa-battery-1:before,.fa-battery-low:before{content:\"\\e0b1\"}.fa-credit-card-front:before{content:\"\\f38a\"}.fa-brain-arrow-curved-right:before,.fa-mind-share:before{content:\"\\f677\"}.fa-umbrella-beach:before{content:\"\\f5ca\"}.fa-helmet-un:before{content:\"\\e503\"}.fa-location-smile:before,.fa-map-marker-smile:before{content:\"\\f60d\"}.fa-arrow-left-to-line:before,.fa-arrow-to-left:before{content:\"\\f33e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-nigiri:before,.fa-sushi:before{content:\"\\e48a\"}.fa-comment-alt-captions:before,.fa-message-captions:before{content:\"\\e1de\"}.fa-trash-list:before{content:\"\\e2b1\"}.fa-bacon:before{content:\"\\f7e5\"}.fa-option:before{content:\"\\e318\"}.fa-hand-point-down:before{content:\"\\f0a7\"}.fa-arrow-up-from-bracket:before{content:\"\\e09a\"}.fa-trash-plus:before{content:\"\\e2b2\"}.fa-objects-align-top:before{content:\"\\e3c0\"}.fa-folder-blank:before,.fa-folder:before{content:\"\\f07b\"}.fa-face-anxious-sweat:before{content:\"\\e36a\"}.fa-credit-card-blank:before{content:\"\\f389\"}.fa-file-medical-alt:before,.fa-file-waveform:before{content:\"\\f478\"}.fa-microchip-ai:before{content:\"\\e1ec\"}.fa-mug:before{content:\"\\f874\"}.fa-plane-up-slash:before{content:\"\\e22e\"}.fa-radiation:before{content:\"\\f7b9\"}.fa-pen-circle:before{content:\"\\e20e\"}.fa-chart-simple:before{content:\"\\e473\"}.fa-crutches:before{content:\"\\f7f8\"}.fa-circle-parking:before,.fa-parking-circle:before{content:\"\\f615\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-leaf-oak:before{content:\"\\f6f7\"}.fa-square-bolt:before{content:\"\\e265\"}.fa-vial:before{content:\"\\f492\"}.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before{content:\"\\f624\"}.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before{content:\"\\e2ca\"}.fa-lambda:before{content:\"\\f66e\"}.fa-e:before{content:\"\\45\"}.fa-pizza:before{content:\"\\f817\"}.fa-bowl-chopsticks-noodles:before{content:\"\\e2ea\"}.fa-h3:before{content:\"\\f315\"}.fa-pen-alt:before,.fa-pen-clip:before{content:\"\\f305\"}.fa-bridge-circle-exclamation:before{content:\"\\e4ca\"}.fa-badge-percent:before{content:\"\\f646\"}.fa-user:before{content:\"\\f007\"}.fa-sensor:before{content:\"\\e028\"}.fa-comma:before{content:\"\\2c\"}.fa-school-circle-check:before{content:\"\\e56b\"}.fa-toilet-paper-reverse:before,.fa-toilet-paper-under:before{content:\"\\e2a0\"}.fa-light-emergency:before{content:\"\\e41f\"}.fa-arrow-down-to-arc:before{content:\"\\e4ae\"}.fa-dumpster:before{content:\"\\f793\"}.fa-shuttle-van:before,.fa-van-shuttle:before{content:\"\\f5b6\"}.fa-building-user:before{content:\"\\e4da\"}.fa-light-switch:before{content:\"\\e017\"}.fa-caret-square-left:before,.fa-square-caret-left:before{content:\"\\f191\"}.fa-highlighter:before{content:\"\\f591\"}.fa-heart-rate:before,.fa-wave-pulse:before{content:\"\\f5f8\"}.fa-key:before{content:\"\\f084\"}.fa-hat-santa:before{content:\"\\f7a7\"}.fa-tamale:before{content:\"\\e451\"}.fa-box-check:before{content:\"\\f467\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-steak:before{content:\"\\f824\"}.fa-location-crosshairs-slash:before,.fa-location-slash:before{content:\"\\f603\"}.fa-person-dolly:before{content:\"\\f4d0\"}.fa-globe:before{content:\"\\f0ac\"}.fa-synagogue:before{content:\"\\f69b\"}.fa-file-chart-column:before,.fa-file-chart-line:before{content:\"\\f659\"}.fa-person-half-dress:before{content:\"\\e548\"}.fa-folder-image:before{content:\"\\e18a\"}.fa-calendar-edit:before,.fa-calendar-pen:before{content:\"\\f333\"}.fa-road-bridge:before{content:\"\\e563\"}.fa-face-smile-tear:before{content:\"\\e393\"}.fa-comment-alt-plus:before,.fa-message-plus:before{content:\"\\f4a8\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-c:before{content:\"\\43\"}.fa-tablet-button:before{content:\"\\f10a\"}.fa-rectangle-history-circle-user:before{content:\"\\e4a4\"}.fa-building-lock:before{content:\"\\e4d6\"}.fa-chart-line-up:before{content:\"\\e0e5\"}.fa-mailbox:before{content:\"\\f813\"}.fa-truck-bolt:before{content:\"\\e3d0\"}.fa-pizza-slice:before{content:\"\\f818\"}.fa-money-bill-wave:before{content:\"\\f53a\"}.fa-area-chart:before,.fa-chart-area:before{content:\"\\f1fe\"}.fa-house-flag:before{content:\"\\e50d\"}.fa-person-circle-minus:before{content:\"\\e540\"}.fa-scalpel:before{content:\"\\f61d\"}.fa-ban:before,.fa-cancel:before{content:\"\\f05e\"}.fa-bell-exclamation:before{content:\"\\f848\"}.fa-bookmark-circle:before,.fa-circle-bookmark:before{content:\"\\e100\"}.fa-egg-fried:before{content:\"\\f7fc\"}.fa-face-weary:before{content:\"\\e3a1\"}.fa-uniform-martial-arts:before{content:\"\\e3d1\"}.fa-camera-rotate:before{content:\"\\e0d8\"}.fa-sun-dust:before{content:\"\\f764\"}.fa-comment-text:before{content:\"\\e14d\"}.fa-air-freshener:before,.fa-spray-can-sparkles:before{content:\"\\f5d0\"}.fa-signal-alt-4:before,.fa-signal-alt:before,.fa-signal-bars-strong:before,.fa-signal-bars:before{content:\"\\f690\"}.fa-diamond-exclamation:before{content:\"\\e405\"}.fa-star:before{content:\"\\f005\"}.fa-dial-min:before{content:\"\\e161\"}.fa-repeat:before{content:\"\\f363\"}.fa-cross:before{content:\"\\f654\"}.fa-file-caret-down:before,.fa-page-caret-down:before{content:\"\\e429\"}.fa-box:before{content:\"\\f466\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-clock-seven-thirty:before{content:\"\\e351\"}.fa-arrow-pointer:before,.fa-mouse-pointer:before{content:\"\\f245\"}.fa-clock-four-thirty:before{content:\"\\e34b\"}.fa-signal-alt-3:before,.fa-signal-bars-good:before{content:\"\\f693\"}.fa-cactus:before{content:\"\\f8a7\"}.fa-expand-arrows-alt:before,.fa-maximize:before{content:\"\\f31e\"}.fa-charging-station:before{content:\"\\f5e7\"}.fa-shapes:before,.fa-triangle-circle-square:before{content:\"\\f61f\"}.fa-plane-tail:before{content:\"\\e22c\"}.fa-gauge-simple-max:before,.fa-tachometer-fastest:before{content:\"\\f62b\"}.fa-circle-u:before{content:\"\\e127\"}.fa-shield-slash:before{content:\"\\e24b\"}.fa-phone-square-down:before,.fa-square-phone-hangup:before{content:\"\\e27a\"}.fa-arrow-up-left:before{content:\"\\e09d\"}.fa-transporter-1:before{content:\"\\e043\"}.fa-peanuts:before{content:\"\\e431\"}.fa-random:before,.fa-shuffle:before{content:\"\\f074\"}.fa-person-running:before,.fa-running:before{content:\"\\f70c\"}.fa-mobile-retro:before{content:\"\\e527\"}.fa-grip-lines-vertical:before{content:\"\\f7a5\"}.fa-arrow-up-from-square:before{content:\"\\e09c\"}.fa-file-dashed-line:before,.fa-page-break:before{content:\"\\f877\"}.fa-bracket-curly-right:before{content:\"\\7d\"}.fa-spider:before{content:\"\\f717\"}.fa-clock-three:before{content:\"\\e356\"}.fa-hands-bound:before{content:\"\\e4f9\"}.fa-scalpel-line-dashed:before,.fa-scalpel-path:before{content:\"\\f61e\"}.fa-file-invoice-dollar:before{content:\"\\f571\"}.fa-pipe-smoking:before{content:\"\\e3c4\"}.fa-face-astonished:before{content:\"\\e36b\"}.fa-window:before{content:\"\\f40e\"}.fa-plane-circle-exclamation:before{content:\"\\e556\"}.fa-ear:before{content:\"\\f5f0\"}.fa-file-lock:before{content:\"\\e3a6\"}.fa-diagram-venn:before{content:\"\\e15a\"}.fa-x-ray:before{content:\"\\f497\"}.fa-goal-net:before{content:\"\\e3ab\"}.fa-coffin-cross:before{content:\"\\e051\"}.fa-spell-check:before{content:\"\\f891\"}.fa-location-xmark:before,.fa-map-marker-times:before,.fa-map-marker-xmark:before{content:\"\\f60e\"}.fa-lasso:before{content:\"\\f8c8\"}.fa-slash:before{content:\"\\f715\"}.fa-person-to-portal:before,.fa-portal-enter:before{content:\"\\e022\"}.fa-calendar-star:before{content:\"\\f736\"}.fa-computer-mouse:before,.fa-mouse:before{content:\"\\f8cc\"}.fa-arrow-right-to-bracket:before,.fa-sign-in:before{content:\"\\f090\"}.fa-pegasus:before{content:\"\\f703\"}.fa-files-medical:before{content:\"\\f7fd\"}.fa-nfc-lock:before{content:\"\\e1f8\"}.fa-person-ski-lift:before,.fa-ski-lift:before{content:\"\\f7c8\"}.fa-square-6:before{content:\"\\e25b\"}.fa-shop-slash:before,.fa-store-alt-slash:before{content:\"\\e070\"}.fa-wind-turbine:before{content:\"\\f89b\"}.fa-sliders-simple:before{content:\"\\e253\"}.fa-badge-sheriff:before{content:\"\\f8a2\"}.fa-server:before{content:\"\\f233\"}.fa-virus-covid-slash:before{content:\"\\e4a9\"}.fa-intersection:before{content:\"\\f668\"}.fa-shop-lock:before{content:\"\\e4a5\"}.fa-family:before{content:\"\\e300\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-user-hair-buns:before{content:\"\\e3d3\"}.fa-blender-phone:before{content:\"\\f6b6\"}.fa-hourglass-clock:before{content:\"\\e41b\"}.fa-person-seat-reclined:before{content:\"\\e21f\"}.fa-paper-plane-alt:before,.fa-paper-plane-top:before,.fa-send:before{content:\"\\e20a\"}.fa-comment-alt-arrow-up:before,.fa-message-arrow-up:before{content:\"\\e1dc\"}.fa-lightbulb-exclamation:before{content:\"\\f671\"}.fa-layer-group-minus:before,.fa-layer-minus:before{content:\"\\f5fe\"}.fa-circle-e:before{content:\"\\e109\"}.fa-building-wheat:before{content:\"\\e4db\"}.fa-gauge-max:before,.fa-tachometer-alt-fastest:before{content:\"\\f626\"}.fa-person-breastfeeding:before{content:\"\\e53a\"}.fa-apostrophe:before{content:\"\\27\"}.fa-fire-hydrant:before{content:\"\\e17f\"}.fa-right-to-bracket:before,.fa-sign-in-alt:before{content:\"\\f2f6\"}.fa-video-plus:before{content:\"\\f4e1\"}.fa-arrow-alt-square-right:before,.fa-square-right:before{content:\"\\f352\"}.fa-comment-smile:before{content:\"\\f4b4\"}.fa-venus:before{content:\"\\f221\"}.fa-passport:before{content:\"\\f5ab\"}.fa-inbox-arrow-down:before,.fa-inbox-in:before{content:\"\\f310\"}.fa-heart-pulse:before,.fa-heartbeat:before{content:\"\\f21e\"}.fa-circle-8:before{content:\"\\e0f5\"}.fa-clouds-moon:before{content:\"\\f745\"}.fa-clock-ten-thirty:before{content:\"\\e355\"}.fa-people-carry-box:before,.fa-people-carry:before{content:\"\\f4ce\"}.fa-folder-user:before{content:\"\\e18e\"}.fa-trash-can-xmark:before{content:\"\\e2ae\"}.fa-temperature-high:before{content:\"\\f769\"}.fa-microchip:before{content:\"\\f2db\"}.fa-left-long-to-line:before{content:\"\\e41e\"}.fa-crown:before{content:\"\\f521\"}.fa-weight-hanging:before{content:\"\\f5cd\"}.fa-xmarks-lines:before{content:\"\\e59a\"}.fa-file-prescription:before{content:\"\\f572\"}.fa-calendar-range:before{content:\"\\e0d6\"}.fa-flower-daffodil:before{content:\"\\f800\"}.fa-hand-back-point-up:before{content:\"\\e1a2\"}.fa-weight-scale:before,.fa-weight:before{content:\"\\f496\"}.fa-star-exclamation:before{content:\"\\f2f3\"}.fa-books:before{content:\"\\f5db\"}.fa-user-friends:before,.fa-user-group:before{content:\"\\f500\"}.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before{content:\"\\f15e\"}.fa-layer-group-plus:before,.fa-layer-plus:before{content:\"\\f5ff\"}.fa-play-pause:before{content:\"\\e22f\"}.fa-block-question:before{content:\"\\e3dd\"}.fa-snooze:before,.fa-zzz:before{content:\"\\f880\"}.fa-scanner-image:before{content:\"\\f8f3\"}.fa-tv-retro:before{content:\"\\f401\"}.fa-square-t:before{content:\"\\e280\"}.fa-barn-silo:before,.fa-farm:before{content:\"\\f864\"}.fa-chess-knight:before{content:\"\\f441\"}.fa-bars-sort:before{content:\"\\e0ae\"}.fa-palette-boxes:before,.fa-pallet-alt:before,.fa-pallet-boxes:before{content:\"\\f483\"}.fa-face-laugh-squint:before,.fa-laugh-squint:before{content:\"\\f59b\"}.fa-code-simple:before{content:\"\\e13d\"}.fa-bolt-slash:before{content:\"\\e0b8\"}.fa-panel-fire:before{content:\"\\e42f\"}.fa-binary-circle-check:before{content:\"\\e33c\"}.fa-comment-minus:before{content:\"\\f4b1\"}.fa-burrito:before{content:\"\\f7ed\"}.fa-violin:before{content:\"\\f8ed\"}.fa-objects-column:before{content:\"\\e3c1\"}.fa-chevron-square-down:before,.fa-square-chevron-down:before{content:\"\\f329\"}.fa-comment-plus:before{content:\"\\f4b2\"}.fa-triangle-instrument:before,.fa-triangle-music:before{content:\"\\f8e2\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-user-pilot-tie:before{content:\"\\e2c1\"}.fa-piano-keyboard:before{content:\"\\f8d5\"}.fa-bed-empty:before{content:\"\\f8f9\"}.fa-arrow-circle-up:before,.fa-circle-arrow-up:before{content:\"\\f0aa\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-rectangle-portrait:before,.fa-rectangle-vertical:before{content:\"\\f2fb\"}.fa-person-walking:before,.fa-walking:before{content:\"\\f554\"}.fa-l:before{content:\"\\4c\"}.fa-signal-stream:before{content:\"\\f8dd\"}.fa-down-to-bracket:before{content:\"\\e4e7\"}.fa-circle-z:before{content:\"\\e130\"}.fa-stars:before{content:\"\\f762\"}.fa-fire:before{content:\"\\f06d\"}.fa-bed-pulse:before,.fa-procedures:before{content:\"\\f487\"}.fa-house-day:before{content:\"\\e00e\"}.fa-shuttle-space:before,.fa-space-shuttle:before{content:\"\\f197\"}.fa-shirt-long-sleeve:before{content:\"\\e3c7\"}.fa-chart-pie-alt:before,.fa-chart-pie-simple:before{content:\"\\f64e\"}.fa-face-laugh:before,.fa-laugh:before{content:\"\\f599\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-album-collection-circle-user:before{content:\"\\e48f\"}.fa-candy:before{content:\"\\e3e7\"}.fa-bowl-hot:before,.fa-soup:before{content:\"\\f823\"}.fa-flatbread:before{content:\"\\e40b\"}.fa-heart-circle-plus:before{content:\"\\e500\"}.fa-code-fork:before{content:\"\\e13b\"}.fa-city:before{content:\"\\f64f\"}.fa-signal-alt-1:before,.fa-signal-bars-weak:before{content:\"\\f691\"}.fa-microphone-alt:before,.fa-microphone-lines:before{content:\"\\f3c9\"}.fa-clock-twelve:before{content:\"\\e358\"}.fa-pepper-hot:before{content:\"\\f816\"}.fa-citrus-slice:before{content:\"\\e2f5\"}.fa-sheep:before{content:\"\\f711\"}.fa-unlock:before{content:\"\\f09c\"}.fa-colon-sign:before{content:\"\\e140\"}.fa-headset:before{content:\"\\f590\"}.fa-badger-honey:before{content:\"\\f6b4\"}.fa-h4:before{content:\"\\f86a\"}.fa-store-slash:before{content:\"\\e071\"}.fa-road-circle-xmark:before{content:\"\\e566\"}.fa-signal-slash:before{content:\"\\f695\"}.fa-user-minus:before{content:\"\\f503\"}.fa-mars-stroke-up:before,.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-champagne-glasses:before,.fa-glass-cheers:before{content:\"\\f79f\"}.fa-taco:before{content:\"\\f826\"}.fa-hexagon-plus:before,.fa-plus-hexagon:before{content:\"\\f300\"}.fa-clipboard:before{content:\"\\f328\"}.fa-house-circle-exclamation:before{content:\"\\e50a\"}.fa-file-arrow-up:before,.fa-file-upload:before{content:\"\\f574\"}.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before{content:\"\\f1eb\"}.fa-comments-alt:before,.fa-messages:before{content:\"\\f4b6\"}.fa-bath:before,.fa-bathtub:before{content:\"\\f2cd\"}.fa-umbrella-alt:before,.fa-umbrella-simple:before{content:\"\\e2bc\"}.fa-rectangle-history-circle-plus:before{content:\"\\e4a3\"}.fa-underline:before{content:\"\\f0cd\"}.fa-user-edit:before,.fa-user-pen:before{content:\"\\f4ff\"}.fa-binary-slash:before{content:\"\\e33e\"}.fa-square-o:before{content:\"\\e278\"}.fa-signature:before{content:\"\\f5b7\"}.fa-stroopwafel:before{content:\"\\f551\"}.fa-bold:before{content:\"\\f032\"}.fa-anchor-lock:before{content:\"\\e4ad\"}.fa-building-ngo:before{content:\"\\e4d7\"}.fa-transporter-3:before{content:\"\\e045\"}.fa-engine-exclamation:before,.fa-engine-warning:before{content:\"\\f5f2\"}.fa-circle-down-right:before{content:\"\\e108\"}.fa-square-k:before{content:\"\\e274\"}.fa-manat-sign:before{content:\"\\e1d5\"}.fa-money-check-edit:before,.fa-money-check-pen:before{content:\"\\f872\"}.fa-not-equal:before{content:\"\\f53e\"}.fa-border-style:before,.fa-border-top-left:before{content:\"\\f853\"}.fa-map-location-dot:before,.fa-map-marked-alt:before{content:\"\\f5a0\"}.fa-tilde:before{content:\"\\7e\"}.fa-jedi:before{content:\"\\f669\"}.fa-poll:before,.fa-square-poll-vertical:before{content:\"\\f681\"}.fa-arrow-down-square-triangle:before,.fa-sort-shapes-down-alt:before{content:\"\\f889\"}.fa-mug-hot:before{content:\"\\f7b6\"}.fa-dog-leashed:before{content:\"\\f6d4\"}.fa-battery-car:before,.fa-car-battery:before{content:\"\\f5df\"}.fa-face-downcast-sweat:before{content:\"\\e371\"}.fa-memo-circle-info:before{content:\"\\e49a\"}.fa-gift:before{content:\"\\f06b\"}.fa-dice-two:before{content:\"\\f528\"}.fa-volume-medium:before,.fa-volume:before{content:\"\\f6a8\"}.fa-transporter-5:before{content:\"\\e2a6\"}.fa-gauge-circle-bolt:before{content:\"\\e496\"}.fa-coin-front:before{content:\"\\e3fc\"}.fa-file-slash:before{content:\"\\e3a7\"}.fa-message-arrow-up-right:before{content:\"\\e1dd\"}.fa-treasure-chest:before{content:\"\\f723\"}.fa-chess-queen:before{content:\"\\f445\"}.fa-paint-brush-alt:before,.fa-paint-brush-fine:before,.fa-paintbrush-alt:before,.fa-paintbrush-fine:before{content:\"\\f5a9\"}.fa-glasses:before{content:\"\\f530\"}.fa-hood-cloak:before{content:\"\\f6ef\"}.fa-square-quote:before{content:\"\\e329\"}.fa-up-left:before{content:\"\\e2bd\"}.fa-bring-front:before{content:\"\\f857\"}.fa-chess-board:before{content:\"\\f43c\"}.fa-burger-cheese:before,.fa-cheeseburger:before{content:\"\\f7f1\"}.fa-building-circle-check:before{content:\"\\e4d2\"}.fa-repeat-1:before{content:\"\\f365\"}.fa-arrow-down-to-line:before,.fa-arrow-to-bottom:before{content:\"\\f33d\"}.fa-grid-5:before{content:\"\\e199\"}.fa-right-long-to-line:before{content:\"\\e444\"}.fa-person-chalkboard:before{content:\"\\e53d\"}.fa-mars-stroke-h:before,.fa-mars-stroke-right:before{content:\"\\f22b\"}.fa-hand-back-fist:before,.fa-hand-rock:before{content:\"\\f255\"}.fa-tally-5:before,.fa-tally:before{content:\"\\f69c\"}.fa-caret-square-up:before,.fa-square-caret-up:before{content:\"\\f151\"}.fa-cloud-showers-water:before{content:\"\\e4e4\"}.fa-bar-chart:before,.fa-chart-bar:before{content:\"\\f080\"}.fa-hands-bubbles:before,.fa-hands-wash:before{content:\"\\e05e\"}.fa-less-than-equal:before{content:\"\\f537\"}.fa-train:before{content:\"\\f238\"}.fa-up-from-dotted-line:before{content:\"\\e456\"}.fa-eye-low-vision:before,.fa-low-vision:before{content:\"\\f2a8\"}.fa-traffic-light-go:before{content:\"\\f638\"}.fa-face-exhaling:before{content:\"\\e480\"}.fa-sensor-fire:before{content:\"\\e02a\"}.fa-user-unlock:before{content:\"\\e058\"}.fa-hexagon-divide:before{content:\"\\e1ad\"}.fa-00:before{content:\"\\e467\"}.fa-crow:before{content:\"\\f520\"}.fa-betamax:before,.fa-cassette-betamax:before{content:\"\\f8a4\"}.fa-sailboat:before{content:\"\\e445\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-nfc-magnifying-glass:before{content:\"\\e1f9\"}.fa-file-binary:before{content:\"\\e175\"}.fa-circle-v:before{content:\"\\e12a\"}.fa-plus-square:before,.fa-square-plus:before{content:\"\\f0fe\"}.fa-bowl-scoops:before{content:\"\\e3df\"}.fa-mistletoe:before{content:\"\\f7b4\"}.fa-custard:before{content:\"\\e403\"}.fa-lacrosse-stick:before{content:\"\\e3b5\"}.fa-hockey-mask:before{content:\"\\f6ee\"}.fa-sunrise:before{content:\"\\f766\"}.fa-panel-ews:before{content:\"\\e42e\"}.fa-torii-gate:before{content:\"\\f6a1\"}.fa-cloud-exclamation:before{content:\"\\e491\"}.fa-comment-alt-lines:before,.fa-message-lines:before{content:\"\\f4a6\"}.fa-frog:before{content:\"\\f52e\"}.fa-bucket:before{content:\"\\e4cf\"}.fa-floppy-disk-pen:before{content:\"\\e182\"}.fa-image:before{content:\"\\f03e\"}.fa-window-frame:before{content:\"\\e04f\"}.fa-microphone:before{content:\"\\f130\"}.fa-cow:before{content:\"\\f6c8\"}.fa-square-ring:before{content:\"\\e44f\"}.fa-arrow-alt-from-top:before,.fa-down-from-line:before{content:\"\\f349\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-shield-times:before,.fa-shield-xmark:before{content:\"\\e24c\"}.fa-screwdriver:before{content:\"\\f54a\"}.fa-circle-sort-down:before,.fa-sort-circle-down:before{content:\"\\e031\"}.fa-folder-closed:before{content:\"\\e185\"}.fa-house-tsunami:before{content:\"\\e515\"}.fa-square-nfi:before{content:\"\\e576\"}.fa-forklift:before{content:\"\\f47a\"}.fa-arrow-up-from-ground-water:before{content:\"\\e4b5\"}.fa-bracket-square-right:before{content:\"\\5d\"}.fa-glass-martini-alt:before,.fa-martini-glass:before{content:\"\\f57b\"}.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before{content:\"\\f2ea\"}.fa-columns:before,.fa-table-columns:before{content:\"\\f0db\"}.fa-square-a:before{content:\"\\e25f\"}.fa-tick:before{content:\"\\e32f\"}.fa-lemon:before{content:\"\\f094\"}.fa-head-side-mask:before{content:\"\\e063\"}.fa-handshake:before{content:\"\\f2b5\"}.fa-gem:before{content:\"\\f3a5\"}.fa-dolly-box:before,.fa-dolly:before{content:\"\\f472\"}.fa-smoking:before{content:\"\\f48d\"}.fa-compress-arrows-alt:before,.fa-minimize:before{content:\"\\f78c\"}.fa-refrigerator:before{content:\"\\e026\"}.fa-monument:before{content:\"\\f5a6\"}.fa-octagon-xmark:before,.fa-times-octagon:before,.fa-xmark-octagon:before{content:\"\\f2f0\"}.fa-align-slash:before{content:\"\\f846\"}.fa-snowplow:before{content:\"\\f7d2\"}.fa-angle-double-right:before,.fa-angles-right:before{content:\"\\f101\"}.fa-truck-couch:before,.fa-truck-ramp-couch:before{content:\"\\f4dd\"}.fa-cannabis:before{content:\"\\f55f\"}.fa-circle-play:before,.fa-play-circle:before{content:\"\\f144\"}.fa-arrow-up-right-and-arrow-down-left-from-center:before{content:\"\\e0a0\"}.fa-tablets:before{content:\"\\f490\"}.fa-360-degrees:before{content:\"\\e2dc\"}.fa-ethernet:before{content:\"\\f796\"}.fa-eur:before,.fa-euro-sign:before,.fa-euro:before{content:\"\\f153\"}.fa-chair:before{content:\"\\f6c0\"}.fa-check-circle:before,.fa-circle-check:before{content:\"\\f058\"}.fa-money-simple-from-bracket:before{content:\"\\e313\"}.fa-bat:before{content:\"\\f6b5\"}.fa-circle-stop:before,.fa-stop-circle:before{content:\"\\f28d\"}.fa-head-side-headphones:before{content:\"\\f8c2\"}.fa-phone-rotary:before{content:\"\\f8d3\"}.fa-compass-drafting:before,.fa-drafting-compass:before{content:\"\\f568\"}.fa-plate-wheat:before{content:\"\\e55a\"}.fa-calendar-circle-minus:before{content:\"\\e46f\"}.fa-chopsticks:before{content:\"\\e3f7\"}.fa-car-mechanic:before,.fa-car-wrench:before{content:\"\\f5e3\"}.fa-icicles:before{content:\"\\f7ad\"}.fa-person-shelter:before{content:\"\\e54f\"}.fa-neuter:before{content:\"\\f22c\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-kazoo:before{content:\"\\f8c7\"}.fa-marker:before{content:\"\\f5a1\"}.fa-face-laugh-beam:before,.fa-laugh-beam:before{content:\"\\f59a\"}.fa-square-arrow-down-left:before{content:\"\\e261\"}.fa-battery-bolt:before{content:\"\\f376\"}.fa-tree-large:before{content:\"\\f7dd\"}.fa-helicopter-symbol:before{content:\"\\e502\"}.fa-aperture:before{content:\"\\e2df\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-file-magnifying-glass:before,.fa-file-search:before{content:\"\\f865\"}.fa-up-right:before{content:\"\\e2be\"}.fa-chevron-circle-up:before,.fa-circle-chevron-up:before{content:\"\\f139\"}.fa-user-police:before{content:\"\\e333\"}.fa-lari-sign:before{content:\"\\e1c8\"}.fa-volcano:before{content:\"\\f770\"}.fa-teddy-bear:before{content:\"\\e3cf\"}.fa-stocking:before{content:\"\\f7d5\"}.fa-person-walking-dashed-line-arrow-right:before{content:\"\\e553\"}.fa-image-slash:before{content:\"\\e1b7\"}.fa-mask-snorkel:before{content:\"\\e3b7\"}.fa-smoke:before{content:\"\\f760\"}.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before{content:\"\\f154\"}.fa-battery-exclamation:before{content:\"\\e0b0\"}.fa-viruses:before{content:\"\\e076\"}.fa-square-person-confined:before{content:\"\\e577\"}.fa-user-tie:before{content:\"\\f508\"}.fa-arrow-down-long:before,.fa-long-arrow-down:before{content:\"\\f175\"}.fa-tent-arrow-down-to-line:before{content:\"\\e57e\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-crystal-ball:before{content:\"\\e362\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-person-skating:before,.fa-skating:before{content:\"\\f7c5\"}.fa-star-shooting:before{content:\"\\e036\"}.fa-binary-lock:before{content:\"\\e33d\"}.fa-filter-circle-dollar:before,.fa-funnel-dollar:before{content:\"\\f662\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-arrow-circle-down:before,.fa-circle-arrow-down:before{content:\"\\f0ab\"}.fa-comment-edit:before,.fa-comment-pen:before{content:\"\\f4ae\"}.fa-arrow-right-to-file:before,.fa-file-import:before{content:\"\\f56f\"}.fa-banjo:before{content:\"\\f8a3\"}.fa-external-link-square:before,.fa-square-arrow-up-right:before{content:\"\\f14c\"}.fa-light-emergency-on:before{content:\"\\e420\"}.fa-kerning:before{content:\"\\f86f\"}.fa-box-open:before{content:\"\\f49e\"}.fa-square-f:before{content:\"\\e270\"}.fa-scroll:before{content:\"\\f70e\"}.fa-spa:before{content:\"\\f5bb\"}.fa-arrow-from-right:before,.fa-arrow-left-from-line:before{content:\"\\f344\"}.fa-strawberry:before{content:\"\\e32b\"}.fa-location-pin-lock:before{content:\"\\e51f\"}.fa-pause:before{content:\"\\f04c\"}.fa-clock-eight-thirty:before{content:\"\\e346\"}.fa-plane-alt:before,.fa-plane-engines:before{content:\"\\f3de\"}.fa-hill-avalanche:before{content:\"\\e507\"}.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-gauge-low:before,.fa-tachometer-alt-slow:before{content:\"\\f627\"}.fa-registered:before{content:\"\\f25d\"}.fa-trash-can-plus:before{content:\"\\e2ac\"}.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before{content:\"\\f2bb\"}.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before{content:\"\\f516\"}.fa-globe-snow:before{content:\"\\f7a3\"}.fa-subscript:before{content:\"\\f12c\"}.fa-diamond-turn-right:before,.fa-directions:before{content:\"\\f5eb\"}.fa-integral:before{content:\"\\f667\"}.fa-burst:before{content:\"\\e4dc\"}.fa-house-laptop:before,.fa-laptop-house:before{content:\"\\e066\"}.fa-face-tired:before,.fa-tired:before{content:\"\\f5c8\"}.fa-money-bills:before{content:\"\\e1f3\"}.fa-blinds-raised:before{content:\"\\f8fd\"}.fa-smog:before{content:\"\\f75f\"}.fa-ufo-beam:before{content:\"\\e048\"}.fa-caret-circle-up:before,.fa-circle-caret-up:before{content:\"\\f331\"}.fa-user-vneck-hair-long:before{content:\"\\e463\"}.fa-square-a-lock:before{content:\"\\e44d\"}.fa-crutch:before{content:\"\\f7f7\"}.fa-gas-pump-slash:before{content:\"\\f5f4\"}.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-palette:before{content:\"\\f53f\"}.fa-transporter-4:before{content:\"\\e2a5\"}.fa-objects-align-right:before{content:\"\\e3bf\"}.fa-arrows-turn-right:before{content:\"\\e4c0\"}.fa-vest:before{content:\"\\e085\"}.fa-pig:before{content:\"\\f706\"}.fa-inbox-full:before{content:\"\\e1ba\"}.fa-circle-envelope:before,.fa-envelope-circle:before{content:\"\\e10c\"}.fa-construction:before,.fa-triangle-person-digging:before{content:\"\\f85d\"}.fa-ferry:before{content:\"\\e4ea\"}.fa-bullseye-arrow:before{content:\"\\f648\"}.fa-arrows-down-to-people:before{content:\"\\e4b9\"}.fa-seedling:before,.fa-sprout:before{content:\"\\f4d8\"}.fa-clock-seven:before{content:\"\\e350\"}.fa-arrows-alt-h:before,.fa-left-right:before{content:\"\\f337\"}.fa-boxes-packing:before{content:\"\\e4c7\"}.fa-arrow-circle-left:before,.fa-circle-arrow-left:before{content:\"\\f0a8\"}.fa-flashlight:before{content:\"\\f8b8\"}.fa-group-arrows-rotate:before{content:\"\\e4f6\"}.fa-bowl-food:before{content:\"\\e4c6\"}.fa-square-9:before{content:\"\\e25e\"}.fa-candy-cane:before{content:\"\\f786\"}.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before{content:\"\\f160\"}.fa-dollar-square:before,.fa-square-dollar:before,.fa-usd-square:before{content:\"\\f2e9\"}.fa-hand-holding-seedling:before{content:\"\\f4bf\"}.fa-comment-alt-check:before,.fa-message-check:before{content:\"\\f4a2\"}.fa-cloud-bolt:before,.fa-thunderstorm:before{content:\"\\f76c\"}.fa-remove-format:before,.fa-text-slash:before{content:\"\\f87d\"}.fa-watch:before{content:\"\\f2e1\"}.fa-circle-down-left:before{content:\"\\e107\"}.fa-text:before{content:\"\\f893\"}.fa-projector:before{content:\"\\f8d6\"}.fa-face-smile-wink:before,.fa-smile-wink:before{content:\"\\f4da\"}.fa-tombstone-alt:before,.fa-tombstone-blank:before{content:\"\\f721\"}.fa-chess-king-alt:before,.fa-chess-king-piece:before{content:\"\\f440\"}.fa-circle-6:before{content:\"\\e0f3\"}.fa-arrow-alt-left:before,.fa-left:before{content:\"\\f355\"}.fa-file-word:before{content:\"\\f1c2\"}.fa-file-powerpoint:before{content:\"\\f1c4\"}.fa-arrow-alt-square-down:before,.fa-square-down:before{content:\"\\f350\"}.fa-objects-align-center-vertical:before{content:\"\\e3bd\"}.fa-arrows-h:before,.fa-arrows-left-right:before{content:\"\\f07e\"}.fa-house-lock:before{content:\"\\e510\"}.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before{content:\"\\f0ed\"}.fa-wreath:before{content:\"\\f7e2\"}.fa-children:before{content:\"\\e4e1\"}.fa-meter-droplet:before{content:\"\\e1ea\"}.fa-blackboard:before,.fa-chalkboard:before{content:\"\\f51b\"}.fa-user-alt-slash:before,.fa-user-large-slash:before{content:\"\\f4fa\"}.fa-signal-4:before,.fa-signal-strong:before{content:\"\\f68f\"}.fa-lollipop:before,.fa-lollypop:before{content:\"\\e424\"}.fa-list-tree:before{content:\"\\e1d2\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-draw-circle:before{content:\"\\f5ed\"}.fa-cat-space:before{content:\"\\e001\"}.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before{content:\"\\e05f\"}.fa-rabbit-fast:before,.fa-rabbit-running:before{content:\"\\f709\"}.fa-memo-pad:before{content:\"\\e1da\"}.fa-mattress-pillow:before{content:\"\\e525\"}.fa-alarm-plus:before{content:\"\\f844\"}.fa-alicorn:before{content:\"\\f6b0\"}.fa-comment-question:before{content:\"\\e14b\"}.fa-gingerbread-man:before{content:\"\\f79d\"}.fa-guarani-sign:before{content:\"\\e19a\"}.fa-burger-fries:before{content:\"\\e0cd\"}.fa-mug-tea:before{content:\"\\f875\"}.fa-border-top:before{content:\"\\f855\"}.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before{content:\"\\f021\"}.fa-book-circle:before,.fa-circle-book-open:before{content:\"\\e0ff\"}.fa-arrows-to-dotted-line:before{content:\"\\e0a6\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-garage-open:before{content:\"\\e00b\"}.fa-shelves-empty:before{content:\"\\e246\"}.fa-cruzeiro-sign:before{content:\"\\e152\"}.fa-watch-apple:before{content:\"\\e2cb\"}.fa-watch-calculator:before{content:\"\\f8f0\"}.fa-list-dropdown:before{content:\"\\e1cf\"}.fa-cabinet-filing:before{content:\"\\f64b\"}.fa-burger-soda:before{content:\"\\f858\"}.fa-arrow-square-up:before,.fa-square-arrow-up:before{content:\"\\f33c\"}.fa-greater-than-equal:before{content:\"\\f532\"}.fa-pallet-box:before{content:\"\\e208\"}.fa-face-confounded:before{content:\"\\e36c\"}.fa-shield-alt:before,.fa-shield-halved:before{content:\"\\f3ed\"}.fa-truck-plow:before{content:\"\\f7de\"}.fa-atlas:before,.fa-book-atlas:before{content:\"\\f558\"}.fa-virus:before{content:\"\\e074\"}.fa-comment-middle-top:before{content:\"\\e14a\"}.fa-envelope-circle-check:before{content:\"\\e4e8\"}.fa-layer-group:before{content:\"\\f5fd\"}.fa-restroom-simple:before{content:\"\\e23a\"}.fa-arrows-to-dot:before{content:\"\\e4be\"}.fa-border-outer:before{content:\"\\f851\"}.fa-hashtag-lock:before{content:\"\\e415\"}.fa-clock-two-thirty:before{content:\"\\e35b\"}.fa-archway:before{content:\"\\f557\"}.fa-heart-circle-check:before{content:\"\\e4fd\"}.fa-house-chimney-crack:before,.fa-house-damage:before{content:\"\\f6f1\"}.fa-file-archive:before,.fa-file-zipper:before{content:\"\\f1c6\"}.fa-heart-half:before{content:\"\\e1ab\"}.fa-comment-check:before{content:\"\\f4ac\"}.fa-square:before{content:\"\\f0c8\"}.fa-memo:before{content:\"\\e1d8\"}.fa-glass-martini:before,.fa-martini-glass-empty:before{content:\"\\f000\"}.fa-couch:before{content:\"\\f4b8\"}.fa-cedi-sign:before{content:\"\\e0df\"}.fa-italic:before{content:\"\\f033\"}.fa-glass-citrus:before{content:\"\\f869\"}.fa-calendar-lines-pen:before{content:\"\\e472\"}.fa-church:before{content:\"\\f51d\"}.fa-person-snowmobiling:before,.fa-snowmobile:before{content:\"\\f7d1\"}.fa-face-hushed:before{content:\"\\e37b\"}.fa-comments-dollar:before{content:\"\\f653\"}.fa-link-simple-slash:before{content:\"\\e1ce\"}.fa-democrat:before{content:\"\\f747\"}.fa-face-confused:before{content:\"\\e36d\"}.fa-pinball:before{content:\"\\e229\"}.fa-z:before{content:\"\\5a\"}.fa-person-skiing:before,.fa-skiing:before{content:\"\\f7c9\"}.fa-deer:before{content:\"\\f78e\"}.fa-input-pipe:before{content:\"\\e1be\"}.fa-road-lock:before{content:\"\\e567\"}.fa-a:before{content:\"\\41\"}.fa-bookmark-slash:before{content:\"\\e0c2\"}.fa-temperature-arrow-down:before,.fa-temperature-down:before{content:\"\\e03f\"}.fa-mace:before{content:\"\\f6f8\"}.fa-feather-alt:before,.fa-feather-pointed:before{content:\"\\f56b\"}.fa-sausage:before{content:\"\\f820\"}.fa-trash-can-clock:before{content:\"\\e2aa\"}.fa-p:before{content:\"\\50\"}.fa-snowflake:before{content:\"\\f2dc\"}.fa-stomach:before{content:\"\\f623\"}.fa-newspaper:before{content:\"\\f1ea\"}.fa-ad:before,.fa-rectangle-ad:before{content:\"\\f641\"}.fa-guitar-electric:before{content:\"\\f8be\"}.fa-arrow-turn-down-right:before{content:\"\\e3d6\"}.fa-moon-cloud:before{content:\"\\f754\"}.fa-bread-slice-butter:before{content:\"\\e3e1\"}.fa-arrow-circle-right:before,.fa-circle-arrow-right:before{content:\"\\f0a9\"}.fa-user-group-crown:before,.fa-users-crown:before{content:\"\\f6a5\"}.fa-circle-i:before{content:\"\\e111\"}.fa-toilet-paper-check:before{content:\"\\e5b2\"}.fa-filter-circle-xmark:before{content:\"\\e17b\"}.fa-locust:before{content:\"\\e520\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before{content:\"\\f0cb\"}.fa-chart-waterfall:before{content:\"\\e0eb\"}.fa-face-party:before{content:\"\\e383\"}.fa-kidneys:before{content:\"\\f5fb\"}.fa-wifi-exclamation:before{content:\"\\e2cf\"}.fa-chart-network:before{content:\"\\f78a\"}.fa-person-dress-burst:before{content:\"\\e544\"}.fa-dice-d4:before{content:\"\\f6d0\"}.fa-money-check-alt:before,.fa-money-check-dollar:before{content:\"\\f53d\"}.fa-vector-square:before{content:\"\\f5cb\"}.fa-bread-slice:before{content:\"\\f7ec\"}.fa-language:before{content:\"\\f1ab\"}.fa-wheat-awn-slash:before{content:\"\\e338\"}.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before{content:\"\\f598\"}.fa-dagger:before{content:\"\\f6cb\"}.fa-podium:before{content:\"\\f680\"}.fa-memo-circle-check:before{content:\"\\e1d9\"}.fa-route-highway:before{content:\"\\f61a\"}.fa-arrow-alt-to-bottom:before,.fa-down-to-line:before{content:\"\\f34a\"}.fa-filter:before{content:\"\\f0b0\"}.fa-square-g:before{content:\"\\e271\"}.fa-circle-phone:before,.fa-phone-circle:before{content:\"\\e11b\"}.fa-clipboard-prescription:before{content:\"\\f5e8\"}.fa-user-nurse-hair:before{content:\"\\e45d\"}.fa-question:before{content:\"\\3f\"}.fa-file-signature:before{content:\"\\f573\"}.fa-toggle-large-on:before{content:\"\\e5b1\"}.fa-arrows-alt:before,.fa-up-down-left-right:before{content:\"\\f0b2\"}.fa-dryer-alt:before,.fa-dryer-heat:before{content:\"\\f862\"}.fa-house-chimney-user:before{content:\"\\e065\"}.fa-hand-holding-heart:before{content:\"\\f4be\"}.fa-arrow-up-small-big:before,.fa-sort-size-up-alt:before{content:\"\\f88f\"}.fa-train-track:before{content:\"\\e453\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-money-check:before{content:\"\\f53c\"}.fa-star-half-alt:before,.fa-star-half-stroke:before{content:\"\\f5c0\"}.fa-file-exclamation:before{content:\"\\f31a\"}.fa-code:before{content:\"\\f121\"}.fa-glass-whiskey:before,.fa-whiskey-glass:before{content:\"\\f7a0\"}.fa-moon-stars:before{content:\"\\f755\"}.fa-building-circle-exclamation:before{content:\"\\e4d3\"}.fa-clothes-hanger:before{content:\"\\e136\"}.fa-mobile-iphone:before,.fa-mobile-notch:before{content:\"\\e1ee\"}.fa-magnifying-glass-chart:before{content:\"\\e522\"}.fa-arrow-up-right-from-square:before,.fa-external-link:before{content:\"\\f08e\"}.fa-cubes-stacked:before{content:\"\\e4e6\"}.fa-images-user:before{content:\"\\e1b9\"}.fa-krw:before,.fa-won-sign:before,.fa-won:before{content:\"\\f159\"}.fa-image-polaroid-user:before{content:\"\\e1b6\"}.fa-virus-covid:before{content:\"\\e4a8\"}.fa-square-ellipsis:before{content:\"\\e26e\"}.fa-pie:before{content:\"\\f705\"}.fa-chess-knight-alt:before,.fa-chess-knight-piece:before{content:\"\\f442\"}.fa-austral-sign:before{content:\"\\e0a9\"}.fa-cloud-plus:before{content:\"\\e35e\"}.fa-f:before{content:\"\\46\"}.fa-leaf:before{content:\"\\f06c\"}.fa-bed-bunk:before{content:\"\\f8f8\"}.fa-road:before{content:\"\\f018\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-person-circle-plus:before{content:\"\\e541\"}.fa-chart-pie:before,.fa-pie-chart:before{content:\"\\f200\"}.fa-bolt-lightning:before{content:\"\\e0b7\"}.fa-clock-eight:before{content:\"\\e345\"}.fa-sack-xmark:before{content:\"\\e56a\"}.fa-file-excel:before{content:\"\\f1c3\"}.fa-file-contract:before{content:\"\\f56c\"}.fa-fish-fins:before{content:\"\\e4f2\"}.fa-circle-q:before{content:\"\\e11e\"}.fa-building-flag:before{content:\"\\e4d5\"}.fa-face-grin-beam:before,.fa-grin-beam:before{content:\"\\f582\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-face-disguise:before{content:\"\\e370\"}.fa-circle-arrow-down-right:before{content:\"\\e0fa\"}.fa-alien-8bit:before,.fa-alien-monster:before{content:\"\\f8f6\"}.fa-hand-point-ribbon:before{content:\"\\e1a6\"}.fa-poop:before{content:\"\\f619\"}.fa-object-exclude:before{content:\"\\e49c\"}.fa-telescope:before{content:\"\\e03e\"}.fa-location-pin:before,.fa-map-marker:before{content:\"\\f041\"}.fa-square-list:before{content:\"\\e489\"}.fa-kaaba:before{content:\"\\f66b\"}.fa-toilet-paper:before{content:\"\\f71e\"}.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before{content:\"\\f807\"}.fa-comment-code:before{content:\"\\e147\"}.fa-sim-cards:before{content:\"\\e251\"}.fa-starship:before{content:\"\\e039\"}.fa-eject:before{content:\"\\f052\"}.fa-arrow-alt-circle-right:before,.fa-circle-right:before{content:\"\\f35a\"}.fa-plane-circle-check:before{content:\"\\e555\"}.fa-seal:before{content:\"\\e241\"}.fa-user-cowboy:before{content:\"\\f8ea\"}.fa-hexagon-vertical-nft:before{content:\"\\e505\"}.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}.fa-bread-loaf:before{content:\"\\f7eb\"}.fa-rings-wedding:before{content:\"\\f81b\"}.fa-object-group:before{content:\"\\f247\"}.fa-french-fries:before{content:\"\\f803\"}.fa-chart-line:before,.fa-line-chart:before{content:\"\\f201\"}.fa-calendar-arrow-down:before,.fa-calendar-download:before{content:\"\\e0d0\"}.fa-send-back:before{content:\"\\f87e\"}.fa-mask-ventilator:before{content:\"\\e524\"}.fa-signature-lock:before{content:\"\\e3ca\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-map-signs:before,.fa-signs-post:before{content:\"\\f277\"}.fa-octagon-plus:before,.fa-plus-octagon:before{content:\"\\f301\"}.fa-cash-register:before{content:\"\\f788\"}.fa-person-circle-question:before{content:\"\\e542\"}.fa-melon-slice:before{content:\"\\e311\"}.fa-space-station-moon:before{content:\"\\e033\"}.fa-comment-alt-smile:before,.fa-message-smile:before{content:\"\\f4aa\"}.fa-cup-straw:before{content:\"\\e363\"}.fa-arrow-alt-from-right:before,.fa-left-from-line:before{content:\"\\f348\"}.fa-h:before{content:\"\\48\"}.fa-basket-shopping-simple:before,.fa-shopping-basket-alt:before{content:\"\\e0af\"}.fa-hands-heart:before,.fa-hands-holding-heart:before{content:\"\\f4c3\"}.fa-clock-nine:before{content:\"\\e34c\"}.fa-tarp:before{content:\"\\e57b\"}.fa-face-sleepy:before{content:\"\\e38e\"}.fa-hand-horns:before{content:\"\\e1a9\"}.fa-screwdriver-wrench:before,.fa-tools:before{content:\"\\f7d9\"}.fa-arrows-to-eye:before{content:\"\\e4bf\"}.fa-circle-three-quarters:before{content:\"\\e125\"}.fa-trophy-alt:before,.fa-trophy-star:before{content:\"\\f2eb\"}.fa-plug-circle-bolt:before{content:\"\\e55b\"}.fa-face-thermometer:before{content:\"\\e39a\"}.fa-shirt-running:before{content:\"\\e3c8\"}.fa-book-circle-arrow-up:before{content:\"\\e0bd\"}.fa-face-nauseated:before{content:\"\\e381\"}.fa-heart:before{content:\"\\f004\"}.fa-file-chart-pie:before{content:\"\\f65a\"}.fa-mars-and-venus:before{content:\"\\f224\"}.fa-home-user:before,.fa-house-user:before{content:\"\\e1b0\"}.fa-circle-arrow-down-left:before{content:\"\\e0f9\"}.fa-dumpster-fire:before{content:\"\\f794\"}.fa-hexagon-minus:before,.fa-minus-hexagon:before{content:\"\\f307\"}.fa-arrow-alt-to-left:before,.fa-left-to-line:before{content:\"\\f34b\"}.fa-house-crack:before{content:\"\\e3b1\"}.fa-paw-alt:before,.fa-paw-simple:before{content:\"\\f701\"}.fa-arrow-left-long-to-line:before{content:\"\\e3d4\"}.fa-brackets-round:before,.fa-parentheses:before{content:\"\\e0c5\"}.fa-cocktail:before,.fa-martini-glass-citrus:before{content:\"\\f561\"}.fa-user-shakespeare:before{content:\"\\e2c2\"}.fa-arrow-right-to-arc:before{content:\"\\e4b2\"}.fa-face-surprise:before,.fa-surprise:before{content:\"\\f5c2\"}.fa-bottle-water:before{content:\"\\e4c5\"}.fa-circle-pause:before,.fa-pause-circle:before{content:\"\\f28b\"}.fa-gauge-circle-plus:before{content:\"\\e498\"}.fa-folders:before{content:\"\\f660\"}.fa-angel:before{content:\"\\f779\"}.fa-value-absolute:before{content:\"\\f6a6\"}.fa-rabbit:before{content:\"\\f708\"}.fa-toilet-paper-slash:before{content:\"\\e072\"}.fa-apple-alt:before,.fa-apple-whole:before{content:\"\\f5d1\"}.fa-kitchen-set:before{content:\"\\e51a\"}.fa-lock-alt:before,.fa-lock-keyhole:before{content:\"\\f30d\"}.fa-r:before{content:\"\\52\"}.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-info-square:before,.fa-square-info:before{content:\"\\f30f\"}.fa-wifi-slash:before{content:\"\\f6ac\"}.fa-toilet-paper-xmark:before{content:\"\\e5b3\"}.fa-hands-holding-dollar:before,.fa-hands-usd:before{content:\"\\f4c5\"}.fa-cube:before{content:\"\\f1b2\"}.fa-arrow-down-triangle-square:before,.fa-sort-shapes-down:before{content:\"\\f888\"}.fa-bitcoin-sign:before{content:\"\\e0b4\"}.fa-shutters:before{content:\"\\e449\"}.fa-shield-dog:before{content:\"\\e573\"}.fa-solar-panel:before{content:\"\\f5ba\"}.fa-lock-open:before{content:\"\\f3c1\"}.fa-table-tree:before{content:\"\\e293\"}.fa-house-chimney-heart:before{content:\"\\e1b2\"}.fa-tally-3:before{content:\"\\e296\"}.fa-elevator:before{content:\"\\e16d\"}.fa-money-bill-transfer:before{content:\"\\e528\"}.fa-money-bill-trend-up:before{content:\"\\e529\"}.fa-house-flood-water-circle-arrow-right:before{content:\"\\e50f\"}.fa-poll-h:before,.fa-square-poll-horizontal:before{content:\"\\f682\"}.fa-circle:before{content:\"\\f111\"}.fa-cart-circle-exclamation:before{content:\"\\e3f2\"}.fa-sword:before{content:\"\\f71c\"}.fa-backward-fast:before,.fa-fast-backward:before{content:\"\\f049\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-user-astronaut:before{content:\"\\f4fb\"}.fa-plane-slash:before{content:\"\\e069\"}.fa-circle-dashed:before{content:\"\\e105\"}.fa-trademark:before{content:\"\\f25c\"}.fa-basketball-ball:before,.fa-basketball:before{content:\"\\f434\"}.fa-fork-knife:before,.fa-utensils-alt:before{content:\"\\f2e6\"}.fa-satellite-dish:before{content:\"\\f7c0\"}.fa-badge-check:before{content:\"\\f336\"}.fa-arrow-alt-circle-up:before,.fa-circle-up:before{content:\"\\f35b\"}.fa-slider:before{content:\"\\e252\"}.fa-mobile-alt:before,.fa-mobile-screen-button:before{content:\"\\f3cd\"}.fa-clock-one-thirty:before{content:\"\\e34f\"}.fa-inbox-arrow-up:before,.fa-inbox-out:before{content:\"\\f311\"}.fa-cloud-slash:before{content:\"\\e137\"}.fa-volume-high:before,.fa-volume-up:before{content:\"\\f028\"}.fa-users-rays:before{content:\"\\e593\"}.fa-wallet:before{content:\"\\f555\"}.fa-octagon-check:before{content:\"\\e426\"}.fa-flatbread-stuffed:before{content:\"\\e40c\"}.fa-clipboard-check:before{content:\"\\f46c\"}.fa-cart-circle-plus:before{content:\"\\e3f3\"}.fa-shipping-timed:before,.fa-truck-clock:before{content:\"\\f48c\"}.fa-pool-8-ball:before{content:\"\\e3c5\"}.fa-file-audio:before{content:\"\\f1c7\"}.fa-turn-down-left:before{content:\"\\e331\"}.fa-lock-hashtag:before{content:\"\\e423\"}.fa-chart-radar:before{content:\"\\e0e7\"}.fa-staff:before{content:\"\\f71b\"}.fa-burger:before,.fa-hamburger:before{content:\"\\f805\"}.fa-utility-pole:before{content:\"\\e2c3\"}.fa-transporter-6:before{content:\"\\e2a7\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-bugs:before{content:\"\\e4d0\"}.fa-vector-polygon:before{content:\"\\e2c7\"}.fa-diagram-nested:before{content:\"\\e157\"}.fa-rupee-sign:before,.fa-rupee:before{content:\"\\f156\"}.fa-file-image:before{content:\"\\f1c5\"}.fa-circle-question:before,.fa-question-circle:before{content:\"\\f059\"}.fa-image-user:before{content:\"\\e1b8\"}.fa-plane-departure:before{content:\"\\f5b0\"}.fa-handshake-slash:before{content:\"\\e060\"}.fa-book-bookmark:before{content:\"\\e0bb\"}.fa-border-center-h:before{content:\"\\f89c\"}.fa-can-food:before{content:\"\\e3e6\"}.fa-typewriter:before{content:\"\\f8e7\"}.fa-arrow-right-from-arc:before{content:\"\\e4b1\"}.fa-circle-k:before{content:\"\\e113\"}.fa-face-hand-over-mouth:before{content:\"\\e378\"}.fa-popcorn:before{content:\"\\f819\"}.fa-house-flood:before,.fa-house-water:before{content:\"\\f74f\"}.fa-object-subtract:before{content:\"\\e49e\"}.fa-code-branch:before{content:\"\\f126\"}.fa-warehouse-alt:before,.fa-warehouse-full:before{content:\"\\f495\"}.fa-hat-cowboy:before{content:\"\\f8c0\"}.fa-bridge:before{content:\"\\e4c8\"}.fa-phone-alt:before,.fa-phone-flip:before{content:\"\\f879\"}.fa-arrow-down-from-dotted-line:before{content:\"\\e090\"}.fa-square-quarters:before{content:\"\\e44e\"}.fa-truck-front:before{content:\"\\e2b7\"}.fa-cat:before{content:\"\\f6be\"}.fa-trash-xmark:before{content:\"\\e2b4\"}.fa-caret-circle-left:before,.fa-circle-caret-left:before{content:\"\\f32e\"}.fa-files:before{content:\"\\e178\"}.fa-anchor-circle-exclamation:before{content:\"\\e4ab\"}.fa-face-clouds:before{content:\"\\e47d\"}.fa-user-crown:before{content:\"\\f6a4\"}.fa-truck-field:before{content:\"\\e58d\"}.fa-route:before{content:\"\\f4d7\"}.fa-cart-circle-check:before{content:\"\\e3f1\"}.fa-clipboard-question:before{content:\"\\e4e3\"}.fa-panorama:before{content:\"\\e209\"}.fa-comment-medical:before{content:\"\\f7f5\"}.fa-teeth-open:before{content:\"\\f62f\"}.fa-user-tie-hair-long:before{content:\"\\e460\"}.fa-file-circle-minus:before{content:\"\\e4ed\"}.fa-head-side-medical:before{content:\"\\f809\"}.fa-tags:before{content:\"\\f02c\"}.fa-wine-glass:before{content:\"\\f4e3\"}.fa-fast-forward:before,.fa-forward-fast:before{content:\"\\f050\"}.fa-face-meh-blank:before,.fa-meh-blank:before{content:\"\\f5a4\"}.fa-user-robot:before{content:\"\\e04b\"}.fa-parking:before,.fa-square-parking:before{content:\"\\f540\"}.fa-card-diamond:before{content:\"\\e3ea\"}.fa-face-zipper:before{content:\"\\e3a5\"}.fa-face-raised-eyebrow:before{content:\"\\e388\"}.fa-house-signal:before{content:\"\\e012\"}.fa-chevron-square-up:before,.fa-square-chevron-up:before{content:\"\\f32c\"}.fa-bars-progress:before,.fa-tasks-alt:before{content:\"\\f828\"}.fa-faucet-drip:before{content:\"\\e006\"}.fa-arrows-to-line:before{content:\"\\e0a7\"}.fa-dolphin:before{content:\"\\e168\"}.fa-arrow-up-right:before{content:\"\\e09f\"}.fa-circle-r:before{content:\"\\e120\"}.fa-cart-flatbed:before,.fa-dolly-flatbed:before{content:\"\\f474\"}.fa-ban-smoking:before,.fa-smoking-ban:before{content:\"\\f54d\"}.fa-circle-sort-up:before,.fa-sort-circle-up:before{content:\"\\e032\"}.fa-terminal:before{content:\"\\f120\"}.fa-mobile-button:before{content:\"\\f10b\"}.fa-house-medical-flag:before{content:\"\\e514\"}.fa-basket-shopping:before,.fa-shopping-basket:before{content:\"\\f291\"}.fa-tape:before{content:\"\\f4db\"}.fa-chestnut:before{content:\"\\e3f6\"}.fa-bus-alt:before,.fa-bus-simple:before{content:\"\\f55e\"}.fa-eye:before{content:\"\\f06e\"}.fa-face-sad-cry:before,.fa-sad-cry:before{content:\"\\f5b3\"}.fa-heat:before{content:\"\\e00c\"}.fa-ticket-airline:before{content:\"\\e29a\"}.fa-boot-heeled:before{content:\"\\e33f\"}.fa-arrows-minimize:before,.fa-compress-arrows:before{content:\"\\e0a5\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-person-military-to-person:before{content:\"\\e54c\"}.fa-file-shield:before{content:\"\\e4f0\"}.fa-hexagon:before{content:\"\\f312\"}.fa-manhole:before{content:\"\\e1d6\"}.fa-user-slash:before{content:\"\\f506\"}.fa-pen:before{content:\"\\f304\"}.fa-tower-observation:before{content:\"\\e586\"}.fa-floppy-disks:before{content:\"\\e183\"}.fa-toilet-paper-blank-under:before,.fa-toilet-paper-reverse-alt:before{content:\"\\e29f\"}.fa-file-code:before{content:\"\\f1c9\"}.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before{content:\"\\f012\"}.fa-pump:before{content:\"\\e442\"}.fa-bus:before{content:\"\\f207\"}.fa-heart-circle-xmark:before{content:\"\\e501\"}.fa-arrow-up-left-from-circle:before{content:\"\\e09e\"}.fa-home-lg:before,.fa-house-chimney:before{content:\"\\e3af\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-dryer:before{content:\"\\f861\"}.fa-face-frown:before,.fa-frown:before{content:\"\\f119\"}.fa-chess-bishop-alt:before,.fa-chess-bishop-piece:before{content:\"\\f43b\"}.fa-shirt-tank-top:before{content:\"\\e3c9\"}.fa-diploma:before,.fa-scroll-ribbon:before{content:\"\\f5ea\"}.fa-screencast:before{content:\"\\e23e\"}.fa-walker:before{content:\"\\f831\"}.fa-prescription:before{content:\"\\f5b1\"}.fa-shop:before,.fa-store-alt:before{content:\"\\f54f\"}.fa-floppy-disk:before,.fa-save:before{content:\"\\f0c7\"}.fa-vihara:before{content:\"\\f6a7\"}.fa-face-kiss-closed-eyes:before{content:\"\\e37d\"}.fa-balance-scale-left:before,.fa-scale-unbalanced:before{content:\"\\f515\"}.fa-file-user:before{content:\"\\f65c\"}.fa-user-police-tie:before{content:\"\\e334\"}.fa-face-tongue-money:before{content:\"\\e39d\"}.fa-tennis-ball:before{content:\"\\f45e\"}.fa-square-l:before{content:\"\\e275\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-calendar-arrow-up:before,.fa-calendar-upload:before{content:\"\\e0d1\"}.fa-comment-dots:before,.fa-commenting:before{content:\"\\f4ad\"}.fa-plant-wilt:before{content:\"\\e5aa\"}.fa-scarf:before{content:\"\\f7c1\"}.fa-album-circle-plus:before{content:\"\\e48c\"}.fa-user-nurse-hair-long:before{content:\"\\e45e\"}.fa-diamond:before{content:\"\\f219\"}.fa-arrow-alt-square-left:before,.fa-square-left:before{content:\"\\f351\"}.fa-face-grin-squint:before,.fa-grin-squint:before{content:\"\\f585\"}.fa-circle-ellipsis-vertical:before{content:\"\\e10b\"}.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before{content:\"\\f4c0\"}.fa-grid-dividers:before{content:\"\\e3ad\"}.fa-bacterium:before{content:\"\\e05a\"}.fa-hand-pointer:before{content:\"\\f25a\"}.fa-drum-steelpan:before{content:\"\\f56a\"}.fa-hand-scissors:before{content:\"\\f257\"}.fa-hands-praying:before,.fa-praying-hands:before{content:\"\\f684\"}.fa-face-pensive:before{content:\"\\e384\"}.fa-user-music:before{content:\"\\f8eb\"}.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before{content:\"\\f01e\"}.fa-comments-alt-dollar:before,.fa-messages-dollar:before{content:\"\\f652\"}.fa-sensor-on:before{content:\"\\e02b\"}.fa-balloon:before{content:\"\\e2e3\"}.fa-biohazard:before{content:\"\\f780\"}.fa-chess-queen-alt:before,.fa-chess-queen-piece:before{content:\"\\f446\"}.fa-location-crosshairs:before,.fa-location:before{content:\"\\f601\"}.fa-mars-double:before{content:\"\\f227\"}.fa-house-leave:before,.fa-house-person-depart:before,.fa-house-person-leave:before{content:\"\\e00f\"}.fa-ruler-triangle:before{content:\"\\f61c\"}.fa-card-club:before{content:\"\\e3e9\"}.fa-child-dress:before{content:\"\\e59c\"}.fa-users-between-lines:before{content:\"\\e591\"}.fa-lungs-virus:before{content:\"\\e067\"}.fa-spinner-third:before{content:\"\\f3f4\"}.fa-face-grin-tears:before,.fa-grin-tears:before{content:\"\\f588\"}.fa-phone:before{content:\"\\f095\"}.fa-computer-mouse-scrollwheel:before,.fa-mouse-alt:before{content:\"\\f8cd\"}.fa-calendar-times:before,.fa-calendar-xmark:before{content:\"\\f273\"}.fa-child-reaching:before{content:\"\\e59d\"}.fa-table-layout:before{content:\"\\e290\"}.fa-narwhal:before{content:\"\\f6fe\"}.fa-ramp-loading:before{content:\"\\f4d4\"}.fa-calendar-circle-plus:before{content:\"\\e470\"}.fa-toothbrush:before{content:\"\\f635\"}.fa-border-inner:before{content:\"\\f84e\"}.fa-paw-claws:before{content:\"\\f702\"}.fa-kiwi-fruit:before{content:\"\\e30c\"}.fa-traffic-light-slow:before{content:\"\\f639\"}.fa-rectangle-code:before{content:\"\\e322\"}.fa-head-side-virus:before{content:\"\\e064\"}.fa-keyboard-brightness:before{content:\"\\e1c0\"}.fa-books-medical:before{content:\"\\f7e8\"}.fa-lightbulb-slash:before{content:\"\\f673\"}.fa-home-blank:before,.fa-house-blank:before{content:\"\\e487\"}.fa-square-5:before{content:\"\\e25a\"}.fa-heart-square:before,.fa-square-heart:before{content:\"\\f4c8\"}.fa-puzzle:before{content:\"\\e443\"}.fa-user-cog:before,.fa-user-gear:before{content:\"\\f4fe\"}.fa-pipe-circle-check:before{content:\"\\e436\"}.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before{content:\"\\f163\"}.fa-octagon-exclamation:before{content:\"\\e204\"}.fa-dial-low:before{content:\"\\e15d\"}.fa-door-closed:before{content:\"\\f52a\"}.fa-laptop-mobile:before,.fa-phone-laptop:before{content:\"\\f87a\"}.fa-conveyor-belt-alt:before,.fa-conveyor-belt-boxes:before{content:\"\\f46f\"}.fa-shield-virus:before{content:\"\\e06c\"}.fa-starfighter-alt-advanced:before,.fa-starfighter-twin-ion-engine-advanced:before{content:\"\\e28e\"}.fa-dice-six:before{content:\"\\f526\"}.fa-starfighter-alt:before,.fa-starfighter-twin-ion-engine:before{content:\"\\e038\"}.fa-rocket-launch:before{content:\"\\e027\"}.fa-mosquito-net:before{content:\"\\e52c\"}.fa-vent-damper:before{content:\"\\e465\"}.fa-bridge-water:before{content:\"\\e4ce\"}.fa-ban-bug:before,.fa-debug:before{content:\"\\f7f9\"}.fa-person-booth:before{content:\"\\f756\"}.fa-text-width:before{content:\"\\f035\"}.fa-garage-car:before{content:\"\\e00a\"}.fa-square-kanban:before{content:\"\\e488\"}.fa-hat-wizard:before{content:\"\\f6e8\"}.fa-pen-fancy:before{content:\"\\f5ac\"}.fa-coffee-pot:before{content:\"\\e002\"}.fa-mouse-field:before{content:\"\\e5a8\"}.fa-digging:before,.fa-person-digging:before{content:\"\\f85e\"}.fa-shower-alt:before,.fa-shower-down:before{content:\"\\e24d\"}.fa-box-circle-check:before{content:\"\\e0c4\"}.fa-brightness:before{content:\"\\e0c9\"}.fa-car-side-bolt:before{content:\"\\e344\"}.fa-ornament:before{content:\"\\f7b8\"}.fa-phone-arrow-down-left:before,.fa-phone-arrow-down:before,.fa-phone-incoming:before{content:\"\\e223\"}.fa-cloud-word:before{content:\"\\e138\"}.fa-hand-fingers-crossed:before{content:\"\\e1a3\"}.fa-trash:before{content:\"\\f1f8\"}.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before{content:\"\\f629\"}.fa-arrow-down-small-big:before,.fa-sort-size-down-alt:before{content:\"\\f88d\"}.fa-book-medical:before{content:\"\\f7e6\"}.fa-face-melting:before{content:\"\\e483\"}.fa-poo:before{content:\"\\f2fe\"}.fa-pen-alt-slash:before,.fa-pen-clip-slash:before{content:\"\\e20f\"}.fa-quote-right-alt:before,.fa-quote-right:before{content:\"\\f10e\"}.fa-scroll-old:before{content:\"\\f70f\"}.fa-guitars:before{content:\"\\f8bf\"}.fa-phone-xmark:before{content:\"\\e227\"}.fa-hose:before{content:\"\\e419\"}.fa-clock-six:before{content:\"\\e352\"}.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before{content:\"\\f553\"}.fa-square-r:before{content:\"\\e27c\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-envelope-open-dollar:before{content:\"\\f657\"}.fa-divide:before{content:\"\\f529\"}.fa-sun-cloud:before{content:\"\\f763\"}.fa-lamp-floor:before{content:\"\\e015\"}.fa-square-7:before{content:\"\\e25c\"}.fa-tenge-sign:before,.fa-tenge:before{content:\"\\f7d7\"}.fa-headphones:before{content:\"\\f025\"}.fa-hands-holding:before{content:\"\\f4c2\"}.fa-campfire:before{content:\"\\f6ba\"}.fa-circle-ampersand:before{content:\"\\e0f8\"}.fa-snowflakes:before{content:\"\\f7cf\"}.fa-hands-clapping:before{content:\"\\e1a8\"}.fa-republican:before{content:\"\\f75e\"}.fa-leaf-maple:before{content:\"\\f6f6\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-person-circle-xmark:before{content:\"\\e543\"}.fa-ruler:before{content:\"\\f545\"}.fa-cup-straw-swoosh:before{content:\"\\e364\"}.fa-temperature-hot:before,.fa-temperature-sun:before{content:\"\\f76a\"}.fa-align-left:before{content:\"\\f036\"}.fa-dice-d6:before{content:\"\\f6d1\"}.fa-restroom:before{content:\"\\f7bd\"}.fa-high-definition:before,.fa-rectangle-hd:before{content:\"\\e1ae\"}.fa-j:before{content:\"\\4a\"}.fa-galaxy:before{content:\"\\e008\"}.fa-users-viewfinder:before{content:\"\\e595\"}.fa-file-video:before{content:\"\\f1c8\"}.fa-cherries:before{content:\"\\e0ec\"}.fa-external-link-alt:before,.fa-up-right-from-square:before{content:\"\\f35d\"}.fa-circle-sort:before,.fa-sort-circle:before{content:\"\\e030\"}.fa-table-cells:before,.fa-th:before{content:\"\\f00a\"}.fa-file-pdf:before{content:\"\\f1c1\"}.fa-siren:before{content:\"\\e02d\"}.fa-arrow-up-to-dotted-line:before{content:\"\\e0a1\"}.fa-image-landscape:before,.fa-landscape:before{content:\"\\e1b5\"}.fa-tank-water:before{content:\"\\e452\"}.fa-curling-stone:before,.fa-curling:before{content:\"\\f44a\"}.fa-gamepad-alt:before,.fa-gamepad-modern:before{content:\"\\e5a2\"}.fa-messages-question:before{content:\"\\e1e7\"}.fa-bible:before,.fa-book-bible:before{content:\"\\f647\"}.fa-o:before{content:\"\\4f\"}.fa-medkit:before,.fa-suitcase-medical:before{content:\"\\f0fa\"}.fa-briefcase-arrow-right:before{content:\"\\e2f2\"}.fa-expand-wide:before{content:\"\\f320\"}.fa-clock-eleven-thirty:before{content:\"\\e348\"}.fa-rv:before{content:\"\\f7be\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-otter:before{content:\"\\f700\"}.fa-dreidel:before{content:\"\\f792\"}.fa-female:before,.fa-person-dress:before{content:\"\\f182\"}.fa-comment-dollar:before{content:\"\\f651\"}.fa-briefcase-clock:before,.fa-business-time:before{content:\"\\f64a\"}.fa-flower-tulip:before{content:\"\\f801\"}.fa-people-pants-simple:before{content:\"\\e21a\"}.fa-cloud-drizzle:before{content:\"\\f738\"}.fa-table-cells-large:before,.fa-th-large:before{content:\"\\f009\"}.fa-book-tanakh:before,.fa-tanakh:before{content:\"\\f827\"}.fa-solar-system:before{content:\"\\e02f\"}.fa-seal-question:before{content:\"\\e243\"}.fa-phone-volume:before,.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-disc-drive:before{content:\"\\f8b5\"}.fa-hat-cowboy-side:before{content:\"\\f8c1\"}.fa-rows:before,.fa-table-rows:before{content:\"\\e292\"}.fa-location-exclamation:before,.fa-map-marker-exclamation:before{content:\"\\f608\"}.fa-face-fearful:before{content:\"\\e375\"}.fa-clipboard-user:before{content:\"\\f7f3\"}.fa-bus-school:before{content:\"\\f5dd\"}.fa-film-slash:before{content:\"\\e179\"}.fa-square-arrow-down-right:before{content:\"\\e262\"}.fa-book-sparkles:before,.fa-book-spells:before{content:\"\\f6b8\"}.fa-washer:before,.fa-washing-machine:before{content:\"\\f898\"}.fa-child:before{content:\"\\f1ae\"}.fa-lira-sign:before{content:\"\\f195\"}.fa-user-visor:before{content:\"\\e04c\"}.fa-file-plus-minus:before{content:\"\\e177\"}.fa-chess-clock-alt:before,.fa-chess-clock-flip:before{content:\"\\f43e\"}.fa-satellite:before{content:\"\\f7bf\"}.fa-plane-lock:before{content:\"\\e558\"}.fa-steering-wheel:before{content:\"\\f622\"}.fa-tag:before{content:\"\\f02b\"}.fa-stretcher:before{content:\"\\f825\"}.fa-book-law:before,.fa-book-section:before{content:\"\\e0c1\"}.fa-inboxes:before{content:\"\\e1bb\"}.fa-coffee-bean:before{content:\"\\e13e\"}.fa-brackets-curly:before{content:\"\\f7ea\"}.fa-ellipsis-stroke-vertical:before,.fa-ellipsis-v-alt:before{content:\"\\f39c\"}.fa-comment:before{content:\"\\f075\"}.fa-square-1:before{content:\"\\e256\"}.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before{content:\"\\f1fd\"}.fa-head-side:before{content:\"\\f6e9\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-dolly-empty:before{content:\"\\f473\"}.fa-face-tissue:before{content:\"\\e39c\"}.fa-angle-double-up:before,.fa-angles-up:before{content:\"\\f102\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-chart-line-down:before{content:\"\\f64d\"}.fa-arrow-right-to-city:before{content:\"\\e4b3\"}.fa-lock-a:before{content:\"\\e422\"}.fa-ribbon:before{content:\"\\f4d6\"}.fa-lungs:before{content:\"\\f604\"}.fa-person-pinball:before{content:\"\\e21d\"}.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before{content:\"\\f887\"}.fa-apple-core:before{content:\"\\e08f\"}.fa-circle-y:before{content:\"\\e12f\"}.fa-h6:before{content:\"\\e413\"}.fa-litecoin-sign:before{content:\"\\e1d3\"}.fa-circle-small:before{content:\"\\e122\"}.fa-border-none:before{content:\"\\f850\"}.fa-arrow-turn-down-left:before{content:\"\\e2e1\"}.fa-circle-nodes:before{content:\"\\e4e2\"}.fa-parachute-box:before{content:\"\\f4cd\"}.fa-comment-alt-medical:before,.fa-message-medical:before{content:\"\\f7f4\"}.fa-rugby-ball:before{content:\"\\e3c6\"}.fa-comment-music:before{content:\"\\f8b0\"}.fa-indent:before{content:\"\\f03c\"}.fa-tree-alt:before,.fa-tree-deciduous:before{content:\"\\f400\"}.fa-puzzle-piece-alt:before,.fa-puzzle-piece-simple:before{content:\"\\e231\"}.fa-truck-field-un:before{content:\"\\e58e\"}.fa-nfc-trash:before{content:\"\\e1fd\"}.fa-hourglass-empty:before,.fa-hourglass:before{content:\"\\f254\"}.fa-mountain:before{content:\"\\f6fc\"}.fa-file-times:before,.fa-file-xmark:before{content:\"\\f317\"}.fa-home-heart:before,.fa-house-heart:before{content:\"\\f4c9\"}.fa-house-chimney-blank:before{content:\"\\e3b0\"}.fa-meter-bolt:before{content:\"\\e1e9\"}.fa-user-doctor:before,.fa-user-md:before{content:\"\\f0f0\"}.fa-slash-back:before{content:\"\\5c\"}.fa-circle-info:before,.fa-info-circle:before{content:\"\\f05a\"}.fa-fishing-rod:before{content:\"\\e3a8\"}.fa-hammer-crash:before{content:\"\\e414\"}.fa-cloud-meatball:before{content:\"\\f73b\"}.fa-camera-polaroid:before{content:\"\\f8aa\"}.fa-camera-alt:before,.fa-camera:before{content:\"\\f030\"}.fa-square-virus:before{content:\"\\e578\"}.fa-cart-arrow-up:before{content:\"\\e3ee\"}.fa-meteor:before{content:\"\\f753\"}.fa-car-on:before{content:\"\\e4dd\"}.fa-sleigh:before{content:\"\\f7cc\"}.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before{content:\"\\f162\"}.fa-square-4:before{content:\"\\e259\"}.fa-hand-holding-droplet:before,.fa-hand-holding-water:before{content:\"\\f4c1\"}.fa-waveform:before{content:\"\\f8f1\"}.fa-water:before{content:\"\\f773\"}.fa-star-sharp-half-alt:before,.fa-star-sharp-half-stroke:before{content:\"\\e28d\"}.fa-nfc-signal:before{content:\"\\e1fb\"}.fa-plane-prop:before{content:\"\\e22b\"}.fa-calendar-check:before{content:\"\\f274\"}.fa-clock-desk:before{content:\"\\e134\"}.fa-calendar-clock:before,.fa-calendar-time:before{content:\"\\e0d2\"}.fa-braille:before{content:\"\\f2a1\"}.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before{content:\"\\f486\"}.fa-plate-utensils:before{content:\"\\e43b\"}.fa-family-pants:before{content:\"\\e302\"}.fa-hose-reel:before{content:\"\\e41a\"}.fa-house-window:before{content:\"\\e3b3\"}.fa-landmark:before{content:\"\\f66f\"}.fa-truck:before{content:\"\\f0d1\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-cloud-rainbow:before{content:\"\\f73e\"}.fa-person-cane:before{content:\"\\e53c\"}.fa-alien:before{content:\"\\f8f5\"}.fa-tent:before{content:\"\\e57d\"}.fa-vest-patches:before{content:\"\\e086\"}.fa-people-dress-simple:before{content:\"\\e218\"}.fa-check-double:before{content:\"\\f560\"}.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before{content:\"\\f15d\"}.fa-bowling-ball-pin:before{content:\"\\e0c3\"}.fa-bell-school-slash:before{content:\"\\f5d6\"}.fa-plus-large:before{content:\"\\e59e\"}.fa-money-bill-wheat:before{content:\"\\e52a\"}.fa-camera-viewfinder:before,.fa-screenshot:before{content:\"\\e0da\"}.fa-comment-alt-music:before,.fa-message-music:before{content:\"\\f8af\"}.fa-car-building:before{content:\"\\f859\"}.fa-border-bottom-right:before,.fa-border-style-alt:before{content:\"\\f854\"}.fa-octagon:before{content:\"\\f306\"}.fa-comment-arrow-up-right:before{content:\"\\e145\"}.fa-octagon-divide:before{content:\"\\e203\"}.fa-cookie:before{content:\"\\f563\"}.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-tv-music:before{content:\"\\f8e6\"}.fa-hard-drive:before,.fa-hdd:before{content:\"\\f0a0\"}.fa-reel:before{content:\"\\e238\"}.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before{content:\"\\f586\"}.fa-dumbbell:before{content:\"\\f44b\"}.fa-list-alt:before,.fa-rectangle-list:before{content:\"\\f022\"}.fa-tarp-droplet:before{content:\"\\e57c\"}.fa-alarm-exclamation:before{content:\"\\f843\"}.fa-house-medical-circle-check:before{content:\"\\e511\"}.fa-traffic-cone:before{content:\"\\f636\"}.fa-grate:before{content:\"\\e193\"}.fa-arrow-down-right:before{content:\"\\e093\"}.fa-person-skiing-nordic:before,.fa-skiing-nordic:before{content:\"\\f7ca\"}.fa-calendar-plus:before{content:\"\\f271\"}.fa-person-from-portal:before,.fa-portal-exit:before{content:\"\\e023\"}.fa-plane-arrival:before{content:\"\\f5af\"}.fa-cowbell-circle-plus:before,.fa-cowbell-more:before{content:\"\\f8b4\"}.fa-arrow-alt-circle-left:before,.fa-circle-left:before{content:\"\\f359\"}.fa-distribute-spacing-vertical:before{content:\"\\e366\"}.fa-signal-alt-2:before,.fa-signal-bars-fair:before{content:\"\\f692\"}.fa-sportsball:before{content:\"\\e44b\"}.fa-subway:before,.fa-train-subway:before{content:\"\\f239\"}.fa-chart-gantt:before{content:\"\\e0e4\"}.fa-face-smile-upside-down:before{content:\"\\e395\"}.fa-ball-pile:before{content:\"\\f77e\"}.fa-badge-dollar:before{content:\"\\f645\"}.fa-money-bills-alt:before,.fa-money-bills-simple:before{content:\"\\e1f4\"}.fa-list-timeline:before{content:\"\\e1d1\"}.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before{content:\"\\e1bc\"}.fa-crop-alt:before,.fa-crop-simple:before{content:\"\\f565\"}.fa-money-bill-1:before,.fa-money-bill-alt:before{content:\"\\f3d1\"}.fa-left-long:before,.fa-long-arrow-alt-left:before{content:\"\\f30a\"}.fa-keyboard-down:before{content:\"\\e1c2\"}.fa-circle-up-right:before{content:\"\\e129\"}.fa-cloud-bolt-moon:before,.fa-thunderstorm-moon:before{content:\"\\f76d\"}.fa-dna:before{content:\"\\f471\"}.fa-virus-slash:before{content:\"\\e075\"}.fa-bracket-round-right:before{content:\"\\29\"}.fa-circle-5:before{content:\"\\e0f2\"}.fa-minus:before,.fa-subtract:before{content:\"\\f068\"}.fa-fire-flame:before,.fa-flame:before{content:\"\\f6df\"}.fa-arrow-alt-to-right:before,.fa-right-to-line:before{content:\"\\f34c\"}.fa-child-rifle:before{content:\"\\e4e0\"}.fa-gif:before{content:\"\\e190\"}.fa-chess:before{content:\"\\f439\"}.fa-trash-slash:before{content:\"\\e2b3\"}.fa-arrow-left-long:before,.fa-long-arrow-left:before{content:\"\\f177\"}.fa-plug-circle-check:before{content:\"\\e55c\"}.fa-font-case:before{content:\"\\f866\"}.fa-street-view:before{content:\"\\f21d\"}.fa-arrow-down-left:before{content:\"\\e091\"}.fa-franc-sign:before{content:\"\\e18f\"}.fa-flask-poison:before,.fa-flask-round-poison:before{content:\"\\f6e0\"}.fa-volume-off:before{content:\"\\f026\"}.fa-book-circle-arrow-right:before{content:\"\\e0bc\"}.fa-chart-user:before,.fa-user-chart:before{content:\"\\f6a3\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before{content:\"\\f2a3\"}.fa-presentation-screen:before,.fa-presentation:before{content:\"\\f685\"}.fa-circle-bolt:before{content:\"\\e0fe\"}.fa-face-smile-halo:before{content:\"\\e38f\"}.fa-cart-circle-arrow-down:before{content:\"\\e3ef\"}.fa-house-person-arrive:before,.fa-house-person-return:before,.fa-house-return:before{content:\"\\e011\"}.fa-comment-alt-times:before,.fa-message-times:before,.fa-message-xmark:before{content:\"\\f4ab\"}.fa-file-award:before,.fa-file-certificate:before{content:\"\\f5f3\"}.fa-user-doctor-hair-long:before{content:\"\\e459\"}.fa-camera-home:before,.fa-camera-security:before{content:\"\\f8fe\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-droplet-slash:before,.fa-tint-slash:before{content:\"\\f5c7\"}.fa-book-heart:before{content:\"\\f499\"}.fa-mosque:before{content:\"\\f678\"}.fa-duck:before{content:\"\\f6d8\"}.fa-mosquito:before{content:\"\\e52b\"}.fa-star-of-david:before{content:\"\\f69a\"}.fa-flag-alt:before,.fa-flag-swallowtail:before{content:\"\\f74c\"}.fa-person-military-rifle:before{content:\"\\e54b\"}.fa-car-garage:before{content:\"\\f5e2\"}.fa-cart-shopping:before,.fa-shopping-cart:before{content:\"\\f07a\"}.fa-book-font:before{content:\"\\e0bf\"}.fa-shield-plus:before{content:\"\\e24a\"}.fa-vials:before{content:\"\\f493\"}.fa-eye-dropper-full:before{content:\"\\e172\"}.fa-distribute-spacing-horizontal:before{content:\"\\e365\"}.fa-tablet-rugged:before{content:\"\\f48f\"}.fa-temperature-frigid:before,.fa-temperature-snow:before{content:\"\\f768\"}.fa-moped:before{content:\"\\e3b9\"}.fa-face-smile-plus:before,.fa-smile-plus:before{content:\"\\f5b9\"}.fa-radio-alt:before,.fa-radio-tuner:before{content:\"\\f8d8\"}.fa-face-swear:before{content:\"\\e399\"}.fa-water-arrow-down:before,.fa-water-lower:before{content:\"\\f774\"}.fa-scanner-touchscreen:before{content:\"\\f48a\"}.fa-circle-7:before{content:\"\\e0f4\"}.fa-plug-circle-plus:before{content:\"\\e55f\"}.fa-person-ski-jumping:before,.fa-ski-jump:before{content:\"\\f7c7\"}.fa-place-of-worship:before{content:\"\\f67f\"}.fa-water-arrow-up:before,.fa-water-rise:before{content:\"\\f775\"}.fa-waveform-lines:before,.fa-waveform-path:before{content:\"\\f8f2\"}.fa-split:before{content:\"\\e254\"}.fa-film-canister:before,.fa-film-cannister:before{content:\"\\f8b7\"}.fa-folder-times:before,.fa-folder-xmark:before{content:\"\\f65f\"}.fa-toilet-paper-alt:before,.fa-toilet-paper-blank:before{content:\"\\f71f\"}.fa-tablet-android-alt:before,.fa-tablet-screen:before{content:\"\\f3fc\"}.fa-hexagon-vertical-nft-slanted:before{content:\"\\e506\"}.fa-folder-music:before{content:\"\\e18d\"}.fa-desktop-medical:before,.fa-display-medical:before{content:\"\\e166\"}.fa-share-all:before{content:\"\\f367\"}.fa-peapod:before{content:\"\\e31c\"}.fa-chess-clock:before{content:\"\\f43d\"}.fa-axe:before{content:\"\\f6b2\"}.fa-square-d:before{content:\"\\e268\"}.fa-grip-vertical:before{content:\"\\f58e\"}.fa-mobile-signal-out:before{content:\"\\e1f0\"}.fa-arrow-turn-up:before,.fa-level-up:before{content:\"\\f148\"}.fa-u:before{content:\"\\55\"}.fa-arrow-up-from-dotted-line:before{content:\"\\e09b\"}.fa-square-root-alt:before,.fa-square-root-variable:before{content:\"\\f698\"}.fa-light-switch-on:before{content:\"\\e019\"}.fa-arrow-down-arrow-up:before,.fa-sort-alt:before{content:\"\\f883\"}.fa-raindrops:before{content:\"\\f75c\"}.fa-dash:before,.fa-minus-large:before{content:\"\\e404\"}.fa-clock-four:before,.fa-clock:before{content:\"\\f017\"}.fa-input-numeric:before{content:\"\\e1bd\"}.fa-truck-tow:before{content:\"\\e2b8\"}.fa-backward-step:before,.fa-step-backward:before{content:\"\\f048\"}.fa-pallet:before{content:\"\\f482\"}.fa-car-bolt:before{content:\"\\e341\"}.fa-arrows-maximize:before,.fa-expand-arrows:before{content:\"\\f31d\"}.fa-faucet:before{content:\"\\e005\"}.fa-cloud-sleet:before{content:\"\\f741\"}.fa-lamp-street:before{content:\"\\e1c5\"}.fa-list-radio:before{content:\"\\e1d0\"}.fa-pen-nib-slash:before{content:\"\\e4a1\"}.fa-baseball-bat-ball:before{content:\"\\f432\"}.fa-square-up-left:before{content:\"\\e282\"}.fa-overline:before{content:\"\\f876\"}.fa-s:before{content:\"\\53\"}.fa-timeline:before{content:\"\\e29c\"}.fa-keyboard:before{content:\"\\f11c\"}.fa-arrows-from-dotted-line:before{content:\"\\e0a3\"}.fa-usb-drive:before{content:\"\\f8e9\"}.fa-ballot:before{content:\"\\f732\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-location-dot-slash:before,.fa-map-marker-alt-slash:before{content:\"\\f605\"}.fa-cards:before{content:\"\\e3ed\"}.fa-clinic-medical:before,.fa-house-chimney-medical:before{content:\"\\f7f2\"}.fa-boxing-glove:before,.fa-glove-boxing:before{content:\"\\f438\"}.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-bell-school:before{content:\"\\f5d5\"}.fa-mobile-android-alt:before,.fa-mobile-screen:before{content:\"\\f3cf\"}.fa-plane-up:before{content:\"\\e22d\"}.fa-folder-heart:before{content:\"\\e189\"}.fa-circle-location-arrow:before,.fa-location-circle:before{content:\"\\f602\"}.fa-face-head-bandage:before{content:\"\\e37a\"}.fa-maki-roll:before,.fa-makizushi:before,.fa-sushi-roll:before{content:\"\\e48b\"}.fa-car-bump:before{content:\"\\f5e0\"}.fa-piggy-bank:before{content:\"\\f4d3\"}.fa-racquet:before{content:\"\\f45a\"}.fa-car-mirrors:before{content:\"\\e343\"}.fa-industry-alt:before,.fa-industry-windows:before{content:\"\\f3b3\"}.fa-bolt-auto:before{content:\"\\e0b6\"}.fa-battery-3:before,.fa-battery-half:before{content:\"\\f242\"}.fa-flux-capacitor:before{content:\"\\f8ba\"}.fa-mountain-city:before{content:\"\\e52e\"}.fa-coins:before{content:\"\\f51e\"}.fa-honey-pot:before{content:\"\\e418\"}.fa-olive:before{content:\"\\e316\"}.fa-khanda:before{content:\"\\f66d\"}.fa-filter-list:before{content:\"\\e17c\"}.fa-outlet:before{content:\"\\e01c\"}.fa-sliders-h:before,.fa-sliders:before{content:\"\\f1de\"}.fa-cauldron:before{content:\"\\f6bf\"}.fa-people:before{content:\"\\e216\"}.fa-folder-tree:before{content:\"\\f802\"}.fa-network-wired:before{content:\"\\f6ff\"}.fa-croissant:before{content:\"\\f7f6\"}.fa-map-pin:before{content:\"\\f276\"}.fa-hamsa:before{content:\"\\f665\"}.fa-cent-sign:before{content:\"\\e3f5\"}.fa-swords-laser:before{content:\"\\e03d\"}.fa-flask:before{content:\"\\f0c3\"}.fa-person-pregnant:before{content:\"\\e31e\"}.fa-square-u:before{content:\"\\e281\"}.fa-wand-sparkles:before{content:\"\\f72b\"}.fa-router:before{content:\"\\f8da\"}.fa-ellipsis-v:before,.fa-ellipsis-vertical:before{content:\"\\f142\"}.fa-sword-laser-alt:before{content:\"\\e03c\"}.fa-ticket:before{content:\"\\f145\"}.fa-power-off:before{content:\"\\f011\"}.fa-coin:before{content:\"\\f85c\"}.fa-laptop-slash:before{content:\"\\e1c7\"}.fa-long-arrow-alt-right:before,.fa-right-long:before{content:\"\\f30b\"}.fa-circle-b:before{content:\"\\e0fd\"}.fa-person-dress-simple:before{content:\"\\e21c\"}.fa-pipe-collar:before{content:\"\\e437\"}.fa-lights-holiday:before{content:\"\\f7b2\"}.fa-citrus:before{content:\"\\e2f4\"}.fa-flag-usa:before{content:\"\\f74d\"}.fa-laptop-file:before{content:\"\\e51d\"}.fa-teletype:before,.fa-tty:before{content:\"\\f1e4\"}.fa-chart-tree-map:before{content:\"\\e0ea\"}.fa-diagram-next:before{content:\"\\e476\"}.fa-person-rifle:before{content:\"\\e54e\"}.fa-clock-five-thirty:before{content:\"\\e34a\"}.fa-pipe-valve:before{content:\"\\e439\"}.fa-arrow-up-from-arc:before{content:\"\\e4b4\"}.fa-face-spiral-eyes:before{content:\"\\e485\"}.fa-compress-wide:before{content:\"\\f326\"}.fa-circle-phone-hangup:before,.fa-phone-circle-down:before{content:\"\\e11d\"}.fa-house-medical-circle-exclamation:before{content:\"\\e512\"}.fa-badminton:before{content:\"\\e33a\"}.fa-closed-captioning:before{content:\"\\f20a\"}.fa-hiking:before,.fa-person-hiking:before{content:\"\\f6ec\"}.fa-arrow-alt-from-left:before,.fa-right-from-line:before{content:\"\\f347\"}.fa-venus-double:before{content:\"\\f226\"}.fa-images:before{content:\"\\f302\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-shuttlecock:before{content:\"\\f45b\"}.fa-user-hair:before{content:\"\\e45a\"}.fa-eye-evil:before{content:\"\\f6db\"}.fa-people-pulling:before{content:\"\\e535\"}.fa-n:before{content:\"\\4e\"}.fa-garage:before{content:\"\\e009\"}.fa-cable-car:before,.fa-tram:before{content:\"\\f7da\"}.fa-shovel-snow:before{content:\"\\f7c3\"}.fa-cloud-rain:before{content:\"\\f73d\"}.fa-face-lying:before{content:\"\\e37e\"}.fa-sprinkler:before{content:\"\\e035\"}.fa-building-circle-xmark:before{content:\"\\e4d4\"}.fa-person-sledding:before,.fa-sledding:before{content:\"\\f7cb\"}.fa-game-console-handheld:before{content:\"\\f8bb\"}.fa-ship:before{content:\"\\f21a\"}.fa-clock-six-thirty:before{content:\"\\e353\"}.fa-battery-slash:before{content:\"\\f377\"}.fa-tugrik-sign:before{content:\"\\e2ba\"}.fa-arrows-down-to-line:before{content:\"\\e4b8\"}.fa-download:before{content:\"\\f019\"}.fa-inventory:before,.fa-shelves:before{content:\"\\f480\"}.fa-cloud-snow:before{content:\"\\f742\"}.fa-face-grin:before,.fa-grin:before{content:\"\\f580\"}.fa-backspace:before,.fa-delete-left:before{content:\"\\f55a\"}.fa-oven:before{content:\"\\e01d\"}.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before{content:\"\\f1fb\"}.fa-comment-captions:before{content:\"\\e146\"}.fa-comments-question:before{content:\"\\e14e\"}.fa-scribble:before{content:\"\\e23f\"}.fa-rotate-exclamation:before{content:\"\\e23c\"}.fa-file-circle-check:before{content:\"\\e5a0\"}.fa-glass:before{content:\"\\f804\"}.fa-loader:before{content:\"\\e1d4\"}.fa-forward:before{content:\"\\f04e\"}.fa-user-pilot:before{content:\"\\e2c0\"}.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f3ce\"}.fa-code-pull-request-closed:before{content:\"\\e3f9\"}.fa-face-meh:before,.fa-meh:before{content:\"\\f11a\"}.fa-align-center:before{content:\"\\f037\"}.fa-book-dead:before,.fa-book-skull:before{content:\"\\f6b7\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-face-dotted:before{content:\"\\e47f\"}.fa-face-worried:before{content:\"\\e3a3\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-heart-circle-exclamation:before{content:\"\\e4fe\"}.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before{content:\"\\f015\"}.fa-vector-circle:before{content:\"\\e2c6\"}.fa-car-circle-bolt:before{content:\"\\e342\"}.fa-calendar-week:before{content:\"\\f784\"}.fa-flying-disc:before{content:\"\\e3a9\"}.fa-laptop-medical:before{content:\"\\f812\"}.fa-square-down-right:before{content:\"\\e26c\"}.fa-b:before{content:\"\\42\"}.fa-seat-airline:before{content:\"\\e244\"}.fa-eclipse-alt:before,.fa-moon-over-sun:before{content:\"\\f74a\"}.fa-pipe:before{content:\"\\7c\"}.fa-file-medical:before{content:\"\\f477\"}.fa-potato:before{content:\"\\e440\"}.fa-dice-one:before{content:\"\\f525\"}.fa-circle-a:before{content:\"\\e0f7\"}.fa-helmet-battle:before{content:\"\\f6eb\"}.fa-butter:before{content:\"\\e3e4\"}.fa-blanket-fire:before{content:\"\\e3da\"}.fa-kiwi-bird:before{content:\"\\f535\"}.fa-castle:before{content:\"\\e0de\"}.fa-golf-club:before{content:\"\\f451\"}.fa-arrow-right-arrow-left:before,.fa-exchange:before{content:\"\\f0ec\"}.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before{content:\"\\f2f9\"}.fa-cutlery:before,.fa-utensils:before{content:\"\\f2e7\"}.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before{content:\"\\f161\"}.fa-balloons:before{content:\"\\e2e4\"}.fa-mill-sign:before{content:\"\\e1ed\"}.fa-bowl-rice:before{content:\"\\e2eb\"}.fa-timeline-arrow:before{content:\"\\e29d\"}.fa-skull:before{content:\"\\f54c\"}.fa-game-board-alt:before,.fa-game-board-simple:before{content:\"\\f868\"}.fa-circle-video:before,.fa-video-circle:before{content:\"\\e12b\"}.fa-chart-scatter-bubble:before{content:\"\\e0e9\"}.fa-house-turret:before{content:\"\\e1b4\"}.fa-banana:before{content:\"\\e2e5\"}.fa-hand-holding-skull:before{content:\"\\e1a4\"}.fa-people-dress:before{content:\"\\e217\"}.fa-couch-small:before,.fa-loveseat:before{content:\"\\f4cc\"}.fa-broadcast-tower:before,.fa-tower-broadcast:before{content:\"\\f519\"}.fa-truck-pickup:before{content:\"\\f63c\"}.fa-block-quote:before{content:\"\\e0b5\"}.fa-long-arrow-alt-up:before,.fa-up-long:before{content:\"\\f30c\"}.fa-stop:before{content:\"\\f04d\"}.fa-code-merge:before{content:\"\\f387\"}.fa-money-check-dollar-pen:before,.fa-money-check-edit-alt:before{content:\"\\f873\"}.fa-arrow-alt-from-bottom:before,.fa-up-from-line:before{content:\"\\f346\"}.fa-upload:before{content:\"\\f093\"}.fa-hurricane:before{content:\"\\f751\"}.fa-people-pants:before{content:\"\\e219\"}.fa-mound:before{content:\"\\e52d\"}.fa-windsock:before{content:\"\\f777\"}.fa-circle-half:before{content:\"\\e110\"}.fa-brake-warning:before{content:\"\\e0c7\"}.fa-toilet-portable:before{content:\"\\e583\"}.fa-compact-disc:before{content:\"\\f51f\"}.fa-file-arrow-down:before,.fa-file-download:before{content:\"\\f56d\"}.fa-sax-hot:before,.fa-saxophone-fire:before{content:\"\\f8db\"}.fa-camera-web-slash:before,.fa-webcam-slash:before{content:\"\\f833\"}.fa-folder-medical:before{content:\"\\e18c\"}.fa-folder-cog:before,.fa-folder-gear:before{content:\"\\e187\"}.fa-hand-wave:before{content:\"\\e1a7\"}.fa-arrow-up-arrow-down:before,.fa-sort-up-down:before{content:\"\\e099\"}.fa-caravan:before{content:\"\\f8ff\"}.fa-shield-cat:before{content:\"\\e572\"}.fa-comment-alt-slash:before,.fa-message-slash:before{content:\"\\f4a9\"}.fa-bolt:before,.fa-zap:before{content:\"\\f0e7\"}.fa-trash-can-check:before{content:\"\\e2a9\"}.fa-glass-water:before{content:\"\\e4f4\"}.fa-oil-well:before{content:\"\\e532\"}.fa-person-simple:before{content:\"\\e220\"}.fa-vault:before{content:\"\\e2c5\"}.fa-mars:before{content:\"\\f222\"}.fa-toilet:before{content:\"\\f7d8\"}.fa-plane-circle-xmark:before{content:\"\\e557\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before{content:\"\\f157\"}.fa-notes:before{content:\"\\e202\"}.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before{content:\"\\f158\"}.fa-trash-arrow-turn-left:before,.fa-trash-undo:before{content:\"\\f895\"}.fa-champagne-glass:before,.fa-glass-champagne:before{content:\"\\f79e\"}.fa-objects-align-center-horizontal:before{content:\"\\e3bc\"}.fa-sun:before{content:\"\\f185\"}.fa-trash-alt-slash:before,.fa-trash-can-slash:before{content:\"\\e2ad\"}.fa-screen-users:before,.fa-users-class:before{content:\"\\f63d\"}.fa-guitar:before{content:\"\\f7a6\"}.fa-arrow-square-left:before,.fa-square-arrow-left:before{content:\"\\f33a\"}.fa-square-8:before{content:\"\\e25d\"}.fa-face-smile-hearts:before{content:\"\\e390\"}.fa-brackets-square:before,.fa-brackets:before{content:\"\\f7e9\"}.fa-laptop-arrow-down:before{content:\"\\e1c6\"}.fa-hockey-stick-puck:before{content:\"\\e3ae\"}.fa-house-tree:before{content:\"\\e1b3\"}.fa-signal-2:before,.fa-signal-fair:before{content:\"\\f68d\"}.fa-face-laugh-wink:before,.fa-laugh-wink:before{content:\"\\f59c\"}.fa-circle-dollar:before,.fa-dollar-circle:before,.fa-usd-circle:before{content:\"\\f2e8\"}.fa-horse-head:before{content:\"\\f7ab\"}.fa-arrows-repeat:before,.fa-repeat-alt:before{content:\"\\f364\"}.fa-bore-hole:before{content:\"\\e4c3\"}.fa-industry:before{content:\"\\f275\"}.fa-image-polaroid:before{content:\"\\f8c4\"}.fa-wave-triangle:before{content:\"\\f89a\"}.fa-arrow-alt-circle-down:before,.fa-circle-down:before{content:\"\\f358\"}.fa-grill:before{content:\"\\e5a3\"}.fa-arrows-turn-to-dots:before{content:\"\\e4c1\"}.fa-analytics:before,.fa-chart-mixed:before{content:\"\\f643\"}.fa-florin-sign:before{content:\"\\e184\"}.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before{content:\"\\f884\"}.fa-less-than:before{content:\"\\3c\"}.fa-desktop-code:before,.fa-display-code:before{content:\"\\e165\"}.fa-face-drooling:before{content:\"\\e372\"}.fa-oil-temp:before,.fa-oil-temperature:before{content:\"\\f614\"}.fa-question-square:before,.fa-square-question:before{content:\"\\f2fd\"}.fa-air-conditioner:before{content:\"\\f8f4\"}.fa-angle-down:before{content:\"\\f107\"}.fa-mountains:before{content:\"\\f6fd\"}.fa-omega:before{content:\"\\f67a\"}.fa-car-tunnel:before{content:\"\\e4de\"}.fa-person-dolly-empty:before{content:\"\\f4d1\"}.fa-pan-food:before{content:\"\\e42b\"}.fa-head-side-cough:before{content:\"\\e061\"}.fa-grip-lines:before{content:\"\\f7a4\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-user-lock:before{content:\"\\f502\"}.fa-arrow-right-long:before,.fa-long-arrow-right:before{content:\"\\f178\"}.fa-tickets-airline:before{content:\"\\e29b\"}.fa-anchor-circle-xmark:before{content:\"\\e4ac\"}.fa-ellipsis-h:before,.fa-ellipsis:before{content:\"\\f141\"}.fa-nfc-slash:before{content:\"\\e1fc\"}.fa-chess-pawn:before{content:\"\\f443\"}.fa-first-aid:before,.fa-kit-medical:before{content:\"\\f479\"}.fa-grid-2-plus:before{content:\"\\e197\"}.fa-bells:before{content:\"\\f77f\"}.fa-person-through-window:before{content:\"\\e5a9\"}.fa-toolbox:before{content:\"\\f552\"}.fa-envelope-badge:before,.fa-envelope-dot:before{content:\"\\e16f\"}.fa-hands-holding-circle:before{content:\"\\e4fb\"}.fa-bug:before{content:\"\\f188\"}.fa-bowl-chopsticks:before{content:\"\\e2e9\"}.fa-credit-card-alt:before,.fa-credit-card:before{content:\"\\f09d\"}.fa-circle-s:before{content:\"\\e121\"}.fa-box-ballot:before{content:\"\\f735\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-hand-holding-hand:before{content:\"\\e4f7\"}.fa-user-tie-hair:before{content:\"\\e45f\"}.fa-podium-star:before{content:\"\\f758\"}.fa-business-front:before,.fa-party-back:before,.fa-trian-balbot:before,.fa-user-hair-mullet:before{content:\"\\e45c\"}.fa-microphone-stand:before{content:\"\\f8cb\"}.fa-book-open-reader:before,.fa-book-reader:before{content:\"\\f5da\"}.fa-family-dress:before{content:\"\\e301\"}.fa-circle-x:before{content:\"\\e12e\"}.fa-cabin:before{content:\"\\e46d\"}.fa-mountain-sun:before{content:\"\\e52f\"}.fa-chart-simple-horizontal:before{content:\"\\e474\"}.fa-arrows-left-right-to-line:before{content:\"\\e4ba\"}.fa-hand-back-point-left:before{content:\"\\e19f\"}.fa-comment-alt-dots:before,.fa-message-dots:before,.fa-messaging:before{content:\"\\f4a3\"}.fa-file-heart:before{content:\"\\e176\"}.fa-beer-foam:before,.fa-beer-mug:before{content:\"\\e0b3\"}.fa-dice-d20:before{content:\"\\f6cf\"}.fa-drone:before{content:\"\\f85f\"}.fa-truck-droplet:before{content:\"\\e58c\"}.fa-file-circle-xmark:before{content:\"\\e5a1\"}.fa-temperature-arrow-up:before,.fa-temperature-up:before{content:\"\\e040\"}.fa-medal:before{content:\"\\f5a2\"}.fa-bed:before{content:\"\\f236\"}.fa-book-copy:before{content:\"\\e0be\"}.fa-h-square:before,.fa-square-h:before{content:\"\\f0fd\"}.fa-square-c:before{content:\"\\e266\"}.fa-clock-two:before{content:\"\\e35a\"}.fa-square-ellipsis-vertical:before{content:\"\\e26f\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-bee:before{content:\"\\e0b2\"}.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-bell:before{content:\"\\f0f3\"}.fa-candy-bar:before,.fa-chocolate-bar:before{content:\"\\e3e8\"}.fa-xmark-large:before{content:\"\\e59b\"}.fa-pinata:before{content:\"\\e3c3\"}.fa-arrows-from-line:before{content:\"\\e0a4\"}.fa-superscript:before{content:\"\\f12b\"}.fa-bowl-spoon:before{content:\"\\e3e0\"}.fa-hexagon-check:before{content:\"\\e416\"}.fa-plug-circle-xmark:before{content:\"\\e560\"}.fa-star-of-life:before{content:\"\\f621\"}.fa-phone-slash:before{content:\"\\f3dd\"}.fa-traffic-light-stop:before{content:\"\\f63a\"}.fa-paint-roller:before{content:\"\\f5aa\"}.fa-accent-grave:before{content:\"\\60\"}.fa-hands-helping:before,.fa-handshake-angle:before{content:\"\\f4c4\"}.fa-circle-0:before{content:\"\\e0ed\"}.fa-dial-med-low:before{content:\"\\e160\"}.fa-location-dot:before,.fa-map-marker-alt:before{content:\"\\f3c5\"}.fa-crab:before{content:\"\\e3ff\"}.fa-box-full:before,.fa-box-open-full:before{content:\"\\f49c\"}.fa-file:before{content:\"\\f15b\"}.fa-greater-than:before{content:\"\\3e\"}.fa-quotes:before{content:\"\\e234\"}.fa-pretzel:before{content:\"\\e441\"}.fa-person-swimming:before,.fa-swimmer:before{content:\"\\f5c4\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-user-robot-xmarks:before{content:\"\\e4a7\"}.fa-comment-alt-quote:before,.fa-message-quote:before{content:\"\\e1e4\"}.fa-candy-corn:before{content:\"\\f6bd\"}.fa-folder-magnifying-glass:before,.fa-folder-search:before{content:\"\\e18b\"}.fa-notebook:before{content:\"\\e201\"}.fa-droplet:before,.fa-tint:before{content:\"\\f043\"}.fa-bullseye-pointer:before{content:\"\\f649\"}.fa-eraser:before{content:\"\\f12d\"}.fa-hexagon-image:before{content:\"\\e504\"}.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before{content:\"\\f57d\"}.fa-crate-apple:before{content:\"\\f6b1\"}.fa-apple-crate:before{content:\"\\f6b1\"}.fa-person-burst:before{content:\"\\e53b\"}.fa-game-board:before{content:\"\\f867\"}.fa-hat-chef:before{content:\"\\f86b\"}.fa-hand-back-point-right:before{content:\"\\e1a1\"}.fa-dove:before{content:\"\\f4ba\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-grid-4:before{content:\"\\e198\"}.fa-socks:before{content:\"\\f696\"}.fa-face-sunglasses:before{content:\"\\e398\"}.fa-inbox:before{content:\"\\f01c\"}.fa-square-0:before{content:\"\\e255\"}.fa-section:before{content:\"\\e447\"}.fa-box-up:before,.fa-square-this-way-up:before{content:\"\\f49f\"}.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before{content:\"\\f625\"}.fa-square-ampersand:before{content:\"\\e260\"}.fa-envelope-open-text:before{content:\"\\f658\"}.fa-lamp-desk:before{content:\"\\e014\"}.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before{content:\"\\f0f8\"}.fa-poll-people:before{content:\"\\f759\"}.fa-glass-whiskey-rocks:before,.fa-whiskey-glass-ice:before{content:\"\\f7a1\"}.fa-wine-bottle:before{content:\"\\f72f\"}.fa-chess-rook:before{content:\"\\f447\"}.fa-user-bounty-hunter:before{content:\"\\e2bf\"}.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before{content:\"\\f550\"}.fa-diagram-sankey:before{content:\"\\e158\"}.fa-cloud-hail-mixed:before{content:\"\\f73a\"}.fa-circle-up-left:before{content:\"\\e128\"}.fa-dharmachakra:before{content:\"\\f655\"}.fa-objects-align-left:before{content:\"\\e3be\"}.fa-oil-can-drip:before{content:\"\\e205\"}.fa-face-smiling-hands:before{content:\"\\e396\"}.fa-broccoli:before{content:\"\\e3e2\"}.fa-route-interstate:before{content:\"\\f61b\"}.fa-ear-muffs:before{content:\"\\f795\"}.fa-hotdog:before{content:\"\\f80f\"}.fa-transporter-empty:before{content:\"\\e046\"}.fa-blind:before,.fa-person-walking-with-cane:before{content:\"\\f29d\"}.fa-angle-90:before{content:\"\\e08d\"}.fa-rectangle-terminal:before{content:\"\\e236\"}.fa-kite:before{content:\"\\f6f4\"}.fa-drum:before{content:\"\\f569\"}.fa-scrubber:before{content:\"\\f2f8\"}.fa-ice-cream:before{content:\"\\f810\"}.fa-heart-circle-bolt:before{content:\"\\e4fc\"}.fa-fish-bones:before{content:\"\\e304\"}.fa-deer-rudolph:before{content:\"\\f78f\"}.fa-fax:before{content:\"\\f1ac\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-head-side-heart:before{content:\"\\e1aa\"}.fa-square-e:before{content:\"\\e26d\"}.fa-meter-fire:before{content:\"\\e1eb\"}.fa-cloud-hail:before{content:\"\\f739\"}.fa-check-to-slot:before,.fa-vote-yea:before{content:\"\\f772\"}.fa-money-from-bracket:before{content:\"\\e312\"}.fa-star-half:before{content:\"\\f089\"}.fa-car-bus:before{content:\"\\f85a\"}.fa-speaker:before{content:\"\\f8df\"}.fa-timer:before{content:\"\\e29e\"}.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before{content:\"\\f468\"}.fa-grill-hot:before{content:\"\\e5a5\"}.fa-ballot-check:before{content:\"\\f733\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-assistive-listening-systems:before,.fa-ear-listen:before{content:\"\\f2a2\"}.fa-file-minus:before{content:\"\\f318\"}.fa-tree-city:before{content:\"\\e587\"}.fa-play:before{content:\"\\f04b\"}.fa-font:before{content:\"\\f031\"}.fa-coffee-togo:before,.fa-cup-togo:before{content:\"\\f6c5\"}.fa-square-down-left:before{content:\"\\e26b\"}.fa-burger-lettuce:before{content:\"\\e3e3\"}.fa-rupiah-sign:before{content:\"\\e23d\"}.fa-magnifying-glass:before,.fa-search:before{content:\"\\f002\"}.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before{content:\"\\f45d\"}.fa-diagnoses:before,.fa-person-dots-from-line:before{content:\"\\f470\"}.fa-chevron-double-down:before,.fa-chevrons-down:before{content:\"\\f322\"}.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before{content:\"\\f82a\"}.fa-signal-3:before,.fa-signal-good:before{content:\"\\f68e\"}.fa-location-question:before,.fa-map-marker-question:before{content:\"\\f60b\"}.fa-floppy-disk-circle-xmark:before,.fa-floppy-disk-times:before,.fa-save-circle-xmark:before,.fa-save-times:before{content:\"\\e181\"}.fa-naira-sign:before{content:\"\\e1f6\"}.fa-peach:before{content:\"\\e20b\"}.fa-taxi-bus:before{content:\"\\e298\"}.fa-bracket-curly-left:before,.fa-bracket-curly:before{content:\"\\7b\"}.fa-lobster:before{content:\"\\e421\"}.fa-cart-flatbed-empty:before,.fa-dolly-flatbed-empty:before{content:\"\\f476\"}.fa-colon:before{content:\"\\3a\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-wand:before{content:\"\\f72a\"}.fa-walkie-talkie:before{content:\"\\f8ef\"}.fa-file-edit:before,.fa-file-pen:before{content:\"\\f31c\"}.fa-receipt:before{content:\"\\f543\"}.fa-table-picnic:before{content:\"\\e32d\"}.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before{content:\"\\f14b\"}.fa-circle-microphone-lines:before,.fa-microphone-circle-alt:before{content:\"\\e117\"}.fa-desktop-slash:before,.fa-display-slash:before{content:\"\\e2fa\"}.fa-suitcase-rolling:before{content:\"\\f5c1\"}.fa-person-circle-exclamation:before{content:\"\\e53f\"}.fa-transporter-2:before{content:\"\\e044\"}.fa-hand-receiving:before,.fa-hands-holding-diamond:before{content:\"\\f47c\"}.fa-money-bill-simple-wave:before{content:\"\\e1f2\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before{content:\"\\f240\"}.fa-bell-plus:before{content:\"\\f849\"}.fa-book-arrow-right:before{content:\"\\e0b9\"}.fa-hospitals:before{content:\"\\f80e\"}.fa-club:before{content:\"\\f327\"}.fa-skull-crossbones:before{content:\"\\f714\"}.fa-dewpoint:before,.fa-droplet-degree:before{content:\"\\f748\"}.fa-code-compare:before{content:\"\\e13a\"}.fa-list-dots:before,.fa-list-ul:before{content:\"\\f0ca\"}.fa-hand-holding-magic:before{content:\"\\f6e5\"}.fa-watermelon-slice:before{content:\"\\e337\"}.fa-circle-ellipsis:before{content:\"\\e10a\"}.fa-school-lock:before{content:\"\\e56f\"}.fa-tower-cell:before{content:\"\\e585\"}.fa-sd-cards:before{content:\"\\e240\"}.fa-down-long:before,.fa-long-arrow-alt-down:before{content:\"\\f309\"}.fa-envelopes:before{content:\"\\e170\"}.fa-phone-office:before{content:\"\\f67d\"}.fa-ranking-star:before{content:\"\\e561\"}.fa-chess-king:before{content:\"\\f43f\"}.fa-nfc-pen:before{content:\"\\e1fa\"}.fa-person-harassing:before{content:\"\\e549\"}.fa-hat-winter:before{content:\"\\f7a8\"}.fa-brazilian-real-sign:before{content:\"\\e46c\"}.fa-landmark-alt:before,.fa-landmark-dome:before{content:\"\\f752\"}.fa-bone-break:before{content:\"\\f5d8\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-down-from-dotted-line:before{content:\"\\e407\"}.fa-television:before,.fa-tv-alt:before,.fa-tv:before{content:\"\\f26c\"}.fa-border-left:before{content:\"\\f84f\"}.fa-circle-divide:before{content:\"\\e106\"}.fa-shrimp:before{content:\"\\e448\"}.fa-list-check:before,.fa-tasks:before{content:\"\\f0ae\"}.fa-diagram-subtask:before{content:\"\\e479\"}.fa-jug-detergent:before{content:\"\\e519\"}.fa-circle-user:before,.fa-user-circle:before{content:\"\\f2bd\"}.fa-square-y:before{content:\"\\e287\"}.fa-user-doctor-hair:before{content:\"\\e458\"}.fa-planet-ringed:before{content:\"\\e020\"}.fa-mushroom:before{content:\"\\e425\"}.fa-user-shield:before{content:\"\\f505\"}.fa-megaphone:before{content:\"\\f675\"}.fa-circle-exclamation-check:before{content:\"\\e10d\"}.fa-wind:before{content:\"\\f72e\"}.fa-box-dollar:before,.fa-box-usd:before{content:\"\\f4a0\"}.fa-car-burst:before,.fa-car-crash:before{content:\"\\f5e1\"}.fa-y:before{content:\"\\59\"}.fa-user-headset:before{content:\"\\f82d\"}.fa-arrows-retweet:before,.fa-retweet-alt:before{content:\"\\f361\"}.fa-person-snowboarding:before,.fa-snowboarding:before{content:\"\\f7ce\"}.fa-chevron-square-right:before,.fa-square-chevron-right:before{content:\"\\f32b\"}.fa-lacrosse-stick-ball:before{content:\"\\e3b6\"}.fa-shipping-fast:before,.fa-truck-fast:before{content:\"\\f48b\"}.fa-star-sharp:before{content:\"\\e28b\"}.fa-circle-1:before{content:\"\\e0ee\"}.fa-circle-star:before,.fa-star-circle:before{content:\"\\e123\"}.fa-fish:before{content:\"\\f578\"}.fa-cloud-fog:before,.fa-fog:before{content:\"\\f74e\"}.fa-waffle:before{content:\"\\e466\"}.fa-music-alt:before,.fa-music-note:before{content:\"\\f8cf\"}.fa-hexagon-exclamation:before{content:\"\\e417\"}.fa-cart-shopping-fast:before{content:\"\\e0dc\"}.fa-object-union:before{content:\"\\e49f\"}.fa-user-graduate:before{content:\"\\f501\"}.fa-starfighter:before{content:\"\\e037\"}.fa-adjust:before,.fa-circle-half-stroke:before{content:\"\\f042\"}.fa-arrow-right-long-to-line:before{content:\"\\e3d5\"}.fa-arrow-square-down:before,.fa-square-arrow-down:before{content:\"\\f339\"}.fa-clapperboard:before{content:\"\\e131\"}.fa-chevron-square-left:before,.fa-square-chevron-left:before{content:\"\\f32a\"}.fa-phone-intercom:before{content:\"\\e434\"}.fa-chain-horizontal:before,.fa-link-horizontal:before{content:\"\\e1cb\"}.fa-mango:before{content:\"\\e30f\"}.fa-music-alt-slash:before,.fa-music-note-slash:before{content:\"\\f8d0\"}.fa-circle-radiation:before,.fa-radiation-alt:before{content:\"\\f7ba\"}.fa-face-tongue-sweat:before{content:\"\\e39e\"}.fa-globe-stand:before{content:\"\\f5f6\"}.fa-baseball-ball:before,.fa-baseball:before{content:\"\\f433\"}.fa-circle-p:before{content:\"\\e11a\"}.fa-award-simple:before{content:\"\\e0ab\"}.fa-jet-fighter-up:before{content:\"\\e518\"}.fa-diagram-project:before,.fa-project-diagram:before{content:\"\\f542\"}.fa-pedestal:before{content:\"\\e20d\"}.fa-chart-pyramid:before{content:\"\\e0e6\"}.fa-sidebar:before{content:\"\\e24e\"}.fa-frosty-head:before,.fa-snowman-head:before{content:\"\\f79b\"}.fa-copy:before{content:\"\\f0c5\"}.fa-burger-glass:before{content:\"\\e0ce\"}.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before{content:\"\\f6a9\"}.fa-hand-sparkles:before{content:\"\\e05d\"}.fa-bars-filter:before{content:\"\\e0ad\"}.fa-paintbrush-pencil:before{content:\"\\e206\"}.fa-party-bell:before{content:\"\\e31a\"}.fa-user-vneck-hair:before{content:\"\\e462\"}.fa-jack-o-lantern:before{content:\"\\f30e\"}.fa-grip-horizontal:before,.fa-grip:before{content:\"\\f58d\"}.fa-share-from-square:before,.fa-share-square:before{content:\"\\f14d\"}.fa-keynote:before{content:\"\\f66c\"}.fa-gun:before{content:\"\\e19b\"}.fa-phone-square:before,.fa-square-phone:before{content:\"\\f098\"}.fa-add:before,.fa-plus:before{content:\"\\2b\"}.fa-expand:before{content:\"\\f065\"}.fa-computer:before{content:\"\\e4e5\"}.fa-fort:before{content:\"\\e486\"}.fa-cloud-check:before{content:\"\\e35c\"}.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:\"\\f00d\"}.fa-face-smirking:before{content:\"\\e397\"}.fa-arrows-up-down-left-right:before,.fa-arrows:before{content:\"\\f047\"}.fa-chalkboard-teacher:before,.fa-chalkboard-user:before{content:\"\\f51c\"}.fa-rhombus:before{content:\"\\e23b\"}.fa-claw-marks:before{content:\"\\f6c2\"}.fa-peso-sign:before{content:\"\\e222\"}.fa-face-smile-tongue:before{content:\"\\e394\"}.fa-cart-circle-xmark:before{content:\"\\e3f4\"}.fa-building-shield:before{content:\"\\e4d8\"}.fa-circle-phone-flip:before,.fa-phone-circle-alt:before{content:\"\\e11c\"}.fa-baby:before{content:\"\\f77c\"}.fa-users-line:before{content:\"\\e592\"}.fa-quote-left-alt:before,.fa-quote-left:before{content:\"\\f10d\"}.fa-tractor:before{content:\"\\f722\"}.fa-key-skeleton:before{content:\"\\f6f3\"}.fa-trash-arrow-up:before,.fa-trash-restore:before{content:\"\\f829\"}.fa-arrow-down-up-lock:before{content:\"\\e4b0\"}.fa-arrow-down-to-bracket:before{content:\"\\e094\"}.fa-lines-leaning:before{content:\"\\e51e\"}.fa-square-q:before{content:\"\\e27b\"}.fa-ruler-combined:before{content:\"\\f546\"}.fa-icons-alt:before,.fa-symbols:before{content:\"\\f86e\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-highlighter-line:before{content:\"\\e1af\"}.fa-bracket-left:before,.fa-bracket-square:before,.fa-bracket:before{content:\"\\5b\"}.fa-island-tree-palm:before,.fa-island-tropical:before{content:\"\\f811\"}.fa-arrow-from-left:before,.fa-arrow-right-from-line:before{content:\"\\f343\"}.fa-h2:before{content:\"\\f314\"}.fa-equals:before{content:\"\\3d\"}.fa-cake-slice:before,.fa-shortcake:before{content:\"\\e3e5\"}.fa-peanut:before{content:\"\\e430\"}.fa-wrench-simple:before{content:\"\\e2d1\"}.fa-blender:before{content:\"\\f517\"}.fa-teeth:before{content:\"\\f62e\"}.fa-tally-2:before{content:\"\\e295\"}.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-cars:before{content:\"\\f85b\"}.fa-axe-battle:before{content:\"\\f6b3\"}.fa-user-hair-long:before{content:\"\\e45b\"}.fa-map:before{content:\"\\f279\"}.fa-file-circle-info:before{content:\"\\e493\"}.fa-face-disappointed:before{content:\"\\e36f\"}.fa-lasso-sparkles:before{content:\"\\e1c9\"}.fa-clock-eleven:before{content:\"\\e347\"}.fa-rocket:before{content:\"\\f135\"}.fa-siren-on:before{content:\"\\e02e\"}.fa-clock-ten:before{content:\"\\e354\"}.fa-candle-holder:before{content:\"\\f6bc\"}.fa-video-arrow-down-left:before{content:\"\\e2c8\"}.fa-photo-film:before,.fa-photo-video:before{content:\"\\f87c\"}.fa-floppy-disk-circle-arrow-right:before,.fa-save-circle-arrow-right:before{content:\"\\e180\"}.fa-folder-minus:before{content:\"\\f65d\"}.fa-planet-moon:before{content:\"\\e01f\"}.fa-face-eyes-xmarks:before{content:\"\\e374\"}.fa-chart-scatter:before{content:\"\\f7ee\"}.fa-display-arrow-down:before{content:\"\\e164\"}.fa-store:before{content:\"\\f54e\"}.fa-arrow-trend-up:before{content:\"\\e098\"}.fa-plug-circle-minus:before{content:\"\\e55e\"}.fa-olive-branch:before{content:\"\\e317\"}.fa-angle:before{content:\"\\e08c\"}.fa-vacuum-robot:before{content:\"\\e04e\"}.fa-sign-hanging:before,.fa-sign:before{content:\"\\f4d9\"}.fa-square-divide:before{content:\"\\e26a\"}.fa-signal-stream-slash:before{content:\"\\e250\"}.fa-bezier-curve:before{content:\"\\f55b\"}.fa-eye-dropper-half:before{content:\"\\e173\"}.fa-store-lock:before{content:\"\\e4a6\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-cloud-bolt-sun:before,.fa-thunderstorm-sun:before{content:\"\\f76e\"}.fa-camera-slash:before{content:\"\\e0d9\"}.fa-comment-quote:before{content:\"\\e14c\"}.fa-tablet-android:before,.fa-tablet:before{content:\"\\f3fb\"}.fa-school-flag:before{content:\"\\e56e\"}.fa-message-code:before{content:\"\\e1df\"}.fa-glass-half-empty:before,.fa-glass-half-full:before,.fa-glass-half:before{content:\"\\e192\"}.fa-fill:before{content:\"\\f575\"}.fa-comment-alt-minus:before,.fa-message-minus:before{content:\"\\f4a7\"}.fa-angle-up:before{content:\"\\f106\"}.fa-drumstick-bite:before{content:\"\\f6d7\"}.fa-chain-horizontal-slash:before,.fa-link-horizontal-slash:before{content:\"\\e1cc\"}.fa-holly-berry:before{content:\"\\f7aa\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-bacteria:before{content:\"\\e059\"}.fa-clouds:before{content:\"\\f744\"}.fa-money-bill-simple:before{content:\"\\e1f1\"}.fa-hand-lizard:before{content:\"\\f258\"}.fa-table-pivot:before{content:\"\\e291\"}.fa-filter-slash:before{content:\"\\e17d\"}.fa-trash-can-arrow-turn-left:before,.fa-trash-can-undo:before,.fa-trash-undo-alt:before{content:\"\\f896\"}.fa-notdef:before{content:\"\\e1fe\"}.fa-disease:before{content:\"\\f7fa\"}.fa-person-to-door:before{content:\"\\e433\"}.fa-turntable:before{content:\"\\f8e4\"}.fa-briefcase-medical:before{content:\"\\f469\"}.fa-genderless:before{content:\"\\f22d\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-signal-1:before,.fa-signal-weak:before{content:\"\\f68c\"}.fa-clock-five:before{content:\"\\e349\"}.fa-retweet:before{content:\"\\f079\"}.fa-car-alt:before,.fa-car-rear:before{content:\"\\f5de\"}.fa-pump-soap:before{content:\"\\e06b\"}.fa-computer-classic:before{content:\"\\f8b1\"}.fa-frame:before{content:\"\\e495\"}.fa-video-slash:before{content:\"\\f4e2\"}.fa-battery-2:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-ellipsis-h-alt:before,.fa-ellipsis-stroke:before{content:\"\\f39b\"}.fa-radio:before{content:\"\\f8d7\"}.fa-baby-carriage:before,.fa-carriage-baby:before{content:\"\\f77d\"}.fa-face-expressionless:before{content:\"\\e373\"}.fa-down-to-dotted-line:before{content:\"\\e408\"}.fa-cloud-music:before{content:\"\\f8ae\"}.fa-traffic-light:before{content:\"\\f637\"}.fa-cloud-minus:before{content:\"\\e35d\"}.fa-thermometer:before{content:\"\\f491\"}.fa-shield-minus:before{content:\"\\e249\"}.fa-vr-cardboard:before{content:\"\\f729\"}.fa-car-tilt:before{content:\"\\f5e5\"}.fa-gauge-circle-minus:before{content:\"\\e497\"}.fa-brightness-low:before{content:\"\\e0ca\"}.fa-hand-middle-finger:before{content:\"\\f806\"}.fa-percent:before,.fa-percentage:before{content:\"\\25\"}.fa-truck-moving:before{content:\"\\f4df\"}.fa-glass-water-droplet:before{content:\"\\e4f5\"}.fa-conveyor-belt:before{content:\"\\f46e\"}.fa-location-check:before,.fa-map-marker-check:before{content:\"\\f606\"}.fa-coin-vertical:before{content:\"\\e3fd\"}.fa-display:before{content:\"\\e163\"}.fa-person-sign:before{content:\"\\f757\"}.fa-face-smile:before,.fa-smile:before{content:\"\\f118\"}.fa-phone-hangup:before{content:\"\\e225\"}.fa-signature-slash:before{content:\"\\e3cb\"}.fa-thumb-tack:before,.fa-thumbtack:before{content:\"\\f08d\"}.fa-wheat-slash:before{content:\"\\e339\"}.fa-trophy:before{content:\"\\f091\"}.fa-clouds-sun:before{content:\"\\f746\"}.fa-person-praying:before,.fa-pray:before{content:\"\\f683\"}.fa-hammer:before{content:\"\\f6e3\"}.fa-face-vomit:before{content:\"\\e3a0\"}.fa-speakers:before{content:\"\\f8e0\"}.fa-teletype-answer:before,.fa-tty-answer:before{content:\"\\e2b9\"}.fa-mug-tea-saucer:before{content:\"\\e1f5\"}.fa-diagram-lean-canvas:before{content:\"\\e156\"}.fa-alt:before{content:\"\\e08a\"}.fa-dial-med-high:before,.fa-dial:before{content:\"\\e15b\"}.fa-hand-peace:before{content:\"\\f25b\"}.fa-circle-trash:before,.fa-trash-circle:before{content:\"\\e126\"}.fa-rotate:before,.fa-sync-alt:before{content:\"\\f2f1\"}.fa-circle-quarters:before{content:\"\\e3f8\"}.fa-spinner:before{content:\"\\f110\"}.fa-tower-control:before{content:\"\\e2a2\"}.fa-arrow-up-triangle-square:before,.fa-sort-shapes-up:before{content:\"\\f88a\"}.fa-whale:before{content:\"\\f72c\"}.fa-robot:before{content:\"\\f544\"}.fa-peace:before{content:\"\\f67c\"}.fa-party-horn:before{content:\"\\e31b\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-sun-alt:before,.fa-sun-bright:before{content:\"\\e28f\"}.fa-warehouse:before{content:\"\\f494\"}.fa-lock-keyhole-open:before,.fa-lock-open-alt:before{content:\"\\f3c2\"}.fa-box-fragile:before,.fa-square-fragile:before,.fa-square-wine-glass-crack:before{content:\"\\f49b\"}.fa-arrow-up-right-dots:before{content:\"\\e4b7\"}.fa-square-n:before{content:\"\\e277\"}.fa-splotch:before{content:\"\\f5bc\"}.fa-face-grin-hearts:before,.fa-grin-hearts:before{content:\"\\f584\"}.fa-meter:before{content:\"\\e1e8\"}.fa-mandolin:before{content:\"\\f6f9\"}.fa-dice-four:before{content:\"\\f524\"}.fa-sim-card:before{content:\"\\f7c4\"}.fa-transgender-alt:before,.fa-transgender:before{content:\"\\f225\"}.fa-mercury:before{content:\"\\f223\"}.fa-up-from-bracket:before{content:\"\\e590\"}.fa-knife-kitchen:before{content:\"\\f6f5\"}.fa-border-right:before{content:\"\\f852\"}.fa-arrow-turn-down:before,.fa-level-down:before{content:\"\\f149\"}.fa-spade:before{content:\"\\f2f4\"}.fa-card-spade:before{content:\"\\e3ec\"}.fa-line-columns:before{content:\"\\f870\"}.fa-arrow-right-to-line:before,.fa-arrow-to-right:before{content:\"\\f340\"}.fa-person-falling-burst:before{content:\"\\e547\"}.fa-flag-pennant:before,.fa-pennant:before{content:\"\\f456\"}.fa-conveyor-belt-empty:before{content:\"\\e150\"}.fa-award:before{content:\"\\f559\"}.fa-ticket-alt:before,.fa-ticket-simple:before{content:\"\\f3ff\"}.fa-building:before{content:\"\\f1ad\"}.fa-angle-double-left:before,.fa-angles-left:before{content:\"\\f100\"}.fa-camcorder:before,.fa-video-handheld:before{content:\"\\f8a8\"}.fa-pancakes:before{content:\"\\e42d\"}.fa-album-circle-user:before{content:\"\\e48d\"}.fa-qrcode:before{content:\"\\f029\"}.fa-dice-d10:before{content:\"\\f6cd\"}.fa-fireplace:before{content:\"\\f79a\"}.fa-browser:before{content:\"\\f37e\"}.fa-pen-paintbrush:before,.fa-pencil-paintbrush:before{content:\"\\f618\"}.fa-fish-cooked:before{content:\"\\f7fe\"}.fa-chair-office:before{content:\"\\f6c1\"}.fa-nesting-dolls:before{content:\"\\e3ba\"}.fa-clock-rotate-left:before,.fa-history:before{content:\"\\f1da\"}.fa-trumpet:before{content:\"\\f8e3\"}.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before{content:\"\\f583\"}.fa-fire-smoke:before{content:\"\\f74b\"}.fa-phone-missed:before{content:\"\\e226\"}.fa-arrow-right-from-file:before,.fa-file-export:before{content:\"\\f56e\"}.fa-shield-blank:before,.fa-shield:before{content:\"\\f132\"}.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before{content:\"\\f885\"}.fa-arrows-repeat-1:before,.fa-repeat-1-alt:before{content:\"\\f366\"}.fa-gun-slash:before{content:\"\\e19c\"}.fa-avocado:before{content:\"\\e0aa\"}.fa-binary:before{content:\"\\e33b\"}.fa-glasses-alt:before,.fa-glasses-round:before{content:\"\\f5f5\"}.fa-phone-plus:before{content:\"\\f4d2\"}.fa-ditto:before{content:\"\\22\"}.fa-person-seat:before{content:\"\\e21e\"}.fa-house-medical:before{content:\"\\e3b2\"}.fa-golf-ball-tee:before,.fa-golf-ball:before{content:\"\\f450\"}.fa-chevron-circle-left:before,.fa-circle-chevron-left:before{content:\"\\f137\"}.fa-house-chimney-window:before{content:\"\\e00d\"}.fa-scythe:before{content:\"\\f710\"}.fa-pen-nib:before{content:\"\\f5ad\"}.fa-ban-parking:before,.fa-parking-circle-slash:before{content:\"\\f616\"}.fa-tent-arrow-turn-left:before{content:\"\\e580\"}.fa-face-diagonal-mouth:before{content:\"\\e47e\"}.fa-diagram-cells:before{content:\"\\e475\"}.fa-cricket-bat-ball:before,.fa-cricket:before{content:\"\\f449\"}.fa-tents:before{content:\"\\e582\"}.fa-magic:before,.fa-wand-magic:before{content:\"\\f0d0\"}.fa-dog:before{content:\"\\f6d3\"}.fa-pen-line:before{content:\"\\e212\"}.fa-atom-alt:before,.fa-atom-simple:before{content:\"\\f5d3\"}.fa-ampersand:before{content:\"\\26\"}.fa-carrot:before{content:\"\\f787\"}.fa-arrow-from-bottom:before,.fa-arrow-up-from-line:before{content:\"\\f342\"}.fa-moon:before{content:\"\\f186\"}.fa-pen-slash:before{content:\"\\e213\"}.fa-wine-glass-alt:before,.fa-wine-glass-empty:before{content:\"\\f5ce\"}.fa-square-star:before{content:\"\\e27f\"}.fa-cheese:before{content:\"\\f7ef\"}.fa-send-backward:before{content:\"\\f87f\"}.fa-yin-yang:before{content:\"\\f6ad\"}.fa-music:before{content:\"\\f001\"}.fa-compass-slash:before{content:\"\\f5e9\"}.fa-clock-one:before{content:\"\\e34e\"}.fa-file-music:before{content:\"\\f8b6\"}.fa-code-commit:before{content:\"\\f386\"}.fa-temperature-low:before{content:\"\\f76b\"}.fa-biking:before,.fa-person-biking:before{content:\"\\f84a\"}.fa-skeleton:before{content:\"\\f620\"}.fa-circle-g:before{content:\"\\e10f\"}.fa-circle-arrow-up-left:before{content:\"\\e0fb\"}.fa-coin-blank:before{content:\"\\e3fb\"}.fa-broom:before{content:\"\\f51a\"}.fa-vacuum:before{content:\"\\e04d\"}.fa-shield-heart:before{content:\"\\e574\"}.fa-card-heart:before{content:\"\\e3eb\"}.fa-lightbulb-cfl-on:before{content:\"\\e5a7\"}.fa-melon:before{content:\"\\e310\"}.fa-gopuram:before{content:\"\\f664\"}.fa-earth-oceania:before,.fa-globe-oceania:before{content:\"\\e47b\"}.fa-container-storage:before{content:\"\\f4b7\"}.fa-face-pouting:before{content:\"\\e387\"}.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before{content:\"\\f2d3\"}.fa-exploding-head:before,.fa-face-explode:before{content:\"\\e2fe\"}.fa-hashtag:before{content:\"\\23\"}.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before{content:\"\\f424\"}.fa-oil-can:before{content:\"\\f613\"}.fa-t:before{content:\"\\54\"}.fa-transformer-bolt:before{content:\"\\e2a4\"}.fa-hippo:before{content:\"\\f6ed\"}.fa-chart-column:before{content:\"\\e0e3\"}.fa-cassette-vhs:before,.fa-vhs:before{content:\"\\f8ec\"}.fa-infinity:before{content:\"\\f534\"}.fa-vial-circle-check:before{content:\"\\e596\"}.fa-chimney:before{content:\"\\f78b\"}.fa-object-intersect:before{content:\"\\e49d\"}.fa-person-arrow-down-to-line:before{content:\"\\e538\"}.fa-voicemail:before{content:\"\\f897\"}.fa-block-brick:before,.fa-wall-brick:before{content:\"\\e3db\"}.fa-fan:before{content:\"\\f863\"}.fa-bags-shopping:before{content:\"\\f847\"}.fa-paragraph-left:before,.fa-paragraph-rtl:before{content:\"\\f878\"}.fa-person-walking-luggage:before{content:\"\\e554\"}.fa-caravan-alt:before,.fa-caravan-simple:before{content:\"\\e000\"}.fa-turtle:before{content:\"\\f726\"}.fa-arrows-alt-v:before,.fa-up-down:before{content:\"\\f338\"}.fa-cloud-moon-rain:before{content:\"\\f73c\"}.fa-booth-curtain:before{content:\"\\f734\"}.fa-calendar:before{content:\"\\f133\"}.fa-box-heart:before{content:\"\\f49d\"}.fa-trailer:before{content:\"\\e041\"}.fa-user-doctor-message:before,.fa-user-md-chat:before{content:\"\\f82e\"}.fa-bahai:before,.fa-haykal:before{content:\"\\f666\"}.fa-amp-guitar:before{content:\"\\f8a1\"}.fa-sd-card:before{content:\"\\f7c2\"}.fa-volume-slash:before{content:\"\\f2e2\"}.fa-border-bottom:before{content:\"\\f84d\"}.fa-wifi-1:before,.fa-wifi-weak:before{content:\"\\f6aa\"}.fa-dragon:before{content:\"\\f6d5\"}.fa-shoe-prints:before{content:\"\\f54b\"}.fa-circle-plus:before,.fa-plus-circle:before{content:\"\\f055\"}.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before{content:\"\\f58b\"}.fa-hand-holding:before{content:\"\\f4bd\"}.fa-plug-circle-exclamation:before{content:\"\\e55d\"}.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before{content:\"\\f127\"}.fa-clone:before{content:\"\\f24d\"}.fa-person-walking-arrow-loop-left:before{content:\"\\e551\"}.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before{content:\"\\f882\"}.fa-fire-alt:before,.fa-fire-flame-curved:before{content:\"\\f7e4\"}.fa-tornado:before{content:\"\\f76f\"}.fa-file-circle-plus:before{content:\"\\e494\"}.fa-delete-right:before{content:\"\\e154\"}.fa-book-quran:before,.fa-quran:before{content:\"\\f687\"}.fa-circle-quarter:before{content:\"\\e11f\"}.fa-anchor:before{content:\"\\f13d\"}.fa-border-all:before{content:\"\\f84c\"}.fa-function:before{content:\"\\f661\"}.fa-angry:before,.fa-face-angry:before{content:\"\\f556\"}.fa-people-simple:before{content:\"\\e21b\"}.fa-cookie-bite:before{content:\"\\f564\"}.fa-arrow-trend-down:before{content:\"\\e097\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-face-monocle:before{content:\"\\e380\"}.fa-draw-polygon:before{content:\"\\f5ee\"}.fa-balance-scale:before,.fa-scale-balanced:before{content:\"\\f24e\"}.fa-calendar-lines:before,.fa-calendar-note:before{content:\"\\e0d5\"}.fa-arrow-down-big-small:before,.fa-sort-size-down:before{content:\"\\f88c\"}.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before{content:\"\\f62a\"}.fa-do-not-enter:before{content:\"\\f5ec\"}.fa-shower:before{content:\"\\f2cc\"}.fa-dice-d8:before{content:\"\\f6d2\"}.fa-desktop-alt:before,.fa-desktop:before{content:\"\\f390\"}.fa-m:before{content:\"\\4d\"}.fa-grip-dots-vertical:before{content:\"\\e411\"}.fa-face-viewfinder:before{content:\"\\e2ff\"}.fa-creemee:before,.fa-soft-serve:before{content:\"\\e400\"}.fa-h5:before{content:\"\\e412\"}.fa-hand-back-point-down:before{content:\"\\e19e\"}.fa-table-list:before,.fa-th-list:before{content:\"\\f00b\"}.fa-comment-sms:before,.fa-sms:before{content:\"\\f7cd\"}.fa-rectangle-landscape:before,.fa-rectangle:before{content:\"\\f2fa\"}.fa-clipboard-list-check:before{content:\"\\f737\"}.fa-turkey:before{content:\"\\f725\"}.fa-book:before{content:\"\\f02d\"}.fa-user-plus:before{content:\"\\f234\"}.fa-ice-skate:before{content:\"\\f7ac\"}.fa-check:before{content:\"\\f00c\"}.fa-battery-4:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-tomato:before{content:\"\\e330\"}.fa-sword-laser:before{content:\"\\e03b\"}.fa-house-circle-check:before{content:\"\\e509\"}.fa-buildings:before{content:\"\\e0cc\"}.fa-angle-left:before{content:\"\\f104\"}.fa-cart-flatbed-boxes:before,.fa-dolly-flatbed-alt:before{content:\"\\f475\"}.fa-diagram-successor:before{content:\"\\e47a\"}.fa-truck-arrow-right:before{content:\"\\e58b\"}.fa-square-w:before{content:\"\\e285\"}.fa-arrows-split-up-and-left:before{content:\"\\e4bc\"}.fa-lamp:before{content:\"\\f4ca\"}.fa-airplay:before{content:\"\\e089\"}.fa-fist-raised:before,.fa-hand-fist:before{content:\"\\f6de\"}.fa-shield-quartered:before{content:\"\\e575\"}.fa-slash-forward:before{content:\"\\2f\"}.fa-location-pen:before,.fa-map-marker-edit:before{content:\"\\f607\"}.fa-cloud-moon:before{content:\"\\f6c3\"}.fa-pot-food:before{content:\"\\e43f\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-person-falling:before{content:\"\\e546\"}.fa-image-portrait:before,.fa-portrait:before{content:\"\\f3e0\"}.fa-user-tag:before{content:\"\\f507\"}.fa-rug:before{content:\"\\e569\"}.fa-print-slash:before{content:\"\\f686\"}.fa-earth-europe:before,.fa-globe-europe:before{content:\"\\f7a2\"}.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before{content:\"\\f59d\"}.fa-hand-back-point-ribbon:before{content:\"\\e1a0\"}.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f410\"}.fa-tire-rugged:before{content:\"\\f634\"}.fa-lightbulb-dollar:before{content:\"\\f670\"}.fa-cowbell:before{content:\"\\f8b3\"}.fa-baht-sign:before{content:\"\\e0ac\"}.fa-corner:before{content:\"\\e3fe\"}.fa-chevron-double-right:before,.fa-chevrons-right:before{content:\"\\f324\"}.fa-book-open:before{content:\"\\f518\"}.fa-book-journal-whills:before,.fa-journal-whills:before{content:\"\\f66a\"}.fa-inhaler:before{content:\"\\f5f9\"}.fa-handcuffs:before{content:\"\\e4f8\"}.fa-snake:before{content:\"\\f716\"}.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before{content:\"\\f071\"}.fa-note-medical:before{content:\"\\e200\"}.fa-database:before{content:\"\\f1c0\"}.fa-down-left:before{content:\"\\e16a\"}.fa-arrow-turn-right:before,.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-face-thinking:before{content:\"\\e39b\"}.fa-turn-down-right:before{content:\"\\e455\"}.fa-bottle-droplet:before{content:\"\\e4c4\"}.fa-mask-face:before{content:\"\\e1d7\"}.fa-hill-rockslide:before{content:\"\\e508\"}.fa-scanner-keyboard:before{content:\"\\f489\"}.fa-circle-o:before{content:\"\\e119\"}.fa-grid-horizontal:before{content:\"\\e307\"}.fa-comment-alt-dollar:before,.fa-message-dollar:before{content:\"\\f650\"}.fa-exchange-alt:before,.fa-right-left:before{content:\"\\f362\"}.fa-columns-3:before{content:\"\\e361\"}.fa-paper-plane:before{content:\"\\f1d8\"}.fa-road-circle-exclamation:before{content:\"\\e565\"}.fa-dungeon:before{content:\"\\f6d9\"}.fa-hand-holding-box:before{content:\"\\f47b\"}.fa-input-text:before{content:\"\\e1bf\"}.fa-window-alt:before,.fa-window-flip:before{content:\"\\f40f\"}.fa-align-right:before{content:\"\\f038\"}.fa-scanner-gun:before,.fa-scanner:before{content:\"\\f488\"}.fa-tire:before{content:\"\\f631\"}.fa-engine:before{content:\"\\e16e\"}.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before{content:\"\\f53b\"}.fa-life-ring:before{content:\"\\f1cd\"}.fa-hands:before,.fa-sign-language:before,.fa-signing:before{content:\"\\f2a7\"}.fa-caret-circle-right:before,.fa-circle-caret-right:before{content:\"\\f330\"}.fa-wheat:before{content:\"\\f72d\"}.fa-file-spreadsheet:before{content:\"\\f65b\"}.fa-audio-description-slash:before{content:\"\\e0a8\"}.fa-calendar-day:before{content:\"\\f783\"}.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before{content:\"\\f5c5\"}.fa-arrows-up-down:before,.fa-arrows-v:before{content:\"\\f07d\"}.fa-chess-pawn-alt:before,.fa-chess-pawn-piece:before{content:\"\\f444\"}.fa-face-grimace:before,.fa-grimace:before{content:\"\\f57f\"}.fa-wheelchair-alt:before,.fa-wheelchair-move:before{content:\"\\e2ce\"}.fa-level-down-alt:before,.fa-turn-down:before{content:\"\\f3be\"}.fa-square-s:before{content:\"\\e27d\"}.fa-barcode-alt:before,.fa-rectangle-barcode:before{content:\"\\f463\"}.fa-person-walking-arrow-right:before{content:\"\\e552\"}.fa-envelope-square:before,.fa-square-envelope:before{content:\"\\f199\"}.fa-dice:before{content:\"\\f522\"}.fa-unicorn:before{content:\"\\f727\"}.fa-bowling-ball:before{content:\"\\f436\"}.fa-pompebled:before{content:\"\\e43d\"}.fa-brain:before{content:\"\\f5dc\"}.fa-watch-smart:before{content:\"\\e2cc\"}.fa-book-user:before{content:\"\\f7e7\"}.fa-sensor-cloud:before,.fa-sensor-smoke:before{content:\"\\e02c\"}.fa-clapperboard-play:before{content:\"\\e132\"}.fa-band-aid:before,.fa-bandage:before{content:\"\\f462\"}.fa-calendar-minus:before{content:\"\\f272\"}.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before{content:\"\\f057\"}.fa-circle-4:before{content:\"\\e0f1\"}.fa-gifts:before{content:\"\\f79c\"}.fa-album-collection:before{content:\"\\f8a0\"}.fa-hotel:before{content:\"\\f594\"}.fa-earth-asia:before,.fa-globe-asia:before{content:\"\\f57e\"}.fa-id-card-alt:before,.fa-id-card-clip:before{content:\"\\f47f\"}.fa-magnifying-glass-plus:before,.fa-search-plus:before{content:\"\\f00e\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-cloud-showers:before{content:\"\\f73f\"}.fa-user-clock:before{content:\"\\f4fd\"}.fa-onion:before{content:\"\\e427\"}.fa-clock-twelve-thirty:before{content:\"\\e359\"}.fa-arrow-down-to-dotted-line:before{content:\"\\e095\"}.fa-allergies:before,.fa-hand-dots:before{content:\"\\f461\"}.fa-file-invoice:before{content:\"\\f570\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-rectangle-wide:before{content:\"\\f2fc\"}.fa-comment-arrow-up:before{content:\"\\e144\"}.fa-garlic:before{content:\"\\e40e\"}.fa-coffee:before,.fa-mug-saucer:before{content:\"\\f0f4\"}.fa-brush:before{content:\"\\f55d\"}.fa-tree-decorated:before{content:\"\\f7dc\"}.fa-mask:before{content:\"\\f6fa\"}.fa-calendar-heart:before{content:\"\\e0d3\"}.fa-magnifying-glass-minus:before,.fa-search-minus:before{content:\"\\f010\"}.fa-flower:before{content:\"\\f7ff\"}.fa-ruler-vertical:before{content:\"\\f548\"}.fa-user-alt:before,.fa-user-large:before{content:\"\\f406\"}.fa-starship-freighter:before{content:\"\\e03a\"}.fa-train-tram:before{content:\"\\e5b4\"}.fa-bridge-suspension:before{content:\"\\e4cd\"}.fa-trash-check:before{content:\"\\e2af\"}.fa-user-nurse:before{content:\"\\f82f\"}.fa-boombox:before{content:\"\\f8a5\"}.fa-syringe:before{content:\"\\f48e\"}.fa-cloud-sun:before{content:\"\\f6c4\"}.fa-shield-exclamation:before{content:\"\\e247\"}.fa-stopwatch-20:before{content:\"\\e06f\"}.fa-square-full:before{content:\"\\f45c\"}.fa-grip-dots:before{content:\"\\e410\"}.fa-comment-exclamation:before{content:\"\\f4af\"}.fa-pen-swirl:before{content:\"\\e214\"}.fa-falafel:before{content:\"\\e40a\"}.fa-circle-2:before{content:\"\\e0ef\"}.fa-magnet:before{content:\"\\f076\"}.fa-jar:before{content:\"\\e516\"}.fa-gramophone:before{content:\"\\f8bd\"}.fa-dice-d12:before{content:\"\\f6ce\"}.fa-note-sticky:before,.fa-sticky-note:before{content:\"\\f249\"}.fa-arrow-alt-down:before,.fa-down:before{content:\"\\f354\"}.fa-100:before,.fa-hundred-points:before{content:\"\\e41c\"}.fa-paperclip-vertical:before{content:\"\\e3c2\"}.fa-wind-circle-exclamation:before,.fa-wind-warning:before{content:\"\\f776\"}.fa-location-pin-slash:before,.fa-map-marker-slash:before{content:\"\\f60c\"}.fa-face-sad-sweat:before{content:\"\\e38a\"}.fa-bug-slash:before{content:\"\\e490\"}.fa-cupcake:before{content:\"\\e402\"}.fa-light-switch-off:before{content:\"\\e018\"}.fa-toggle-large-off:before{content:\"\\e5b0\"}.fa-pen-fancy-slash:before{content:\"\\e210\"}.fa-truck-container:before{content:\"\\f4dc\"}.fa-boot:before{content:\"\\f782\"}.fa-arrow-up-from-water-pump:before{content:\"\\e4b6\"}.fa-file-check:before{content:\"\\f316\"}.fa-bone:before{content:\"\\f5d7\"}.fa-cards-blank:before{content:\"\\e4df\"}.fa-circle-3:before{content:\"\\e0f0\"}.fa-bench-tree:before{content:\"\\e2e7\"}.fa-keyboard-brightness-low:before{content:\"\\e1c1\"}.fa-ski-boot-ski:before{content:\"\\e3cd\"}.fa-brain-circuit:before{content:\"\\e0c6\"}.fa-user-injured:before{content:\"\\f728\"}.fa-block-brick-fire:before,.fa-firewall:before{content:\"\\e3dc\"}.fa-face-sad-tear:before,.fa-sad-tear:before{content:\"\\f5b4\"}.fa-plane:before{content:\"\\f072\"}.fa-tent-arrows-down:before{content:\"\\e581\"}.fa-exclamation:before{content:\"\\21\"}.fa-arrows-spin:before{content:\"\\e4bb\"}.fa-face-smile-relaxed:before{content:\"\\e392\"}.fa-comment-times:before,.fa-comment-xmark:before{content:\"\\f4b5\"}.fa-print:before{content:\"\\f02f\"}.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before{content:\"\\e2bb\"}.fa-face-nose-steam:before{content:\"\\e382\"}.fa-circle-waveform-lines:before,.fa-waveform-circle:before{content:\"\\e12d\"}.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before{content:\"\\24\"}.fa-ferris-wheel:before{content:\"\\e174\"}.fa-computer-speaker:before{content:\"\\f8b2\"}.fa-skull-cow:before{content:\"\\f8de\"}.fa-x:before{content:\"\\58\"}.fa-magnifying-glass-dollar:before,.fa-search-dollar:before{content:\"\\f688\"}.fa-users-cog:before,.fa-users-gear:before{content:\"\\f509\"}.fa-person-military-pointing:before{content:\"\\e54a\"}.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before{content:\"\\f19c\"}.fa-circle-t:before{content:\"\\e124\"}.fa-sack:before{content:\"\\f81c\"}.fa-grid-2:before{content:\"\\e196\"}.fa-camera-cctv:before,.fa-cctv:before{content:\"\\f8ac\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-trowel:before{content:\"\\e589\"}.fa-horizontal-rule:before{content:\"\\f86c\"}.fa-bed-alt:before,.fa-bed-front:before{content:\"\\f8f7\"}.fa-d:before{content:\"\\44\"}.fa-stapler:before{content:\"\\e5af\"}.fa-masks-theater:before,.fa-theater-masks:before{content:\"\\f630\"}.fa-kip-sign:before{content:\"\\e1c4\"}.fa-face-woozy:before{content:\"\\e3a2\"}.fa-cloud-question:before{content:\"\\e492\"}.fa-pineapple:before{content:\"\\e31f\"}.fa-hand-point-left:before{content:\"\\f0a5\"}.fa-gallery-thumbnails:before{content:\"\\e3aa\"}.fa-circle-j:before{content:\"\\e112\"}.fa-eyes:before{content:\"\\e367\"}.fa-handshake-alt:before,.fa-handshake-simple:before{content:\"\\f4c6\"}.fa-file-caret-up:before,.fa-page-caret-up:before{content:\"\\e42a\"}.fa-fighter-jet:before,.fa-jet-fighter:before{content:\"\\f0fb\"}.fa-comet:before{content:\"\\e003\"}.fa-share-alt-square:before,.fa-square-share-nodes:before{content:\"\\f1e1\"}.fa-shield-keyhole:before{content:\"\\e248\"}.fa-barcode:before{content:\"\\f02a\"}.fa-plus-minus:before{content:\"\\e43c\"}.fa-sliders-v-square:before,.fa-square-sliders-vertical:before{content:\"\\f3f2\"}.fa-video-camera:before,.fa-video:before{content:\"\\f03d\"}.fa-comment-middle-alt:before,.fa-message-middle:before{content:\"\\e1e1\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-hand-holding-medical:before{content:\"\\e05c\"}.fa-person-circle-check:before{content:\"\\e53e\"}.fa-square-z:before{content:\"\\e288\"}.fa-comment-alt-text:before,.fa-message-text:before{content:\"\\e1e6\"}.fa-level-up-alt:before,.fa-turn-up:before{content:\"\\f3bf\"}.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host,:root{--fa-style-family-brands:\"Font Awesome 6 Brands\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\"}@font-face{font-family:\"Font Awesome 6 Brands\";font-style:normal;font-weight:400;font-display:block;src:url(../webfonts/fa-brands-400.woff2) format(\"woff2\"),url(../webfonts/fa-brands-400.ttf) format(\"truetype\")}.fa-brands,.fab{font-weight:400}.fa-monero:before{content:\"\\f3d0\"}.fa-hooli:before{content:\"\\f427\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-lastfm:before{content:\"\\f202\"}.fa-shopware:before{content:\"\\f5b5\"}.fa-creative-commons-nc:before{content:\"\\f4e8\"}.fa-aws:before{content:\"\\f375\"}.fa-redhat:before{content:\"\\f7bc\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-cloudflare:before{content:\"\\e07d\"}.fa-ups:before{content:\"\\f7e0\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-dyalog:before{content:\"\\f399\"}.fa-bity:before{content:\"\\f37a\"}.fa-stackpath:before{content:\"\\f842\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-modx:before{content:\"\\f285\"}.fa-guilded:before{content:\"\\e07e\"}.fa-vnv:before{content:\"\\f40b\"}.fa-js-square:before,.fa-square-js:before{content:\"\\f3b9\"}.fa-microsoft:before{content:\"\\f3ca\"}.fa-qq:before{content:\"\\f1d6\"}.fa-orcid:before{content:\"\\f8d2\"}.fa-java:before{content:\"\\f4e4\"}.fa-invision:before{content:\"\\f7b0\"}.fa-creative-commons-pd-alt:before{content:\"\\f4ed\"}.fa-centercode:before{content:\"\\f380\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-hire-a-helper:before{content:\"\\f3b0\"}.fa-creative-commons-by:before{content:\"\\f4e7\"}.fa-unity:before{content:\"\\e049\"}.fa-whmcs:before{content:\"\\f40d\"}.fa-rocketchat:before{content:\"\\f3e8\"}.fa-vk:before{content:\"\\f189\"}.fa-untappd:before{content:\"\\f405\"}.fa-mailchimp:before{content:\"\\f59e\"}.fa-css3-alt:before{content:\"\\f38b\"}.fa-reddit-square:before,.fa-square-reddit:before{content:\"\\f1a2\"}.fa-vimeo-v:before{content:\"\\f27d\"}.fa-contao:before{content:\"\\f26d\"}.fa-square-font-awesome:before{content:\"\\e5ad\"}.fa-deskpro:before{content:\"\\f38f\"}.fa-sistrix:before{content:\"\\f3ee\"}.fa-instagram-square:before,.fa-square-instagram:before{content:\"\\e055\"}.fa-battle-net:before{content:\"\\f835\"}.fa-the-red-yeti:before{content:\"\\f69d\"}.fa-hacker-news-square:before,.fa-square-hacker-news:before{content:\"\\f3af\"}.fa-edge:before{content:\"\\f282\"}.fa-napster:before{content:\"\\f3d2\"}.fa-snapchat-square:before,.fa-square-snapchat:before{content:\"\\f2ad\"}.fa-google-plus-g:before{content:\"\\f0d5\"}.fa-artstation:before{content:\"\\f77a\"}.fa-markdown:before{content:\"\\f60f\"}.fa-sourcetree:before{content:\"\\f7d3\"}.fa-google-plus:before{content:\"\\f2b3\"}.fa-diaspora:before{content:\"\\f791\"}.fa-foursquare:before{content:\"\\f180\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-github-alt:before{content:\"\\f113\"}.fa-phoenix-squadron:before{content:\"\\f511\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-algolia:before{content:\"\\f36c\"}.fa-red-river:before{content:\"\\f3e3\"}.fa-creative-commons-sa:before{content:\"\\f4ef\"}.fa-safari:before{content:\"\\f267\"}.fa-google:before{content:\"\\f1a0\"}.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before{content:\"\\f35c\"}.fa-atlassian:before{content:\"\\f77b\"}.fa-linkedin-in:before{content:\"\\f0e1\"}.fa-digital-ocean:before{content:\"\\f391\"}.fa-nimblr:before{content:\"\\f5a8\"}.fa-chromecast:before{content:\"\\f838\"}.fa-evernote:before{content:\"\\f839\"}.fa-hacker-news:before{content:\"\\f1d4\"}.fa-creative-commons-sampling:before{content:\"\\f4f0\"}.fa-adversal:before{content:\"\\f36a\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-watchman-monitoring:before{content:\"\\e087\"}.fa-fonticons:before{content:\"\\f280\"}.fa-weixin:before{content:\"\\f1d7\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-git-alt:before{content:\"\\f841\"}.fa-lyft:before{content:\"\\f3c3\"}.fa-rev:before{content:\"\\f5b2\"}.fa-windows:before{content:\"\\f17a\"}.fa-wizards-of-the-coast:before{content:\"\\f730\"}.fa-square-viadeo:before,.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-meetup:before{content:\"\\f2e0\"}.fa-centos:before{content:\"\\f789\"}.fa-adn:before{content:\"\\f170\"}.fa-cloudsmith:before{content:\"\\f384\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-dribbble-square:before,.fa-square-dribbble:before{content:\"\\f397\"}.fa-codiepie:before{content:\"\\f284\"}.fa-node:before{content:\"\\f419\"}.fa-mix:before{content:\"\\f3cb\"}.fa-steam:before{content:\"\\f1b6\"}.fa-cc-apple-pay:before{content:\"\\f416\"}.fa-scribd:before{content:\"\\f28a\"}.fa-openid:before{content:\"\\f19b\"}.fa-instalod:before{content:\"\\e081\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-sellcast:before{content:\"\\f2da\"}.fa-square-twitter:before,.fa-twitter-square:before{content:\"\\f081\"}.fa-r-project:before{content:\"\\f4f7\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-freebsd:before{content:\"\\f3a4\"}.fa-vuejs:before{content:\"\\f41f\"}.fa-accusoft:before{content:\"\\f369\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-fonticons-fi:before{content:\"\\f3a2\"}.fa-app-store:before{content:\"\\f36f\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-itunes-note:before{content:\"\\f3b5\"}.fa-golang:before{content:\"\\e40f\"}.fa-kickstarter:before{content:\"\\f3bb\"}.fa-grav:before{content:\"\\f2d6\"}.fa-weibo:before{content:\"\\f18a\"}.fa-uncharted:before{content:\"\\e084\"}.fa-firstdraft:before{content:\"\\f3a1\"}.fa-square-youtube:before,.fa-youtube-square:before{content:\"\\f431\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-rendact:before,.fa-wpressr:before{content:\"\\f3e4\"}.fa-angellist:before{content:\"\\f209\"}.fa-galactic-republic:before{content:\"\\f50c\"}.fa-nfc-directional:before{content:\"\\e530\"}.fa-skype:before{content:\"\\f17e\"}.fa-joget:before{content:\"\\f3b7\"}.fa-fedora:before{content:\"\\f798\"}.fa-stripe-s:before{content:\"\\f42a\"}.fa-meta:before{content:\"\\e49b\"}.fa-laravel:before{content:\"\\f3bd\"}.fa-hotjar:before{content:\"\\f3b1\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-sticker-mule:before{content:\"\\f3f7\"}.fa-creative-commons-zero:before{content:\"\\f4f3\"}.fa-hips:before{content:\"\\f452\"}.fa-behance:before{content:\"\\f1b4\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-discord:before{content:\"\\f392\"}.fa-chrome:before{content:\"\\f268\"}.fa-app-store-ios:before{content:\"\\f370\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-confluence:before{content:\"\\f78d\"}.fa-mdb:before{content:\"\\f8ca\"}.fa-dochub:before{content:\"\\f394\"}.fa-accessible-icon:before{content:\"\\f368\"}.fa-ebay:before{content:\"\\f4f4\"}.fa-amazon:before{content:\"\\f270\"}.fa-unsplash:before{content:\"\\e07c\"}.fa-yarn:before{content:\"\\f7e3\"}.fa-square-steam:before,.fa-steam-square:before{content:\"\\f1b7\"}.fa-500px:before{content:\"\\f26e\"}.fa-square-vimeo:before,.fa-vimeo-square:before{content:\"\\f194\"}.fa-asymmetrik:before{content:\"\\f372\"}.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-gratipay:before{content:\"\\f184\"}.fa-apple:before{content:\"\\f179\"}.fa-hive:before{content:\"\\e07f\"}.fa-gitkraken:before{content:\"\\f3a6\"}.fa-keybase:before{content:\"\\f4f5\"}.fa-apple-pay:before{content:\"\\f415\"}.fa-padlet:before{content:\"\\e4a0\"}.fa-amazon-pay:before{content:\"\\f42c\"}.fa-github-square:before,.fa-square-github:before{content:\"\\f092\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-fedex:before{content:\"\\f797\"}.fa-phoenix-framework:before{content:\"\\f3dc\"}.fa-shopify:before{content:\"\\e057\"}.fa-neos:before{content:\"\\f612\"}.fa-hackerrank:before{content:\"\\f5f7\"}.fa-researchgate:before{content:\"\\f4f8\"}.fa-swift:before{content:\"\\f8e1\"}.fa-angular:before{content:\"\\f420\"}.fa-speakap:before{content:\"\\f3f3\"}.fa-angrycreative:before{content:\"\\f36e\"}.fa-y-combinator:before{content:\"\\f23b\"}.fa-empire:before{content:\"\\f1d1\"}.fa-envira:before{content:\"\\f299\"}.fa-gitlab-square:before,.fa-square-gitlab:before{content:\"\\e5ae\"}.fa-studiovinari:before{content:\"\\f3f8\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-firefox:before{content:\"\\f269\"}.fa-linode:before{content:\"\\f2b8\"}.fa-goodreads:before{content:\"\\f3a8\"}.fa-odnoklassniki-square:before,.fa-square-odnoklassniki:before{content:\"\\f264\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-sith:before{content:\"\\f512\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-page4:before{content:\"\\f3d7\"}.fa-hashnode:before{content:\"\\e499\"}.fa-react:before{content:\"\\f41b\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-squarespace:before{content:\"\\f5be\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-creative-commons-share:before{content:\"\\f4f2\"}.fa-bitcoin:before{content:\"\\f379\"}.fa-keycdn:before{content:\"\\f3ba\"}.fa-opera:before{content:\"\\f26a\"}.fa-itch-io:before{content:\"\\f83a\"}.fa-umbraco:before{content:\"\\f8e8\"}.fa-galactic-senate:before{content:\"\\f50d\"}.fa-ubuntu:before{content:\"\\f7df\"}.fa-draft2digital:before{content:\"\\f396\"}.fa-stripe:before{content:\"\\f429\"}.fa-houzz:before{content:\"\\f27c\"}.fa-gg:before{content:\"\\f260\"}.fa-dhl:before{content:\"\\f790\"}.fa-pinterest-square:before,.fa-square-pinterest:before{content:\"\\f0d3\"}.fa-xing:before{content:\"\\f168\"}.fa-blackberry:before{content:\"\\f37b\"}.fa-creative-commons-pd:before{content:\"\\f4ec\"}.fa-playstation:before{content:\"\\f3df\"}.fa-quinscape:before{content:\"\\f459\"}.fa-less:before{content:\"\\f41d\"}.fa-blogger-b:before{content:\"\\f37d\"}.fa-opencart:before{content:\"\\f23d\"}.fa-vine:before{content:\"\\f1ca\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-gitlab:before{content:\"\\f296\"}.fa-typo3:before{content:\"\\f42b\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-dailymotion:before{content:\"\\e052\"}.fa-affiliatetheme:before{content:\"\\f36b\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-bootstrap:before{content:\"\\f836\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-nfc-symbol:before{content:\"\\e531\"}.fa-ethereum:before{content:\"\\f42e\"}.fa-speaker-deck:before{content:\"\\f83c\"}.fa-creative-commons-nc-eu:before{content:\"\\f4e9\"}.fa-patreon:before{content:\"\\f3d9\"}.fa-avianex:before{content:\"\\f374\"}.fa-ello:before{content:\"\\f5f1\"}.fa-gofore:before{content:\"\\f3a7\"}.fa-bimobject:before{content:\"\\f378\"}.fa-facebook-f:before{content:\"\\f39e\"}.fa-google-plus-square:before,.fa-square-google-plus:before{content:\"\\f0d4\"}.fa-mandalorian:before{content:\"\\f50f\"}.fa-first-order-alt:before{content:\"\\f50a\"}.fa-osi:before{content:\"\\f41a\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-d-and-d-beyond:before{content:\"\\f6ca\"}.fa-periscope:before{content:\"\\f3da\"}.fa-fulcrum:before{content:\"\\f50b\"}.fa-cloudscale:before{content:\"\\f383\"}.fa-forumbee:before{content:\"\\f211\"}.fa-mizuni:before{content:\"\\f3cc\"}.fa-schlix:before{content:\"\\f3ea\"}.fa-square-xing:before,.fa-xing-square:before{content:\"\\f169\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-wpforms:before{content:\"\\f298\"}.fa-cloudversify:before{content:\"\\f385\"}.fa-usps:before{content:\"\\f7e1\"}.fa-megaport:before{content:\"\\f5a3\"}.fa-magento:before{content:\"\\f3c4\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-fly:before{content:\"\\f417\"}.fa-aviato:before{content:\"\\f421\"}.fa-itunes:before{content:\"\\f3b4\"}.fa-cuttlefish:before{content:\"\\f38c\"}.fa-blogger:before{content:\"\\f37c\"}.fa-flickr:before{content:\"\\f16e\"}.fa-viber:before{content:\"\\f409\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-digg:before{content:\"\\f1a6\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-symfony:before{content:\"\\f83d\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-facebook-messenger:before{content:\"\\f39f\"}.fa-audible:before{content:\"\\f373\"}.fa-think-peaks:before{content:\"\\f731\"}.fa-bilibili:before{content:\"\\e3d9\"}.fa-erlang:before{content:\"\\f39d\"}.fa-cotton-bureau:before{content:\"\\f89e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-42-group:before,.fa-innosoft:before{content:\"\\e080\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-elementor:before{content:\"\\f430\"}.fa-pied-piper-square:before,.fa-square-pied-piper:before{content:\"\\e01e\"}.fa-creative-commons-nd:before{content:\"\\f4eb\"}.fa-palfed:before{content:\"\\f3d8\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-resolving:before{content:\"\\f3e7\"}.fa-xbox:before{content:\"\\f412\"}.fa-searchengin:before{content:\"\\f3eb\"}.fa-tiktok:before{content:\"\\e07b\"}.fa-facebook-square:before,.fa-square-facebook:before{content:\"\\f082\"}.fa-renren:before{content:\"\\f18b\"}.fa-linux:before{content:\"\\f17c\"}.fa-glide:before{content:\"\\f2a5\"}.fa-linkedin:before{content:\"\\f08c\"}.fa-hubspot:before{content:\"\\f3b2\"}.fa-deploydog:before{content:\"\\f38e\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-mixer:before{content:\"\\e056\"}.fa-lastfm-square:before,.fa-square-lastfm:before{content:\"\\f203\"}.fa-vimeo:before{content:\"\\f40a\"}.fa-mendeley:before{content:\"\\f7b3\"}.fa-uniregistry:before{content:\"\\f404\"}.fa-figma:before{content:\"\\f799\"}.fa-creative-commons-remix:before{content:\"\\f4ee\"}.fa-cc-amazon-pay:before{content:\"\\f42d\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-instagram:before{content:\"\\f16d\"}.fa-cmplid:before{content:\"\\e360\"}.fa-facebook:before{content:\"\\f09a\"}.fa-gripfire:before{content:\"\\f3ac\"}.fa-jedi-order:before{content:\"\\f50e\"}.fa-uikit:before{content:\"\\f403\"}.fa-fort-awesome-alt:before{content:\"\\f3a3\"}.fa-phabricator:before{content:\"\\f3db\"}.fa-ussunnah:before{content:\"\\f407\"}.fa-earlybirds:before{content:\"\\f39a\"}.fa-trade-federation:before{content:\"\\f513\"}.fa-autoprefixer:before{content:\"\\f41c\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-google-play:before{content:\"\\f3ab\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-line:before{content:\"\\f3c0\"}.fa-google-drive:before{content:\"\\f3aa\"}.fa-servicestack:before{content:\"\\f3ec\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-deezer:before{content:\"\\e077\"}.fa-raspberry-pi:before{content:\"\\f7bb\"}.fa-jira:before{content:\"\\f7b1\"}.fa-docker:before{content:\"\\f395\"}.fa-screenpal:before{content:\"\\e570\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-gitter:before{content:\"\\f426\"}.fa-d-and-d:before{content:\"\\f38d\"}.fa-microblog:before{content:\"\\e01a\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-pied-piper-hat:before{content:\"\\f4e5\"}.fa-kickstarter-k:before{content:\"\\f3bc\"}.fa-yandex:before{content:\"\\f413\"}.fa-readme:before{content:\"\\f4d5\"}.fa-html5:before{content:\"\\f13b\"}.fa-sellsy:before{content:\"\\f213\"}.fa-sass:before{content:\"\\f41e\"}.fa-wirsindhandwerk:before,.fa-wsh:before{content:\"\\e2d0\"}.fa-buromobelexperte:before{content:\"\\f37f\"}.fa-salesforce:before{content:\"\\f83b\"}.fa-octopus-deploy:before{content:\"\\e082\"}.fa-medapps:before{content:\"\\f3c6\"}.fa-ns8:before{content:\"\\f3d5\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-apper:before{content:\"\\f371\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-waze:before{content:\"\\f83f\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-snapchat-ghost:before,.fa-snapchat:before{content:\"\\f2ab\"}.fa-fantasy-flight-games:before{content:\"\\f6dc\"}.fa-rust:before{content:\"\\e07a\"}.fa-wix:before{content:\"\\f5cf\"}.fa-behance-square:before,.fa-square-behance:before{content:\"\\f1b5\"}.fa-supple:before{content:\"\\f3f9\"}.fa-rebel:before{content:\"\\f1d0\"}.fa-css3:before{content:\"\\f13c\"}.fa-staylinked:before{content:\"\\f3f5\"}.fa-kaggle:before{content:\"\\f5fa\"}.fa-space-awesome:before{content:\"\\e5ac\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-cpanel:before{content:\"\\f388\"}.fa-goodreads-g:before{content:\"\\f3a9\"}.fa-git-square:before,.fa-square-git:before{content:\"\\f1d2\"}.fa-square-tumblr:before,.fa-tumblr-square:before{content:\"\\f174\"}.fa-trello:before{content:\"\\f181\"}.fa-creative-commons-nc-jp:before{content:\"\\f4ea\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-perbyte:before{content:\"\\e083\"}.fa-grunt:before{content:\"\\f3ad\"}.fa-weebly:before{content:\"\\f5cc\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-leanpub:before{content:\"\\f212\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-themeco:before{content:\"\\f5c6\"}.fa-python:before{content:\"\\f3e2\"}.fa-android:before{content:\"\\f17b\"}.fa-bots:before{content:\"\\e340\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-hornbill:before{content:\"\\f592\"}.fa-js:before{content:\"\\f3b8\"}.fa-ideal:before{content:\"\\e013\"}.fa-git:before{content:\"\\f1d3\"}.fa-dev:before{content:\"\\f6cc\"}.fa-sketch:before{content:\"\\f7c6\"}.fa-yandex-international:before{content:\"\\f414\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-uber:before{content:\"\\f402\"}.fa-github:before{content:\"\\f09b\"}.fa-php:before{content:\"\\f457\"}.fa-alipay:before{content:\"\\f642\"}.fa-youtube:before{content:\"\\f167\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-firefox-browser:before{content:\"\\e007\"}.fa-replyd:before{content:\"\\f3e6\"}.fa-suse:before{content:\"\\f7d6\"}.fa-jenkins:before{content:\"\\f3b6\"}.fa-twitter:before{content:\"\\f099\"}.fa-rockrms:before{content:\"\\f3e9\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-buffer:before{content:\"\\f837\"}.fa-npm:before{content:\"\\f3d4\"}.fa-yammer:before{content:\"\\f840\"}.fa-btc:before{content:\"\\f15a\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-telegram-plane:before,.fa-telegram:before{content:\"\\f2c6\"}.fa-old-republic:before{content:\"\\f510\"}.fa-square-whatsapp:before,.fa-whatsapp-square:before{content:\"\\f40c\"}.fa-node-js:before{content:\"\\f3d3\"}.fa-edge-legacy:before{content:\"\\e078\"}.fa-slack-hash:before,.fa-slack:before{content:\"\\f198\"}.fa-medrt:before{content:\"\\f3c8\"}.fa-usb:before{content:\"\\f287\"}.fa-tumblr:before{content:\"\\f173\"}.fa-vaadin:before{content:\"\\f408\"}.fa-quora:before{content:\"\\f2c4\"}.fa-reacteurope:before{content:\"\\f75d\"}.fa-medium-m:before,.fa-medium:before{content:\"\\f23a\"}.fa-amilia:before{content:\"\\f36d\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-flipboard:before{content:\"\\f44d\"}.fa-viacoin:before{content:\"\\f237\"}.fa-critical-role:before{content:\"\\f6c9\"}.fa-sitrox:before{content:\"\\e44a\"}.fa-discourse:before{content:\"\\f393\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-mastodon:before{content:\"\\f4f6\"}.fa-airbnb:before{content:\"\\f834\"}.fa-wolf-pack-battalion:before{content:\"\\f514\"}.fa-buy-n-large:before{content:\"\\f8a6\"}.fa-gulp:before{content:\"\\f3ae\"}.fa-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.fa-strava:before{content:\"\\f428\"}.fa-ember:before{content:\"\\f423\"}.fa-canadian-maple-leaf:before{content:\"\\f785\"}.fa-teamspeak:before{content:\"\\f4f9\"}.fa-pushed:before{content:\"\\f3e1\"}.fa-wordpress-simple:before{content:\"\\f411\"}.fa-nutritionix:before{content:\"\\f3d6\"}.fa-wodu:before{content:\"\\e088\"}.fa-google-pay:before{content:\"\\e079\"}.fa-intercom:before{content:\"\\f7af\"}.fa-zhihu:before{content:\"\\f63f\"}.fa-korvue:before{content:\"\\f42f\"}.fa-pix:before{content:\"\\e43a\"}.fa-steam-symbol:before{content:\"\\f3f6\"}:host,:root{--fa-style-family-duotone:\"Font Awesome 6 Duotone\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\"}@font-face{font-family:\"Font Awesome 6 Duotone\";font-style:normal;font-weight:900;font-display:block;src:url(../webfonts/fa-duotone-900.woff2) format(\"woff2\"),url(../webfonts/fa-duotone-900.ttf) format(\"truetype\")}.fa-duotone,.fad{position:relative;font-weight:900;letter-spacing:normal}.fa-duotone:before,.fad:before{position:absolute;color:var(--fa-primary-color,inherit);opacity:var(--fa-primary-opacity,1)}.fa-duotone:after,.fad:after{color:var(--fa-secondary-color,inherit)}.fa-duotone.fa-swap-opacity:before,.fa-duotone:after,.fa-swap-opacity .fa-duotone:before,.fa-swap-opacity .fad:before,.fad.fa-swap-opacity:before,.fad:after{opacity:var(--fa-secondary-opacity,.4)}.fa-duotone.fa-swap-opacity:after,.fa-swap-opacity .fa-duotone:after,.fa-swap-opacity .fad:after,.fad.fa-swap-opacity:after{opacity:var(--fa-primary-opacity,1)}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}.fa-duotone.fa-stack-1x,.fa-duotone.fa-stack-2x,.fad.fa-stack-1x,.fad.fa-stack-2x{position:absolute}.fa-duotone.fa-0:after,.fad.fa-0:after{content:\"\\30\\30\"}.fa-duotone.fa-1:after,.fad.fa-1:after{content:\"\\31\\31\"}.fa-duotone.fa-2:after,.fad.fa-2:after{content:\"\\32\\32\"}.fa-duotone.fa-3:after,.fad.fa-3:after{content:\"\\33\\33\"}.fa-duotone.fa-4:after,.fad.fa-4:after{content:\"\\34\\34\"}.fa-duotone.fa-5:after,.fad.fa-5:after{content:\"\\35\\35\"}.fa-duotone.fa-6:after,.fad.fa-6:after{content:\"\\36\\36\"}.fa-duotone.fa-7:after,.fad.fa-7:after{content:\"\\37\\37\"}.fa-duotone.fa-8:after,.fad.fa-8:after{content:\"\\38\\38\"}.fa-duotone.fa-9:after,.fad.fa-9:after{content:\"\\39\\39\"}.fa-duotone.fa-fill-drip:after,.fad.fa-fill-drip:after{content:\"\\f576\\f576\"}.fa-duotone.fa-arrows-to-circle:after,.fad.fa-arrows-to-circle:after{content:\"\\e4bd\\e4bd\"}.fa-duotone.fa-chevron-circle-right:after,.fa-duotone.fa-circle-chevron-right:after,.fad.fa-chevron-circle-right:after,.fad.fa-circle-chevron-right:after{content:\"\\f138\\f138\"}.fa-duotone.fa-wagon-covered:after,.fad.fa-wagon-covered:after{content:\"\\f8ee\\f8ee\"}.fa-duotone.fa-line-height:after,.fad.fa-line-height:after{content:\"\\f871\\f871\"}.fa-duotone.fa-bagel:after,.fad.fa-bagel:after{content:\"\\e3d7\\e3d7\"}.fa-duotone.fa-transporter-7:after,.fad.fa-transporter-7:after{content:\"\\e2a8\\e2a8\"}.fa-duotone.fa-at:after,.fad.fa-at:after{content:\"\\40\\40\"}.fa-duotone.fa-rectangles-mixed:after,.fad.fa-rectangles-mixed:after{content:\"\\e323\\e323\"}.fa-duotone.fa-phone-arrow-up-right:after,.fa-duotone.fa-phone-arrow-up:after,.fa-duotone.fa-phone-outgoing:after,.fad.fa-phone-arrow-up-right:after,.fad.fa-phone-arrow-up:after,.fad.fa-phone-outgoing:after{content:\"\\e224\\e224\"}.fa-duotone.fa-trash-alt:after,.fa-duotone.fa-trash-can:after,.fad.fa-trash-alt:after,.fad.fa-trash-can:after{content:\"\\f2ed\\f2ed\"}.fa-duotone.fa-circle-l:after,.fad.fa-circle-l:after{content:\"\\e114\\e114\"}.fa-duotone.fa-head-side-goggles:after,.fa-duotone.fa-head-vr:after,.fad.fa-head-side-goggles:after,.fad.fa-head-vr:after{content:\"\\f6ea\\f6ea\"}.fa-duotone.fa-text-height:after,.fad.fa-text-height:after{content:\"\\f034\\f034\"}.fa-duotone.fa-user-times:after,.fa-duotone.fa-user-xmark:after,.fad.fa-user-times:after,.fad.fa-user-xmark:after{content:\"\\f235\\f235\"}.fa-duotone.fa-face-hand-yawn:after,.fad.fa-face-hand-yawn:after{content:\"\\e379\\e379\"}.fa-duotone.fa-gauge-simple-min:after,.fa-duotone.fa-tachometer-slowest:after,.fad.fa-gauge-simple-min:after,.fad.fa-tachometer-slowest:after{content:\"\\f62d\\f62d\"}.fa-duotone.fa-stethoscope:after,.fad.fa-stethoscope:after{content:\"\\f0f1\\f0f1\"}.fa-duotone.fa-coffin:after,.fad.fa-coffin:after{content:\"\\f6c6\\f6c6\"}.fa-duotone.fa-comment-alt:after,.fa-duotone.fa-message:after,.fad.fa-comment-alt:after,.fad.fa-message:after{content:\"\\f27a\\f27a\"}.fa-duotone.fa-bowl-salad:after,.fa-duotone.fa-salad:after,.fad.fa-bowl-salad:after,.fad.fa-salad:after{content:\"\\f81e\\f81e\"}.fa-duotone.fa-info:after,.fad.fa-info:after{content:\"\\f129\\f129\"}.fa-duotone.fa-robot-astromech:after,.fad.fa-robot-astromech:after{content:\"\\e2d2\\e2d2\"}.fa-duotone.fa-ring-diamond:after,.fad.fa-ring-diamond:after{content:\"\\e5ab\\e5ab\"}.fa-duotone.fa-fondue-pot:after,.fad.fa-fondue-pot:after{content:\"\\e40d\\e40d\"}.fa-duotone.fa-theta:after,.fad.fa-theta:after{content:\"\\f69e\\f69e\"}.fa-duotone.fa-face-hand-peeking:after,.fad.fa-face-hand-peeking:after{content:\"\\e481\\e481\"}.fa-duotone.fa-square-user:after,.fad.fa-square-user:after{content:\"\\e283\\e283\"}.fa-duotone.fa-compress-alt:after,.fa-duotone.fa-down-left-and-up-right-to-center:after,.fad.fa-compress-alt:after,.fad.fa-down-left-and-up-right-to-center:after{content:\"\\f422\\f422\"}.fa-duotone.fa-explosion:after,.fad.fa-explosion:after{content:\"\\e4e9\\e4e9\"}.fa-duotone.fa-file-alt:after,.fa-duotone.fa-file-lines:after,.fa-duotone.fa-file-text:after,.fad.fa-file-alt:after,.fad.fa-file-lines:after,.fad.fa-file-text:after{content:\"\\f15c\\f15c\"}.fa-duotone.fa-wave-square:after,.fad.fa-wave-square:after{content:\"\\f83e\\f83e\"}.fa-duotone.fa-ring:after,.fad.fa-ring:after{content:\"\\f70b\\f70b\"}.fa-duotone.fa-building-un:after,.fad.fa-building-un:after{content:\"\\e4d9\\e4d9\"}.fa-duotone.fa-dice-three:after,.fad.fa-dice-three:after{content:\"\\f527\\f527\"}.fa-duotone.fa-tire-pressure-warning:after,.fad.fa-tire-pressure-warning:after{content:\"\\f633\\f633\"}.fa-duotone.fa-wifi-2:after,.fa-duotone.fa-wifi-fair:after,.fad.fa-wifi-2:after,.fad.fa-wifi-fair:after{content:\"\\f6ab\\f6ab\"}.fa-duotone.fa-calendar-alt:after,.fa-duotone.fa-calendar-days:after,.fad.fa-calendar-alt:after,.fad.fa-calendar-days:after{content:\"\\f073\\f073\"}.fa-duotone.fa-mp3-player:after,.fad.fa-mp3-player:after{content:\"\\f8ce\\f8ce\"}.fa-duotone.fa-anchor-circle-check:after,.fad.fa-anchor-circle-check:after{content:\"\\e4aa\\e4aa\"}.fa-duotone.fa-tally-4:after,.fad.fa-tally-4:after{content:\"\\e297\\e297\"}.fa-duotone.fa-rectangle-history:after,.fad.fa-rectangle-history:after{content:\"\\e4a2\\e4a2\"}.fa-duotone.fa-building-circle-arrow-right:after,.fad.fa-building-circle-arrow-right:after{content:\"\\e4d1\\e4d1\"}.fa-duotone.fa-volleyball-ball:after,.fa-duotone.fa-volleyball:after,.fad.fa-volleyball-ball:after,.fad.fa-volleyball:after{content:\"\\f45f\\f45f\"}.fa-duotone.fa-sun-haze:after,.fad.fa-sun-haze:after{content:\"\\f765\\f765\"}.fa-duotone.fa-text-size:after,.fad.fa-text-size:after{content:\"\\f894\\f894\"}.fa-duotone.fa-ufo:after,.fad.fa-ufo:after{content:\"\\e047\\e047\"}.fa-duotone.fa-fork:after,.fa-duotone.fa-utensil-fork:after,.fad.fa-fork:after,.fad.fa-utensil-fork:after{content:\"\\f2e3\\f2e3\"}.fa-duotone.fa-arrows-up-to-line:after,.fad.fa-arrows-up-to-line:after{content:\"\\e4c2\\e4c2\"}.fa-duotone.fa-mobile-signal:after,.fad.fa-mobile-signal:after{content:\"\\e1ef\\e1ef\"}.fa-duotone.fa-barcode-scan:after,.fad.fa-barcode-scan:after{content:\"\\f465\\f465\"}.fa-duotone.fa-sort-desc:after,.fa-duotone.fa-sort-down:after,.fad.fa-sort-desc:after,.fad.fa-sort-down:after{content:\"\\f0dd\\f0dd\"}.fa-duotone.fa-folder-arrow-down:after,.fa-duotone.fa-folder-download:after,.fad.fa-folder-arrow-down:after,.fad.fa-folder-download:after{content:\"\\e053\\e053\"}.fa-duotone.fa-circle-minus:after,.fa-duotone.fa-minus-circle:after,.fad.fa-circle-minus:after,.fad.fa-minus-circle:after{content:\"\\f056\\f056\"}.fa-duotone.fa-face-icicles:after,.fad.fa-face-icicles:after{content:\"\\e37c\\e37c\"}.fa-duotone.fa-shovel:after,.fad.fa-shovel:after{content:\"\\f713\\f713\"}.fa-duotone.fa-door-open:after,.fad.fa-door-open:after{content:\"\\f52b\\f52b\"}.fa-duotone.fa-films:after,.fad.fa-films:after{content:\"\\e17a\\e17a\"}.fa-duotone.fa-right-from-bracket:after,.fa-duotone.fa-sign-out-alt:after,.fad.fa-right-from-bracket:after,.fad.fa-sign-out-alt:after{content:\"\\f2f5\\f2f5\"}.fa-duotone.fa-face-glasses:after,.fad.fa-face-glasses:after{content:\"\\e377\\e377\"}.fa-duotone.fa-nfc:after,.fad.fa-nfc:after{content:\"\\e1f7\\e1f7\"}.fa-duotone.fa-atom:after,.fad.fa-atom:after{content:\"\\f5d2\\f5d2\"}.fa-duotone.fa-soap:after,.fad.fa-soap:after{content:\"\\e06e\\e06e\"}.fa-duotone.fa-heart-music-camera-bolt:after,.fa-duotone.fa-icons:after,.fad.fa-heart-music-camera-bolt:after,.fad.fa-icons:after{content:\"\\f86d\\f86d\"}.fa-duotone.fa-microphone-alt-slash:after,.fa-duotone.fa-microphone-lines-slash:after,.fad.fa-microphone-alt-slash:after,.fad.fa-microphone-lines-slash:after{content:\"\\f539\\f539\"}.fa-duotone.fa-closed-captioning-slash:after,.fad.fa-closed-captioning-slash:after{content:\"\\e135\\e135\"}.fa-duotone.fa-calculator-alt:after,.fa-duotone.fa-calculator-simple:after,.fad.fa-calculator-alt:after,.fad.fa-calculator-simple:after{content:\"\\f64c\\f64c\"}.fa-duotone.fa-bridge-circle-check:after,.fad.fa-bridge-circle-check:after{content:\"\\e4c9\\e4c9\"}.fa-duotone.fa-sliders-up:after,.fa-duotone.fa-sliders-v:after,.fad.fa-sliders-up:after,.fad.fa-sliders-v:after{content:\"\\f3f1\\f3f1\"}.fa-duotone.fa-location-minus:after,.fa-duotone.fa-map-marker-minus:after,.fad.fa-location-minus:after,.fad.fa-map-marker-minus:after{content:\"\\f609\\f609\"}.fa-duotone.fa-pump-medical:after,.fad.fa-pump-medical:after{content:\"\\e06a\\e06a\"}.fa-duotone.fa-fingerprint:after,.fad.fa-fingerprint:after{content:\"\\f577\\f577\"}.fa-duotone.fa-ski-boot:after,.fad.fa-ski-boot:after{content:\"\\e3cc\\e3cc\"}.fa-duotone.fa-rectangle-sd:after,.fa-duotone.fa-standard-definition:after,.fad.fa-rectangle-sd:after,.fad.fa-standard-definition:after{content:\"\\e28a\\e28a\"}.fa-duotone.fa-h1:after,.fad.fa-h1:after{content:\"\\f313\\f313\"}.fa-duotone.fa-hand-point-right:after,.fad.fa-hand-point-right:after{content:\"\\f0a4\\f0a4\"}.fa-duotone.fa-magnifying-glass-location:after,.fa-duotone.fa-search-location:after,.fad.fa-magnifying-glass-location:after,.fad.fa-search-location:after{content:\"\\f689\\f689\"}.fa-duotone.fa-message-bot:after,.fad.fa-message-bot:after{content:\"\\e3b8\\e3b8\"}.fa-duotone.fa-forward-step:after,.fa-duotone.fa-step-forward:after,.fad.fa-forward-step:after,.fad.fa-step-forward:after{content:\"\\f051\\f051\"}.fa-duotone.fa-face-smile-beam:after,.fa-duotone.fa-smile-beam:after,.fad.fa-face-smile-beam:after,.fad.fa-smile-beam:after{content:\"\\f5b8\\f5b8\"}.fa-duotone.fa-light-ceiling:after,.fad.fa-light-ceiling:after{content:\"\\e016\\e016\"}.fa-duotone.fa-comment-alt-exclamation:after,.fa-duotone.fa-message-exclamation:after,.fad.fa-comment-alt-exclamation:after,.fad.fa-message-exclamation:after{content:\"\\f4a5\\f4a5\"}.fa-duotone.fa-bowl-scoop:after,.fa-duotone.fa-bowl-shaved-ice:after,.fad.fa-bowl-scoop:after,.fad.fa-bowl-shaved-ice:after{content:\"\\e3de\\e3de\"}.fa-duotone.fa-square-x:after,.fad.fa-square-x:after{content:\"\\e286\\e286\"}.fa-duotone.fa-utility-pole-double:after,.fad.fa-utility-pole-double:after{content:\"\\e2c4\\e2c4\"}.fa-duotone.fa-flag-checkered:after,.fad.fa-flag-checkered:after{content:\"\\f11e\\f11e\"}.fa-duotone.fa-chevron-double-up:after,.fa-duotone.fa-chevrons-up:after,.fad.fa-chevron-double-up:after,.fad.fa-chevrons-up:after{content:\"\\f325\\f325\"}.fa-duotone.fa-football-ball:after,.fa-duotone.fa-football:after,.fad.fa-football-ball:after,.fad.fa-football:after{content:\"\\f44e\\f44e\"}.fa-duotone.fa-user-vneck:after,.fad.fa-user-vneck:after{content:\"\\e461\\e461\"}.fa-duotone.fa-school-circle-exclamation:after,.fad.fa-school-circle-exclamation:after{content:\"\\e56c\\e56c\"}.fa-duotone.fa-crop:after,.fad.fa-crop:after{content:\"\\f125\\f125\"}.fa-duotone.fa-angle-double-down:after,.fa-duotone.fa-angles-down:after,.fad.fa-angle-double-down:after,.fad.fa-angles-down:after{content:\"\\f103\\f103\"}.fa-duotone.fa-users-rectangle:after,.fad.fa-users-rectangle:after{content:\"\\e594\\e594\"}.fa-duotone.fa-people-roof:after,.fad.fa-people-roof:after{content:\"\\e537\\e537\"}.fa-duotone.fa-arrow-square-right:after,.fa-duotone.fa-square-arrow-right:after,.fad.fa-arrow-square-right:after,.fad.fa-square-arrow-right:after{content:\"\\f33b\\f33b\"}.fa-duotone.fa-location-plus:after,.fa-duotone.fa-map-marker-plus:after,.fad.fa-location-plus:after,.fad.fa-map-marker-plus:after{content:\"\\f60a\\f60a\"}.fa-duotone.fa-lightbulb-exclamation-on:after,.fad.fa-lightbulb-exclamation-on:after{content:\"\\e1ca\\e1ca\"}.fa-duotone.fa-people-line:after,.fad.fa-people-line:after{content:\"\\e534\\e534\"}.fa-duotone.fa-beer-mug-empty:after,.fa-duotone.fa-beer:after,.fad.fa-beer-mug-empty:after,.fad.fa-beer:after{content:\"\\f0fc\\f0fc\"}.fa-duotone.fa-crate-empty:after,.fad.fa-crate-empty:after{content:\"\\e151\\e151\"}.fa-duotone.fa-diagram-predecessor:after,.fad.fa-diagram-predecessor:after{content:\"\\e477\\e477\"}.fa-duotone.fa-transporter:after,.fad.fa-transporter:after{content:\"\\e042\\e042\"}.fa-duotone.fa-calendar-circle-user:after,.fad.fa-calendar-circle-user:after{content:\"\\e471\\e471\"}.fa-duotone.fa-arrow-up-long:after,.fa-duotone.fa-long-arrow-up:after,.fad.fa-arrow-up-long:after,.fad.fa-long-arrow-up:after{content:\"\\f176\\f176\"}.fa-duotone.fa-person-carry-box:after,.fa-duotone.fa-person-carry:after,.fad.fa-person-carry-box:after,.fad.fa-person-carry:after{content:\"\\f4cf\\f4cf\"}.fa-duotone.fa-burn:after,.fa-duotone.fa-fire-flame-simple:after,.fad.fa-burn:after,.fad.fa-fire-flame-simple:after{content:\"\\f46a\\f46a\"}.fa-duotone.fa-male:after,.fa-duotone.fa-person:after,.fad.fa-male:after,.fad.fa-person:after{content:\"\\f183\\f183\"}.fa-duotone.fa-laptop:after,.fad.fa-laptop:after{content:\"\\f109\\f109\"}.fa-duotone.fa-file-csv:after,.fad.fa-file-csv:after{content:\"\\f6dd\\f6dd\"}.fa-duotone.fa-menorah:after,.fad.fa-menorah:after{content:\"\\f676\\f676\"}.fa-duotone.fa-union:after,.fad.fa-union:after{content:\"\\f6a2\\f6a2\"}.fa-duotone.fa-chevron-double-left:after,.fa-duotone.fa-chevrons-left:after,.fad.fa-chevron-double-left:after,.fad.fa-chevrons-left:after{content:\"\\f323\\f323\"}.fa-duotone.fa-circle-heart:after,.fa-duotone.fa-heart-circle:after,.fad.fa-circle-heart:after,.fad.fa-heart-circle:after{content:\"\\f4c7\\f4c7\"}.fa-duotone.fa-truck-plane:after,.fad.fa-truck-plane:after{content:\"\\e58f\\e58f\"}.fa-duotone.fa-record-vinyl:after,.fad.fa-record-vinyl:after{content:\"\\f8d9\\f8d9\"}.fa-duotone.fa-bring-forward:after,.fad.fa-bring-forward:after{content:\"\\f856\\f856\"}.fa-duotone.fa-square-p:after,.fad.fa-square-p:after{content:\"\\e279\\e279\"}.fa-duotone.fa-face-grin-stars:after,.fa-duotone.fa-grin-stars:after,.fad.fa-face-grin-stars:after,.fad.fa-grin-stars:after{content:\"\\f587\\f587\"}.fa-duotone.fa-sigma:after,.fad.fa-sigma:after{content:\"\\f68b\\f68b\"}.fa-duotone.fa-camera-movie:after,.fad.fa-camera-movie:after{content:\"\\f8a9\\f8a9\"}.fa-duotone.fa-bong:after,.fad.fa-bong:after{content:\"\\f55c\\f55c\"}.fa-duotone.fa-clarinet:after,.fad.fa-clarinet:after{content:\"\\f8ad\\f8ad\"}.fa-duotone.fa-truck-flatbed:after,.fad.fa-truck-flatbed:after{content:\"\\e2b6\\e2b6\"}.fa-duotone.fa-pastafarianism:after,.fa-duotone.fa-spaghetti-monster-flying:after,.fad.fa-pastafarianism:after,.fad.fa-spaghetti-monster-flying:after{content:\"\\f67b\\f67b\"}.fa-duotone.fa-arrow-down-up-across-line:after,.fad.fa-arrow-down-up-across-line:after{content:\"\\e4af\\e4af\"}.fa-duotone.fa-leaf-heart:after,.fad.fa-leaf-heart:after{content:\"\\f4cb\\f4cb\"}.fa-duotone.fa-house-building:after,.fad.fa-house-building:after{content:\"\\e1b1\\e1b1\"}.fa-duotone.fa-cheese-swiss:after,.fad.fa-cheese-swiss:after{content:\"\\f7f0\\f7f0\"}.fa-duotone.fa-spoon:after,.fa-duotone.fa-utensil-spoon:after,.fad.fa-spoon:after,.fad.fa-utensil-spoon:after{content:\"\\f2e5\\f2e5\"}.fa-duotone.fa-jar-wheat:after,.fad.fa-jar-wheat:after{content:\"\\e517\\e517\"}.fa-duotone.fa-envelopes-bulk:after,.fa-duotone.fa-mail-bulk:after,.fad.fa-envelopes-bulk:after,.fad.fa-mail-bulk:after{content:\"\\f674\\f674\"}.fa-duotone.fa-file-circle-exclamation:after,.fad.fa-file-circle-exclamation:after{content:\"\\e4eb\\e4eb\"}.fa-duotone.fa-bow-arrow:after,.fad.fa-bow-arrow:after{content:\"\\f6b9\\f6b9\"}.fa-duotone.fa-cart-xmark:after,.fad.fa-cart-xmark:after{content:\"\\e0dd\\e0dd\"}.fa-duotone.fa-hexagon-xmark:after,.fa-duotone.fa-times-hexagon:after,.fa-duotone.fa-xmark-hexagon:after,.fad.fa-hexagon-xmark:after,.fad.fa-times-hexagon:after,.fad.fa-xmark-hexagon:after{content:\"\\f2ee\\f2ee\"}.fa-duotone.fa-circle-h:after,.fa-duotone.fa-hospital-symbol:after,.fad.fa-circle-h:after,.fad.fa-hospital-symbol:after{content:\"\\f47e\\f47e\"}.fa-duotone.fa-merge:after,.fad.fa-merge:after{content:\"\\e526\\e526\"}.fa-duotone.fa-pager:after,.fad.fa-pager:after{content:\"\\f815\\f815\"}.fa-duotone.fa-cart-minus:after,.fad.fa-cart-minus:after{content:\"\\e0db\\e0db\"}.fa-duotone.fa-address-book:after,.fa-duotone.fa-contact-book:after,.fad.fa-address-book:after,.fad.fa-contact-book:after{content:\"\\f2b9\\f2b9\"}.fa-duotone.fa-pan-frying:after,.fad.fa-pan-frying:after{content:\"\\e42c\\e42c\"}.fa-duotone.fa-grid-3:after,.fa-duotone.fa-grid:after,.fad.fa-grid-3:after,.fad.fa-grid:after{content:\"\\e195\\e195\"}.fa-duotone.fa-football-helmet:after,.fad.fa-football-helmet:after{content:\"\\f44f\\f44f\"}.fa-duotone.fa-hand-love:after,.fad.fa-hand-love:after{content:\"\\e1a5\\e1a5\"}.fa-duotone.fa-trees:after,.fad.fa-trees:after{content:\"\\f724\\f724\"}.fa-duotone.fa-strikethrough:after,.fad.fa-strikethrough:after{content:\"\\f0cc\\f0cc\"}.fa-duotone.fa-page:after,.fad.fa-page:after{content:\"\\e428\\e428\"}.fa-duotone.fa-k:after,.fad.fa-k:after{content:\"\\4b\\4b\"}.fa-duotone.fa-diagram-previous:after,.fad.fa-diagram-previous:after{content:\"\\e478\\e478\"}.fa-duotone.fa-gauge-min:after,.fa-duotone.fa-tachometer-alt-slowest:after,.fad.fa-gauge-min:after,.fad.fa-tachometer-alt-slowest:after{content:\"\\f628\\f628\"}.fa-duotone.fa-folder-grid:after,.fad.fa-folder-grid:after{content:\"\\e188\\e188\"}.fa-duotone.fa-eggplant:after,.fad.fa-eggplant:after{content:\"\\e16c\\e16c\"}.fa-duotone.fa-ram:after,.fad.fa-ram:after{content:\"\\f70a\\f70a\"}.fa-duotone.fa-landmark-flag:after,.fad.fa-landmark-flag:after{content:\"\\e51c\\e51c\"}.fa-duotone.fa-lips:after,.fad.fa-lips:after{content:\"\\f600\\f600\"}.fa-duotone.fa-pencil-alt:after,.fa-duotone.fa-pencil:after,.fad.fa-pencil-alt:after,.fad.fa-pencil:after{content:\"\\f303\\f303\"}.fa-duotone.fa-backward:after,.fad.fa-backward:after{content:\"\\f04a\\f04a\"}.fa-duotone.fa-caret-right:after,.fad.fa-caret-right:after{content:\"\\f0da\\f0da\"}.fa-duotone.fa-comments:after,.fad.fa-comments:after{content:\"\\f086\\f086\"}.fa-duotone.fa-file-clipboard:after,.fa-duotone.fa-paste:after,.fad.fa-file-clipboard:after,.fad.fa-paste:after{content:\"\\f0ea\\f0ea\"}.fa-duotone.fa-desktop-arrow-down:after,.fad.fa-desktop-arrow-down:after{content:\"\\e155\\e155\"}.fa-duotone.fa-code-pull-request:after,.fad.fa-code-pull-request:after{content:\"\\e13c\\e13c\"}.fa-duotone.fa-pumpkin:after,.fad.fa-pumpkin:after{content:\"\\f707\\f707\"}.fa-duotone.fa-clipboard-list:after,.fad.fa-clipboard-list:after{content:\"\\f46d\\f46d\"}.fa-duotone.fa-pen-field:after,.fad.fa-pen-field:after{content:\"\\e211\\e211\"}.fa-duotone.fa-blueberries:after,.fad.fa-blueberries:after{content:\"\\e2e8\\e2e8\"}.fa-duotone.fa-truck-loading:after,.fa-duotone.fa-truck-ramp-box:after,.fad.fa-truck-loading:after,.fad.fa-truck-ramp-box:after{content:\"\\f4de\\f4de\"}.fa-duotone.fa-note:after,.fad.fa-note:after{content:\"\\e1ff\\e1ff\"}.fa-duotone.fa-arrow-down-to-square:after,.fad.fa-arrow-down-to-square:after{content:\"\\e096\\e096\"}.fa-duotone.fa-user-check:after,.fad.fa-user-check:after{content:\"\\f4fc\\f4fc\"}.fa-duotone.fa-cloud-xmark:after,.fad.fa-cloud-xmark:after{content:\"\\e35f\\e35f\"}.fa-duotone.fa-vial-virus:after,.fad.fa-vial-virus:after{content:\"\\e597\\e597\"}.fa-duotone.fa-book-alt:after,.fa-duotone.fa-book-blank:after,.fad.fa-book-alt:after,.fad.fa-book-blank:after{content:\"\\f5d9\\f5d9\"}.fa-duotone.fa-golf-flag-hole:after,.fad.fa-golf-flag-hole:after{content:\"\\e3ac\\e3ac\"}.fa-duotone.fa-comment-alt-arrow-down:after,.fa-duotone.fa-message-arrow-down:after,.fad.fa-comment-alt-arrow-down:after,.fad.fa-message-arrow-down:after{content:\"\\e1db\\e1db\"}.fa-duotone.fa-face-unamused:after,.fad.fa-face-unamused:after{content:\"\\e39f\\e39f\"}.fa-duotone.fa-sheet-plastic:after,.fad.fa-sheet-plastic:after{content:\"\\e571\\e571\"}.fa-duotone.fa-circle-9:after,.fad.fa-circle-9:after{content:\"\\e0f6\\e0f6\"}.fa-duotone.fa-blog:after,.fad.fa-blog:after{content:\"\\f781\\f781\"}.fa-duotone.fa-user-ninja:after,.fad.fa-user-ninja:after{content:\"\\f504\\f504\"}.fa-duotone.fa-pencil-slash:after,.fad.fa-pencil-slash:after{content:\"\\e215\\e215\"}.fa-duotone.fa-bowling-pins:after,.fad.fa-bowling-pins:after{content:\"\\f437\\f437\"}.fa-duotone.fa-person-arrow-up-from-line:after,.fad.fa-person-arrow-up-from-line:after{content:\"\\e539\\e539\"}.fa-duotone.fa-down-right:after,.fad.fa-down-right:after{content:\"\\e16b\\e16b\"}.fa-duotone.fa-scroll-torah:after,.fa-duotone.fa-torah:after,.fad.fa-scroll-torah:after,.fad.fa-torah:after{content:\"\\f6a0\\f6a0\"}.fa-duotone.fa-blinds-open:after,.fad.fa-blinds-open:after{content:\"\\f8fc\\f8fc\"}.fa-duotone.fa-fence:after,.fad.fa-fence:after{content:\"\\e303\\e303\"}.fa-duotone.fa-arrow-alt-up:after,.fa-duotone.fa-up:after,.fad.fa-arrow-alt-up:after,.fad.fa-up:after{content:\"\\f357\\f357\"}.fa-duotone.fa-broom-ball:after,.fa-duotone.fa-quidditch-broom-ball:after,.fa-duotone.fa-quidditch:after,.fad.fa-broom-ball:after,.fad.fa-quidditch-broom-ball:after,.fad.fa-quidditch:after{content:\"\\f458\\f458\"}.fa-duotone.fa-drumstick:after,.fad.fa-drumstick:after{content:\"\\f6d6\\f6d6\"}.fa-duotone.fa-square-v:after,.fad.fa-square-v:after{content:\"\\e284\\e284\"}.fa-duotone.fa-face-awesome:after,.fa-duotone.fa-gave-dandy:after,.fad.fa-face-awesome:after,.fad.fa-gave-dandy:after{content:\"\\e409\\e409\"}.fa-duotone.fa-dial-off:after,.fad.fa-dial-off:after{content:\"\\e162\\e162\"}.fa-duotone.fa-toggle-off:after,.fad.fa-toggle-off:after{content:\"\\f204\\f204\"}.fa-duotone.fa-face-smile-horns:after,.fad.fa-face-smile-horns:after{content:\"\\e391\\e391\"}.fa-duotone.fa-archive:after,.fa-duotone.fa-box-archive:after,.fad.fa-archive:after,.fad.fa-box-archive:after{content:\"\\f187\\f187\"}.fa-duotone.fa-grapes:after,.fad.fa-grapes:after{content:\"\\e306\\e306\"}.fa-duotone.fa-person-drowning:after,.fad.fa-person-drowning:after{content:\"\\e545\\e545\"}.fa-duotone.fa-dial-max:after,.fad.fa-dial-max:after{content:\"\\e15e\\e15e\"}.fa-duotone.fa-circle-m:after,.fad.fa-circle-m:after{content:\"\\e115\\e115\"}.fa-duotone.fa-calendar-image:after,.fad.fa-calendar-image:after{content:\"\\e0d4\\e0d4\"}.fa-duotone.fa-caret-circle-down:after,.fa-duotone.fa-circle-caret-down:after,.fad.fa-caret-circle-down:after,.fad.fa-circle-caret-down:after{content:\"\\f32d\\f32d\"}.fa-duotone.fa-arrow-down-9-1:after,.fa-duotone.fa-sort-numeric-desc:after,.fa-duotone.fa-sort-numeric-down-alt:after,.fad.fa-arrow-down-9-1:after,.fad.fa-sort-numeric-desc:after,.fad.fa-sort-numeric-down-alt:after{content:\"\\f886\\f886\"}.fa-duotone.fa-face-grin-tongue-squint:after,.fa-duotone.fa-grin-tongue-squint:after,.fad.fa-face-grin-tongue-squint:after,.fad.fa-grin-tongue-squint:after{content:\"\\f58a\\f58a\"}.fa-duotone.fa-shish-kebab:after,.fad.fa-shish-kebab:after{content:\"\\f821\\f821\"}.fa-duotone.fa-spray-can:after,.fad.fa-spray-can:after{content:\"\\f5bd\\f5bd\"}.fa-duotone.fa-alarm-snooze:after,.fad.fa-alarm-snooze:after{content:\"\\f845\\f845\"}.fa-duotone.fa-scarecrow:after,.fad.fa-scarecrow:after{content:\"\\f70d\\f70d\"}.fa-duotone.fa-truck-monster:after,.fad.fa-truck-monster:after{content:\"\\f63b\\f63b\"}.fa-duotone.fa-gift-card:after,.fad.fa-gift-card:after{content:\"\\f663\\f663\"}.fa-duotone.fa-w:after,.fad.fa-w:after{content:\"\\57\\57\"}.fa-duotone.fa-code-pull-request-draft:after,.fad.fa-code-pull-request-draft:after{content:\"\\e3fa\\e3fa\"}.fa-duotone.fa-square-b:after,.fad.fa-square-b:after{content:\"\\e264\\e264\"}.fa-duotone.fa-elephant:after,.fad.fa-elephant:after{content:\"\\f6da\\f6da\"}.fa-duotone.fa-earth-africa:after,.fa-duotone.fa-globe-africa:after,.fad.fa-earth-africa:after,.fad.fa-globe-africa:after{content:\"\\f57c\\f57c\"}.fa-duotone.fa-rainbow:after,.fad.fa-rainbow:after{content:\"\\f75b\\f75b\"}.fa-duotone.fa-circle-notch:after,.fad.fa-circle-notch:after{content:\"\\f1ce\\f1ce\"}.fa-duotone.fa-tablet-alt:after,.fa-duotone.fa-tablet-screen-button:after,.fad.fa-tablet-alt:after,.fad.fa-tablet-screen-button:after{content:\"\\f3fa\\f3fa\"}.fa-duotone.fa-paw:after,.fad.fa-paw:after{content:\"\\f1b0\\f1b0\"}.fa-duotone.fa-message-question:after,.fad.fa-message-question:after{content:\"\\e1e3\\e1e3\"}.fa-duotone.fa-cloud:after,.fad.fa-cloud:after{content:\"\\f0c2\\f0c2\"}.fa-duotone.fa-trowel-bricks:after,.fad.fa-trowel-bricks:after{content:\"\\e58a\\e58a\"}.fa-duotone.fa-square-3:after,.fad.fa-square-3:after{content:\"\\e258\\e258\"}.fa-duotone.fa-face-flushed:after,.fa-duotone.fa-flushed:after,.fad.fa-face-flushed:after,.fad.fa-flushed:after{content:\"\\f579\\f579\"}.fa-duotone.fa-hospital-user:after,.fad.fa-hospital-user:after{content:\"\\f80d\\f80d\"}.fa-duotone.fa-microwave:after,.fad.fa-microwave:after{content:\"\\e01b\\e01b\"}.fa-duotone.fa-tent-arrow-left-right:after,.fad.fa-tent-arrow-left-right:after{content:\"\\e57f\\e57f\"}.fa-duotone.fa-cart-circle-arrow-up:after,.fad.fa-cart-circle-arrow-up:after{content:\"\\e3f0\\e3f0\"}.fa-duotone.fa-trash-clock:after,.fad.fa-trash-clock:after{content:\"\\e2b0\\e2b0\"}.fa-duotone.fa-gavel:after,.fa-duotone.fa-legal:after,.fad.fa-gavel:after,.fad.fa-legal:after{content:\"\\f0e3\\f0e3\"}.fa-duotone.fa-sprinkler-ceiling:after,.fad.fa-sprinkler-ceiling:after{content:\"\\e44c\\e44c\"}.fa-duotone.fa-browsers:after,.fad.fa-browsers:after{content:\"\\e0cb\\e0cb\"}.fa-duotone.fa-trillium:after,.fad.fa-trillium:after{content:\"\\e588\\e588\"}.fa-duotone.fa-music-slash:after,.fad.fa-music-slash:after{content:\"\\f8d1\\f8d1\"}.fa-duotone.fa-truck-ramp:after,.fad.fa-truck-ramp:after{content:\"\\f4e0\\f4e0\"}.fa-duotone.fa-binoculars:after,.fad.fa-binoculars:after{content:\"\\f1e5\\f1e5\"}.fa-duotone.fa-microphone-slash:after,.fad.fa-microphone-slash:after{content:\"\\f131\\f131\"}.fa-duotone.fa-box-tissue:after,.fad.fa-box-tissue:after{content:\"\\e05b\\e05b\"}.fa-duotone.fa-circle-c:after,.fad.fa-circle-c:after{content:\"\\e101\\e101\"}.fa-duotone.fa-star-christmas:after,.fad.fa-star-christmas:after{content:\"\\f7d4\\f7d4\"}.fa-duotone.fa-chart-bullet:after,.fad.fa-chart-bullet:after{content:\"\\e0e1\\e0e1\"}.fa-duotone.fa-motorcycle:after,.fad.fa-motorcycle:after{content:\"\\f21c\\f21c\"}.fa-duotone.fa-tree-christmas:after,.fad.fa-tree-christmas:after{content:\"\\f7db\\f7db\"}.fa-duotone.fa-tire-flat:after,.fad.fa-tire-flat:after{content:\"\\f632\\f632\"}.fa-duotone.fa-sunglasses:after,.fad.fa-sunglasses:after{content:\"\\f892\\f892\"}.fa-duotone.fa-badge:after,.fad.fa-badge:after{content:\"\\f335\\f335\"}.fa-duotone.fa-comment-alt-edit:after,.fa-duotone.fa-message-edit:after,.fa-duotone.fa-message-pen:after,.fad.fa-comment-alt-edit:after,.fad.fa-message-edit:after,.fad.fa-message-pen:after{content:\"\\f4a4\\f4a4\"}.fa-duotone.fa-bell-concierge:after,.fa-duotone.fa-concierge-bell:after,.fad.fa-bell-concierge:after,.fad.fa-concierge-bell:after{content:\"\\f562\\f562\"}.fa-duotone.fa-pen-ruler:after,.fa-duotone.fa-pencil-ruler:after,.fad.fa-pen-ruler:after,.fad.fa-pencil-ruler:after{content:\"\\f5ae\\f5ae\"}.fa-duotone.fa-chess-rook-alt:after,.fa-duotone.fa-chess-rook-piece:after,.fad.fa-chess-rook-alt:after,.fad.fa-chess-rook-piece:after{content:\"\\f448\\f448\"}.fa-duotone.fa-square-root:after,.fad.fa-square-root:after{content:\"\\f697\\f697\"}.fa-duotone.fa-album-collection-circle-plus:after,.fad.fa-album-collection-circle-plus:after{content:\"\\e48e\\e48e\"}.fa-duotone.fa-people-arrows-left-right:after,.fa-duotone.fa-people-arrows:after,.fad.fa-people-arrows-left-right:after,.fad.fa-people-arrows:after{content:\"\\e068\\e068\"}.fa-duotone.fa-face-angry-horns:after,.fad.fa-face-angry-horns:after{content:\"\\e368\\e368\"}.fa-duotone.fa-mars-and-venus-burst:after,.fad.fa-mars-and-venus-burst:after{content:\"\\e523\\e523\"}.fa-duotone.fa-tombstone:after,.fad.fa-tombstone:after{content:\"\\f720\\f720\"}.fa-duotone.fa-caret-square-right:after,.fa-duotone.fa-square-caret-right:after,.fad.fa-caret-square-right:after,.fad.fa-square-caret-right:after{content:\"\\f152\\f152\"}.fa-duotone.fa-cut:after,.fa-duotone.fa-scissors:after,.fad.fa-cut:after,.fad.fa-scissors:after{content:\"\\f0c4\\f0c4\"}.fa-duotone.fa-list-music:after,.fad.fa-list-music:after{content:\"\\f8c9\\f8c9\"}.fa-duotone.fa-sun-plant-wilt:after,.fad.fa-sun-plant-wilt:after{content:\"\\e57a\\e57a\"}.fa-duotone.fa-toilets-portable:after,.fad.fa-toilets-portable:after{content:\"\\e584\\e584\"}.fa-duotone.fa-hockey-puck:after,.fad.fa-hockey-puck:after{content:\"\\f453\\f453\"}.fa-duotone.fa-hyphen:after,.fad.fa-hyphen:after{content:\"\\2d\\2d\"}.fa-duotone.fa-table:after,.fad.fa-table:after{content:\"\\f0ce\\f0ce\"}.fa-duotone.fa-user-chef:after,.fad.fa-user-chef:after{content:\"\\e3d2\\e3d2\"}.fa-duotone.fa-comment-alt-image:after,.fa-duotone.fa-message-image:after,.fad.fa-comment-alt-image:after,.fad.fa-message-image:after{content:\"\\e1e0\\e1e0\"}.fa-duotone.fa-users-medical:after,.fad.fa-users-medical:after{content:\"\\f830\\f830\"}.fa-duotone.fa-sensor-alert:after,.fa-duotone.fa-sensor-triangle-exclamation:after,.fad.fa-sensor-alert:after,.fad.fa-sensor-triangle-exclamation:after{content:\"\\e029\\e029\"}.fa-duotone.fa-magnifying-glass-arrow-right:after,.fad.fa-magnifying-glass-arrow-right:after{content:\"\\e521\\e521\"}.fa-duotone.fa-digital-tachograph:after,.fa-duotone.fa-tachograph-digital:after,.fad.fa-digital-tachograph:after,.fad.fa-tachograph-digital:after{content:\"\\f566\\f566\"}.fa-duotone.fa-face-mask:after,.fad.fa-face-mask:after{content:\"\\e37f\\e37f\"}.fa-duotone.fa-pickleball:after,.fad.fa-pickleball:after{content:\"\\e435\\e435\"}.fa-duotone.fa-star-sharp-half:after,.fad.fa-star-sharp-half:after{content:\"\\e28c\\e28c\"}.fa-duotone.fa-users-slash:after,.fad.fa-users-slash:after{content:\"\\e073\\e073\"}.fa-duotone.fa-clover:after,.fad.fa-clover:after{content:\"\\e139\\e139\"}.fa-duotone.fa-meat:after,.fad.fa-meat:after{content:\"\\f814\\f814\"}.fa-duotone.fa-mail-reply:after,.fa-duotone.fa-reply:after,.fad.fa-mail-reply:after,.fad.fa-reply:after{content:\"\\f3e5\\f3e5\"}.fa-duotone.fa-star-and-crescent:after,.fad.fa-star-and-crescent:after{content:\"\\f699\\f699\"}.fa-duotone.fa-empty-set:after,.fad.fa-empty-set:after{content:\"\\f656\\f656\"}.fa-duotone.fa-house-fire:after,.fad.fa-house-fire:after{content:\"\\e50c\\e50c\"}.fa-duotone.fa-minus-square:after,.fa-duotone.fa-square-minus:after,.fad.fa-minus-square:after,.fad.fa-square-minus:after{content:\"\\f146\\f146\"}.fa-duotone.fa-helicopter:after,.fad.fa-helicopter:after{content:\"\\f533\\f533\"}.fa-duotone.fa-bird:after,.fad.fa-bird:after{content:\"\\e469\\e469\"}.fa-duotone.fa-compass:after,.fad.fa-compass:after{content:\"\\f14e\\f14e\"}.fa-duotone.fa-caret-square-down:after,.fa-duotone.fa-square-caret-down:after,.fad.fa-caret-square-down:after,.fad.fa-square-caret-down:after{content:\"\\f150\\f150\"}.fa-duotone.fa-heart-half-alt:after,.fa-duotone.fa-heart-half-stroke:after,.fad.fa-heart-half-alt:after,.fad.fa-heart-half-stroke:after{content:\"\\e1ac\\e1ac\"}.fa-duotone.fa-file-circle-question:after,.fad.fa-file-circle-question:after{content:\"\\e4ef\\e4ef\"}.fa-duotone.fa-laptop-code:after,.fad.fa-laptop-code:after{content:\"\\f5fc\\f5fc\"}.fa-duotone.fa-joystick:after,.fad.fa-joystick:after{content:\"\\f8c5\\f8c5\"}.fa-duotone.fa-grill-fire:after,.fad.fa-grill-fire:after{content:\"\\e5a4\\e5a4\"}.fa-duotone.fa-rectangle-vertical-history:after,.fad.fa-rectangle-vertical-history:after{content:\"\\e237\\e237\"}.fa-duotone.fa-swatchbook:after,.fad.fa-swatchbook:after{content:\"\\f5c3\\f5c3\"}.fa-duotone.fa-prescription-bottle:after,.fad.fa-prescription-bottle:after{content:\"\\f485\\f485\"}.fa-duotone.fa-bars:after,.fa-duotone.fa-navicon:after,.fad.fa-bars:after,.fad.fa-navicon:after{content:\"\\f0c9\\f0c9\"}.fa-duotone.fa-keyboard-left:after,.fad.fa-keyboard-left:after{content:\"\\e1c3\\e1c3\"}.fa-duotone.fa-people-group:after,.fad.fa-people-group:after{content:\"\\e533\\e533\"}.fa-duotone.fa-hourglass-3:after,.fa-duotone.fa-hourglass-end:after,.fad.fa-hourglass-3:after,.fad.fa-hourglass-end:after{content:\"\\f253\\f253\"}.fa-duotone.fa-heart-broken:after,.fa-duotone.fa-heart-crack:after,.fad.fa-heart-broken:after,.fad.fa-heart-crack:after{content:\"\\f7a9\\f7a9\"}.fa-duotone.fa-face-beam-hand-over-mouth:after,.fad.fa-face-beam-hand-over-mouth:after{content:\"\\e47c\\e47c\"}.fa-duotone.fa-droplet-percent:after,.fa-duotone.fa-humidity:after,.fad.fa-droplet-percent:after,.fad.fa-humidity:after{content:\"\\f750\\f750\"}.fa-duotone.fa-external-link-square-alt:after,.fa-duotone.fa-square-up-right:after,.fad.fa-external-link-square-alt:after,.fad.fa-square-up-right:after{content:\"\\f360\\f360\"}.fa-duotone.fa-face-kiss-beam:after,.fa-duotone.fa-kiss-beam:after,.fad.fa-face-kiss-beam:after,.fad.fa-kiss-beam:after{content:\"\\f597\\f597\"}.fa-duotone.fa-corn:after,.fad.fa-corn:after{content:\"\\f6c7\\f6c7\"}.fa-duotone.fa-roller-coaster:after,.fad.fa-roller-coaster:after{content:\"\\e324\\e324\"}.fa-duotone.fa-photo-film-music:after,.fad.fa-photo-film-music:after{content:\"\\e228\\e228\"}.fa-duotone.fa-radar:after,.fad.fa-radar:after{content:\"\\e024\\e024\"}.fa-duotone.fa-sickle:after,.fad.fa-sickle:after{content:\"\\f822\\f822\"}.fa-duotone.fa-film:after,.fad.fa-film:after{content:\"\\f008\\f008\"}.fa-duotone.fa-coconut:after,.fad.fa-coconut:after{content:\"\\e2f6\\e2f6\"}.fa-duotone.fa-ruler-horizontal:after,.fad.fa-ruler-horizontal:after{content:\"\\f547\\f547\"}.fa-duotone.fa-shield-cross:after,.fad.fa-shield-cross:after{content:\"\\f712\\f712\"}.fa-duotone.fa-cassette-tape:after,.fad.fa-cassette-tape:after{content:\"\\f8ab\\f8ab\"}.fa-duotone.fa-square-terminal:after,.fad.fa-square-terminal:after{content:\"\\e32a\\e32a\"}.fa-duotone.fa-people-robbery:after,.fad.fa-people-robbery:after{content:\"\\e536\\e536\"}.fa-duotone.fa-lightbulb:after,.fad.fa-lightbulb:after{content:\"\\f0eb\\f0eb\"}.fa-duotone.fa-caret-left:after,.fad.fa-caret-left:after{content:\"\\f0d9\\f0d9\"}.fa-duotone.fa-comment-middle:after,.fad.fa-comment-middle:after{content:\"\\e149\\e149\"}.fa-duotone.fa-trash-can-list:after,.fad.fa-trash-can-list:after{content:\"\\e2ab\\e2ab\"}.fa-duotone.fa-block:after,.fad.fa-block:after{content:\"\\e46a\\e46a\"}.fa-duotone.fa-circle-exclamation:after,.fa-duotone.fa-exclamation-circle:after,.fad.fa-circle-exclamation:after,.fad.fa-exclamation-circle:after{content:\"\\f06a\\f06a\"}.fa-duotone.fa-school-circle-xmark:after,.fad.fa-school-circle-xmark:after{content:\"\\e56d\\e56d\"}.fa-duotone.fa-arrow-right-from-bracket:after,.fa-duotone.fa-sign-out:after,.fad.fa-arrow-right-from-bracket:after,.fad.fa-sign-out:after{content:\"\\f08b\\f08b\"}.fa-duotone.fa-face-frown-slight:after,.fad.fa-face-frown-slight:after{content:\"\\e376\\e376\"}.fa-duotone.fa-chevron-circle-down:after,.fa-duotone.fa-circle-chevron-down:after,.fad.fa-chevron-circle-down:after,.fad.fa-circle-chevron-down:after{content:\"\\f13a\\f13a\"}.fa-duotone.fa-sidebar-flip:after,.fad.fa-sidebar-flip:after{content:\"\\e24f\\e24f\"}.fa-duotone.fa-unlock-alt:after,.fa-duotone.fa-unlock-keyhole:after,.fad.fa-unlock-alt:after,.fad.fa-unlock-keyhole:after{content:\"\\f13e\\f13e\"}.fa-duotone.fa-temperature-list:after,.fad.fa-temperature-list:after{content:\"\\e299\\e299\"}.fa-duotone.fa-cloud-showers-heavy:after,.fad.fa-cloud-showers-heavy:after{content:\"\\f740\\f740\"}.fa-duotone.fa-headphones-alt:after,.fa-duotone.fa-headphones-simple:after,.fad.fa-headphones-alt:after,.fad.fa-headphones-simple:after{content:\"\\f58f\\f58f\"}.fa-duotone.fa-sitemap:after,.fad.fa-sitemap:after{content:\"\\f0e8\\f0e8\"}.fa-duotone.fa-pipe-section:after,.fad.fa-pipe-section:after{content:\"\\e438\\e438\"}.fa-duotone.fa-space-station-moon-alt:after,.fa-duotone.fa-space-station-moon-construction:after,.fad.fa-space-station-moon-alt:after,.fad.fa-space-station-moon-construction:after{content:\"\\e034\\e034\"}.fa-duotone.fa-circle-dollar-to-slot:after,.fa-duotone.fa-donate:after,.fad.fa-circle-dollar-to-slot:after,.fad.fa-donate:after{content:\"\\f4b9\\f4b9\"}.fa-duotone.fa-memory:after,.fad.fa-memory:after{content:\"\\f538\\f538\"}.fa-duotone.fa-face-sleeping:after,.fad.fa-face-sleeping:after{content:\"\\e38d\\e38d\"}.fa-duotone.fa-road-spikes:after,.fad.fa-road-spikes:after{content:\"\\e568\\e568\"}.fa-duotone.fa-fire-burner:after,.fad.fa-fire-burner:after{content:\"\\e4f1\\e4f1\"}.fa-duotone.fa-squirrel:after,.fad.fa-squirrel:after{content:\"\\f71a\\f71a\"}.fa-duotone.fa-arrow-to-top:after,.fa-duotone.fa-arrow-up-to-line:after,.fad.fa-arrow-to-top:after,.fad.fa-arrow-up-to-line:after{content:\"\\f341\\f341\"}.fa-duotone.fa-flag:after,.fad.fa-flag:after{content:\"\\f024\\f024\"}.fa-duotone.fa-face-cowboy-hat:after,.fad.fa-face-cowboy-hat:after{content:\"\\e36e\\e36e\"}.fa-duotone.fa-hanukiah:after,.fad.fa-hanukiah:after{content:\"\\f6e6\\f6e6\"}.fa-duotone.fa-chart-scatter-3d:after,.fad.fa-chart-scatter-3d:after{content:\"\\e0e8\\e0e8\"}.fa-duotone.fa-square-code:after,.fad.fa-square-code:after{content:\"\\e267\\e267\"}.fa-duotone.fa-feather:after,.fad.fa-feather:after{content:\"\\f52d\\f52d\"}.fa-duotone.fa-volume-down:after,.fa-duotone.fa-volume-low:after,.fad.fa-volume-down:after,.fad.fa-volume-low:after{content:\"\\f027\\f027\"}.fa-duotone.fa-times-to-slot:after,.fa-duotone.fa-vote-nay:after,.fa-duotone.fa-xmark-to-slot:after,.fad.fa-times-to-slot:after,.fad.fa-vote-nay:after,.fad.fa-xmark-to-slot:after{content:\"\\f771\\f771\"}.fa-duotone.fa-box-alt:after,.fa-duotone.fa-box-taped:after,.fad.fa-box-alt:after,.fad.fa-box-taped:after{content:\"\\f49a\\f49a\"}.fa-duotone.fa-comment-slash:after,.fad.fa-comment-slash:after{content:\"\\f4b3\\f4b3\"}.fa-duotone.fa-swords:after,.fad.fa-swords:after{content:\"\\f71d\\f71d\"}.fa-duotone.fa-cloud-sun-rain:after,.fad.fa-cloud-sun-rain:after{content:\"\\f743\\f743\"}.fa-duotone.fa-album:after,.fad.fa-album:after{content:\"\\f89f\\f89f\"}.fa-duotone.fa-circle-n:after,.fad.fa-circle-n:after{content:\"\\e118\\e118\"}.fa-duotone.fa-compress:after,.fad.fa-compress:after{content:\"\\f066\\f066\"}.fa-duotone.fa-wheat-alt:after,.fa-duotone.fa-wheat-awn:after,.fad.fa-wheat-alt:after,.fad.fa-wheat-awn:after{content:\"\\e2cd\\e2cd\"}.fa-duotone.fa-ankh:after,.fad.fa-ankh:after{content:\"\\f644\\f644\"}.fa-duotone.fa-hands-holding-child:after,.fad.fa-hands-holding-child:after{content:\"\\e4fa\\e4fa\"}.fa-duotone.fa-asterisk:after,.fad.fa-asterisk:after{content:\"\\2a\\2a\"}.fa-duotone.fa-key-skeleton-left-right:after,.fad.fa-key-skeleton-left-right:after{content:\"\\e3b4\\e3b4\"}.fa-duotone.fa-comment-lines:after,.fad.fa-comment-lines:after{content:\"\\f4b0\\f4b0\"}.fa-duotone.fa-luchador-mask:after,.fa-duotone.fa-luchador:after,.fa-duotone.fa-mask-luchador:after,.fad.fa-luchador-mask:after,.fad.fa-luchador:after,.fad.fa-mask-luchador:after{content:\"\\f455\\f455\"}.fa-duotone.fa-check-square:after,.fa-duotone.fa-square-check:after,.fad.fa-check-square:after,.fad.fa-square-check:after{content:\"\\f14a\\f14a\"}.fa-duotone.fa-shredder:after,.fad.fa-shredder:after{content:\"\\f68a\\f68a\"}.fa-duotone.fa-book-open-alt:after,.fa-duotone.fa-book-open-cover:after,.fad.fa-book-open-alt:after,.fad.fa-book-open-cover:after{content:\"\\e0c0\\e0c0\"}.fa-duotone.fa-sandwich:after,.fad.fa-sandwich:after{content:\"\\f81f\\f81f\"}.fa-duotone.fa-peseta-sign:after,.fad.fa-peseta-sign:after{content:\"\\e221\\e221\"}.fa-duotone.fa-parking-slash:after,.fa-duotone.fa-square-parking-slash:after,.fad.fa-parking-slash:after,.fad.fa-square-parking-slash:after{content:\"\\f617\\f617\"}.fa-duotone.fa-train-tunnel:after,.fad.fa-train-tunnel:after{content:\"\\e454\\e454\"}.fa-duotone.fa-header:after,.fa-duotone.fa-heading:after,.fad.fa-header:after,.fad.fa-heading:after{content:\"\\f1dc\\f1dc\"}.fa-duotone.fa-ghost:after,.fad.fa-ghost:after{content:\"\\f6e2\\f6e2\"}.fa-duotone.fa-face-anguished:after,.fad.fa-face-anguished:after{content:\"\\e369\\e369\"}.fa-duotone.fa-hockey-sticks:after,.fad.fa-hockey-sticks:after{content:\"\\f454\\f454\"}.fa-duotone.fa-abacus:after,.fad.fa-abacus:after{content:\"\\f640\\f640\"}.fa-duotone.fa-film-alt:after,.fa-duotone.fa-film-simple:after,.fad.fa-film-alt:after,.fad.fa-film-simple:after{content:\"\\f3a0\\f3a0\"}.fa-duotone.fa-list-squares:after,.fa-duotone.fa-list:after,.fad.fa-list-squares:after,.fad.fa-list:after{content:\"\\f03a\\f03a\"}.fa-duotone.fa-tree-palm:after,.fad.fa-tree-palm:after{content:\"\\f82b\\f82b\"}.fa-duotone.fa-phone-square-alt:after,.fa-duotone.fa-square-phone-flip:after,.fad.fa-phone-square-alt:after,.fad.fa-square-phone-flip:after{content:\"\\f87b\\f87b\"}.fa-duotone.fa-cart-plus:after,.fad.fa-cart-plus:after{content:\"\\f217\\f217\"}.fa-duotone.fa-gamepad:after,.fad.fa-gamepad:after{content:\"\\f11b\\f11b\"}.fa-duotone.fa-border-center-v:after,.fad.fa-border-center-v:after{content:\"\\f89d\\f89d\"}.fa-duotone.fa-circle-dot:after,.fa-duotone.fa-dot-circle:after,.fad.fa-circle-dot:after,.fad.fa-dot-circle:after{content:\"\\f192\\f192\"}.fa-duotone.fa-clipboard-medical:after,.fad.fa-clipboard-medical:after{content:\"\\e133\\e133\"}.fa-duotone.fa-dizzy:after,.fa-duotone.fa-face-dizzy:after,.fad.fa-dizzy:after,.fad.fa-face-dizzy:after{content:\"\\f567\\f567\"}.fa-duotone.fa-egg:after,.fad.fa-egg:after{content:\"\\f7fb\\f7fb\"}.fa-duotone.fa-arrow-alt-to-top:after,.fa-duotone.fa-up-to-line:after,.fad.fa-arrow-alt-to-top:after,.fad.fa-up-to-line:after{content:\"\\f34d\\f34d\"}.fa-duotone.fa-house-medical-circle-xmark:after,.fad.fa-house-medical-circle-xmark:after{content:\"\\e513\\e513\"}.fa-duotone.fa-watch-fitness:after,.fad.fa-watch-fitness:after{content:\"\\f63e\\f63e\"}.fa-duotone.fa-clock-nine-thirty:after,.fad.fa-clock-nine-thirty:after{content:\"\\e34d\\e34d\"}.fa-duotone.fa-campground:after,.fad.fa-campground:after{content:\"\\f6bb\\f6bb\"}.fa-duotone.fa-folder-plus:after,.fad.fa-folder-plus:after{content:\"\\f65e\\f65e\"}.fa-duotone.fa-jug:after,.fad.fa-jug:after{content:\"\\f8c6\\f8c6\"}.fa-duotone.fa-futbol-ball:after,.fa-duotone.fa-futbol:after,.fa-duotone.fa-soccer-ball:after,.fad.fa-futbol-ball:after,.fad.fa-futbol:after,.fad.fa-soccer-ball:after{content:\"\\f1e3\\f1e3\"}.fa-duotone.fa-snow-blowing:after,.fad.fa-snow-blowing:after{content:\"\\f761\\f761\"}.fa-duotone.fa-paint-brush:after,.fa-duotone.fa-paintbrush:after,.fad.fa-paint-brush:after,.fad.fa-paintbrush:after{content:\"\\f1fc\\f1fc\"}.fa-duotone.fa-lock:after,.fad.fa-lock:after{content:\"\\f023\\f023\"}.fa-duotone.fa-arrow-down-from-line:after,.fa-duotone.fa-arrow-from-top:after,.fad.fa-arrow-down-from-line:after,.fad.fa-arrow-from-top:after{content:\"\\f345\\f345\"}.fa-duotone.fa-gas-pump:after,.fad.fa-gas-pump:after{content:\"\\f52f\\f52f\"}.fa-duotone.fa-signal-alt-slash:after,.fa-duotone.fa-signal-bars-slash:after,.fad.fa-signal-alt-slash:after,.fad.fa-signal-bars-slash:after{content:\"\\f694\\f694\"}.fa-duotone.fa-monkey:after,.fad.fa-monkey:after{content:\"\\f6fb\\f6fb\"}.fa-duotone.fa-pro:after,.fa-duotone.fa-rectangle-pro:after,.fad.fa-pro:after,.fad.fa-rectangle-pro:after{content:\"\\e235\\e235\"}.fa-duotone.fa-house-night:after,.fad.fa-house-night:after{content:\"\\e010\\e010\"}.fa-duotone.fa-hot-tub-person:after,.fa-duotone.fa-hot-tub:after,.fad.fa-hot-tub-person:after,.fad.fa-hot-tub:after{content:\"\\f593\\f593\"}.fa-duotone.fa-blanket:after,.fad.fa-blanket:after{content:\"\\f498\\f498\"}.fa-duotone.fa-map-location:after,.fa-duotone.fa-map-marked:after,.fad.fa-map-location:after,.fad.fa-map-marked:after{content:\"\\f59f\\f59f\"}.fa-duotone.fa-house-flood-water:after,.fad.fa-house-flood-water:after{content:\"\\e50e\\e50e\"}.fa-duotone.fa-comments-question-check:after,.fad.fa-comments-question-check:after{content:\"\\e14f\\e14f\"}.fa-duotone.fa-tree:after,.fad.fa-tree:after{content:\"\\f1bb\\f1bb\"}.fa-duotone.fa-arrows-cross:after,.fad.fa-arrows-cross:after{content:\"\\e0a2\\e0a2\"}.fa-duotone.fa-backpack:after,.fad.fa-backpack:after{content:\"\\f5d4\\f5d4\"}.fa-duotone.fa-square-small:after,.fad.fa-square-small:after{content:\"\\e27e\\e27e\"}.fa-duotone.fa-folder-arrow-up:after,.fa-duotone.fa-folder-upload:after,.fad.fa-folder-arrow-up:after,.fad.fa-folder-upload:after{content:\"\\e054\\e054\"}.fa-duotone.fa-bridge-lock:after,.fad.fa-bridge-lock:after{content:\"\\e4cc\\e4cc\"}.fa-duotone.fa-crosshairs-simple:after,.fad.fa-crosshairs-simple:after{content:\"\\e59f\\e59f\"}.fa-duotone.fa-sack-dollar:after,.fad.fa-sack-dollar:after{content:\"\\f81d\\f81d\"}.fa-duotone.fa-edit:after,.fa-duotone.fa-pen-to-square:after,.fad.fa-edit:after,.fad.fa-pen-to-square:after{content:\"\\f044\\f044\"}.fa-duotone.fa-sliders-h-square:after,.fa-duotone.fa-square-sliders:after,.fad.fa-sliders-h-square:after,.fad.fa-square-sliders:after{content:\"\\f3f0\\f3f0\"}.fa-duotone.fa-car-side:after,.fad.fa-car-side:after{content:\"\\f5e4\\f5e4\"}.fa-duotone.fa-comment-middle-top-alt:after,.fa-duotone.fa-message-middle-top:after,.fad.fa-comment-middle-top-alt:after,.fad.fa-message-middle-top:after{content:\"\\e1e2\\e1e2\"}.fa-duotone.fa-lightbulb-on:after,.fad.fa-lightbulb-on:after{content:\"\\f672\\f672\"}.fa-duotone.fa-knife:after,.fa-duotone.fa-utensil-knife:after,.fad.fa-knife:after,.fad.fa-utensil-knife:after{content:\"\\f2e4\\f2e4\"}.fa-duotone.fa-share-alt:after,.fa-duotone.fa-share-nodes:after,.fad.fa-share-alt:after,.fad.fa-share-nodes:after{content:\"\\f1e0\\f1e0\"}.fa-duotone.fa-wave-sine:after,.fad.fa-wave-sine:after{content:\"\\f899\\f899\"}.fa-duotone.fa-heart-circle-minus:after,.fad.fa-heart-circle-minus:after{content:\"\\e4ff\\e4ff\"}.fa-duotone.fa-circle-w:after,.fad.fa-circle-w:after{content:\"\\e12c\\e12c\"}.fa-duotone.fa-calendar-circle:after,.fa-duotone.fa-circle-calendar:after,.fad.fa-calendar-circle:after,.fad.fa-circle-calendar:after{content:\"\\e102\\e102\"}.fa-duotone.fa-hourglass-2:after,.fa-duotone.fa-hourglass-half:after,.fad.fa-hourglass-2:after,.fad.fa-hourglass-half:after{content:\"\\f252\\f252\"}.fa-duotone.fa-microscope:after,.fad.fa-microscope:after{content:\"\\f610\\f610\"}.fa-duotone.fa-sunset:after,.fad.fa-sunset:after{content:\"\\f767\\f767\"}.fa-duotone.fa-sink:after,.fad.fa-sink:after{content:\"\\e06d\\e06d\"}.fa-duotone.fa-calendar-exclamation:after,.fad.fa-calendar-exclamation:after{content:\"\\f334\\f334\"}.fa-duotone.fa-truck-container-empty:after,.fad.fa-truck-container-empty:after{content:\"\\e2b5\\e2b5\"}.fa-duotone.fa-hand-heart:after,.fad.fa-hand-heart:after{content:\"\\f4bc\\f4bc\"}.fa-duotone.fa-bag-shopping:after,.fa-duotone.fa-shopping-bag:after,.fad.fa-bag-shopping:after,.fad.fa-shopping-bag:after{content:\"\\f290\\f290\"}.fa-duotone.fa-arrow-down-z-a:after,.fa-duotone.fa-sort-alpha-desc:after,.fa-duotone.fa-sort-alpha-down-alt:after,.fad.fa-arrow-down-z-a:after,.fad.fa-sort-alpha-desc:after,.fad.fa-sort-alpha-down-alt:after{content:\"\\f881\\f881\"}.fa-duotone.fa-mitten:after,.fad.fa-mitten:after{content:\"\\f7b5\\f7b5\"}.fa-duotone.fa-reply-clock:after,.fa-duotone.fa-reply-time:after,.fad.fa-reply-clock:after,.fad.fa-reply-time:after{content:\"\\e239\\e239\"}.fa-duotone.fa-person-rays:after,.fad.fa-person-rays:after{content:\"\\e54d\\e54d\"}.fa-duotone.fa-arrow-alt-right:after,.fa-duotone.fa-right:after,.fad.fa-arrow-alt-right:after,.fad.fa-right:after{content:\"\\f356\\f356\"}.fa-duotone.fa-circle-f:after,.fad.fa-circle-f:after{content:\"\\e10e\\e10e\"}.fa-duotone.fa-users:after,.fad.fa-users:after{content:\"\\f0c0\\f0c0\"}.fa-duotone.fa-face-pleading:after,.fad.fa-face-pleading:after{content:\"\\e386\\e386\"}.fa-duotone.fa-eye-slash:after,.fad.fa-eye-slash:after{content:\"\\f070\\f070\"}.fa-duotone.fa-flask-vial:after,.fad.fa-flask-vial:after{content:\"\\e4f3\\e4f3\"}.fa-duotone.fa-police-box:after,.fad.fa-police-box:after{content:\"\\e021\\e021\"}.fa-duotone.fa-cucumber:after,.fad.fa-cucumber:after{content:\"\\e401\\e401\"}.fa-duotone.fa-head-side-brain:after,.fad.fa-head-side-brain:after{content:\"\\f808\\f808\"}.fa-duotone.fa-hand-paper:after,.fa-duotone.fa-hand:after,.fad.fa-hand-paper:after,.fad.fa-hand:after{content:\"\\f256\\f256\"}.fa-duotone.fa-biking-mountain:after,.fa-duotone.fa-person-biking-mountain:after,.fad.fa-biking-mountain:after,.fad.fa-person-biking-mountain:after{content:\"\\f84b\\f84b\"}.fa-duotone.fa-utensils-slash:after,.fad.fa-utensils-slash:after{content:\"\\e464\\e464\"}.fa-duotone.fa-print-magnifying-glass:after,.fa-duotone.fa-print-search:after,.fad.fa-print-magnifying-glass:after,.fad.fa-print-search:after{content:\"\\f81a\\f81a\"}.fa-duotone.fa-folder-bookmark:after,.fad.fa-folder-bookmark:after{content:\"\\e186\\e186\"}.fa-duotone.fa-om:after,.fad.fa-om:after{content:\"\\f679\\f679\"}.fa-duotone.fa-pi:after,.fad.fa-pi:after{content:\"\\f67e\\f67e\"}.fa-duotone.fa-flask-potion:after,.fa-duotone.fa-flask-round-potion:after,.fad.fa-flask-potion:after,.fad.fa-flask-round-potion:after{content:\"\\f6e1\\f6e1\"}.fa-duotone.fa-face-shush:after,.fad.fa-face-shush:after{content:\"\\e38c\\e38c\"}.fa-duotone.fa-worm:after,.fad.fa-worm:after{content:\"\\e599\\e599\"}.fa-duotone.fa-house-circle-xmark:after,.fad.fa-house-circle-xmark:after{content:\"\\e50b\\e50b\"}.fa-duotone.fa-plug:after,.fad.fa-plug:after{content:\"\\f1e6\\f1e6\"}.fa-duotone.fa-calendar-circle-exclamation:after,.fad.fa-calendar-circle-exclamation:after{content:\"\\e46e\\e46e\"}.fa-duotone.fa-square-i:after,.fad.fa-square-i:after{content:\"\\e272\\e272\"}.fa-duotone.fa-chevron-up:after,.fad.fa-chevron-up:after{content:\"\\f077\\f077\"}.fa-duotone.fa-face-saluting:after,.fad.fa-face-saluting:after{content:\"\\e484\\e484\"}.fa-duotone.fa-gauge-simple-low:after,.fa-duotone.fa-tachometer-slow:after,.fad.fa-gauge-simple-low:after,.fad.fa-tachometer-slow:after{content:\"\\f62c\\f62c\"}.fa-duotone.fa-face-persevering:after,.fad.fa-face-persevering:after{content:\"\\e385\\e385\"}.fa-duotone.fa-camera-circle:after,.fa-duotone.fa-circle-camera:after,.fad.fa-camera-circle:after,.fad.fa-circle-camera:after{content:\"\\e103\\e103\"}.fa-duotone.fa-hand-spock:after,.fad.fa-hand-spock:after{content:\"\\f259\\f259\"}.fa-duotone.fa-spider-web:after,.fad.fa-spider-web:after{content:\"\\f719\\f719\"}.fa-duotone.fa-circle-microphone:after,.fa-duotone.fa-microphone-circle:after,.fad.fa-circle-microphone:after,.fad.fa-microphone-circle:after{content:\"\\e116\\e116\"}.fa-duotone.fa-book-arrow-up:after,.fad.fa-book-arrow-up:after{content:\"\\e0ba\\e0ba\"}.fa-duotone.fa-popsicle:after,.fad.fa-popsicle:after{content:\"\\e43e\\e43e\"}.fa-duotone.fa-command:after,.fad.fa-command:after{content:\"\\e142\\e142\"}.fa-duotone.fa-blinds:after,.fad.fa-blinds:after{content:\"\\f8fb\\f8fb\"}.fa-duotone.fa-stopwatch:after,.fad.fa-stopwatch:after{content:\"\\f2f2\\f2f2\"}.fa-duotone.fa-saxophone:after,.fad.fa-saxophone:after{content:\"\\f8dc\\f8dc\"}.fa-duotone.fa-square-2:after,.fad.fa-square-2:after{content:\"\\e257\\e257\"}.fa-duotone.fa-field-hockey-stick-ball:after,.fa-duotone.fa-field-hockey:after,.fad.fa-field-hockey-stick-ball:after,.fad.fa-field-hockey:after{content:\"\\f44c\\f44c\"}.fa-duotone.fa-arrow-up-square-triangle:after,.fa-duotone.fa-sort-shapes-up-alt:after,.fad.fa-arrow-up-square-triangle:after,.fad.fa-sort-shapes-up-alt:after{content:\"\\f88b\\f88b\"}.fa-duotone.fa-face-scream:after,.fad.fa-face-scream:after{content:\"\\e38b\\e38b\"}.fa-duotone.fa-square-m:after,.fad.fa-square-m:after{content:\"\\e276\\e276\"}.fa-duotone.fa-camera-web:after,.fa-duotone.fa-webcam:after,.fad.fa-camera-web:after,.fad.fa-webcam:after{content:\"\\f832\\f832\"}.fa-duotone.fa-comment-arrow-down:after,.fad.fa-comment-arrow-down:after{content:\"\\e143\\e143\"}.fa-duotone.fa-lightbulb-cfl:after,.fad.fa-lightbulb-cfl:after{content:\"\\e5a6\\e5a6\"}.fa-duotone.fa-window-frame-open:after,.fad.fa-window-frame-open:after{content:\"\\e050\\e050\"}.fa-duotone.fa-face-kiss:after,.fa-duotone.fa-kiss:after,.fad.fa-face-kiss:after,.fad.fa-kiss:after{content:\"\\f596\\f596\"}.fa-duotone.fa-bridge-circle-xmark:after,.fad.fa-bridge-circle-xmark:after{content:\"\\e4cb\\e4cb\"}.fa-duotone.fa-period:after,.fad.fa-period:after{content:\"\\2e\\2e\"}.fa-duotone.fa-face-grin-tongue:after,.fa-duotone.fa-grin-tongue:after,.fad.fa-face-grin-tongue:after,.fad.fa-grin-tongue:after{content:\"\\f589\\f589\"}.fa-duotone.fa-up-to-dotted-line:after,.fad.fa-up-to-dotted-line:after{content:\"\\e457\\e457\"}.fa-duotone.fa-thought-bubble:after,.fad.fa-thought-bubble:after{content:\"\\e32e\\e32e\"}.fa-duotone.fa-raygun:after,.fad.fa-raygun:after{content:\"\\e025\\e025\"}.fa-duotone.fa-flute:after,.fad.fa-flute:after{content:\"\\f8b9\\f8b9\"}.fa-duotone.fa-acorn:after,.fad.fa-acorn:after{content:\"\\f6ae\\f6ae\"}.fa-duotone.fa-video-arrow-up-right:after,.fad.fa-video-arrow-up-right:after{content:\"\\e2c9\\e2c9\"}.fa-duotone.fa-grate-droplet:after,.fad.fa-grate-droplet:after{content:\"\\e194\\e194\"}.fa-duotone.fa-seal-exclamation:after,.fad.fa-seal-exclamation:after{content:\"\\e242\\e242\"}.fa-duotone.fa-chess-bishop:after,.fad.fa-chess-bishop:after{content:\"\\f43a\\f43a\"}.fa-duotone.fa-message-sms:after,.fad.fa-message-sms:after{content:\"\\e1e5\\e1e5\"}.fa-duotone.fa-coffee-beans:after,.fad.fa-coffee-beans:after{content:\"\\e13f\\e13f\"}.fa-duotone.fa-hat-witch:after,.fad.fa-hat-witch:after{content:\"\\f6e7\\f6e7\"}.fa-duotone.fa-face-grin-wink:after,.fa-duotone.fa-grin-wink:after,.fad.fa-face-grin-wink:after,.fad.fa-grin-wink:after{content:\"\\f58c\\f58c\"}.fa-duotone.fa-clock-three-thirty:after,.fad.fa-clock-three-thirty:after{content:\"\\e357\\e357\"}.fa-duotone.fa-deaf:after,.fa-duotone.fa-deafness:after,.fa-duotone.fa-ear-deaf:after,.fa-duotone.fa-hard-of-hearing:after,.fad.fa-deaf:after,.fad.fa-deafness:after,.fad.fa-ear-deaf:after,.fad.fa-hard-of-hearing:after{content:\"\\f2a4\\f2a4\"}.fa-duotone.fa-alarm-clock:after,.fad.fa-alarm-clock:after{content:\"\\f34e\\f34e\"}.fa-duotone.fa-eclipse:after,.fad.fa-eclipse:after{content:\"\\f749\\f749\"}.fa-duotone.fa-face-relieved:after,.fad.fa-face-relieved:after{content:\"\\e389\\e389\"}.fa-duotone.fa-road-circle-check:after,.fad.fa-road-circle-check:after{content:\"\\e564\\e564\"}.fa-duotone.fa-dice-five:after,.fad.fa-dice-five:after{content:\"\\f523\\f523\"}.fa-duotone.fa-minus-octagon:after,.fa-duotone.fa-octagon-minus:after,.fad.fa-minus-octagon:after,.fad.fa-octagon-minus:after{content:\"\\f308\\f308\"}.fa-duotone.fa-rss-square:after,.fa-duotone.fa-square-rss:after,.fad.fa-rss-square:after,.fad.fa-square-rss:after{content:\"\\f143\\f143\"}.fa-duotone.fa-face-zany:after,.fad.fa-face-zany:after{content:\"\\e3a4\\e3a4\"}.fa-duotone.fa-land-mine-on:after,.fad.fa-land-mine-on:after{content:\"\\e51b\\e51b\"}.fa-duotone.fa-square-arrow-up-left:after,.fad.fa-square-arrow-up-left:after{content:\"\\e263\\e263\"}.fa-duotone.fa-i-cursor:after,.fad.fa-i-cursor:after{content:\"\\f246\\f246\"}.fa-duotone.fa-salt-shaker:after,.fad.fa-salt-shaker:after{content:\"\\e446\\e446\"}.fa-duotone.fa-stamp:after,.fad.fa-stamp:after{content:\"\\f5bf\\f5bf\"}.fa-duotone.fa-file-plus:after,.fad.fa-file-plus:after{content:\"\\f319\\f319\"}.fa-duotone.fa-draw-square:after,.fad.fa-draw-square:after{content:\"\\f5ef\\f5ef\"}.fa-duotone.fa-toilet-paper-reverse-slash:after,.fa-duotone.fa-toilet-paper-under-slash:after,.fad.fa-toilet-paper-reverse-slash:after,.fad.fa-toilet-paper-under-slash:after{content:\"\\e2a1\\e2a1\"}.fa-duotone.fa-stairs:after,.fad.fa-stairs:after{content:\"\\e289\\e289\"}.fa-duotone.fa-drone-alt:after,.fa-duotone.fa-drone-front:after,.fad.fa-drone-alt:after,.fad.fa-drone-front:after{content:\"\\f860\\f860\"}.fa-duotone.fa-glass-empty:after,.fad.fa-glass-empty:after{content:\"\\e191\\e191\"}.fa-duotone.fa-dial-high:after,.fad.fa-dial-high:after{content:\"\\e15c\\e15c\"}.fa-duotone.fa-user-construction:after,.fa-duotone.fa-user-hard-hat:after,.fa-duotone.fa-user-helmet-safety:after,.fad.fa-user-construction:after,.fad.fa-user-hard-hat:after,.fad.fa-user-helmet-safety:after{content:\"\\f82c\\f82c\"}.fa-duotone.fa-i:after,.fad.fa-i:after{content:\"\\49\\49\"}.fa-duotone.fa-hryvnia-sign:after,.fa-duotone.fa-hryvnia:after,.fad.fa-hryvnia-sign:after,.fad.fa-hryvnia:after{content:\"\\f6f2\\f6f2\"}.fa-duotone.fa-arrow-down-left-and-arrow-up-right-to-center:after,.fad.fa-arrow-down-left-and-arrow-up-right-to-center:after{content:\"\\e092\\e092\"}.fa-duotone.fa-pills:after,.fad.fa-pills:after{content:\"\\f484\\f484\"}.fa-duotone.fa-face-grin-wide:after,.fa-duotone.fa-grin-alt:after,.fad.fa-face-grin-wide:after,.fad.fa-grin-alt:after{content:\"\\f581\\f581\"}.fa-duotone.fa-tooth:after,.fad.fa-tooth:after{content:\"\\f5c9\\f5c9\"}.fa-duotone.fa-basketball-hoop:after,.fad.fa-basketball-hoop:after{content:\"\\f435\\f435\"}.fa-duotone.fa-objects-align-bottom:after,.fad.fa-objects-align-bottom:after{content:\"\\e3bb\\e3bb\"}.fa-duotone.fa-v:after,.fad.fa-v:after{content:\"\\56\\56\"}.fa-duotone.fa-sparkles:after,.fad.fa-sparkles:after{content:\"\\f890\\f890\"}.fa-duotone.fa-squid:after,.fad.fa-squid:after{content:\"\\e450\\e450\"}.fa-duotone.fa-leafy-green:after,.fad.fa-leafy-green:after{content:\"\\e41d\\e41d\"}.fa-duotone.fa-circle-arrow-up-right:after,.fad.fa-circle-arrow-up-right:after{content:\"\\e0fc\\e0fc\"}.fa-duotone.fa-calendars:after,.fad.fa-calendars:after{content:\"\\e0d7\\e0d7\"}.fa-duotone.fa-bangladeshi-taka-sign:after,.fad.fa-bangladeshi-taka-sign:after{content:\"\\e2e6\\e2e6\"}.fa-duotone.fa-bicycle:after,.fad.fa-bicycle:after{content:\"\\f206\\f206\"}.fa-duotone.fa-hammer-war:after,.fad.fa-hammer-war:after{content:\"\\f6e4\\f6e4\"}.fa-duotone.fa-circle-d:after,.fad.fa-circle-d:after{content:\"\\e104\\e104\"}.fa-duotone.fa-spider-black-widow:after,.fad.fa-spider-black-widow:after{content:\"\\f718\\f718\"}.fa-duotone.fa-rod-asclepius:after,.fa-duotone.fa-rod-snake:after,.fa-duotone.fa-staff-aesculapius:after,.fa-duotone.fa-staff-snake:after,.fad.fa-rod-asclepius:after,.fad.fa-rod-snake:after,.fad.fa-staff-aesculapius:after,.fad.fa-staff-snake:after{content:\"\\e579\\e579\"}.fa-duotone.fa-pear:after,.fad.fa-pear:after{content:\"\\e20c\\e20c\"}.fa-duotone.fa-head-side-cough-slash:after,.fad.fa-head-side-cough-slash:after{content:\"\\e062\\e062\"}.fa-duotone.fa-triangle:after,.fad.fa-triangle:after{content:\"\\f2ec\\f2ec\"}.fa-duotone.fa-apartment:after,.fad.fa-apartment:after{content:\"\\e468\\e468\"}.fa-duotone.fa-ambulance:after,.fa-duotone.fa-truck-medical:after,.fad.fa-ambulance:after,.fad.fa-truck-medical:after{content:\"\\f0f9\\f0f9\"}.fa-duotone.fa-pepper:after,.fad.fa-pepper:after{content:\"\\e432\\e432\"}.fa-duotone.fa-piano:after,.fad.fa-piano:after{content:\"\\f8d4\\f8d4\"}.fa-duotone.fa-gun-squirt:after,.fad.fa-gun-squirt:after{content:\"\\e19d\\e19d\"}.fa-duotone.fa-wheat-awn-circle-exclamation:after,.fad.fa-wheat-awn-circle-exclamation:after{content:\"\\e598\\e598\"}.fa-duotone.fa-snowman:after,.fad.fa-snowman:after{content:\"\\f7d0\\f7d0\"}.fa-duotone.fa-user-alien:after,.fad.fa-user-alien:after{content:\"\\e04a\\e04a\"}.fa-duotone.fa-shield-check:after,.fad.fa-shield-check:after{content:\"\\f2f7\\f2f7\"}.fa-duotone.fa-mortar-pestle:after,.fad.fa-mortar-pestle:after{content:\"\\f5a7\\f5a7\"}.fa-duotone.fa-road-barrier:after,.fad.fa-road-barrier:after{content:\"\\e562\\e562\"}.fa-duotone.fa-chart-candlestick:after,.fad.fa-chart-candlestick:after{content:\"\\e0e2\\e0e2\"}.fa-duotone.fa-briefcase-blank:after,.fad.fa-briefcase-blank:after{content:\"\\e0c8\\e0c8\"}.fa-duotone.fa-school:after,.fad.fa-school:after{content:\"\\f549\\f549\"}.fa-duotone.fa-igloo:after,.fad.fa-igloo:after{content:\"\\f7ae\\f7ae\"}.fa-duotone.fa-bracket-round:after,.fa-duotone.fa-parenthesis:after,.fad.fa-bracket-round:after,.fad.fa-parenthesis:after{content:\"\\28\\28\"}.fa-duotone.fa-joint:after,.fad.fa-joint:after{content:\"\\f595\\f595\"}.fa-duotone.fa-horse-saddle:after,.fad.fa-horse-saddle:after{content:\"\\f8c3\\f8c3\"}.fa-duotone.fa-mug-marshmallows:after,.fad.fa-mug-marshmallows:after{content:\"\\f7b7\\f7b7\"}.fa-duotone.fa-filters:after,.fad.fa-filters:after{content:\"\\e17e\\e17e\"}.fa-duotone.fa-bell-on:after,.fad.fa-bell-on:after{content:\"\\f8fa\\f8fa\"}.fa-duotone.fa-angle-right:after,.fad.fa-angle-right:after{content:\"\\f105\\f105\"}.fa-duotone.fa-dial-med:after,.fad.fa-dial-med:after{content:\"\\e15f\\e15f\"}.fa-duotone.fa-horse:after,.fad.fa-horse:after{content:\"\\f6f0\\f6f0\"}.fa-duotone.fa-q:after,.fad.fa-q:after{content:\"\\51\\51\"}.fa-duotone.fa-monitor-heart-rate:after,.fa-duotone.fa-monitor-waveform:after,.fad.fa-monitor-heart-rate:after,.fad.fa-monitor-waveform:after{content:\"\\f611\\f611\"}.fa-duotone.fa-link-simple:after,.fad.fa-link-simple:after{content:\"\\e1cd\\e1cd\"}.fa-duotone.fa-whistle:after,.fad.fa-whistle:after{content:\"\\f460\\f460\"}.fa-duotone.fa-g:after,.fad.fa-g:after{content:\"\\47\\47\"}.fa-duotone.fa-fragile:after,.fa-duotone.fa-wine-glass-crack:after,.fad.fa-fragile:after,.fad.fa-wine-glass-crack:after{content:\"\\f4bb\\f4bb\"}.fa-duotone.fa-slot-machine:after,.fad.fa-slot-machine:after{content:\"\\e3ce\\e3ce\"}.fa-duotone.fa-notes-medical:after,.fad.fa-notes-medical:after{content:\"\\f481\\f481\"}.fa-duotone.fa-car-wash:after,.fad.fa-car-wash:after{content:\"\\f5e6\\f5e6\"}.fa-duotone.fa-escalator:after,.fad.fa-escalator:after{content:\"\\e171\\e171\"}.fa-duotone.fa-comment-image:after,.fad.fa-comment-image:after{content:\"\\e148\\e148\"}.fa-duotone.fa-temperature-2:after,.fa-duotone.fa-temperature-half:after,.fa-duotone.fa-thermometer-2:after,.fa-duotone.fa-thermometer-half:after,.fad.fa-temperature-2:after,.fad.fa-temperature-half:after,.fad.fa-thermometer-2:after,.fad.fa-thermometer-half:after{content:\"\\f2c9\\f2c9\"}.fa-duotone.fa-dong-sign:after,.fad.fa-dong-sign:after{content:\"\\e169\\e169\"}.fa-duotone.fa-donut:after,.fa-duotone.fa-doughnut:after,.fad.fa-donut:after,.fad.fa-doughnut:after{content:\"\\e406\\e406\"}.fa-duotone.fa-capsules:after,.fad.fa-capsules:after{content:\"\\f46b\\f46b\"}.fa-duotone.fa-poo-bolt:after,.fa-duotone.fa-poo-storm:after,.fad.fa-poo-bolt:after,.fad.fa-poo-storm:after{content:\"\\f75a\\f75a\"}.fa-duotone.fa-tally-1:after,.fad.fa-tally-1:after{content:\"\\e294\\e294\"}.fa-duotone.fa-face-frown-open:after,.fa-duotone.fa-frown-open:after,.fad.fa-face-frown-open:after,.fad.fa-frown-open:after{content:\"\\f57a\\f57a\"}.fa-duotone.fa-square-dashed:after,.fad.fa-square-dashed:after{content:\"\\e269\\e269\"}.fa-duotone.fa-square-j:after,.fad.fa-square-j:after{content:\"\\e273\\e273\"}.fa-duotone.fa-hand-point-up:after,.fad.fa-hand-point-up:after{content:\"\\f0a6\\f0a6\"}.fa-duotone.fa-money-bill:after,.fad.fa-money-bill:after{content:\"\\f0d6\\f0d6\"}.fa-duotone.fa-arrow-up-big-small:after,.fa-duotone.fa-sort-size-up:after,.fad.fa-arrow-up-big-small:after,.fad.fa-sort-size-up:after{content:\"\\f88e\\f88e\"}.fa-duotone.fa-barcode-read:after,.fad.fa-barcode-read:after{content:\"\\f464\\f464\"}.fa-duotone.fa-baguette:after,.fad.fa-baguette:after{content:\"\\e3d8\\e3d8\"}.fa-duotone.fa-bowl-soft-serve:after,.fad.fa-bowl-soft-serve:after{content:\"\\e46b\\e46b\"}.fa-duotone.fa-face-holding-back-tears:after,.fad.fa-face-holding-back-tears:after{content:\"\\e482\\e482\"}.fa-duotone.fa-arrow-alt-square-up:after,.fa-duotone.fa-square-up:after,.fad.fa-arrow-alt-square-up:after,.fad.fa-square-up:after{content:\"\\f353\\f353\"}.fa-duotone.fa-subway-tunnel:after,.fa-duotone.fa-train-subway-tunnel:after,.fad.fa-subway-tunnel:after,.fad.fa-train-subway-tunnel:after{content:\"\\e2a3\\e2a3\"}.fa-duotone.fa-exclamation-square:after,.fa-duotone.fa-square-exclamation:after,.fad.fa-exclamation-square:after,.fad.fa-square-exclamation:after{content:\"\\f321\\f321\"}.fa-duotone.fa-semicolon:after,.fad.fa-semicolon:after{content:\"\\3b\\3b\"}.fa-duotone.fa-bookmark:after,.fad.fa-bookmark:after{content:\"\\f02e\\f02e\"}.fa-duotone.fa-fan-table:after,.fad.fa-fan-table:after{content:\"\\e004\\e004\"}.fa-duotone.fa-align-justify:after,.fad.fa-align-justify:after{content:\"\\f039\\f039\"}.fa-duotone.fa-battery-1:after,.fa-duotone.fa-battery-low:after,.fad.fa-battery-1:after,.fad.fa-battery-low:after{content:\"\\e0b1\\e0b1\"}.fa-duotone.fa-credit-card-front:after,.fad.fa-credit-card-front:after{content:\"\\f38a\\f38a\"}.fa-duotone.fa-brain-arrow-curved-right:after,.fa-duotone.fa-mind-share:after,.fad.fa-brain-arrow-curved-right:after,.fad.fa-mind-share:after{content:\"\\f677\\f677\"}.fa-duotone.fa-umbrella-beach:after,.fad.fa-umbrella-beach:after{content:\"\\f5ca\\f5ca\"}.fa-duotone.fa-helmet-un:after,.fad.fa-helmet-un:after{content:\"\\e503\\e503\"}.fa-duotone.fa-location-smile:after,.fa-duotone.fa-map-marker-smile:after,.fad.fa-location-smile:after,.fad.fa-map-marker-smile:after{content:\"\\f60d\\f60d\"}.fa-duotone.fa-arrow-left-to-line:after,.fa-duotone.fa-arrow-to-left:after,.fad.fa-arrow-left-to-line:after,.fad.fa-arrow-to-left:after{content:\"\\f33e\\f33e\"}.fa-duotone.fa-bullseye:after,.fad.fa-bullseye:after{content:\"\\f140\\f140\"}.fa-duotone.fa-nigiri:after,.fa-duotone.fa-sushi:after,.fad.fa-nigiri:after,.fad.fa-sushi:after{content:\"\\e48a\\e48a\"}.fa-duotone.fa-comment-alt-captions:after,.fa-duotone.fa-message-captions:after,.fad.fa-comment-alt-captions:after,.fad.fa-message-captions:after{content:\"\\e1de\\e1de\"}.fa-duotone.fa-trash-list:after,.fad.fa-trash-list:after{content:\"\\e2b1\\e2b1\"}.fa-duotone.fa-bacon:after,.fad.fa-bacon:after{content:\"\\f7e5\\f7e5\"}.fa-duotone.fa-option:after,.fad.fa-option:after{content:\"\\e318\\e318\"}.fa-duotone.fa-hand-point-down:after,.fad.fa-hand-point-down:after{content:\"\\f0a7\\f0a7\"}.fa-duotone.fa-arrow-up-from-bracket:after,.fad.fa-arrow-up-from-bracket:after{content:\"\\e09a\\e09a\"}.fa-duotone.fa-trash-plus:after,.fad.fa-trash-plus:after{content:\"\\e2b2\\e2b2\"}.fa-duotone.fa-objects-align-top:after,.fad.fa-objects-align-top:after{content:\"\\e3c0\\e3c0\"}.fa-duotone.fa-folder-blank:after,.fa-duotone.fa-folder:after,.fad.fa-folder-blank:after,.fad.fa-folder:after{content:\"\\f07b\\f07b\"}.fa-duotone.fa-face-anxious-sweat:after,.fad.fa-face-anxious-sweat:after{content:\"\\e36a\\e36a\"}.fa-duotone.fa-credit-card-blank:after,.fad.fa-credit-card-blank:after{content:\"\\f389\\f389\"}.fa-duotone.fa-file-medical-alt:after,.fa-duotone.fa-file-waveform:after,.fad.fa-file-medical-alt:after,.fad.fa-file-waveform:after{content:\"\\f478\\f478\"}.fa-duotone.fa-microchip-ai:after,.fad.fa-microchip-ai:after{content:\"\\e1ec\\e1ec\"}.fa-duotone.fa-mug:after,.fad.fa-mug:after{content:\"\\f874\\f874\"}.fa-duotone.fa-plane-up-slash:after,.fad.fa-plane-up-slash:after{content:\"\\e22e\\e22e\"}.fa-duotone.fa-radiation:after,.fad.fa-radiation:after{content:\"\\f7b9\\f7b9\"}.fa-duotone.fa-pen-circle:after,.fad.fa-pen-circle:after{content:\"\\e20e\\e20e\"}.fa-duotone.fa-chart-simple:after,.fad.fa-chart-simple:after{content:\"\\e473\\e473\"}.fa-duotone.fa-crutches:after,.fad.fa-crutches:after{content:\"\\f7f8\\f7f8\"}.fa-duotone.fa-circle-parking:after,.fa-duotone.fa-parking-circle:after,.fad.fa-circle-parking:after,.fad.fa-parking-circle:after{content:\"\\f615\\f615\"}.fa-duotone.fa-mars-stroke:after,.fad.fa-mars-stroke:after{content:\"\\f229\\f229\"}.fa-duotone.fa-leaf-oak:after,.fad.fa-leaf-oak:after{content:\"\\f6f7\\f6f7\"}.fa-duotone.fa-square-bolt:after,.fad.fa-square-bolt:after{content:\"\\e265\\e265\"}.fa-duotone.fa-vial:after,.fad.fa-vial:after{content:\"\\f492\\f492\"}.fa-duotone.fa-dashboard:after,.fa-duotone.fa-gauge-med:after,.fa-duotone.fa-gauge:after,.fa-duotone.fa-tachometer-alt-average:after,.fad.fa-dashboard:after,.fad.fa-gauge-med:after,.fad.fa-gauge:after,.fad.fa-tachometer-alt-average:after{content:\"\\f624\\f624\"}.fa-duotone.fa-magic-wand-sparkles:after,.fa-duotone.fa-wand-magic-sparkles:after,.fad.fa-magic-wand-sparkles:after,.fad.fa-wand-magic-sparkles:after{content:\"\\e2ca\\e2ca\"}.fa-duotone.fa-lambda:after,.fad.fa-lambda:after{content:\"\\f66e\\f66e\"}.fa-duotone.fa-e:after,.fad.fa-e:after{content:\"\\45\\45\"}.fa-duotone.fa-pizza:after,.fad.fa-pizza:after{content:\"\\f817\\f817\"}.fa-duotone.fa-bowl-chopsticks-noodles:after,.fad.fa-bowl-chopsticks-noodles:after{content:\"\\e2ea\\e2ea\"}.fa-duotone.fa-h3:after,.fad.fa-h3:after{content:\"\\f315\\f315\"}.fa-duotone.fa-pen-alt:after,.fa-duotone.fa-pen-clip:after,.fad.fa-pen-alt:after,.fad.fa-pen-clip:after{content:\"\\f305\\f305\"}.fa-duotone.fa-bridge-circle-exclamation:after,.fad.fa-bridge-circle-exclamation:after{content:\"\\e4ca\\e4ca\"}.fa-duotone.fa-badge-percent:after,.fad.fa-badge-percent:after{content:\"\\f646\\f646\"}.fa-duotone.fa-user:after,.fad.fa-user:after{content:\"\\f007\\f007\"}.fa-duotone.fa-sensor:after,.fad.fa-sensor:after{content:\"\\e028\\e028\"}.fa-duotone.fa-comma:after,.fad.fa-comma:after{content:\"\\2c\\2c\"}.fa-duotone.fa-school-circle-check:after,.fad.fa-school-circle-check:after{content:\"\\e56b\\e56b\"}.fa-duotone.fa-toilet-paper-reverse:after,.fa-duotone.fa-toilet-paper-under:after,.fad.fa-toilet-paper-reverse:after,.fad.fa-toilet-paper-under:after{content:\"\\e2a0\\e2a0\"}.fa-duotone.fa-light-emergency:after,.fad.fa-light-emergency:after{content:\"\\e41f\\e41f\"}.fa-duotone.fa-arrow-down-to-arc:after,.fad.fa-arrow-down-to-arc:after{content:\"\\e4ae\\e4ae\"}.fa-duotone.fa-dumpster:after,.fad.fa-dumpster:after{content:\"\\f793\\f793\"}.fa-duotone.fa-shuttle-van:after,.fa-duotone.fa-van-shuttle:after,.fad.fa-shuttle-van:after,.fad.fa-van-shuttle:after{content:\"\\f5b6\\f5b6\"}.fa-duotone.fa-building-user:after,.fad.fa-building-user:after{content:\"\\e4da\\e4da\"}.fa-duotone.fa-light-switch:after,.fad.fa-light-switch:after{content:\"\\e017\\e017\"}.fa-duotone.fa-caret-square-left:after,.fa-duotone.fa-square-caret-left:after,.fad.fa-caret-square-left:after,.fad.fa-square-caret-left:after{content:\"\\f191\\f191\"}.fa-duotone.fa-highlighter:after,.fad.fa-highlighter:after{content:\"\\f591\\f591\"}.fa-duotone.fa-heart-rate:after,.fa-duotone.fa-wave-pulse:after,.fad.fa-heart-rate:after,.fad.fa-wave-pulse:after{content:\"\\f5f8\\f5f8\"}.fa-duotone.fa-key:after,.fad.fa-key:after{content:\"\\f084\\f084\"}.fa-duotone.fa-hat-santa:after,.fad.fa-hat-santa:after{content:\"\\f7a7\\f7a7\"}.fa-duotone.fa-tamale:after,.fad.fa-tamale:after{content:\"\\e451\\e451\"}.fa-duotone.fa-box-check:after,.fad.fa-box-check:after{content:\"\\f467\\f467\"}.fa-duotone.fa-bullhorn:after,.fad.fa-bullhorn:after{content:\"\\f0a1\\f0a1\"}.fa-duotone.fa-steak:after,.fad.fa-steak:after{content:\"\\f824\\f824\"}.fa-duotone.fa-location-crosshairs-slash:after,.fa-duotone.fa-location-slash:after,.fad.fa-location-crosshairs-slash:after,.fad.fa-location-slash:after{content:\"\\f603\\f603\"}.fa-duotone.fa-person-dolly:after,.fad.fa-person-dolly:after{content:\"\\f4d0\\f4d0\"}.fa-duotone.fa-globe:after,.fad.fa-globe:after{content:\"\\f0ac\\f0ac\"}.fa-duotone.fa-synagogue:after,.fad.fa-synagogue:after{content:\"\\f69b\\f69b\"}.fa-duotone.fa-file-chart-column:after,.fa-duotone.fa-file-chart-line:after,.fad.fa-file-chart-column:after,.fad.fa-file-chart-line:after{content:\"\\f659\\f659\"}.fa-duotone.fa-person-half-dress:after,.fad.fa-person-half-dress:after{content:\"\\e548\\e548\"}.fa-duotone.fa-folder-image:after,.fad.fa-folder-image:after{content:\"\\e18a\\e18a\"}.fa-duotone.fa-calendar-edit:after,.fa-duotone.fa-calendar-pen:after,.fad.fa-calendar-edit:after,.fad.fa-calendar-pen:after{content:\"\\f333\\f333\"}.fa-duotone.fa-road-bridge:after,.fad.fa-road-bridge:after{content:\"\\e563\\e563\"}.fa-duotone.fa-face-smile-tear:after,.fad.fa-face-smile-tear:after{content:\"\\e393\\e393\"}.fa-duotone.fa-comment-alt-plus:after,.fa-duotone.fa-message-plus:after,.fad.fa-comment-alt-plus:after,.fad.fa-message-plus:after{content:\"\\f4a8\\f4a8\"}.fa-duotone.fa-location-arrow:after,.fad.fa-location-arrow:after{content:\"\\f124\\f124\"}.fa-duotone.fa-c:after,.fad.fa-c:after{content:\"\\43\\43\"}.fa-duotone.fa-tablet-button:after,.fad.fa-tablet-button:after{content:\"\\f10a\\f10a\"}.fa-duotone.fa-rectangle-history-circle-user:after,.fad.fa-rectangle-history-circle-user:after{content:\"\\e4a4\\e4a4\"}.fa-duotone.fa-building-lock:after,.fad.fa-building-lock:after{content:\"\\e4d6\\e4d6\"}.fa-duotone.fa-chart-line-up:after,.fad.fa-chart-line-up:after{content:\"\\e0e5\\e0e5\"}.fa-duotone.fa-mailbox:after,.fad.fa-mailbox:after{content:\"\\f813\\f813\"}.fa-duotone.fa-truck-bolt:after,.fad.fa-truck-bolt:after{content:\"\\e3d0\\e3d0\"}.fa-duotone.fa-pizza-slice:after,.fad.fa-pizza-slice:after{content:\"\\f818\\f818\"}.fa-duotone.fa-money-bill-wave:after,.fad.fa-money-bill-wave:after{content:\"\\f53a\\f53a\"}.fa-duotone.fa-area-chart:after,.fa-duotone.fa-chart-area:after,.fad.fa-area-chart:after,.fad.fa-chart-area:after{content:\"\\f1fe\\f1fe\"}.fa-duotone.fa-house-flag:after,.fad.fa-house-flag:after{content:\"\\e50d\\e50d\"}.fa-duotone.fa-person-circle-minus:after,.fad.fa-person-circle-minus:after{content:\"\\e540\\e540\"}.fa-duotone.fa-scalpel:after,.fad.fa-scalpel:after{content:\"\\f61d\\f61d\"}.fa-duotone.fa-ban:after,.fa-duotone.fa-cancel:after,.fad.fa-ban:after,.fad.fa-cancel:after{content:\"\\f05e\\f05e\"}.fa-duotone.fa-bell-exclamation:after,.fad.fa-bell-exclamation:after{content:\"\\f848\\f848\"}.fa-duotone.fa-bookmark-circle:after,.fa-duotone.fa-circle-bookmark:after,.fad.fa-bookmark-circle:after,.fad.fa-circle-bookmark:after{content:\"\\e100\\e100\"}.fa-duotone.fa-egg-fried:after,.fad.fa-egg-fried:after{content:\"\\f7fc\\f7fc\"}.fa-duotone.fa-face-weary:after,.fad.fa-face-weary:after{content:\"\\e3a1\\e3a1\"}.fa-duotone.fa-uniform-martial-arts:after,.fad.fa-uniform-martial-arts:after{content:\"\\e3d1\\e3d1\"}.fa-duotone.fa-camera-rotate:after,.fad.fa-camera-rotate:after{content:\"\\e0d8\\e0d8\"}.fa-duotone.fa-sun-dust:after,.fad.fa-sun-dust:after{content:\"\\f764\\f764\"}.fa-duotone.fa-comment-text:after,.fad.fa-comment-text:after{content:\"\\e14d\\e14d\"}.fa-duotone.fa-air-freshener:after,.fa-duotone.fa-spray-can-sparkles:after,.fad.fa-air-freshener:after,.fad.fa-spray-can-sparkles:after{content:\"\\f5d0\\f5d0\"}.fa-duotone.fa-signal-alt-4:after,.fa-duotone.fa-signal-alt:after,.fa-duotone.fa-signal-bars-strong:after,.fa-duotone.fa-signal-bars:after,.fad.fa-signal-alt-4:after,.fad.fa-signal-alt:after,.fad.fa-signal-bars-strong:after,.fad.fa-signal-bars:after{content:\"\\f690\\f690\"}.fa-duotone.fa-diamond-exclamation:after,.fad.fa-diamond-exclamation:after{content:\"\\e405\\e405\"}.fa-duotone.fa-star:after,.fad.fa-star:after{content:\"\\f005\\f005\"}.fa-duotone.fa-dial-min:after,.fad.fa-dial-min:after{content:\"\\e161\\e161\"}.fa-duotone.fa-repeat:after,.fad.fa-repeat:after{content:\"\\f363\\f363\"}.fa-duotone.fa-cross:after,.fad.fa-cross:after{content:\"\\f654\\f654\"}.fa-duotone.fa-file-caret-down:after,.fa-duotone.fa-page-caret-down:after,.fad.fa-file-caret-down:after,.fad.fa-page-caret-down:after{content:\"\\e429\\e429\"}.fa-duotone.fa-box:after,.fad.fa-box:after{content:\"\\f466\\f466\"}.fa-duotone.fa-venus-mars:after,.fad.fa-venus-mars:after{content:\"\\f228\\f228\"}.fa-duotone.fa-clock-seven-thirty:after,.fad.fa-clock-seven-thirty:after{content:\"\\e351\\e351\"}.fa-duotone.fa-arrow-pointer:after,.fa-duotone.fa-mouse-pointer:after,.fad.fa-arrow-pointer:after,.fad.fa-mouse-pointer:after{content:\"\\f245\\f245\"}.fa-duotone.fa-clock-four-thirty:after,.fad.fa-clock-four-thirty:after{content:\"\\e34b\\e34b\"}.fa-duotone.fa-signal-alt-3:after,.fa-duotone.fa-signal-bars-good:after,.fad.fa-signal-alt-3:after,.fad.fa-signal-bars-good:after{content:\"\\f693\\f693\"}.fa-duotone.fa-cactus:after,.fad.fa-cactus:after{content:\"\\f8a7\\f8a7\"}.fa-duotone.fa-expand-arrows-alt:after,.fa-duotone.fa-maximize:after,.fad.fa-expand-arrows-alt:after,.fad.fa-maximize:after{content:\"\\f31e\\f31e\"}.fa-duotone.fa-charging-station:after,.fad.fa-charging-station:after{content:\"\\f5e7\\f5e7\"}.fa-duotone.fa-shapes:after,.fa-duotone.fa-triangle-circle-square:after,.fad.fa-shapes:after,.fad.fa-triangle-circle-square:after{content:\"\\f61f\\f61f\"}.fa-duotone.fa-plane-tail:after,.fad.fa-plane-tail:after{content:\"\\e22c\\e22c\"}.fa-duotone.fa-gauge-simple-max:after,.fa-duotone.fa-tachometer-fastest:after,.fad.fa-gauge-simple-max:after,.fad.fa-tachometer-fastest:after{content:\"\\f62b\\f62b\"}.fa-duotone.fa-circle-u:after,.fad.fa-circle-u:after{content:\"\\e127\\e127\"}.fa-duotone.fa-shield-slash:after,.fad.fa-shield-slash:after{content:\"\\e24b\\e24b\"}.fa-duotone.fa-phone-square-down:after,.fa-duotone.fa-square-phone-hangup:after,.fad.fa-phone-square-down:after,.fad.fa-square-phone-hangup:after{content:\"\\e27a\\e27a\"}.fa-duotone.fa-arrow-up-left:after,.fad.fa-arrow-up-left:after{content:\"\\e09d\\e09d\"}.fa-duotone.fa-transporter-1:after,.fad.fa-transporter-1:after{content:\"\\e043\\e043\"}.fa-duotone.fa-peanuts:after,.fad.fa-peanuts:after{content:\"\\e431\\e431\"}.fa-duotone.fa-random:after,.fa-duotone.fa-shuffle:after,.fad.fa-random:after,.fad.fa-shuffle:after{content:\"\\f074\\f074\"}.fa-duotone.fa-person-running:after,.fa-duotone.fa-running:after,.fad.fa-person-running:after,.fad.fa-running:after{content:\"\\f70c\\f70c\"}.fa-duotone.fa-mobile-retro:after,.fad.fa-mobile-retro:after{content:\"\\e527\\e527\"}.fa-duotone.fa-grip-lines-vertical:after,.fad.fa-grip-lines-vertical:after{content:\"\\f7a5\\f7a5\"}.fa-duotone.fa-arrow-up-from-square:after,.fad.fa-arrow-up-from-square:after{content:\"\\e09c\\e09c\"}.fa-duotone.fa-file-dashed-line:after,.fa-duotone.fa-page-break:after,.fad.fa-file-dashed-line:after,.fad.fa-page-break:after{content:\"\\f877\\f877\"}.fa-duotone.fa-bracket-curly-right:after,.fad.fa-bracket-curly-right:after{content:\"\\7d\\7d\"}.fa-duotone.fa-spider:after,.fad.fa-spider:after{content:\"\\f717\\f717\"}.fa-duotone.fa-clock-three:after,.fad.fa-clock-three:after{content:\"\\e356\\e356\"}.fa-duotone.fa-hands-bound:after,.fad.fa-hands-bound:after{content:\"\\e4f9\\e4f9\"}.fa-duotone.fa-scalpel-line-dashed:after,.fa-duotone.fa-scalpel-path:after,.fad.fa-scalpel-line-dashed:after,.fad.fa-scalpel-path:after{content:\"\\f61e\\f61e\"}.fa-duotone.fa-file-invoice-dollar:after,.fad.fa-file-invoice-dollar:after{content:\"\\f571\\f571\"}.fa-duotone.fa-pipe-smoking:after,.fad.fa-pipe-smoking:after{content:\"\\e3c4\\e3c4\"}.fa-duotone.fa-face-astonished:after,.fad.fa-face-astonished:after{content:\"\\e36b\\e36b\"}.fa-duotone.fa-window:after,.fad.fa-window:after{content:\"\\f40e\\f40e\"}.fa-duotone.fa-plane-circle-exclamation:after,.fad.fa-plane-circle-exclamation:after{content:\"\\e556\\e556\"}.fa-duotone.fa-ear:after,.fad.fa-ear:after{content:\"\\f5f0\\f5f0\"}.fa-duotone.fa-file-lock:after,.fad.fa-file-lock:after{content:\"\\e3a6\\e3a6\"}.fa-duotone.fa-diagram-venn:after,.fad.fa-diagram-venn:after{content:\"\\e15a\\e15a\"}.fa-duotone.fa-x-ray:after,.fad.fa-x-ray:after{content:\"\\f497\\f497\"}.fa-duotone.fa-goal-net:after,.fad.fa-goal-net:after{content:\"\\e3ab\\e3ab\"}.fa-duotone.fa-coffin-cross:after,.fad.fa-coffin-cross:after{content:\"\\e051\\e051\"}.fa-duotone.fa-spell-check:after,.fad.fa-spell-check:after{content:\"\\f891\\f891\"}.fa-duotone.fa-location-xmark:after,.fa-duotone.fa-map-marker-times:after,.fa-duotone.fa-map-marker-xmark:after,.fad.fa-location-xmark:after,.fad.fa-map-marker-times:after,.fad.fa-map-marker-xmark:after{content:\"\\f60e\\f60e\"}.fa-duotone.fa-lasso:after,.fad.fa-lasso:after{content:\"\\f8c8\\f8c8\"}.fa-duotone.fa-slash:after,.fad.fa-slash:after{content:\"\\f715\\f715\"}.fa-duotone.fa-person-to-portal:after,.fa-duotone.fa-portal-enter:after,.fad.fa-person-to-portal:after,.fad.fa-portal-enter:after{content:\"\\e022\\e022\"}.fa-duotone.fa-calendar-star:after,.fad.fa-calendar-star:after{content:\"\\f736\\f736\"}.fa-duotone.fa-computer-mouse:after,.fa-duotone.fa-mouse:after,.fad.fa-computer-mouse:after,.fad.fa-mouse:after{content:\"\\f8cc\\f8cc\"}.fa-duotone.fa-arrow-right-to-bracket:after,.fa-duotone.fa-sign-in:after,.fad.fa-arrow-right-to-bracket:after,.fad.fa-sign-in:after{content:\"\\f090\\f090\"}.fa-duotone.fa-pegasus:after,.fad.fa-pegasus:after{content:\"\\f703\\f703\"}.fa-duotone.fa-files-medical:after,.fad.fa-files-medical:after{content:\"\\f7fd\\f7fd\"}.fa-duotone.fa-nfc-lock:after,.fad.fa-nfc-lock:after{content:\"\\e1f8\\e1f8\"}.fa-duotone.fa-person-ski-lift:after,.fa-duotone.fa-ski-lift:after,.fad.fa-person-ski-lift:after,.fad.fa-ski-lift:after{content:\"\\f7c8\\f7c8\"}.fa-duotone.fa-square-6:after,.fad.fa-square-6:after{content:\"\\e25b\\e25b\"}.fa-duotone.fa-shop-slash:after,.fa-duotone.fa-store-alt-slash:after,.fad.fa-shop-slash:after,.fad.fa-store-alt-slash:after{content:\"\\e070\\e070\"}.fa-duotone.fa-wind-turbine:after,.fad.fa-wind-turbine:after{content:\"\\f89b\\f89b\"}.fa-duotone.fa-sliders-simple:after,.fad.fa-sliders-simple:after{content:\"\\e253\\e253\"}.fa-duotone.fa-badge-sheriff:after,.fad.fa-badge-sheriff:after{content:\"\\f8a2\\f8a2\"}.fa-duotone.fa-server:after,.fad.fa-server:after{content:\"\\f233\\f233\"}.fa-duotone.fa-virus-covid-slash:after,.fad.fa-virus-covid-slash:after{content:\"\\e4a9\\e4a9\"}.fa-duotone.fa-intersection:after,.fad.fa-intersection:after{content:\"\\f668\\f668\"}.fa-duotone.fa-shop-lock:after,.fad.fa-shop-lock:after{content:\"\\e4a5\\e4a5\"}.fa-duotone.fa-family:after,.fad.fa-family:after{content:\"\\e300\\e300\"}.fa-duotone.fa-hourglass-1:after,.fa-duotone.fa-hourglass-start:after,.fad.fa-hourglass-1:after,.fad.fa-hourglass-start:after{content:\"\\f251\\f251\"}.fa-duotone.fa-user-hair-buns:after,.fad.fa-user-hair-buns:after{content:\"\\e3d3\\e3d3\"}.fa-duotone.fa-blender-phone:after,.fad.fa-blender-phone:after{content:\"\\f6b6\\f6b6\"}.fa-duotone.fa-hourglass-clock:after,.fad.fa-hourglass-clock:after{content:\"\\e41b\\e41b\"}.fa-duotone.fa-person-seat-reclined:after,.fad.fa-person-seat-reclined:after{content:\"\\e21f\\e21f\"}.fa-duotone.fa-paper-plane-alt:after,.fa-duotone.fa-paper-plane-top:after,.fa-duotone.fa-send:after,.fad.fa-paper-plane-alt:after,.fad.fa-paper-plane-top:after,.fad.fa-send:after{content:\"\\e20a\\e20a\"}.fa-duotone.fa-comment-alt-arrow-up:after,.fa-duotone.fa-message-arrow-up:after,.fad.fa-comment-alt-arrow-up:after,.fad.fa-message-arrow-up:after{content:\"\\e1dc\\e1dc\"}.fa-duotone.fa-lightbulb-exclamation:after,.fad.fa-lightbulb-exclamation:after{content:\"\\f671\\f671\"}.fa-duotone.fa-layer-group-minus:after,.fa-duotone.fa-layer-minus:after,.fad.fa-layer-group-minus:after,.fad.fa-layer-minus:after{content:\"\\f5fe\\f5fe\"}.fa-duotone.fa-circle-e:after,.fad.fa-circle-e:after{content:\"\\e109\\e109\"}.fa-duotone.fa-building-wheat:after,.fad.fa-building-wheat:after{content:\"\\e4db\\e4db\"}.fa-duotone.fa-gauge-max:after,.fa-duotone.fa-tachometer-alt-fastest:after,.fad.fa-gauge-max:after,.fad.fa-tachometer-alt-fastest:after{content:\"\\f626\\f626\"}.fa-duotone.fa-person-breastfeeding:after,.fad.fa-person-breastfeeding:after{content:\"\\e53a\\e53a\"}.fa-duotone.fa-apostrophe:after,.fad.fa-apostrophe:after{content:\"\\27\\27\"}.fa-duotone.fa-fire-hydrant:after,.fad.fa-fire-hydrant:after{content:\"\\e17f\\e17f\"}.fa-duotone.fa-right-to-bracket:after,.fa-duotone.fa-sign-in-alt:after,.fad.fa-right-to-bracket:after,.fad.fa-sign-in-alt:after{content:\"\\f2f6\\f2f6\"}.fa-duotone.fa-video-plus:after,.fad.fa-video-plus:after{content:\"\\f4e1\\f4e1\"}.fa-duotone.fa-arrow-alt-square-right:after,.fa-duotone.fa-square-right:after,.fad.fa-arrow-alt-square-right:after,.fad.fa-square-right:after{content:\"\\f352\\f352\"}.fa-duotone.fa-comment-smile:after,.fad.fa-comment-smile:after{content:\"\\f4b4\\f4b4\"}.fa-duotone.fa-venus:after,.fad.fa-venus:after{content:\"\\f221\\f221\"}.fa-duotone.fa-passport:after,.fad.fa-passport:after{content:\"\\f5ab\\f5ab\"}.fa-duotone.fa-inbox-arrow-down:after,.fa-duotone.fa-inbox-in:after,.fad.fa-inbox-arrow-down:after,.fad.fa-inbox-in:after{content:\"\\f310\\f310\"}.fa-duotone.fa-heart-pulse:after,.fa-duotone.fa-heartbeat:after,.fad.fa-heart-pulse:after,.fad.fa-heartbeat:after{content:\"\\f21e\\f21e\"}.fa-duotone.fa-circle-8:after,.fad.fa-circle-8:after{content:\"\\e0f5\\e0f5\"}.fa-duotone.fa-clouds-moon:after,.fad.fa-clouds-moon:after{content:\"\\f745\\f745\"}.fa-duotone.fa-clock-ten-thirty:after,.fad.fa-clock-ten-thirty:after{content:\"\\e355\\e355\"}.fa-duotone.fa-people-carry-box:after,.fa-duotone.fa-people-carry:after,.fad.fa-people-carry-box:after,.fad.fa-people-carry:after{content:\"\\f4ce\\f4ce\"}.fa-duotone.fa-folder-user:after,.fad.fa-folder-user:after{content:\"\\e18e\\e18e\"}.fa-duotone.fa-trash-can-xmark:after,.fad.fa-trash-can-xmark:after{content:\"\\e2ae\\e2ae\"}.fa-duotone.fa-temperature-high:after,.fad.fa-temperature-high:after{content:\"\\f769\\f769\"}.fa-duotone.fa-microchip:after,.fad.fa-microchip:after{content:\"\\f2db\\f2db\"}.fa-duotone.fa-left-long-to-line:after,.fad.fa-left-long-to-line:after{content:\"\\e41e\\e41e\"}.fa-duotone.fa-crown:after,.fad.fa-crown:after{content:\"\\f521\\f521\"}.fa-duotone.fa-weight-hanging:after,.fad.fa-weight-hanging:after{content:\"\\f5cd\\f5cd\"}.fa-duotone.fa-xmarks-lines:after,.fad.fa-xmarks-lines:after{content:\"\\e59a\\e59a\"}.fa-duotone.fa-file-prescription:after,.fad.fa-file-prescription:after{content:\"\\f572\\f572\"}.fa-duotone.fa-calendar-range:after,.fad.fa-calendar-range:after{content:\"\\e0d6\\e0d6\"}.fa-duotone.fa-flower-daffodil:after,.fad.fa-flower-daffodil:after{content:\"\\f800\\f800\"}.fa-duotone.fa-hand-back-point-up:after,.fad.fa-hand-back-point-up:after{content:\"\\e1a2\\e1a2\"}.fa-duotone.fa-weight-scale:after,.fa-duotone.fa-weight:after,.fad.fa-weight-scale:after,.fad.fa-weight:after{content:\"\\f496\\f496\"}.fa-duotone.fa-star-exclamation:after,.fad.fa-star-exclamation:after{content:\"\\f2f3\\f2f3\"}.fa-duotone.fa-books:after,.fad.fa-books:after{content:\"\\f5db\\f5db\"}.fa-duotone.fa-user-friends:after,.fa-duotone.fa-user-group:after,.fad.fa-user-friends:after,.fad.fa-user-group:after{content:\"\\f500\\f500\"}.fa-duotone.fa-arrow-up-a-z:after,.fa-duotone.fa-sort-alpha-up:after,.fad.fa-arrow-up-a-z:after,.fad.fa-sort-alpha-up:after{content:\"\\f15e\\f15e\"}.fa-duotone.fa-layer-group-plus:after,.fa-duotone.fa-layer-plus:after,.fad.fa-layer-group-plus:after,.fad.fa-layer-plus:after{content:\"\\f5ff\\f5ff\"}.fa-duotone.fa-play-pause:after,.fad.fa-play-pause:after{content:\"\\e22f\\e22f\"}.fa-duotone.fa-block-question:after,.fad.fa-block-question:after{content:\"\\e3dd\\e3dd\"}.fa-duotone.fa-snooze:after,.fa-duotone.fa-zzz:after,.fad.fa-snooze:after,.fad.fa-zzz:after{content:\"\\f880\\f880\"}.fa-duotone.fa-scanner-image:after,.fad.fa-scanner-image:after{content:\"\\f8f3\\f8f3\"}.fa-duotone.fa-tv-retro:after,.fad.fa-tv-retro:after{content:\"\\f401\\f401\"}.fa-duotone.fa-square-t:after,.fad.fa-square-t:after{content:\"\\e280\\e280\"}.fa-duotone.fa-barn-silo:after,.fa-duotone.fa-farm:after,.fad.fa-barn-silo:after,.fad.fa-farm:after{content:\"\\f864\\f864\"}.fa-duotone.fa-chess-knight:after,.fad.fa-chess-knight:after{content:\"\\f441\\f441\"}.fa-duotone.fa-bars-sort:after,.fad.fa-bars-sort:after{content:\"\\e0ae\\e0ae\"}.fa-duotone.fa-palette-boxes:after,.fa-duotone.fa-pallet-alt:after,.fa-duotone.fa-pallet-boxes:after,.fad.fa-palette-boxes:after,.fad.fa-pallet-alt:after,.fad.fa-pallet-boxes:after{content:\"\\f483\\f483\"}.fa-duotone.fa-face-laugh-squint:after,.fa-duotone.fa-laugh-squint:after,.fad.fa-face-laugh-squint:after,.fad.fa-laugh-squint:after{content:\"\\f59b\\f59b\"}.fa-duotone.fa-code-simple:after,.fad.fa-code-simple:after{content:\"\\e13d\\e13d\"}.fa-duotone.fa-bolt-slash:after,.fad.fa-bolt-slash:after{content:\"\\e0b8\\e0b8\"}.fa-duotone.fa-panel-fire:after,.fad.fa-panel-fire:after{content:\"\\e42f\\e42f\"}.fa-duotone.fa-binary-circle-check:after,.fad.fa-binary-circle-check:after{content:\"\\e33c\\e33c\"}.fa-duotone.fa-comment-minus:after,.fad.fa-comment-minus:after{content:\"\\f4b1\\f4b1\"}.fa-duotone.fa-burrito:after,.fad.fa-burrito:after{content:\"\\f7ed\\f7ed\"}.fa-duotone.fa-violin:after,.fad.fa-violin:after{content:\"\\f8ed\\f8ed\"}.fa-duotone.fa-objects-column:after,.fad.fa-objects-column:after{content:\"\\e3c1\\e3c1\"}.fa-duotone.fa-chevron-square-down:after,.fa-duotone.fa-square-chevron-down:after,.fad.fa-chevron-square-down:after,.fad.fa-square-chevron-down:after{content:\"\\f329\\f329\"}.fa-duotone.fa-comment-plus:after,.fad.fa-comment-plus:after{content:\"\\f4b2\\f4b2\"}.fa-duotone.fa-triangle-instrument:after,.fa-duotone.fa-triangle-music:after,.fad.fa-triangle-instrument:after,.fad.fa-triangle-music:after{content:\"\\f8e2\\f8e2\"}.fa-duotone.fa-wheelchair:after,.fad.fa-wheelchair:after{content:\"\\f193\\f193\"}.fa-duotone.fa-user-pilot-tie:after,.fad.fa-user-pilot-tie:after{content:\"\\e2c1\\e2c1\"}.fa-duotone.fa-piano-keyboard:after,.fad.fa-piano-keyboard:after{content:\"\\f8d5\\f8d5\"}.fa-duotone.fa-bed-empty:after,.fad.fa-bed-empty:after{content:\"\\f8f9\\f8f9\"}.fa-duotone.fa-arrow-circle-up:after,.fa-duotone.fa-circle-arrow-up:after,.fad.fa-arrow-circle-up:after,.fad.fa-circle-arrow-up:after{content:\"\\f0aa\\f0aa\"}.fa-duotone.fa-toggle-on:after,.fad.fa-toggle-on:after{content:\"\\f205\\f205\"}.fa-duotone.fa-rectangle-portrait:after,.fa-duotone.fa-rectangle-vertical:after,.fad.fa-rectangle-portrait:after,.fad.fa-rectangle-vertical:after{content:\"\\f2fb\\f2fb\"}.fa-duotone.fa-person-walking:after,.fa-duotone.fa-walking:after,.fad.fa-person-walking:after,.fad.fa-walking:after{content:\"\\f554\\f554\"}.fa-duotone.fa-l:after,.fad.fa-l:after{content:\"\\4c\\4c\"}.fa-duotone.fa-signal-stream:after,.fad.fa-signal-stream:after{content:\"\\f8dd\\f8dd\"}.fa-duotone.fa-down-to-bracket:after,.fad.fa-down-to-bracket:after{content:\"\\e4e7\\e4e7\"}.fa-duotone.fa-circle-z:after,.fad.fa-circle-z:after{content:\"\\e130\\e130\"}.fa-duotone.fa-stars:after,.fad.fa-stars:after{content:\"\\f762\\f762\"}.fa-duotone.fa-fire:after,.fad.fa-fire:after{content:\"\\f06d\\f06d\"}.fa-duotone.fa-bed-pulse:after,.fa-duotone.fa-procedures:after,.fad.fa-bed-pulse:after,.fad.fa-procedures:after{content:\"\\f487\\f487\"}.fa-duotone.fa-house-day:after,.fad.fa-house-day:after{content:\"\\e00e\\e00e\"}.fa-duotone.fa-shuttle-space:after,.fa-duotone.fa-space-shuttle:after,.fad.fa-shuttle-space:after,.fad.fa-space-shuttle:after{content:\"\\f197\\f197\"}.fa-duotone.fa-shirt-long-sleeve:after,.fad.fa-shirt-long-sleeve:after{content:\"\\e3c7\\e3c7\"}.fa-duotone.fa-chart-pie-alt:after,.fa-duotone.fa-chart-pie-simple:after,.fad.fa-chart-pie-alt:after,.fad.fa-chart-pie-simple:after{content:\"\\f64e\\f64e\"}.fa-duotone.fa-face-laugh:after,.fa-duotone.fa-laugh:after,.fad.fa-face-laugh:after,.fad.fa-laugh:after{content:\"\\f599\\f599\"}.fa-duotone.fa-folder-open:after,.fad.fa-folder-open:after{content:\"\\f07c\\f07c\"}.fa-duotone.fa-album-collection-circle-user:after,.fad.fa-album-collection-circle-user:after{content:\"\\e48f\\e48f\"}.fa-duotone.fa-candy:after,.fad.fa-candy:after{content:\"\\e3e7\\e3e7\"}.fa-duotone.fa-bowl-hot:after,.fa-duotone.fa-soup:after,.fad.fa-bowl-hot:after,.fad.fa-soup:after{content:\"\\f823\\f823\"}.fa-duotone.fa-flatbread:after,.fad.fa-flatbread:after{content:\"\\e40b\\e40b\"}.fa-duotone.fa-heart-circle-plus:after,.fad.fa-heart-circle-plus:after{content:\"\\e500\\e500\"}.fa-duotone.fa-code-fork:after,.fad.fa-code-fork:after{content:\"\\e13b\\e13b\"}.fa-duotone.fa-city:after,.fad.fa-city:after{content:\"\\f64f\\f64f\"}.fa-duotone.fa-signal-alt-1:after,.fa-duotone.fa-signal-bars-weak:after,.fad.fa-signal-alt-1:after,.fad.fa-signal-bars-weak:after{content:\"\\f691\\f691\"}.fa-duotone.fa-microphone-alt:after,.fa-duotone.fa-microphone-lines:after,.fad.fa-microphone-alt:after,.fad.fa-microphone-lines:after{content:\"\\f3c9\\f3c9\"}.fa-duotone.fa-clock-twelve:after,.fad.fa-clock-twelve:after{content:\"\\e358\\e358\"}.fa-duotone.fa-pepper-hot:after,.fad.fa-pepper-hot:after{content:\"\\f816\\f816\"}.fa-duotone.fa-citrus-slice:after,.fad.fa-citrus-slice:after{content:\"\\e2f5\\e2f5\"}.fa-duotone.fa-sheep:after,.fad.fa-sheep:after{content:\"\\f711\\f711\"}.fa-duotone.fa-unlock:after,.fad.fa-unlock:after{content:\"\\f09c\\f09c\"}.fa-duotone.fa-colon-sign:after,.fad.fa-colon-sign:after{content:\"\\e140\\e140\"}.fa-duotone.fa-headset:after,.fad.fa-headset:after{content:\"\\f590\\f590\"}.fa-duotone.fa-badger-honey:after,.fad.fa-badger-honey:after{content:\"\\f6b4\\f6b4\"}.fa-duotone.fa-h4:after,.fad.fa-h4:after{content:\"\\f86a\\f86a\"}.fa-duotone.fa-store-slash:after,.fad.fa-store-slash:after{content:\"\\e071\\e071\"}.fa-duotone.fa-road-circle-xmark:after,.fad.fa-road-circle-xmark:after{content:\"\\e566\\e566\"}.fa-duotone.fa-signal-slash:after,.fad.fa-signal-slash:after{content:\"\\f695\\f695\"}.fa-duotone.fa-user-minus:after,.fad.fa-user-minus:after{content:\"\\f503\\f503\"}.fa-duotone.fa-mars-stroke-up:after,.fa-duotone.fa-mars-stroke-v:after,.fad.fa-mars-stroke-up:after,.fad.fa-mars-stroke-v:after{content:\"\\f22a\\f22a\"}.fa-duotone.fa-champagne-glasses:after,.fa-duotone.fa-glass-cheers:after,.fad.fa-champagne-glasses:after,.fad.fa-glass-cheers:after{content:\"\\f79f\\f79f\"}.fa-duotone.fa-taco:after,.fad.fa-taco:after{content:\"\\f826\\f826\"}.fa-duotone.fa-hexagon-plus:after,.fa-duotone.fa-plus-hexagon:after,.fad.fa-hexagon-plus:after,.fad.fa-plus-hexagon:after{content:\"\\f300\\f300\"}.fa-duotone.fa-clipboard:after,.fad.fa-clipboard:after{content:\"\\f328\\f328\"}.fa-duotone.fa-house-circle-exclamation:after,.fad.fa-house-circle-exclamation:after{content:\"\\e50a\\e50a\"}.fa-duotone.fa-file-arrow-up:after,.fa-duotone.fa-file-upload:after,.fad.fa-file-arrow-up:after,.fad.fa-file-upload:after{content:\"\\f574\\f574\"}.fa-duotone.fa-wifi-3:after,.fa-duotone.fa-wifi-strong:after,.fa-duotone.fa-wifi:after,.fad.fa-wifi-3:after,.fad.fa-wifi-strong:after,.fad.fa-wifi:after{content:\"\\f1eb\\f1eb\"}.fa-duotone.fa-comments-alt:after,.fa-duotone.fa-messages:after,.fad.fa-comments-alt:after,.fad.fa-messages:after{content:\"\\f4b6\\f4b6\"}.fa-duotone.fa-bath:after,.fa-duotone.fa-bathtub:after,.fad.fa-bath:after,.fad.fa-bathtub:after{content:\"\\f2cd\\f2cd\"}.fa-duotone.fa-umbrella-alt:after,.fa-duotone.fa-umbrella-simple:after,.fad.fa-umbrella-alt:after,.fad.fa-umbrella-simple:after{content:\"\\e2bc\\e2bc\"}.fa-duotone.fa-rectangle-history-circle-plus:after,.fad.fa-rectangle-history-circle-plus:after{content:\"\\e4a3\\e4a3\"}.fa-duotone.fa-underline:after,.fad.fa-underline:after{content:\"\\f0cd\\f0cd\"}.fa-duotone.fa-user-edit:after,.fa-duotone.fa-user-pen:after,.fad.fa-user-edit:after,.fad.fa-user-pen:after{content:\"\\f4ff\\f4ff\"}.fa-duotone.fa-binary-slash:after,.fad.fa-binary-slash:after{content:\"\\e33e\\e33e\"}.fa-duotone.fa-square-o:after,.fad.fa-square-o:after{content:\"\\e278\\e278\"}.fa-duotone.fa-signature:after,.fad.fa-signature:after{content:\"\\f5b7\\f5b7\"}.fa-duotone.fa-stroopwafel:after,.fad.fa-stroopwafel:after{content:\"\\f551\\f551\"}.fa-duotone.fa-bold:after,.fad.fa-bold:after{content:\"\\f032\\f032\"}.fa-duotone.fa-anchor-lock:after,.fad.fa-anchor-lock:after{content:\"\\e4ad\\e4ad\"}.fa-duotone.fa-building-ngo:after,.fad.fa-building-ngo:after{content:\"\\e4d7\\e4d7\"}.fa-duotone.fa-transporter-3:after,.fad.fa-transporter-3:after{content:\"\\e045\\e045\"}.fa-duotone.fa-engine-exclamation:after,.fa-duotone.fa-engine-warning:after,.fad.fa-engine-exclamation:after,.fad.fa-engine-warning:after{content:\"\\f5f2\\f5f2\"}.fa-duotone.fa-circle-down-right:after,.fad.fa-circle-down-right:after{content:\"\\e108\\e108\"}.fa-duotone.fa-square-k:after,.fad.fa-square-k:after{content:\"\\e274\\e274\"}.fa-duotone.fa-manat-sign:after,.fad.fa-manat-sign:after{content:\"\\e1d5\\e1d5\"}.fa-duotone.fa-money-check-edit:after,.fa-duotone.fa-money-check-pen:after,.fad.fa-money-check-edit:after,.fad.fa-money-check-pen:after{content:\"\\f872\\f872\"}.fa-duotone.fa-not-equal:after,.fad.fa-not-equal:after{content:\"\\f53e\\f53e\"}.fa-duotone.fa-border-style:after,.fa-duotone.fa-border-top-left:after,.fad.fa-border-style:after,.fad.fa-border-top-left:after{content:\"\\f853\\f853\"}.fa-duotone.fa-map-location-dot:after,.fa-duotone.fa-map-marked-alt:after,.fad.fa-map-location-dot:after,.fad.fa-map-marked-alt:after{content:\"\\f5a0\\f5a0\"}.fa-duotone.fa-tilde:after,.fad.fa-tilde:after{content:\"\\7e\\7e\"}.fa-duotone.fa-jedi:after,.fad.fa-jedi:after{content:\"\\f669\\f669\"}.fa-duotone.fa-poll:after,.fa-duotone.fa-square-poll-vertical:after,.fad.fa-poll:after,.fad.fa-square-poll-vertical:after{content:\"\\f681\\f681\"}.fa-duotone.fa-arrow-down-square-triangle:after,.fa-duotone.fa-sort-shapes-down-alt:after,.fad.fa-arrow-down-square-triangle:after,.fad.fa-sort-shapes-down-alt:after{content:\"\\f889\\f889\"}.fa-duotone.fa-mug-hot:after,.fad.fa-mug-hot:after{content:\"\\f7b6\\f7b6\"}.fa-duotone.fa-dog-leashed:after,.fad.fa-dog-leashed:after{content:\"\\f6d4\\f6d4\"}.fa-duotone.fa-battery-car:after,.fa-duotone.fa-car-battery:after,.fad.fa-battery-car:after,.fad.fa-car-battery:after{content:\"\\f5df\\f5df\"}.fa-duotone.fa-face-downcast-sweat:after,.fad.fa-face-downcast-sweat:after{content:\"\\e371\\e371\"}.fa-duotone.fa-memo-circle-info:after,.fad.fa-memo-circle-info:after{content:\"\\e49a\\e49a\"}.fa-duotone.fa-gift:after,.fad.fa-gift:after{content:\"\\f06b\\f06b\"}.fa-duotone.fa-dice-two:after,.fad.fa-dice-two:after{content:\"\\f528\\f528\"}.fa-duotone.fa-volume-medium:after,.fa-duotone.fa-volume:after,.fad.fa-volume-medium:after,.fad.fa-volume:after{content:\"\\f6a8\\f6a8\"}.fa-duotone.fa-transporter-5:after,.fad.fa-transporter-5:after{content:\"\\e2a6\\e2a6\"}.fa-duotone.fa-gauge-circle-bolt:after,.fad.fa-gauge-circle-bolt:after{content:\"\\e496\\e496\"}.fa-duotone.fa-coin-front:after,.fad.fa-coin-front:after{content:\"\\e3fc\\e3fc\"}.fa-duotone.fa-file-slash:after,.fad.fa-file-slash:after{content:\"\\e3a7\\e3a7\"}.fa-duotone.fa-message-arrow-up-right:after,.fad.fa-message-arrow-up-right:after{content:\"\\e1dd\\e1dd\"}.fa-duotone.fa-treasure-chest:after,.fad.fa-treasure-chest:after{content:\"\\f723\\f723\"}.fa-duotone.fa-chess-queen:after,.fad.fa-chess-queen:after{content:\"\\f445\\f445\"}.fa-duotone.fa-paint-brush-alt:after,.fa-duotone.fa-paint-brush-fine:after,.fa-duotone.fa-paintbrush-alt:after,.fa-duotone.fa-paintbrush-fine:after,.fad.fa-paint-brush-alt:after,.fad.fa-paint-brush-fine:after,.fad.fa-paintbrush-alt:after,.fad.fa-paintbrush-fine:after{content:\"\\f5a9\\f5a9\"}.fa-duotone.fa-glasses:after,.fad.fa-glasses:after{content:\"\\f530\\f530\"}.fa-duotone.fa-hood-cloak:after,.fad.fa-hood-cloak:after{content:\"\\f6ef\\f6ef\"}.fa-duotone.fa-square-quote:after,.fad.fa-square-quote:after{content:\"\\e329\\e329\"}.fa-duotone.fa-up-left:after,.fad.fa-up-left:after{content:\"\\e2bd\\e2bd\"}.fa-duotone.fa-bring-front:after,.fad.fa-bring-front:after{content:\"\\f857\\f857\"}.fa-duotone.fa-chess-board:after,.fad.fa-chess-board:after{content:\"\\f43c\\f43c\"}.fa-duotone.fa-burger-cheese:after,.fa-duotone.fa-cheeseburger:after,.fad.fa-burger-cheese:after,.fad.fa-cheeseburger:after{content:\"\\f7f1\\f7f1\"}.fa-duotone.fa-building-circle-check:after,.fad.fa-building-circle-check:after{content:\"\\e4d2\\e4d2\"}.fa-duotone.fa-repeat-1:after,.fad.fa-repeat-1:after{content:\"\\f365\\f365\"}.fa-duotone.fa-arrow-down-to-line:after,.fa-duotone.fa-arrow-to-bottom:after,.fad.fa-arrow-down-to-line:after,.fad.fa-arrow-to-bottom:after{content:\"\\f33d\\f33d\"}.fa-duotone.fa-grid-5:after,.fad.fa-grid-5:after{content:\"\\e199\\e199\"}.fa-duotone.fa-right-long-to-line:after,.fad.fa-right-long-to-line:after{content:\"\\e444\\e444\"}.fa-duotone.fa-person-chalkboard:after,.fad.fa-person-chalkboard:after{content:\"\\e53d\\e53d\"}.fa-duotone.fa-mars-stroke-h:after,.fa-duotone.fa-mars-stroke-right:after,.fad.fa-mars-stroke-h:after,.fad.fa-mars-stroke-right:after{content:\"\\f22b\\f22b\"}.fa-duotone.fa-hand-back-fist:after,.fa-duotone.fa-hand-rock:after,.fad.fa-hand-back-fist:after,.fad.fa-hand-rock:after{content:\"\\f255\\f255\"}.fa-duotone.fa-tally-5:after,.fa-duotone.fa-tally:after,.fad.fa-tally-5:after,.fad.fa-tally:after{content:\"\\f69c\\f69c\"}.fa-duotone.fa-caret-square-up:after,.fa-duotone.fa-square-caret-up:after,.fad.fa-caret-square-up:after,.fad.fa-square-caret-up:after{content:\"\\f151\\f151\"}.fa-duotone.fa-cloud-showers-water:after,.fad.fa-cloud-showers-water:after{content:\"\\e4e4\\e4e4\"}.fa-duotone.fa-bar-chart:after,.fa-duotone.fa-chart-bar:after,.fad.fa-bar-chart:after,.fad.fa-chart-bar:after{content:\"\\f080\\f080\"}.fa-duotone.fa-hands-bubbles:after,.fa-duotone.fa-hands-wash:after,.fad.fa-hands-bubbles:after,.fad.fa-hands-wash:after{content:\"\\e05e\\e05e\"}.fa-duotone.fa-less-than-equal:after,.fad.fa-less-than-equal:after{content:\"\\f537\\f537\"}.fa-duotone.fa-train:after,.fad.fa-train:after{content:\"\\f238\\f238\"}.fa-duotone.fa-up-from-dotted-line:after,.fad.fa-up-from-dotted-line:after{content:\"\\e456\\e456\"}.fa-duotone.fa-eye-low-vision:after,.fa-duotone.fa-low-vision:after,.fad.fa-eye-low-vision:after,.fad.fa-low-vision:after{content:\"\\f2a8\\f2a8\"}.fa-duotone.fa-traffic-light-go:after,.fad.fa-traffic-light-go:after{content:\"\\f638\\f638\"}.fa-duotone.fa-face-exhaling:after,.fad.fa-face-exhaling:after{content:\"\\e480\\e480\"}.fa-duotone.fa-sensor-fire:after,.fad.fa-sensor-fire:after{content:\"\\e02a\\e02a\"}.fa-duotone.fa-user-unlock:after,.fad.fa-user-unlock:after{content:\"\\e058\\e058\"}.fa-duotone.fa-hexagon-divide:after,.fad.fa-hexagon-divide:after{content:\"\\e1ad\\e1ad\"}.fa-duotone.fa-00:after,.fad.fa-00:after{content:\"\\e467\\e467\"}.fa-duotone.fa-crow:after,.fad.fa-crow:after{content:\"\\f520\\f520\"}.fa-duotone.fa-betamax:after,.fa-duotone.fa-cassette-betamax:after,.fad.fa-betamax:after,.fad.fa-cassette-betamax:after{content:\"\\f8a4\\f8a4\"}.fa-duotone.fa-sailboat:after,.fad.fa-sailboat:after{content:\"\\e445\\e445\"}.fa-duotone.fa-window-restore:after,.fad.fa-window-restore:after{content:\"\\f2d2\\f2d2\"}.fa-duotone.fa-nfc-magnifying-glass:after,.fad.fa-nfc-magnifying-glass:after{content:\"\\e1f9\\e1f9\"}.fa-duotone.fa-file-binary:after,.fad.fa-file-binary:after{content:\"\\e175\\e175\"}.fa-duotone.fa-circle-v:after,.fad.fa-circle-v:after{content:\"\\e12a\\e12a\"}.fa-duotone.fa-plus-square:after,.fa-duotone.fa-square-plus:after,.fad.fa-plus-square:after,.fad.fa-square-plus:after{content:\"\\f0fe\\f0fe\"}.fa-duotone.fa-bowl-scoops:after,.fad.fa-bowl-scoops:after{content:\"\\e3df\\e3df\"}.fa-duotone.fa-mistletoe:after,.fad.fa-mistletoe:after{content:\"\\f7b4\\f7b4\"}.fa-duotone.fa-custard:after,.fad.fa-custard:after{content:\"\\e403\\e403\"}.fa-duotone.fa-lacrosse-stick:after,.fad.fa-lacrosse-stick:after{content:\"\\e3b5\\e3b5\"}.fa-duotone.fa-hockey-mask:after,.fad.fa-hockey-mask:after{content:\"\\f6ee\\f6ee\"}.fa-duotone.fa-sunrise:after,.fad.fa-sunrise:after{content:\"\\f766\\f766\"}.fa-duotone.fa-panel-ews:after,.fad.fa-panel-ews:after{content:\"\\e42e\\e42e\"}.fa-duotone.fa-torii-gate:after,.fad.fa-torii-gate:after{content:\"\\f6a1\\f6a1\"}.fa-duotone.fa-cloud-exclamation:after,.fad.fa-cloud-exclamation:after{content:\"\\e491\\e491\"}.fa-duotone.fa-comment-alt-lines:after,.fa-duotone.fa-message-lines:after,.fad.fa-comment-alt-lines:after,.fad.fa-message-lines:after{content:\"\\f4a6\\f4a6\"}.fa-duotone.fa-frog:after,.fad.fa-frog:after{content:\"\\f52e\\f52e\"}.fa-duotone.fa-bucket:after,.fad.fa-bucket:after{content:\"\\e4cf\\e4cf\"}.fa-duotone.fa-floppy-disk-pen:after,.fad.fa-floppy-disk-pen:after{content:\"\\e182\\e182\"}.fa-duotone.fa-image:after,.fad.fa-image:after{content:\"\\f03e\\f03e\"}.fa-duotone.fa-window-frame:after,.fad.fa-window-frame:after{content:\"\\e04f\\e04f\"}.fa-duotone.fa-microphone:after,.fad.fa-microphone:after{content:\"\\f130\\f130\"}.fa-duotone.fa-cow:after,.fad.fa-cow:after{content:\"\\f6c8\\f6c8\"}.fa-duotone.fa-square-ring:after,.fad.fa-square-ring:after{content:\"\\e44f\\e44f\"}.fa-duotone.fa-arrow-alt-from-top:after,.fa-duotone.fa-down-from-line:after,.fad.fa-arrow-alt-from-top:after,.fad.fa-down-from-line:after{content:\"\\f349\\f349\"}.fa-duotone.fa-caret-up:after,.fad.fa-caret-up:after{content:\"\\f0d8\\f0d8\"}.fa-duotone.fa-shield-times:after,.fa-duotone.fa-shield-xmark:after,.fad.fa-shield-times:after,.fad.fa-shield-xmark:after{content:\"\\e24c\\e24c\"}.fa-duotone.fa-screwdriver:after,.fad.fa-screwdriver:after{content:\"\\f54a\\f54a\"}.fa-duotone.fa-circle-sort-down:after,.fa-duotone.fa-sort-circle-down:after,.fad.fa-circle-sort-down:after,.fad.fa-sort-circle-down:after{content:\"\\e031\\e031\"}.fa-duotone.fa-folder-closed:after,.fad.fa-folder-closed:after{content:\"\\e185\\e185\"}.fa-duotone.fa-house-tsunami:after,.fad.fa-house-tsunami:after{content:\"\\e515\\e515\"}.fa-duotone.fa-square-nfi:after,.fad.fa-square-nfi:after{content:\"\\e576\\e576\"}.fa-duotone.fa-forklift:after,.fad.fa-forklift:after{content:\"\\f47a\\f47a\"}.fa-duotone.fa-arrow-up-from-ground-water:after,.fad.fa-arrow-up-from-ground-water:after{content:\"\\e4b5\\e4b5\"}.fa-duotone.fa-bracket-square-right:after,.fad.fa-bracket-square-right:after{content:\"\\5d\\5d\"}.fa-duotone.fa-glass-martini-alt:after,.fa-duotone.fa-martini-glass:after,.fad.fa-glass-martini-alt:after,.fad.fa-martini-glass:after{content:\"\\f57b\\f57b\"}.fa-duotone.fa-rotate-back:after,.fa-duotone.fa-rotate-backward:after,.fa-duotone.fa-rotate-left:after,.fa-duotone.fa-undo-alt:after,.fad.fa-rotate-back:after,.fad.fa-rotate-backward:after,.fad.fa-rotate-left:after,.fad.fa-undo-alt:after{content:\"\\f2ea\\f2ea\"}.fa-duotone.fa-columns:after,.fa-duotone.fa-table-columns:after,.fad.fa-columns:after,.fad.fa-table-columns:after{content:\"\\f0db\\f0db\"}.fa-duotone.fa-square-a:after,.fad.fa-square-a:after{content:\"\\e25f\\e25f\"}.fa-duotone.fa-tick:after,.fad.fa-tick:after{content:\"\\e32f\\e32f\"}.fa-duotone.fa-lemon:after,.fad.fa-lemon:after{content:\"\\f094\\f094\"}.fa-duotone.fa-head-side-mask:after,.fad.fa-head-side-mask:after{content:\"\\e063\\e063\"}.fa-duotone.fa-handshake:after,.fad.fa-handshake:after{content:\"\\f2b5\\f2b5\"}.fa-duotone.fa-gem:after,.fad.fa-gem:after{content:\"\\f3a5\\f3a5\"}.fa-duotone.fa-dolly-box:after,.fa-duotone.fa-dolly:after,.fad.fa-dolly-box:after,.fad.fa-dolly:after{content:\"\\f472\\f472\"}.fa-duotone.fa-smoking:after,.fad.fa-smoking:after{content:\"\\f48d\\f48d\"}.fa-duotone.fa-compress-arrows-alt:after,.fa-duotone.fa-minimize:after,.fad.fa-compress-arrows-alt:after,.fad.fa-minimize:after{content:\"\\f78c\\f78c\"}.fa-duotone.fa-refrigerator:after,.fad.fa-refrigerator:after{content:\"\\e026\\e026\"}.fa-duotone.fa-monument:after,.fad.fa-monument:after{content:\"\\f5a6\\f5a6\"}.fa-duotone.fa-octagon-xmark:after,.fa-duotone.fa-times-octagon:after,.fa-duotone.fa-xmark-octagon:after,.fad.fa-octagon-xmark:after,.fad.fa-times-octagon:after,.fad.fa-xmark-octagon:after{content:\"\\f2f0\\f2f0\"}.fa-duotone.fa-align-slash:after,.fad.fa-align-slash:after{content:\"\\f846\\f846\"}.fa-duotone.fa-snowplow:after,.fad.fa-snowplow:after{content:\"\\f7d2\\f7d2\"}.fa-duotone.fa-angle-double-right:after,.fa-duotone.fa-angles-right:after,.fad.fa-angle-double-right:after,.fad.fa-angles-right:after{content:\"\\f101\\f101\"}.fa-duotone.fa-truck-couch:after,.fa-duotone.fa-truck-ramp-couch:after,.fad.fa-truck-couch:after,.fad.fa-truck-ramp-couch:after{content:\"\\f4dd\\f4dd\"}.fa-duotone.fa-cannabis:after,.fad.fa-cannabis:after{content:\"\\f55f\\f55f\"}.fa-duotone.fa-circle-play:after,.fa-duotone.fa-play-circle:after,.fad.fa-circle-play:after,.fad.fa-play-circle:after{content:\"\\f144\\f144\"}.fa-duotone.fa-arrow-up-right-and-arrow-down-left-from-center:after,.fad.fa-arrow-up-right-and-arrow-down-left-from-center:after{content:\"\\e0a0\\e0a0\"}.fa-duotone.fa-tablets:after,.fad.fa-tablets:after{content:\"\\f490\\f490\"}.fa-duotone.fa-360-degrees:after,.fad.fa-360-degrees:after{content:\"\\e2dc\\e2dc\"}.fa-duotone.fa-ethernet:after,.fad.fa-ethernet:after{content:\"\\f796\\f796\"}.fa-duotone.fa-eur:after,.fa-duotone.fa-euro-sign:after,.fa-duotone.fa-euro:after,.fad.fa-eur:after,.fad.fa-euro-sign:after,.fad.fa-euro:after{content:\"\\f153\\f153\"}.fa-duotone.fa-chair:after,.fad.fa-chair:after{content:\"\\f6c0\\f6c0\"}.fa-duotone.fa-check-circle:after,.fa-duotone.fa-circle-check:after,.fad.fa-check-circle:after,.fad.fa-circle-check:after{content:\"\\f058\\f058\"}.fa-duotone.fa-money-simple-from-bracket:after,.fad.fa-money-simple-from-bracket:after{content:\"\\e313\\e313\"}.fa-duotone.fa-bat:after,.fad.fa-bat:after{content:\"\\f6b5\\f6b5\"}.fa-duotone.fa-circle-stop:after,.fa-duotone.fa-stop-circle:after,.fad.fa-circle-stop:after,.fad.fa-stop-circle:after{content:\"\\f28d\\f28d\"}.fa-duotone.fa-head-side-headphones:after,.fad.fa-head-side-headphones:after{content:\"\\f8c2\\f8c2\"}.fa-duotone.fa-phone-rotary:after,.fad.fa-phone-rotary:after{content:\"\\f8d3\\f8d3\"}.fa-duotone.fa-compass-drafting:after,.fa-duotone.fa-drafting-compass:after,.fad.fa-compass-drafting:after,.fad.fa-drafting-compass:after{content:\"\\f568\\f568\"}.fa-duotone.fa-plate-wheat:after,.fad.fa-plate-wheat:after{content:\"\\e55a\\e55a\"}.fa-duotone.fa-calendar-circle-minus:after,.fad.fa-calendar-circle-minus:after{content:\"\\e46f\\e46f\"}.fa-duotone.fa-chopsticks:after,.fad.fa-chopsticks:after{content:\"\\e3f7\\e3f7\"}.fa-duotone.fa-car-mechanic:after,.fa-duotone.fa-car-wrench:after,.fad.fa-car-mechanic:after,.fad.fa-car-wrench:after{content:\"\\f5e3\\f5e3\"}.fa-duotone.fa-icicles:after,.fad.fa-icicles:after{content:\"\\f7ad\\f7ad\"}.fa-duotone.fa-person-shelter:after,.fad.fa-person-shelter:after{content:\"\\e54f\\e54f\"}.fa-duotone.fa-neuter:after,.fad.fa-neuter:after{content:\"\\f22c\\f22c\"}.fa-duotone.fa-id-badge:after,.fad.fa-id-badge:after{content:\"\\f2c1\\f2c1\"}.fa-duotone.fa-kazoo:after,.fad.fa-kazoo:after{content:\"\\f8c7\\f8c7\"}.fa-duotone.fa-marker:after,.fad.fa-marker:after{content:\"\\f5a1\\f5a1\"}.fa-duotone.fa-face-laugh-beam:after,.fa-duotone.fa-laugh-beam:after,.fad.fa-face-laugh-beam:after,.fad.fa-laugh-beam:after{content:\"\\f59a\\f59a\"}.fa-duotone.fa-square-arrow-down-left:after,.fad.fa-square-arrow-down-left:after{content:\"\\e261\\e261\"}.fa-duotone.fa-battery-bolt:after,.fad.fa-battery-bolt:after{content:\"\\f376\\f376\"}.fa-duotone.fa-tree-large:after,.fad.fa-tree-large:after{content:\"\\f7dd\\f7dd\"}.fa-duotone.fa-helicopter-symbol:after,.fad.fa-helicopter-symbol:after{content:\"\\e502\\e502\"}.fa-duotone.fa-aperture:after,.fad.fa-aperture:after{content:\"\\e2df\\e2df\"}.fa-duotone.fa-universal-access:after,.fad.fa-universal-access:after{content:\"\\f29a\\f29a\"}.fa-duotone.fa-file-magnifying-glass:after,.fa-duotone.fa-file-search:after,.fad.fa-file-magnifying-glass:after,.fad.fa-file-search:after{content:\"\\f865\\f865\"}.fa-duotone.fa-up-right:after,.fad.fa-up-right:after{content:\"\\e2be\\e2be\"}.fa-duotone.fa-chevron-circle-up:after,.fa-duotone.fa-circle-chevron-up:after,.fad.fa-chevron-circle-up:after,.fad.fa-circle-chevron-up:after{content:\"\\f139\\f139\"}.fa-duotone.fa-user-police:after,.fad.fa-user-police:after{content:\"\\e333\\e333\"}.fa-duotone.fa-lari-sign:after,.fad.fa-lari-sign:after{content:\"\\e1c8\\e1c8\"}.fa-duotone.fa-volcano:after,.fad.fa-volcano:after{content:\"\\f770\\f770\"}.fa-duotone.fa-teddy-bear:after,.fad.fa-teddy-bear:after{content:\"\\e3cf\\e3cf\"}.fa-duotone.fa-stocking:after,.fad.fa-stocking:after{content:\"\\f7d5\\f7d5\"}.fa-duotone.fa-person-walking-dashed-line-arrow-right:after,.fad.fa-person-walking-dashed-line-arrow-right:after{content:\"\\e553\\e553\"}.fa-duotone.fa-image-slash:after,.fad.fa-image-slash:after{content:\"\\e1b7\\e1b7\"}.fa-duotone.fa-mask-snorkel:after,.fad.fa-mask-snorkel:after{content:\"\\e3b7\\e3b7\"}.fa-duotone.fa-smoke:after,.fad.fa-smoke:after{content:\"\\f760\\f760\"}.fa-duotone.fa-gbp:after,.fa-duotone.fa-pound-sign:after,.fa-duotone.fa-sterling-sign:after,.fad.fa-gbp:after,.fad.fa-pound-sign:after,.fad.fa-sterling-sign:after{content:\"\\f154\\f154\"}.fa-duotone.fa-battery-exclamation:after,.fad.fa-battery-exclamation:after{content:\"\\e0b0\\e0b0\"}.fa-duotone.fa-viruses:after,.fad.fa-viruses:after{content:\"\\e076\\e076\"}.fa-duotone.fa-square-person-confined:after,.fad.fa-square-person-confined:after{content:\"\\e577\\e577\"}.fa-duotone.fa-user-tie:after,.fad.fa-user-tie:after{content:\"\\f508\\f508\"}.fa-duotone.fa-arrow-down-long:after,.fa-duotone.fa-long-arrow-down:after,.fad.fa-arrow-down-long:after,.fad.fa-long-arrow-down:after{content:\"\\f175\\f175\"}.fa-duotone.fa-tent-arrow-down-to-line:after,.fad.fa-tent-arrow-down-to-line:after{content:\"\\e57e\\e57e\"}.fa-duotone.fa-certificate:after,.fad.fa-certificate:after{content:\"\\f0a3\\f0a3\"}.fa-duotone.fa-crystal-ball:after,.fad.fa-crystal-ball:after{content:\"\\e362\\e362\"}.fa-duotone.fa-mail-reply-all:after,.fa-duotone.fa-reply-all:after,.fad.fa-mail-reply-all:after,.fad.fa-reply-all:after{content:\"\\f122\\f122\"}.fa-duotone.fa-suitcase:after,.fad.fa-suitcase:after{content:\"\\f0f2\\f0f2\"}.fa-duotone.fa-person-skating:after,.fa-duotone.fa-skating:after,.fad.fa-person-skating:after,.fad.fa-skating:after{content:\"\\f7c5\\f7c5\"}.fa-duotone.fa-star-shooting:after,.fad.fa-star-shooting:after{content:\"\\e036\\e036\"}.fa-duotone.fa-binary-lock:after,.fad.fa-binary-lock:after{content:\"\\e33d\\e33d\"}.fa-duotone.fa-filter-circle-dollar:after,.fa-duotone.fa-funnel-dollar:after,.fad.fa-filter-circle-dollar:after,.fad.fa-funnel-dollar:after{content:\"\\f662\\f662\"}.fa-duotone.fa-camera-retro:after,.fad.fa-camera-retro:after{content:\"\\f083\\f083\"}.fa-duotone.fa-arrow-circle-down:after,.fa-duotone.fa-circle-arrow-down:after,.fad.fa-arrow-circle-down:after,.fad.fa-circle-arrow-down:after{content:\"\\f0ab\\f0ab\"}.fa-duotone.fa-comment-edit:after,.fa-duotone.fa-comment-pen:after,.fad.fa-comment-edit:after,.fad.fa-comment-pen:after{content:\"\\f4ae\\f4ae\"}.fa-duotone.fa-arrow-right-to-file:after,.fa-duotone.fa-file-import:after,.fad.fa-arrow-right-to-file:after,.fad.fa-file-import:after{content:\"\\f56f\\f56f\"}.fa-duotone.fa-banjo:after,.fad.fa-banjo:after{content:\"\\f8a3\\f8a3\"}.fa-duotone.fa-external-link-square:after,.fa-duotone.fa-square-arrow-up-right:after,.fad.fa-external-link-square:after,.fad.fa-square-arrow-up-right:after{content:\"\\f14c\\f14c\"}.fa-duotone.fa-light-emergency-on:after,.fad.fa-light-emergency-on:after{content:\"\\e420\\e420\"}.fa-duotone.fa-kerning:after,.fad.fa-kerning:after{content:\"\\f86f\\f86f\"}.fa-duotone.fa-box-open:after,.fad.fa-box-open:after{content:\"\\f49e\\f49e\"}.fa-duotone.fa-square-f:after,.fad.fa-square-f:after{content:\"\\e270\\e270\"}.fa-duotone.fa-scroll:after,.fad.fa-scroll:after{content:\"\\f70e\\f70e\"}.fa-duotone.fa-spa:after,.fad.fa-spa:after{content:\"\\f5bb\\f5bb\"}.fa-duotone.fa-arrow-from-right:after,.fa-duotone.fa-arrow-left-from-line:after,.fad.fa-arrow-from-right:after,.fad.fa-arrow-left-from-line:after{content:\"\\f344\\f344\"}.fa-duotone.fa-strawberry:after,.fad.fa-strawberry:after{content:\"\\e32b\\e32b\"}.fa-duotone.fa-location-pin-lock:after,.fad.fa-location-pin-lock:after{content:\"\\e51f\\e51f\"}.fa-duotone.fa-pause:after,.fad.fa-pause:after{content:\"\\f04c\\f04c\"}.fa-duotone.fa-clock-eight-thirty:after,.fad.fa-clock-eight-thirty:after{content:\"\\e346\\e346\"}.fa-duotone.fa-plane-alt:after,.fa-duotone.fa-plane-engines:after,.fad.fa-plane-alt:after,.fad.fa-plane-engines:after{content:\"\\f3de\\f3de\"}.fa-duotone.fa-hill-avalanche:after,.fad.fa-hill-avalanche:after{content:\"\\e507\\e507\"}.fa-duotone.fa-temperature-0:after,.fa-duotone.fa-temperature-empty:after,.fa-duotone.fa-thermometer-0:after,.fa-duotone.fa-thermometer-empty:after,.fad.fa-temperature-0:after,.fad.fa-temperature-empty:after,.fad.fa-thermometer-0:after,.fad.fa-thermometer-empty:after{content:\"\\f2cb\\f2cb\"}.fa-duotone.fa-bomb:after,.fad.fa-bomb:after{content:\"\\f1e2\\f1e2\"}.fa-duotone.fa-gauge-low:after,.fa-duotone.fa-tachometer-alt-slow:after,.fad.fa-gauge-low:after,.fad.fa-tachometer-alt-slow:after{content:\"\\f627\\f627\"}.fa-duotone.fa-registered:after,.fad.fa-registered:after{content:\"\\f25d\\f25d\"}.fa-duotone.fa-trash-can-plus:after,.fad.fa-trash-can-plus:after{content:\"\\e2ac\\e2ac\"}.fa-duotone.fa-address-card:after,.fa-duotone.fa-contact-card:after,.fa-duotone.fa-vcard:after,.fad.fa-address-card:after,.fad.fa-contact-card:after,.fad.fa-vcard:after{content:\"\\f2bb\\f2bb\"}.fa-duotone.fa-balance-scale-right:after,.fa-duotone.fa-scale-unbalanced-flip:after,.fad.fa-balance-scale-right:after,.fad.fa-scale-unbalanced-flip:after{content:\"\\f516\\f516\"}.fa-duotone.fa-globe-snow:after,.fad.fa-globe-snow:after{content:\"\\f7a3\\f7a3\"}.fa-duotone.fa-subscript:after,.fad.fa-subscript:after{content:\"\\f12c\\f12c\"}.fa-duotone.fa-diamond-turn-right:after,.fa-duotone.fa-directions:after,.fad.fa-diamond-turn-right:after,.fad.fa-directions:after{content:\"\\f5eb\\f5eb\"}.fa-duotone.fa-integral:after,.fad.fa-integral:after{content:\"\\f667\\f667\"}.fa-duotone.fa-burst:after,.fad.fa-burst:after{content:\"\\e4dc\\e4dc\"}.fa-duotone.fa-house-laptop:after,.fa-duotone.fa-laptop-house:after,.fad.fa-house-laptop:after,.fad.fa-laptop-house:after{content:\"\\e066\\e066\"}.fa-duotone.fa-face-tired:after,.fa-duotone.fa-tired:after,.fad.fa-face-tired:after,.fad.fa-tired:after{content:\"\\f5c8\\f5c8\"}.fa-duotone.fa-money-bills:after,.fad.fa-money-bills:after{content:\"\\e1f3\\e1f3\"}.fa-duotone.fa-blinds-raised:after,.fad.fa-blinds-raised:after{content:\"\\f8fd\\f8fd\"}.fa-duotone.fa-smog:after,.fad.fa-smog:after{content:\"\\f75f\\f75f\"}.fa-duotone.fa-ufo-beam:after,.fad.fa-ufo-beam:after{content:\"\\e048\\e048\"}.fa-duotone.fa-caret-circle-up:after,.fa-duotone.fa-circle-caret-up:after,.fad.fa-caret-circle-up:after,.fad.fa-circle-caret-up:after{content:\"\\f331\\f331\"}.fa-duotone.fa-user-vneck-hair-long:after,.fad.fa-user-vneck-hair-long:after{content:\"\\e463\\e463\"}.fa-duotone.fa-square-a-lock:after,.fad.fa-square-a-lock:after{content:\"\\e44d\\e44d\"}.fa-duotone.fa-crutch:after,.fad.fa-crutch:after{content:\"\\f7f7\\f7f7\"}.fa-duotone.fa-gas-pump-slash:after,.fad.fa-gas-pump-slash:after{content:\"\\f5f4\\f5f4\"}.fa-duotone.fa-cloud-arrow-up:after,.fa-duotone.fa-cloud-upload-alt:after,.fa-duotone.fa-cloud-upload:after,.fad.fa-cloud-arrow-up:after,.fad.fa-cloud-upload-alt:after,.fad.fa-cloud-upload:after{content:\"\\f0ee\\f0ee\"}.fa-duotone.fa-palette:after,.fad.fa-palette:after{content:\"\\f53f\\f53f\"}.fa-duotone.fa-transporter-4:after,.fad.fa-transporter-4:after{content:\"\\e2a5\\e2a5\"}.fa-duotone.fa-objects-align-right:after,.fad.fa-objects-align-right:after{content:\"\\e3bf\\e3bf\"}.fa-duotone.fa-arrows-turn-right:after,.fad.fa-arrows-turn-right:after{content:\"\\e4c0\\e4c0\"}.fa-duotone.fa-vest:after,.fad.fa-vest:after{content:\"\\e085\\e085\"}.fa-duotone.fa-pig:after,.fad.fa-pig:after{content:\"\\f706\\f706\"}.fa-duotone.fa-inbox-full:after,.fad.fa-inbox-full:after{content:\"\\e1ba\\e1ba\"}.fa-duotone.fa-circle-envelope:after,.fa-duotone.fa-envelope-circle:after,.fad.fa-circle-envelope:after,.fad.fa-envelope-circle:after{content:\"\\e10c\\e10c\"}.fa-duotone.fa-construction:after,.fa-duotone.fa-triangle-person-digging:after,.fad.fa-construction:after,.fad.fa-triangle-person-digging:after{content:\"\\f85d\\f85d\"}.fa-duotone.fa-ferry:after,.fad.fa-ferry:after{content:\"\\e4ea\\e4ea\"}.fa-duotone.fa-bullseye-arrow:after,.fad.fa-bullseye-arrow:after{content:\"\\f648\\f648\"}.fa-duotone.fa-arrows-down-to-people:after,.fad.fa-arrows-down-to-people:after{content:\"\\e4b9\\e4b9\"}.fa-duotone.fa-seedling:after,.fa-duotone.fa-sprout:after,.fad.fa-seedling:after,.fad.fa-sprout:after{content:\"\\f4d8\\f4d8\"}.fa-duotone.fa-clock-seven:after,.fad.fa-clock-seven:after{content:\"\\e350\\e350\"}.fa-duotone.fa-arrows-alt-h:after,.fa-duotone.fa-left-right:after,.fad.fa-arrows-alt-h:after,.fad.fa-left-right:after{content:\"\\f337\\f337\"}.fa-duotone.fa-boxes-packing:after,.fad.fa-boxes-packing:after{content:\"\\e4c7\\e4c7\"}.fa-duotone.fa-arrow-circle-left:after,.fa-duotone.fa-circle-arrow-left:after,.fad.fa-arrow-circle-left:after,.fad.fa-circle-arrow-left:after{content:\"\\f0a8\\f0a8\"}.fa-duotone.fa-flashlight:after,.fad.fa-flashlight:after{content:\"\\f8b8\\f8b8\"}.fa-duotone.fa-group-arrows-rotate:after,.fad.fa-group-arrows-rotate:after{content:\"\\e4f6\\e4f6\"}.fa-duotone.fa-bowl-food:after,.fad.fa-bowl-food:after{content:\"\\e4c6\\e4c6\"}.fa-duotone.fa-square-9:after,.fad.fa-square-9:after{content:\"\\e25e\\e25e\"}.fa-duotone.fa-candy-cane:after,.fad.fa-candy-cane:after{content:\"\\f786\\f786\"}.fa-duotone.fa-arrow-down-wide-short:after,.fa-duotone.fa-sort-amount-asc:after,.fa-duotone.fa-sort-amount-down:after,.fad.fa-arrow-down-wide-short:after,.fad.fa-sort-amount-asc:after,.fad.fa-sort-amount-down:after{content:\"\\f160\\f160\"}.fa-duotone.fa-dollar-square:after,.fa-duotone.fa-square-dollar:after,.fa-duotone.fa-usd-square:after,.fad.fa-dollar-square:after,.fad.fa-square-dollar:after,.fad.fa-usd-square:after{content:\"\\f2e9\\f2e9\"}.fa-duotone.fa-hand-holding-seedling:after,.fad.fa-hand-holding-seedling:after{content:\"\\f4bf\\f4bf\"}.fa-duotone.fa-comment-alt-check:after,.fa-duotone.fa-message-check:after,.fad.fa-comment-alt-check:after,.fad.fa-message-check:after{content:\"\\f4a2\\f4a2\"}.fa-duotone.fa-cloud-bolt:after,.fa-duotone.fa-thunderstorm:after,.fad.fa-cloud-bolt:after,.fad.fa-thunderstorm:after{content:\"\\f76c\\f76c\"}.fa-duotone.fa-remove-format:after,.fa-duotone.fa-text-slash:after,.fad.fa-remove-format:after,.fad.fa-text-slash:after{content:\"\\f87d\\f87d\"}.fa-duotone.fa-watch:after,.fad.fa-watch:after{content:\"\\f2e1\\f2e1\"}.fa-duotone.fa-circle-down-left:after,.fad.fa-circle-down-left:after{content:\"\\e107\\e107\"}.fa-duotone.fa-text:after,.fad.fa-text:after{content:\"\\f893\\f893\"}.fa-duotone.fa-projector:after,.fad.fa-projector:after{content:\"\\f8d6\\f8d6\"}.fa-duotone.fa-face-smile-wink:after,.fa-duotone.fa-smile-wink:after,.fad.fa-face-smile-wink:after,.fad.fa-smile-wink:after{content:\"\\f4da\\f4da\"}.fa-duotone.fa-tombstone-alt:after,.fa-duotone.fa-tombstone-blank:after,.fad.fa-tombstone-alt:after,.fad.fa-tombstone-blank:after{content:\"\\f721\\f721\"}.fa-duotone.fa-chess-king-alt:after,.fa-duotone.fa-chess-king-piece:after,.fad.fa-chess-king-alt:after,.fad.fa-chess-king-piece:after{content:\"\\f440\\f440\"}.fa-duotone.fa-circle-6:after,.fad.fa-circle-6:after{content:\"\\e0f3\\e0f3\"}.fa-duotone.fa-arrow-alt-left:after,.fa-duotone.fa-left:after,.fad.fa-arrow-alt-left:after,.fad.fa-left:after{content:\"\\f355\\f355\"}.fa-duotone.fa-file-word:after,.fad.fa-file-word:after{content:\"\\f1c2\\f1c2\"}.fa-duotone.fa-file-powerpoint:after,.fad.fa-file-powerpoint:after{content:\"\\f1c4\\f1c4\"}.fa-duotone.fa-arrow-alt-square-down:after,.fa-duotone.fa-square-down:after,.fad.fa-arrow-alt-square-down:after,.fad.fa-square-down:after{content:\"\\f350\\f350\"}.fa-duotone.fa-objects-align-center-vertical:after,.fad.fa-objects-align-center-vertical:after{content:\"\\e3bd\\e3bd\"}.fa-duotone.fa-arrows-h:after,.fa-duotone.fa-arrows-left-right:after,.fad.fa-arrows-h:after,.fad.fa-arrows-left-right:after{content:\"\\f07e\\f07e\"}.fa-duotone.fa-house-lock:after,.fad.fa-house-lock:after{content:\"\\e510\\e510\"}.fa-duotone.fa-cloud-arrow-down:after,.fa-duotone.fa-cloud-download-alt:after,.fa-duotone.fa-cloud-download:after,.fad.fa-cloud-arrow-down:after,.fad.fa-cloud-download-alt:after,.fad.fa-cloud-download:after{content:\"\\f0ed\\f0ed\"}.fa-duotone.fa-wreath:after,.fad.fa-wreath:after{content:\"\\f7e2\\f7e2\"}.fa-duotone.fa-children:after,.fad.fa-children:after{content:\"\\e4e1\\e4e1\"}.fa-duotone.fa-meter-droplet:after,.fad.fa-meter-droplet:after{content:\"\\e1ea\\e1ea\"}.fa-duotone.fa-blackboard:after,.fa-duotone.fa-chalkboard:after,.fad.fa-blackboard:after,.fad.fa-chalkboard:after{content:\"\\f51b\\f51b\"}.fa-duotone.fa-user-alt-slash:after,.fa-duotone.fa-user-large-slash:after,.fad.fa-user-alt-slash:after,.fad.fa-user-large-slash:after{content:\"\\f4fa\\f4fa\"}.fa-duotone.fa-signal-4:after,.fa-duotone.fa-signal-strong:after,.fad.fa-signal-4:after,.fad.fa-signal-strong:after{content:\"\\f68f\\f68f\"}.fa-duotone.fa-lollipop:after,.fa-duotone.fa-lollypop:after,.fad.fa-lollipop:after,.fad.fa-lollypop:after{content:\"\\e424\\e424\"}.fa-duotone.fa-list-tree:after,.fad.fa-list-tree:after{content:\"\\e1d2\\e1d2\"}.fa-duotone.fa-envelope-open:after,.fad.fa-envelope-open:after{content:\"\\f2b6\\f2b6\"}.fa-duotone.fa-draw-circle:after,.fad.fa-draw-circle:after{content:\"\\f5ed\\f5ed\"}.fa-duotone.fa-cat-space:after,.fad.fa-cat-space:after{content:\"\\e001\\e001\"}.fa-duotone.fa-handshake-alt-slash:after,.fa-duotone.fa-handshake-simple-slash:after,.fad.fa-handshake-alt-slash:after,.fad.fa-handshake-simple-slash:after{content:\"\\e05f\\e05f\"}.fa-duotone.fa-rabbit-fast:after,.fa-duotone.fa-rabbit-running:after,.fad.fa-rabbit-fast:after,.fad.fa-rabbit-running:after{content:\"\\f709\\f709\"}.fa-duotone.fa-memo-pad:after,.fad.fa-memo-pad:after{content:\"\\e1da\\e1da\"}.fa-duotone.fa-mattress-pillow:after,.fad.fa-mattress-pillow:after{content:\"\\e525\\e525\"}.fa-duotone.fa-alarm-plus:after,.fad.fa-alarm-plus:after{content:\"\\f844\\f844\"}.fa-duotone.fa-alicorn:after,.fad.fa-alicorn:after{content:\"\\f6b0\\f6b0\"}.fa-duotone.fa-comment-question:after,.fad.fa-comment-question:after{content:\"\\e14b\\e14b\"}.fa-duotone.fa-gingerbread-man:after,.fad.fa-gingerbread-man:after{content:\"\\f79d\\f79d\"}.fa-duotone.fa-guarani-sign:after,.fad.fa-guarani-sign:after{content:\"\\e19a\\e19a\"}.fa-duotone.fa-burger-fries:after,.fad.fa-burger-fries:after{content:\"\\e0cd\\e0cd\"}.fa-duotone.fa-mug-tea:after,.fad.fa-mug-tea:after{content:\"\\f875\\f875\"}.fa-duotone.fa-border-top:after,.fad.fa-border-top:after{content:\"\\f855\\f855\"}.fa-duotone.fa-arrows-rotate:after,.fa-duotone.fa-refresh:after,.fa-duotone.fa-sync:after,.fad.fa-arrows-rotate:after,.fad.fa-refresh:after,.fad.fa-sync:after{content:\"\\f021\\f021\"}.fa-duotone.fa-book-circle:after,.fa-duotone.fa-circle-book-open:after,.fad.fa-book-circle:after,.fad.fa-circle-book-open:after{content:\"\\e0ff\\e0ff\"}.fa-duotone.fa-arrows-to-dotted-line:after,.fad.fa-arrows-to-dotted-line:after{content:\"\\e0a6\\e0a6\"}.fa-duotone.fa-fire-extinguisher:after,.fad.fa-fire-extinguisher:after{content:\"\\f134\\f134\"}.fa-duotone.fa-garage-open:after,.fad.fa-garage-open:after{content:\"\\e00b\\e00b\"}.fa-duotone.fa-shelves-empty:after,.fad.fa-shelves-empty:after{content:\"\\e246\\e246\"}.fa-duotone.fa-cruzeiro-sign:after,.fad.fa-cruzeiro-sign:after{content:\"\\e152\\e152\"}.fa-duotone.fa-watch-apple:after,.fad.fa-watch-apple:after{content:\"\\e2cb\\e2cb\"}.fa-duotone.fa-watch-calculator:after,.fad.fa-watch-calculator:after{content:\"\\f8f0\\f8f0\"}.fa-duotone.fa-list-dropdown:after,.fad.fa-list-dropdown:after{content:\"\\e1cf\\e1cf\"}.fa-duotone.fa-cabinet-filing:after,.fad.fa-cabinet-filing:after{content:\"\\f64b\\f64b\"}.fa-duotone.fa-burger-soda:after,.fad.fa-burger-soda:after{content:\"\\f858\\f858\"}.fa-duotone.fa-arrow-square-up:after,.fa-duotone.fa-square-arrow-up:after,.fad.fa-arrow-square-up:after,.fad.fa-square-arrow-up:after{content:\"\\f33c\\f33c\"}.fa-duotone.fa-greater-than-equal:after,.fad.fa-greater-than-equal:after{content:\"\\f532\\f532\"}.fa-duotone.fa-pallet-box:after,.fad.fa-pallet-box:after{content:\"\\e208\\e208\"}.fa-duotone.fa-face-confounded:after,.fad.fa-face-confounded:after{content:\"\\e36c\\e36c\"}.fa-duotone.fa-shield-alt:after,.fa-duotone.fa-shield-halved:after,.fad.fa-shield-alt:after,.fad.fa-shield-halved:after{content:\"\\f3ed\\f3ed\"}.fa-duotone.fa-truck-plow:after,.fad.fa-truck-plow:after{content:\"\\f7de\\f7de\"}.fa-duotone.fa-atlas:after,.fa-duotone.fa-book-atlas:after,.fad.fa-atlas:after,.fad.fa-book-atlas:after{content:\"\\f558\\f558\"}.fa-duotone.fa-virus:after,.fad.fa-virus:after{content:\"\\e074\\e074\"}.fa-duotone.fa-comment-middle-top:after,.fad.fa-comment-middle-top:after{content:\"\\e14a\\e14a\"}.fa-duotone.fa-envelope-circle-check:after,.fad.fa-envelope-circle-check:after{content:\"\\e4e8\\e4e8\"}.fa-duotone.fa-layer-group:after,.fad.fa-layer-group:after{content:\"\\f5fd\\f5fd\"}.fa-duotone.fa-restroom-simple:after,.fad.fa-restroom-simple:after{content:\"\\e23a\\e23a\"}.fa-duotone.fa-arrows-to-dot:after,.fad.fa-arrows-to-dot:after{content:\"\\e4be\\e4be\"}.fa-duotone.fa-border-outer:after,.fad.fa-border-outer:after{content:\"\\f851\\f851\"}.fa-duotone.fa-hashtag-lock:after,.fad.fa-hashtag-lock:after{content:\"\\e415\\e415\"}.fa-duotone.fa-clock-two-thirty:after,.fad.fa-clock-two-thirty:after{content:\"\\e35b\\e35b\"}.fa-duotone.fa-archway:after,.fad.fa-archway:after{content:\"\\f557\\f557\"}.fa-duotone.fa-heart-circle-check:after,.fad.fa-heart-circle-check:after{content:\"\\e4fd\\e4fd\"}.fa-duotone.fa-house-chimney-crack:after,.fa-duotone.fa-house-damage:after,.fad.fa-house-chimney-crack:after,.fad.fa-house-damage:after{content:\"\\f6f1\\f6f1\"}.fa-duotone.fa-file-archive:after,.fa-duotone.fa-file-zipper:after,.fad.fa-file-archive:after,.fad.fa-file-zipper:after{content:\"\\f1c6\\f1c6\"}.fa-duotone.fa-heart-half:after,.fad.fa-heart-half:after{content:\"\\e1ab\\e1ab\"}.fa-duotone.fa-comment-check:after,.fad.fa-comment-check:after{content:\"\\f4ac\\f4ac\"}.fa-duotone.fa-square:after,.fad.fa-square:after{content:\"\\f0c8\\f0c8\"}.fa-duotone.fa-memo:after,.fad.fa-memo:after{content:\"\\e1d8\\e1d8\"}.fa-duotone.fa-glass-martini:after,.fa-duotone.fa-martini-glass-empty:after,.fad.fa-glass-martini:after,.fad.fa-martini-glass-empty:after{content:\"\\f000\\f000\"}.fa-duotone.fa-couch:after,.fad.fa-couch:after{content:\"\\f4b8\\f4b8\"}.fa-duotone.fa-cedi-sign:after,.fad.fa-cedi-sign:after{content:\"\\e0df\\e0df\"}.fa-duotone.fa-italic:after,.fad.fa-italic:after{content:\"\\f033\\f033\"}.fa-duotone.fa-glass-citrus:after,.fad.fa-glass-citrus:after{content:\"\\f869\\f869\"}.fa-duotone.fa-calendar-lines-pen:after,.fad.fa-calendar-lines-pen:after{content:\"\\e472\\e472\"}.fa-duotone.fa-church:after,.fad.fa-church:after{content:\"\\f51d\\f51d\"}.fa-duotone.fa-person-snowmobiling:after,.fa-duotone.fa-snowmobile:after,.fad.fa-person-snowmobiling:after,.fad.fa-snowmobile:after{content:\"\\f7d1\\f7d1\"}.fa-duotone.fa-face-hushed:after,.fad.fa-face-hushed:after{content:\"\\e37b\\e37b\"}.fa-duotone.fa-comments-dollar:after,.fad.fa-comments-dollar:after{content:\"\\f653\\f653\"}.fa-duotone.fa-link-simple-slash:after,.fad.fa-link-simple-slash:after{content:\"\\e1ce\\e1ce\"}.fa-duotone.fa-democrat:after,.fad.fa-democrat:after{content:\"\\f747\\f747\"}.fa-duotone.fa-face-confused:after,.fad.fa-face-confused:after{content:\"\\e36d\\e36d\"}.fa-duotone.fa-pinball:after,.fad.fa-pinball:after{content:\"\\e229\\e229\"}.fa-duotone.fa-z:after,.fad.fa-z:after{content:\"\\5a\\5a\"}.fa-duotone.fa-person-skiing:after,.fa-duotone.fa-skiing:after,.fad.fa-person-skiing:after,.fad.fa-skiing:after{content:\"\\f7c9\\f7c9\"}.fa-duotone.fa-deer:after,.fad.fa-deer:after{content:\"\\f78e\\f78e\"}.fa-duotone.fa-input-pipe:after,.fad.fa-input-pipe:after{content:\"\\e1be\\e1be\"}.fa-duotone.fa-road-lock:after,.fad.fa-road-lock:after{content:\"\\e567\\e567\"}.fa-duotone.fa-a:after,.fad.fa-a:after{content:\"\\41\\41\"}.fa-duotone.fa-bookmark-slash:after,.fad.fa-bookmark-slash:after{content:\"\\e0c2\\e0c2\"}.fa-duotone.fa-temperature-arrow-down:after,.fa-duotone.fa-temperature-down:after,.fad.fa-temperature-arrow-down:after,.fad.fa-temperature-down:after{content:\"\\e03f\\e03f\"}.fa-duotone.fa-mace:after,.fad.fa-mace:after{content:\"\\f6f8\\f6f8\"}.fa-duotone.fa-feather-alt:after,.fa-duotone.fa-feather-pointed:after,.fad.fa-feather-alt:after,.fad.fa-feather-pointed:after{content:\"\\f56b\\f56b\"}.fa-duotone.fa-sausage:after,.fad.fa-sausage:after{content:\"\\f820\\f820\"}.fa-duotone.fa-trash-can-clock:after,.fad.fa-trash-can-clock:after{content:\"\\e2aa\\e2aa\"}.fa-duotone.fa-p:after,.fad.fa-p:after{content:\"\\50\\50\"}.fa-duotone.fa-snowflake:after,.fad.fa-snowflake:after{content:\"\\f2dc\\f2dc\"}.fa-duotone.fa-stomach:after,.fad.fa-stomach:after{content:\"\\f623\\f623\"}.fa-duotone.fa-newspaper:after,.fad.fa-newspaper:after{content:\"\\f1ea\\f1ea\"}.fa-duotone.fa-ad:after,.fa-duotone.fa-rectangle-ad:after,.fad.fa-ad:after,.fad.fa-rectangle-ad:after{content:\"\\f641\\f641\"}.fa-duotone.fa-guitar-electric:after,.fad.fa-guitar-electric:after{content:\"\\f8be\\f8be\"}.fa-duotone.fa-arrow-turn-down-right:after,.fad.fa-arrow-turn-down-right:after{content:\"\\e3d6\\e3d6\"}.fa-duotone.fa-moon-cloud:after,.fad.fa-moon-cloud:after{content:\"\\f754\\f754\"}.fa-duotone.fa-bread-slice-butter:after,.fad.fa-bread-slice-butter:after{content:\"\\e3e1\\e3e1\"}.fa-duotone.fa-arrow-circle-right:after,.fa-duotone.fa-circle-arrow-right:after,.fad.fa-arrow-circle-right:after,.fad.fa-circle-arrow-right:after{content:\"\\f0a9\\f0a9\"}.fa-duotone.fa-user-group-crown:after,.fa-duotone.fa-users-crown:after,.fad.fa-user-group-crown:after,.fad.fa-users-crown:after{content:\"\\f6a5\\f6a5\"}.fa-duotone.fa-circle-i:after,.fad.fa-circle-i:after{content:\"\\e111\\e111\"}.fa-duotone.fa-toilet-paper-check:after,.fad.fa-toilet-paper-check:after{content:\"\\e5b2\\e5b2\"}.fa-duotone.fa-filter-circle-xmark:after,.fad.fa-filter-circle-xmark:after{content:\"\\e17b\\e17b\"}.fa-duotone.fa-locust:after,.fad.fa-locust:after{content:\"\\e520\\e520\"}.fa-duotone.fa-sort:after,.fa-duotone.fa-unsorted:after,.fad.fa-sort:after,.fad.fa-unsorted:after{content:\"\\f0dc\\f0dc\"}.fa-duotone.fa-list-1-2:after,.fa-duotone.fa-list-numeric:after,.fa-duotone.fa-list-ol:after,.fad.fa-list-1-2:after,.fad.fa-list-numeric:after,.fad.fa-list-ol:after{content:\"\\f0cb\\f0cb\"}.fa-duotone.fa-chart-waterfall:after,.fad.fa-chart-waterfall:after{content:\"\\e0eb\\e0eb\"}.fa-duotone.fa-face-party:after,.fad.fa-face-party:after{content:\"\\e383\\e383\"}.fa-duotone.fa-kidneys:after,.fad.fa-kidneys:after{content:\"\\f5fb\\f5fb\"}.fa-duotone.fa-wifi-exclamation:after,.fad.fa-wifi-exclamation:after{content:\"\\e2cf\\e2cf\"}.fa-duotone.fa-chart-network:after,.fad.fa-chart-network:after{content:\"\\f78a\\f78a\"}.fa-duotone.fa-person-dress-burst:after,.fad.fa-person-dress-burst:after{content:\"\\e544\\e544\"}.fa-duotone.fa-dice-d4:after,.fad.fa-dice-d4:after{content:\"\\f6d0\\f6d0\"}.fa-duotone.fa-money-check-alt:after,.fa-duotone.fa-money-check-dollar:after,.fad.fa-money-check-alt:after,.fad.fa-money-check-dollar:after{content:\"\\f53d\\f53d\"}.fa-duotone.fa-vector-square:after,.fad.fa-vector-square:after{content:\"\\f5cb\\f5cb\"}.fa-duotone.fa-bread-slice:after,.fad.fa-bread-slice:after{content:\"\\f7ec\\f7ec\"}.fa-duotone.fa-language:after,.fad.fa-language:after{content:\"\\f1ab\\f1ab\"}.fa-duotone.fa-wheat-awn-slash:after,.fad.fa-wheat-awn-slash:after{content:\"\\e338\\e338\"}.fa-duotone.fa-face-kiss-wink-heart:after,.fa-duotone.fa-kiss-wink-heart:after,.fad.fa-face-kiss-wink-heart:after,.fad.fa-kiss-wink-heart:after{content:\"\\f598\\f598\"}.fa-duotone.fa-dagger:after,.fad.fa-dagger:after{content:\"\\f6cb\\f6cb\"}.fa-duotone.fa-podium:after,.fad.fa-podium:after{content:\"\\f680\\f680\"}.fa-duotone.fa-memo-circle-check:after,.fad.fa-memo-circle-check:after{content:\"\\e1d9\\e1d9\"}.fa-duotone.fa-route-highway:after,.fad.fa-route-highway:after{content:\"\\f61a\\f61a\"}.fa-duotone.fa-arrow-alt-to-bottom:after,.fa-duotone.fa-down-to-line:after,.fad.fa-arrow-alt-to-bottom:after,.fad.fa-down-to-line:after{content:\"\\f34a\\f34a\"}.fa-duotone.fa-filter:after,.fad.fa-filter:after{content:\"\\f0b0\\f0b0\"}.fa-duotone.fa-square-g:after,.fad.fa-square-g:after{content:\"\\e271\\e271\"}.fa-duotone.fa-circle-phone:after,.fa-duotone.fa-phone-circle:after,.fad.fa-circle-phone:after,.fad.fa-phone-circle:after{content:\"\\e11b\\e11b\"}.fa-duotone.fa-clipboard-prescription:after,.fad.fa-clipboard-prescription:after{content:\"\\f5e8\\f5e8\"}.fa-duotone.fa-user-nurse-hair:after,.fad.fa-user-nurse-hair:after{content:\"\\e45d\\e45d\"}.fa-duotone.fa-question:after,.fad.fa-question:after{content:\"\\3f\\3f\"}.fa-duotone.fa-file-signature:after,.fad.fa-file-signature:after{content:\"\\f573\\f573\"}.fa-duotone.fa-toggle-large-on:after,.fad.fa-toggle-large-on:after{content:\"\\e5b1\\e5b1\"}.fa-duotone.fa-arrows-alt:after,.fa-duotone.fa-up-down-left-right:after,.fad.fa-arrows-alt:after,.fad.fa-up-down-left-right:after{content:\"\\f0b2\\f0b2\"}.fa-duotone.fa-dryer-alt:after,.fa-duotone.fa-dryer-heat:after,.fad.fa-dryer-alt:after,.fad.fa-dryer-heat:after{content:\"\\f862\\f862\"}.fa-duotone.fa-house-chimney-user:after,.fad.fa-house-chimney-user:after{content:\"\\e065\\e065\"}.fa-duotone.fa-hand-holding-heart:after,.fad.fa-hand-holding-heart:after{content:\"\\f4be\\f4be\"}.fa-duotone.fa-arrow-up-small-big:after,.fa-duotone.fa-sort-size-up-alt:after,.fad.fa-arrow-up-small-big:after,.fad.fa-sort-size-up-alt:after{content:\"\\f88f\\f88f\"}.fa-duotone.fa-train-track:after,.fad.fa-train-track:after{content:\"\\e453\\e453\"}.fa-duotone.fa-puzzle-piece:after,.fad.fa-puzzle-piece:after{content:\"\\f12e\\f12e\"}.fa-duotone.fa-money-check:after,.fad.fa-money-check:after{content:\"\\f53c\\f53c\"}.fa-duotone.fa-star-half-alt:after,.fa-duotone.fa-star-half-stroke:after,.fad.fa-star-half-alt:after,.fad.fa-star-half-stroke:after{content:\"\\f5c0\\f5c0\"}.fa-duotone.fa-file-exclamation:after,.fad.fa-file-exclamation:after{content:\"\\f31a\\f31a\"}.fa-duotone.fa-code:after,.fad.fa-code:after{content:\"\\f121\\f121\"}.fa-duotone.fa-glass-whiskey:after,.fa-duotone.fa-whiskey-glass:after,.fad.fa-glass-whiskey:after,.fad.fa-whiskey-glass:after{content:\"\\f7a0\\f7a0\"}.fa-duotone.fa-moon-stars:after,.fad.fa-moon-stars:after{content:\"\\f755\\f755\"}.fa-duotone.fa-building-circle-exclamation:after,.fad.fa-building-circle-exclamation:after{content:\"\\e4d3\\e4d3\"}.fa-duotone.fa-clothes-hanger:after,.fad.fa-clothes-hanger:after{content:\"\\e136\\e136\"}.fa-duotone.fa-mobile-iphone:after,.fa-duotone.fa-mobile-notch:after,.fad.fa-mobile-iphone:after,.fad.fa-mobile-notch:after{content:\"\\e1ee\\e1ee\"}.fa-duotone.fa-magnifying-glass-chart:after,.fad.fa-magnifying-glass-chart:after{content:\"\\e522\\e522\"}.fa-duotone.fa-arrow-up-right-from-square:after,.fa-duotone.fa-external-link:after,.fad.fa-arrow-up-right-from-square:after,.fad.fa-external-link:after{content:\"\\f08e\\f08e\"}.fa-duotone.fa-cubes-stacked:after,.fad.fa-cubes-stacked:after{content:\"\\e4e6\\e4e6\"}.fa-duotone.fa-images-user:after,.fad.fa-images-user:after{content:\"\\e1b9\\e1b9\"}.fa-duotone.fa-krw:after,.fa-duotone.fa-won-sign:after,.fa-duotone.fa-won:after,.fad.fa-krw:after,.fad.fa-won-sign:after,.fad.fa-won:after{content:\"\\f159\\f159\"}.fa-duotone.fa-image-polaroid-user:after,.fad.fa-image-polaroid-user:after{content:\"\\e1b6\\e1b6\"}.fa-duotone.fa-virus-covid:after,.fad.fa-virus-covid:after{content:\"\\e4a8\\e4a8\"}.fa-duotone.fa-square-ellipsis:after,.fad.fa-square-ellipsis:after{content:\"\\e26e\\e26e\"}.fa-duotone.fa-pie:after,.fad.fa-pie:after{content:\"\\f705\\f705\"}.fa-duotone.fa-chess-knight-alt:after,.fa-duotone.fa-chess-knight-piece:after,.fad.fa-chess-knight-alt:after,.fad.fa-chess-knight-piece:after{content:\"\\f442\\f442\"}.fa-duotone.fa-austral-sign:after,.fad.fa-austral-sign:after{content:\"\\e0a9\\e0a9\"}.fa-duotone.fa-cloud-plus:after,.fad.fa-cloud-plus:after{content:\"\\e35e\\e35e\"}.fa-duotone.fa-f:after,.fad.fa-f:after{content:\"\\46\\46\"}.fa-duotone.fa-leaf:after,.fad.fa-leaf:after{content:\"\\f06c\\f06c\"}.fa-duotone.fa-bed-bunk:after,.fad.fa-bed-bunk:after{content:\"\\f8f8\\f8f8\"}.fa-duotone.fa-road:after,.fad.fa-road:after{content:\"\\f018\\f018\"}.fa-duotone.fa-cab:after,.fa-duotone.fa-taxi:after,.fad.fa-cab:after,.fad.fa-taxi:after{content:\"\\f1ba\\f1ba\"}.fa-duotone.fa-person-circle-plus:after,.fad.fa-person-circle-plus:after{content:\"\\e541\\e541\"}.fa-duotone.fa-chart-pie:after,.fa-duotone.fa-pie-chart:after,.fad.fa-chart-pie:after,.fad.fa-pie-chart:after{content:\"\\f200\\f200\"}.fa-duotone.fa-bolt-lightning:after,.fad.fa-bolt-lightning:after{content:\"\\e0b7\\e0b7\"}.fa-duotone.fa-clock-eight:after,.fad.fa-clock-eight:after{content:\"\\e345\\e345\"}.fa-duotone.fa-sack-xmark:after,.fad.fa-sack-xmark:after{content:\"\\e56a\\e56a\"}.fa-duotone.fa-file-excel:after,.fad.fa-file-excel:after{content:\"\\f1c3\\f1c3\"}.fa-duotone.fa-file-contract:after,.fad.fa-file-contract:after{content:\"\\f56c\\f56c\"}.fa-duotone.fa-fish-fins:after,.fad.fa-fish-fins:after{content:\"\\e4f2\\e4f2\"}.fa-duotone.fa-circle-q:after,.fad.fa-circle-q:after{content:\"\\e11e\\e11e\"}.fa-duotone.fa-building-flag:after,.fad.fa-building-flag:after{content:\"\\e4d5\\e4d5\"}.fa-duotone.fa-face-grin-beam:after,.fa-duotone.fa-grin-beam:after,.fad.fa-face-grin-beam:after,.fad.fa-grin-beam:after{content:\"\\f582\\f582\"}.fa-duotone.fa-object-ungroup:after,.fad.fa-object-ungroup:after{content:\"\\f248\\f248\"}.fa-duotone.fa-face-disguise:after,.fad.fa-face-disguise:after{content:\"\\e370\\e370\"}.fa-duotone.fa-circle-arrow-down-right:after,.fad.fa-circle-arrow-down-right:after{content:\"\\e0fa\\e0fa\"}.fa-duotone.fa-alien-8bit:after,.fa-duotone.fa-alien-monster:after,.fad.fa-alien-8bit:after,.fad.fa-alien-monster:after{content:\"\\f8f6\\f8f6\"}.fa-duotone.fa-hand-point-ribbon:after,.fad.fa-hand-point-ribbon:after{content:\"\\e1a6\\e1a6\"}.fa-duotone.fa-poop:after,.fad.fa-poop:after{content:\"\\f619\\f619\"}.fa-duotone.fa-object-exclude:after,.fad.fa-object-exclude:after{content:\"\\e49c\\e49c\"}.fa-duotone.fa-telescope:after,.fad.fa-telescope:after{content:\"\\e03e\\e03e\"}.fa-duotone.fa-location-pin:after,.fa-duotone.fa-map-marker:after,.fad.fa-location-pin:after,.fad.fa-map-marker:after{content:\"\\f041\\f041\"}.fa-duotone.fa-square-list:after,.fad.fa-square-list:after{content:\"\\e489\\e489\"}.fa-duotone.fa-kaaba:after,.fad.fa-kaaba:after{content:\"\\f66b\\f66b\"}.fa-duotone.fa-toilet-paper:after,.fad.fa-toilet-paper:after{content:\"\\f71e\\f71e\"}.fa-duotone.fa-hard-hat:after,.fa-duotone.fa-hat-hard:after,.fa-duotone.fa-helmet-safety:after,.fad.fa-hard-hat:after,.fad.fa-hat-hard:after,.fad.fa-helmet-safety:after{content:\"\\f807\\f807\"}.fa-duotone.fa-comment-code:after,.fad.fa-comment-code:after{content:\"\\e147\\e147\"}.fa-duotone.fa-sim-cards:after,.fad.fa-sim-cards:after{content:\"\\e251\\e251\"}.fa-duotone.fa-starship:after,.fad.fa-starship:after{content:\"\\e039\\e039\"}.fa-duotone.fa-eject:after,.fad.fa-eject:after{content:\"\\f052\\f052\"}.fa-duotone.fa-arrow-alt-circle-right:after,.fa-duotone.fa-circle-right:after,.fad.fa-arrow-alt-circle-right:after,.fad.fa-circle-right:after{content:\"\\f35a\\f35a\"}.fa-duotone.fa-plane-circle-check:after,.fad.fa-plane-circle-check:after{content:\"\\e555\\e555\"}.fa-duotone.fa-seal:after,.fad.fa-seal:after{content:\"\\e241\\e241\"}.fa-duotone.fa-user-cowboy:after,.fad.fa-user-cowboy:after{content:\"\\f8ea\\f8ea\"}.fa-duotone.fa-hexagon-vertical-nft:after,.fad.fa-hexagon-vertical-nft:after{content:\"\\e505\\e505\"}.fa-duotone.fa-face-rolling-eyes:after,.fa-duotone.fa-meh-rolling-eyes:after,.fad.fa-face-rolling-eyes:after,.fad.fa-meh-rolling-eyes:after{content:\"\\f5a5\\f5a5\"}.fa-duotone.fa-bread-loaf:after,.fad.fa-bread-loaf:after{content:\"\\f7eb\\f7eb\"}.fa-duotone.fa-rings-wedding:after,.fad.fa-rings-wedding:after{content:\"\\f81b\\f81b\"}.fa-duotone.fa-object-group:after,.fad.fa-object-group:after{content:\"\\f247\\f247\"}.fa-duotone.fa-french-fries:after,.fad.fa-french-fries:after{content:\"\\f803\\f803\"}.fa-duotone.fa-chart-line:after,.fa-duotone.fa-line-chart:after,.fad.fa-chart-line:after,.fad.fa-line-chart:after{content:\"\\f201\\f201\"}.fa-duotone.fa-calendar-arrow-down:after,.fa-duotone.fa-calendar-download:after,.fad.fa-calendar-arrow-down:after,.fad.fa-calendar-download:after{content:\"\\e0d0\\e0d0\"}.fa-duotone.fa-send-back:after,.fad.fa-send-back:after{content:\"\\f87e\\f87e\"}.fa-duotone.fa-mask-ventilator:after,.fad.fa-mask-ventilator:after{content:\"\\e524\\e524\"}.fa-duotone.fa-signature-lock:after,.fad.fa-signature-lock:after{content:\"\\e3ca\\e3ca\"}.fa-duotone.fa-arrow-right:after,.fad.fa-arrow-right:after{content:\"\\f061\\f061\"}.fa-duotone.fa-map-signs:after,.fa-duotone.fa-signs-post:after,.fad.fa-map-signs:after,.fad.fa-signs-post:after{content:\"\\f277\\f277\"}.fa-duotone.fa-octagon-plus:after,.fa-duotone.fa-plus-octagon:after,.fad.fa-octagon-plus:after,.fad.fa-plus-octagon:after{content:\"\\f301\\f301\"}.fa-duotone.fa-cash-register:after,.fad.fa-cash-register:after{content:\"\\f788\\f788\"}.fa-duotone.fa-person-circle-question:after,.fad.fa-person-circle-question:after{content:\"\\e542\\e542\"}.fa-duotone.fa-melon-slice:after,.fad.fa-melon-slice:after{content:\"\\e311\\e311\"}.fa-duotone.fa-space-station-moon:after,.fad.fa-space-station-moon:after{content:\"\\e033\\e033\"}.fa-duotone.fa-comment-alt-smile:after,.fa-duotone.fa-message-smile:after,.fad.fa-comment-alt-smile:after,.fad.fa-message-smile:after{content:\"\\f4aa\\f4aa\"}.fa-duotone.fa-cup-straw:after,.fad.fa-cup-straw:after{content:\"\\e363\\e363\"}.fa-duotone.fa-arrow-alt-from-right:after,.fa-duotone.fa-left-from-line:after,.fad.fa-arrow-alt-from-right:after,.fad.fa-left-from-line:after{content:\"\\f348\\f348\"}.fa-duotone.fa-h:after,.fad.fa-h:after{content:\"\\48\\48\"}.fa-duotone.fa-basket-shopping-simple:after,.fa-duotone.fa-shopping-basket-alt:after,.fad.fa-basket-shopping-simple:after,.fad.fa-shopping-basket-alt:after{content:\"\\e0af\\e0af\"}.fa-duotone.fa-hands-heart:after,.fa-duotone.fa-hands-holding-heart:after,.fad.fa-hands-heart:after,.fad.fa-hands-holding-heart:after{content:\"\\f4c3\\f4c3\"}.fa-duotone.fa-clock-nine:after,.fad.fa-clock-nine:after{content:\"\\e34c\\e34c\"}.fa-duotone.fa-tarp:after,.fad.fa-tarp:after{content:\"\\e57b\\e57b\"}.fa-duotone.fa-face-sleepy:after,.fad.fa-face-sleepy:after{content:\"\\e38e\\e38e\"}.fa-duotone.fa-hand-horns:after,.fad.fa-hand-horns:after{content:\"\\e1a9\\e1a9\"}.fa-duotone.fa-screwdriver-wrench:after,.fa-duotone.fa-tools:after,.fad.fa-screwdriver-wrench:after,.fad.fa-tools:after{content:\"\\f7d9\\f7d9\"}.fa-duotone.fa-arrows-to-eye:after,.fad.fa-arrows-to-eye:after{content:\"\\e4bf\\e4bf\"}.fa-duotone.fa-circle-three-quarters:after,.fad.fa-circle-three-quarters:after{content:\"\\e125\\e125\"}.fa-duotone.fa-trophy-alt:after,.fa-duotone.fa-trophy-star:after,.fad.fa-trophy-alt:after,.fad.fa-trophy-star:after{content:\"\\f2eb\\f2eb\"}.fa-duotone.fa-plug-circle-bolt:after,.fad.fa-plug-circle-bolt:after{content:\"\\e55b\\e55b\"}.fa-duotone.fa-face-thermometer:after,.fad.fa-face-thermometer:after{content:\"\\e39a\\e39a\"}.fa-duotone.fa-shirt-running:after,.fad.fa-shirt-running:after{content:\"\\e3c8\\e3c8\"}.fa-duotone.fa-book-circle-arrow-up:after,.fad.fa-book-circle-arrow-up:after{content:\"\\e0bd\\e0bd\"}.fa-duotone.fa-face-nauseated:after,.fad.fa-face-nauseated:after{content:\"\\e381\\e381\"}.fa-duotone.fa-heart:after,.fad.fa-heart:after{content:\"\\f004\\f004\"}.fa-duotone.fa-file-chart-pie:after,.fad.fa-file-chart-pie:after{content:\"\\f65a\\f65a\"}.fa-duotone.fa-mars-and-venus:after,.fad.fa-mars-and-venus:after{content:\"\\f224\\f224\"}.fa-duotone.fa-home-user:after,.fa-duotone.fa-house-user:after,.fad.fa-home-user:after,.fad.fa-house-user:after{content:\"\\e1b0\\e1b0\"}.fa-duotone.fa-circle-arrow-down-left:after,.fad.fa-circle-arrow-down-left:after{content:\"\\e0f9\\e0f9\"}.fa-duotone.fa-dumpster-fire:after,.fad.fa-dumpster-fire:after{content:\"\\f794\\f794\"}.fa-duotone.fa-hexagon-minus:after,.fa-duotone.fa-minus-hexagon:after,.fad.fa-hexagon-minus:after,.fad.fa-minus-hexagon:after{content:\"\\f307\\f307\"}.fa-duotone.fa-arrow-alt-to-left:after,.fa-duotone.fa-left-to-line:after,.fad.fa-arrow-alt-to-left:after,.fad.fa-left-to-line:after{content:\"\\f34b\\f34b\"}.fa-duotone.fa-house-crack:after,.fad.fa-house-crack:after{content:\"\\e3b1\\e3b1\"}.fa-duotone.fa-paw-alt:after,.fa-duotone.fa-paw-simple:after,.fad.fa-paw-alt:after,.fad.fa-paw-simple:after{content:\"\\f701\\f701\"}.fa-duotone.fa-arrow-left-long-to-line:after,.fad.fa-arrow-left-long-to-line:after{content:\"\\e3d4\\e3d4\"}.fa-duotone.fa-brackets-round:after,.fa-duotone.fa-parentheses:after,.fad.fa-brackets-round:after,.fad.fa-parentheses:after{content:\"\\e0c5\\e0c5\"}.fa-duotone.fa-cocktail:after,.fa-duotone.fa-martini-glass-citrus:after,.fad.fa-cocktail:after,.fad.fa-martini-glass-citrus:after{content:\"\\f561\\f561\"}.fa-duotone.fa-user-shakespeare:after,.fad.fa-user-shakespeare:after{content:\"\\e2c2\\e2c2\"}.fa-duotone.fa-arrow-right-to-arc:after,.fad.fa-arrow-right-to-arc:after{content:\"\\e4b2\\e4b2\"}.fa-duotone.fa-face-surprise:after,.fa-duotone.fa-surprise:after,.fad.fa-face-surprise:after,.fad.fa-surprise:after{content:\"\\f5c2\\f5c2\"}.fa-duotone.fa-bottle-water:after,.fad.fa-bottle-water:after{content:\"\\e4c5\\e4c5\"}.fa-duotone.fa-circle-pause:after,.fa-duotone.fa-pause-circle:after,.fad.fa-circle-pause:after,.fad.fa-pause-circle:after{content:\"\\f28b\\f28b\"}.fa-duotone.fa-gauge-circle-plus:after,.fad.fa-gauge-circle-plus:after{content:\"\\e498\\e498\"}.fa-duotone.fa-folders:after,.fad.fa-folders:after{content:\"\\f660\\f660\"}.fa-duotone.fa-angel:after,.fad.fa-angel:after{content:\"\\f779\\f779\"}.fa-duotone.fa-value-absolute:after,.fad.fa-value-absolute:after{content:\"\\f6a6\\f6a6\"}.fa-duotone.fa-rabbit:after,.fad.fa-rabbit:after{content:\"\\f708\\f708\"}.fa-duotone.fa-toilet-paper-slash:after,.fad.fa-toilet-paper-slash:after{content:\"\\e072\\e072\"}.fa-duotone.fa-apple-alt:after,.fa-duotone.fa-apple-whole:after,.fad.fa-apple-alt:after,.fad.fa-apple-whole:after{content:\"\\f5d1\\f5d1\"}.fa-duotone.fa-kitchen-set:after,.fad.fa-kitchen-set:after{content:\"\\e51a\\e51a\"}.fa-duotone.fa-lock-alt:after,.fa-duotone.fa-lock-keyhole:after,.fad.fa-lock-alt:after,.fad.fa-lock-keyhole:after{content:\"\\f30d\\f30d\"}.fa-duotone.fa-r:after,.fad.fa-r:after{content:\"\\52\\52\"}.fa-duotone.fa-temperature-1:after,.fa-duotone.fa-temperature-quarter:after,.fa-duotone.fa-thermometer-1:after,.fa-duotone.fa-thermometer-quarter:after,.fad.fa-temperature-1:after,.fad.fa-temperature-quarter:after,.fad.fa-thermometer-1:after,.fad.fa-thermometer-quarter:after{content:\"\\f2ca\\f2ca\"}.fa-duotone.fa-info-square:after,.fa-duotone.fa-square-info:after,.fad.fa-info-square:after,.fad.fa-square-info:after{content:\"\\f30f\\f30f\"}.fa-duotone.fa-wifi-slash:after,.fad.fa-wifi-slash:after{content:\"\\f6ac\\f6ac\"}.fa-duotone.fa-toilet-paper-xmark:after,.fad.fa-toilet-paper-xmark:after{content:\"\\e5b3\\e5b3\"}.fa-duotone.fa-hands-holding-dollar:after,.fa-duotone.fa-hands-usd:after,.fad.fa-hands-holding-dollar:after,.fad.fa-hands-usd:after{content:\"\\f4c5\\f4c5\"}.fa-duotone.fa-cube:after,.fad.fa-cube:after{content:\"\\f1b2\\f1b2\"}.fa-duotone.fa-arrow-down-triangle-square:after,.fa-duotone.fa-sort-shapes-down:after,.fad.fa-arrow-down-triangle-square:after,.fad.fa-sort-shapes-down:after{content:\"\\f888\\f888\"}.fa-duotone.fa-bitcoin-sign:after,.fad.fa-bitcoin-sign:after{content:\"\\e0b4\\e0b4\"}.fa-duotone.fa-shutters:after,.fad.fa-shutters:after{content:\"\\e449\\e449\"}.fa-duotone.fa-shield-dog:after,.fad.fa-shield-dog:after{content:\"\\e573\\e573\"}.fa-duotone.fa-solar-panel:after,.fad.fa-solar-panel:after{content:\"\\f5ba\\f5ba\"}.fa-duotone.fa-lock-open:after,.fad.fa-lock-open:after{content:\"\\f3c1\\f3c1\"}.fa-duotone.fa-table-tree:after,.fad.fa-table-tree:after{content:\"\\e293\\e293\"}.fa-duotone.fa-house-chimney-heart:after,.fad.fa-house-chimney-heart:after{content:\"\\e1b2\\e1b2\"}.fa-duotone.fa-tally-3:after,.fad.fa-tally-3:after{content:\"\\e296\\e296\"}.fa-duotone.fa-elevator:after,.fad.fa-elevator:after{content:\"\\e16d\\e16d\"}.fa-duotone.fa-money-bill-transfer:after,.fad.fa-money-bill-transfer:after{content:\"\\e528\\e528\"}.fa-duotone.fa-money-bill-trend-up:after,.fad.fa-money-bill-trend-up:after{content:\"\\e529\\e529\"}.fa-duotone.fa-house-flood-water-circle-arrow-right:after,.fad.fa-house-flood-water-circle-arrow-right:after{content:\"\\e50f\\e50f\"}.fa-duotone.fa-poll-h:after,.fa-duotone.fa-square-poll-horizontal:after,.fad.fa-poll-h:after,.fad.fa-square-poll-horizontal:after{content:\"\\f682\\f682\"}.fa-duotone.fa-circle:after,.fad.fa-circle:after{content:\"\\f111\\f111\"}.fa-duotone.fa-cart-circle-exclamation:after,.fad.fa-cart-circle-exclamation:after{content:\"\\e3f2\\e3f2\"}.fa-duotone.fa-sword:after,.fad.fa-sword:after{content:\"\\f71c\\f71c\"}.fa-duotone.fa-backward-fast:after,.fa-duotone.fa-fast-backward:after,.fad.fa-backward-fast:after,.fad.fa-fast-backward:after{content:\"\\f049\\f049\"}.fa-duotone.fa-recycle:after,.fad.fa-recycle:after{content:\"\\f1b8\\f1b8\"}.fa-duotone.fa-user-astronaut:after,.fad.fa-user-astronaut:after{content:\"\\f4fb\\f4fb\"}.fa-duotone.fa-plane-slash:after,.fad.fa-plane-slash:after{content:\"\\e069\\e069\"}.fa-duotone.fa-circle-dashed:after,.fad.fa-circle-dashed:after{content:\"\\e105\\e105\"}.fa-duotone.fa-trademark:after,.fad.fa-trademark:after{content:\"\\f25c\\f25c\"}.fa-duotone.fa-basketball-ball:after,.fa-duotone.fa-basketball:after,.fad.fa-basketball-ball:after,.fad.fa-basketball:after{content:\"\\f434\\f434\"}.fa-duotone.fa-fork-knife:after,.fa-duotone.fa-utensils-alt:after,.fad.fa-fork-knife:after,.fad.fa-utensils-alt:after{content:\"\\f2e6\\f2e6\"}.fa-duotone.fa-satellite-dish:after,.fad.fa-satellite-dish:after{content:\"\\f7c0\\f7c0\"}.fa-duotone.fa-badge-check:after,.fad.fa-badge-check:after{content:\"\\f336\\f336\"}.fa-duotone.fa-arrow-alt-circle-up:after,.fa-duotone.fa-circle-up:after,.fad.fa-arrow-alt-circle-up:after,.fad.fa-circle-up:after{content:\"\\f35b\\f35b\"}.fa-duotone.fa-slider:after,.fad.fa-slider:after{content:\"\\e252\\e252\"}.fa-duotone.fa-mobile-alt:after,.fa-duotone.fa-mobile-screen-button:after,.fad.fa-mobile-alt:after,.fad.fa-mobile-screen-button:after{content:\"\\f3cd\\f3cd\"}.fa-duotone.fa-clock-one-thirty:after,.fad.fa-clock-one-thirty:after{content:\"\\e34f\\e34f\"}.fa-duotone.fa-inbox-arrow-up:after,.fa-duotone.fa-inbox-out:after,.fad.fa-inbox-arrow-up:after,.fad.fa-inbox-out:after{content:\"\\f311\\f311\"}.fa-duotone.fa-cloud-slash:after,.fad.fa-cloud-slash:after{content:\"\\e137\\e137\"}.fa-duotone.fa-volume-high:after,.fa-duotone.fa-volume-up:after,.fad.fa-volume-high:after,.fad.fa-volume-up:after{content:\"\\f028\\f028\"}.fa-duotone.fa-users-rays:after,.fad.fa-users-rays:after{content:\"\\e593\\e593\"}.fa-duotone.fa-wallet:after,.fad.fa-wallet:after{content:\"\\f555\\f555\"}.fa-duotone.fa-octagon-check:after,.fad.fa-octagon-check:after{content:\"\\e426\\e426\"}.fa-duotone.fa-flatbread-stuffed:after,.fad.fa-flatbread-stuffed:after{content:\"\\e40c\\e40c\"}.fa-duotone.fa-clipboard-check:after,.fad.fa-clipboard-check:after{content:\"\\f46c\\f46c\"}.fa-duotone.fa-cart-circle-plus:after,.fad.fa-cart-circle-plus:after{content:\"\\e3f3\\e3f3\"}.fa-duotone.fa-shipping-timed:after,.fa-duotone.fa-truck-clock:after,.fad.fa-shipping-timed:after,.fad.fa-truck-clock:after{content:\"\\f48c\\f48c\"}.fa-duotone.fa-pool-8-ball:after,.fad.fa-pool-8-ball:after{content:\"\\e3c5\\e3c5\"}.fa-duotone.fa-file-audio:after,.fad.fa-file-audio:after{content:\"\\f1c7\\f1c7\"}.fa-duotone.fa-turn-down-left:after,.fad.fa-turn-down-left:after{content:\"\\e331\\e331\"}.fa-duotone.fa-lock-hashtag:after,.fad.fa-lock-hashtag:after{content:\"\\e423\\e423\"}.fa-duotone.fa-chart-radar:after,.fad.fa-chart-radar:after{content:\"\\e0e7\\e0e7\"}.fa-duotone.fa-staff:after,.fad.fa-staff:after{content:\"\\f71b\\f71b\"}.fa-duotone.fa-burger:after,.fa-duotone.fa-hamburger:after,.fad.fa-burger:after,.fad.fa-hamburger:after{content:\"\\f805\\f805\"}.fa-duotone.fa-utility-pole:after,.fad.fa-utility-pole:after{content:\"\\e2c3\\e2c3\"}.fa-duotone.fa-transporter-6:after,.fad.fa-transporter-6:after{content:\"\\e2a7\\e2a7\"}.fa-duotone.fa-wrench:after,.fad.fa-wrench:after{content:\"\\f0ad\\f0ad\"}.fa-duotone.fa-bugs:after,.fad.fa-bugs:after{content:\"\\e4d0\\e4d0\"}.fa-duotone.fa-vector-polygon:after,.fad.fa-vector-polygon:after{content:\"\\e2c7\\e2c7\"}.fa-duotone.fa-diagram-nested:after,.fad.fa-diagram-nested:after{content:\"\\e157\\e157\"}.fa-duotone.fa-rupee-sign:after,.fa-duotone.fa-rupee:after,.fad.fa-rupee-sign:after,.fad.fa-rupee:after{content:\"\\f156\\f156\"}.fa-duotone.fa-file-image:after,.fad.fa-file-image:after{content:\"\\f1c5\\f1c5\"}.fa-duotone.fa-circle-question:after,.fa-duotone.fa-question-circle:after,.fad.fa-circle-question:after,.fad.fa-question-circle:after{content:\"\\f059\\f059\"}.fa-duotone.fa-image-user:after,.fad.fa-image-user:after{content:\"\\e1b8\\e1b8\"}.fa-duotone.fa-plane-departure:after,.fad.fa-plane-departure:after{content:\"\\f5b0\\f5b0\"}.fa-duotone.fa-handshake-slash:after,.fad.fa-handshake-slash:after{content:\"\\e060\\e060\"}.fa-duotone.fa-book-bookmark:after,.fad.fa-book-bookmark:after{content:\"\\e0bb\\e0bb\"}.fa-duotone.fa-border-center-h:after,.fad.fa-border-center-h:after{content:\"\\f89c\\f89c\"}.fa-duotone.fa-can-food:after,.fad.fa-can-food:after{content:\"\\e3e6\\e3e6\"}.fa-duotone.fa-typewriter:after,.fad.fa-typewriter:after{content:\"\\f8e7\\f8e7\"}.fa-duotone.fa-arrow-right-from-arc:after,.fad.fa-arrow-right-from-arc:after{content:\"\\e4b1\\e4b1\"}.fa-duotone.fa-circle-k:after,.fad.fa-circle-k:after{content:\"\\e113\\e113\"}.fa-duotone.fa-face-hand-over-mouth:after,.fad.fa-face-hand-over-mouth:after{content:\"\\e378\\e378\"}.fa-duotone.fa-popcorn:after,.fad.fa-popcorn:after{content:\"\\f819\\f819\"}.fa-duotone.fa-house-flood:after,.fa-duotone.fa-house-water:after,.fad.fa-house-flood:after,.fad.fa-house-water:after{content:\"\\f74f\\f74f\"}.fa-duotone.fa-object-subtract:after,.fad.fa-object-subtract:after{content:\"\\e49e\\e49e\"}.fa-duotone.fa-code-branch:after,.fad.fa-code-branch:after{content:\"\\f126\\f126\"}.fa-duotone.fa-warehouse-alt:after,.fa-duotone.fa-warehouse-full:after,.fad.fa-warehouse-alt:after,.fad.fa-warehouse-full:after{content:\"\\f495\\f495\"}.fa-duotone.fa-hat-cowboy:after,.fad.fa-hat-cowboy:after{content:\"\\f8c0\\f8c0\"}.fa-duotone.fa-bridge:after,.fad.fa-bridge:after{content:\"\\e4c8\\e4c8\"}.fa-duotone.fa-phone-alt:after,.fa-duotone.fa-phone-flip:after,.fad.fa-phone-alt:after,.fad.fa-phone-flip:after{content:\"\\f879\\f879\"}.fa-duotone.fa-arrow-down-from-dotted-line:after,.fad.fa-arrow-down-from-dotted-line:after{content:\"\\e090\\e090\"}.fa-duotone.fa-square-quarters:after,.fad.fa-square-quarters:after{content:\"\\e44e\\e44e\"}.fa-duotone.fa-truck-front:after,.fad.fa-truck-front:after{content:\"\\e2b7\\e2b7\"}.fa-duotone.fa-cat:after,.fad.fa-cat:after{content:\"\\f6be\\f6be\"}.fa-duotone.fa-trash-xmark:after,.fad.fa-trash-xmark:after{content:\"\\e2b4\\e2b4\"}.fa-duotone.fa-caret-circle-left:after,.fa-duotone.fa-circle-caret-left:after,.fad.fa-caret-circle-left:after,.fad.fa-circle-caret-left:after{content:\"\\f32e\\f32e\"}.fa-duotone.fa-files:after,.fad.fa-files:after{content:\"\\e178\\e178\"}.fa-duotone.fa-anchor-circle-exclamation:after,.fad.fa-anchor-circle-exclamation:after{content:\"\\e4ab\\e4ab\"}.fa-duotone.fa-face-clouds:after,.fad.fa-face-clouds:after{content:\"\\e47d\\e47d\"}.fa-duotone.fa-user-crown:after,.fad.fa-user-crown:after{content:\"\\f6a4\\f6a4\"}.fa-duotone.fa-truck-field:after,.fad.fa-truck-field:after{content:\"\\e58d\\e58d\"}.fa-duotone.fa-route:after,.fad.fa-route:after{content:\"\\f4d7\\f4d7\"}.fa-duotone.fa-cart-circle-check:after,.fad.fa-cart-circle-check:after{content:\"\\e3f1\\e3f1\"}.fa-duotone.fa-clipboard-question:after,.fad.fa-clipboard-question:after{content:\"\\e4e3\\e4e3\"}.fa-duotone.fa-panorama:after,.fad.fa-panorama:after{content:\"\\e209\\e209\"}.fa-duotone.fa-comment-medical:after,.fad.fa-comment-medical:after{content:\"\\f7f5\\f7f5\"}.fa-duotone.fa-teeth-open:after,.fad.fa-teeth-open:after{content:\"\\f62f\\f62f\"}.fa-duotone.fa-user-tie-hair-long:after,.fad.fa-user-tie-hair-long:after{content:\"\\e460\\e460\"}.fa-duotone.fa-file-circle-minus:after,.fad.fa-file-circle-minus:after{content:\"\\e4ed\\e4ed\"}.fa-duotone.fa-head-side-medical:after,.fad.fa-head-side-medical:after{content:\"\\f809\\f809\"}.fa-duotone.fa-tags:after,.fad.fa-tags:after{content:\"\\f02c\\f02c\"}.fa-duotone.fa-wine-glass:after,.fad.fa-wine-glass:after{content:\"\\f4e3\\f4e3\"}.fa-duotone.fa-fast-forward:after,.fa-duotone.fa-forward-fast:after,.fad.fa-fast-forward:after,.fad.fa-forward-fast:after{content:\"\\f050\\f050\"}.fa-duotone.fa-face-meh-blank:after,.fa-duotone.fa-meh-blank:after,.fad.fa-face-meh-blank:after,.fad.fa-meh-blank:after{content:\"\\f5a4\\f5a4\"}.fa-duotone.fa-user-robot:after,.fad.fa-user-robot:after{content:\"\\e04b\\e04b\"}.fa-duotone.fa-parking:after,.fa-duotone.fa-square-parking:after,.fad.fa-parking:after,.fad.fa-square-parking:after{content:\"\\f540\\f540\"}.fa-duotone.fa-card-diamond:after,.fad.fa-card-diamond:after{content:\"\\e3ea\\e3ea\"}.fa-duotone.fa-face-zipper:after,.fad.fa-face-zipper:after{content:\"\\e3a5\\e3a5\"}.fa-duotone.fa-face-raised-eyebrow:after,.fad.fa-face-raised-eyebrow:after{content:\"\\e388\\e388\"}.fa-duotone.fa-house-signal:after,.fad.fa-house-signal:after{content:\"\\e012\\e012\"}.fa-duotone.fa-chevron-square-up:after,.fa-duotone.fa-square-chevron-up:after,.fad.fa-chevron-square-up:after,.fad.fa-square-chevron-up:after{content:\"\\f32c\\f32c\"}.fa-duotone.fa-bars-progress:after,.fa-duotone.fa-tasks-alt:after,.fad.fa-bars-progress:after,.fad.fa-tasks-alt:after{content:\"\\f828\\f828\"}.fa-duotone.fa-faucet-drip:after,.fad.fa-faucet-drip:after{content:\"\\e006\\e006\"}.fa-duotone.fa-arrows-to-line:after,.fad.fa-arrows-to-line:after{content:\"\\e0a7\\e0a7\"}.fa-duotone.fa-dolphin:after,.fad.fa-dolphin:after{content:\"\\e168\\e168\"}.fa-duotone.fa-arrow-up-right:after,.fad.fa-arrow-up-right:after{content:\"\\e09f\\e09f\"}.fa-duotone.fa-circle-r:after,.fad.fa-circle-r:after{content:\"\\e120\\e120\"}.fa-duotone.fa-cart-flatbed:after,.fa-duotone.fa-dolly-flatbed:after,.fad.fa-cart-flatbed:after,.fad.fa-dolly-flatbed:after{content:\"\\f474\\f474\"}.fa-duotone.fa-ban-smoking:after,.fa-duotone.fa-smoking-ban:after,.fad.fa-ban-smoking:after,.fad.fa-smoking-ban:after{content:\"\\f54d\\f54d\"}.fa-duotone.fa-circle-sort-up:after,.fa-duotone.fa-sort-circle-up:after,.fad.fa-circle-sort-up:after,.fad.fa-sort-circle-up:after{content:\"\\e032\\e032\"}.fa-duotone.fa-terminal:after,.fad.fa-terminal:after{content:\"\\f120\\f120\"}.fa-duotone.fa-mobile-button:after,.fad.fa-mobile-button:after{content:\"\\f10b\\f10b\"}.fa-duotone.fa-house-medical-flag:after,.fad.fa-house-medical-flag:after{content:\"\\e514\\e514\"}.fa-duotone.fa-basket-shopping:after,.fa-duotone.fa-shopping-basket:after,.fad.fa-basket-shopping:after,.fad.fa-shopping-basket:after{content:\"\\f291\\f291\"}.fa-duotone.fa-tape:after,.fad.fa-tape:after{content:\"\\f4db\\f4db\"}.fa-duotone.fa-chestnut:after,.fad.fa-chestnut:after{content:\"\\e3f6\\e3f6\"}.fa-duotone.fa-bus-alt:after,.fa-duotone.fa-bus-simple:after,.fad.fa-bus-alt:after,.fad.fa-bus-simple:after{content:\"\\f55e\\f55e\"}.fa-duotone.fa-eye:after,.fad.fa-eye:after{content:\"\\f06e\\f06e\"}.fa-duotone.fa-face-sad-cry:after,.fa-duotone.fa-sad-cry:after,.fad.fa-face-sad-cry:after,.fad.fa-sad-cry:after{content:\"\\f5b3\\f5b3\"}.fa-duotone.fa-heat:after,.fad.fa-heat:after{content:\"\\e00c\\e00c\"}.fa-duotone.fa-ticket-airline:after,.fad.fa-ticket-airline:after{content:\"\\e29a\\e29a\"}.fa-duotone.fa-boot-heeled:after,.fad.fa-boot-heeled:after{content:\"\\e33f\\e33f\"}.fa-duotone.fa-arrows-minimize:after,.fa-duotone.fa-compress-arrows:after,.fad.fa-arrows-minimize:after,.fad.fa-compress-arrows:after{content:\"\\e0a5\\e0a5\"}.fa-duotone.fa-audio-description:after,.fad.fa-audio-description:after{content:\"\\f29e\\f29e\"}.fa-duotone.fa-person-military-to-person:after,.fad.fa-person-military-to-person:after{content:\"\\e54c\\e54c\"}.fa-duotone.fa-file-shield:after,.fad.fa-file-shield:after{content:\"\\e4f0\\e4f0\"}.fa-duotone.fa-hexagon:after,.fad.fa-hexagon:after{content:\"\\f312\\f312\"}.fa-duotone.fa-manhole:after,.fad.fa-manhole:after{content:\"\\e1d6\\e1d6\"}.fa-duotone.fa-user-slash:after,.fad.fa-user-slash:after{content:\"\\f506\\f506\"}.fa-duotone.fa-pen:after,.fad.fa-pen:after{content:\"\\f304\\f304\"}.fa-duotone.fa-tower-observation:after,.fad.fa-tower-observation:after{content:\"\\e586\\e586\"}.fa-duotone.fa-floppy-disks:after,.fad.fa-floppy-disks:after{content:\"\\e183\\e183\"}.fa-duotone.fa-toilet-paper-blank-under:after,.fa-duotone.fa-toilet-paper-reverse-alt:after,.fad.fa-toilet-paper-blank-under:after,.fad.fa-toilet-paper-reverse-alt:after{content:\"\\e29f\\e29f\"}.fa-duotone.fa-file-code:after,.fad.fa-file-code:after{content:\"\\f1c9\\f1c9\"}.fa-duotone.fa-signal-5:after,.fa-duotone.fa-signal-perfect:after,.fa-duotone.fa-signal:after,.fad.fa-signal-5:after,.fad.fa-signal-perfect:after,.fad.fa-signal:after{content:\"\\f012\\f012\"}.fa-duotone.fa-pump:after,.fad.fa-pump:after{content:\"\\e442\\e442\"}.fa-duotone.fa-bus:after,.fad.fa-bus:after{content:\"\\f207\\f207\"}.fa-duotone.fa-heart-circle-xmark:after,.fad.fa-heart-circle-xmark:after{content:\"\\e501\\e501\"}.fa-duotone.fa-arrow-up-left-from-circle:after,.fad.fa-arrow-up-left-from-circle:after{content:\"\\e09e\\e09e\"}.fa-duotone.fa-home-lg:after,.fa-duotone.fa-house-chimney:after,.fad.fa-home-lg:after,.fad.fa-house-chimney:after{content:\"\\e3af\\e3af\"}.fa-duotone.fa-window-maximize:after,.fad.fa-window-maximize:after{content:\"\\f2d0\\f2d0\"}.fa-duotone.fa-dryer:after,.fad.fa-dryer:after{content:\"\\f861\\f861\"}.fa-duotone.fa-face-frown:after,.fa-duotone.fa-frown:after,.fad.fa-face-frown:after,.fad.fa-frown:after{content:\"\\f119\\f119\"}.fa-duotone.fa-chess-bishop-alt:after,.fa-duotone.fa-chess-bishop-piece:after,.fad.fa-chess-bishop-alt:after,.fad.fa-chess-bishop-piece:after{content:\"\\f43b\\f43b\"}.fa-duotone.fa-shirt-tank-top:after,.fad.fa-shirt-tank-top:after{content:\"\\e3c9\\e3c9\"}.fa-duotone.fa-diploma:after,.fa-duotone.fa-scroll-ribbon:after,.fad.fa-diploma:after,.fad.fa-scroll-ribbon:after{content:\"\\f5ea\\f5ea\"}.fa-duotone.fa-screencast:after,.fad.fa-screencast:after{content:\"\\e23e\\e23e\"}.fa-duotone.fa-walker:after,.fad.fa-walker:after{content:\"\\f831\\f831\"}.fa-duotone.fa-prescription:after,.fad.fa-prescription:after{content:\"\\f5b1\\f5b1\"}.fa-duotone.fa-shop:after,.fa-duotone.fa-store-alt:after,.fad.fa-shop:after,.fad.fa-store-alt:after{content:\"\\f54f\\f54f\"}.fa-duotone.fa-floppy-disk:after,.fa-duotone.fa-save:after,.fad.fa-floppy-disk:after,.fad.fa-save:after{content:\"\\f0c7\\f0c7\"}.fa-duotone.fa-vihara:after,.fad.fa-vihara:after{content:\"\\f6a7\\f6a7\"}.fa-duotone.fa-face-kiss-closed-eyes:after,.fad.fa-face-kiss-closed-eyes:after{content:\"\\e37d\\e37d\"}.fa-duotone.fa-balance-scale-left:after,.fa-duotone.fa-scale-unbalanced:after,.fad.fa-balance-scale-left:after,.fad.fa-scale-unbalanced:after{content:\"\\f515\\f515\"}.fa-duotone.fa-file-user:after,.fad.fa-file-user:after{content:\"\\f65c\\f65c\"}.fa-duotone.fa-user-police-tie:after,.fad.fa-user-police-tie:after{content:\"\\e334\\e334\"}.fa-duotone.fa-face-tongue-money:after,.fad.fa-face-tongue-money:after{content:\"\\e39d\\e39d\"}.fa-duotone.fa-tennis-ball:after,.fad.fa-tennis-ball:after{content:\"\\f45e\\f45e\"}.fa-duotone.fa-square-l:after,.fad.fa-square-l:after{content:\"\\e275\\e275\"}.fa-duotone.fa-sort-asc:after,.fa-duotone.fa-sort-up:after,.fad.fa-sort-asc:after,.fad.fa-sort-up:after{content:\"\\f0de\\f0de\"}.fa-duotone.fa-calendar-arrow-up:after,.fa-duotone.fa-calendar-upload:after,.fad.fa-calendar-arrow-up:after,.fad.fa-calendar-upload:after{content:\"\\e0d1\\e0d1\"}.fa-duotone.fa-comment-dots:after,.fa-duotone.fa-commenting:after,.fad.fa-comment-dots:after,.fad.fa-commenting:after{content:\"\\f4ad\\f4ad\"}.fa-duotone.fa-plant-wilt:after,.fad.fa-plant-wilt:after{content:\"\\e5aa\\e5aa\"}.fa-duotone.fa-scarf:after,.fad.fa-scarf:after{content:\"\\f7c1\\f7c1\"}.fa-duotone.fa-album-circle-plus:after,.fad.fa-album-circle-plus:after{content:\"\\e48c\\e48c\"}.fa-duotone.fa-user-nurse-hair-long:after,.fad.fa-user-nurse-hair-long:after{content:\"\\e45e\\e45e\"}.fa-duotone.fa-diamond:after,.fad.fa-diamond:after{content:\"\\f219\\f219\"}.fa-duotone.fa-arrow-alt-square-left:after,.fa-duotone.fa-square-left:after,.fad.fa-arrow-alt-square-left:after,.fad.fa-square-left:after{content:\"\\f351\\f351\"}.fa-duotone.fa-face-grin-squint:after,.fa-duotone.fa-grin-squint:after,.fad.fa-face-grin-squint:after,.fad.fa-grin-squint:after{content:\"\\f585\\f585\"}.fa-duotone.fa-circle-ellipsis-vertical:after,.fad.fa-circle-ellipsis-vertical:after{content:\"\\e10b\\e10b\"}.fa-duotone.fa-hand-holding-dollar:after,.fa-duotone.fa-hand-holding-usd:after,.fad.fa-hand-holding-dollar:after,.fad.fa-hand-holding-usd:after{content:\"\\f4c0\\f4c0\"}.fa-duotone.fa-grid-dividers:after,.fad.fa-grid-dividers:after{content:\"\\e3ad\\e3ad\"}.fa-duotone.fa-bacterium:after,.fad.fa-bacterium:after{content:\"\\e05a\\e05a\"}.fa-duotone.fa-hand-pointer:after,.fad.fa-hand-pointer:after{content:\"\\f25a\\f25a\"}.fa-duotone.fa-drum-steelpan:after,.fad.fa-drum-steelpan:after{content:\"\\f56a\\f56a\"}.fa-duotone.fa-hand-scissors:after,.fad.fa-hand-scissors:after{content:\"\\f257\\f257\"}.fa-duotone.fa-hands-praying:after,.fa-duotone.fa-praying-hands:after,.fad.fa-hands-praying:after,.fad.fa-praying-hands:after{content:\"\\f684\\f684\"}.fa-duotone.fa-face-pensive:after,.fad.fa-face-pensive:after{content:\"\\e384\\e384\"}.fa-duotone.fa-user-music:after,.fad.fa-user-music:after{content:\"\\f8eb\\f8eb\"}.fa-duotone.fa-arrow-right-rotate:after,.fa-duotone.fa-arrow-rotate-forward:after,.fa-duotone.fa-arrow-rotate-right:after,.fa-duotone.fa-redo:after,.fad.fa-arrow-right-rotate:after,.fad.fa-arrow-rotate-forward:after,.fad.fa-arrow-rotate-right:after,.fad.fa-redo:after{content:\"\\f01e\\f01e\"}.fa-duotone.fa-comments-alt-dollar:after,.fa-duotone.fa-messages-dollar:after,.fad.fa-comments-alt-dollar:after,.fad.fa-messages-dollar:after{content:\"\\f652\\f652\"}.fa-duotone.fa-sensor-on:after,.fad.fa-sensor-on:after{content:\"\\e02b\\e02b\"}.fa-duotone.fa-balloon:after,.fad.fa-balloon:after{content:\"\\e2e3\\e2e3\"}.fa-duotone.fa-biohazard:after,.fad.fa-biohazard:after{content:\"\\f780\\f780\"}.fa-duotone.fa-chess-queen-alt:after,.fa-duotone.fa-chess-queen-piece:after,.fad.fa-chess-queen-alt:after,.fad.fa-chess-queen-piece:after{content:\"\\f446\\f446\"}.fa-duotone.fa-location-crosshairs:after,.fa-duotone.fa-location:after,.fad.fa-location-crosshairs:after,.fad.fa-location:after{content:\"\\f601\\f601\"}.fa-duotone.fa-mars-double:after,.fad.fa-mars-double:after{content:\"\\f227\\f227\"}.fa-duotone.fa-house-leave:after,.fa-duotone.fa-house-person-depart:after,.fa-duotone.fa-house-person-leave:after,.fad.fa-house-leave:after,.fad.fa-house-person-depart:after,.fad.fa-house-person-leave:after{content:\"\\e00f\\e00f\"}.fa-duotone.fa-ruler-triangle:after,.fad.fa-ruler-triangle:after{content:\"\\f61c\\f61c\"}.fa-duotone.fa-card-club:after,.fad.fa-card-club:after{content:\"\\e3e9\\e3e9\"}.fa-duotone.fa-child-dress:after,.fad.fa-child-dress:after{content:\"\\e59c\\e59c\"}.fa-duotone.fa-users-between-lines:after,.fad.fa-users-between-lines:after{content:\"\\e591\\e591\"}.fa-duotone.fa-lungs-virus:after,.fad.fa-lungs-virus:after{content:\"\\e067\\e067\"}.fa-duotone.fa-spinner-third:after,.fad.fa-spinner-third:after{content:\"\\f3f4\\f3f4\"}.fa-duotone.fa-face-grin-tears:after,.fa-duotone.fa-grin-tears:after,.fad.fa-face-grin-tears:after,.fad.fa-grin-tears:after{content:\"\\f588\\f588\"}.fa-duotone.fa-phone:after,.fad.fa-phone:after{content:\"\\f095\\f095\"}.fa-duotone.fa-computer-mouse-scrollwheel:after,.fa-duotone.fa-mouse-alt:after,.fad.fa-computer-mouse-scrollwheel:after,.fad.fa-mouse-alt:after{content:\"\\f8cd\\f8cd\"}.fa-duotone.fa-calendar-times:after,.fa-duotone.fa-calendar-xmark:after,.fad.fa-calendar-times:after,.fad.fa-calendar-xmark:after{content:\"\\f273\\f273\"}.fa-duotone.fa-child-reaching:after,.fad.fa-child-reaching:after{content:\"\\e59d\\e59d\"}.fa-duotone.fa-table-layout:after,.fad.fa-table-layout:after{content:\"\\e290\\e290\"}.fa-duotone.fa-narwhal:after,.fad.fa-narwhal:after{content:\"\\f6fe\\f6fe\"}.fa-duotone.fa-ramp-loading:after,.fad.fa-ramp-loading:after{content:\"\\f4d4\\f4d4\"}.fa-duotone.fa-calendar-circle-plus:after,.fad.fa-calendar-circle-plus:after{content:\"\\e470\\e470\"}.fa-duotone.fa-toothbrush:after,.fad.fa-toothbrush:after{content:\"\\f635\\f635\"}.fa-duotone.fa-border-inner:after,.fad.fa-border-inner:after{content:\"\\f84e\\f84e\"}.fa-duotone.fa-paw-claws:after,.fad.fa-paw-claws:after{content:\"\\f702\\f702\"}.fa-duotone.fa-kiwi-fruit:after,.fad.fa-kiwi-fruit:after{content:\"\\e30c\\e30c\"}.fa-duotone.fa-traffic-light-slow:after,.fad.fa-traffic-light-slow:after{content:\"\\f639\\f639\"}.fa-duotone.fa-rectangle-code:after,.fad.fa-rectangle-code:after{content:\"\\e322\\e322\"}.fa-duotone.fa-head-side-virus:after,.fad.fa-head-side-virus:after{content:\"\\e064\\e064\"}.fa-duotone.fa-keyboard-brightness:after,.fad.fa-keyboard-brightness:after{content:\"\\e1c0\\e1c0\"}.fa-duotone.fa-books-medical:after,.fad.fa-books-medical:after{content:\"\\f7e8\\f7e8\"}.fa-duotone.fa-lightbulb-slash:after,.fad.fa-lightbulb-slash:after{content:\"\\f673\\f673\"}.fa-duotone.fa-home-blank:after,.fa-duotone.fa-house-blank:after,.fad.fa-home-blank:after,.fad.fa-house-blank:after{content:\"\\e487\\e487\"}.fa-duotone.fa-square-5:after,.fad.fa-square-5:after{content:\"\\e25a\\e25a\"}.fa-duotone.fa-heart-square:after,.fa-duotone.fa-square-heart:after,.fad.fa-heart-square:after,.fad.fa-square-heart:after{content:\"\\f4c8\\f4c8\"}.fa-duotone.fa-puzzle:after,.fad.fa-puzzle:after{content:\"\\e443\\e443\"}.fa-duotone.fa-user-cog:after,.fa-duotone.fa-user-gear:after,.fad.fa-user-cog:after,.fad.fa-user-gear:after{content:\"\\f4fe\\f4fe\"}.fa-duotone.fa-pipe-circle-check:after,.fad.fa-pipe-circle-check:after{content:\"\\e436\\e436\"}.fa-duotone.fa-arrow-up-1-9:after,.fa-duotone.fa-sort-numeric-up:after,.fad.fa-arrow-up-1-9:after,.fad.fa-sort-numeric-up:after{content:\"\\f163\\f163\"}.fa-duotone.fa-octagon-exclamation:after,.fad.fa-octagon-exclamation:after{content:\"\\e204\\e204\"}.fa-duotone.fa-dial-low:after,.fad.fa-dial-low:after{content:\"\\e15d\\e15d\"}.fa-duotone.fa-door-closed:after,.fad.fa-door-closed:after{content:\"\\f52a\\f52a\"}.fa-duotone.fa-laptop-mobile:after,.fa-duotone.fa-phone-laptop:after,.fad.fa-laptop-mobile:after,.fad.fa-phone-laptop:after{content:\"\\f87a\\f87a\"}.fa-duotone.fa-conveyor-belt-alt:after,.fa-duotone.fa-conveyor-belt-boxes:after,.fad.fa-conveyor-belt-alt:after,.fad.fa-conveyor-belt-boxes:after{content:\"\\f46f\\f46f\"}.fa-duotone.fa-shield-virus:after,.fad.fa-shield-virus:after{content:\"\\e06c\\e06c\"}.fa-duotone.fa-starfighter-alt-advanced:after,.fa-duotone.fa-starfighter-twin-ion-engine-advanced:after,.fad.fa-starfighter-alt-advanced:after,.fad.fa-starfighter-twin-ion-engine-advanced:after{content:\"\\e28e\\e28e\"}.fa-duotone.fa-dice-six:after,.fad.fa-dice-six:after{content:\"\\f526\\f526\"}.fa-duotone.fa-starfighter-alt:after,.fa-duotone.fa-starfighter-twin-ion-engine:after,.fad.fa-starfighter-alt:after,.fad.fa-starfighter-twin-ion-engine:after{content:\"\\e038\\e038\"}.fa-duotone.fa-rocket-launch:after,.fad.fa-rocket-launch:after{content:\"\\e027\\e027\"}.fa-duotone.fa-mosquito-net:after,.fad.fa-mosquito-net:after{content:\"\\e52c\\e52c\"}.fa-duotone.fa-vent-damper:after,.fad.fa-vent-damper:after{content:\"\\e465\\e465\"}.fa-duotone.fa-bridge-water:after,.fad.fa-bridge-water:after{content:\"\\e4ce\\e4ce\"}.fa-duotone.fa-ban-bug:after,.fa-duotone.fa-debug:after,.fad.fa-ban-bug:after,.fad.fa-debug:after{content:\"\\f7f9\\f7f9\"}.fa-duotone.fa-person-booth:after,.fad.fa-person-booth:after{content:\"\\f756\\f756\"}.fa-duotone.fa-text-width:after,.fad.fa-text-width:after{content:\"\\f035\\f035\"}.fa-duotone.fa-garage-car:after,.fad.fa-garage-car:after{content:\"\\e00a\\e00a\"}.fa-duotone.fa-square-kanban:after,.fad.fa-square-kanban:after{content:\"\\e488\\e488\"}.fa-duotone.fa-hat-wizard:after,.fad.fa-hat-wizard:after{content:\"\\f6e8\\f6e8\"}.fa-duotone.fa-pen-fancy:after,.fad.fa-pen-fancy:after{content:\"\\f5ac\\f5ac\"}.fa-duotone.fa-coffee-pot:after,.fad.fa-coffee-pot:after{content:\"\\e002\\e002\"}.fa-duotone.fa-mouse-field:after,.fad.fa-mouse-field:after{content:\"\\e5a8\\e5a8\"}.fa-duotone.fa-digging:after,.fa-duotone.fa-person-digging:after,.fad.fa-digging:after,.fad.fa-person-digging:after{content:\"\\f85e\\f85e\"}.fa-duotone.fa-shower-alt:after,.fa-duotone.fa-shower-down:after,.fad.fa-shower-alt:after,.fad.fa-shower-down:after{content:\"\\e24d\\e24d\"}.fa-duotone.fa-box-circle-check:after,.fad.fa-box-circle-check:after{content:\"\\e0c4\\e0c4\"}.fa-duotone.fa-brightness:after,.fad.fa-brightness:after{content:\"\\e0c9\\e0c9\"}.fa-duotone.fa-car-side-bolt:after,.fad.fa-car-side-bolt:after{content:\"\\e344\\e344\"}.fa-duotone.fa-ornament:after,.fad.fa-ornament:after{content:\"\\f7b8\\f7b8\"}.fa-duotone.fa-phone-arrow-down-left:after,.fa-duotone.fa-phone-arrow-down:after,.fa-duotone.fa-phone-incoming:after,.fad.fa-phone-arrow-down-left:after,.fad.fa-phone-arrow-down:after,.fad.fa-phone-incoming:after{content:\"\\e223\\e223\"}.fa-duotone.fa-cloud-word:after,.fad.fa-cloud-word:after{content:\"\\e138\\e138\"}.fa-duotone.fa-hand-fingers-crossed:after,.fad.fa-hand-fingers-crossed:after{content:\"\\e1a3\\e1a3\"}.fa-duotone.fa-trash:after,.fad.fa-trash:after{content:\"\\f1f8\\f1f8\"}.fa-duotone.fa-gauge-simple-med:after,.fa-duotone.fa-gauge-simple:after,.fa-duotone.fa-tachometer-average:after,.fad.fa-gauge-simple-med:after,.fad.fa-gauge-simple:after,.fad.fa-tachometer-average:after{content:\"\\f629\\f629\"}.fa-duotone.fa-arrow-down-small-big:after,.fa-duotone.fa-sort-size-down-alt:after,.fad.fa-arrow-down-small-big:after,.fad.fa-sort-size-down-alt:after{content:\"\\f88d\\f88d\"}.fa-duotone.fa-book-medical:after,.fad.fa-book-medical:after{content:\"\\f7e6\\f7e6\"}.fa-duotone.fa-face-melting:after,.fad.fa-face-melting:after{content:\"\\e483\\e483\"}.fa-duotone.fa-poo:after,.fad.fa-poo:after{content:\"\\f2fe\\f2fe\"}.fa-duotone.fa-pen-alt-slash:after,.fa-duotone.fa-pen-clip-slash:after,.fad.fa-pen-alt-slash:after,.fad.fa-pen-clip-slash:after{content:\"\\e20f\\e20f\"}.fa-duotone.fa-quote-right-alt:after,.fa-duotone.fa-quote-right:after,.fad.fa-quote-right-alt:after,.fad.fa-quote-right:after{content:\"\\f10e\\f10e\"}.fa-duotone.fa-scroll-old:after,.fad.fa-scroll-old:after{content:\"\\f70f\\f70f\"}.fa-duotone.fa-guitars:after,.fad.fa-guitars:after{content:\"\\f8bf\\f8bf\"}.fa-duotone.fa-phone-xmark:after,.fad.fa-phone-xmark:after{content:\"\\e227\\e227\"}.fa-duotone.fa-hose:after,.fad.fa-hose:after{content:\"\\e419\\e419\"}.fa-duotone.fa-clock-six:after,.fad.fa-clock-six:after{content:\"\\e352\\e352\"}.fa-duotone.fa-shirt:after,.fa-duotone.fa-t-shirt:after,.fa-duotone.fa-tshirt:after,.fad.fa-shirt:after,.fad.fa-t-shirt:after,.fad.fa-tshirt:after{content:\"\\f553\\f553\"}.fa-duotone.fa-square-r:after,.fad.fa-square-r:after{content:\"\\e27c\\e27c\"}.fa-duotone.fa-cubes:after,.fad.fa-cubes:after{content:\"\\f1b3\\f1b3\"}.fa-duotone.fa-envelope-open-dollar:after,.fad.fa-envelope-open-dollar:after{content:\"\\f657\\f657\"}.fa-duotone.fa-divide:after,.fad.fa-divide:after{content:\"\\f529\\f529\"}.fa-duotone.fa-sun-cloud:after,.fad.fa-sun-cloud:after{content:\"\\f763\\f763\"}.fa-duotone.fa-lamp-floor:after,.fad.fa-lamp-floor:after{content:\"\\e015\\e015\"}.fa-duotone.fa-square-7:after,.fad.fa-square-7:after{content:\"\\e25c\\e25c\"}.fa-duotone.fa-tenge-sign:after,.fa-duotone.fa-tenge:after,.fad.fa-tenge-sign:after,.fad.fa-tenge:after{content:\"\\f7d7\\f7d7\"}.fa-duotone.fa-headphones:after,.fad.fa-headphones:after{content:\"\\f025\\f025\"}.fa-duotone.fa-hands-holding:after,.fad.fa-hands-holding:after{content:\"\\f4c2\\f4c2\"}.fa-duotone.fa-campfire:after,.fad.fa-campfire:after{content:\"\\f6ba\\f6ba\"}.fa-duotone.fa-circle-ampersand:after,.fad.fa-circle-ampersand:after{content:\"\\e0f8\\e0f8\"}.fa-duotone.fa-snowflakes:after,.fad.fa-snowflakes:after{content:\"\\f7cf\\f7cf\"}.fa-duotone.fa-hands-clapping:after,.fad.fa-hands-clapping:after{content:\"\\e1a8\\e1a8\"}.fa-duotone.fa-republican:after,.fad.fa-republican:after{content:\"\\f75e\\f75e\"}.fa-duotone.fa-leaf-maple:after,.fad.fa-leaf-maple:after{content:\"\\f6f6\\f6f6\"}.fa-duotone.fa-arrow-left:after,.fad.fa-arrow-left:after{content:\"\\f060\\f060\"}.fa-duotone.fa-person-circle-xmark:after,.fad.fa-person-circle-xmark:after{content:\"\\e543\\e543\"}.fa-duotone.fa-ruler:after,.fad.fa-ruler:after{content:\"\\f545\\f545\"}.fa-duotone.fa-cup-straw-swoosh:after,.fad.fa-cup-straw-swoosh:after{content:\"\\e364\\e364\"}.fa-duotone.fa-temperature-hot:after,.fa-duotone.fa-temperature-sun:after,.fad.fa-temperature-hot:after,.fad.fa-temperature-sun:after{content:\"\\f76a\\f76a\"}.fa-duotone.fa-align-left:after,.fad.fa-align-left:after{content:\"\\f036\\f036\"}.fa-duotone.fa-dice-d6:after,.fad.fa-dice-d6:after{content:\"\\f6d1\\f6d1\"}.fa-duotone.fa-restroom:after,.fad.fa-restroom:after{content:\"\\f7bd\\f7bd\"}.fa-duotone.fa-high-definition:after,.fa-duotone.fa-rectangle-hd:after,.fad.fa-high-definition:after,.fad.fa-rectangle-hd:after{content:\"\\e1ae\\e1ae\"}.fa-duotone.fa-j:after,.fad.fa-j:after{content:\"\\4a\\4a\"}.fa-duotone.fa-galaxy:after,.fad.fa-galaxy:after{content:\"\\e008\\e008\"}.fa-duotone.fa-users-viewfinder:after,.fad.fa-users-viewfinder:after{content:\"\\e595\\e595\"}.fa-duotone.fa-file-video:after,.fad.fa-file-video:after{content:\"\\f1c8\\f1c8\"}.fa-duotone.fa-cherries:after,.fad.fa-cherries:after{content:\"\\e0ec\\e0ec\"}.fa-duotone.fa-external-link-alt:after,.fa-duotone.fa-up-right-from-square:after,.fad.fa-external-link-alt:after,.fad.fa-up-right-from-square:after{content:\"\\f35d\\f35d\"}.fa-duotone.fa-circle-sort:after,.fa-duotone.fa-sort-circle:after,.fad.fa-circle-sort:after,.fad.fa-sort-circle:after{content:\"\\e030\\e030\"}.fa-duotone.fa-table-cells:after,.fa-duotone.fa-th:after,.fad.fa-table-cells:after,.fad.fa-th:after{content:\"\\f00a\\f00a\"}.fa-duotone.fa-file-pdf:after,.fad.fa-file-pdf:after{content:\"\\f1c1\\f1c1\"}.fa-duotone.fa-siren:after,.fad.fa-siren:after{content:\"\\e02d\\e02d\"}.fa-duotone.fa-arrow-up-to-dotted-line:after,.fad.fa-arrow-up-to-dotted-line:after{content:\"\\e0a1\\e0a1\"}.fa-duotone.fa-image-landscape:after,.fa-duotone.fa-landscape:after,.fad.fa-image-landscape:after,.fad.fa-landscape:after{content:\"\\e1b5\\e1b5\"}.fa-duotone.fa-tank-water:after,.fad.fa-tank-water:after{content:\"\\e452\\e452\"}.fa-duotone.fa-curling-stone:after,.fa-duotone.fa-curling:after,.fad.fa-curling-stone:after,.fad.fa-curling:after{content:\"\\f44a\\f44a\"}.fa-duotone.fa-gamepad-alt:after,.fa-duotone.fa-gamepad-modern:after,.fad.fa-gamepad-alt:after,.fad.fa-gamepad-modern:after{content:\"\\e5a2\\e5a2\"}.fa-duotone.fa-messages-question:after,.fad.fa-messages-question:after{content:\"\\e1e7\\e1e7\"}.fa-duotone.fa-bible:after,.fa-duotone.fa-book-bible:after,.fad.fa-bible:after,.fad.fa-book-bible:after{content:\"\\f647\\f647\"}.fa-duotone.fa-o:after,.fad.fa-o:after{content:\"\\4f\\4f\"}.fa-duotone.fa-medkit:after,.fa-duotone.fa-suitcase-medical:after,.fad.fa-medkit:after,.fad.fa-suitcase-medical:after{content:\"\\f0fa\\f0fa\"}.fa-duotone.fa-briefcase-arrow-right:after,.fad.fa-briefcase-arrow-right:after{content:\"\\e2f2\\e2f2\"}.fa-duotone.fa-expand-wide:after,.fad.fa-expand-wide:after{content:\"\\f320\\f320\"}.fa-duotone.fa-clock-eleven-thirty:after,.fad.fa-clock-eleven-thirty:after{content:\"\\e348\\e348\"}.fa-duotone.fa-rv:after,.fad.fa-rv:after{content:\"\\f7be\\f7be\"}.fa-duotone.fa-user-secret:after,.fad.fa-user-secret:after{content:\"\\f21b\\f21b\"}.fa-duotone.fa-otter:after,.fad.fa-otter:after{content:\"\\f700\\f700\"}.fa-duotone.fa-dreidel:after,.fad.fa-dreidel:after{content:\"\\f792\\f792\"}.fa-duotone.fa-female:after,.fa-duotone.fa-person-dress:after,.fad.fa-female:after,.fad.fa-person-dress:after{content:\"\\f182\\f182\"}.fa-duotone.fa-comment-dollar:after,.fad.fa-comment-dollar:after{content:\"\\f651\\f651\"}.fa-duotone.fa-briefcase-clock:after,.fa-duotone.fa-business-time:after,.fad.fa-briefcase-clock:after,.fad.fa-business-time:after{content:\"\\f64a\\f64a\"}.fa-duotone.fa-flower-tulip:after,.fad.fa-flower-tulip:after{content:\"\\f801\\f801\"}.fa-duotone.fa-people-pants-simple:after,.fad.fa-people-pants-simple:after{content:\"\\e21a\\e21a\"}.fa-duotone.fa-cloud-drizzle:after,.fad.fa-cloud-drizzle:after{content:\"\\f738\\f738\"}.fa-duotone.fa-table-cells-large:after,.fa-duotone.fa-th-large:after,.fad.fa-table-cells-large:after,.fad.fa-th-large:after{content:\"\\f009\\f009\"}.fa-duotone.fa-book-tanakh:after,.fa-duotone.fa-tanakh:after,.fad.fa-book-tanakh:after,.fad.fa-tanakh:after{content:\"\\f827\\f827\"}.fa-duotone.fa-solar-system:after,.fad.fa-solar-system:after{content:\"\\e02f\\e02f\"}.fa-duotone.fa-seal-question:after,.fad.fa-seal-question:after{content:\"\\e243\\e243\"}.fa-duotone.fa-phone-volume:after,.fa-duotone.fa-volume-control-phone:after,.fad.fa-phone-volume:after,.fad.fa-volume-control-phone:after{content:\"\\f2a0\\f2a0\"}.fa-duotone.fa-disc-drive:after,.fad.fa-disc-drive:after{content:\"\\f8b5\\f8b5\"}.fa-duotone.fa-hat-cowboy-side:after,.fad.fa-hat-cowboy-side:after{content:\"\\f8c1\\f8c1\"}.fa-duotone.fa-rows:after,.fa-duotone.fa-table-rows:after,.fad.fa-rows:after,.fad.fa-table-rows:after{content:\"\\e292\\e292\"}.fa-duotone.fa-location-exclamation:after,.fa-duotone.fa-map-marker-exclamation:after,.fad.fa-location-exclamation:after,.fad.fa-map-marker-exclamation:after{content:\"\\f608\\f608\"}.fa-duotone.fa-face-fearful:after,.fad.fa-face-fearful:after{content:\"\\e375\\e375\"}.fa-duotone.fa-clipboard-user:after,.fad.fa-clipboard-user:after{content:\"\\f7f3\\f7f3\"}.fa-duotone.fa-bus-school:after,.fad.fa-bus-school:after{content:\"\\f5dd\\f5dd\"}.fa-duotone.fa-film-slash:after,.fad.fa-film-slash:after{content:\"\\e179\\e179\"}.fa-duotone.fa-square-arrow-down-right:after,.fad.fa-square-arrow-down-right:after{content:\"\\e262\\e262\"}.fa-duotone.fa-book-sparkles:after,.fa-duotone.fa-book-spells:after,.fad.fa-book-sparkles:after,.fad.fa-book-spells:after{content:\"\\f6b8\\f6b8\"}.fa-duotone.fa-washer:after,.fa-duotone.fa-washing-machine:after,.fad.fa-washer:after,.fad.fa-washing-machine:after{content:\"\\f898\\f898\"}.fa-duotone.fa-child:after,.fad.fa-child:after{content:\"\\f1ae\\f1ae\"}.fa-duotone.fa-lira-sign:after,.fad.fa-lira-sign:after{content:\"\\f195\\f195\"}.fa-duotone.fa-user-visor:after,.fad.fa-user-visor:after{content:\"\\e04c\\e04c\"}.fa-duotone.fa-file-plus-minus:after,.fad.fa-file-plus-minus:after{content:\"\\e177\\e177\"}.fa-duotone.fa-chess-clock-alt:after,.fa-duotone.fa-chess-clock-flip:after,.fad.fa-chess-clock-alt:after,.fad.fa-chess-clock-flip:after{content:\"\\f43e\\f43e\"}.fa-duotone.fa-satellite:after,.fad.fa-satellite:after{content:\"\\f7bf\\f7bf\"}.fa-duotone.fa-plane-lock:after,.fad.fa-plane-lock:after{content:\"\\e558\\e558\"}.fa-duotone.fa-steering-wheel:after,.fad.fa-steering-wheel:after{content:\"\\f622\\f622\"}.fa-duotone.fa-tag:after,.fad.fa-tag:after{content:\"\\f02b\\f02b\"}.fa-duotone.fa-stretcher:after,.fad.fa-stretcher:after{content:\"\\f825\\f825\"}.fa-duotone.fa-book-law:after,.fa-duotone.fa-book-section:after,.fad.fa-book-law:after,.fad.fa-book-section:after{content:\"\\e0c1\\e0c1\"}.fa-duotone.fa-inboxes:after,.fad.fa-inboxes:after{content:\"\\e1bb\\e1bb\"}.fa-duotone.fa-coffee-bean:after,.fad.fa-coffee-bean:after{content:\"\\e13e\\e13e\"}.fa-duotone.fa-brackets-curly:after,.fad.fa-brackets-curly:after{content:\"\\f7ea\\f7ea\"}.fa-duotone.fa-ellipsis-stroke-vertical:after,.fa-duotone.fa-ellipsis-v-alt:after,.fad.fa-ellipsis-stroke-vertical:after,.fad.fa-ellipsis-v-alt:after{content:\"\\f39c\\f39c\"}.fa-duotone.fa-comment:after,.fad.fa-comment:after{content:\"\\f075\\f075\"}.fa-duotone.fa-square-1:after,.fad.fa-square-1:after{content:\"\\e256\\e256\"}.fa-duotone.fa-birthday-cake:after,.fa-duotone.fa-cake-candles:after,.fa-duotone.fa-cake:after,.fad.fa-birthday-cake:after,.fad.fa-cake-candles:after,.fad.fa-cake:after{content:\"\\f1fd\\f1fd\"}.fa-duotone.fa-head-side:after,.fad.fa-head-side:after{content:\"\\f6e9\\f6e9\"}.fa-duotone.fa-envelope:after,.fad.fa-envelope:after{content:\"\\f0e0\\f0e0\"}.fa-duotone.fa-dolly-empty:after,.fad.fa-dolly-empty:after{content:\"\\f473\\f473\"}.fa-duotone.fa-face-tissue:after,.fad.fa-face-tissue:after{content:\"\\e39c\\e39c\"}.fa-duotone.fa-angle-double-up:after,.fa-duotone.fa-angles-up:after,.fad.fa-angle-double-up:after,.fad.fa-angles-up:after{content:\"\\f102\\f102\"}.fa-duotone.fa-paperclip:after,.fad.fa-paperclip:after{content:\"\\f0c6\\f0c6\"}.fa-duotone.fa-chart-line-down:after,.fad.fa-chart-line-down:after{content:\"\\f64d\\f64d\"}.fa-duotone.fa-arrow-right-to-city:after,.fad.fa-arrow-right-to-city:after{content:\"\\e4b3\\e4b3\"}.fa-duotone.fa-lock-a:after,.fad.fa-lock-a:after{content:\"\\e422\\e422\"}.fa-duotone.fa-ribbon:after,.fad.fa-ribbon:after{content:\"\\f4d6\\f4d6\"}.fa-duotone.fa-lungs:after,.fad.fa-lungs:after{content:\"\\f604\\f604\"}.fa-duotone.fa-person-pinball:after,.fad.fa-person-pinball:after{content:\"\\e21d\\e21d\"}.fa-duotone.fa-arrow-up-9-1:after,.fa-duotone.fa-sort-numeric-up-alt:after,.fad.fa-arrow-up-9-1:after,.fad.fa-sort-numeric-up-alt:after{content:\"\\f887\\f887\"}.fa-duotone.fa-apple-core:after,.fad.fa-apple-core:after{content:\"\\e08f\\e08f\"}.fa-duotone.fa-circle-y:after,.fad.fa-circle-y:after{content:\"\\e12f\\e12f\"}.fa-duotone.fa-h6:after,.fad.fa-h6:after{content:\"\\e413\\e413\"}.fa-duotone.fa-litecoin-sign:after,.fad.fa-litecoin-sign:after{content:\"\\e1d3\\e1d3\"}.fa-duotone.fa-circle-small:after,.fad.fa-circle-small:after{content:\"\\e122\\e122\"}.fa-duotone.fa-border-none:after,.fad.fa-border-none:after{content:\"\\f850\\f850\"}.fa-duotone.fa-arrow-turn-down-left:after,.fad.fa-arrow-turn-down-left:after{content:\"\\e2e1\\e2e1\"}.fa-duotone.fa-circle-nodes:after,.fad.fa-circle-nodes:after{content:\"\\e4e2\\e4e2\"}.fa-duotone.fa-parachute-box:after,.fad.fa-parachute-box:after{content:\"\\f4cd\\f4cd\"}.fa-duotone.fa-comment-alt-medical:after,.fa-duotone.fa-message-medical:after,.fad.fa-comment-alt-medical:after,.fad.fa-message-medical:after{content:\"\\f7f4\\f7f4\"}.fa-duotone.fa-rugby-ball:after,.fad.fa-rugby-ball:after{content:\"\\e3c6\\e3c6\"}.fa-duotone.fa-comment-music:after,.fad.fa-comment-music:after{content:\"\\f8b0\\f8b0\"}.fa-duotone.fa-indent:after,.fad.fa-indent:after{content:\"\\f03c\\f03c\"}.fa-duotone.fa-tree-alt:after,.fa-duotone.fa-tree-deciduous:after,.fad.fa-tree-alt:after,.fad.fa-tree-deciduous:after{content:\"\\f400\\f400\"}.fa-duotone.fa-puzzle-piece-alt:after,.fa-duotone.fa-puzzle-piece-simple:after,.fad.fa-puzzle-piece-alt:after,.fad.fa-puzzle-piece-simple:after{content:\"\\e231\\e231\"}.fa-duotone.fa-truck-field-un:after,.fad.fa-truck-field-un:after{content:\"\\e58e\\e58e\"}.fa-duotone.fa-nfc-trash:after,.fad.fa-nfc-trash:after{content:\"\\e1fd\\e1fd\"}.fa-duotone.fa-hourglass-empty:after,.fa-duotone.fa-hourglass:after,.fad.fa-hourglass-empty:after,.fad.fa-hourglass:after{content:\"\\f254\\f254\"}.fa-duotone.fa-mountain:after,.fad.fa-mountain:after{content:\"\\f6fc\\f6fc\"}.fa-duotone.fa-file-times:after,.fa-duotone.fa-file-xmark:after,.fad.fa-file-times:after,.fad.fa-file-xmark:after{content:\"\\f317\\f317\"}.fa-duotone.fa-home-heart:after,.fa-duotone.fa-house-heart:after,.fad.fa-home-heart:after,.fad.fa-house-heart:after{content:\"\\f4c9\\f4c9\"}.fa-duotone.fa-house-chimney-blank:after,.fad.fa-house-chimney-blank:after{content:\"\\e3b0\\e3b0\"}.fa-duotone.fa-meter-bolt:after,.fad.fa-meter-bolt:after{content:\"\\e1e9\\e1e9\"}.fa-duotone.fa-user-doctor:after,.fa-duotone.fa-user-md:after,.fad.fa-user-doctor:after,.fad.fa-user-md:after{content:\"\\f0f0\\f0f0\"}.fa-duotone.fa-slash-back:after,.fad.fa-slash-back:after{content:\"\\5c\\5c\"}.fa-duotone.fa-circle-info:after,.fa-duotone.fa-info-circle:after,.fad.fa-circle-info:after,.fad.fa-info-circle:after{content:\"\\f05a\\f05a\"}.fa-duotone.fa-fishing-rod:after,.fad.fa-fishing-rod:after{content:\"\\e3a8\\e3a8\"}.fa-duotone.fa-hammer-crash:after,.fad.fa-hammer-crash:after{content:\"\\e414\\e414\"}.fa-duotone.fa-cloud-meatball:after,.fad.fa-cloud-meatball:after{content:\"\\f73b\\f73b\"}.fa-duotone.fa-camera-polaroid:after,.fad.fa-camera-polaroid:after{content:\"\\f8aa\\f8aa\"}.fa-duotone.fa-camera-alt:after,.fa-duotone.fa-camera:after,.fad.fa-camera-alt:after,.fad.fa-camera:after{content:\"\\f030\\f030\"}.fa-duotone.fa-square-virus:after,.fad.fa-square-virus:after{content:\"\\e578\\e578\"}.fa-duotone.fa-cart-arrow-up:after,.fad.fa-cart-arrow-up:after{content:\"\\e3ee\\e3ee\"}.fa-duotone.fa-meteor:after,.fad.fa-meteor:after{content:\"\\f753\\f753\"}.fa-duotone.fa-car-on:after,.fad.fa-car-on:after{content:\"\\e4dd\\e4dd\"}.fa-duotone.fa-sleigh:after,.fad.fa-sleigh:after{content:\"\\f7cc\\f7cc\"}.fa-duotone.fa-arrow-down-1-9:after,.fa-duotone.fa-sort-numeric-asc:after,.fa-duotone.fa-sort-numeric-down:after,.fad.fa-arrow-down-1-9:after,.fad.fa-sort-numeric-asc:after,.fad.fa-sort-numeric-down:after{content:\"\\f162\\f162\"}.fa-duotone.fa-square-4:after,.fad.fa-square-4:after{content:\"\\e259\\e259\"}.fa-duotone.fa-hand-holding-droplet:after,.fa-duotone.fa-hand-holding-water:after,.fad.fa-hand-holding-droplet:after,.fad.fa-hand-holding-water:after{content:\"\\f4c1\\f4c1\"}.fa-duotone.fa-waveform:after,.fad.fa-waveform:after{content:\"\\f8f1\\f8f1\"}.fa-duotone.fa-water:after,.fad.fa-water:after{content:\"\\f773\\f773\"}.fa-duotone.fa-star-sharp-half-alt:after,.fa-duotone.fa-star-sharp-half-stroke:after,.fad.fa-star-sharp-half-alt:after,.fad.fa-star-sharp-half-stroke:after{content:\"\\e28d\\e28d\"}.fa-duotone.fa-nfc-signal:after,.fad.fa-nfc-signal:after{content:\"\\e1fb\\e1fb\"}.fa-duotone.fa-plane-prop:after,.fad.fa-plane-prop:after{content:\"\\e22b\\e22b\"}.fa-duotone.fa-calendar-check:after,.fad.fa-calendar-check:after{content:\"\\f274\\f274\"}.fa-duotone.fa-clock-desk:after,.fad.fa-clock-desk:after{content:\"\\e134\\e134\"}.fa-duotone.fa-calendar-clock:after,.fa-duotone.fa-calendar-time:after,.fad.fa-calendar-clock:after,.fad.fa-calendar-time:after{content:\"\\e0d2\\e0d2\"}.fa-duotone.fa-braille:after,.fad.fa-braille:after{content:\"\\f2a1\\f2a1\"}.fa-duotone.fa-prescription-bottle-alt:after,.fa-duotone.fa-prescription-bottle-medical:after,.fad.fa-prescription-bottle-alt:after,.fad.fa-prescription-bottle-medical:after{content:\"\\f486\\f486\"}.fa-duotone.fa-plate-utensils:after,.fad.fa-plate-utensils:after{content:\"\\e43b\\e43b\"}.fa-duotone.fa-family-pants:after,.fad.fa-family-pants:after{content:\"\\e302\\e302\"}.fa-duotone.fa-hose-reel:after,.fad.fa-hose-reel:after{content:\"\\e41a\\e41a\"}.fa-duotone.fa-house-window:after,.fad.fa-house-window:after{content:\"\\e3b3\\e3b3\"}.fa-duotone.fa-landmark:after,.fad.fa-landmark:after{content:\"\\f66f\\f66f\"}.fa-duotone.fa-truck:after,.fad.fa-truck:after{content:\"\\f0d1\\f0d1\"}.fa-duotone.fa-crosshairs:after,.fad.fa-crosshairs:after{content:\"\\f05b\\f05b\"}.fa-duotone.fa-cloud-rainbow:after,.fad.fa-cloud-rainbow:after{content:\"\\f73e\\f73e\"}.fa-duotone.fa-person-cane:after,.fad.fa-person-cane:after{content:\"\\e53c\\e53c\"}.fa-duotone.fa-alien:after,.fad.fa-alien:after{content:\"\\f8f5\\f8f5\"}.fa-duotone.fa-tent:after,.fad.fa-tent:after{content:\"\\e57d\\e57d\"}.fa-duotone.fa-vest-patches:after,.fad.fa-vest-patches:after{content:\"\\e086\\e086\"}.fa-duotone.fa-people-dress-simple:after,.fad.fa-people-dress-simple:after{content:\"\\e218\\e218\"}.fa-duotone.fa-check-double:after,.fad.fa-check-double:after{content:\"\\f560\\f560\"}.fa-duotone.fa-arrow-down-a-z:after,.fa-duotone.fa-sort-alpha-asc:after,.fa-duotone.fa-sort-alpha-down:after,.fad.fa-arrow-down-a-z:after,.fad.fa-sort-alpha-asc:after,.fad.fa-sort-alpha-down:after{content:\"\\f15d\\f15d\"}.fa-duotone.fa-bowling-ball-pin:after,.fad.fa-bowling-ball-pin:after{content:\"\\e0c3\\e0c3\"}.fa-duotone.fa-bell-school-slash:after,.fad.fa-bell-school-slash:after{content:\"\\f5d6\\f5d6\"}.fa-duotone.fa-plus-large:after,.fad.fa-plus-large:after{content:\"\\e59e\\e59e\"}.fa-duotone.fa-money-bill-wheat:after,.fad.fa-money-bill-wheat:after{content:\"\\e52a\\e52a\"}.fa-duotone.fa-camera-viewfinder:after,.fa-duotone.fa-screenshot:after,.fad.fa-camera-viewfinder:after,.fad.fa-screenshot:after{content:\"\\e0da\\e0da\"}.fa-duotone.fa-comment-alt-music:after,.fa-duotone.fa-message-music:after,.fad.fa-comment-alt-music:after,.fad.fa-message-music:after{content:\"\\f8af\\f8af\"}.fa-duotone.fa-car-building:after,.fad.fa-car-building:after{content:\"\\f859\\f859\"}.fa-duotone.fa-border-bottom-right:after,.fa-duotone.fa-border-style-alt:after,.fad.fa-border-bottom-right:after,.fad.fa-border-style-alt:after{content:\"\\f854\\f854\"}.fa-duotone.fa-octagon:after,.fad.fa-octagon:after{content:\"\\f306\\f306\"}.fa-duotone.fa-comment-arrow-up-right:after,.fad.fa-comment-arrow-up-right:after{content:\"\\e145\\e145\"}.fa-duotone.fa-octagon-divide:after,.fad.fa-octagon-divide:after{content:\"\\e203\\e203\"}.fa-duotone.fa-cookie:after,.fad.fa-cookie:after{content:\"\\f563\\f563\"}.fa-duotone.fa-arrow-left-rotate:after,.fa-duotone.fa-arrow-rotate-back:after,.fa-duotone.fa-arrow-rotate-backward:after,.fa-duotone.fa-arrow-rotate-left:after,.fa-duotone.fa-undo:after,.fad.fa-arrow-left-rotate:after,.fad.fa-arrow-rotate-back:after,.fad.fa-arrow-rotate-backward:after,.fad.fa-arrow-rotate-left:after,.fad.fa-undo:after{content:\"\\f0e2\\f0e2\"}.fa-duotone.fa-tv-music:after,.fad.fa-tv-music:after{content:\"\\f8e6\\f8e6\"}.fa-duotone.fa-hard-drive:after,.fa-duotone.fa-hdd:after,.fad.fa-hard-drive:after,.fad.fa-hdd:after{content:\"\\f0a0\\f0a0\"}.fa-duotone.fa-reel:after,.fad.fa-reel:after{content:\"\\e238\\e238\"}.fa-duotone.fa-face-grin-squint-tears:after,.fa-duotone.fa-grin-squint-tears:after,.fad.fa-face-grin-squint-tears:after,.fad.fa-grin-squint-tears:after{content:\"\\f586\\f586\"}.fa-duotone.fa-dumbbell:after,.fad.fa-dumbbell:after{content:\"\\f44b\\f44b\"}.fa-duotone.fa-list-alt:after,.fa-duotone.fa-rectangle-list:after,.fad.fa-list-alt:after,.fad.fa-rectangle-list:after{content:\"\\f022\\f022\"}.fa-duotone.fa-tarp-droplet:after,.fad.fa-tarp-droplet:after{content:\"\\e57c\\e57c\"}.fa-duotone.fa-alarm-exclamation:after,.fad.fa-alarm-exclamation:after{content:\"\\f843\\f843\"}.fa-duotone.fa-house-medical-circle-check:after,.fad.fa-house-medical-circle-check:after{content:\"\\e511\\e511\"}.fa-duotone.fa-traffic-cone:after,.fad.fa-traffic-cone:after{content:\"\\f636\\f636\"}.fa-duotone.fa-grate:after,.fad.fa-grate:after{content:\"\\e193\\e193\"}.fa-duotone.fa-arrow-down-right:after,.fad.fa-arrow-down-right:after{content:\"\\e093\\e093\"}.fa-duotone.fa-person-skiing-nordic:after,.fa-duotone.fa-skiing-nordic:after,.fad.fa-person-skiing-nordic:after,.fad.fa-skiing-nordic:after{content:\"\\f7ca\\f7ca\"}.fa-duotone.fa-calendar-plus:after,.fad.fa-calendar-plus:after{content:\"\\f271\\f271\"}.fa-duotone.fa-person-from-portal:after,.fa-duotone.fa-portal-exit:after,.fad.fa-person-from-portal:after,.fad.fa-portal-exit:after{content:\"\\e023\\e023\"}.fa-duotone.fa-plane-arrival:after,.fad.fa-plane-arrival:after{content:\"\\f5af\\f5af\"}.fa-duotone.fa-cowbell-circle-plus:after,.fa-duotone.fa-cowbell-more:after,.fad.fa-cowbell-circle-plus:after,.fad.fa-cowbell-more:after{content:\"\\f8b4\\f8b4\"}.fa-duotone.fa-arrow-alt-circle-left:after,.fa-duotone.fa-circle-left:after,.fad.fa-arrow-alt-circle-left:after,.fad.fa-circle-left:after{content:\"\\f359\\f359\"}.fa-duotone.fa-distribute-spacing-vertical:after,.fad.fa-distribute-spacing-vertical:after{content:\"\\e366\\e366\"}.fa-duotone.fa-signal-alt-2:after,.fa-duotone.fa-signal-bars-fair:after,.fad.fa-signal-alt-2:after,.fad.fa-signal-bars-fair:after{content:\"\\f692\\f692\"}.fa-duotone.fa-sportsball:after,.fad.fa-sportsball:after{content:\"\\e44b\\e44b\"}.fa-duotone.fa-subway:after,.fa-duotone.fa-train-subway:after,.fad.fa-subway:after,.fad.fa-train-subway:after{content:\"\\f239\\f239\"}.fa-duotone.fa-chart-gantt:after,.fad.fa-chart-gantt:after{content:\"\\e0e4\\e0e4\"}.fa-duotone.fa-face-smile-upside-down:after,.fad.fa-face-smile-upside-down:after{content:\"\\e395\\e395\"}.fa-duotone.fa-ball-pile:after,.fad.fa-ball-pile:after{content:\"\\f77e\\f77e\"}.fa-duotone.fa-badge-dollar:after,.fad.fa-badge-dollar:after{content:\"\\f645\\f645\"}.fa-duotone.fa-money-bills-alt:after,.fa-duotone.fa-money-bills-simple:after,.fad.fa-money-bills-alt:after,.fad.fa-money-bills-simple:after{content:\"\\e1f4\\e1f4\"}.fa-duotone.fa-list-timeline:after,.fad.fa-list-timeline:after{content:\"\\e1d1\\e1d1\"}.fa-duotone.fa-indian-rupee-sign:after,.fa-duotone.fa-indian-rupee:after,.fa-duotone.fa-inr:after,.fad.fa-indian-rupee-sign:after,.fad.fa-indian-rupee:after,.fad.fa-inr:after{content:\"\\e1bc\\e1bc\"}.fa-duotone.fa-crop-alt:after,.fa-duotone.fa-crop-simple:after,.fad.fa-crop-alt:after,.fad.fa-crop-simple:after{content:\"\\f565\\f565\"}.fa-duotone.fa-money-bill-1:after,.fa-duotone.fa-money-bill-alt:after,.fad.fa-money-bill-1:after,.fad.fa-money-bill-alt:after{content:\"\\f3d1\\f3d1\"}.fa-duotone.fa-left-long:after,.fa-duotone.fa-long-arrow-alt-left:after,.fad.fa-left-long:after,.fad.fa-long-arrow-alt-left:after{content:\"\\f30a\\f30a\"}.fa-duotone.fa-keyboard-down:after,.fad.fa-keyboard-down:after{content:\"\\e1c2\\e1c2\"}.fa-duotone.fa-circle-up-right:after,.fad.fa-circle-up-right:after{content:\"\\e129\\e129\"}.fa-duotone.fa-cloud-bolt-moon:after,.fa-duotone.fa-thunderstorm-moon:after,.fad.fa-cloud-bolt-moon:after,.fad.fa-thunderstorm-moon:after{content:\"\\f76d\\f76d\"}.fa-duotone.fa-dna:after,.fad.fa-dna:after{content:\"\\f471\\f471\"}.fa-duotone.fa-virus-slash:after,.fad.fa-virus-slash:after{content:\"\\e075\\e075\"}.fa-duotone.fa-bracket-round-right:after,.fad.fa-bracket-round-right:after{content:\"\\29\\29\"}.fa-duotone.fa-circle-5:after,.fad.fa-circle-5:after{content:\"\\e0f2\\e0f2\"}.fa-duotone.fa-minus:after,.fa-duotone.fa-subtract:after,.fad.fa-minus:after,.fad.fa-subtract:after{content:\"\\f068\\f068\"}.fa-duotone.fa-fire-flame:after,.fa-duotone.fa-flame:after,.fad.fa-fire-flame:after,.fad.fa-flame:after{content:\"\\f6df\\f6df\"}.fa-duotone.fa-arrow-alt-to-right:after,.fa-duotone.fa-right-to-line:after,.fad.fa-arrow-alt-to-right:after,.fad.fa-right-to-line:after{content:\"\\f34c\\f34c\"}.fa-duotone.fa-child-rifle:after,.fad.fa-child-rifle:after{content:\"\\e4e0\\e4e0\"}.fa-duotone.fa-gif:after,.fad.fa-gif:after{content:\"\\e190\\e190\"}.fa-duotone.fa-chess:after,.fad.fa-chess:after{content:\"\\f439\\f439\"}.fa-duotone.fa-trash-slash:after,.fad.fa-trash-slash:after{content:\"\\e2b3\\e2b3\"}.fa-duotone.fa-arrow-left-long:after,.fa-duotone.fa-long-arrow-left:after,.fad.fa-arrow-left-long:after,.fad.fa-long-arrow-left:after{content:\"\\f177\\f177\"}.fa-duotone.fa-plug-circle-check:after,.fad.fa-plug-circle-check:after{content:\"\\e55c\\e55c\"}.fa-duotone.fa-font-case:after,.fad.fa-font-case:after{content:\"\\f866\\f866\"}.fa-duotone.fa-street-view:after,.fad.fa-street-view:after{content:\"\\f21d\\f21d\"}.fa-duotone.fa-arrow-down-left:after,.fad.fa-arrow-down-left:after{content:\"\\e091\\e091\"}.fa-duotone.fa-franc-sign:after,.fad.fa-franc-sign:after{content:\"\\e18f\\e18f\"}.fa-duotone.fa-flask-poison:after,.fa-duotone.fa-flask-round-poison:after,.fad.fa-flask-poison:after,.fad.fa-flask-round-poison:after{content:\"\\f6e0\\f6e0\"}.fa-duotone.fa-volume-off:after,.fad.fa-volume-off:after{content:\"\\f026\\f026\"}.fa-duotone.fa-book-circle-arrow-right:after,.fad.fa-book-circle-arrow-right:after{content:\"\\e0bc\\e0bc\"}.fa-duotone.fa-chart-user:after,.fa-duotone.fa-user-chart:after,.fad.fa-chart-user:after,.fad.fa-user-chart:after{content:\"\\f6a3\\f6a3\"}.fa-duotone.fa-american-sign-language-interpreting:after,.fa-duotone.fa-asl-interpreting:after,.fa-duotone.fa-hands-american-sign-language-interpreting:after,.fa-duotone.fa-hands-asl-interpreting:after,.fad.fa-american-sign-language-interpreting:after,.fad.fa-asl-interpreting:after,.fad.fa-hands-american-sign-language-interpreting:after,.fad.fa-hands-asl-interpreting:after{content:\"\\f2a3\\f2a3\"}.fa-duotone.fa-presentation-screen:after,.fa-duotone.fa-presentation:after,.fad.fa-presentation-screen:after,.fad.fa-presentation:after{content:\"\\f685\\f685\"}.fa-duotone.fa-circle-bolt:after,.fad.fa-circle-bolt:after{content:\"\\e0fe\\e0fe\"}.fa-duotone.fa-face-smile-halo:after,.fad.fa-face-smile-halo:after{content:\"\\e38f\\e38f\"}.fa-duotone.fa-cart-circle-arrow-down:after,.fad.fa-cart-circle-arrow-down:after{content:\"\\e3ef\\e3ef\"}.fa-duotone.fa-house-person-arrive:after,.fa-duotone.fa-house-person-return:after,.fa-duotone.fa-house-return:after,.fad.fa-house-person-arrive:after,.fad.fa-house-person-return:after,.fad.fa-house-return:after{content:\"\\e011\\e011\"}.fa-duotone.fa-comment-alt-times:after,.fa-duotone.fa-message-times:after,.fa-duotone.fa-message-xmark:after,.fad.fa-comment-alt-times:after,.fad.fa-message-times:after,.fad.fa-message-xmark:after{content:\"\\f4ab\\f4ab\"}.fa-duotone.fa-file-award:after,.fa-duotone.fa-file-certificate:after,.fad.fa-file-award:after,.fad.fa-file-certificate:after{content:\"\\f5f3\\f5f3\"}.fa-duotone.fa-user-doctor-hair-long:after,.fad.fa-user-doctor-hair-long:after{content:\"\\e459\\e459\"}.fa-duotone.fa-camera-home:after,.fa-duotone.fa-camera-security:after,.fad.fa-camera-home:after,.fad.fa-camera-security:after{content:\"\\f8fe\\f8fe\"}.fa-duotone.fa-cog:after,.fa-duotone.fa-gear:after,.fad.fa-cog:after,.fad.fa-gear:after{content:\"\\f013\\f013\"}.fa-duotone.fa-droplet-slash:after,.fa-duotone.fa-tint-slash:after,.fad.fa-droplet-slash:after,.fad.fa-tint-slash:after{content:\"\\f5c7\\f5c7\"}.fa-duotone.fa-book-heart:after,.fad.fa-book-heart:after{content:\"\\f499\\f499\"}.fa-duotone.fa-mosque:after,.fad.fa-mosque:after{content:\"\\f678\\f678\"}.fa-duotone.fa-duck:after,.fad.fa-duck:after{content:\"\\f6d8\\f6d8\"}.fa-duotone.fa-mosquito:after,.fad.fa-mosquito:after{content:\"\\e52b\\e52b\"}.fa-duotone.fa-star-of-david:after,.fad.fa-star-of-david:after{content:\"\\f69a\\f69a\"}.fa-duotone.fa-flag-alt:after,.fa-duotone.fa-flag-swallowtail:after,.fad.fa-flag-alt:after,.fad.fa-flag-swallowtail:after{content:\"\\f74c\\f74c\"}.fa-duotone.fa-person-military-rifle:after,.fad.fa-person-military-rifle:after{content:\"\\e54b\\e54b\"}.fa-duotone.fa-car-garage:after,.fad.fa-car-garage:after{content:\"\\f5e2\\f5e2\"}.fa-duotone.fa-cart-shopping:after,.fa-duotone.fa-shopping-cart:after,.fad.fa-cart-shopping:after,.fad.fa-shopping-cart:after{content:\"\\f07a\\f07a\"}.fa-duotone.fa-book-font:after,.fad.fa-book-font:after{content:\"\\e0bf\\e0bf\"}.fa-duotone.fa-shield-plus:after,.fad.fa-shield-plus:after{content:\"\\e24a\\e24a\"}.fa-duotone.fa-vials:after,.fad.fa-vials:after{content:\"\\f493\\f493\"}.fa-duotone.fa-eye-dropper-full:after,.fad.fa-eye-dropper-full:after{content:\"\\e172\\e172\"}.fa-duotone.fa-distribute-spacing-horizontal:after,.fad.fa-distribute-spacing-horizontal:after{content:\"\\e365\\e365\"}.fa-duotone.fa-tablet-rugged:after,.fad.fa-tablet-rugged:after{content:\"\\f48f\\f48f\"}.fa-duotone.fa-temperature-frigid:after,.fa-duotone.fa-temperature-snow:after,.fad.fa-temperature-frigid:after,.fad.fa-temperature-snow:after{content:\"\\f768\\f768\"}.fa-duotone.fa-moped:after,.fad.fa-moped:after{content:\"\\e3b9\\e3b9\"}.fa-duotone.fa-face-smile-plus:after,.fa-duotone.fa-smile-plus:after,.fad.fa-face-smile-plus:after,.fad.fa-smile-plus:after{content:\"\\f5b9\\f5b9\"}.fa-duotone.fa-radio-alt:after,.fa-duotone.fa-radio-tuner:after,.fad.fa-radio-alt:after,.fad.fa-radio-tuner:after{content:\"\\f8d8\\f8d8\"}.fa-duotone.fa-face-swear:after,.fad.fa-face-swear:after{content:\"\\e399\\e399\"}.fa-duotone.fa-water-arrow-down:after,.fa-duotone.fa-water-lower:after,.fad.fa-water-arrow-down:after,.fad.fa-water-lower:after{content:\"\\f774\\f774\"}.fa-duotone.fa-scanner-touchscreen:after,.fad.fa-scanner-touchscreen:after{content:\"\\f48a\\f48a\"}.fa-duotone.fa-circle-7:after,.fad.fa-circle-7:after{content:\"\\e0f4\\e0f4\"}.fa-duotone.fa-plug-circle-plus:after,.fad.fa-plug-circle-plus:after{content:\"\\e55f\\e55f\"}.fa-duotone.fa-person-ski-jumping:after,.fa-duotone.fa-ski-jump:after,.fad.fa-person-ski-jumping:after,.fad.fa-ski-jump:after{content:\"\\f7c7\\f7c7\"}.fa-duotone.fa-place-of-worship:after,.fad.fa-place-of-worship:after{content:\"\\f67f\\f67f\"}.fa-duotone.fa-water-arrow-up:after,.fa-duotone.fa-water-rise:after,.fad.fa-water-arrow-up:after,.fad.fa-water-rise:after{content:\"\\f775\\f775\"}.fa-duotone.fa-waveform-lines:after,.fa-duotone.fa-waveform-path:after,.fad.fa-waveform-lines:after,.fad.fa-waveform-path:after{content:\"\\f8f2\\f8f2\"}.fa-duotone.fa-split:after,.fad.fa-split:after{content:\"\\e254\\e254\"}.fa-duotone.fa-film-canister:after,.fa-duotone.fa-film-cannister:after,.fad.fa-film-canister:after,.fad.fa-film-cannister:after{content:\"\\f8b7\\f8b7\"}.fa-duotone.fa-folder-times:after,.fa-duotone.fa-folder-xmark:after,.fad.fa-folder-times:after,.fad.fa-folder-xmark:after{content:\"\\f65f\\f65f\"}.fa-duotone.fa-toilet-paper-alt:after,.fa-duotone.fa-toilet-paper-blank:after,.fad.fa-toilet-paper-alt:after,.fad.fa-toilet-paper-blank:after{content:\"\\f71f\\f71f\"}.fa-duotone.fa-tablet-android-alt:after,.fa-duotone.fa-tablet-screen:after,.fad.fa-tablet-android-alt:after,.fad.fa-tablet-screen:after{content:\"\\f3fc\\f3fc\"}.fa-duotone.fa-hexagon-vertical-nft-slanted:after,.fad.fa-hexagon-vertical-nft-slanted:after{content:\"\\e506\\e506\"}.fa-duotone.fa-folder-music:after,.fad.fa-folder-music:after{content:\"\\e18d\\e18d\"}.fa-duotone.fa-desktop-medical:after,.fa-duotone.fa-display-medical:after,.fad.fa-desktop-medical:after,.fad.fa-display-medical:after{content:\"\\e166\\e166\"}.fa-duotone.fa-share-all:after,.fad.fa-share-all:after{content:\"\\f367\\f367\"}.fa-duotone.fa-peapod:after,.fad.fa-peapod:after{content:\"\\e31c\\e31c\"}.fa-duotone.fa-chess-clock:after,.fad.fa-chess-clock:after{content:\"\\f43d\\f43d\"}.fa-duotone.fa-axe:after,.fad.fa-axe:after{content:\"\\f6b2\\f6b2\"}.fa-duotone.fa-square-d:after,.fad.fa-square-d:after{content:\"\\e268\\e268\"}.fa-duotone.fa-grip-vertical:after,.fad.fa-grip-vertical:after{content:\"\\f58e\\f58e\"}.fa-duotone.fa-mobile-signal-out:after,.fad.fa-mobile-signal-out:after{content:\"\\e1f0\\e1f0\"}.fa-duotone.fa-arrow-turn-up:after,.fa-duotone.fa-level-up:after,.fad.fa-arrow-turn-up:after,.fad.fa-level-up:after{content:\"\\f148\\f148\"}.fa-duotone.fa-u:after,.fad.fa-u:after{content:\"\\55\\55\"}.fa-duotone.fa-arrow-up-from-dotted-line:after,.fad.fa-arrow-up-from-dotted-line:after{content:\"\\e09b\\e09b\"}.fa-duotone.fa-square-root-alt:after,.fa-duotone.fa-square-root-variable:after,.fad.fa-square-root-alt:after,.fad.fa-square-root-variable:after{content:\"\\f698\\f698\"}.fa-duotone.fa-light-switch-on:after,.fad.fa-light-switch-on:after{content:\"\\e019\\e019\"}.fa-duotone.fa-arrow-down-arrow-up:after,.fa-duotone.fa-sort-alt:after,.fad.fa-arrow-down-arrow-up:after,.fad.fa-sort-alt:after{content:\"\\f883\\f883\"}.fa-duotone.fa-raindrops:after,.fad.fa-raindrops:after{content:\"\\f75c\\f75c\"}.fa-duotone.fa-dash:after,.fa-duotone.fa-minus-large:after,.fad.fa-dash:after,.fad.fa-minus-large:after{content:\"\\e404\\e404\"}.fa-duotone.fa-clock-four:after,.fa-duotone.fa-clock:after,.fad.fa-clock-four:after,.fad.fa-clock:after{content:\"\\f017\\f017\"}.fa-duotone.fa-input-numeric:after,.fad.fa-input-numeric:after{content:\"\\e1bd\\e1bd\"}.fa-duotone.fa-truck-tow:after,.fad.fa-truck-tow:after{content:\"\\e2b8\\e2b8\"}.fa-duotone.fa-backward-step:after,.fa-duotone.fa-step-backward:after,.fad.fa-backward-step:after,.fad.fa-step-backward:after{content:\"\\f048\\f048\"}.fa-duotone.fa-pallet:after,.fad.fa-pallet:after{content:\"\\f482\\f482\"}.fa-duotone.fa-car-bolt:after,.fad.fa-car-bolt:after{content:\"\\e341\\e341\"}.fa-duotone.fa-arrows-maximize:after,.fa-duotone.fa-expand-arrows:after,.fad.fa-arrows-maximize:after,.fad.fa-expand-arrows:after{content:\"\\f31d\\f31d\"}.fa-duotone.fa-faucet:after,.fad.fa-faucet:after{content:\"\\e005\\e005\"}.fa-duotone.fa-cloud-sleet:after,.fad.fa-cloud-sleet:after{content:\"\\f741\\f741\"}.fa-duotone.fa-lamp-street:after,.fad.fa-lamp-street:after{content:\"\\e1c5\\e1c5\"}.fa-duotone.fa-list-radio:after,.fad.fa-list-radio:after{content:\"\\e1d0\\e1d0\"}.fa-duotone.fa-pen-nib-slash:after,.fad.fa-pen-nib-slash:after{content:\"\\e4a1\\e4a1\"}.fa-duotone.fa-baseball-bat-ball:after,.fad.fa-baseball-bat-ball:after{content:\"\\f432\\f432\"}.fa-duotone.fa-square-up-left:after,.fad.fa-square-up-left:after{content:\"\\e282\\e282\"}.fa-duotone.fa-overline:after,.fad.fa-overline:after{content:\"\\f876\\f876\"}.fa-duotone.fa-s:after,.fad.fa-s:after{content:\"\\53\\53\"}.fa-duotone.fa-timeline:after,.fad.fa-timeline:after{content:\"\\e29c\\e29c\"}.fa-duotone.fa-keyboard:after,.fad.fa-keyboard:after{content:\"\\f11c\\f11c\"}.fa-duotone.fa-arrows-from-dotted-line:after,.fad.fa-arrows-from-dotted-line:after{content:\"\\e0a3\\e0a3\"}.fa-duotone.fa-usb-drive:after,.fad.fa-usb-drive:after{content:\"\\f8e9\\f8e9\"}.fa-duotone.fa-ballot:after,.fad.fa-ballot:after{content:\"\\f732\\f732\"}.fa-duotone.fa-caret-down:after,.fad.fa-caret-down:after{content:\"\\f0d7\\f0d7\"}.fa-duotone.fa-location-dot-slash:after,.fa-duotone.fa-map-marker-alt-slash:after,.fad.fa-location-dot-slash:after,.fad.fa-map-marker-alt-slash:after{content:\"\\f605\\f605\"}.fa-duotone.fa-cards:after,.fad.fa-cards:after{content:\"\\e3ed\\e3ed\"}.fa-duotone.fa-clinic-medical:after,.fa-duotone.fa-house-chimney-medical:after,.fad.fa-clinic-medical:after,.fad.fa-house-chimney-medical:after{content:\"\\f7f2\\f7f2\"}.fa-duotone.fa-boxing-glove:after,.fa-duotone.fa-glove-boxing:after,.fad.fa-boxing-glove:after,.fad.fa-glove-boxing:after{content:\"\\f438\\f438\"}.fa-duotone.fa-temperature-3:after,.fa-duotone.fa-temperature-three-quarters:after,.fa-duotone.fa-thermometer-3:after,.fa-duotone.fa-thermometer-three-quarters:after,.fad.fa-temperature-3:after,.fad.fa-temperature-three-quarters:after,.fad.fa-thermometer-3:after,.fad.fa-thermometer-three-quarters:after{content:\"\\f2c8\\f2c8\"}.fa-duotone.fa-bell-school:after,.fad.fa-bell-school:after{content:\"\\f5d5\\f5d5\"}.fa-duotone.fa-mobile-android-alt:after,.fa-duotone.fa-mobile-screen:after,.fad.fa-mobile-android-alt:after,.fad.fa-mobile-screen:after{content:\"\\f3cf\\f3cf\"}.fa-duotone.fa-plane-up:after,.fad.fa-plane-up:after{content:\"\\e22d\\e22d\"}.fa-duotone.fa-folder-heart:after,.fad.fa-folder-heart:after{content:\"\\e189\\e189\"}.fa-duotone.fa-circle-location-arrow:after,.fa-duotone.fa-location-circle:after,.fad.fa-circle-location-arrow:after,.fad.fa-location-circle:after{content:\"\\f602\\f602\"}.fa-duotone.fa-face-head-bandage:after,.fad.fa-face-head-bandage:after{content:\"\\e37a\\e37a\"}.fa-duotone.fa-maki-roll:after,.fa-duotone.fa-makizushi:after,.fa-duotone.fa-sushi-roll:after,.fad.fa-maki-roll:after,.fad.fa-makizushi:after,.fad.fa-sushi-roll:after{content:\"\\e48b\\e48b\"}.fa-duotone.fa-car-bump:after,.fad.fa-car-bump:after{content:\"\\f5e0\\f5e0\"}.fa-duotone.fa-piggy-bank:after,.fad.fa-piggy-bank:after{content:\"\\f4d3\\f4d3\"}.fa-duotone.fa-racquet:after,.fad.fa-racquet:after{content:\"\\f45a\\f45a\"}.fa-duotone.fa-car-mirrors:after,.fad.fa-car-mirrors:after{content:\"\\e343\\e343\"}.fa-duotone.fa-industry-alt:after,.fa-duotone.fa-industry-windows:after,.fad.fa-industry-alt:after,.fad.fa-industry-windows:after{content:\"\\f3b3\\f3b3\"}.fa-duotone.fa-bolt-auto:after,.fad.fa-bolt-auto:after{content:\"\\e0b6\\e0b6\"}.fa-duotone.fa-battery-3:after,.fa-duotone.fa-battery-half:after,.fad.fa-battery-3:after,.fad.fa-battery-half:after{content:\"\\f242\\f242\"}.fa-duotone.fa-flux-capacitor:after,.fad.fa-flux-capacitor:after{content:\"\\f8ba\\f8ba\"}.fa-duotone.fa-mountain-city:after,.fad.fa-mountain-city:after{content:\"\\e52e\\e52e\"}.fa-duotone.fa-coins:after,.fad.fa-coins:after{content:\"\\f51e\\f51e\"}.fa-duotone.fa-honey-pot:after,.fad.fa-honey-pot:after{content:\"\\e418\\e418\"}.fa-duotone.fa-olive:after,.fad.fa-olive:after{content:\"\\e316\\e316\"}.fa-duotone.fa-khanda:after,.fad.fa-khanda:after{content:\"\\f66d\\f66d\"}.fa-duotone.fa-filter-list:after,.fad.fa-filter-list:after{content:\"\\e17c\\e17c\"}.fa-duotone.fa-outlet:after,.fad.fa-outlet:after{content:\"\\e01c\\e01c\"}.fa-duotone.fa-sliders-h:after,.fa-duotone.fa-sliders:after,.fad.fa-sliders-h:after,.fad.fa-sliders:after{content:\"\\f1de\\f1de\"}.fa-duotone.fa-cauldron:after,.fad.fa-cauldron:after{content:\"\\f6bf\\f6bf\"}.fa-duotone.fa-people:after,.fad.fa-people:after{content:\"\\e216\\e216\"}.fa-duotone.fa-folder-tree:after,.fad.fa-folder-tree:after{content:\"\\f802\\f802\"}.fa-duotone.fa-network-wired:after,.fad.fa-network-wired:after{content:\"\\f6ff\\f6ff\"}.fa-duotone.fa-croissant:after,.fad.fa-croissant:after{content:\"\\f7f6\\f7f6\"}.fa-duotone.fa-map-pin:after,.fad.fa-map-pin:after{content:\"\\f276\\f276\"}.fa-duotone.fa-hamsa:after,.fad.fa-hamsa:after{content:\"\\f665\\f665\"}.fa-duotone.fa-cent-sign:after,.fad.fa-cent-sign:after{content:\"\\e3f5\\e3f5\"}.fa-duotone.fa-swords-laser:after,.fad.fa-swords-laser:after{content:\"\\e03d\\e03d\"}.fa-duotone.fa-flask:after,.fad.fa-flask:after{content:\"\\f0c3\\f0c3\"}.fa-duotone.fa-person-pregnant:after,.fad.fa-person-pregnant:after{content:\"\\e31e\\e31e\"}.fa-duotone.fa-square-u:after,.fad.fa-square-u:after{content:\"\\e281\\e281\"}.fa-duotone.fa-wand-sparkles:after,.fad.fa-wand-sparkles:after{content:\"\\f72b\\f72b\"}.fa-duotone.fa-router:after,.fad.fa-router:after{content:\"\\f8da\\f8da\"}.fa-duotone.fa-ellipsis-v:after,.fa-duotone.fa-ellipsis-vertical:after,.fad.fa-ellipsis-v:after,.fad.fa-ellipsis-vertical:after{content:\"\\f142\\f142\"}.fa-duotone.fa-sword-laser-alt:after,.fad.fa-sword-laser-alt:after{content:\"\\e03c\\e03c\"}.fa-duotone.fa-ticket:after,.fad.fa-ticket:after{content:\"\\f145\\f145\"}.fa-duotone.fa-power-off:after,.fad.fa-power-off:after{content:\"\\f011\\f011\"}.fa-duotone.fa-coin:after,.fad.fa-coin:after{content:\"\\f85c\\f85c\"}.fa-duotone.fa-laptop-slash:after,.fad.fa-laptop-slash:after{content:\"\\e1c7\\e1c7\"}.fa-duotone.fa-long-arrow-alt-right:after,.fa-duotone.fa-right-long:after,.fad.fa-long-arrow-alt-right:after,.fad.fa-right-long:after{content:\"\\f30b\\f30b\"}.fa-duotone.fa-circle-b:after,.fad.fa-circle-b:after{content:\"\\e0fd\\e0fd\"}.fa-duotone.fa-person-dress-simple:after,.fad.fa-person-dress-simple:after{content:\"\\e21c\\e21c\"}.fa-duotone.fa-pipe-collar:after,.fad.fa-pipe-collar:after{content:\"\\e437\\e437\"}.fa-duotone.fa-lights-holiday:after,.fad.fa-lights-holiday:after{content:\"\\f7b2\\f7b2\"}.fa-duotone.fa-citrus:after,.fad.fa-citrus:after{content:\"\\e2f4\\e2f4\"}.fa-duotone.fa-flag-usa:after,.fad.fa-flag-usa:after{content:\"\\f74d\\f74d\"}.fa-duotone.fa-laptop-file:after,.fad.fa-laptop-file:after{content:\"\\e51d\\e51d\"}.fa-duotone.fa-teletype:after,.fa-duotone.fa-tty:after,.fad.fa-teletype:after,.fad.fa-tty:after{content:\"\\f1e4\\f1e4\"}.fa-duotone.fa-chart-tree-map:after,.fad.fa-chart-tree-map:after{content:\"\\e0ea\\e0ea\"}.fa-duotone.fa-diagram-next:after,.fad.fa-diagram-next:after{content:\"\\e476\\e476\"}.fa-duotone.fa-person-rifle:after,.fad.fa-person-rifle:after{content:\"\\e54e\\e54e\"}.fa-duotone.fa-clock-five-thirty:after,.fad.fa-clock-five-thirty:after{content:\"\\e34a\\e34a\"}.fa-duotone.fa-pipe-valve:after,.fad.fa-pipe-valve:after{content:\"\\e439\\e439\"}.fa-duotone.fa-arrow-up-from-arc:after,.fad.fa-arrow-up-from-arc:after{content:\"\\e4b4\\e4b4\"}.fa-duotone.fa-face-spiral-eyes:after,.fad.fa-face-spiral-eyes:after{content:\"\\e485\\e485\"}.fa-duotone.fa-compress-wide:after,.fad.fa-compress-wide:after{content:\"\\f326\\f326\"}.fa-duotone.fa-circle-phone-hangup:after,.fa-duotone.fa-phone-circle-down:after,.fad.fa-circle-phone-hangup:after,.fad.fa-phone-circle-down:after{content:\"\\e11d\\e11d\"}.fa-duotone.fa-house-medical-circle-exclamation:after,.fad.fa-house-medical-circle-exclamation:after{content:\"\\e512\\e512\"}.fa-duotone.fa-badminton:after,.fad.fa-badminton:after{content:\"\\e33a\\e33a\"}.fa-duotone.fa-closed-captioning:after,.fad.fa-closed-captioning:after{content:\"\\f20a\\f20a\"}.fa-duotone.fa-hiking:after,.fa-duotone.fa-person-hiking:after,.fad.fa-hiking:after,.fad.fa-person-hiking:after{content:\"\\f6ec\\f6ec\"}.fa-duotone.fa-arrow-alt-from-left:after,.fa-duotone.fa-right-from-line:after,.fad.fa-arrow-alt-from-left:after,.fad.fa-right-from-line:after{content:\"\\f347\\f347\"}.fa-duotone.fa-venus-double:after,.fad.fa-venus-double:after{content:\"\\f226\\f226\"}.fa-duotone.fa-images:after,.fad.fa-images:after{content:\"\\f302\\f302\"}.fa-duotone.fa-calculator:after,.fad.fa-calculator:after{content:\"\\f1ec\\f1ec\"}.fa-duotone.fa-shuttlecock:after,.fad.fa-shuttlecock:after{content:\"\\f45b\\f45b\"}.fa-duotone.fa-user-hair:after,.fad.fa-user-hair:after{content:\"\\e45a\\e45a\"}.fa-duotone.fa-eye-evil:after,.fad.fa-eye-evil:after{content:\"\\f6db\\f6db\"}.fa-duotone.fa-people-pulling:after,.fad.fa-people-pulling:after{content:\"\\e535\\e535\"}.fa-duotone.fa-n:after,.fad.fa-n:after{content:\"\\4e\\4e\"}.fa-duotone.fa-garage:after,.fad.fa-garage:after{content:\"\\e009\\e009\"}.fa-duotone.fa-cable-car:after,.fa-duotone.fa-tram:after,.fad.fa-cable-car:after,.fad.fa-tram:after{content:\"\\f7da\\f7da\"}.fa-duotone.fa-shovel-snow:after,.fad.fa-shovel-snow:after{content:\"\\f7c3\\f7c3\"}.fa-duotone.fa-cloud-rain:after,.fad.fa-cloud-rain:after{content:\"\\f73d\\f73d\"}.fa-duotone.fa-face-lying:after,.fad.fa-face-lying:after{content:\"\\e37e\\e37e\"}.fa-duotone.fa-sprinkler:after,.fad.fa-sprinkler:after{content:\"\\e035\\e035\"}.fa-duotone.fa-building-circle-xmark:after,.fad.fa-building-circle-xmark:after{content:\"\\e4d4\\e4d4\"}.fa-duotone.fa-person-sledding:after,.fa-duotone.fa-sledding:after,.fad.fa-person-sledding:after,.fad.fa-sledding:after{content:\"\\f7cb\\f7cb\"}.fa-duotone.fa-game-console-handheld:after,.fad.fa-game-console-handheld:after{content:\"\\f8bb\\f8bb\"}.fa-duotone.fa-ship:after,.fad.fa-ship:after{content:\"\\f21a\\f21a\"}.fa-duotone.fa-clock-six-thirty:after,.fad.fa-clock-six-thirty:after{content:\"\\e353\\e353\"}.fa-duotone.fa-battery-slash:after,.fad.fa-battery-slash:after{content:\"\\f377\\f377\"}.fa-duotone.fa-tugrik-sign:after,.fad.fa-tugrik-sign:after{content:\"\\e2ba\\e2ba\"}.fa-duotone.fa-arrows-down-to-line:after,.fad.fa-arrows-down-to-line:after{content:\"\\e4b8\\e4b8\"}.fa-duotone.fa-download:after,.fad.fa-download:after{content:\"\\f019\\f019\"}.fa-duotone.fa-inventory:after,.fa-duotone.fa-shelves:after,.fad.fa-inventory:after,.fad.fa-shelves:after{content:\"\\f480\\f480\"}.fa-duotone.fa-cloud-snow:after,.fad.fa-cloud-snow:after{content:\"\\f742\\f742\"}.fa-duotone.fa-face-grin:after,.fa-duotone.fa-grin:after,.fad.fa-face-grin:after,.fad.fa-grin:after{content:\"\\f580\\f580\"}.fa-duotone.fa-backspace:after,.fa-duotone.fa-delete-left:after,.fad.fa-backspace:after,.fad.fa-delete-left:after{content:\"\\f55a\\f55a\"}.fa-duotone.fa-oven:after,.fad.fa-oven:after{content:\"\\e01d\\e01d\"}.fa-duotone.fa-eye-dropper-empty:after,.fa-duotone.fa-eye-dropper:after,.fa-duotone.fa-eyedropper:after,.fad.fa-eye-dropper-empty:after,.fad.fa-eye-dropper:after,.fad.fa-eyedropper:after{content:\"\\f1fb\\f1fb\"}.fa-duotone.fa-comment-captions:after,.fad.fa-comment-captions:after{content:\"\\e146\\e146\"}.fa-duotone.fa-comments-question:after,.fad.fa-comments-question:after{content:\"\\e14e\\e14e\"}.fa-duotone.fa-scribble:after,.fad.fa-scribble:after{content:\"\\e23f\\e23f\"}.fa-duotone.fa-rotate-exclamation:after,.fad.fa-rotate-exclamation:after{content:\"\\e23c\\e23c\"}.fa-duotone.fa-file-circle-check:after,.fad.fa-file-circle-check:after{content:\"\\e5a0\\e5a0\"}.fa-duotone.fa-glass:after,.fad.fa-glass:after{content:\"\\f804\\f804\"}.fa-duotone.fa-loader:after,.fad.fa-loader:after{content:\"\\e1d4\\e1d4\"}.fa-duotone.fa-forward:after,.fad.fa-forward:after{content:\"\\f04e\\f04e\"}.fa-duotone.fa-user-pilot:after,.fad.fa-user-pilot:after{content:\"\\e2c0\\e2c0\"}.fa-duotone.fa-mobile-android:after,.fa-duotone.fa-mobile-phone:after,.fa-duotone.fa-mobile:after,.fad.fa-mobile-android:after,.fad.fa-mobile-phone:after,.fad.fa-mobile:after{content:\"\\f3ce\\f3ce\"}.fa-duotone.fa-code-pull-request-closed:after,.fad.fa-code-pull-request-closed:after{content:\"\\e3f9\\e3f9\"}.fa-duotone.fa-face-meh:after,.fa-duotone.fa-meh:after,.fad.fa-face-meh:after,.fad.fa-meh:after{content:\"\\f11a\\f11a\"}.fa-duotone.fa-align-center:after,.fad.fa-align-center:after{content:\"\\f037\\f037\"}.fa-duotone.fa-book-dead:after,.fa-duotone.fa-book-skull:after,.fad.fa-book-dead:after,.fad.fa-book-skull:after{content:\"\\f6b7\\f6b7\"}.fa-duotone.fa-drivers-license:after,.fa-duotone.fa-id-card:after,.fad.fa-drivers-license:after,.fad.fa-id-card:after{content:\"\\f2c2\\f2c2\"}.fa-duotone.fa-face-dotted:after,.fad.fa-face-dotted:after{content:\"\\e47f\\e47f\"}.fa-duotone.fa-face-worried:after,.fad.fa-face-worried:after{content:\"\\e3a3\\e3a3\"}.fa-duotone.fa-dedent:after,.fa-duotone.fa-outdent:after,.fad.fa-dedent:after,.fad.fa-outdent:after{content:\"\\f03b\\f03b\"}.fa-duotone.fa-heart-circle-exclamation:after,.fad.fa-heart-circle-exclamation:after{content:\"\\e4fe\\e4fe\"}.fa-duotone.fa-home-alt:after,.fa-duotone.fa-home-lg-alt:after,.fa-duotone.fa-home:after,.fa-duotone.fa-house:after,.fad.fa-home-alt:after,.fad.fa-home-lg-alt:after,.fad.fa-home:after,.fad.fa-house:after{content:\"\\f015\\f015\"}.fa-duotone.fa-vector-circle:after,.fad.fa-vector-circle:after{content:\"\\e2c6\\e2c6\"}.fa-duotone.fa-car-circle-bolt:after,.fad.fa-car-circle-bolt:after{content:\"\\e342\\e342\"}.fa-duotone.fa-calendar-week:after,.fad.fa-calendar-week:after{content:\"\\f784\\f784\"}.fa-duotone.fa-flying-disc:after,.fad.fa-flying-disc:after{content:\"\\e3a9\\e3a9\"}.fa-duotone.fa-laptop-medical:after,.fad.fa-laptop-medical:after{content:\"\\f812\\f812\"}.fa-duotone.fa-square-down-right:after,.fad.fa-square-down-right:after{content:\"\\e26c\\e26c\"}.fa-duotone.fa-b:after,.fad.fa-b:after{content:\"\\42\\42\"}.fa-duotone.fa-seat-airline:after,.fad.fa-seat-airline:after{content:\"\\e244\\e244\"}.fa-duotone.fa-eclipse-alt:after,.fa-duotone.fa-moon-over-sun:after,.fad.fa-eclipse-alt:after,.fad.fa-moon-over-sun:after{content:\"\\f74a\\f74a\"}.fa-duotone.fa-pipe:after,.fad.fa-pipe:after{content:\"\\7c\\7c\"}.fa-duotone.fa-file-medical:after,.fad.fa-file-medical:after{content:\"\\f477\\f477\"}.fa-duotone.fa-potato:after,.fad.fa-potato:after{content:\"\\e440\\e440\"}.fa-duotone.fa-dice-one:after,.fad.fa-dice-one:after{content:\"\\f525\\f525\"}.fa-duotone.fa-circle-a:after,.fad.fa-circle-a:after{content:\"\\e0f7\\e0f7\"}.fa-duotone.fa-helmet-battle:after,.fad.fa-helmet-battle:after{content:\"\\f6eb\\f6eb\"}.fa-duotone.fa-butter:after,.fad.fa-butter:after{content:\"\\e3e4\\e3e4\"}.fa-duotone.fa-blanket-fire:after,.fad.fa-blanket-fire:after{content:\"\\e3da\\e3da\"}.fa-duotone.fa-kiwi-bird:after,.fad.fa-kiwi-bird:after{content:\"\\f535\\f535\"}.fa-duotone.fa-castle:after,.fad.fa-castle:after{content:\"\\e0de\\e0de\"}.fa-duotone.fa-golf-club:after,.fad.fa-golf-club:after{content:\"\\f451\\f451\"}.fa-duotone.fa-arrow-right-arrow-left:after,.fa-duotone.fa-exchange:after,.fad.fa-arrow-right-arrow-left:after,.fad.fa-exchange:after{content:\"\\f0ec\\f0ec\"}.fa-duotone.fa-redo-alt:after,.fa-duotone.fa-rotate-forward:after,.fa-duotone.fa-rotate-right:after,.fad.fa-redo-alt:after,.fad.fa-rotate-forward:after,.fad.fa-rotate-right:after{content:\"\\f2f9\\f2f9\"}.fa-duotone.fa-cutlery:after,.fa-duotone.fa-utensils:after,.fad.fa-cutlery:after,.fad.fa-utensils:after{content:\"\\f2e7\\f2e7\"}.fa-duotone.fa-arrow-up-wide-short:after,.fa-duotone.fa-sort-amount-up:after,.fad.fa-arrow-up-wide-short:after,.fad.fa-sort-amount-up:after{content:\"\\f161\\f161\"}.fa-duotone.fa-balloons:after,.fad.fa-balloons:after{content:\"\\e2e4\\e2e4\"}.fa-duotone.fa-mill-sign:after,.fad.fa-mill-sign:after{content:\"\\e1ed\\e1ed\"}.fa-duotone.fa-bowl-rice:after,.fad.fa-bowl-rice:after{content:\"\\e2eb\\e2eb\"}.fa-duotone.fa-timeline-arrow:after,.fad.fa-timeline-arrow:after{content:\"\\e29d\\e29d\"}.fa-duotone.fa-skull:after,.fad.fa-skull:after{content:\"\\f54c\\f54c\"}.fa-duotone.fa-game-board-alt:after,.fa-duotone.fa-game-board-simple:after,.fad.fa-game-board-alt:after,.fad.fa-game-board-simple:after{content:\"\\f868\\f868\"}.fa-duotone.fa-circle-video:after,.fa-duotone.fa-video-circle:after,.fad.fa-circle-video:after,.fad.fa-video-circle:after{content:\"\\e12b\\e12b\"}.fa-duotone.fa-chart-scatter-bubble:after,.fad.fa-chart-scatter-bubble:after{content:\"\\e0e9\\e0e9\"}.fa-duotone.fa-house-turret:after,.fad.fa-house-turret:after{content:\"\\e1b4\\e1b4\"}.fa-duotone.fa-banana:after,.fad.fa-banana:after{content:\"\\e2e5\\e2e5\"}.fa-duotone.fa-hand-holding-skull:after,.fad.fa-hand-holding-skull:after{content:\"\\e1a4\\e1a4\"}.fa-duotone.fa-people-dress:after,.fad.fa-people-dress:after{content:\"\\e217\\e217\"}.fa-duotone.fa-couch-small:after,.fa-duotone.fa-loveseat:after,.fad.fa-couch-small:after,.fad.fa-loveseat:after{content:\"\\f4cc\\f4cc\"}.fa-duotone.fa-broadcast-tower:after,.fa-duotone.fa-tower-broadcast:after,.fad.fa-broadcast-tower:after,.fad.fa-tower-broadcast:after{content:\"\\f519\\f519\"}.fa-duotone.fa-truck-pickup:after,.fad.fa-truck-pickup:after{content:\"\\f63c\\f63c\"}.fa-duotone.fa-block-quote:after,.fad.fa-block-quote:after{content:\"\\e0b5\\e0b5\"}.fa-duotone.fa-long-arrow-alt-up:after,.fa-duotone.fa-up-long:after,.fad.fa-long-arrow-alt-up:after,.fad.fa-up-long:after{content:\"\\f30c\\f30c\"}.fa-duotone.fa-stop:after,.fad.fa-stop:after{content:\"\\f04d\\f04d\"}.fa-duotone.fa-code-merge:after,.fad.fa-code-merge:after{content:\"\\f387\\f387\"}.fa-duotone.fa-money-check-dollar-pen:after,.fa-duotone.fa-money-check-edit-alt:after,.fad.fa-money-check-dollar-pen:after,.fad.fa-money-check-edit-alt:after{content:\"\\f873\\f873\"}.fa-duotone.fa-arrow-alt-from-bottom:after,.fa-duotone.fa-up-from-line:after,.fad.fa-arrow-alt-from-bottom:after,.fad.fa-up-from-line:after{content:\"\\f346\\f346\"}.fa-duotone.fa-upload:after,.fad.fa-upload:after{content:\"\\f093\\f093\"}.fa-duotone.fa-hurricane:after,.fad.fa-hurricane:after{content:\"\\f751\\f751\"}.fa-duotone.fa-people-pants:after,.fad.fa-people-pants:after{content:\"\\e219\\e219\"}.fa-duotone.fa-mound:after,.fad.fa-mound:after{content:\"\\e52d\\e52d\"}.fa-duotone.fa-windsock:after,.fad.fa-windsock:after{content:\"\\f777\\f777\"}.fa-duotone.fa-circle-half:after,.fad.fa-circle-half:after{content:\"\\e110\\e110\"}.fa-duotone.fa-brake-warning:after,.fad.fa-brake-warning:after{content:\"\\e0c7\\e0c7\"}.fa-duotone.fa-toilet-portable:after,.fad.fa-toilet-portable:after{content:\"\\e583\\e583\"}.fa-duotone.fa-compact-disc:after,.fad.fa-compact-disc:after{content:\"\\f51f\\f51f\"}.fa-duotone.fa-file-arrow-down:after,.fa-duotone.fa-file-download:after,.fad.fa-file-arrow-down:after,.fad.fa-file-download:after{content:\"\\f56d\\f56d\"}.fa-duotone.fa-sax-hot:after,.fa-duotone.fa-saxophone-fire:after,.fad.fa-sax-hot:after,.fad.fa-saxophone-fire:after{content:\"\\f8db\\f8db\"}.fa-duotone.fa-camera-web-slash:after,.fa-duotone.fa-webcam-slash:after,.fad.fa-camera-web-slash:after,.fad.fa-webcam-slash:after{content:\"\\f833\\f833\"}.fa-duotone.fa-folder-medical:after,.fad.fa-folder-medical:after{content:\"\\e18c\\e18c\"}.fa-duotone.fa-folder-cog:after,.fa-duotone.fa-folder-gear:after,.fad.fa-folder-cog:after,.fad.fa-folder-gear:after{content:\"\\e187\\e187\"}.fa-duotone.fa-hand-wave:after,.fad.fa-hand-wave:after{content:\"\\e1a7\\e1a7\"}.fa-duotone.fa-arrow-up-arrow-down:after,.fa-duotone.fa-sort-up-down:after,.fad.fa-arrow-up-arrow-down:after,.fad.fa-sort-up-down:after{content:\"\\e099\\e099\"}.fa-duotone.fa-caravan:after,.fad.fa-caravan:after{content:\"\\f8ff\\f8ff\"}.fa-duotone.fa-shield-cat:after,.fad.fa-shield-cat:after{content:\"\\e572\\e572\"}.fa-duotone.fa-comment-alt-slash:after,.fa-duotone.fa-message-slash:after,.fad.fa-comment-alt-slash:after,.fad.fa-message-slash:after{content:\"\\f4a9\\f4a9\"}.fa-duotone.fa-bolt:after,.fa-duotone.fa-zap:after,.fad.fa-bolt:after,.fad.fa-zap:after{content:\"\\f0e7\\f0e7\"}.fa-duotone.fa-trash-can-check:after,.fad.fa-trash-can-check:after{content:\"\\e2a9\\e2a9\"}.fa-duotone.fa-glass-water:after,.fad.fa-glass-water:after{content:\"\\e4f4\\e4f4\"}.fa-duotone.fa-oil-well:after,.fad.fa-oil-well:after{content:\"\\e532\\e532\"}.fa-duotone.fa-person-simple:after,.fad.fa-person-simple:after{content:\"\\e220\\e220\"}.fa-duotone.fa-vault:after,.fad.fa-vault:after{content:\"\\e2c5\\e2c5\"}.fa-duotone.fa-mars:after,.fad.fa-mars:after{content:\"\\f222\\f222\"}.fa-duotone.fa-toilet:after,.fad.fa-toilet:after{content:\"\\f7d8\\f7d8\"}.fa-duotone.fa-plane-circle-xmark:after,.fad.fa-plane-circle-xmark:after{content:\"\\e557\\e557\"}.fa-duotone.fa-cny:after,.fa-duotone.fa-jpy:after,.fa-duotone.fa-rmb:after,.fa-duotone.fa-yen-sign:after,.fa-duotone.fa-yen:after,.fad.fa-cny:after,.fad.fa-jpy:after,.fad.fa-rmb:after,.fad.fa-yen-sign:after,.fad.fa-yen:after{content:\"\\f157\\f157\"}.fa-duotone.fa-notes:after,.fad.fa-notes:after{content:\"\\e202\\e202\"}.fa-duotone.fa-rouble:after,.fa-duotone.fa-rub:after,.fa-duotone.fa-ruble-sign:after,.fa-duotone.fa-ruble:after,.fad.fa-rouble:after,.fad.fa-rub:after,.fad.fa-ruble-sign:after,.fad.fa-ruble:after{content:\"\\f158\\f158\"}.fa-duotone.fa-trash-arrow-turn-left:after,.fa-duotone.fa-trash-undo:after,.fad.fa-trash-arrow-turn-left:after,.fad.fa-trash-undo:after{content:\"\\f895\\f895\"}.fa-duotone.fa-champagne-glass:after,.fa-duotone.fa-glass-champagne:after,.fad.fa-champagne-glass:after,.fad.fa-glass-champagne:after{content:\"\\f79e\\f79e\"}.fa-duotone.fa-objects-align-center-horizontal:after,.fad.fa-objects-align-center-horizontal:after{content:\"\\e3bc\\e3bc\"}.fa-duotone.fa-sun:after,.fad.fa-sun:after{content:\"\\f185\\f185\"}.fa-duotone.fa-trash-alt-slash:after,.fa-duotone.fa-trash-can-slash:after,.fad.fa-trash-alt-slash:after,.fad.fa-trash-can-slash:after{content:\"\\e2ad\\e2ad\"}.fa-duotone.fa-screen-users:after,.fa-duotone.fa-users-class:after,.fad.fa-screen-users:after,.fad.fa-users-class:after{content:\"\\f63d\\f63d\"}.fa-duotone.fa-guitar:after,.fad.fa-guitar:after{content:\"\\f7a6\\f7a6\"}.fa-duotone.fa-arrow-square-left:after,.fa-duotone.fa-square-arrow-left:after,.fad.fa-arrow-square-left:after,.fad.fa-square-arrow-left:after{content:\"\\f33a\\f33a\"}.fa-duotone.fa-square-8:after,.fad.fa-square-8:after{content:\"\\e25d\\e25d\"}.fa-duotone.fa-face-smile-hearts:after,.fad.fa-face-smile-hearts:after{content:\"\\e390\\e390\"}.fa-duotone.fa-brackets-square:after,.fa-duotone.fa-brackets:after,.fad.fa-brackets-square:after,.fad.fa-brackets:after{content:\"\\f7e9\\f7e9\"}.fa-duotone.fa-laptop-arrow-down:after,.fad.fa-laptop-arrow-down:after{content:\"\\e1c6\\e1c6\"}.fa-duotone.fa-hockey-stick-puck:after,.fad.fa-hockey-stick-puck:after{content:\"\\e3ae\\e3ae\"}.fa-duotone.fa-house-tree:after,.fad.fa-house-tree:after{content:\"\\e1b3\\e1b3\"}.fa-duotone.fa-signal-2:after,.fa-duotone.fa-signal-fair:after,.fad.fa-signal-2:after,.fad.fa-signal-fair:after{content:\"\\f68d\\f68d\"}.fa-duotone.fa-face-laugh-wink:after,.fa-duotone.fa-laugh-wink:after,.fad.fa-face-laugh-wink:after,.fad.fa-laugh-wink:after{content:\"\\f59c\\f59c\"}.fa-duotone.fa-circle-dollar:after,.fa-duotone.fa-dollar-circle:after,.fa-duotone.fa-usd-circle:after,.fad.fa-circle-dollar:after,.fad.fa-dollar-circle:after,.fad.fa-usd-circle:after{content:\"\\f2e8\\f2e8\"}.fa-duotone.fa-horse-head:after,.fad.fa-horse-head:after{content:\"\\f7ab\\f7ab\"}.fa-duotone.fa-arrows-repeat:after,.fa-duotone.fa-repeat-alt:after,.fad.fa-arrows-repeat:after,.fad.fa-repeat-alt:after{content:\"\\f364\\f364\"}.fa-duotone.fa-bore-hole:after,.fad.fa-bore-hole:after{content:\"\\e4c3\\e4c3\"}.fa-duotone.fa-industry:after,.fad.fa-industry:after{content:\"\\f275\\f275\"}.fa-duotone.fa-image-polaroid:after,.fad.fa-image-polaroid:after{content:\"\\f8c4\\f8c4\"}.fa-duotone.fa-wave-triangle:after,.fad.fa-wave-triangle:after{content:\"\\f89a\\f89a\"}.fa-duotone.fa-arrow-alt-circle-down:after,.fa-duotone.fa-circle-down:after,.fad.fa-arrow-alt-circle-down:after,.fad.fa-circle-down:after{content:\"\\f358\\f358\"}.fa-duotone.fa-grill:after,.fad.fa-grill:after{content:\"\\e5a3\\e5a3\"}.fa-duotone.fa-arrows-turn-to-dots:after,.fad.fa-arrows-turn-to-dots:after{content:\"\\e4c1\\e4c1\"}.fa-duotone.fa-analytics:after,.fa-duotone.fa-chart-mixed:after,.fad.fa-analytics:after,.fad.fa-chart-mixed:after{content:\"\\f643\\f643\"}.fa-duotone.fa-florin-sign:after,.fad.fa-florin-sign:after{content:\"\\e184\\e184\"}.fa-duotone.fa-arrow-down-short-wide:after,.fa-duotone.fa-sort-amount-desc:after,.fa-duotone.fa-sort-amount-down-alt:after,.fad.fa-arrow-down-short-wide:after,.fad.fa-sort-amount-desc:after,.fad.fa-sort-amount-down-alt:after{content:\"\\f884\\f884\"}.fa-duotone.fa-less-than:after,.fad.fa-less-than:after{content:\"\\3c\\3c\"}.fa-duotone.fa-desktop-code:after,.fa-duotone.fa-display-code:after,.fad.fa-desktop-code:after,.fad.fa-display-code:after{content:\"\\e165\\e165\"}.fa-duotone.fa-face-drooling:after,.fad.fa-face-drooling:after{content:\"\\e372\\e372\"}.fa-duotone.fa-oil-temp:after,.fa-duotone.fa-oil-temperature:after,.fad.fa-oil-temp:after,.fad.fa-oil-temperature:after{content:\"\\f614\\f614\"}.fa-duotone.fa-question-square:after,.fa-duotone.fa-square-question:after,.fad.fa-question-square:after,.fad.fa-square-question:after{content:\"\\f2fd\\f2fd\"}.fa-duotone.fa-air-conditioner:after,.fad.fa-air-conditioner:after{content:\"\\f8f4\\f8f4\"}.fa-duotone.fa-angle-down:after,.fad.fa-angle-down:after{content:\"\\f107\\f107\"}.fa-duotone.fa-mountains:after,.fad.fa-mountains:after{content:\"\\f6fd\\f6fd\"}.fa-duotone.fa-omega:after,.fad.fa-omega:after{content:\"\\f67a\\f67a\"}.fa-duotone.fa-car-tunnel:after,.fad.fa-car-tunnel:after{content:\"\\e4de\\e4de\"}.fa-duotone.fa-person-dolly-empty:after,.fad.fa-person-dolly-empty:after{content:\"\\f4d1\\f4d1\"}.fa-duotone.fa-pan-food:after,.fad.fa-pan-food:after{content:\"\\e42b\\e42b\"}.fa-duotone.fa-head-side-cough:after,.fad.fa-head-side-cough:after{content:\"\\e061\\e061\"}.fa-duotone.fa-grip-lines:after,.fad.fa-grip-lines:after{content:\"\\f7a4\\f7a4\"}.fa-duotone.fa-thumbs-down:after,.fad.fa-thumbs-down:after{content:\"\\f165\\f165\"}.fa-duotone.fa-user-lock:after,.fad.fa-user-lock:after{content:\"\\f502\\f502\"}.fa-duotone.fa-arrow-right-long:after,.fa-duotone.fa-long-arrow-right:after,.fad.fa-arrow-right-long:after,.fad.fa-long-arrow-right:after{content:\"\\f178\\f178\"}.fa-duotone.fa-tickets-airline:after,.fad.fa-tickets-airline:after{content:\"\\e29b\\e29b\"}.fa-duotone.fa-anchor-circle-xmark:after,.fad.fa-anchor-circle-xmark:after{content:\"\\e4ac\\e4ac\"}.fa-duotone.fa-ellipsis-h:after,.fa-duotone.fa-ellipsis:after,.fad.fa-ellipsis-h:after,.fad.fa-ellipsis:after{content:\"\\f141\\f141\"}.fa-duotone.fa-nfc-slash:after,.fad.fa-nfc-slash:after{content:\"\\e1fc\\e1fc\"}.fa-duotone.fa-chess-pawn:after,.fad.fa-chess-pawn:after{content:\"\\f443\\f443\"}.fa-duotone.fa-first-aid:after,.fa-duotone.fa-kit-medical:after,.fad.fa-first-aid:after,.fad.fa-kit-medical:after{content:\"\\f479\\f479\"}.fa-duotone.fa-grid-2-plus:after,.fad.fa-grid-2-plus:after{content:\"\\e197\\e197\"}.fa-duotone.fa-bells:after,.fad.fa-bells:after{content:\"\\f77f\\f77f\"}.fa-duotone.fa-person-through-window:after,.fad.fa-person-through-window:after{content:\"\\e5a9\\e5a9\"}.fa-duotone.fa-toolbox:after,.fad.fa-toolbox:after{content:\"\\f552\\f552\"}.fa-duotone.fa-envelope-badge:after,.fa-duotone.fa-envelope-dot:after,.fad.fa-envelope-badge:after,.fad.fa-envelope-dot:after{content:\"\\e16f\\e16f\"}.fa-duotone.fa-hands-holding-circle:after,.fad.fa-hands-holding-circle:after{content:\"\\e4fb\\e4fb\"}.fa-duotone.fa-bug:after,.fad.fa-bug:after{content:\"\\f188\\f188\"}.fa-duotone.fa-bowl-chopsticks:after,.fad.fa-bowl-chopsticks:after{content:\"\\e2e9\\e2e9\"}.fa-duotone.fa-credit-card-alt:after,.fa-duotone.fa-credit-card:after,.fad.fa-credit-card-alt:after,.fad.fa-credit-card:after{content:\"\\f09d\\f09d\"}.fa-duotone.fa-circle-s:after,.fad.fa-circle-s:after{content:\"\\e121\\e121\"}.fa-duotone.fa-box-ballot:after,.fad.fa-box-ballot:after{content:\"\\f735\\f735\"}.fa-duotone.fa-automobile:after,.fa-duotone.fa-car:after,.fad.fa-automobile:after,.fad.fa-car:after{content:\"\\f1b9\\f1b9\"}.fa-duotone.fa-hand-holding-hand:after,.fad.fa-hand-holding-hand:after{content:\"\\e4f7\\e4f7\"}.fa-duotone.fa-user-tie-hair:after,.fad.fa-user-tie-hair:after{content:\"\\e45f\\e45f\"}.fa-duotone.fa-podium-star:after,.fad.fa-podium-star:after{content:\"\\f758\\f758\"}.fa-duotone.fa-business-front:after,.fa-duotone.fa-party-back:after,.fa-duotone.fa-trian-balbot:after,.fa-duotone.fa-user-hair-mullet:after,.fad.fa-business-front:after,.fad.fa-party-back:after,.fad.fa-trian-balbot:after,.fad.fa-user-hair-mullet:after{content:\"\\e45c\\e45c\"}.fa-duotone.fa-microphone-stand:after,.fad.fa-microphone-stand:after{content:\"\\f8cb\\f8cb\"}.fa-duotone.fa-book-open-reader:after,.fa-duotone.fa-book-reader:after,.fad.fa-book-open-reader:after,.fad.fa-book-reader:after{content:\"\\f5da\\f5da\"}.fa-duotone.fa-family-dress:after,.fad.fa-family-dress:after{content:\"\\e301\\e301\"}.fa-duotone.fa-circle-x:after,.fad.fa-circle-x:after{content:\"\\e12e\\e12e\"}.fa-duotone.fa-cabin:after,.fad.fa-cabin:after{content:\"\\e46d\\e46d\"}.fa-duotone.fa-mountain-sun:after,.fad.fa-mountain-sun:after{content:\"\\e52f\\e52f\"}.fa-duotone.fa-chart-simple-horizontal:after,.fad.fa-chart-simple-horizontal:after{content:\"\\e474\\e474\"}.fa-duotone.fa-arrows-left-right-to-line:after,.fad.fa-arrows-left-right-to-line:after{content:\"\\e4ba\\e4ba\"}.fa-duotone.fa-hand-back-point-left:after,.fad.fa-hand-back-point-left:after{content:\"\\e19f\\e19f\"}.fa-duotone.fa-comment-alt-dots:after,.fa-duotone.fa-message-dots:after,.fa-duotone.fa-messaging:after,.fad.fa-comment-alt-dots:after,.fad.fa-message-dots:after,.fad.fa-messaging:after{content:\"\\f4a3\\f4a3\"}.fa-duotone.fa-file-heart:after,.fad.fa-file-heart:after{content:\"\\e176\\e176\"}.fa-duotone.fa-beer-foam:after,.fa-duotone.fa-beer-mug:after,.fad.fa-beer-foam:after,.fad.fa-beer-mug:after{content:\"\\e0b3\\e0b3\"}.fa-duotone.fa-dice-d20:after,.fad.fa-dice-d20:after{content:\"\\f6cf\\f6cf\"}.fa-duotone.fa-drone:after,.fad.fa-drone:after{content:\"\\f85f\\f85f\"}.fa-duotone.fa-truck-droplet:after,.fad.fa-truck-droplet:after{content:\"\\e58c\\e58c\"}.fa-duotone.fa-file-circle-xmark:after,.fad.fa-file-circle-xmark:after{content:\"\\e5a1\\e5a1\"}.fa-duotone.fa-temperature-arrow-up:after,.fa-duotone.fa-temperature-up:after,.fad.fa-temperature-arrow-up:after,.fad.fa-temperature-up:after{content:\"\\e040\\e040\"}.fa-duotone.fa-medal:after,.fad.fa-medal:after{content:\"\\f5a2\\f5a2\"}.fa-duotone.fa-bed:after,.fad.fa-bed:after{content:\"\\f236\\f236\"}.fa-duotone.fa-book-copy:after,.fad.fa-book-copy:after{content:\"\\e0be\\e0be\"}.fa-duotone.fa-h-square:after,.fa-duotone.fa-square-h:after,.fad.fa-h-square:after,.fad.fa-square-h:after{content:\"\\f0fd\\f0fd\"}.fa-duotone.fa-square-c:after,.fad.fa-square-c:after{content:\"\\e266\\e266\"}.fa-duotone.fa-clock-two:after,.fad.fa-clock-two:after{content:\"\\e35a\\e35a\"}.fa-duotone.fa-square-ellipsis-vertical:after,.fad.fa-square-ellipsis-vertical:after{content:\"\\e26f\\e26f\"}.fa-duotone.fa-podcast:after,.fad.fa-podcast:after{content:\"\\f2ce\\f2ce\"}.fa-duotone.fa-bee:after,.fad.fa-bee:after{content:\"\\e0b2\\e0b2\"}.fa-duotone.fa-temperature-4:after,.fa-duotone.fa-temperature-full:after,.fa-duotone.fa-thermometer-4:after,.fa-duotone.fa-thermometer-full:after,.fad.fa-temperature-4:after,.fad.fa-temperature-full:after,.fad.fa-thermometer-4:after,.fad.fa-thermometer-full:after{content:\"\\f2c7\\f2c7\"}.fa-duotone.fa-bell:after,.fad.fa-bell:after{content:\"\\f0f3\\f0f3\"}.fa-duotone.fa-candy-bar:after,.fa-duotone.fa-chocolate-bar:after,.fad.fa-candy-bar:after,.fad.fa-chocolate-bar:after{content:\"\\e3e8\\e3e8\"}.fa-duotone.fa-xmark-large:after,.fad.fa-xmark-large:after{content:\"\\e59b\\e59b\"}.fa-duotone.fa-pinata:after,.fad.fa-pinata:after{content:\"\\e3c3\\e3c3\"}.fa-duotone.fa-arrows-from-line:after,.fad.fa-arrows-from-line:after{content:\"\\e0a4\\e0a4\"}.fa-duotone.fa-superscript:after,.fad.fa-superscript:after{content:\"\\f12b\\f12b\"}.fa-duotone.fa-bowl-spoon:after,.fad.fa-bowl-spoon:after{content:\"\\e3e0\\e3e0\"}.fa-duotone.fa-hexagon-check:after,.fad.fa-hexagon-check:after{content:\"\\e416\\e416\"}.fa-duotone.fa-plug-circle-xmark:after,.fad.fa-plug-circle-xmark:after{content:\"\\e560\\e560\"}.fa-duotone.fa-star-of-life:after,.fad.fa-star-of-life:after{content:\"\\f621\\f621\"}.fa-duotone.fa-phone-slash:after,.fad.fa-phone-slash:after{content:\"\\f3dd\\f3dd\"}.fa-duotone.fa-traffic-light-stop:after,.fad.fa-traffic-light-stop:after{content:\"\\f63a\\f63a\"}.fa-duotone.fa-paint-roller:after,.fad.fa-paint-roller:after{content:\"\\f5aa\\f5aa\"}.fa-duotone.fa-accent-grave:after,.fad.fa-accent-grave:after{content:\"\\60\\60\"}.fa-duotone.fa-hands-helping:after,.fa-duotone.fa-handshake-angle:after,.fad.fa-hands-helping:after,.fad.fa-handshake-angle:after{content:\"\\f4c4\\f4c4\"}.fa-duotone.fa-circle-0:after,.fad.fa-circle-0:after{content:\"\\e0ed\\e0ed\"}.fa-duotone.fa-dial-med-low:after,.fad.fa-dial-med-low:after{content:\"\\e160\\e160\"}.fa-duotone.fa-location-dot:after,.fa-duotone.fa-map-marker-alt:after,.fad.fa-location-dot:after,.fad.fa-map-marker-alt:after{content:\"\\f3c5\\f3c5\"}.fa-duotone.fa-crab:after,.fad.fa-crab:after{content:\"\\e3ff\\e3ff\"}.fa-duotone.fa-box-full:after,.fa-duotone.fa-box-open-full:after,.fad.fa-box-full:after,.fad.fa-box-open-full:after{content:\"\\f49c\\f49c\"}.fa-duotone.fa-file:after,.fad.fa-file:after{content:\"\\f15b\\f15b\"}.fa-duotone.fa-greater-than:after,.fad.fa-greater-than:after{content:\"\\3e\\3e\"}.fa-duotone.fa-quotes:after,.fad.fa-quotes:after{content:\"\\e234\\e234\"}.fa-duotone.fa-pretzel:after,.fad.fa-pretzel:after{content:\"\\e441\\e441\"}.fa-duotone.fa-person-swimming:after,.fa-duotone.fa-swimmer:after,.fad.fa-person-swimming:after,.fad.fa-swimmer:after{content:\"\\f5c4\\f5c4\"}.fa-duotone.fa-arrow-down:after,.fad.fa-arrow-down:after{content:\"\\f063\\f063\"}.fa-duotone.fa-user-robot-xmarks:after,.fad.fa-user-robot-xmarks:after{content:\"\\e4a7\\e4a7\"}.fa-duotone.fa-comment-alt-quote:after,.fa-duotone.fa-message-quote:after,.fad.fa-comment-alt-quote:after,.fad.fa-message-quote:after{content:\"\\e1e4\\e1e4\"}.fa-duotone.fa-candy-corn:after,.fad.fa-candy-corn:after{content:\"\\f6bd\\f6bd\"}.fa-duotone.fa-folder-magnifying-glass:after,.fa-duotone.fa-folder-search:after,.fad.fa-folder-magnifying-glass:after,.fad.fa-folder-search:after{content:\"\\e18b\\e18b\"}.fa-duotone.fa-notebook:after,.fad.fa-notebook:after{content:\"\\e201\\e201\"}.fa-duotone.fa-droplet:after,.fa-duotone.fa-tint:after,.fad.fa-droplet:after,.fad.fa-tint:after{content:\"\\f043\\f043\"}.fa-duotone.fa-bullseye-pointer:after,.fad.fa-bullseye-pointer:after{content:\"\\f649\\f649\"}.fa-duotone.fa-eraser:after,.fad.fa-eraser:after{content:\"\\f12d\\f12d\"}.fa-duotone.fa-hexagon-image:after,.fad.fa-hexagon-image:after{content:\"\\e504\\e504\"}.fa-duotone.fa-earth-america:after,.fa-duotone.fa-earth-americas:after,.fa-duotone.fa-earth:after,.fa-duotone.fa-globe-americas:after,.fad.fa-earth-america:after,.fad.fa-earth-americas:after,.fad.fa-earth:after,.fad.fa-globe-americas:after{content:\"\\f57d\\f57d\"}.fa-duotone.fa-crate-apple:after,.fad.fa-crate-apple:after{content:\"\\f6b1\\f6b1\"}.fa-duotone.fa-apple-crate:after,.fad.fa-apple-crate:after{content:\"\\f6b1\\f6b1\"}.fa-duotone.fa-person-burst:after,.fad.fa-person-burst:after{content:\"\\e53b\\e53b\"}.fa-duotone.fa-game-board:after,.fad.fa-game-board:after{content:\"\\f867\\f867\"}.fa-duotone.fa-hat-chef:after,.fad.fa-hat-chef:after{content:\"\\f86b\\f86b\"}.fa-duotone.fa-hand-back-point-right:after,.fad.fa-hand-back-point-right:after{content:\"\\e1a1\\e1a1\"}.fa-duotone.fa-dove:after,.fad.fa-dove:after{content:\"\\f4ba\\f4ba\"}.fa-duotone.fa-battery-0:after,.fa-duotone.fa-battery-empty:after,.fad.fa-battery-0:after,.fad.fa-battery-empty:after{content:\"\\f244\\f244\"}.fa-duotone.fa-grid-4:after,.fad.fa-grid-4:after{content:\"\\e198\\e198\"}.fa-duotone.fa-socks:after,.fad.fa-socks:after{content:\"\\f696\\f696\"}.fa-duotone.fa-face-sunglasses:after,.fad.fa-face-sunglasses:after{content:\"\\e398\\e398\"}.fa-duotone.fa-inbox:after,.fad.fa-inbox:after{content:\"\\f01c\\f01c\"}.fa-duotone.fa-square-0:after,.fad.fa-square-0:after{content:\"\\e255\\e255\"}.fa-duotone.fa-section:after,.fad.fa-section:after{content:\"\\e447\\e447\"}.fa-duotone.fa-box-up:after,.fa-duotone.fa-square-this-way-up:after,.fad.fa-box-up:after,.fad.fa-square-this-way-up:after{content:\"\\f49f\\f49f\"}.fa-duotone.fa-gauge-high:after,.fa-duotone.fa-tachometer-alt-fast:after,.fa-duotone.fa-tachometer-alt:after,.fad.fa-gauge-high:after,.fad.fa-tachometer-alt-fast:after,.fad.fa-tachometer-alt:after{content:\"\\f625\\f625\"}.fa-duotone.fa-square-ampersand:after,.fad.fa-square-ampersand:after{content:\"\\e260\\e260\"}.fa-duotone.fa-envelope-open-text:after,.fad.fa-envelope-open-text:after{content:\"\\f658\\f658\"}.fa-duotone.fa-lamp-desk:after,.fad.fa-lamp-desk:after{content:\"\\e014\\e014\"}.fa-duotone.fa-hospital-alt:after,.fa-duotone.fa-hospital-wide:after,.fa-duotone.fa-hospital:after,.fad.fa-hospital-alt:after,.fad.fa-hospital-wide:after,.fad.fa-hospital:after{content:\"\\f0f8\\f0f8\"}.fa-duotone.fa-poll-people:after,.fad.fa-poll-people:after{content:\"\\f759\\f759\"}.fa-duotone.fa-glass-whiskey-rocks:after,.fa-duotone.fa-whiskey-glass-ice:after,.fad.fa-glass-whiskey-rocks:after,.fad.fa-whiskey-glass-ice:after{content:\"\\f7a1\\f7a1\"}.fa-duotone.fa-wine-bottle:after,.fad.fa-wine-bottle:after{content:\"\\f72f\\f72f\"}.fa-duotone.fa-chess-rook:after,.fad.fa-chess-rook:after{content:\"\\f447\\f447\"}.fa-duotone.fa-user-bounty-hunter:after,.fad.fa-user-bounty-hunter:after{content:\"\\e2bf\\e2bf\"}.fa-duotone.fa-bars-staggered:after,.fa-duotone.fa-reorder:after,.fa-duotone.fa-stream:after,.fad.fa-bars-staggered:after,.fad.fa-reorder:after,.fad.fa-stream:after{content:\"\\f550\\f550\"}.fa-duotone.fa-diagram-sankey:after,.fad.fa-diagram-sankey:after{content:\"\\e158\\e158\"}.fa-duotone.fa-cloud-hail-mixed:after,.fad.fa-cloud-hail-mixed:after{content:\"\\f73a\\f73a\"}.fa-duotone.fa-circle-up-left:after,.fad.fa-circle-up-left:after{content:\"\\e128\\e128\"}.fa-duotone.fa-dharmachakra:after,.fad.fa-dharmachakra:after{content:\"\\f655\\f655\"}.fa-duotone.fa-objects-align-left:after,.fad.fa-objects-align-left:after{content:\"\\e3be\\e3be\"}.fa-duotone.fa-oil-can-drip:after,.fad.fa-oil-can-drip:after{content:\"\\e205\\e205\"}.fa-duotone.fa-face-smiling-hands:after,.fad.fa-face-smiling-hands:after{content:\"\\e396\\e396\"}.fa-duotone.fa-broccoli:after,.fad.fa-broccoli:after{content:\"\\e3e2\\e3e2\"}.fa-duotone.fa-route-interstate:after,.fad.fa-route-interstate:after{content:\"\\f61b\\f61b\"}.fa-duotone.fa-ear-muffs:after,.fad.fa-ear-muffs:after{content:\"\\f795\\f795\"}.fa-duotone.fa-hotdog:after,.fad.fa-hotdog:after{content:\"\\f80f\\f80f\"}.fa-duotone.fa-transporter-empty:after,.fad.fa-transporter-empty:after{content:\"\\e046\\e046\"}.fa-duotone.fa-blind:after,.fa-duotone.fa-person-walking-with-cane:after,.fad.fa-blind:after,.fad.fa-person-walking-with-cane:after{content:\"\\f29d\\f29d\"}.fa-duotone.fa-angle-90:after,.fad.fa-angle-90:after{content:\"\\e08d\\e08d\"}.fa-duotone.fa-rectangle-terminal:after,.fad.fa-rectangle-terminal:after{content:\"\\e236\\e236\"}.fa-duotone.fa-kite:after,.fad.fa-kite:after{content:\"\\f6f4\\f6f4\"}.fa-duotone.fa-drum:after,.fad.fa-drum:after{content:\"\\f569\\f569\"}.fa-duotone.fa-scrubber:after,.fad.fa-scrubber:after{content:\"\\f2f8\\f2f8\"}.fa-duotone.fa-ice-cream:after,.fad.fa-ice-cream:after{content:\"\\f810\\f810\"}.fa-duotone.fa-heart-circle-bolt:after,.fad.fa-heart-circle-bolt:after{content:\"\\e4fc\\e4fc\"}.fa-duotone.fa-fish-bones:after,.fad.fa-fish-bones:after{content:\"\\e304\\e304\"}.fa-duotone.fa-deer-rudolph:after,.fad.fa-deer-rudolph:after{content:\"\\f78f\\f78f\"}.fa-duotone.fa-fax:after,.fad.fa-fax:after{content:\"\\f1ac\\f1ac\"}.fa-duotone.fa-paragraph:after,.fad.fa-paragraph:after{content:\"\\f1dd\\f1dd\"}.fa-duotone.fa-head-side-heart:after,.fad.fa-head-side-heart:after{content:\"\\e1aa\\e1aa\"}.fa-duotone.fa-square-e:after,.fad.fa-square-e:after{content:\"\\e26d\\e26d\"}.fa-duotone.fa-meter-fire:after,.fad.fa-meter-fire:after{content:\"\\e1eb\\e1eb\"}.fa-duotone.fa-cloud-hail:after,.fad.fa-cloud-hail:after{content:\"\\f739\\f739\"}.fa-duotone.fa-check-to-slot:after,.fa-duotone.fa-vote-yea:after,.fad.fa-check-to-slot:after,.fad.fa-vote-yea:after{content:\"\\f772\\f772\"}.fa-duotone.fa-money-from-bracket:after,.fad.fa-money-from-bracket:after{content:\"\\e312\\e312\"}.fa-duotone.fa-star-half:after,.fad.fa-star-half:after{content:\"\\f089\\f089\"}.fa-duotone.fa-car-bus:after,.fad.fa-car-bus:after{content:\"\\f85a\\f85a\"}.fa-duotone.fa-speaker:after,.fad.fa-speaker:after{content:\"\\f8df\\f8df\"}.fa-duotone.fa-timer:after,.fad.fa-timer:after{content:\"\\e29e\\e29e\"}.fa-duotone.fa-boxes-alt:after,.fa-duotone.fa-boxes-stacked:after,.fa-duotone.fa-boxes:after,.fad.fa-boxes-alt:after,.fad.fa-boxes-stacked:after,.fad.fa-boxes:after{content:\"\\f468\\f468\"}.fa-duotone.fa-grill-hot:after,.fad.fa-grill-hot:after{content:\"\\e5a5\\e5a5\"}.fa-duotone.fa-ballot-check:after,.fad.fa-ballot-check:after{content:\"\\f733\\f733\"}.fa-duotone.fa-chain:after,.fa-duotone.fa-link:after,.fad.fa-chain:after,.fad.fa-link:after{content:\"\\f0c1\\f0c1\"}.fa-duotone.fa-assistive-listening-systems:after,.fa-duotone.fa-ear-listen:after,.fad.fa-assistive-listening-systems:after,.fad.fa-ear-listen:after{content:\"\\f2a2\\f2a2\"}.fa-duotone.fa-file-minus:after,.fad.fa-file-minus:after{content:\"\\f318\\f318\"}.fa-duotone.fa-tree-city:after,.fad.fa-tree-city:after{content:\"\\e587\\e587\"}.fa-duotone.fa-play:after,.fad.fa-play:after{content:\"\\f04b\\f04b\"}.fa-duotone.fa-font:after,.fad.fa-font:after{content:\"\\f031\\f031\"}.fa-duotone.fa-coffee-togo:after,.fa-duotone.fa-cup-togo:after,.fad.fa-coffee-togo:after,.fad.fa-cup-togo:after{content:\"\\f6c5\\f6c5\"}.fa-duotone.fa-square-down-left:after,.fad.fa-square-down-left:after{content:\"\\e26b\\e26b\"}.fa-duotone.fa-burger-lettuce:after,.fad.fa-burger-lettuce:after{content:\"\\e3e3\\e3e3\"}.fa-duotone.fa-rupiah-sign:after,.fad.fa-rupiah-sign:after{content:\"\\e23d\\e23d\"}.fa-duotone.fa-magnifying-glass:after,.fa-duotone.fa-search:after,.fad.fa-magnifying-glass:after,.fad.fa-search:after{content:\"\\f002\\f002\"}.fa-duotone.fa-ping-pong-paddle-ball:after,.fa-duotone.fa-table-tennis-paddle-ball:after,.fa-duotone.fa-table-tennis:after,.fad.fa-ping-pong-paddle-ball:after,.fad.fa-table-tennis-paddle-ball:after,.fad.fa-table-tennis:after{content:\"\\f45d\\f45d\"}.fa-duotone.fa-diagnoses:after,.fa-duotone.fa-person-dots-from-line:after,.fad.fa-diagnoses:after,.fad.fa-person-dots-from-line:after{content:\"\\f470\\f470\"}.fa-duotone.fa-chevron-double-down:after,.fa-duotone.fa-chevrons-down:after,.fad.fa-chevron-double-down:after,.fad.fa-chevrons-down:after{content:\"\\f322\\f322\"}.fa-duotone.fa-trash-can-arrow-up:after,.fa-duotone.fa-trash-restore-alt:after,.fad.fa-trash-can-arrow-up:after,.fad.fa-trash-restore-alt:after{content:\"\\f82a\\f82a\"}.fa-duotone.fa-signal-3:after,.fa-duotone.fa-signal-good:after,.fad.fa-signal-3:after,.fad.fa-signal-good:after{content:\"\\f68e\\f68e\"}.fa-duotone.fa-location-question:after,.fa-duotone.fa-map-marker-question:after,.fad.fa-location-question:after,.fad.fa-map-marker-question:after{content:\"\\f60b\\f60b\"}.fa-duotone.fa-floppy-disk-circle-xmark:after,.fa-duotone.fa-floppy-disk-times:after,.fa-duotone.fa-save-circle-xmark:after,.fa-duotone.fa-save-times:after,.fad.fa-floppy-disk-circle-xmark:after,.fad.fa-floppy-disk-times:after,.fad.fa-save-circle-xmark:after,.fad.fa-save-times:after{content:\"\\e181\\e181\"}.fa-duotone.fa-naira-sign:after,.fad.fa-naira-sign:after{content:\"\\e1f6\\e1f6\"}.fa-duotone.fa-peach:after,.fad.fa-peach:after{content:\"\\e20b\\e20b\"}.fa-duotone.fa-taxi-bus:after,.fad.fa-taxi-bus:after{content:\"\\e298\\e298\"}.fa-duotone.fa-bracket-curly-left:after,.fa-duotone.fa-bracket-curly:after,.fad.fa-bracket-curly-left:after,.fad.fa-bracket-curly:after{content:\"\\7b\\7b\"}.fa-duotone.fa-lobster:after,.fad.fa-lobster:after{content:\"\\e421\\e421\"}.fa-duotone.fa-cart-flatbed-empty:after,.fa-duotone.fa-dolly-flatbed-empty:after,.fad.fa-cart-flatbed-empty:after,.fad.fa-dolly-flatbed-empty:after{content:\"\\f476\\f476\"}.fa-duotone.fa-colon:after,.fad.fa-colon:after{content:\"\\3a\\3a\"}.fa-duotone.fa-cart-arrow-down:after,.fad.fa-cart-arrow-down:after{content:\"\\f218\\f218\"}.fa-duotone.fa-wand:after,.fad.fa-wand:after{content:\"\\f72a\\f72a\"}.fa-duotone.fa-walkie-talkie:after,.fad.fa-walkie-talkie:after{content:\"\\f8ef\\f8ef\"}.fa-duotone.fa-file-edit:after,.fa-duotone.fa-file-pen:after,.fad.fa-file-edit:after,.fad.fa-file-pen:after{content:\"\\f31c\\f31c\"}.fa-duotone.fa-receipt:after,.fad.fa-receipt:after{content:\"\\f543\\f543\"}.fa-duotone.fa-table-picnic:after,.fad.fa-table-picnic:after{content:\"\\e32d\\e32d\"}.fa-duotone.fa-pen-square:after,.fa-duotone.fa-pencil-square:after,.fa-duotone.fa-square-pen:after,.fad.fa-pen-square:after,.fad.fa-pencil-square:after,.fad.fa-square-pen:after{content:\"\\f14b\\f14b\"}.fa-duotone.fa-circle-microphone-lines:after,.fa-duotone.fa-microphone-circle-alt:after,.fad.fa-circle-microphone-lines:after,.fad.fa-microphone-circle-alt:after{content:\"\\e117\\e117\"}.fa-duotone.fa-desktop-slash:after,.fa-duotone.fa-display-slash:after,.fad.fa-desktop-slash:after,.fad.fa-display-slash:after{content:\"\\e2fa\\e2fa\"}.fa-duotone.fa-suitcase-rolling:after,.fad.fa-suitcase-rolling:after{content:\"\\f5c1\\f5c1\"}.fa-duotone.fa-person-circle-exclamation:after,.fad.fa-person-circle-exclamation:after{content:\"\\e53f\\e53f\"}.fa-duotone.fa-transporter-2:after,.fad.fa-transporter-2:after{content:\"\\e044\\e044\"}.fa-duotone.fa-hand-receiving:after,.fa-duotone.fa-hands-holding-diamond:after,.fad.fa-hand-receiving:after,.fad.fa-hands-holding-diamond:after{content:\"\\f47c\\f47c\"}.fa-duotone.fa-money-bill-simple-wave:after,.fad.fa-money-bill-simple-wave:after{content:\"\\e1f2\\e1f2\"}.fa-duotone.fa-chevron-down:after,.fad.fa-chevron-down:after{content:\"\\f078\\f078\"}.fa-duotone.fa-battery-5:after,.fa-duotone.fa-battery-full:after,.fa-duotone.fa-battery:after,.fad.fa-battery-5:after,.fad.fa-battery-full:after,.fad.fa-battery:after{content:\"\\f240\\f240\"}.fa-duotone.fa-bell-plus:after,.fad.fa-bell-plus:after{content:\"\\f849\\f849\"}.fa-duotone.fa-book-arrow-right:after,.fad.fa-book-arrow-right:after{content:\"\\e0b9\\e0b9\"}.fa-duotone.fa-hospitals:after,.fad.fa-hospitals:after{content:\"\\f80e\\f80e\"}.fa-duotone.fa-club:after,.fad.fa-club:after{content:\"\\f327\\f327\"}.fa-duotone.fa-skull-crossbones:after,.fad.fa-skull-crossbones:after{content:\"\\f714\\f714\"}.fa-duotone.fa-dewpoint:after,.fa-duotone.fa-droplet-degree:after,.fad.fa-dewpoint:after,.fad.fa-droplet-degree:after{content:\"\\f748\\f748\"}.fa-duotone.fa-code-compare:after,.fad.fa-code-compare:after{content:\"\\e13a\\e13a\"}.fa-duotone.fa-list-dots:after,.fa-duotone.fa-list-ul:after,.fad.fa-list-dots:after,.fad.fa-list-ul:after{content:\"\\f0ca\\f0ca\"}.fa-duotone.fa-hand-holding-magic:after,.fad.fa-hand-holding-magic:after{content:\"\\f6e5\\f6e5\"}.fa-duotone.fa-watermelon-slice:after,.fad.fa-watermelon-slice:after{content:\"\\e337\\e337\"}.fa-duotone.fa-circle-ellipsis:after,.fad.fa-circle-ellipsis:after{content:\"\\e10a\\e10a\"}.fa-duotone.fa-school-lock:after,.fad.fa-school-lock:after{content:\"\\e56f\\e56f\"}.fa-duotone.fa-tower-cell:after,.fad.fa-tower-cell:after{content:\"\\e585\\e585\"}.fa-duotone.fa-sd-cards:after,.fad.fa-sd-cards:after{content:\"\\e240\\e240\"}.fa-duotone.fa-down-long:after,.fa-duotone.fa-long-arrow-alt-down:after,.fad.fa-down-long:after,.fad.fa-long-arrow-alt-down:after{content:\"\\f309\\f309\"}.fa-duotone.fa-envelopes:after,.fad.fa-envelopes:after{content:\"\\e170\\e170\"}.fa-duotone.fa-phone-office:after,.fad.fa-phone-office:after{content:\"\\f67d\\f67d\"}.fa-duotone.fa-ranking-star:after,.fad.fa-ranking-star:after{content:\"\\e561\\e561\"}.fa-duotone.fa-chess-king:after,.fad.fa-chess-king:after{content:\"\\f43f\\f43f\"}.fa-duotone.fa-nfc-pen:after,.fad.fa-nfc-pen:after{content:\"\\e1fa\\e1fa\"}.fa-duotone.fa-person-harassing:after,.fad.fa-person-harassing:after{content:\"\\e549\\e549\"}.fa-duotone.fa-hat-winter:after,.fad.fa-hat-winter:after{content:\"\\f7a8\\f7a8\"}.fa-duotone.fa-brazilian-real-sign:after,.fad.fa-brazilian-real-sign:after{content:\"\\e46c\\e46c\"}.fa-duotone.fa-landmark-alt:after,.fa-duotone.fa-landmark-dome:after,.fad.fa-landmark-alt:after,.fad.fa-landmark-dome:after{content:\"\\f752\\f752\"}.fa-duotone.fa-bone-break:after,.fad.fa-bone-break:after{content:\"\\f5d8\\f5d8\"}.fa-duotone.fa-arrow-up:after,.fad.fa-arrow-up:after{content:\"\\f062\\f062\"}.fa-duotone.fa-down-from-dotted-line:after,.fad.fa-down-from-dotted-line:after{content:\"\\e407\\e407\"}.fa-duotone.fa-television:after,.fa-duotone.fa-tv-alt:after,.fa-duotone.fa-tv:after,.fad.fa-television:after,.fad.fa-tv-alt:after,.fad.fa-tv:after{content:\"\\f26c\\f26c\"}.fa-duotone.fa-border-left:after,.fad.fa-border-left:after{content:\"\\f84f\\f84f\"}.fa-duotone.fa-circle-divide:after,.fad.fa-circle-divide:after{content:\"\\e106\\e106\"}.fa-duotone.fa-shrimp:after,.fad.fa-shrimp:after{content:\"\\e448\\e448\"}.fa-duotone.fa-list-check:after,.fa-duotone.fa-tasks:after,.fad.fa-list-check:after,.fad.fa-tasks:after{content:\"\\f0ae\\f0ae\"}.fa-duotone.fa-diagram-subtask:after,.fad.fa-diagram-subtask:after{content:\"\\e479\\e479\"}.fa-duotone.fa-jug-detergent:after,.fad.fa-jug-detergent:after{content:\"\\e519\\e519\"}.fa-duotone.fa-circle-user:after,.fa-duotone.fa-user-circle:after,.fad.fa-circle-user:after,.fad.fa-user-circle:after{content:\"\\f2bd\\f2bd\"}.fa-duotone.fa-square-y:after,.fad.fa-square-y:after{content:\"\\e287\\e287\"}.fa-duotone.fa-user-doctor-hair:after,.fad.fa-user-doctor-hair:after{content:\"\\e458\\e458\"}.fa-duotone.fa-planet-ringed:after,.fad.fa-planet-ringed:after{content:\"\\e020\\e020\"}.fa-duotone.fa-mushroom:after,.fad.fa-mushroom:after{content:\"\\e425\\e425\"}.fa-duotone.fa-user-shield:after,.fad.fa-user-shield:after{content:\"\\f505\\f505\"}.fa-duotone.fa-megaphone:after,.fad.fa-megaphone:after{content:\"\\f675\\f675\"}.fa-duotone.fa-circle-exclamation-check:after,.fad.fa-circle-exclamation-check:after{content:\"\\e10d\\e10d\"}.fa-duotone.fa-wind:after,.fad.fa-wind:after{content:\"\\f72e\\f72e\"}.fa-duotone.fa-box-dollar:after,.fa-duotone.fa-box-usd:after,.fad.fa-box-dollar:after,.fad.fa-box-usd:after{content:\"\\f4a0\\f4a0\"}.fa-duotone.fa-car-burst:after,.fa-duotone.fa-car-crash:after,.fad.fa-car-burst:after,.fad.fa-car-crash:after{content:\"\\f5e1\\f5e1\"}.fa-duotone.fa-y:after,.fad.fa-y:after{content:\"\\59\\59\"}.fa-duotone.fa-user-headset:after,.fad.fa-user-headset:after{content:\"\\f82d\\f82d\"}.fa-duotone.fa-arrows-retweet:after,.fa-duotone.fa-retweet-alt:after,.fad.fa-arrows-retweet:after,.fad.fa-retweet-alt:after{content:\"\\f361\\f361\"}.fa-duotone.fa-person-snowboarding:after,.fa-duotone.fa-snowboarding:after,.fad.fa-person-snowboarding:after,.fad.fa-snowboarding:after{content:\"\\f7ce\\f7ce\"}.fa-duotone.fa-chevron-square-right:after,.fa-duotone.fa-square-chevron-right:after,.fad.fa-chevron-square-right:after,.fad.fa-square-chevron-right:after{content:\"\\f32b\\f32b\"}.fa-duotone.fa-lacrosse-stick-ball:after,.fad.fa-lacrosse-stick-ball:after{content:\"\\e3b6\\e3b6\"}.fa-duotone.fa-shipping-fast:after,.fa-duotone.fa-truck-fast:after,.fad.fa-shipping-fast:after,.fad.fa-truck-fast:after{content:\"\\f48b\\f48b\"}.fa-duotone.fa-star-sharp:after,.fad.fa-star-sharp:after{content:\"\\e28b\\e28b\"}.fa-duotone.fa-circle-1:after,.fad.fa-circle-1:after{content:\"\\e0ee\\e0ee\"}.fa-duotone.fa-circle-star:after,.fa-duotone.fa-star-circle:after,.fad.fa-circle-star:after,.fad.fa-star-circle:after{content:\"\\e123\\e123\"}.fa-duotone.fa-fish:after,.fad.fa-fish:after{content:\"\\f578\\f578\"}.fa-duotone.fa-cloud-fog:after,.fa-duotone.fa-fog:after,.fad.fa-cloud-fog:after,.fad.fa-fog:after{content:\"\\f74e\\f74e\"}.fa-duotone.fa-waffle:after,.fad.fa-waffle:after{content:\"\\e466\\e466\"}.fa-duotone.fa-music-alt:after,.fa-duotone.fa-music-note:after,.fad.fa-music-alt:after,.fad.fa-music-note:after{content:\"\\f8cf\\f8cf\"}.fa-duotone.fa-hexagon-exclamation:after,.fad.fa-hexagon-exclamation:after{content:\"\\e417\\e417\"}.fa-duotone.fa-cart-shopping-fast:after,.fad.fa-cart-shopping-fast:after{content:\"\\e0dc\\e0dc\"}.fa-duotone.fa-object-union:after,.fad.fa-object-union:after{content:\"\\e49f\\e49f\"}.fa-duotone.fa-user-graduate:after,.fad.fa-user-graduate:after{content:\"\\f501\\f501\"}.fa-duotone.fa-starfighter:after,.fad.fa-starfighter:after{content:\"\\e037\\e037\"}.fa-duotone.fa-adjust:after,.fa-duotone.fa-circle-half-stroke:after,.fad.fa-adjust:after,.fad.fa-circle-half-stroke:after{content:\"\\f042\\f042\"}.fa-duotone.fa-arrow-right-long-to-line:after,.fad.fa-arrow-right-long-to-line:after{content:\"\\e3d5\\e3d5\"}.fa-duotone.fa-arrow-square-down:after,.fa-duotone.fa-square-arrow-down:after,.fad.fa-arrow-square-down:after,.fad.fa-square-arrow-down:after{content:\"\\f339\\f339\"}.fa-duotone.fa-clapperboard:after,.fad.fa-clapperboard:after{content:\"\\e131\\e131\"}.fa-duotone.fa-chevron-square-left:after,.fa-duotone.fa-square-chevron-left:after,.fad.fa-chevron-square-left:after,.fad.fa-square-chevron-left:after{content:\"\\f32a\\f32a\"}.fa-duotone.fa-phone-intercom:after,.fad.fa-phone-intercom:after{content:\"\\e434\\e434\"}.fa-duotone.fa-chain-horizontal:after,.fa-duotone.fa-link-horizontal:after,.fad.fa-chain-horizontal:after,.fad.fa-link-horizontal:after{content:\"\\e1cb\\e1cb\"}.fa-duotone.fa-mango:after,.fad.fa-mango:after{content:\"\\e30f\\e30f\"}.fa-duotone.fa-music-alt-slash:after,.fa-duotone.fa-music-note-slash:after,.fad.fa-music-alt-slash:after,.fad.fa-music-note-slash:after{content:\"\\f8d0\\f8d0\"}.fa-duotone.fa-circle-radiation:after,.fa-duotone.fa-radiation-alt:after,.fad.fa-circle-radiation:after,.fad.fa-radiation-alt:after{content:\"\\f7ba\\f7ba\"}.fa-duotone.fa-face-tongue-sweat:after,.fad.fa-face-tongue-sweat:after{content:\"\\e39e\\e39e\"}.fa-duotone.fa-globe-stand:after,.fad.fa-globe-stand:after{content:\"\\f5f6\\f5f6\"}.fa-duotone.fa-baseball-ball:after,.fa-duotone.fa-baseball:after,.fad.fa-baseball-ball:after,.fad.fa-baseball:after{content:\"\\f433\\f433\"}.fa-duotone.fa-circle-p:after,.fad.fa-circle-p:after{content:\"\\e11a\\e11a\"}.fa-duotone.fa-award-simple:after,.fad.fa-award-simple:after{content:\"\\e0ab\\e0ab\"}.fa-duotone.fa-jet-fighter-up:after,.fad.fa-jet-fighter-up:after{content:\"\\e518\\e518\"}.fa-duotone.fa-diagram-project:after,.fa-duotone.fa-project-diagram:after,.fad.fa-diagram-project:after,.fad.fa-project-diagram:after{content:\"\\f542\\f542\"}.fa-duotone.fa-pedestal:after,.fad.fa-pedestal:after{content:\"\\e20d\\e20d\"}.fa-duotone.fa-chart-pyramid:after,.fad.fa-chart-pyramid:after{content:\"\\e0e6\\e0e6\"}.fa-duotone.fa-sidebar:after,.fad.fa-sidebar:after{content:\"\\e24e\\e24e\"}.fa-duotone.fa-frosty-head:after,.fa-duotone.fa-snowman-head:after,.fad.fa-frosty-head:after,.fad.fa-snowman-head:after{content:\"\\f79b\\f79b\"}.fa-duotone.fa-copy:after,.fad.fa-copy:after{content:\"\\f0c5\\f0c5\"}.fa-duotone.fa-burger-glass:after,.fad.fa-burger-glass:after{content:\"\\e0ce\\e0ce\"}.fa-duotone.fa-volume-mute:after,.fa-duotone.fa-volume-times:after,.fa-duotone.fa-volume-xmark:after,.fad.fa-volume-mute:after,.fad.fa-volume-times:after,.fad.fa-volume-xmark:after{content:\"\\f6a9\\f6a9\"}.fa-duotone.fa-hand-sparkles:after,.fad.fa-hand-sparkles:after{content:\"\\e05d\\e05d\"}.fa-duotone.fa-bars-filter:after,.fad.fa-bars-filter:after{content:\"\\e0ad\\e0ad\"}.fa-duotone.fa-paintbrush-pencil:after,.fad.fa-paintbrush-pencil:after{content:\"\\e206\\e206\"}.fa-duotone.fa-party-bell:after,.fad.fa-party-bell:after{content:\"\\e31a\\e31a\"}.fa-duotone.fa-user-vneck-hair:after,.fad.fa-user-vneck-hair:after{content:\"\\e462\\e462\"}.fa-duotone.fa-jack-o-lantern:after,.fad.fa-jack-o-lantern:after{content:\"\\f30e\\f30e\"}.fa-duotone.fa-grip-horizontal:after,.fa-duotone.fa-grip:after,.fad.fa-grip-horizontal:after,.fad.fa-grip:after{content:\"\\f58d\\f58d\"}.fa-duotone.fa-share-from-square:after,.fa-duotone.fa-share-square:after,.fad.fa-share-from-square:after,.fad.fa-share-square:after{content:\"\\f14d\\f14d\"}.fa-duotone.fa-keynote:after,.fad.fa-keynote:after{content:\"\\f66c\\f66c\"}.fa-duotone.fa-gun:after,.fad.fa-gun:after{content:\"\\e19b\\e19b\"}.fa-duotone.fa-phone-square:after,.fa-duotone.fa-square-phone:after,.fad.fa-phone-square:after,.fad.fa-square-phone:after{content:\"\\f098\\f098\"}.fa-duotone.fa-add:after,.fa-duotone.fa-plus:after,.fad.fa-add:after,.fad.fa-plus:after{content:\"\\2b\\2b\"}.fa-duotone.fa-expand:after,.fad.fa-expand:after{content:\"\\f065\\f065\"}.fa-duotone.fa-computer:after,.fad.fa-computer:after{content:\"\\e4e5\\e4e5\"}.fa-duotone.fa-fort:after,.fad.fa-fort:after{content:\"\\e486\\e486\"}.fa-duotone.fa-cloud-check:after,.fad.fa-cloud-check:after{content:\"\\e35c\\e35c\"}.fa-duotone.fa-close:after,.fa-duotone.fa-multiply:after,.fa-duotone.fa-remove:after,.fa-duotone.fa-times:after,.fa-duotone.fa-xmark:after,.fad.fa-close:after,.fad.fa-multiply:after,.fad.fa-remove:after,.fad.fa-times:after,.fad.fa-xmark:after{content:\"\\f00d\\f00d\"}.fa-duotone.fa-face-smirking:after,.fad.fa-face-smirking:after{content:\"\\e397\\e397\"}.fa-duotone.fa-arrows-up-down-left-right:after,.fa-duotone.fa-arrows:after,.fad.fa-arrows-up-down-left-right:after,.fad.fa-arrows:after{content:\"\\f047\\f047\"}.fa-duotone.fa-chalkboard-teacher:after,.fa-duotone.fa-chalkboard-user:after,.fad.fa-chalkboard-teacher:after,.fad.fa-chalkboard-user:after{content:\"\\f51c\\f51c\"}.fa-duotone.fa-rhombus:after,.fad.fa-rhombus:after{content:\"\\e23b\\e23b\"}.fa-duotone.fa-claw-marks:after,.fad.fa-claw-marks:after{content:\"\\f6c2\\f6c2\"}.fa-duotone.fa-peso-sign:after,.fad.fa-peso-sign:after{content:\"\\e222\\e222\"}.fa-duotone.fa-face-smile-tongue:after,.fad.fa-face-smile-tongue:after{content:\"\\e394\\e394\"}.fa-duotone.fa-cart-circle-xmark:after,.fad.fa-cart-circle-xmark:after{content:\"\\e3f4\\e3f4\"}.fa-duotone.fa-building-shield:after,.fad.fa-building-shield:after{content:\"\\e4d8\\e4d8\"}.fa-duotone.fa-circle-phone-flip:after,.fa-duotone.fa-phone-circle-alt:after,.fad.fa-circle-phone-flip:after,.fad.fa-phone-circle-alt:after{content:\"\\e11c\\e11c\"}.fa-duotone.fa-baby:after,.fad.fa-baby:after{content:\"\\f77c\\f77c\"}.fa-duotone.fa-users-line:after,.fad.fa-users-line:after{content:\"\\e592\\e592\"}.fa-duotone.fa-quote-left-alt:after,.fa-duotone.fa-quote-left:after,.fad.fa-quote-left-alt:after,.fad.fa-quote-left:after{content:\"\\f10d\\f10d\"}.fa-duotone.fa-tractor:after,.fad.fa-tractor:after{content:\"\\f722\\f722\"}.fa-duotone.fa-key-skeleton:after,.fad.fa-key-skeleton:after{content:\"\\f6f3\\f6f3\"}.fa-duotone.fa-trash-arrow-up:after,.fa-duotone.fa-trash-restore:after,.fad.fa-trash-arrow-up:after,.fad.fa-trash-restore:after{content:\"\\f829\\f829\"}.fa-duotone.fa-arrow-down-up-lock:after,.fad.fa-arrow-down-up-lock:after{content:\"\\e4b0\\e4b0\"}.fa-duotone.fa-arrow-down-to-bracket:after,.fad.fa-arrow-down-to-bracket:after{content:\"\\e094\\e094\"}.fa-duotone.fa-lines-leaning:after,.fad.fa-lines-leaning:after{content:\"\\e51e\\e51e\"}.fa-duotone.fa-square-q:after,.fad.fa-square-q:after{content:\"\\e27b\\e27b\"}.fa-duotone.fa-ruler-combined:after,.fad.fa-ruler-combined:after{content:\"\\f546\\f546\"}.fa-duotone.fa-icons-alt:after,.fa-duotone.fa-symbols:after,.fad.fa-icons-alt:after,.fad.fa-symbols:after{content:\"\\f86e\\f86e\"}.fa-duotone.fa-copyright:after,.fad.fa-copyright:after{content:\"\\f1f9\\f1f9\"}.fa-duotone.fa-highlighter-line:after,.fad.fa-highlighter-line:after{content:\"\\e1af\\e1af\"}.fa-duotone.fa-bracket-left:after,.fa-duotone.fa-bracket-square:after,.fa-duotone.fa-bracket:after,.fad.fa-bracket-left:after,.fad.fa-bracket-square:after,.fad.fa-bracket:after{content:\"\\5b\\5b\"}.fa-duotone.fa-island-tree-palm:after,.fa-duotone.fa-island-tropical:after,.fad.fa-island-tree-palm:after,.fad.fa-island-tropical:after{content:\"\\f811\\f811\"}.fa-duotone.fa-arrow-from-left:after,.fa-duotone.fa-arrow-right-from-line:after,.fad.fa-arrow-from-left:after,.fad.fa-arrow-right-from-line:after{content:\"\\f343\\f343\"}.fa-duotone.fa-h2:after,.fad.fa-h2:after{content:\"\\f314\\f314\"}.fa-duotone.fa-equals:after,.fad.fa-equals:after{content:\"\\3d\\3d\"}.fa-duotone.fa-cake-slice:after,.fa-duotone.fa-shortcake:after,.fad.fa-cake-slice:after,.fad.fa-shortcake:after{content:\"\\e3e5\\e3e5\"}.fa-duotone.fa-peanut:after,.fad.fa-peanut:after{content:\"\\e430\\e430\"}.fa-duotone.fa-wrench-simple:after,.fad.fa-wrench-simple:after{content:\"\\e2d1\\e2d1\"}.fa-duotone.fa-blender:after,.fad.fa-blender:after{content:\"\\f517\\f517\"}.fa-duotone.fa-teeth:after,.fad.fa-teeth:after{content:\"\\f62e\\f62e\"}.fa-duotone.fa-tally-2:after,.fad.fa-tally-2:after{content:\"\\e295\\e295\"}.fa-duotone.fa-ils:after,.fa-duotone.fa-shekel-sign:after,.fa-duotone.fa-shekel:after,.fa-duotone.fa-sheqel-sign:after,.fa-duotone.fa-sheqel:after,.fad.fa-ils:after,.fad.fa-shekel-sign:after,.fad.fa-shekel:after,.fad.fa-sheqel-sign:after,.fad.fa-sheqel:after{content:\"\\f20b\\f20b\"}.fa-duotone.fa-cars:after,.fad.fa-cars:after{content:\"\\f85b\\f85b\"}.fa-duotone.fa-axe-battle:after,.fad.fa-axe-battle:after{content:\"\\f6b3\\f6b3\"}.fa-duotone.fa-user-hair-long:after,.fad.fa-user-hair-long:after{content:\"\\e45b\\e45b\"}.fa-duotone.fa-map:after,.fad.fa-map:after{content:\"\\f279\\f279\"}.fa-duotone.fa-file-circle-info:after,.fad.fa-file-circle-info:after{content:\"\\e493\\e493\"}.fa-duotone.fa-face-disappointed:after,.fad.fa-face-disappointed:after{content:\"\\e36f\\e36f\"}.fa-duotone.fa-lasso-sparkles:after,.fad.fa-lasso-sparkles:after{content:\"\\e1c9\\e1c9\"}.fa-duotone.fa-clock-eleven:after,.fad.fa-clock-eleven:after{content:\"\\e347\\e347\"}.fa-duotone.fa-rocket:after,.fad.fa-rocket:after{content:\"\\f135\\f135\"}.fa-duotone.fa-siren-on:after,.fad.fa-siren-on:after{content:\"\\e02e\\e02e\"}.fa-duotone.fa-clock-ten:after,.fad.fa-clock-ten:after{content:\"\\e354\\e354\"}.fa-duotone.fa-candle-holder:after,.fad.fa-candle-holder:after{content:\"\\f6bc\\f6bc\"}.fa-duotone.fa-video-arrow-down-left:after,.fad.fa-video-arrow-down-left:after{content:\"\\e2c8\\e2c8\"}.fa-duotone.fa-photo-film:after,.fa-duotone.fa-photo-video:after,.fad.fa-photo-film:after,.fad.fa-photo-video:after{content:\"\\f87c\\f87c\"}.fa-duotone.fa-floppy-disk-circle-arrow-right:after,.fa-duotone.fa-save-circle-arrow-right:after,.fad.fa-floppy-disk-circle-arrow-right:after,.fad.fa-save-circle-arrow-right:after{content:\"\\e180\\e180\"}.fa-duotone.fa-folder-minus:after,.fad.fa-folder-minus:after{content:\"\\f65d\\f65d\"}.fa-duotone.fa-planet-moon:after,.fad.fa-planet-moon:after{content:\"\\e01f\\e01f\"}.fa-duotone.fa-face-eyes-xmarks:after,.fad.fa-face-eyes-xmarks:after{content:\"\\e374\\e374\"}.fa-duotone.fa-chart-scatter:after,.fad.fa-chart-scatter:after{content:\"\\f7ee\\f7ee\"}.fa-duotone.fa-display-arrow-down:after,.fad.fa-display-arrow-down:after{content:\"\\e164\\e164\"}.fa-duotone.fa-store:after,.fad.fa-store:after{content:\"\\f54e\\f54e\"}.fa-duotone.fa-arrow-trend-up:after,.fad.fa-arrow-trend-up:after{content:\"\\e098\\e098\"}.fa-duotone.fa-plug-circle-minus:after,.fad.fa-plug-circle-minus:after{content:\"\\e55e\\e55e\"}.fa-duotone.fa-olive-branch:after,.fad.fa-olive-branch:after{content:\"\\e317\\e317\"}.fa-duotone.fa-angle:after,.fad.fa-angle:after{content:\"\\e08c\\e08c\"}.fa-duotone.fa-vacuum-robot:after,.fad.fa-vacuum-robot:after{content:\"\\e04e\\e04e\"}.fa-duotone.fa-sign-hanging:after,.fa-duotone.fa-sign:after,.fad.fa-sign-hanging:after,.fad.fa-sign:after{content:\"\\f4d9\\f4d9\"}.fa-duotone.fa-square-divide:after,.fad.fa-square-divide:after{content:\"\\e26a\\e26a\"}.fa-duotone.fa-signal-stream-slash:after,.fad.fa-signal-stream-slash:after{content:\"\\e250\\e250\"}.fa-duotone.fa-bezier-curve:after,.fad.fa-bezier-curve:after{content:\"\\f55b\\f55b\"}.fa-duotone.fa-eye-dropper-half:after,.fad.fa-eye-dropper-half:after{content:\"\\e173\\e173\"}.fa-duotone.fa-store-lock:after,.fad.fa-store-lock:after{content:\"\\e4a6\\e4a6\"}.fa-duotone.fa-bell-slash:after,.fad.fa-bell-slash:after{content:\"\\f1f6\\f1f6\"}.fa-duotone.fa-cloud-bolt-sun:after,.fa-duotone.fa-thunderstorm-sun:after,.fad.fa-cloud-bolt-sun:after,.fad.fa-thunderstorm-sun:after{content:\"\\f76e\\f76e\"}.fa-duotone.fa-camera-slash:after,.fad.fa-camera-slash:after{content:\"\\e0d9\\e0d9\"}.fa-duotone.fa-comment-quote:after,.fad.fa-comment-quote:after{content:\"\\e14c\\e14c\"}.fa-duotone.fa-tablet-android:after,.fa-duotone.fa-tablet:after,.fad.fa-tablet-android:after,.fad.fa-tablet:after{content:\"\\f3fb\\f3fb\"}.fa-duotone.fa-school-flag:after,.fad.fa-school-flag:after{content:\"\\e56e\\e56e\"}.fa-duotone.fa-message-code:after,.fad.fa-message-code:after{content:\"\\e1df\\e1df\"}.fa-duotone.fa-glass-half-empty:after,.fa-duotone.fa-glass-half-full:after,.fa-duotone.fa-glass-half:after,.fad.fa-glass-half-empty:after,.fad.fa-glass-half-full:after,.fad.fa-glass-half:after{content:\"\\e192\\e192\"}.fa-duotone.fa-fill:after,.fad.fa-fill:after{content:\"\\f575\\f575\"}.fa-duotone.fa-comment-alt-minus:after,.fa-duotone.fa-message-minus:after,.fad.fa-comment-alt-minus:after,.fad.fa-message-minus:after{content:\"\\f4a7\\f4a7\"}.fa-duotone.fa-angle-up:after,.fad.fa-angle-up:after{content:\"\\f106\\f106\"}.fa-duotone.fa-drumstick-bite:after,.fad.fa-drumstick-bite:after{content:\"\\f6d7\\f6d7\"}.fa-duotone.fa-chain-horizontal-slash:after,.fa-duotone.fa-link-horizontal-slash:after,.fad.fa-chain-horizontal-slash:after,.fad.fa-link-horizontal-slash:after{content:\"\\e1cc\\e1cc\"}.fa-duotone.fa-holly-berry:after,.fad.fa-holly-berry:after{content:\"\\f7aa\\f7aa\"}.fa-duotone.fa-chevron-left:after,.fad.fa-chevron-left:after{content:\"\\f053\\f053\"}.fa-duotone.fa-bacteria:after,.fad.fa-bacteria:after{content:\"\\e059\\e059\"}.fa-duotone.fa-clouds:after,.fad.fa-clouds:after{content:\"\\f744\\f744\"}.fa-duotone.fa-money-bill-simple:after,.fad.fa-money-bill-simple:after{content:\"\\e1f1\\e1f1\"}.fa-duotone.fa-hand-lizard:after,.fad.fa-hand-lizard:after{content:\"\\f258\\f258\"}.fa-duotone.fa-table-pivot:after,.fad.fa-table-pivot:after{content:\"\\e291\\e291\"}.fa-duotone.fa-filter-slash:after,.fad.fa-filter-slash:after{content:\"\\e17d\\e17d\"}.fa-duotone.fa-trash-can-arrow-turn-left:after,.fa-duotone.fa-trash-can-undo:after,.fa-duotone.fa-trash-undo-alt:after,.fad.fa-trash-can-arrow-turn-left:after,.fad.fa-trash-can-undo:after,.fad.fa-trash-undo-alt:after{content:\"\\f896\\f896\"}.fa-duotone.fa-notdef:after,.fad.fa-notdef:after{content:\"\\e1fe\\e1fe\"}.fa-duotone.fa-disease:after,.fad.fa-disease:after{content:\"\\f7fa\\f7fa\"}.fa-duotone.fa-person-to-door:after,.fad.fa-person-to-door:after{content:\"\\e433\\e433\"}.fa-duotone.fa-turntable:after,.fad.fa-turntable:after{content:\"\\f8e4\\f8e4\"}.fa-duotone.fa-briefcase-medical:after,.fad.fa-briefcase-medical:after{content:\"\\f469\\f469\"}.fa-duotone.fa-genderless:after,.fad.fa-genderless:after{content:\"\\f22d\\f22d\"}.fa-duotone.fa-chevron-right:after,.fad.fa-chevron-right:after{content:\"\\f054\\f054\"}.fa-duotone.fa-signal-1:after,.fa-duotone.fa-signal-weak:after,.fad.fa-signal-1:after,.fad.fa-signal-weak:after{content:\"\\f68c\\f68c\"}.fa-duotone.fa-clock-five:after,.fad.fa-clock-five:after{content:\"\\e349\\e349\"}.fa-duotone.fa-retweet:after,.fad.fa-retweet:after{content:\"\\f079\\f079\"}.fa-duotone.fa-car-alt:after,.fa-duotone.fa-car-rear:after,.fad.fa-car-alt:after,.fad.fa-car-rear:after{content:\"\\f5de\\f5de\"}.fa-duotone.fa-pump-soap:after,.fad.fa-pump-soap:after{content:\"\\e06b\\e06b\"}.fa-duotone.fa-computer-classic:after,.fad.fa-computer-classic:after{content:\"\\f8b1\\f8b1\"}.fa-duotone.fa-frame:after,.fad.fa-frame:after{content:\"\\e495\\e495\"}.fa-duotone.fa-video-slash:after,.fad.fa-video-slash:after{content:\"\\f4e2\\f4e2\"}.fa-duotone.fa-battery-2:after,.fa-duotone.fa-battery-quarter:after,.fad.fa-battery-2:after,.fad.fa-battery-quarter:after{content:\"\\f243\\f243\"}.fa-duotone.fa-ellipsis-h-alt:after,.fa-duotone.fa-ellipsis-stroke:after,.fad.fa-ellipsis-h-alt:after,.fad.fa-ellipsis-stroke:after{content:\"\\f39b\\f39b\"}.fa-duotone.fa-radio:after,.fad.fa-radio:after{content:\"\\f8d7\\f8d7\"}.fa-duotone.fa-baby-carriage:after,.fa-duotone.fa-carriage-baby:after,.fad.fa-baby-carriage:after,.fad.fa-carriage-baby:after{content:\"\\f77d\\f77d\"}.fa-duotone.fa-face-expressionless:after,.fad.fa-face-expressionless:after{content:\"\\e373\\e373\"}.fa-duotone.fa-down-to-dotted-line:after,.fad.fa-down-to-dotted-line:after{content:\"\\e408\\e408\"}.fa-duotone.fa-cloud-music:after,.fad.fa-cloud-music:after{content:\"\\f8ae\\f8ae\"}.fa-duotone.fa-traffic-light:after,.fad.fa-traffic-light:after{content:\"\\f637\\f637\"}.fa-duotone.fa-cloud-minus:after,.fad.fa-cloud-minus:after{content:\"\\e35d\\e35d\"}.fa-duotone.fa-thermometer:after,.fad.fa-thermometer:after{content:\"\\f491\\f491\"}.fa-duotone.fa-shield-minus:after,.fad.fa-shield-minus:after{content:\"\\e249\\e249\"}.fa-duotone.fa-vr-cardboard:after,.fad.fa-vr-cardboard:after{content:\"\\f729\\f729\"}.fa-duotone.fa-car-tilt:after,.fad.fa-car-tilt:after{content:\"\\f5e5\\f5e5\"}.fa-duotone.fa-gauge-circle-minus:after,.fad.fa-gauge-circle-minus:after{content:\"\\e497\\e497\"}.fa-duotone.fa-brightness-low:after,.fad.fa-brightness-low:after{content:\"\\e0ca\\e0ca\"}.fa-duotone.fa-hand-middle-finger:after,.fad.fa-hand-middle-finger:after{content:\"\\f806\\f806\"}.fa-duotone.fa-percent:after,.fa-duotone.fa-percentage:after,.fad.fa-percent:after,.fad.fa-percentage:after{content:\"\\25\\25\"}.fa-duotone.fa-truck-moving:after,.fad.fa-truck-moving:after{content:\"\\f4df\\f4df\"}.fa-duotone.fa-glass-water-droplet:after,.fad.fa-glass-water-droplet:after{content:\"\\e4f5\\e4f5\"}.fa-duotone.fa-conveyor-belt:after,.fad.fa-conveyor-belt:after{content:\"\\f46e\\f46e\"}.fa-duotone.fa-location-check:after,.fa-duotone.fa-map-marker-check:after,.fad.fa-location-check:after,.fad.fa-map-marker-check:after{content:\"\\f606\\f606\"}.fa-duotone.fa-coin-vertical:after,.fad.fa-coin-vertical:after{content:\"\\e3fd\\e3fd\"}.fa-duotone.fa-display:after,.fad.fa-display:after{content:\"\\e163\\e163\"}.fa-duotone.fa-person-sign:after,.fad.fa-person-sign:after{content:\"\\f757\\f757\"}.fa-duotone.fa-face-smile:after,.fa-duotone.fa-smile:after,.fad.fa-face-smile:after,.fad.fa-smile:after{content:\"\\f118\\f118\"}.fa-duotone.fa-phone-hangup:after,.fad.fa-phone-hangup:after{content:\"\\e225\\e225\"}.fa-duotone.fa-signature-slash:after,.fad.fa-signature-slash:after{content:\"\\e3cb\\e3cb\"}.fa-duotone.fa-thumb-tack:after,.fa-duotone.fa-thumbtack:after,.fad.fa-thumb-tack:after,.fad.fa-thumbtack:after{content:\"\\f08d\\f08d\"}.fa-duotone.fa-wheat-slash:after,.fad.fa-wheat-slash:after{content:\"\\e339\\e339\"}.fa-duotone.fa-trophy:after,.fad.fa-trophy:after{content:\"\\f091\\f091\"}.fa-duotone.fa-clouds-sun:after,.fad.fa-clouds-sun:after{content:\"\\f746\\f746\"}.fa-duotone.fa-person-praying:after,.fa-duotone.fa-pray:after,.fad.fa-person-praying:after,.fad.fa-pray:after{content:\"\\f683\\f683\"}.fa-duotone.fa-hammer:after,.fad.fa-hammer:after{content:\"\\f6e3\\f6e3\"}.fa-duotone.fa-face-vomit:after,.fad.fa-face-vomit:after{content:\"\\e3a0\\e3a0\"}.fa-duotone.fa-speakers:after,.fad.fa-speakers:after{content:\"\\f8e0\\f8e0\"}.fa-duotone.fa-teletype-answer:after,.fa-duotone.fa-tty-answer:after,.fad.fa-teletype-answer:after,.fad.fa-tty-answer:after{content:\"\\e2b9\\e2b9\"}.fa-duotone.fa-mug-tea-saucer:after,.fad.fa-mug-tea-saucer:after{content:\"\\e1f5\\e1f5\"}.fa-duotone.fa-diagram-lean-canvas:after,.fad.fa-diagram-lean-canvas:after{content:\"\\e156\\e156\"}.fa-duotone.fa-alt:after,.fad.fa-alt:after{content:\"\\e08a\\e08a\"}.fa-duotone.fa-dial-med-high:after,.fa-duotone.fa-dial:after,.fad.fa-dial-med-high:after,.fad.fa-dial:after{content:\"\\e15b\\e15b\"}.fa-duotone.fa-hand-peace:after,.fad.fa-hand-peace:after{content:\"\\f25b\\f25b\"}.fa-duotone.fa-circle-trash:after,.fa-duotone.fa-trash-circle:after,.fad.fa-circle-trash:after,.fad.fa-trash-circle:after{content:\"\\e126\\e126\"}.fa-duotone.fa-rotate:after,.fa-duotone.fa-sync-alt:after,.fad.fa-rotate:after,.fad.fa-sync-alt:after{content:\"\\f2f1\\f2f1\"}.fa-duotone.fa-circle-quarters:after,.fad.fa-circle-quarters:after{content:\"\\e3f8\\e3f8\"}.fa-duotone.fa-spinner:after,.fad.fa-spinner:after{content:\"\\f110\\f110\"}.fa-duotone.fa-tower-control:after,.fad.fa-tower-control:after{content:\"\\e2a2\\e2a2\"}.fa-duotone.fa-arrow-up-triangle-square:after,.fa-duotone.fa-sort-shapes-up:after,.fad.fa-arrow-up-triangle-square:after,.fad.fa-sort-shapes-up:after{content:\"\\f88a\\f88a\"}.fa-duotone.fa-whale:after,.fad.fa-whale:after{content:\"\\f72c\\f72c\"}.fa-duotone.fa-robot:after,.fad.fa-robot:after{content:\"\\f544\\f544\"}.fa-duotone.fa-peace:after,.fad.fa-peace:after{content:\"\\f67c\\f67c\"}.fa-duotone.fa-party-horn:after,.fad.fa-party-horn:after{content:\"\\e31b\\e31b\"}.fa-duotone.fa-cogs:after,.fa-duotone.fa-gears:after,.fad.fa-cogs:after,.fad.fa-gears:after{content:\"\\f085\\f085\"}.fa-duotone.fa-sun-alt:after,.fa-duotone.fa-sun-bright:after,.fad.fa-sun-alt:after,.fad.fa-sun-bright:after{content:\"\\e28f\\e28f\"}.fa-duotone.fa-warehouse:after,.fad.fa-warehouse:after{content:\"\\f494\\f494\"}.fa-duotone.fa-lock-keyhole-open:after,.fa-duotone.fa-lock-open-alt:after,.fad.fa-lock-keyhole-open:after,.fad.fa-lock-open-alt:after{content:\"\\f3c2\\f3c2\"}.fa-duotone.fa-box-fragile:after,.fa-duotone.fa-square-fragile:after,.fa-duotone.fa-square-wine-glass-crack:after,.fad.fa-box-fragile:after,.fad.fa-square-fragile:after,.fad.fa-square-wine-glass-crack:after{content:\"\\f49b\\f49b\"}.fa-duotone.fa-arrow-up-right-dots:after,.fad.fa-arrow-up-right-dots:after{content:\"\\e4b7\\e4b7\"}.fa-duotone.fa-square-n:after,.fad.fa-square-n:after{content:\"\\e277\\e277\"}.fa-duotone.fa-splotch:after,.fad.fa-splotch:after{content:\"\\f5bc\\f5bc\"}.fa-duotone.fa-face-grin-hearts:after,.fa-duotone.fa-grin-hearts:after,.fad.fa-face-grin-hearts:after,.fad.fa-grin-hearts:after{content:\"\\f584\\f584\"}.fa-duotone.fa-meter:after,.fad.fa-meter:after{content:\"\\e1e8\\e1e8\"}.fa-duotone.fa-mandolin:after,.fad.fa-mandolin:after{content:\"\\f6f9\\f6f9\"}.fa-duotone.fa-dice-four:after,.fad.fa-dice-four:after{content:\"\\f524\\f524\"}.fa-duotone.fa-sim-card:after,.fad.fa-sim-card:after{content:\"\\f7c4\\f7c4\"}.fa-duotone.fa-transgender-alt:after,.fa-duotone.fa-transgender:after,.fad.fa-transgender-alt:after,.fad.fa-transgender:after{content:\"\\f225\\f225\"}.fa-duotone.fa-mercury:after,.fad.fa-mercury:after{content:\"\\f223\\f223\"}.fa-duotone.fa-up-from-bracket:after,.fad.fa-up-from-bracket:after{content:\"\\e590\\e590\"}.fa-duotone.fa-knife-kitchen:after,.fad.fa-knife-kitchen:after{content:\"\\f6f5\\f6f5\"}.fa-duotone.fa-border-right:after,.fad.fa-border-right:after{content:\"\\f852\\f852\"}.fa-duotone.fa-arrow-turn-down:after,.fa-duotone.fa-level-down:after,.fad.fa-arrow-turn-down:after,.fad.fa-level-down:after{content:\"\\f149\\f149\"}.fa-duotone.fa-spade:after,.fad.fa-spade:after{content:\"\\f2f4\\f2f4\"}.fa-duotone.fa-card-spade:after,.fad.fa-card-spade:after{content:\"\\e3ec\\e3ec\"}.fa-duotone.fa-line-columns:after,.fad.fa-line-columns:after{content:\"\\f870\\f870\"}.fa-duotone.fa-arrow-right-to-line:after,.fa-duotone.fa-arrow-to-right:after,.fad.fa-arrow-right-to-line:after,.fad.fa-arrow-to-right:after{content:\"\\f340\\f340\"}.fa-duotone.fa-person-falling-burst:after,.fad.fa-person-falling-burst:after{content:\"\\e547\\e547\"}.fa-duotone.fa-flag-pennant:after,.fa-duotone.fa-pennant:after,.fad.fa-flag-pennant:after,.fad.fa-pennant:after{content:\"\\f456\\f456\"}.fa-duotone.fa-conveyor-belt-empty:after,.fad.fa-conveyor-belt-empty:after{content:\"\\e150\\e150\"}.fa-duotone.fa-award:after,.fad.fa-award:after{content:\"\\f559\\f559\"}.fa-duotone.fa-ticket-alt:after,.fa-duotone.fa-ticket-simple:after,.fad.fa-ticket-alt:after,.fad.fa-ticket-simple:after{content:\"\\f3ff\\f3ff\"}.fa-duotone.fa-building:after,.fad.fa-building:after{content:\"\\f1ad\\f1ad\"}.fa-duotone.fa-angle-double-left:after,.fa-duotone.fa-angles-left:after,.fad.fa-angle-double-left:after,.fad.fa-angles-left:after{content:\"\\f100\\f100\"}.fa-duotone.fa-camcorder:after,.fa-duotone.fa-video-handheld:after,.fad.fa-camcorder:after,.fad.fa-video-handheld:after{content:\"\\f8a8\\f8a8\"}.fa-duotone.fa-pancakes:after,.fad.fa-pancakes:after{content:\"\\e42d\\e42d\"}.fa-duotone.fa-album-circle-user:after,.fad.fa-album-circle-user:after{content:\"\\e48d\\e48d\"}.fa-duotone.fa-qrcode:after,.fad.fa-qrcode:after{content:\"\\f029\\f029\"}.fa-duotone.fa-dice-d10:after,.fad.fa-dice-d10:after{content:\"\\f6cd\\f6cd\"}.fa-duotone.fa-fireplace:after,.fad.fa-fireplace:after{content:\"\\f79a\\f79a\"}.fa-duotone.fa-browser:after,.fad.fa-browser:after{content:\"\\f37e\\f37e\"}.fa-duotone.fa-pen-paintbrush:after,.fa-duotone.fa-pencil-paintbrush:after,.fad.fa-pen-paintbrush:after,.fad.fa-pencil-paintbrush:after{content:\"\\f618\\f618\"}.fa-duotone.fa-fish-cooked:after,.fad.fa-fish-cooked:after{content:\"\\f7fe\\f7fe\"}.fa-duotone.fa-chair-office:after,.fad.fa-chair-office:after{content:\"\\f6c1\\f6c1\"}.fa-duotone.fa-nesting-dolls:after,.fad.fa-nesting-dolls:after{content:\"\\e3ba\\e3ba\"}.fa-duotone.fa-clock-rotate-left:after,.fa-duotone.fa-history:after,.fad.fa-clock-rotate-left:after,.fad.fa-history:after{content:\"\\f1da\\f1da\"}.fa-duotone.fa-trumpet:after,.fad.fa-trumpet:after{content:\"\\f8e3\\f8e3\"}.fa-duotone.fa-face-grin-beam-sweat:after,.fa-duotone.fa-grin-beam-sweat:after,.fad.fa-face-grin-beam-sweat:after,.fad.fa-grin-beam-sweat:after{content:\"\\f583\\f583\"}.fa-duotone.fa-fire-smoke:after,.fad.fa-fire-smoke:after{content:\"\\f74b\\f74b\"}.fa-duotone.fa-phone-missed:after,.fad.fa-phone-missed:after{content:\"\\e226\\e226\"}.fa-duotone.fa-arrow-right-from-file:after,.fa-duotone.fa-file-export:after,.fad.fa-arrow-right-from-file:after,.fad.fa-file-export:after{content:\"\\f56e\\f56e\"}.fa-duotone.fa-shield-blank:after,.fa-duotone.fa-shield:after,.fad.fa-shield-blank:after,.fad.fa-shield:after{content:\"\\f132\\f132\"}.fa-duotone.fa-arrow-up-short-wide:after,.fa-duotone.fa-sort-amount-up-alt:after,.fad.fa-arrow-up-short-wide:after,.fad.fa-sort-amount-up-alt:after{content:\"\\f885\\f885\"}.fa-duotone.fa-arrows-repeat-1:after,.fa-duotone.fa-repeat-1-alt:after,.fad.fa-arrows-repeat-1:after,.fad.fa-repeat-1-alt:after{content:\"\\f366\\f366\"}.fa-duotone.fa-gun-slash:after,.fad.fa-gun-slash:after{content:\"\\e19c\\e19c\"}.fa-duotone.fa-avocado:after,.fad.fa-avocado:after{content:\"\\e0aa\\e0aa\"}.fa-duotone.fa-binary:after,.fad.fa-binary:after{content:\"\\e33b\\e33b\"}.fa-duotone.fa-glasses-alt:after,.fa-duotone.fa-glasses-round:after,.fad.fa-glasses-alt:after,.fad.fa-glasses-round:after{content:\"\\f5f5\\f5f5\"}.fa-duotone.fa-phone-plus:after,.fad.fa-phone-plus:after{content:\"\\f4d2\\f4d2\"}.fa-duotone.fa-ditto:after,.fad.fa-ditto:after{content:\"\\22\\22\"}.fa-duotone.fa-person-seat:after,.fad.fa-person-seat:after{content:\"\\e21e\\e21e\"}.fa-duotone.fa-house-medical:after,.fad.fa-house-medical:after{content:\"\\e3b2\\e3b2\"}.fa-duotone.fa-golf-ball-tee:after,.fa-duotone.fa-golf-ball:after,.fad.fa-golf-ball-tee:after,.fad.fa-golf-ball:after{content:\"\\f450\\f450\"}.fa-duotone.fa-chevron-circle-left:after,.fa-duotone.fa-circle-chevron-left:after,.fad.fa-chevron-circle-left:after,.fad.fa-circle-chevron-left:after{content:\"\\f137\\f137\"}.fa-duotone.fa-house-chimney-window:after,.fad.fa-house-chimney-window:after{content:\"\\e00d\\e00d\"}.fa-duotone.fa-scythe:after,.fad.fa-scythe:after{content:\"\\f710\\f710\"}.fa-duotone.fa-pen-nib:after,.fad.fa-pen-nib:after{content:\"\\f5ad\\f5ad\"}.fa-duotone.fa-ban-parking:after,.fa-duotone.fa-parking-circle-slash:after,.fad.fa-ban-parking:after,.fad.fa-parking-circle-slash:after{content:\"\\f616\\f616\"}.fa-duotone.fa-tent-arrow-turn-left:after,.fad.fa-tent-arrow-turn-left:after{content:\"\\e580\\e580\"}.fa-duotone.fa-face-diagonal-mouth:after,.fad.fa-face-diagonal-mouth:after{content:\"\\e47e\\e47e\"}.fa-duotone.fa-diagram-cells:after,.fad.fa-diagram-cells:after{content:\"\\e475\\e475\"}.fa-duotone.fa-cricket-bat-ball:after,.fa-duotone.fa-cricket:after,.fad.fa-cricket-bat-ball:after,.fad.fa-cricket:after{content:\"\\f449\\f449\"}.fa-duotone.fa-tents:after,.fad.fa-tents:after{content:\"\\e582\\e582\"}.fa-duotone.fa-magic:after,.fa-duotone.fa-wand-magic:after,.fad.fa-magic:after,.fad.fa-wand-magic:after{content:\"\\f0d0\\f0d0\"}.fa-duotone.fa-dog:after,.fad.fa-dog:after{content:\"\\f6d3\\f6d3\"}.fa-duotone.fa-pen-line:after,.fad.fa-pen-line:after{content:\"\\e212\\e212\"}.fa-duotone.fa-atom-alt:after,.fa-duotone.fa-atom-simple:after,.fad.fa-atom-alt:after,.fad.fa-atom-simple:after{content:\"\\f5d3\\f5d3\"}.fa-duotone.fa-ampersand:after,.fad.fa-ampersand:after{content:\"\\26\\26\"}.fa-duotone.fa-carrot:after,.fad.fa-carrot:after{content:\"\\f787\\f787\"}.fa-duotone.fa-arrow-from-bottom:after,.fa-duotone.fa-arrow-up-from-line:after,.fad.fa-arrow-from-bottom:after,.fad.fa-arrow-up-from-line:after{content:\"\\f342\\f342\"}.fa-duotone.fa-moon:after,.fad.fa-moon:after{content:\"\\f186\\f186\"}.fa-duotone.fa-pen-slash:after,.fad.fa-pen-slash:after{content:\"\\e213\\e213\"}.fa-duotone.fa-wine-glass-alt:after,.fa-duotone.fa-wine-glass-empty:after,.fad.fa-wine-glass-alt:after,.fad.fa-wine-glass-empty:after{content:\"\\f5ce\\f5ce\"}.fa-duotone.fa-square-star:after,.fad.fa-square-star:after{content:\"\\e27f\\e27f\"}.fa-duotone.fa-cheese:after,.fad.fa-cheese:after{content:\"\\f7ef\\f7ef\"}.fa-duotone.fa-send-backward:after,.fad.fa-send-backward:after{content:\"\\f87f\\f87f\"}.fa-duotone.fa-yin-yang:after,.fad.fa-yin-yang:after{content:\"\\f6ad\\f6ad\"}.fa-duotone.fa-music:after,.fad.fa-music:after{content:\"\\f001\\f001\"}.fa-duotone.fa-compass-slash:after,.fad.fa-compass-slash:after{content:\"\\f5e9\\f5e9\"}.fa-duotone.fa-clock-one:after,.fad.fa-clock-one:after{content:\"\\e34e\\e34e\"}.fa-duotone.fa-file-music:after,.fad.fa-file-music:after{content:\"\\f8b6\\f8b6\"}.fa-duotone.fa-code-commit:after,.fad.fa-code-commit:after{content:\"\\f386\\f386\"}.fa-duotone.fa-temperature-low:after,.fad.fa-temperature-low:after{content:\"\\f76b\\f76b\"}.fa-duotone.fa-biking:after,.fa-duotone.fa-person-biking:after,.fad.fa-biking:after,.fad.fa-person-biking:after{content:\"\\f84a\\f84a\"}.fa-duotone.fa-skeleton:after,.fad.fa-skeleton:after{content:\"\\f620\\f620\"}.fa-duotone.fa-circle-g:after,.fad.fa-circle-g:after{content:\"\\e10f\\e10f\"}.fa-duotone.fa-circle-arrow-up-left:after,.fad.fa-circle-arrow-up-left:after{content:\"\\e0fb\\e0fb\"}.fa-duotone.fa-coin-blank:after,.fad.fa-coin-blank:after{content:\"\\e3fb\\e3fb\"}.fa-duotone.fa-broom:after,.fad.fa-broom:after{content:\"\\f51a\\f51a\"}.fa-duotone.fa-vacuum:after,.fad.fa-vacuum:after{content:\"\\e04d\\e04d\"}.fa-duotone.fa-shield-heart:after,.fad.fa-shield-heart:after{content:\"\\e574\\e574\"}.fa-duotone.fa-card-heart:after,.fad.fa-card-heart:after{content:\"\\e3eb\\e3eb\"}.fa-duotone.fa-lightbulb-cfl-on:after,.fad.fa-lightbulb-cfl-on:after{content:\"\\e5a7\\e5a7\"}.fa-duotone.fa-melon:after,.fad.fa-melon:after{content:\"\\e310\\e310\"}.fa-duotone.fa-gopuram:after,.fad.fa-gopuram:after{content:\"\\f664\\f664\"}.fa-duotone.fa-earth-oceania:after,.fa-duotone.fa-globe-oceania:after,.fad.fa-earth-oceania:after,.fad.fa-globe-oceania:after{content:\"\\e47b\\e47b\"}.fa-duotone.fa-container-storage:after,.fad.fa-container-storage:after{content:\"\\f4b7\\f4b7\"}.fa-duotone.fa-face-pouting:after,.fad.fa-face-pouting:after{content:\"\\e387\\e387\"}.fa-duotone.fa-square-xmark:after,.fa-duotone.fa-times-square:after,.fa-duotone.fa-xmark-square:after,.fad.fa-square-xmark:after,.fad.fa-times-square:after,.fad.fa-xmark-square:after{content:\"\\f2d3\\f2d3\"}.fa-duotone.fa-exploding-head:after,.fa-duotone.fa-face-explode:after,.fad.fa-exploding-head:after,.fad.fa-face-explode:after{content:\"\\e2fe\\e2fe\"}.fa-duotone.fa-hashtag:after,.fad.fa-hashtag:after{content:\"\\23\\23\"}.fa-duotone.fa-expand-alt:after,.fa-duotone.fa-up-right-and-down-left-from-center:after,.fad.fa-expand-alt:after,.fad.fa-up-right-and-down-left-from-center:after{content:\"\\f424\\f424\"}.fa-duotone.fa-oil-can:after,.fad.fa-oil-can:after{content:\"\\f613\\f613\"}.fa-duotone.fa-t:after,.fad.fa-t:after{content:\"\\54\\54\"}.fa-duotone.fa-transformer-bolt:after,.fad.fa-transformer-bolt:after{content:\"\\e2a4\\e2a4\"}.fa-duotone.fa-hippo:after,.fad.fa-hippo:after{content:\"\\f6ed\\f6ed\"}.fa-duotone.fa-chart-column:after,.fad.fa-chart-column:after{content:\"\\e0e3\\e0e3\"}.fa-duotone.fa-cassette-vhs:after,.fa-duotone.fa-vhs:after,.fad.fa-cassette-vhs:after,.fad.fa-vhs:after{content:\"\\f8ec\\f8ec\"}.fa-duotone.fa-infinity:after,.fad.fa-infinity:after{content:\"\\f534\\f534\"}.fa-duotone.fa-vial-circle-check:after,.fad.fa-vial-circle-check:after{content:\"\\e596\\e596\"}.fa-duotone.fa-chimney:after,.fad.fa-chimney:after{content:\"\\f78b\\f78b\"}.fa-duotone.fa-object-intersect:after,.fad.fa-object-intersect:after{content:\"\\e49d\\e49d\"}.fa-duotone.fa-person-arrow-down-to-line:after,.fad.fa-person-arrow-down-to-line:after{content:\"\\e538\\e538\"}.fa-duotone.fa-voicemail:after,.fad.fa-voicemail:after{content:\"\\f897\\f897\"}.fa-duotone.fa-block-brick:after,.fa-duotone.fa-wall-brick:after,.fad.fa-block-brick:after,.fad.fa-wall-brick:after{content:\"\\e3db\\e3db\"}.fa-duotone.fa-fan:after,.fad.fa-fan:after{content:\"\\f863\\f863\"}.fa-duotone.fa-bags-shopping:after,.fad.fa-bags-shopping:after{content:\"\\f847\\f847\"}.fa-duotone.fa-paragraph-left:after,.fa-duotone.fa-paragraph-rtl:after,.fad.fa-paragraph-left:after,.fad.fa-paragraph-rtl:after{content:\"\\f878\\f878\"}.fa-duotone.fa-person-walking-luggage:after,.fad.fa-person-walking-luggage:after{content:\"\\e554\\e554\"}.fa-duotone.fa-caravan-alt:after,.fa-duotone.fa-caravan-simple:after,.fad.fa-caravan-alt:after,.fad.fa-caravan-simple:after{content:\"\\e000\\e000\"}.fa-duotone.fa-turtle:after,.fad.fa-turtle:after{content:\"\\f726\\f726\"}.fa-duotone.fa-arrows-alt-v:after,.fa-duotone.fa-up-down:after,.fad.fa-arrows-alt-v:after,.fad.fa-up-down:after{content:\"\\f338\\f338\"}.fa-duotone.fa-cloud-moon-rain:after,.fad.fa-cloud-moon-rain:after{content:\"\\f73c\\f73c\"}.fa-duotone.fa-booth-curtain:after,.fad.fa-booth-curtain:after{content:\"\\f734\\f734\"}.fa-duotone.fa-calendar:after,.fad.fa-calendar:after{content:\"\\f133\\f133\"}.fa-duotone.fa-box-heart:after,.fad.fa-box-heart:after{content:\"\\f49d\\f49d\"}.fa-duotone.fa-trailer:after,.fad.fa-trailer:after{content:\"\\e041\\e041\"}.fa-duotone.fa-user-doctor-message:after,.fa-duotone.fa-user-md-chat:after,.fad.fa-user-doctor-message:after,.fad.fa-user-md-chat:after{content:\"\\f82e\\f82e\"}.fa-duotone.fa-bahai:after,.fa-duotone.fa-haykal:after,.fad.fa-bahai:after,.fad.fa-haykal:after{content:\"\\f666\\f666\"}.fa-duotone.fa-amp-guitar:after,.fad.fa-amp-guitar:after{content:\"\\f8a1\\f8a1\"}.fa-duotone.fa-sd-card:after,.fad.fa-sd-card:after{content:\"\\f7c2\\f7c2\"}.fa-duotone.fa-volume-slash:after,.fad.fa-volume-slash:after{content:\"\\f2e2\\f2e2\"}.fa-duotone.fa-border-bottom:after,.fad.fa-border-bottom:after{content:\"\\f84d\\f84d\"}.fa-duotone.fa-wifi-1:after,.fa-duotone.fa-wifi-weak:after,.fad.fa-wifi-1:after,.fad.fa-wifi-weak:after{content:\"\\f6aa\\f6aa\"}.fa-duotone.fa-dragon:after,.fad.fa-dragon:after{content:\"\\f6d5\\f6d5\"}.fa-duotone.fa-shoe-prints:after,.fad.fa-shoe-prints:after{content:\"\\f54b\\f54b\"}.fa-duotone.fa-circle-plus:after,.fa-duotone.fa-plus-circle:after,.fad.fa-circle-plus:after,.fad.fa-plus-circle:after{content:\"\\f055\\f055\"}.fa-duotone.fa-face-grin-tongue-wink:after,.fa-duotone.fa-grin-tongue-wink:after,.fad.fa-face-grin-tongue-wink:after,.fad.fa-grin-tongue-wink:after{content:\"\\f58b\\f58b\"}.fa-duotone.fa-hand-holding:after,.fad.fa-hand-holding:after{content:\"\\f4bd\\f4bd\"}.fa-duotone.fa-plug-circle-exclamation:after,.fad.fa-plug-circle-exclamation:after{content:\"\\e55d\\e55d\"}.fa-duotone.fa-chain-broken:after,.fa-duotone.fa-chain-slash:after,.fa-duotone.fa-link-slash:after,.fa-duotone.fa-unlink:after,.fad.fa-chain-broken:after,.fad.fa-chain-slash:after,.fad.fa-link-slash:after,.fad.fa-unlink:after{content:\"\\f127\\f127\"}.fa-duotone.fa-clone:after,.fad.fa-clone:after{content:\"\\f24d\\f24d\"}.fa-duotone.fa-person-walking-arrow-loop-left:after,.fad.fa-person-walking-arrow-loop-left:after{content:\"\\e551\\e551\"}.fa-duotone.fa-arrow-up-z-a:after,.fa-duotone.fa-sort-alpha-up-alt:after,.fad.fa-arrow-up-z-a:after,.fad.fa-sort-alpha-up-alt:after{content:\"\\f882\\f882\"}.fa-duotone.fa-fire-alt:after,.fa-duotone.fa-fire-flame-curved:after,.fad.fa-fire-alt:after,.fad.fa-fire-flame-curved:after{content:\"\\f7e4\\f7e4\"}.fa-duotone.fa-tornado:after,.fad.fa-tornado:after{content:\"\\f76f\\f76f\"}.fa-duotone.fa-file-circle-plus:after,.fad.fa-file-circle-plus:after{content:\"\\e494\\e494\"}.fa-duotone.fa-delete-right:after,.fad.fa-delete-right:after{content:\"\\e154\\e154\"}.fa-duotone.fa-book-quran:after,.fa-duotone.fa-quran:after,.fad.fa-book-quran:after,.fad.fa-quran:after{content:\"\\f687\\f687\"}.fa-duotone.fa-circle-quarter:after,.fad.fa-circle-quarter:after{content:\"\\e11f\\e11f\"}.fa-duotone.fa-anchor:after,.fad.fa-anchor:after{content:\"\\f13d\\f13d\"}.fa-duotone.fa-border-all:after,.fad.fa-border-all:after{content:\"\\f84c\\f84c\"}.fa-duotone.fa-function:after,.fad.fa-function:after{content:\"\\f661\\f661\"}.fa-duotone.fa-angry:after,.fa-duotone.fa-face-angry:after,.fad.fa-angry:after,.fad.fa-face-angry:after{content:\"\\f556\\f556\"}.fa-duotone.fa-people-simple:after,.fad.fa-people-simple:after{content:\"\\e21b\\e21b\"}.fa-duotone.fa-cookie-bite:after,.fad.fa-cookie-bite:after{content:\"\\f564\\f564\"}.fa-duotone.fa-arrow-trend-down:after,.fad.fa-arrow-trend-down:after{content:\"\\e097\\e097\"}.fa-duotone.fa-feed:after,.fa-duotone.fa-rss:after,.fad.fa-feed:after,.fad.fa-rss:after{content:\"\\f09e\\f09e\"}.fa-duotone.fa-face-monocle:after,.fad.fa-face-monocle:after{content:\"\\e380\\e380\"}.fa-duotone.fa-draw-polygon:after,.fad.fa-draw-polygon:after{content:\"\\f5ee\\f5ee\"}.fa-duotone.fa-balance-scale:after,.fa-duotone.fa-scale-balanced:after,.fad.fa-balance-scale:after,.fad.fa-scale-balanced:after{content:\"\\f24e\\f24e\"}.fa-duotone.fa-calendar-lines:after,.fa-duotone.fa-calendar-note:after,.fad.fa-calendar-lines:after,.fad.fa-calendar-note:after{content:\"\\e0d5\\e0d5\"}.fa-duotone.fa-arrow-down-big-small:after,.fa-duotone.fa-sort-size-down:after,.fad.fa-arrow-down-big-small:after,.fad.fa-sort-size-down:after{content:\"\\f88c\\f88c\"}.fa-duotone.fa-gauge-simple-high:after,.fa-duotone.fa-tachometer-fast:after,.fa-duotone.fa-tachometer:after,.fad.fa-gauge-simple-high:after,.fad.fa-tachometer-fast:after,.fad.fa-tachometer:after{content:\"\\f62a\\f62a\"}.fa-duotone.fa-do-not-enter:after,.fad.fa-do-not-enter:after{content:\"\\f5ec\\f5ec\"}.fa-duotone.fa-shower:after,.fad.fa-shower:after{content:\"\\f2cc\\f2cc\"}.fa-duotone.fa-dice-d8:after,.fad.fa-dice-d8:after{content:\"\\f6d2\\f6d2\"}.fa-duotone.fa-desktop-alt:after,.fa-duotone.fa-desktop:after,.fad.fa-desktop-alt:after,.fad.fa-desktop:after{content:\"\\f390\\f390\"}.fa-duotone.fa-m:after,.fad.fa-m:after{content:\"\\4d\\4d\"}.fa-duotone.fa-grip-dots-vertical:after,.fad.fa-grip-dots-vertical:after{content:\"\\e411\\e411\"}.fa-duotone.fa-face-viewfinder:after,.fad.fa-face-viewfinder:after{content:\"\\e2ff\\e2ff\"}.fa-duotone.fa-creemee:after,.fa-duotone.fa-soft-serve:after,.fad.fa-creemee:after,.fad.fa-soft-serve:after{content:\"\\e400\\e400\"}.fa-duotone.fa-h5:after,.fad.fa-h5:after{content:\"\\e412\\e412\"}.fa-duotone.fa-hand-back-point-down:after,.fad.fa-hand-back-point-down:after{content:\"\\e19e\\e19e\"}.fa-duotone.fa-table-list:after,.fa-duotone.fa-th-list:after,.fad.fa-table-list:after,.fad.fa-th-list:after{content:\"\\f00b\\f00b\"}.fa-duotone.fa-comment-sms:after,.fa-duotone.fa-sms:after,.fad.fa-comment-sms:after,.fad.fa-sms:after{content:\"\\f7cd\\f7cd\"}.fa-duotone.fa-rectangle-landscape:after,.fa-duotone.fa-rectangle:after,.fad.fa-rectangle-landscape:after,.fad.fa-rectangle:after{content:\"\\f2fa\\f2fa\"}.fa-duotone.fa-clipboard-list-check:after,.fad.fa-clipboard-list-check:after{content:\"\\f737\\f737\"}.fa-duotone.fa-turkey:after,.fad.fa-turkey:after{content:\"\\f725\\f725\"}.fa-duotone.fa-book:after,.fad.fa-book:after{content:\"\\f02d\\f02d\"}.fa-duotone.fa-user-plus:after,.fad.fa-user-plus:after{content:\"\\f234\\f234\"}.fa-duotone.fa-ice-skate:after,.fad.fa-ice-skate:after{content:\"\\f7ac\\f7ac\"}.fa-duotone.fa-check:after,.fad.fa-check:after{content:\"\\f00c\\f00c\"}.fa-duotone.fa-battery-4:after,.fa-duotone.fa-battery-three-quarters:after,.fad.fa-battery-4:after,.fad.fa-battery-three-quarters:after{content:\"\\f241\\f241\"}.fa-duotone.fa-tomato:after,.fad.fa-tomato:after{content:\"\\e330\\e330\"}.fa-duotone.fa-sword-laser:after,.fad.fa-sword-laser:after{content:\"\\e03b\\e03b\"}.fa-duotone.fa-house-circle-check:after,.fad.fa-house-circle-check:after{content:\"\\e509\\e509\"}.fa-duotone.fa-buildings:after,.fad.fa-buildings:after{content:\"\\e0cc\\e0cc\"}.fa-duotone.fa-angle-left:after,.fad.fa-angle-left:after{content:\"\\f104\\f104\"}.fa-duotone.fa-cart-flatbed-boxes:after,.fa-duotone.fa-dolly-flatbed-alt:after,.fad.fa-cart-flatbed-boxes:after,.fad.fa-dolly-flatbed-alt:after{content:\"\\f475\\f475\"}.fa-duotone.fa-diagram-successor:after,.fad.fa-diagram-successor:after{content:\"\\e47a\\e47a\"}.fa-duotone.fa-truck-arrow-right:after,.fad.fa-truck-arrow-right:after{content:\"\\e58b\\e58b\"}.fa-duotone.fa-square-w:after,.fad.fa-square-w:after{content:\"\\e285\\e285\"}.fa-duotone.fa-arrows-split-up-and-left:after,.fad.fa-arrows-split-up-and-left:after{content:\"\\e4bc\\e4bc\"}.fa-duotone.fa-lamp:after,.fad.fa-lamp:after{content:\"\\f4ca\\f4ca\"}.fa-duotone.fa-airplay:after,.fad.fa-airplay:after{content:\"\\e089\\e089\"}.fa-duotone.fa-fist-raised:after,.fa-duotone.fa-hand-fist:after,.fad.fa-fist-raised:after,.fad.fa-hand-fist:after{content:\"\\f6de\\f6de\"}.fa-duotone.fa-shield-quartered:after,.fad.fa-shield-quartered:after{content:\"\\e575\\e575\"}.fa-duotone.fa-slash-forward:after,.fad.fa-slash-forward:after{content:\"\\2f\\2f\"}.fa-duotone.fa-location-pen:after,.fa-duotone.fa-map-marker-edit:after,.fad.fa-location-pen:after,.fad.fa-map-marker-edit:after{content:\"\\f607\\f607\"}.fa-duotone.fa-cloud-moon:after,.fad.fa-cloud-moon:after{content:\"\\f6c3\\f6c3\"}.fa-duotone.fa-pot-food:after,.fad.fa-pot-food:after{content:\"\\e43f\\e43f\"}.fa-duotone.fa-briefcase:after,.fad.fa-briefcase:after{content:\"\\f0b1\\f0b1\"}.fa-duotone.fa-person-falling:after,.fad.fa-person-falling:after{content:\"\\e546\\e546\"}.fa-duotone.fa-image-portrait:after,.fa-duotone.fa-portrait:after,.fad.fa-image-portrait:after,.fad.fa-portrait:after{content:\"\\f3e0\\f3e0\"}.fa-duotone.fa-user-tag:after,.fad.fa-user-tag:after{content:\"\\f507\\f507\"}.fa-duotone.fa-rug:after,.fad.fa-rug:after{content:\"\\e569\\e569\"}.fa-duotone.fa-print-slash:after,.fad.fa-print-slash:after{content:\"\\f686\\f686\"}.fa-duotone.fa-earth-europe:after,.fa-duotone.fa-globe-europe:after,.fad.fa-earth-europe:after,.fad.fa-globe-europe:after{content:\"\\f7a2\\f7a2\"}.fa-duotone.fa-cart-flatbed-suitcase:after,.fa-duotone.fa-luggage-cart:after,.fad.fa-cart-flatbed-suitcase:after,.fad.fa-luggage-cart:after{content:\"\\f59d\\f59d\"}.fa-duotone.fa-hand-back-point-ribbon:after,.fad.fa-hand-back-point-ribbon:after{content:\"\\e1a0\\e1a0\"}.fa-duotone.fa-rectangle-times:after,.fa-duotone.fa-rectangle-xmark:after,.fa-duotone.fa-times-rectangle:after,.fa-duotone.fa-window-close:after,.fad.fa-rectangle-times:after,.fad.fa-rectangle-xmark:after,.fad.fa-times-rectangle:after,.fad.fa-window-close:after{content:\"\\f410\\f410\"}.fa-duotone.fa-tire-rugged:after,.fad.fa-tire-rugged:after{content:\"\\f634\\f634\"}.fa-duotone.fa-lightbulb-dollar:after,.fad.fa-lightbulb-dollar:after{content:\"\\f670\\f670\"}.fa-duotone.fa-cowbell:after,.fad.fa-cowbell:after{content:\"\\f8b3\\f8b3\"}.fa-duotone.fa-baht-sign:after,.fad.fa-baht-sign:after{content:\"\\e0ac\\e0ac\"}.fa-duotone.fa-corner:after,.fad.fa-corner:after{content:\"\\e3fe\\e3fe\"}.fa-duotone.fa-chevron-double-right:after,.fa-duotone.fa-chevrons-right:after,.fad.fa-chevron-double-right:after,.fad.fa-chevrons-right:after{content:\"\\f324\\f324\"}.fa-duotone.fa-book-open:after,.fad.fa-book-open:after{content:\"\\f518\\f518\"}.fa-duotone.fa-book-journal-whills:after,.fa-duotone.fa-journal-whills:after,.fad.fa-book-journal-whills:after,.fad.fa-journal-whills:after{content:\"\\f66a\\f66a\"}.fa-duotone.fa-inhaler:after,.fad.fa-inhaler:after{content:\"\\f5f9\\f5f9\"}.fa-duotone.fa-handcuffs:after,.fad.fa-handcuffs:after{content:\"\\e4f8\\e4f8\"}.fa-duotone.fa-snake:after,.fad.fa-snake:after{content:\"\\f716\\f716\"}.fa-duotone.fa-exclamation-triangle:after,.fa-duotone.fa-triangle-exclamation:after,.fa-duotone.fa-warning:after,.fad.fa-exclamation-triangle:after,.fad.fa-triangle-exclamation:after,.fad.fa-warning:after{content:\"\\f071\\f071\"}.fa-duotone.fa-note-medical:after,.fad.fa-note-medical:after{content:\"\\e200\\e200\"}.fa-duotone.fa-database:after,.fad.fa-database:after{content:\"\\f1c0\\f1c0\"}.fa-duotone.fa-down-left:after,.fad.fa-down-left:after{content:\"\\e16a\\e16a\"}.fa-duotone.fa-arrow-turn-right:after,.fa-duotone.fa-mail-forward:after,.fa-duotone.fa-share:after,.fad.fa-arrow-turn-right:after,.fad.fa-mail-forward:after,.fad.fa-share:after{content:\"\\f064\\f064\"}.fa-duotone.fa-face-thinking:after,.fad.fa-face-thinking:after{content:\"\\e39b\\e39b\"}.fa-duotone.fa-turn-down-right:after,.fad.fa-turn-down-right:after{content:\"\\e455\\e455\"}.fa-duotone.fa-bottle-droplet:after,.fad.fa-bottle-droplet:after{content:\"\\e4c4\\e4c4\"}.fa-duotone.fa-mask-face:after,.fad.fa-mask-face:after{content:\"\\e1d7\\e1d7\"}.fa-duotone.fa-hill-rockslide:after,.fad.fa-hill-rockslide:after{content:\"\\e508\\e508\"}.fa-duotone.fa-scanner-keyboard:after,.fad.fa-scanner-keyboard:after{content:\"\\f489\\f489\"}.fa-duotone.fa-circle-o:after,.fad.fa-circle-o:after{content:\"\\e119\\e119\"}.fa-duotone.fa-grid-horizontal:after,.fad.fa-grid-horizontal:after{content:\"\\e307\\e307\"}.fa-duotone.fa-comment-alt-dollar:after,.fa-duotone.fa-message-dollar:after,.fad.fa-comment-alt-dollar:after,.fad.fa-message-dollar:after{content:\"\\f650\\f650\"}.fa-duotone.fa-exchange-alt:after,.fa-duotone.fa-right-left:after,.fad.fa-exchange-alt:after,.fad.fa-right-left:after{content:\"\\f362\\f362\"}.fa-duotone.fa-columns-3:after,.fad.fa-columns-3:after{content:\"\\e361\\e361\"}.fa-duotone.fa-paper-plane:after,.fad.fa-paper-plane:after{content:\"\\f1d8\\f1d8\"}.fa-duotone.fa-road-circle-exclamation:after,.fad.fa-road-circle-exclamation:after{content:\"\\e565\\e565\"}.fa-duotone.fa-dungeon:after,.fad.fa-dungeon:after{content:\"\\f6d9\\f6d9\"}.fa-duotone.fa-hand-holding-box:after,.fad.fa-hand-holding-box:after{content:\"\\f47b\\f47b\"}.fa-duotone.fa-input-text:after,.fad.fa-input-text:after{content:\"\\e1bf\\e1bf\"}.fa-duotone.fa-window-alt:after,.fa-duotone.fa-window-flip:after,.fad.fa-window-alt:after,.fad.fa-window-flip:after{content:\"\\f40f\\f40f\"}.fa-duotone.fa-align-right:after,.fad.fa-align-right:after{content:\"\\f038\\f038\"}.fa-duotone.fa-scanner-gun:after,.fa-duotone.fa-scanner:after,.fad.fa-scanner-gun:after,.fad.fa-scanner:after{content:\"\\f488\\f488\"}.fa-duotone.fa-tire:after,.fad.fa-tire:after{content:\"\\f631\\f631\"}.fa-duotone.fa-engine:after,.fad.fa-engine:after{content:\"\\e16e\\e16e\"}.fa-duotone.fa-money-bill-1-wave:after,.fa-duotone.fa-money-bill-wave-alt:after,.fad.fa-money-bill-1-wave:after,.fad.fa-money-bill-wave-alt:after{content:\"\\f53b\\f53b\"}.fa-duotone.fa-life-ring:after,.fad.fa-life-ring:after{content:\"\\f1cd\\f1cd\"}.fa-duotone.fa-hands:after,.fa-duotone.fa-sign-language:after,.fa-duotone.fa-signing:after,.fad.fa-hands:after,.fad.fa-sign-language:after,.fad.fa-signing:after{content:\"\\f2a7\\f2a7\"}.fa-duotone.fa-caret-circle-right:after,.fa-duotone.fa-circle-caret-right:after,.fad.fa-caret-circle-right:after,.fad.fa-circle-caret-right:after{content:\"\\f330\\f330\"}.fa-duotone.fa-wheat:after,.fad.fa-wheat:after{content:\"\\f72d\\f72d\"}.fa-duotone.fa-file-spreadsheet:after,.fad.fa-file-spreadsheet:after{content:\"\\f65b\\f65b\"}.fa-duotone.fa-audio-description-slash:after,.fad.fa-audio-description-slash:after{content:\"\\e0a8\\e0a8\"}.fa-duotone.fa-calendar-day:after,.fad.fa-calendar-day:after{content:\"\\f783\\f783\"}.fa-duotone.fa-ladder-water:after,.fa-duotone.fa-swimming-pool:after,.fa-duotone.fa-water-ladder:after,.fad.fa-ladder-water:after,.fad.fa-swimming-pool:after,.fad.fa-water-ladder:after{content:\"\\f5c5\\f5c5\"}.fa-duotone.fa-arrows-up-down:after,.fa-duotone.fa-arrows-v:after,.fad.fa-arrows-up-down:after,.fad.fa-arrows-v:after{content:\"\\f07d\\f07d\"}.fa-duotone.fa-chess-pawn-alt:after,.fa-duotone.fa-chess-pawn-piece:after,.fad.fa-chess-pawn-alt:after,.fad.fa-chess-pawn-piece:after{content:\"\\f444\\f444\"}.fa-duotone.fa-face-grimace:after,.fa-duotone.fa-grimace:after,.fad.fa-face-grimace:after,.fad.fa-grimace:after{content:\"\\f57f\\f57f\"}.fa-duotone.fa-wheelchair-alt:after,.fa-duotone.fa-wheelchair-move:after,.fad.fa-wheelchair-alt:after,.fad.fa-wheelchair-move:after{content:\"\\e2ce\\e2ce\"}.fa-duotone.fa-level-down-alt:after,.fa-duotone.fa-turn-down:after,.fad.fa-level-down-alt:after,.fad.fa-turn-down:after{content:\"\\f3be\\f3be\"}.fa-duotone.fa-square-s:after,.fad.fa-square-s:after{content:\"\\e27d\\e27d\"}.fa-duotone.fa-barcode-alt:after,.fa-duotone.fa-rectangle-barcode:after,.fad.fa-barcode-alt:after,.fad.fa-rectangle-barcode:after{content:\"\\f463\\f463\"}.fa-duotone.fa-person-walking-arrow-right:after,.fad.fa-person-walking-arrow-right:after{content:\"\\e552\\e552\"}.fa-duotone.fa-envelope-square:after,.fa-duotone.fa-square-envelope:after,.fad.fa-envelope-square:after,.fad.fa-square-envelope:after{content:\"\\f199\\f199\"}.fa-duotone.fa-dice:after,.fad.fa-dice:after{content:\"\\f522\\f522\"}.fa-duotone.fa-unicorn:after,.fad.fa-unicorn:after{content:\"\\f727\\f727\"}.fa-duotone.fa-bowling-ball:after,.fad.fa-bowling-ball:after{content:\"\\f436\\f436\"}.fa-duotone.fa-pompebled:after,.fad.fa-pompebled:after{content:\"\\e43d\\e43d\"}.fa-duotone.fa-brain:after,.fad.fa-brain:after{content:\"\\f5dc\\f5dc\"}.fa-duotone.fa-watch-smart:after,.fad.fa-watch-smart:after{content:\"\\e2cc\\e2cc\"}.fa-duotone.fa-book-user:after,.fad.fa-book-user:after{content:\"\\f7e7\\f7e7\"}.fa-duotone.fa-sensor-cloud:after,.fa-duotone.fa-sensor-smoke:after,.fad.fa-sensor-cloud:after,.fad.fa-sensor-smoke:after{content:\"\\e02c\\e02c\"}.fa-duotone.fa-clapperboard-play:after,.fad.fa-clapperboard-play:after{content:\"\\e132\\e132\"}.fa-duotone.fa-band-aid:after,.fa-duotone.fa-bandage:after,.fad.fa-band-aid:after,.fad.fa-bandage:after{content:\"\\f462\\f462\"}.fa-duotone.fa-calendar-minus:after,.fad.fa-calendar-minus:after{content:\"\\f272\\f272\"}.fa-duotone.fa-circle-xmark:after,.fa-duotone.fa-times-circle:after,.fa-duotone.fa-xmark-circle:after,.fad.fa-circle-xmark:after,.fad.fa-times-circle:after,.fad.fa-xmark-circle:after{content:\"\\f057\\f057\"}.fa-duotone.fa-circle-4:after,.fad.fa-circle-4:after{content:\"\\e0f1\\e0f1\"}.fa-duotone.fa-gifts:after,.fad.fa-gifts:after{content:\"\\f79c\\f79c\"}.fa-duotone.fa-album-collection:after,.fad.fa-album-collection:after{content:\"\\f8a0\\f8a0\"}.fa-duotone.fa-hotel:after,.fad.fa-hotel:after{content:\"\\f594\\f594\"}.fa-duotone.fa-earth-asia:after,.fa-duotone.fa-globe-asia:after,.fad.fa-earth-asia:after,.fad.fa-globe-asia:after{content:\"\\f57e\\f57e\"}.fa-duotone.fa-id-card-alt:after,.fa-duotone.fa-id-card-clip:after,.fad.fa-id-card-alt:after,.fad.fa-id-card-clip:after{content:\"\\f47f\\f47f\"}.fa-duotone.fa-magnifying-glass-plus:after,.fa-duotone.fa-search-plus:after,.fad.fa-magnifying-glass-plus:after,.fad.fa-search-plus:after{content:\"\\f00e\\f00e\"}.fa-duotone.fa-thumbs-up:after,.fad.fa-thumbs-up:after{content:\"\\f164\\f164\"}.fa-duotone.fa-cloud-showers:after,.fad.fa-cloud-showers:after{content:\"\\f73f\\f73f\"}.fa-duotone.fa-user-clock:after,.fad.fa-user-clock:after{content:\"\\f4fd\\f4fd\"}.fa-duotone.fa-onion:after,.fad.fa-onion:after{content:\"\\e427\\e427\"}.fa-duotone.fa-clock-twelve-thirty:after,.fad.fa-clock-twelve-thirty:after{content:\"\\e359\\e359\"}.fa-duotone.fa-arrow-down-to-dotted-line:after,.fad.fa-arrow-down-to-dotted-line:after{content:\"\\e095\\e095\"}.fa-duotone.fa-allergies:after,.fa-duotone.fa-hand-dots:after,.fad.fa-allergies:after,.fad.fa-hand-dots:after{content:\"\\f461\\f461\"}.fa-duotone.fa-file-invoice:after,.fad.fa-file-invoice:after{content:\"\\f570\\f570\"}.fa-duotone.fa-window-minimize:after,.fad.fa-window-minimize:after{content:\"\\f2d1\\f2d1\"}.fa-duotone.fa-rectangle-wide:after,.fad.fa-rectangle-wide:after{content:\"\\f2fc\\f2fc\"}.fa-duotone.fa-comment-arrow-up:after,.fad.fa-comment-arrow-up:after{content:\"\\e144\\e144\"}.fa-duotone.fa-garlic:after,.fad.fa-garlic:after{content:\"\\e40e\\e40e\"}.fa-duotone.fa-coffee:after,.fa-duotone.fa-mug-saucer:after,.fad.fa-coffee:after,.fad.fa-mug-saucer:after{content:\"\\f0f4\\f0f4\"}.fa-duotone.fa-brush:after,.fad.fa-brush:after{content:\"\\f55d\\f55d\"}.fa-duotone.fa-tree-decorated:after,.fad.fa-tree-decorated:after{content:\"\\f7dc\\f7dc\"}.fa-duotone.fa-mask:after,.fad.fa-mask:after{content:\"\\f6fa\\f6fa\"}.fa-duotone.fa-calendar-heart:after,.fad.fa-calendar-heart:after{content:\"\\e0d3\\e0d3\"}.fa-duotone.fa-magnifying-glass-minus:after,.fa-duotone.fa-search-minus:after,.fad.fa-magnifying-glass-minus:after,.fad.fa-search-minus:after{content:\"\\f010\\f010\"}.fa-duotone.fa-flower:after,.fad.fa-flower:after{content:\"\\f7ff\\f7ff\"}.fa-duotone.fa-ruler-vertical:after,.fad.fa-ruler-vertical:after{content:\"\\f548\\f548\"}.fa-duotone.fa-user-alt:after,.fa-duotone.fa-user-large:after,.fad.fa-user-alt:after,.fad.fa-user-large:after{content:\"\\f406\\f406\"}.fa-duotone.fa-starship-freighter:after,.fad.fa-starship-freighter:after{content:\"\\e03a\\e03a\"}.fa-duotone.fa-train-tram:after,.fad.fa-train-tram:after{content:\"\\e5b4\\e5b4\"}.fa-duotone.fa-bridge-suspension:after,.fad.fa-bridge-suspension:after{content:\"\\e4cd\\e4cd\"}.fa-duotone.fa-trash-check:after,.fad.fa-trash-check:after{content:\"\\e2af\\e2af\"}.fa-duotone.fa-user-nurse:after,.fad.fa-user-nurse:after{content:\"\\f82f\\f82f\"}.fa-duotone.fa-boombox:after,.fad.fa-boombox:after{content:\"\\f8a5\\f8a5\"}.fa-duotone.fa-syringe:after,.fad.fa-syringe:after{content:\"\\f48e\\f48e\"}.fa-duotone.fa-cloud-sun:after,.fad.fa-cloud-sun:after{content:\"\\f6c4\\f6c4\"}.fa-duotone.fa-shield-exclamation:after,.fad.fa-shield-exclamation:after{content:\"\\e247\\e247\"}.fa-duotone.fa-stopwatch-20:after,.fad.fa-stopwatch-20:after{content:\"\\e06f\\e06f\"}.fa-duotone.fa-square-full:after,.fad.fa-square-full:after{content:\"\\f45c\\f45c\"}.fa-duotone.fa-grip-dots:after,.fad.fa-grip-dots:after{content:\"\\e410\\e410\"}.fa-duotone.fa-comment-exclamation:after,.fad.fa-comment-exclamation:after{content:\"\\f4af\\f4af\"}.fa-duotone.fa-pen-swirl:after,.fad.fa-pen-swirl:after{content:\"\\e214\\e214\"}.fa-duotone.fa-falafel:after,.fad.fa-falafel:after{content:\"\\e40a\\e40a\"}.fa-duotone.fa-circle-2:after,.fad.fa-circle-2:after{content:\"\\e0ef\\e0ef\"}.fa-duotone.fa-magnet:after,.fad.fa-magnet:after{content:\"\\f076\\f076\"}.fa-duotone.fa-jar:after,.fad.fa-jar:after{content:\"\\e516\\e516\"}.fa-duotone.fa-gramophone:after,.fad.fa-gramophone:after{content:\"\\f8bd\\f8bd\"}.fa-duotone.fa-dice-d12:after,.fad.fa-dice-d12:after{content:\"\\f6ce\\f6ce\"}.fa-duotone.fa-note-sticky:after,.fa-duotone.fa-sticky-note:after,.fad.fa-note-sticky:after,.fad.fa-sticky-note:after{content:\"\\f249\\f249\"}.fa-duotone.fa-arrow-alt-down:after,.fa-duotone.fa-down:after,.fad.fa-arrow-alt-down:after,.fad.fa-down:after{content:\"\\f354\\f354\"}.fa-duotone.fa-100:after,.fa-duotone.fa-hundred-points:after,.fad.fa-100:after,.fad.fa-hundred-points:after{content:\"\\e41c\\e41c\"}.fa-duotone.fa-paperclip-vertical:after,.fad.fa-paperclip-vertical:after{content:\"\\e3c2\\e3c2\"}.fa-duotone.fa-wind-circle-exclamation:after,.fa-duotone.fa-wind-warning:after,.fad.fa-wind-circle-exclamation:after,.fad.fa-wind-warning:after{content:\"\\f776\\f776\"}.fa-duotone.fa-location-pin-slash:after,.fa-duotone.fa-map-marker-slash:after,.fad.fa-location-pin-slash:after,.fad.fa-map-marker-slash:after{content:\"\\f60c\\f60c\"}.fa-duotone.fa-face-sad-sweat:after,.fad.fa-face-sad-sweat:after{content:\"\\e38a\\e38a\"}.fa-duotone.fa-bug-slash:after,.fad.fa-bug-slash:after{content:\"\\e490\\e490\"}.fa-duotone.fa-cupcake:after,.fad.fa-cupcake:after{content:\"\\e402\\e402\"}.fa-duotone.fa-light-switch-off:after,.fad.fa-light-switch-off:after{content:\"\\e018\\e018\"}.fa-duotone.fa-toggle-large-off:after,.fad.fa-toggle-large-off:after{content:\"\\e5b0\\e5b0\"}.fa-duotone.fa-pen-fancy-slash:after,.fad.fa-pen-fancy-slash:after{content:\"\\e210\\e210\"}.fa-duotone.fa-truck-container:after,.fad.fa-truck-container:after{content:\"\\f4dc\\f4dc\"}.fa-duotone.fa-boot:after,.fad.fa-boot:after{content:\"\\f782\\f782\"}.fa-duotone.fa-arrow-up-from-water-pump:after,.fad.fa-arrow-up-from-water-pump:after{content:\"\\e4b6\\e4b6\"}.fa-duotone.fa-file-check:after,.fad.fa-file-check:after{content:\"\\f316\\f316\"}.fa-duotone.fa-bone:after,.fad.fa-bone:after{content:\"\\f5d7\\f5d7\"}.fa-duotone.fa-cards-blank:after,.fad.fa-cards-blank:after{content:\"\\e4df\\e4df\"}.fa-duotone.fa-circle-3:after,.fad.fa-circle-3:after{content:\"\\e0f0\\e0f0\"}.fa-duotone.fa-bench-tree:after,.fad.fa-bench-tree:after{content:\"\\e2e7\\e2e7\"}.fa-duotone.fa-keyboard-brightness-low:after,.fad.fa-keyboard-brightness-low:after{content:\"\\e1c1\\e1c1\"}.fa-duotone.fa-ski-boot-ski:after,.fad.fa-ski-boot-ski:after{content:\"\\e3cd\\e3cd\"}.fa-duotone.fa-brain-circuit:after,.fad.fa-brain-circuit:after{content:\"\\e0c6\\e0c6\"}.fa-duotone.fa-user-injured:after,.fad.fa-user-injured:after{content:\"\\f728\\f728\"}.fa-duotone.fa-block-brick-fire:after,.fa-duotone.fa-firewall:after,.fad.fa-block-brick-fire:after,.fad.fa-firewall:after{content:\"\\e3dc\\e3dc\"}.fa-duotone.fa-face-sad-tear:after,.fa-duotone.fa-sad-tear:after,.fad.fa-face-sad-tear:after,.fad.fa-sad-tear:after{content:\"\\f5b4\\f5b4\"}.fa-duotone.fa-plane:after,.fad.fa-plane:after{content:\"\\f072\\f072\"}.fa-duotone.fa-tent-arrows-down:after,.fad.fa-tent-arrows-down:after{content:\"\\e581\\e581\"}.fa-duotone.fa-exclamation:after,.fad.fa-exclamation:after{content:\"\\21\\21\"}.fa-duotone.fa-arrows-spin:after,.fad.fa-arrows-spin:after{content:\"\\e4bb\\e4bb\"}.fa-duotone.fa-face-smile-relaxed:after,.fad.fa-face-smile-relaxed:after{content:\"\\e392\\e392\"}.fa-duotone.fa-comment-times:after,.fa-duotone.fa-comment-xmark:after,.fad.fa-comment-times:after,.fad.fa-comment-xmark:after{content:\"\\f4b5\\f4b5\"}.fa-duotone.fa-print:after,.fad.fa-print:after{content:\"\\f02f\\f02f\"}.fa-duotone.fa-try:after,.fa-duotone.fa-turkish-lira-sign:after,.fa-duotone.fa-turkish-lira:after,.fad.fa-try:after,.fad.fa-turkish-lira-sign:after,.fad.fa-turkish-lira:after{content:\"\\e2bb\\e2bb\"}.fa-duotone.fa-face-nose-steam:after,.fad.fa-face-nose-steam:after{content:\"\\e382\\e382\"}.fa-duotone.fa-circle-waveform-lines:after,.fa-duotone.fa-waveform-circle:after,.fad.fa-circle-waveform-lines:after,.fad.fa-waveform-circle:after{content:\"\\e12d\\e12d\"}.fa-duotone.fa-dollar-sign:after,.fa-duotone.fa-dollar:after,.fa-duotone.fa-usd:after,.fad.fa-dollar-sign:after,.fad.fa-dollar:after,.fad.fa-usd:after{content:\"\\24\\24\"}.fa-duotone.fa-ferris-wheel:after,.fad.fa-ferris-wheel:after{content:\"\\e174\\e174\"}.fa-duotone.fa-computer-speaker:after,.fad.fa-computer-speaker:after{content:\"\\f8b2\\f8b2\"}.fa-duotone.fa-skull-cow:after,.fad.fa-skull-cow:after{content:\"\\f8de\\f8de\"}.fa-duotone.fa-x:after,.fad.fa-x:after{content:\"\\58\\58\"}.fa-duotone.fa-magnifying-glass-dollar:after,.fa-duotone.fa-search-dollar:after,.fad.fa-magnifying-glass-dollar:after,.fad.fa-search-dollar:after{content:\"\\f688\\f688\"}.fa-duotone.fa-users-cog:after,.fa-duotone.fa-users-gear:after,.fad.fa-users-cog:after,.fad.fa-users-gear:after{content:\"\\f509\\f509\"}.fa-duotone.fa-person-military-pointing:after,.fad.fa-person-military-pointing:after{content:\"\\e54a\\e54a\"}.fa-duotone.fa-bank:after,.fa-duotone.fa-building-columns:after,.fa-duotone.fa-institution:after,.fa-duotone.fa-museum:after,.fa-duotone.fa-university:after,.fad.fa-bank:after,.fad.fa-building-columns:after,.fad.fa-institution:after,.fad.fa-museum:after,.fad.fa-university:after{content:\"\\f19c\\f19c\"}.fa-duotone.fa-circle-t:after,.fad.fa-circle-t:after{content:\"\\e124\\e124\"}.fa-duotone.fa-sack:after,.fad.fa-sack:after{content:\"\\f81c\\f81c\"}.fa-duotone.fa-grid-2:after,.fad.fa-grid-2:after{content:\"\\e196\\e196\"}.fa-duotone.fa-camera-cctv:after,.fa-duotone.fa-cctv:after,.fad.fa-camera-cctv:after,.fad.fa-cctv:after{content:\"\\f8ac\\f8ac\"}.fa-duotone.fa-umbrella:after,.fad.fa-umbrella:after{content:\"\\f0e9\\f0e9\"}.fa-duotone.fa-trowel:after,.fad.fa-trowel:after{content:\"\\e589\\e589\"}.fa-duotone.fa-horizontal-rule:after,.fad.fa-horizontal-rule:after{content:\"\\f86c\\f86c\"}.fa-duotone.fa-bed-alt:after,.fa-duotone.fa-bed-front:after,.fad.fa-bed-alt:after,.fad.fa-bed-front:after{content:\"\\f8f7\\f8f7\"}.fa-duotone.fa-d:after,.fad.fa-d:after{content:\"\\44\\44\"}.fa-duotone.fa-stapler:after,.fad.fa-stapler:after{content:\"\\e5af\\e5af\"}.fa-duotone.fa-masks-theater:after,.fa-duotone.fa-theater-masks:after,.fad.fa-masks-theater:after,.fad.fa-theater-masks:after{content:\"\\f630\\f630\"}.fa-duotone.fa-kip-sign:after,.fad.fa-kip-sign:after{content:\"\\e1c4\\e1c4\"}.fa-duotone.fa-face-woozy:after,.fad.fa-face-woozy:after{content:\"\\e3a2\\e3a2\"}.fa-duotone.fa-cloud-question:after,.fad.fa-cloud-question:after{content:\"\\e492\\e492\"}.fa-duotone.fa-pineapple:after,.fad.fa-pineapple:after{content:\"\\e31f\\e31f\"}.fa-duotone.fa-hand-point-left:after,.fad.fa-hand-point-left:after{content:\"\\f0a5\\f0a5\"}.fa-duotone.fa-gallery-thumbnails:after,.fad.fa-gallery-thumbnails:after{content:\"\\e3aa\\e3aa\"}.fa-duotone.fa-circle-j:after,.fad.fa-circle-j:after{content:\"\\e112\\e112\"}.fa-duotone.fa-eyes:after,.fad.fa-eyes:after{content:\"\\e367\\e367\"}.fa-duotone.fa-handshake-alt:after,.fa-duotone.fa-handshake-simple:after,.fad.fa-handshake-alt:after,.fad.fa-handshake-simple:after{content:\"\\f4c6\\f4c6\"}.fa-duotone.fa-file-caret-up:after,.fa-duotone.fa-page-caret-up:after,.fad.fa-file-caret-up:after,.fad.fa-page-caret-up:after{content:\"\\e42a\\e42a\"}.fa-duotone.fa-fighter-jet:after,.fa-duotone.fa-jet-fighter:after,.fad.fa-fighter-jet:after,.fad.fa-jet-fighter:after{content:\"\\f0fb\\f0fb\"}.fa-duotone.fa-comet:after,.fad.fa-comet:after{content:\"\\e003\\e003\"}.fa-duotone.fa-share-alt-square:after,.fa-duotone.fa-square-share-nodes:after,.fad.fa-share-alt-square:after,.fad.fa-square-share-nodes:after{content:\"\\f1e1\\f1e1\"}.fa-duotone.fa-shield-keyhole:after,.fad.fa-shield-keyhole:after{content:\"\\e248\\e248\"}.fa-duotone.fa-barcode:after,.fad.fa-barcode:after{content:\"\\f02a\\f02a\"}.fa-duotone.fa-plus-minus:after,.fad.fa-plus-minus:after{content:\"\\e43c\\e43c\"}.fa-duotone.fa-sliders-v-square:after,.fa-duotone.fa-square-sliders-vertical:after,.fad.fa-sliders-v-square:after,.fad.fa-square-sliders-vertical:after{content:\"\\f3f2\\f3f2\"}.fa-duotone.fa-video-camera:after,.fa-duotone.fa-video:after,.fad.fa-video-camera:after,.fad.fa-video:after{content:\"\\f03d\\f03d\"}.fa-duotone.fa-comment-middle-alt:after,.fa-duotone.fa-message-middle:after,.fad.fa-comment-middle-alt:after,.fad.fa-message-middle:after{content:\"\\e1e1\\e1e1\"}.fa-duotone.fa-graduation-cap:after,.fa-duotone.fa-mortar-board:after,.fad.fa-graduation-cap:after,.fad.fa-mortar-board:after{content:\"\\f19d\\f19d\"}.fa-duotone.fa-hand-holding-medical:after,.fad.fa-hand-holding-medical:after{content:\"\\e05c\\e05c\"}.fa-duotone.fa-person-circle-check:after,.fad.fa-person-circle-check:after{content:\"\\e53e\\e53e\"}.fa-duotone.fa-square-z:after,.fad.fa-square-z:after{content:\"\\e288\\e288\"}.fa-duotone.fa-comment-alt-text:after,.fa-duotone.fa-message-text:after,.fad.fa-comment-alt-text:after,.fad.fa-message-text:after{content:\"\\e1e6\\e1e6\"}.fa-duotone.fa-level-up-alt:after,.fa-duotone.fa-turn-up:after,.fad.fa-level-up-alt:after,.fad.fa-turn-up:after{content:\"\\f3bf\\f3bf\"}:host,:root{--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Pro\"}@font-face{font-family:\"Font Awesome 6 Pro\";font-style:normal;font-weight:300;font-display:block;src:url(../webfonts/fa-light-300.woff2) format(\"woff2\"),url(../webfonts/fa-light-300.ttf) format(\"truetype\")}.fa-light,.fal{font-weight:300}:host,:root{--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Pro\"}@font-face{font-family:\"Font Awesome 6 Pro\";font-style:normal;font-weight:400;font-display:block;src:url(../webfonts/fa-regular-400.woff2) format(\"woff2\"),url(../webfonts/fa-regular-400.ttf) format(\"truetype\")}.fa-regular,.far{font-weight:400}:host,:root{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Pro\"}@font-face{font-family:\"Font Awesome 6 Pro\";font-style:normal;font-weight:900;font-display:block;src:url(../webfonts/fa-solid-900.woff2) format(\"woff2\"),url(../webfonts/fa-solid-900.ttf) format(\"truetype\")}.fa-solid,.fas{font-weight:900}:host,:root{--fa-style-family-classic:\"Font Awesome 6 Pro\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Pro\"}@font-face{font-family:\"Font Awesome 6 Pro\";font-style:normal;font-weight:100;font-display:block;src:url(../webfonts/fa-thin-100.woff2) format(\"woff2\"),url(../webfonts/fa-thin-100.ttf) format(\"truetype\")}.fa-thin,.fat{font-weight:100}@font-face{font-family:\"Font Awesome 5 Brands\";font-display:block;font-weight:400;src:url(../webfonts/fa-brands-400.woff2) format(\"woff2\"),url(../webfonts/fa-brands-400.ttf) format(\"truetype\")}@font-face{font-family:\"Font Awesome 5 Pro\";font-display:block;font-weight:900;src:url(../webfonts/fa-solid-900.woff2) format(\"woff2\"),url(../webfonts/fa-solid-900.ttf) format(\"truetype\")}@font-face{font-family:\"Font Awesome 5 Pro\";font-display:block;font-weight:400;src:url(../webfonts/fa-regular-400.woff2) format(\"woff2\"),url(../webfonts/fa-regular-400.ttf) format(\"truetype\")}@font-face{font-family:\"Font Awesome 5 Pro\";font-display:block;font-weight:300;src:url(../webfonts/fa-light-300.woff2) format(\"woff2\"),url(../webfonts/fa-light-300.ttf) format(\"truetype\")}@font-face{font-family:\"Font Awesome 5 Duotone\";font-display:block;font-weight:900;src:url(../webfonts/fa-duotone-900.woff2) format(\"woff2\"),url(../webfonts/fa-duotone-900.ttf) format(\"truetype\")}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-solid-900.woff2) format(\"woff2\"),url(../webfonts/fa-solid-900.ttf) format(\"truetype\")}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-brands-400.woff2) format(\"woff2\"),url(../webfonts/fa-brands-400.ttf) format(\"truetype\")}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-regular-400.woff2) format(\"woff2\"),url(../webfonts/fa-regular-400.ttf) format(\"truetype\");unicode-range:u+f003,u+f006,u+f014,u+f016-f017,u+f01a-f01b,u+f01d,u+f022,u+f03e,u+f044,u+f046,u+f05c-f05d,u+f06e,u+f070,u+f087-f088,u+f08a,u+f094,u+f096-f097,u+f09d,u+f0a0,u+f0a2,u+f0a4-f0a7,u+f0c5,u+f0c7,u+f0e5-f0e6,u+f0eb,u+f0f6-f0f8,u+f10c,u+f114-f115,u+f118-f11a,u+f11c-f11d,u+f133,u+f147,u+f14e,u+f150-f152,u+f185-f186,u+f18e,u+f190-f192,u+f196,u+f1c1-f1c9,u+f1d9,u+f1db,u+f1e3,u+f1ea,u+f1f7,u+f1f9,u+f20a,u+f247-f248,u+f24a,u+f24d,u+f255-f25b,u+f25d,u+f271-f274,u+f278,u+f27b,u+f28c,u+f28e,u+f29c,u+f2b5,u+f2b7,u+f2ba,u+f2bc,u+f2be,u+f2c0-f2c1,u+f2c3,u+f2d0,u+f2d2,u+f2d4,u+f2dc}@font-face{font-family:\"FontAwesome\";font-display:block;src:url(../webfonts/fa-v4compatibility.woff2) format(\"woff2\"),url(../webfonts/fa-v4compatibility.ttf) format(\"truetype\");unicode-range:u+f041,u+f047,u+f065-f066,u+f07d-f07e,u+f080,u+f08b,u+f08e,u+f090,u+f09a,u+f0ac,u+f0ae,u+f0b2,u+f0d0,u+f0d6,u+f0e4,u+f0ec,u+f10a-f10b,u+f123,u+f13e,u+f148-f149,u+f14c,u+f156,u+f15e,u+f160-f161,u+f163,u+f175-f178,u+f195,u+f1f8,u+f219,u+f27a}";

const GcIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("i", { class: this.name, style: { fontSize: this.getSize(), color: this.color, fontWeight: this.fontWeight } })));
  }
};
GcIcon.style = allMinCss;

const gcInputCss = ".sc-gc-input-h{display:flex}input.sc-gc-input{background:var(--gc-color-contrast-grey);border:1px solid var(--gc-color-second-grey);border-radius:5px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative;display:inline-block;margin:0}input[disabled].sc-gc-input{color:#00000040;background-color:#f5f5f5;box-shadow:none;cursor:not-allowed;opacity:1}input.sc-gc-input:focus{background-color:var(--gc-color-contrast-grey);border-color:var(--gc-color-primary);outline:0;box-shadow:0 3px 8px 0 rgb(0 0 0 / 10%)}.sc-gc-input::placeholder{color:var(--gc-color-placeholder)}.sc-gc-input:-ms-input-placeholder{color:var(--gc-color-placeholder)}.sc-gc-input::-ms-input-placeholder{color:var(--gc-color-placeholder)}gc-icon.sc-gc-input{position:absolute;margin-top:12px;margin-left:12px}input.has-prefix.sc-gc-input{padding-left:36px}";

const GcInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcChange = createEvent(this, "gc:change", 7);
    /**
     * The input type
     */
    this.type = 'text';
    this.onInput = (ev) => {
      const input = ev.target;
      this.gcChange.emit({ value: input.value || '' });
    };
  }
  render() {
    return (h(Host, null, h("input", { class: this.prefixIcon ? `has-prefix ${this.class}` : this.class, name: this.gcName, onInput: this.onInput, id: this.gcId, type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled }), this.prefixIcon && h("gc-icon", { color: "var(--gc-color-primary)", name: this.prefixIcon })));
  }
};
GcInput.style = gcInputCss;

const gcLabelCss = "label{font-family:var(--gc-font-family);font-weight:var(--gc-font-weight-label);font-size:var(--gc-font-size-label);color:var(--gc-color-label-grey);line-height:var(--gc-line-height-label);text-transform:uppercase}";

const GcLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class || '';
  }
  render() {
    return (h("label", { class: this.getClassName(), id: this.gcId, htmlFor: this.gcFor }, h("slot", null)));
  }
};
GcLabel.style = gcLabelCss;

const typographyCss = ".gc-h1,.gc-h2,.gc-h3{font-family:var(--gc-font-family);color:var(--gc-color-text-grey);margin:0}.gc-h1{font-weight:var(--gc-font-weight-h1);font-size:var(--gc-font-size-h1);line-height:var(--gc-line-height-h1)}.gc-h2{font-weight:var(--gc-font-weight-h2);font-size:var(--gc-font-size-h2);line-height:var(--gc-line-height-h2)}.gc-h3{font-weight:var(--gc-font-weight-h3);font-size:var(--gc-font-size-h3);line-height:var(--gc-line-height-h3)}.gc-ul li{position:relative;list-style-type:none;line-height:var(--gc-list-style-line-height)}.gc-ul li:before{content:\"\";position:absolute;top:8px;left:-23px;width:var(--gc-font-size);height:var(--gc-font-size);background-image:var(--gc-list-style-icon)}.gc-ol li{position:relative;line-height:var(--gc-list-style-line-height)}.gc-link{text-decoration-line:underline;color:var(--gc-color-primary)}";

const GcLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * target link
     */
    this.target = '_self';
  }
  getClassName() {
    return this.class ? `gc-link ${this.class}` : 'gc-link';
  }
  render() {
    if (this.icon) {
      return (h("div", { style: { display: 'flex', alignItems: 'baseline', cursor: 'pointer' } }, h("gc-icon", { name: this.icon, size: "13px", color: "#397FF7" }), h("a", { target: this.target, style: { color: this.color || 'var(--gc-color-primary)', marginLeft: '8px' }, class: this.getClassName(), id: this.gcId, href: this.gcTo }, h("slot", null))));
    }
    return (h("a", { target: this.target, style: { color: this.color || 'var(--gc-color-primary)' }, class: this.getClassName(), id: this.gcId, href: this.gcTo }, h("slot", null)));
  }
};
GcLink.style = typographyCss;

const gcMenuCss = ":host{display:inline-block}.menu{background:var(--gc-color-contrast-grey);border:1px solid var(--gc-color-second-grey);box-sizing:border-box;border-bottom-left-radius:5px;border-bottom-right-radius:5px}::slotted(*:last-child){border-bottom:0px}";

const GcMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      return h("div", { style: { textAlign: 'center', padding: '12px' } }, "Empty data");
    }
  }
  render() {
    return (h("div", { part: "custom", class: "menu" }, h("slot", null), this.renderEmptyState()));
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "emptyState": ["parseEmptyState"]
  }; }
};
GcMenu.style = gcMenuCss;

const gcMenuItemCss = ":host{display:block;border-bottom:1px solid var(--gc-color-second-grey)}.menu-item{cursor:pointer;padding:14px;box-sizing:border-box;display:flex;align-items:center;color:var(--gc-color-text-grey);outline:none}.menu-item .item-section{display:flex;align-items:center}.menu-item .slot-main{display:block;flex:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.menu-item:hover,.menu-item.has-focus:not(.active){background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end,.menu-item.has-focus:not(.active) .slot-end{color:var(--gc-color-contrast-white)}.menu-item:hover .slot-end{color:var(--gc-color-contrast-white)}.menu-item.active,.menu-item.selected{background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.menu-item.disabled{cursor:not-allowed;color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled);opacity:0.2}.menu-item.disabled:hover,.menu-item.disabled.has-focus:not(.active){color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled)}.menu-item.disabled.active,.menu-item.disabled.selected{color:var(--gc-color-disabled);background-color:var(--gc-color-background-disabled)}.menu-item:not(.start-slot-has-content) .slot-start{display:none}.menu-item:not(.end-slot-has-content) .slot-end{display:none}:host:last-child{border-bottom:0px}";

const GcMenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
          [this.class]: this.class ? true : false,
        }, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, onMouseEnter: this.mouseEnterHandler, onMouseLeave: this.mouseLeaveHandler, "aria-disabled": this.disabled }, h("div", { style: this.getStyles(), class: "item-section slot-main" }, h("slot", null)))));
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
  get elm() { return getElement(this); }
};
GcMenuItem.style = gcMenuItemCss;

const GcOl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-ol ${this.class}` : 'gc-ol';
  }
  render() {
    return (h("ol", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
};

const gcPaginationCss = ".gc__pagination{display:flex;align-items:center}.gc__pagination .gc__pagination-page{background:#FFFFFF;border:1px solid var(--gc-color-second-grey);border-radius:6px;color:var(--gc-color-primary);padding:2px;min-width:26px;height:26px;text-align:center;align-items:center;display:flex;justify-content:center;margin-right:8px;cursor:pointer}.gc__pagination .gc__pagination-page:last-child{margin-right:0}.gc__pagination .gc__pagination-page:last-child i{line-height:26px}.gc__pagination .gc__pagination-page.active,.gc__pagination .gc__pagination-page:hover{background:var(--gc-color-primary);color:var(--gc-color-contrast-white)}.gc__pagination-dots{color:var(--gc-color-primary);margin-right:8px}.gc__pagination .gc__pagination-page.active,.gc__pagination .gc__pagination-page:hover>gc-icon>i{color:var(--gc-color-contrast-white) !important}";

const GcPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcChangePage = createEvent(this, "gc:change-page", 7);
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
          rangeWithDots.push(h("div", { onClick: () => this.onChange(l + 1), class: { 'gc__pagination-page': true, 'active': c === l + 1 } }, l + 1));
        }
        else if (i - l !== 1) {
          rangeWithDots.push(h("div", { class: "gc__pagination-dots" }, "..."));
        }
      }
      rangeWithDots.push(h("div", { onClick: () => this.onChange(i), class: { 'gc__pagination-page': true, 'active': c === i } }, i));
      l = i;
    }
    return rangeWithDots;
  }
  render() {
    return (h("div", { class: "gc__pagination" }, this.activePage !== 1 && (h("div", { onClick: () => this.onChange(this.activePage - 1), class: "gc__pagination-page" }, h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-left", size: "sm" }))), this.renderPagination(this.activePage, this.getMaxPage()), this.activePage !== this.getMaxPage() && (h("div", { onClick: () => this.onChange(this.activePage + 1), class: "gc__pagination-page" }, h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-regular fa-chevron-right", size: "sm" })))));
  }
};
GcPagination.style = gcPaginationCss;

const gcSelectCss = ".input-container.sc-gc-select{display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--gc-color-contrast-grey);border-color:var(--gc-color-second-grey);border-style:solid;border-radius:5px;border-width:1px;height:42px;width:100%;min-width:0;padding:12px;box-sizing:border-box;position:relative}.input-container.sc-gc-select .input.sc-gc-select{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;padding:0}.input-container.sc-gc-select .slot-container.sc-gc-select{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot.sc-gc-select-s>*{padding-bottom:0 !important;margin-bottom:0 !important}.input-container.start-slot-has-content.sc-gc-select .input.sc-gc-select{padding-left:0.5rem}.input-container.end-slot-has-content.sc-gc-select .input.sc-gc-select{padding-right:0.5rem}.input-container.sc-gc-select:not(.start-slot-has-content) .slot-container.start.sc-gc-select{display:none}.input-container.sc-gc-select:not(.end-slot-has-content) .slot-container.end.sc-gc-select{display:none}.input-container.sc-gc-select .input-action.sc-gc-select{cursor:pointer}.input-container.sc-gc-select .input-action.sc-gc-select:hover{--text-color:var(--text-secondary)}.dropdown.sc-gc-select{position:relative;display:block;background:var(--gc-color-contrast-grey)}.dropdown.sc-gc-select .gc__dropdown-content.sc-gc-select{z-index:var(--gc-z-index-gc__dropdown-content);position:absolute;width:max-content;transition:transform 0.1s ease-out 0s}.dropdown.sc-gc-select .caret-down.sc-gc-select{transition:transform 0.1s ease-out 0s}.dropdown.is-open.sc-gc-select .gc__dropdown-content.sc-gc-select{transform:scale(1)}.dropdown.is-open.sc-gc-select .caret-down.sc-gc-select{transform:rotate(180deg)}.dropdown.bottom-right.sc-gc-select .gc__dropdown-content.sc-gc-select{top:calc(100%);left:0;transform-origin:top}.dropdown.bottom-left.sc-gc-select .gc__dropdown-content.sc-gc-select{top:calc(100%);right:0;transform-origin:top}.dropdown.top-right.sc-gc-select .gc__dropdown-content.sc-gc-select{bottom:calc(100%);left:0;transform-origin:bottom}.dropdown.top-left.sc-gc-select .gc__dropdown-content.sc-gc-select{bottom:calc(100%);right:0;transform-origin:bottom}.select.sc-gc-select{cursor:pointer}.select.sc-gc-select .gc__dropdown-content.sc-gc-select{width:100%;min-width:10rem}.select.sc-gc-select .menu.sc-gc-select{width:100%;max-height:260px;overflow-x:auto}.select.sc-gc-select .menu.sc-gc-select::-webkit-scrollbar{width:2px}.select.sc-gc-select .menu.sc-gc-select::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}.select.sc-gc-select .menu.sc-gc-select::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}.select.sc-gc-select .display-value.sc-gc-select{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--gc-color-placeholder);max-width:98%}.select.sc-gc-select .has-value.sc-gc-select .display-value.sc-gc-select{color:var(--gc-color-text-grey)}.select.sc-gc-select .multi-select-value.sc-gc-select{padding-inline-end:0.5rem}.select.sc-gc-select .multi-select-value.sc-gc-select:last-child{padding-inline-end:0}.select.sc-gc-select .start-search.sc-gc-select{height:10rem;display:flex;align-items:center;justify-content:center;flex-direction:column}.dropdown.bottom-right.is-open.sc-gc-select .input-container.sc-gc-select,.dropdown.bottom-left.is-open.sc-gc-select .input-container.sc-gc-select{border-bottom-width:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.dropdown.top-right.is-open.sc-gc-select .input-container.sc-gc-select,.dropdown.top-left.is-open.sc-gc-select .input-container.sc-gc-select{border-top-width:0;border-top-right-radius:0;border-top-left-radius:0}.dropdown.top-right.is-open.sc-gc-select gc-menu.sc-gc-select::part(custom){border-top-right-radius:5px;border-top-left-radius:5px;border-bottom-right-radius:0;border-bottom-left-radius:0}div.input-container.search-none.sc-gc-select.has-value.sc-gc-select>div.input.display-value.sc-gc-select.sc-gc-select{color:var(--gc-color-grey-text)}div.input-container.search-contains.sc-gc-select.has-value.sc-gc-select>div.input.display-value.sc-gc-select.sc-gc-select{color:var(--gc-color-grey-text)}.gc__section-hidden.sc-gc-select{flex:1}";

const GcSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatChange = createEvent(this, "gc:change", 7);
    this.p4ActionClick = createEvent(this, "gc:action-click", 7);
    this.goatSearch = createEvent(this, "gc:search", 7);
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
    this.hasFocus = false;
    this.searchString = '';
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.stateItems = [];
    this.selectedColorItem = '';
    this.selectHandler = selectItemValue => {
      if (!this.disabled && !this.readonly) {
        // if (this.search !== 'none') {
        //   const item = this.getItemByValue(selectItemValue);
        //   this.searchString = item.label;
        // }
        this.stateItems = this.getItems().filter(item => item.value !== selectItemValue);
        this.addItem(selectItemValue);
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
      this.goatSearch.emit({ value: this.searchString });
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
    this.goatSearch = debounceEvent(this.goatSearch, this.debounce);
  }
  watchPropHandler(newValue) {
    this.value = newValue;
    if (this.stateItems.length > 0) {
      const selectedItem = this.stateItems.find(item => item.value === newValue);
      if (selectedItem && selectedItem.color) {
        this.selectedColorItem = selectedItem.color;
      }
    }
    if (!newValue) {
      this.stateItems = this.getItems();
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
    this.selectHandler(evt.detail.value);
    this.selectedColorItem = evt.detail.color;
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
  addItem(selectItemValue) {
    let value = this.getValues();
    if (!selectItemValue) {
      this.value = '';
      this.goatChange.emit({ value: selectItemValue });
      return;
    }
    if (!value.includes(selectItemValue)) {
      if (!this.multiple)
        value = [];
      value.push(selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value });
    }
  }
  removeItem(selectItemValue) {
    let value = this.getValues();
    if (value.includes(selectItemValue)) {
      value = value.filter(item => item !== selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value });
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
          return h("span", { style: { color: this.selectedColorItem } }, item.label);
        }
      }
      if (!this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return h("span", null, "\u00A0");
      }
    }
    else {
      if (!this.value && !this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return h("span", null, "\u00A0");
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
    if (this.value) {
      const selectedItem = this.stateItems.find(item => item.value === this.value);
      if (selectedItem && selectedItem.color) {
        this.selectedColorItem = selectedItem.color;
        this.stateItems = this.getItems().filter(item => item.value !== selectedItem.value);
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
    return (h(Host, { id: this.gcId, "has-value": this.hasValue(), "has-focus": this.hasFocus, "is-open": this.isOpen, position: this.position }, h("div", { class: { 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen } }, h("div", { onClick: evt => {
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
      } }, h("div", { class: "slot-container start" }, h("slot", { name: "start" })), (() => {
      if (this.search !== 'none' && this.isOpen) {
        const item = this.getItemByValue(this.value);
        return (h("input", Object.assign({ class: "input input-native", ref: input => (this.nativeInput = input), type: "text", value: this.hasValue() ? item === null || item === void 0 ? void 0 : item.label : this.searchString, placeholder: this.placeholder, onBlur: this.blurHandler, onFocus: this.focusHandler, onInput: this.onInput, onKeyDown: this.keyDownHandler }, this.configAria)));
      }
      else {
        return (h("div", { class: "gc__section-hidden" }, h("div", Object.assign({ class: "input display-value", tabindex: "0", ref: input => (this.displayElement = input), "aria-disabled": this.disabled ? 'true' : null, onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler }, this.configAria), this.getDisplayValue()), h("input", { id: this.gcId, style: { display: 'none' }, value: this.value })));
      }
    })(), h("div", { class: "slot-container end" }, h("slot", { name: "end" })), this.getModeIcon()), h("div", { class: "gc__dropdown-content", ref: elm => (this.dropdownContentElm = elm) }, this.isOpen && this.renderDropdownList()))));
  }
  getModeIcon() {
    if (!this.disabled && !this.readonly)
      return h("gc-icon", { color: "var(--gc-color-primary)", name: "fa-solid fa-caret-down", size: "10px", class: "input-action caret-down", role: "button", onClick: this.toggleList });
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
      return (h("gc-menu", { class: "menu", empty: filteredItems.length == 0, ref: el => (this.menuElm = el) }, (() => {
        return filteredItems.map(item => {
          return (h("gc-menu-item", { disabled: item.disabled, color: item.color, value: item.value }, item.label || item.value));
        });
      })()));
    }
  }
  filterItems() {
    if (this.search === 'managed')
      return this.getItems();
    const items = this.search !== 'none' ? this.getItems() : this.stateItems;
    if (this.hasValue() && !this.searchString) {
      return items.filter(item => {
        return item.value !== this.value;
      });
    }
    return items.filter(item => {
      return !this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase());
    });
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["watchPropHandler"]
  }; }
};
GcSelect.style = gcSelectCss;

const gcSpinnerCss = ":host{--z-index-floating:9999999999;--background-color-behind:rgba(255,255,255, 0.5)}.gc__spinner{display:flex;align-items:center;justify-content:center}.gc__spinner-float{position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:var(--z-index-floating);overflow:hidden;background:var(--background-color-behind)}.gc__spinner-loading{display:inline-block}.gc__spinner-loading>svg{display:inline-block;width:49px;height:58px;animation:lds-circle 2s cubic-bezier(0, 0.2, 0.8, 1) infinite}@keyframes lds-circle{0%,100%{animation-timing-function:cubic-bezier(0.5, 0, 1, 0.5)}0%{transform:rotateY(0deg)}50%{transform:rotateY(0deg);animation-timing-function:cubic-bezier(0, 0.5, 0.5, 1)}100%{transform:rotateY(360deg)}}";

const GcSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: this.getClass() }, h("div", { class: "gc__spinner-loading" }, h("svg", { width: "20", height: "23", viewBox: "0 0 20 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#clip0_219_2389)" }, h("path", { d: "M19.6042 -9.53674e-07V9.49906C19.6042 15.684 16.2297 20.6158 9.80211 23C3.37455 20.6158 0 15.684 0 9.49906V-9.53674e-07H19.6042ZM17.7157 1.90039H1.88859V9.49906C1.88859 14.6727 4.53899 18.7562 9.80211 20.9801C15.0623 18.7562 17.7157 14.6727 17.7157 9.49906V1.90039ZM6.26829 6.18504V9.49906C6.26829 12.4516 7.27051 14.6348 9.80211 16.13C12.0528 14.7951 13.1361 12.9763 13.3765 10.5104H8.68983V8.52846H15.4389V9.49906C15.4389 13.3815 13.5909 16.4536 9.81371 18.3539C6.06549 16.4536 4.25802 13.3815 4.25802 9.49906V4.20301H15.4273V6.18504H6.26829Z", fill: "#0046FC" })), h("defs", null, h("clipPath", { id: "clip0_219_2389" }, h("rect", { width: "20", height: "23", fill: "white" })))))));
  }
};
GcSpinner.style = gcSpinnerCss;

const gcStepCss = ".gc__steps-section.sc-gc-step{overflow:hidden}.gc__steps-section.sc-gc-step div.sc-gc-step{padding:0px 40px;margin-left:23px;border-left:2px solid #DAE1E8}.gc__step-item-title.sc-gc-step{display:flex;align-items:center}.gc__step-item-icon.sc-gc-step{border-radius:50%;border-width:2px;border-style:solid;width:48px;height:48px}.gc__step-item-icon.sc-gc-step>gc-icon.sc-gc-step{position:relative;top:14px;left:14px}.gc__step-item-title--content.sc-gc-step{margin-left:14px}.transitioning.sc-gc-step{transition:height .35s ease}header.gc__head.sc-gc-step{margin-top:12px;cursor:pointer}header.gc__head-opening.sc-gc-step{margin-bottom:10px}header.gc__head-opacity.sc-gc-step{opacity:0.5}.transitioning-rotate.sc-gc-step{transition:transform .3s ease-in-out;transform:rotateY(90deg)}header.gc__head.sc-gc-step hr.sc-gc-step{border:1px solid #DAE1E8;margin-top:12px}.sc-gc-step-s>div[slot=\"title\"]{font-weight:700;font-size:12px}.sc-gc-step-s>div[slot=\"description\"]{font-weight:600;font-size:15px}";

const GcStep = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.openEvent = createEvent(this, "openEvent", 7);
    this.contentChanged = createEvent(this, "contentChanged", 7);
    this.calculatedHeight = 0;
    this.transitioning = false;
    /**
     * index of step item from top to bottom
     */
    this.index = -1;
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
  }
  get style() {
    return {
      height: this.open ? this.calculatedHeight + 'px' : '0px',
    };
  }
  stateChanged() {
    this.transitioning = true;
  }
  componentWillLoad() {
    const children = this.element.parentElement.querySelectorAll('gc-step');
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child == this.element) {
        this.index = i;
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
  /**
   * recalculate Height of step item (e.g., when the content of the item changes)
   */
  recalculateHeight() {
    const oldCalculatedHeight = this.calculatedHeight;
    if (this.calculateHeight() != oldCalculatedHeight && this.open) {
      this.transitioning = true;
    }
  }
  /**
   * close the step item
   */
  async closeItem() {
    this.open = false;
  }
  /**
   * open the step item
   */
  async openItem() {
    this.open = true;
    this.openEvent.emit({
      index: this.index,
    });
  }
  toggle() {
    if (this.open) {
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
    this.calculatedHeight = this.element.querySelector('gc-step > section > div').clientHeight;
    return this.calculatedHeight;
  }
  render() {
    const successCondition = !this.open && this.status === 'success';
    const opcaityCondition = !this.open && this.status !== 'success';
    return (h(Host, null, h("header", { class: { 'gc__head-opening': this.open, 'gc__head': true, 'gc__head-opacity': opcaityCondition }, onClick: () => this.toggle() }, h("div", { class: "gc__step-item-title" }, h("div", { style: { borderColor: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' }, class: { 'transitioning-rotate': this.transitioning, 'gc__step-item-icon': true } }, successCondition ? (h("gc-icon", { name: "fa-regular fa-check", color: "var(--gc-color-green)", size: "24px" })) : (h("gc-icon", { name: this.icon, color: "var(--gc-color-primary)", size: "22px" }))), h("div", { class: "gc__step-item-title--content" }, h("div", { style: { color: successCondition ? 'var(--gc-color-green)' : 'var(--gc-color-primary)' } }, h("slot", { name: "title" })), h("slot", { name: "description" }))), !this.open && h("hr", null)), h("section", { onTransitionEnd: () => this.handleTransitionEnd(), class: { 'gc__steps-section': true, transitioning: this.transitioning }, style: this.style }, h("div", null, h("slot", null)))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "open": ["stateChanged"]
  }; }
};
GcStep.style = gcStepCss;

const GcSteps = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  openEventHandler(event) {
    const children = this.element.querySelectorAll('gc-step');
    for (let i = 0; i < children.length; i++) {
      if (event.detail.index != i) {
        children[i].closeItem();
      }
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
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get element() { return getElement(this); }
};

const gcTableCss = ":host{display:block;height:100%;--table-border-color:var(--gc-color-second-grey);--z-index-table-header:12;--font-weight-table-header:600}.gc__table{height:100%;border:1px solid var(--table-border-color);font-size:12px}.gc__table .table-scroll-container{position:relative;overflow:auto;height:100%}.empty-table{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:24px;border:1px solid var(--gc-color-second-grey);background:var(--gc-color-contrast-white)}.empty-title{margin-bottom:14px}.gc__table.paginate .table-scroll-container{height:calc(100% - 2.4375rem)}.gc__table .table-scroll-container::-webkit-scrollbar{height:6px}.gc__table .table-scroll-container::-webkit-scrollbar-track{border-radius:5px;background:var(--gc-color-second-grey)}.gc__table .table-scroll-container::-webkit-scrollbar-thumb{border-radius:5px;background:var(--gc-color-primary)}.gc__table .pagination{display:flex;border-top:1px solid var(--table-border-color)}.gc__table .pagination .form-control{margin:0}.gc__table .pagination .select{margin:0;--input-border-radius:none;--input-border-style:none;border-left:1px solid var(--table-border-color);border-right:1px solid var(--table-border-color)}.gc__table .pagination .page-sizes-select{margin-inline-start:v(--spacing-3)}.gc__table .pagination .pagination-item-count{margin-inline-start:v(--spacing-4);flex:1;display:flex;align-items:center}.gc__row{display:flex;box-sizing:border-box;height:100%}.gc__row .columns-container{display:flex}.gc__row .gc__col{margin:0;box-sizing:border-box;vertical-align:middle;line-height:normal;border-right:1px solid var(--gc-color-second-grey);border-bottom:1px solid var(--gc-color-second-grey)}.gc__row .gc__col .col-content{display:flex;align-items:center;height:100%;justify-content:space-between}.gc__row .gc__col .col-content .col-text{padding:0 14px 0 14px;flex:1;display:block;display:-webkit-box;max-width:400px;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;word-break:break-word}.gc__row .gc__col .col-content .col-action{--button-border-radius:none}.gc__row .gc__col .col-content .col-action.has-focus{z-index:12}.gc__row .gc__col .col-content .checkbox{}.gc__row .gc__col.center .col-content{justify-content:center}.gc__row .gc__col:last-child{flex:1}.gc__row .fixed-columns{position:sticky;left:0;background:inherit}.header .fixed-columns{background:var(--gc-color-second-blue)}.gc__row .scrollable-columns{flex:1}.header{z-index:var(--z-index-table-header);font-weight:var(--font-weight-table-header);text-transform:uppercase;position:sticky;top:0;background:var(--gc-color-second-blue);color:var(--gc-color-contrast-white);height:50px;min-width:fit-content}.gc__table-body{min-width:fit-content}.header .left-panel{position:sticky;top:0;left:0}.header .gc__col{border-bottom:1px solid var(--table-border-color);cursor:pointer}.gc__table-body .gc__row{min-height:66px;height:auto}.gc__table-body>.gc__row:nth-child(even){background-color:var(--gc-color-contrast-grey)}.gc__table-body>.gc__row:nth-child(odd){background-color:var(--gc-color-contrast-white)}.gc__table-body>div.gc__row::nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-contrast-grey)}.gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:var(--gc-color-second-white)}.gc__table-body .gc__row .gc__col:focus{outline:none;z-index:1}.gc__table-body .left-panel{position:sticky;left:0}.table-footer{height:66px;background-color:var(--gc-color-contrast-white)}.table-footer .pagination{height:100%;padding:0 30px}.table-footer .pagination .pagination-right{display:flex;align-items:center}:host(.show-full-content) .gc__table-body .col-text{overflow:initial;white-space:initial;text-overflow:initial}.empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;}.gc__table-arrow{display:grid}gc-icon.disabled{opacity:0.5}gc-icon.down-arrow{margin-top:-4px}.gc__row .gc__col .col-content .col-actions{margin-right:14px}.col-center{text-align:center}.gc__table-setting{font-weight:600;display:flex;align-items:center;justify-content:space-between;background:var(--gc-color-contrast-white);padding:12px 30px 8px 30px;border-left:1px solid var(--gc-color-second-grey);border-right:1px solid var(--gc-color-second-grey)}.gc__table-setting .dropdown{min-width:473px}.gc__table-setting .gc__table-setting-cols-text{padding:14px 20px;display:flex;align-items:center;border-bottom:1px solid var(--gc-color-second-grey)}.gc__table-setting .gc__table-setting-cols-title{margin-left:12px}.gc__table-setting .gc__table-setting-cols{display:grid;grid-template-columns:1fr 1fr 1fr;padding:15px 20px;row-gap:14px}.gc__table-setting .gc__table-setting-col-item{display:flex;align-items:center}.gc__table-setting .gc__table-setting-col-item .sc-gc-checkbox-h{margin-bottom:0;margin-left:8px;line-height:13px;max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc__table-setting .gc__table-setting-col-item.disabled{cursor:not-allowed}.gc__table-setting label.gc__label.sc-gc-checkbox{color:var(--gc-color-strong-grey)}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(odd){background-color:inherit}.gc__table-no-stripe .gc__table-body>.gc__row:nth-child(even){background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(odd)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .gc__table-body>div.gc__row:nth-child(even)>div.fixed-columns.columns-container>div>div{background-color:inherit}.gc__table-no-stripe .header,.gc__table-no-stripe .header .fixed-columns{background-color:inherit;color:var(--gc-color-text-grey)}.gc__table-no-border .gc__row .gc__col{border-right:0}.loading-section{position:absolute;right:0;left:0;top:50%}.gc__actions{margin-top:5px;display:flex}.gc__btn-action{margin-right:5px;display:none}.gc__btn-action.active{animation:fadeInShow 0.2s;display:block}@keyframes fadeInShow{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}";

const DEFAULT_CELL_WIDTH = '16rem'; // in rem
const GcTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gcCellClick = createEvent(this, "gc:table-cell-click", 7);
    this.gcSelectChange = createEvent(this, "gc:table-select-change", 7);
    this.gcSort = createEvent(this, "gc:sort", 7);
    this.gcChangePage = createEvent(this, "gc:change-page", 7);
    this.gcClearEmptyState = createEvent(this, "gc:clear-empty-state", 7);
    this.gcTableSettingChange = createEvent(this, "gc:table-setting-change", 7);
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
    this.settingTable = {};
    this.hoveredCell = {};
    this.isSelectAll = false;
    this.showingColumns = {};
    this.posColumns = {};
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
    this.onDrop = e => {
      const newValue = e.detail;
      const values = Object.values(newValue) && Object.values(newValue)[0];
      const swapCol = Object.keys(this.posColumns).find(key => this.posColumns[key] === values.position);
      let emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
        return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: idx } });
      }, {});
      const newPos = Object.keys(newValue).reduce((res, key) => {
        return Object.assign(Object.assign({}, res), { [key]: newValue[key].position });
      }, {});
      this.posColumns = Object.assign(Object.assign(Object.assign({}, this.posColumns), newPos), { [swapCol]: values.oldPos });
      emitValues = Object.assign(Object.assign(Object.assign({}, emitValues), newValue), { [swapCol]: { hidden: !this.showingColumns[swapCol], position: values.oldPos } });
      this.gcTableSettingChange.emit(emitValues);
    };
  }
  watchColumnsPropHandler(newValue) {
    let currentColumns = [];
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
  onSelectChange(selectedRowKeys) {
    this.selectedRowKeys = selectedRowKeys;
    this.gcSelectChange.emit({ value: this.selectedRowKeys, isSelectAll: this.isSelectAll });
  }
  onCellClick(row, col) {
    this.gcCellClick.emit({ record: row, column: col });
  }
  onCheck(e, name) {
    this.showingColumns = Object.assign(Object.assign({}, this.showingColumns), { [name]: e.detail.value });
    const emitValues = Object.keys(this.showingColumns).reduce((res, key, idx) => {
      return Object.assign(Object.assign({}, res), { [key]: { hidden: !this.showingColumns[key], position: idx } });
    }, {});
    this.gcTableSettingChange.emit(emitValues);
  }
  onClearEmptyState() {
    if (this.gcClearEmptyState) {
      this.gcClearEmptyState.emit({});
    }
  }
  renderHeader() {
    const fixedCols = [];
    const scrollCols = [];
    if (this.selectionType === 'checkbox') {
      fixedCols.push(h("div", { class: "gc__col center" }, h("div", { class: "col-content" })));
    }
    const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
    columnsWithPos.sort((a, b) => a.pos - b.pos);
    const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
    columnsWithPos.forEach(col => {
      if (this.showingColumns[col.name]) {
        let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}rem` : DEFAULT_CELL_WIDTH;
        if (col.width && countCurrentCol.length > 7)
          colWidth = col.width;
        const colEl = (h("div", { onClick: () => {
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
          }, class: { gc__col: true, sort: this.sortBy === col.name }, style: { width: colWidth, background: this.background } }, h("div", { class: "col-content" }, h("div", { class: "col-text" }, col.label), h("div", { class: "col-actions" }, (() => {
          if (!this.sortable || !col.sortable)
            return;
          return (h("div", { class: "gc__table-arrow" }, h("gc-icon", { class: { disabled: this.sortBy === col.name && this.sortOrder === 'desc' }, name: "fa-regular fa-chevron-up", size: "13px", "font-weight": "bold" }), h("gc-icon", { class: { 'disabled': this.sortBy === col.name && this.sortOrder === 'asc', 'down-arrow': true }, name: "fa-regular fa-chevron-down", size: "13px", "font-weight": "bold" })));
        })()))));
        col.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      }
    });
    return (h("div", { class: "header" }, h("div", { class: "gc__row" }, h("div", { class: "fixed-columns columns-container" }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols))));
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
      if (this.selectionType === 'checkbox')
        fixedCols.push(h("div", { class: { gc__col: true, center: true } }, h("div", { class: "col-content" })));
      const columnsWithPos = this.getColumns().map(col => (Object.assign(Object.assign({}, col), { pos: this.posColumns[col.name] })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const countCurrentCol = Object.keys(this.showingColumns) && Object.keys(this.showingColumns).filter(key => this.showingColumns[key]);
      columnsWithPos.forEach(column => {
        var _a, _b, _c;
        if (this.showingColumns[column.name]) {
          let colWidth = countCurrentCol && countCurrentCol.length > 0 ? `${100 / countCurrentCol.length}rem` : DEFAULT_CELL_WIDTH;
          if (column.width && countCurrentCol.length > 7)
            colWidth = column.width;
          const conditionToDisplayActions = row.actions &&
            row.actions[column.name] &&
            column.actions &&
            column.actions.length > 0 &&
            ((_b = (_a = this.hoveredCell) === null || _a === void 0 ? void 0 : _a.column) === null || _b === void 0 ? void 0 : _b.name) === (column === null || column === void 0 ? void 0 : column.name) &&
            ((_c = this.hoveredCell) === null || _c === void 0 ? void 0 : _c.row) === row;
          const colEl = (h("div", { class: { 'gc__col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column, 'col-center': column.center }, style: {
              width: colWidth,
              background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : this.background,
            }, onMouseOver: () => this.onCellMouseOver(row, column), onClick: () => {
              const selection = window.getSelection();
              if (selection.type != 'Range')
                this.onCellClick(row, column);
            } }, h("div", { class: "col-content" }, h("div", { class: "col-text", innerHTML: row === null || row === void 0 ? void 0 : row[column.name] }, conditionToDisplayActions ? (h("div", { class: { gc__actions: true } }, column.actions.map(action => {
            const matchCondition = row.actions && row.actions[column.name] && row.actions[column.name].includes(action.key) ? true : false;
            return (h("gc-button", { class: `gc__btn-action ${matchCondition ? 'active' : ''}`, key: action.key, paddingText: "0 10px", height: "24px", href: action.onLink && row ? action.onLink(row) : null, disabled: action.disabled, target: action.target, "onGc:click": () => {
                if (action.onClick && row) {
                  action.onClick(row);
                }
              }, type: action.type }, action.name));
          }))) : null))));
          column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
        }
      });
      rows.push(h("div", { class: { 'gc__row': true, 'row-hover': this.hoveredCell.row === row }, style: {
          background: this.customRows && this.customRowsBackground && this.customRows.includes(`${idx}`) ? this.customRowsBackground : '',
          border: this.customRows && this.customRowsBorder && this.customRows.includes(`${idx}`) ? this.customRowsBorder : '',
        } }, h("div", { class: "fixed-columns columns-container" }, fixedCols), h("div", { class: "scrollable-columns columns-container" }, scrollCols)));
    });
    return h("div", { class: "gc__table-body" }, rows);
  }
  getTotalItems() {
    let totalItems = this.totalItems;
    if (this.paginate && !this.serverSide)
      totalItems = this.totalItems || this.getData().length;
    return totalItems || this.getData().length;
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
      // if (isKeepAllColumns) {
      //   return this.columns;
      // }
      // if (this.settingTable) {
      //   let columnsWithPos = this.columns.map((col, i) => ({
      //     ...col,
      //     pos: (this.settingTable[col.name] && this.settingTable[col.name].position) || i,
      //   }));
      //   columnsWithPos.sort((a, b) => a.pos - b.pos);
      //   columnsWithPos = columnsWithPos.reduce((res, col) => {
      //     if (!this.settingTable[col.name] || (this.settingTable[col.name] && this.settingTable[col.name].hidden !== true)) {
      //       return [...res, col];
      //     }
      //     return [...res];
      //   }, []);
      //   return columnsWithPos;
      // }
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
  }
  renderPagination() {
    let totalItems = this.getTotalItems();
    totalItems = totalItems ? totalItems.toLocaleString() : '';
    return (h("div", { class: "pagination" }, h("div", { class: "page-sizes-select" }), h("div", { class: "pagination-item-count" }, h("span", null, "Showing"), "\u00A0", this.pageSize * (this.page - 1) + 1, "\u00A0to\u00A0", this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems(), "\u00A0of\u00A0", totalItems, "\u00A0", totalItems <= 1 ? 'entry' : 'entries'), h("div", { class: "pagination-right" }, h("div", { class: "table-footer-right-content" }, h("div", { class: "table-footer-right-content-pagination" }, h("gc-pagination", { activePage: this.page, total: this.getTotalItems(), pageSize: this.pageSize }))))));
  }
  renderSettingColumns() {
    if (this.settingColumns && this.getData().length > 0) {
      let totalItems = this.getTotalItems();
      totalItems = totalItems ? totalItems.toLocaleString() : '';
      const columnsWithPos = this.getColumns().map((col, idx) => (Object.assign(Object.assign({}, col), { pos: this.settingTable && this.settingTable[col.name] ? this.settingTable[col.name].position : idx })));
      columnsWithPos.sort((a, b) => a.pos - b.pos);
      const columns = columnsWithPos;
      return (h("div", { style: { background: this.background }, class: "gc__table-setting" }, h("slot", { name: "gc__table-setting-title" }, h("div", null, "Results: ", totalItems, " ", totalItems <= 1 ? 'entry' : 'entries', " found matching applied filters:")), h("div", null, h("gc-dropdown", { id: `dropdown_${this.gcId}` }, h("gc-link", { icon: "fa-solid fa-table-layout", color: "var(--gc-color-text-grey)" }, "Manage Table Columns"), h("div", { slot: "gc__dropdown-content", class: "dropdown" }, h("div", { class: "gc__table-setting-cols-text" }, h("gc-icon", { color: "red", name: "fa-regular fa-square-info" }), h("gc-h2", { class: "gc__table-setting-cols-title" }, "Manage Table Columns")), h("gc-drag-container", { "onGc:drop": this.onDrop, "class-container": "gc__table-setting-cols", "class-daggable": ".draggable-item", group: "table-setting-cols" }, columns.map(col => (h("gc-draggable-item", { "data-col-name": col.name, "data-col-check": `${this.showingColumns[col.name]}`, key: `${this.gcId}_${col.name}`, class: { 'draggable-item': !col.alwaysDisplay } }, h("div", { key: `${this.gcId}_${col.name}`, class: { 'gc__table-setting-col-item': true, 'disabled': col.alwaysDisplay } }, h("gc-icon", { color: "var(--gc-color-secondary-grey)", name: "fa-solid fa-grip-dots-vertical" }), h("gc-checkbox", { disabled: col.alwaysDisplay, "gc-name": `${this.gcId}_${col.name}`, label: col.label, checked: this.showingColumns[col.name], "onGc:change": e => this.onCheck(e, col.name) })))))))))));
    }
  }
  render() {
    if (this.isLoading) {
      return (h(Host, null, this.renderSettingColumns(), h("div", { class: { 'gc__table': true, 'sortable': this.sortable, 'paginate': this.paginate, 'gc__table-no-stripe': !this.isStripe, 'gc__table-no-border': !this.isBordered } }, h("div", { class: "table-scroll-container" }, this.renderHeader(), this.renderBody(), h("div", { class: "loading-section" }, h("gc-spinner", null))), this.paginate && (h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))));
    }
    return (h(Host, null, this.renderSettingColumns(), this.getData().length > 0 ? (h("div", { class: { 'gc__table': true, 'sortable': this.sortable, 'paginate': this.paginate, 'gc__table-no-stripe': !this.isStripe, 'gc__table-no-border': !this.isBordered } }, h("div", { class: "table-scroll-container" }, this.renderHeader(), this.renderBody()), this.paginate && (h("div", { style: { background: this.background }, class: "table-footer" }, this.renderPagination())))) : (this.renderEmptyState())));
  }
  renderEmptyState() {
    return (h("div", { class: "empty-table" }, h("div", { class: "empty-title" }, h("gc-h2", null, "There is no records found matching applied filters")), h("gc-button", { onClick: () => this.onClearEmptyState(), type: "secondary", icon: "fa-regular fa-filter-slash" }, "Clear applied filters")));
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "columns": ["watchColumnsPropHandler"],
    "settingTable": ["watchSettingTablePropHandler"]
  }; }
};
GcTable.style = gcTableCss;

const gcTagCss = ".gc__badge{border-radius:60px;text-align:center;color:var(--gc-color-contrast-white);padding:10px;display:inline-block}.gc__badge--primary{background-color:var(--gc-color-primary)}.gc__badge--success{background-color:var(--gc-color-green)}.gc__badge--warning{background-color:var(--gc-color-orange)}.gc__badge--danger{background-color:var(--gc-color-dark-red)}.gc__badge--info{background-color:var(--gc-color-cyan)}.gc__badge--processing{background-color:var(--gc-color-purple)}.gc__badge--dark{background-color:var(--gc-color-third-grey)}";

const GcTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The width of badge
     */
    this.width = '76px';
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
    return (h("div", { style: this.getStyle(), class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
};
GcTag.style = gcTagCss;

const GcUl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getClassName() {
    return this.class ? `gc-ul ${this.class}` : 'gc-ul';
  }
  render() {
    return (h("ul", { class: this.getClassName(), id: this.gcId }, h("slot", null)));
  }
};

export { GcButton as gc_button, GcCheckbox as gc_checkbox, GcDragContainer as gc_drag_container, GcDraggableItem as gc_draggable_item, GcDropdown as gc_dropdown, GcFormField as gc_form_field, GcH1 as gc_h1, GcH2 as gc_h2, GcH3 as gc_h3, GcIcon as gc_icon, GcInput as gc_input, GcLabel as gc_label, GcLink as gc_link, GcMenu as gc_menu, GcMenuItem as gc_menu_item, GcOl as gc_ol, GcPagination as gc_pagination, GcSelect as gc_select, GcSpinner as gc_spinner, GcStep as gc_step, GcSteps as gc_steps, GcTable as gc_table, GcTag as gc_tag, GcUl as gc_ul };
