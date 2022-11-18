'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-76b0c208.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gc-button_31.cjs",[[1,"gc-table",{"columns":[1],"data":[1],"selectionType":[1,"selection-type"],"selectedRowKeys":[1040],"gcId":[1,"gc-id"],"keyField":[1,"key-field"],"serverSide":[4,"server-side"],"sortable":[4],"sortBy":[1025,"sort-by"],"sortOrder":[1025,"sort-order"],"paginate":[4],"page":[1026],"pageSize":[2,"page-size"],"totalItems":[1026,"total-items"],"emptyState":[1032,"empty-state"],"settingColumns":[4,"setting-columns"],"customRows":[1040],"customRowsBackground":[1,"custom-rows-background"],"customRowsBorder":[1,"custom-rows-border"],"isStripe":[4,"is-stripe"],"isBordered":[4,"is-bordered"],"isNoBorderedAll":[4,"is-no-bordered-all"],"background":[1],"isLoading":[4,"is-loading"],"settingTable":[8,"setting-table"],"customEmptyState":[1,"custom-empty-state"],"hoveredCell":[32],"isSelectAll":[32],"showingColumns":[32],"posColumns":[32],"showTooltip":[32],"clickedCell":[32],"isStopScaleWidth":[32]},[[0,"gc:change-page","handleChangePage"],[0,"gc:toggle-tooltip","handleToggleTooltip"],[9,"resize","handleResize"]]],[2,"gc-form-field",{"label":[1],"gcName":[1,"gc-name"],"gcId":[1,"gc-id"],"type":[1],"placeholder":[1],"disabled":[4],"value":[1537],"items":[1],"search":[1],"prefixIcon":[1,"prefix-icon"],"errorText":[1,"error-text"],"infoText":[1,"info-text"],"cols":[2],"rows":[2],"maxlength":[2],"height":[1],"defaultValue":[1,"default-value"]}],[6,"gc-modal",{"open":[4],"width":[1],"transparent":[4],"isCustomContent":[4,"is-custom-content"],"headerIcon":[1,"header-icon"]}],[6,"gc-step",{"index":[1537],"open":[1540],"mutationObserverConfig":[16],"icon":[1537],"status":[1537],"disabled":[1540],"prevent":[1028],"customOpen":[4,"custom-open"],"transitioning":[32],"closeItem":[64],"openItem":[64],"preventOpen":[64]},[[0,"contentChanged","recalculateHeight"]]],[6,"gc-tab",{"selected":[516],"disabled":[516],"value":[1],"target":[1],"showLoader":[4,"show-loader"],"icon":[1],"hasFocus":[32],"isActive":[32],"slotHasContent":[32],"setFocus":[64],"triggerClick":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]],[1,"gc-h1",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-h3",{"class":[1],"gcId":[1,"gc-id"]}],[6,"gc-ol",{"class":[1],"gcId":[1,"gc-id"]}],[6,"gc-steps",{"customOpen":[4,"custom-open"],"activeStep":[32],"oldStep":[32],"open":[64],"close":[64]},[[0,"openEvent","openEventHandler"],[0,"beforeOpenEvent","beforeOpenEventHandler"]]],[6,"gc-tab-panel",{"value":[513],"active":[516]}],[6,"gc-tabs",null,[[0,"gc:tab-click","tabClick"]]],[6,"gc-tabs-list",{"variant":[1],"managed":[4]},[[0,"gc:tab-click","tabClick"]]],[1,"gc-tag",{"class":[1],"gcId":[1,"gc-id"],"type":[1],"width":[1],"height":[1],"background":[1],"color":[1],"borderWidth":[1,"border-width"],"borderColor":[1,"border-color"]}],[6,"gc-ul",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-dropdown",{"size":[1],"isOpen":[1028,"is-open"],"disabled":[4],"positions":[1],"items":[16],"trigger":[1],"hasFocus":[32],"position":[32]},[[8,"click","windowClick"]]],[6,"gc-select",{"class":[1],"gcId":[1,"gc-id"],"placeholder":[1],"value":[1544],"multiple":[4],"size":[513],"search":[1],"state":[513],"required":[516],"disabled":[516],"readonly":[516],"showLoader":[4,"show-loader"],"isOpen":[1028,"is-open"],"configAria":[1544,"config-aria"],"items":[1],"positions":[1],"clearable":[4],"debounce":[2],"isError":[4,"is-error"],"defaultValue":[1,"default-value"],"hasFocus":[32],"searchString":[32],"startSlotHasContent":[32],"endSlotHasContent":[32],"position":[32],"stateItems":[32],"selectedColorItem":[32],"setFocus":[64],"setBlur":[64]},[[8,"click","windowClick"],[0,"gc:menu-item-click","menuItemClick"],[0,"gc:tag-dismiss","tagDismissClick"],[9,"scroll","fixPosition"]]],[2,"gc-tooltip",{"isCopyText":[8,"is-copy-text"],"isLongText":[4,"is-long-text"],"content":[8],"isToggle":[4,"is-toggle"],"rightPos":[1,"right-pos"],"topPos":[1,"top-pos"],"isPopover":[4,"is-popover"],"showTooltip":[32],"isCopied":[32]},[[8,"click","windowClick"]]],[2,"gc-input",{"class":[1],"gcId":[1,"gc-id"],"type":[1],"placeholder":[1],"disabled":[4],"value":[1],"gcName":[1,"gc-name"],"prefixIcon":[1,"prefix-icon"],"isError":[4,"is-error"]}],[1,"gc-link",{"class":[1],"gcId":[1,"gc-id"],"gcTo":[1,"gc-to"],"icon":[1],"color":[1],"target":[1],"size":[1]}],[1,"gc-pagination",{"pageSize":[2,"page-size"],"activePage":[1026,"active-page"],"total":[2]}],[2,"gc-checkbox",{"class":[1],"gcId":[1,"gc-id"],"gcName":[1,"gc-name"],"label":[1],"checked":[4],"disabled":[4]}],[6,"gc-drag-container",{"classContainer":[1,"class-container"],"classDaggable":[1,"class-daggable"],"group":[1]}],[6,"gc-draggable-item"],[1,"gc-h2",{"class":[1],"gcId":[1,"gc-id"]}],[1,"gc-label",{"class":[1],"gcId":[1,"gc-id"],"gcFor":[1,"gc-for"]}],[1,"gc-spinner",{"isFloat":[4,"is-float"]}],[2,"gc-textarea",{"class":[1],"gcId":[1,"gc-id"],"placeholder":[1],"disabled":[4],"value":[1],"gcName":[1,"gc-name"],"cols":[2],"rows":[2],"maxlength":[2],"isError":[4,"is-error"],"height":[1]}],[1,"gc-button",{"class":[1],"type":[1],"disabled":[4],"gcId":[1,"gc-id"],"icon":[1],"href":[1],"target":[1],"height":[1],"paddingText":[1,"padding-text"]},[[2,"click","handleClick"]]],[1,"gc-menu",{"showLoader":[4,"show-loader"],"value":[1032],"empty":[1028],"emptyState":[1032,"empty-state"],"internalEmptyState":[32],"setFocus":[64]},[[8,"keydown","handleKeyDown"]]],[1,"gc-menu-item",{"class":[1],"gcId":[1,"gc-id"],"color":[1],"value":[1032],"disabled":[516],"selected":[516],"label":[1],"startSlotHasContent":[32],"endSlotHasContent":[32],"hasFocus":[32],"isActive":[32],"isHover":[32],"setFocus":[64],"setBlur":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]],[0,"gc-icon",{"name":[513],"size":[513],"color":[513],"fontWeight":[513,"font-weight"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
