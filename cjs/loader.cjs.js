'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-352895cd.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gc-button_20.cjs",[[4,"gc-table",{"columns":[1],"data":[1],"selectionType":[1,"selection-type"],"selectedRowKeys":[1040],"gcId":[1,"gc-id"],"keyField":[1,"key-field"],"serverSide":[4,"server-side"],"sortable":[4],"sortBy":[1025,"sort-by"],"sortOrder":[1025,"sort-order"],"paginate":[4],"page":[1026],"pageSize":[2,"page-size"],"totalItems":[1026,"total-items"],"emptyState":[1032,"empty-state"],"settingColumns":[4,"setting-columns"],"hiddenColumns":[1040],"customRows":[1040],"customRowsBackground":[1,"custom-rows-background"],"customRowsBorder":[1,"custom-rows-border"],"isStripe":[4,"is-stripe"],"isBordered":[4,"is-bordered"],"background":[1],"hoveredCell":[32],"isSelectAll":[32],"showingColumns":[32]},[[0,"gc:change-page","handleChangePage"]]],[2,"gc-form-field",{"label":[1],"gcName":[1,"gc-name"],"gcId":[1,"gc-id"],"type":[1],"placeholder":[1],"disabled":[4],"value":[1537],"items":[1],"search":[1],"prefixIcon":[1,"prefix-icon"]}],[1,"gc-h1",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-h3",{"class":[1],"gcId":[1,"gc-id"]}],[6,"gc-ol",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-spinner",{"isFloat":[4,"is-float"]}],[1,"gc-tag",{"class":[1],"gcId":[1,"gc-id"],"type":[1],"width":[1],"height":[1],"background":[1],"color":[1],"borderWidth":[1,"border-width"],"borderColor":[1,"border-color"]}],[6,"gc-ul",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-dropdown",{"size":[1],"isOpen":[1028,"is-open"],"disabled":[4],"positions":[1],"items":[16],"trigger":[1],"hasFocus":[32],"position":[32],"setFocus":[64]},[[8,"click","windowClick"],[8,"gc:menu-item-click","listenMenuItemClick"],[8,"gc:click","listenClick"],[8,"keydown","listenKeyDown"],[9,"scroll","fixPosition"]]],[6,"gc-select",{"class":[1],"gcId":[1,"gc-id"],"placeholder":[1],"value":[1544],"multiple":[4],"size":[513],"search":[1],"state":[513],"required":[516],"disabled":[516],"readonly":[516],"showLoader":[4,"show-loader"],"isOpen":[1028,"is-open"],"configAria":[1544,"config-aria"],"items":[1],"positions":[1],"clearable":[4],"debounce":[2],"hasFocus":[32],"searchString":[32],"startSlotHasContent":[32],"endSlotHasContent":[32],"position":[32],"stateItems":[32],"selectedColorItem":[32],"setFocus":[64],"setBlur":[64]},[[8,"click","windowClick"],[0,"gc:menu-item-click","menuItemClick"],[0,"gc:tag-dismiss","tagDismissClick"],[9,"scroll","fixPosition"]]],[1,"gc-button",{"class":[1],"type":[1],"disabled":[4],"gcId":[1,"gc-id"],"icon":[1],"href":[1],"target":[1]},[[2,"click","handleClick"]]],[2,"gc-input",{"class":[1],"gcId":[1,"gc-id"],"type":[1],"placeholder":[1],"disabled":[4],"value":[1],"gcName":[1,"gc-name"],"prefixIcon":[1,"prefix-icon"]}],[1,"gc-link",{"class":[1],"gcId":[1,"gc-id"],"gcTo":[1,"gc-to"],"icon":[1],"color":[1]}],[1,"gc-pagination",{"pageSize":[2,"page-size"],"activePage":[1026,"active-page"],"total":[2]}],[2,"gc-checkbox",{"class":[1],"gcId":[1,"gc-id"],"gcName":[1,"gc-name"],"label":[1],"checked":[4],"disabled":[4]}],[1,"gc-h2",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-label",{"class":[1],"gcId":[1,"gc-id"],"gcFor":[1,"gc-for"]}],[1,"gc-menu",{"showLoader":[4,"show-loader"],"value":[1032],"empty":[1028],"emptyState":[1032,"empty-state"],"internalEmptyState":[32],"setFocus":[64]},[[8,"keydown","handleKeyDown"]]],[1,"gc-menu-item",{"class":[1],"gcId":[1,"gc-id"],"color":[1],"value":[1032],"disabled":[516],"selected":[516],"startSlotHasContent":[32],"endSlotHasContent":[32],"hasFocus":[32],"isActive":[32],"isHover":[32],"setFocus":[64],"setBlur":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]],[0,"gc-icon",{"name":[513],"size":[513],"color":[513],"fontWeight":[513,"font-weight"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
