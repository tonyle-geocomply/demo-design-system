'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2351688e.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["gc-button_15.cjs",[[1,"gc-select",{"class":[1],"gcId":[1,"gc-id"],"placeholder":[1],"value":[1032],"multiple":[4],"size":[513],"search":[1],"state":[513],"required":[516],"disabled":[516],"readonly":[516],"showLoader":[4,"show-loader"],"isOpen":[1028,"is-open"],"configAria":[1544,"config-aria"],"items":[1],"positions":[1],"clearable":[4],"debounce":[2],"hasFocus":[32],"searchString":[32],"startSlotHasContent":[32],"endSlotHasContent":[32],"position":[32],"setFocus":[64],"setBlur":[64]},[[8,"click","windowClick"],[0,"goat:menu-item-click","menuItemClick"],[0,"goat:tag-dismiss","tagDismissClick"],[9,"scroll","fixPosition"]]],[1,"gc-form-field",{"label":[1],"gcName":[1,"gc-name"],"gcId":[1,"gc-id"],"type":[1],"placeholder":[1],"disabled":[4],"value":[1]}],[1,"gc-button",{"class":[1],"type":[1],"disabled":[4],"gcId":[1,"gc-id"],"icon":[1]},[[2,"click","handleClick"]]],[1,"gc-checkbox",{"class":[1],"gcId":[1,"gc-id"],"gcName":[1,"gc-name"],"label":[1],"checked":[4],"disabled":[4]}],[1,"gc-h1",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-h2",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-h3",{"class":[1],"gcId":[1,"gc-id"]}],[6,"gc-ol",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-tag",{"class":[1],"gcId":[1,"gc-id"],"type":[1],"width":[1],"background":[1],"color":[1],"borderWidth":[1,"border-width"],"borderColor":[1,"border-color"]}],[6,"gc-ul",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-input",{"class":[1],"gcId":[1,"gc-id"],"type":[1],"placeholder":[1],"disabled":[4],"value":[1],"gcName":[1,"gc-name"]}],[1,"gc-label",{"class":[1],"gcId":[1,"gc-id"],"gcFor":[1,"gc-for"]}],[1,"gc-menu",{"showLoader":[4,"show-loader"],"value":[1032],"empty":[1028],"emptyState":[1032,"empty-state"],"internalEmptyState":[32],"setFocus":[64]},[[8,"keydown","handleKeyDown"]]],[1,"gc-menu-item",{"class":[1],"gcId":[1,"gc-id"],"value":[1032],"disabled":[516],"selected":[516],"startSlotHasContent":[32],"endSlotHasContent":[32],"hasFocus":[32],"isActive":[32],"setFocus":[64],"setBlur":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]],[1,"gc-icon",{"name":[513],"size":[513],"color":[513],"svg":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
