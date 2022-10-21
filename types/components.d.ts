/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface GcButton {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Is disabled
         */
        "disabled"?: boolean;
        /**
          * The id
         */
        "gcId": string;
        /**
          * href
         */
        "href"?: string;
        /**
          * Icon name
         */
        "icon"?: string;
        /**
          * target
         */
        "target"?: string;
        /**
          * The type name
         */
        "type": string;
    }
    interface GcCheckbox {
        /**
          * Is checked ?
         */
        "checked": boolean;
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Is disabled ?
         */
        "disabled": boolean;
        /**
          * The id
         */
        "gcId": string;
        /**
          * The name of checkbox
         */
        "gcName": string;
        /**
          * The label of checkbox
         */
        "label"?: string;
    }
    interface GcDragContainer {
        "classContainer": string;
        "classDaggable": string;
        "group": string;
    }
    interface GcDraggableItem {
    }
    interface GcDropdown {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "isOpen": boolean;
        "items": any[];
        "positions": string;
        "setFocus": (elm?: HTMLElement) => Promise<void>;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        "trigger": 'click' | 'hover';
    }
    interface GcFormField {
        /**
          * Is disabled ?
         */
        "disabled"?: boolean;
        /**
          * The field id
         */
        "gcId"?: string;
        /**
          * The field name
         */
        "gcName"?: string;
        /**
          * [{   label: 'Shivaji Varma',   value: 'shivaji-varma' }]
         */
        "items": string | [];
        /**
          * The label name
         */
        "label"?: string;
        /**
          * The placeholder
         */
        "placeholder"?: string;
        /**
          * Prefix icon
         */
        "prefixIcon": string;
        /**
          * Search type Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
         */
        "search": 'none' | 'initial' | 'contains' | 'managed';
        /**
          * The input type
         */
        "type": string;
        /**
          * The input value
         */
        "value"?: string;
    }
    interface GcH1 {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId": string;
    }
    interface GcH2 {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId": string;
    }
    interface GcH3 {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId": string;
    }
    interface GcIcon {
        "color": string;
        "fontWeight": string;
        "name": string;
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | 'xl' | string;
    }
    interface GcInput {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Is disabled ?
         */
        "disabled"?: boolean;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * The name of input
         */
        "gcName"?: string;
        /**
          * The placeholder
         */
        "placeholder"?: string;
        /**
          * The name of input
         */
        "prefixIcon"?: string;
        /**
          * The input type
         */
        "type": string;
        /**
          * The input value
         */
        "value"?: string;
    }
    interface GcLabel {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Label for what component
         */
        "gcFor": string;
        /**
          * The id
         */
        "gcId": string;
    }
    interface GcLink {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The color of link
         */
        "color": string;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * Go to link
         */
        "gcTo"?: string;
        /**
          * Icon name
         */
        "icon"?: string;
        /**
          * target link
         */
        "target"?: string;
    }
    interface GcMenu {
        "empty": boolean;
        "emptyState": any;
        /**
          * Sets focus on first menu item. Use this method instead of the global `element.focus()`.
         */
        "setFocus": () => Promise<void>;
        "showLoader": boolean;
        "value"?: string | number;
    }
    interface GcMenuItem {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The color of text
         */
        "color"?: string;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * The id
         */
        "gcId": string;
        /**
          * Menu item selection state.
         */
        "selected": boolean;
        /**
          * Sets blur on the native `input` in `goat-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `goat-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The menu item value.
         */
        "value"?: string | number | null;
    }
    interface GcOl {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId": string;
    }
    interface GcPagination {
        /**
          * The page size
         */
        "activePage": number;
        /**
          * The page size
         */
        "pageSize": number;
        /**
          * The total
         */
        "total": number;
    }
    interface GcSelect {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable": boolean;
        "configAria": any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * The id
         */
        "gcId": string;
        "isOpen": boolean;
        /**
          * [{   label: 'Shivaji Varma',   value: 'shivaji-varma' }]
         */
        "items": string | [];
        "multiple": boolean;
        /**
          * The input field placeholder.
         */
        "placeholder": string;
        "positions": string;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "readonly": boolean;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Search type Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
         */
        "search": 'none' | 'initial' | 'contains' | 'managed';
        /**
          * Sets blur on the native `input` in `goat-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        "showLoader": boolean;
        /**
          * The select input size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state": 'success' | 'error' | 'warning' | 'default';
        /**
          * The input field value.
         */
        "value"?: string | number;
    }
    interface GcSpinner {
        /**
          * Is float above background
         */
        "isFloat": boolean;
    }
    interface GcStep {
        /**
          * close the step item
         */
        "closeItem": () => Promise<void>;
        /**
          * The icon in step
         */
        "icon": string;
        /**
          * index of step item from top to bottom
         */
        "index": number;
        /**
          * The mutation observer config to listen for content changes in the step item
         */
        "mutationObserverConfig": { childList: boolean; subtree: boolean; };
        /**
          * step item is open or opening (css transition)
         */
        "open": boolean;
        /**
          * open the step item
         */
        "openItem": () => Promise<void>;
        /**
          * The status in step
         */
        "status": string;
    }
    interface GcSteps {
        /**
          * close an step item
          * @param index
         */
        "close": (index: number) => Promise<void>;
        /**
          * Open an step item
          * @param index
         */
        "open": (index: number) => Promise<void>;
    }
    interface GcTable {
        "background"?: string;
        /**
          * Grid columns configuration. [ {   "name":"name",   "label":"Name",   "width":300,   "fixed":true  }, {   "name":"age",   "label":"Age" } ]
         */
        "columns": string | any[];
        "customRows"?: string[];
        "customRowsBackground"?: string;
        "customRowsBorder"?: string;
        /**
          * Grid data to display on table [{  'id': '5e7118ddce4b3d577956457f',  'age': 21,  'name': 'John',  'company': 'India',  'email': 'john@example.com',  'phone': '+1 (839) 560-3581',  'address': '326 Irving Street, Grimsley, Texas, 4048'  }]
         */
        "data": string | any[];
        "emptyState": any;
        "gcId": string;
        "hiddenColumns"?: string[];
        "isBordered"?: boolean;
        "isLoading"?: false;
        "isStripe"?: boolean;
        "keyField": string;
        "page": number;
        "pageSize": number;
        "paginate": boolean;
        "selectedRowKeys": string[];
        "selectionType": 'checkbox' | undefined;
        "serverSide": boolean;
        "settingColumns"?: boolean;
        "settingTable"?: any;
        "sortBy": string;
        "sortOrder": 'asc' | 'desc' | '';
        "sortable": boolean;
        "totalItems": number;
    }
    interface GcTag {
        /**
          * The background of badge
         */
        "background": string;
        /**
          * The border color of badge
         */
        "borderColor": string;
        /**
          * The border width of badge
         */
        "borderWidth": string;
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The color of badge
         */
        "color": string;
        /**
          * The id
         */
        "gcId": string;
        /**
          * The width of badge
         */
        "height": string;
        /**
          * The type name
         */
        "type": string;
        /**
          * The width of badge
         */
        "width": string;
    }
    interface GcUl {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId": string;
    }
}
export interface GcButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcButtonElement;
}
export interface GcCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcCheckboxElement;
}
export interface GcDragContainerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcDragContainerElement;
}
export interface GcFormFieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcFormFieldElement;
}
export interface GcInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcInputElement;
}
export interface GcMenuItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcMenuItemElement;
}
export interface GcPaginationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcPaginationElement;
}
export interface GcSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcSelectElement;
}
export interface GcStepCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcStepElement;
}
export interface GcTableCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGcTableElement;
}
declare global {
    interface HTMLGcButtonElement extends Components.GcButton, HTMLStencilElement {
    }
    var HTMLGcButtonElement: {
        prototype: HTMLGcButtonElement;
        new (): HTMLGcButtonElement;
    };
    interface HTMLGcCheckboxElement extends Components.GcCheckbox, HTMLStencilElement {
    }
    var HTMLGcCheckboxElement: {
        prototype: HTMLGcCheckboxElement;
        new (): HTMLGcCheckboxElement;
    };
    interface HTMLGcDragContainerElement extends Components.GcDragContainer, HTMLStencilElement {
    }
    var HTMLGcDragContainerElement: {
        prototype: HTMLGcDragContainerElement;
        new (): HTMLGcDragContainerElement;
    };
    interface HTMLGcDraggableItemElement extends Components.GcDraggableItem, HTMLStencilElement {
    }
    var HTMLGcDraggableItemElement: {
        prototype: HTMLGcDraggableItemElement;
        new (): HTMLGcDraggableItemElement;
    };
    interface HTMLGcDropdownElement extends Components.GcDropdown, HTMLStencilElement {
    }
    var HTMLGcDropdownElement: {
        prototype: HTMLGcDropdownElement;
        new (): HTMLGcDropdownElement;
    };
    interface HTMLGcFormFieldElement extends Components.GcFormField, HTMLStencilElement {
    }
    var HTMLGcFormFieldElement: {
        prototype: HTMLGcFormFieldElement;
        new (): HTMLGcFormFieldElement;
    };
    interface HTMLGcH1Element extends Components.GcH1, HTMLStencilElement {
    }
    var HTMLGcH1Element: {
        prototype: HTMLGcH1Element;
        new (): HTMLGcH1Element;
    };
    interface HTMLGcH2Element extends Components.GcH2, HTMLStencilElement {
    }
    var HTMLGcH2Element: {
        prototype: HTMLGcH2Element;
        new (): HTMLGcH2Element;
    };
    interface HTMLGcH3Element extends Components.GcH3, HTMLStencilElement {
    }
    var HTMLGcH3Element: {
        prototype: HTMLGcH3Element;
        new (): HTMLGcH3Element;
    };
    interface HTMLGcIconElement extends Components.GcIcon, HTMLStencilElement {
    }
    var HTMLGcIconElement: {
        prototype: HTMLGcIconElement;
        new (): HTMLGcIconElement;
    };
    interface HTMLGcInputElement extends Components.GcInput, HTMLStencilElement {
    }
    var HTMLGcInputElement: {
        prototype: HTMLGcInputElement;
        new (): HTMLGcInputElement;
    };
    interface HTMLGcLabelElement extends Components.GcLabel, HTMLStencilElement {
    }
    var HTMLGcLabelElement: {
        prototype: HTMLGcLabelElement;
        new (): HTMLGcLabelElement;
    };
    interface HTMLGcLinkElement extends Components.GcLink, HTMLStencilElement {
    }
    var HTMLGcLinkElement: {
        prototype: HTMLGcLinkElement;
        new (): HTMLGcLinkElement;
    };
    interface HTMLGcMenuElement extends Components.GcMenu, HTMLStencilElement {
    }
    var HTMLGcMenuElement: {
        prototype: HTMLGcMenuElement;
        new (): HTMLGcMenuElement;
    };
    interface HTMLGcMenuItemElement extends Components.GcMenuItem, HTMLStencilElement {
    }
    var HTMLGcMenuItemElement: {
        prototype: HTMLGcMenuItemElement;
        new (): HTMLGcMenuItemElement;
    };
    interface HTMLGcOlElement extends Components.GcOl, HTMLStencilElement {
    }
    var HTMLGcOlElement: {
        prototype: HTMLGcOlElement;
        new (): HTMLGcOlElement;
    };
    interface HTMLGcPaginationElement extends Components.GcPagination, HTMLStencilElement {
    }
    var HTMLGcPaginationElement: {
        prototype: HTMLGcPaginationElement;
        new (): HTMLGcPaginationElement;
    };
    interface HTMLGcSelectElement extends Components.GcSelect, HTMLStencilElement {
    }
    var HTMLGcSelectElement: {
        prototype: HTMLGcSelectElement;
        new (): HTMLGcSelectElement;
    };
    interface HTMLGcSpinnerElement extends Components.GcSpinner, HTMLStencilElement {
    }
    var HTMLGcSpinnerElement: {
        prototype: HTMLGcSpinnerElement;
        new (): HTMLGcSpinnerElement;
    };
    interface HTMLGcStepElement extends Components.GcStep, HTMLStencilElement {
    }
    var HTMLGcStepElement: {
        prototype: HTMLGcStepElement;
        new (): HTMLGcStepElement;
    };
    interface HTMLGcStepsElement extends Components.GcSteps, HTMLStencilElement {
    }
    var HTMLGcStepsElement: {
        prototype: HTMLGcStepsElement;
        new (): HTMLGcStepsElement;
    };
    interface HTMLGcTableElement extends Components.GcTable, HTMLStencilElement {
    }
    var HTMLGcTableElement: {
        prototype: HTMLGcTableElement;
        new (): HTMLGcTableElement;
    };
    interface HTMLGcTagElement extends Components.GcTag, HTMLStencilElement {
    }
    var HTMLGcTagElement: {
        prototype: HTMLGcTagElement;
        new (): HTMLGcTagElement;
    };
    interface HTMLGcUlElement extends Components.GcUl, HTMLStencilElement {
    }
    var HTMLGcUlElement: {
        prototype: HTMLGcUlElement;
        new (): HTMLGcUlElement;
    };
    interface HTMLElementTagNameMap {
        "gc-button": HTMLGcButtonElement;
        "gc-checkbox": HTMLGcCheckboxElement;
        "gc-drag-container": HTMLGcDragContainerElement;
        "gc-draggable-item": HTMLGcDraggableItemElement;
        "gc-dropdown": HTMLGcDropdownElement;
        "gc-form-field": HTMLGcFormFieldElement;
        "gc-h1": HTMLGcH1Element;
        "gc-h2": HTMLGcH2Element;
        "gc-h3": HTMLGcH3Element;
        "gc-icon": HTMLGcIconElement;
        "gc-input": HTMLGcInputElement;
        "gc-label": HTMLGcLabelElement;
        "gc-link": HTMLGcLinkElement;
        "gc-menu": HTMLGcMenuElement;
        "gc-menu-item": HTMLGcMenuItemElement;
        "gc-ol": HTMLGcOlElement;
        "gc-pagination": HTMLGcPaginationElement;
        "gc-select": HTMLGcSelectElement;
        "gc-spinner": HTMLGcSpinnerElement;
        "gc-step": HTMLGcStepElement;
        "gc-steps": HTMLGcStepsElement;
        "gc-table": HTMLGcTableElement;
        "gc-tag": HTMLGcTagElement;
        "gc-ul": HTMLGcUlElement;
    }
}
declare namespace LocalJSX {
    interface GcButton {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Is disabled
         */
        "disabled"?: boolean;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * href
         */
        "href"?: string;
        /**
          * Icon name
         */
        "icon"?: string;
        /**
          * Emitted when click button
         */
        "onGc:click"?: (event: GcButtonCustomEvent<any>) => void;
        /**
          * target
         */
        "target"?: string;
        /**
          * The type name
         */
        "type"?: string;
    }
    interface GcCheckbox {
        /**
          * Is checked ?
         */
        "checked"?: boolean;
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Is disabled ?
         */
        "disabled"?: boolean;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * The name of checkbox
         */
        "gcName"?: string;
        /**
          * The label of checkbox
         */
        "label"?: string;
        /**
          * Emitted when the value has changed.
         */
        "onGc:change"?: (event: GcCheckboxCustomEvent<any>) => void;
    }
    interface GcDragContainer {
        "classContainer"?: string;
        "classDaggable"?: string;
        "group"?: string;
        /**
          * Emitted when having change in drag and drop
         */
        "onGc:drop"?: (event: GcDragContainerCustomEvent<any>) => void;
    }
    interface GcDraggableItem {
    }
    interface GcDropdown {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "isOpen"?: boolean;
        "items"?: any[];
        "positions"?: string;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        "trigger"?: 'click' | 'hover';
    }
    interface GcFormField {
        /**
          * Is disabled ?
         */
        "disabled"?: boolean;
        /**
          * The field id
         */
        "gcId"?: string;
        /**
          * The field name
         */
        "gcName"?: string;
        /**
          * [{   label: 'Shivaji Varma',   value: 'shivaji-varma' }]
         */
        "items"?: string | [];
        /**
          * The label name
         */
        "label"?: string;
        /**
          * Emitted when the value has changed.
         */
        "onGc:field-change"?: (event: GcFormFieldCustomEvent<any>) => void;
        /**
          * The placeholder
         */
        "placeholder"?: string;
        /**
          * Prefix icon
         */
        "prefixIcon"?: string;
        /**
          * Search type Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
         */
        "search"?: 'none' | 'initial' | 'contains' | 'managed';
        /**
          * The input type
         */
        "type"?: string;
        /**
          * The input value
         */
        "value"?: string;
    }
    interface GcH1 {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId"?: string;
    }
    interface GcH2 {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId"?: string;
    }
    interface GcH3 {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId"?: string;
    }
    interface GcIcon {
        "color"?: string;
        "fontWeight"?: string;
        "name"?: string;
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | 'xl' | string;
    }
    interface GcInput {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Is disabled ?
         */
        "disabled"?: boolean;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * The name of input
         */
        "gcName"?: string;
        /**
          * Emitted when the value has changed.
         */
        "onGc:change"?: (event: GcInputCustomEvent<any>) => void;
        /**
          * The placeholder
         */
        "placeholder"?: string;
        /**
          * The name of input
         */
        "prefixIcon"?: string;
        /**
          * The input type
         */
        "type"?: string;
        /**
          * The input value
         */
        "value"?: string;
    }
    interface GcLabel {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * Label for what component
         */
        "gcFor"?: string;
        /**
          * The id
         */
        "gcId"?: string;
    }
    interface GcLink {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The color of link
         */
        "color"?: string;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * Go to link
         */
        "gcTo"?: string;
        /**
          * Icon name
         */
        "icon"?: string;
        /**
          * target link
         */
        "target"?: string;
    }
    interface GcMenu {
        "empty"?: boolean;
        "emptyState"?: any;
        "showLoader"?: boolean;
        "value"?: string | number;
    }
    interface GcMenuItem {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The color of text
         */
        "color"?: string;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * Emitted when the menu item is clicked.
         */
        "onGc:menu-item-click"?: (event: GcMenuItemCustomEvent<any>) => void;
        /**
          * Menu item selection state.
         */
        "selected"?: boolean;
        /**
          * The menu item value.
         */
        "value"?: string | number | null;
    }
    interface GcOl {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId"?: string;
    }
    interface GcPagination {
        /**
          * The page size
         */
        "activePage"?: number;
        /**
          * Emitted when the value has changed.
         */
        "onGc:change-page"?: (event: GcPaginationCustomEvent<any>) => void;
        /**
          * The page size
         */
        "pageSize"?: number;
        /**
          * The total
         */
        "total"?: number;
    }
    interface GcSelect {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable"?: boolean;
        "configAria"?: any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * The id
         */
        "gcId"?: string;
        "isOpen"?: boolean;
        /**
          * [{   label: 'Shivaji Varma',   value: 'shivaji-varma' }]
         */
        "items"?: string | [];
        "multiple"?: boolean;
        /**
          * Emitted when the action button is clicked..
         */
        "onGc:action-click"?: (event: GcSelectCustomEvent<any>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onGc:change"?: (event: GcSelectCustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onGc:search"?: (event: GcSelectCustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        "positions"?: string;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "readonly"?: boolean;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * Search type Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
         */
        "search"?: 'none' | 'initial' | 'contains' | 'managed';
        "showLoader"?: boolean;
        /**
          * The select input size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state"?: 'success' | 'error' | 'warning' | 'default';
        /**
          * The input field value.
         */
        "value"?: string | number;
    }
    interface GcSpinner {
        /**
          * Is float above background
         */
        "isFloat"?: boolean;
    }
    interface GcStep {
        /**
          * The icon in step
         */
        "icon"?: string;
        /**
          * index of step item from top to bottom
         */
        "index"?: number;
        /**
          * The mutation observer config to listen for content changes in the step item
         */
        "mutationObserverConfig"?: { childList: boolean; subtree: boolean; };
        /**
          * triggered when the content of the step item changes
         */
        "onContentChanged"?: (event: GcStepCustomEvent<any>) => void;
        /**
          * triggered when the step item is opened
         */
        "onOpenEvent"?: (event: GcStepCustomEvent<any>) => void;
        /**
          * step item is open or opening (css transition)
         */
        "open"?: boolean;
        /**
          * The status in step
         */
        "status"?: string;
    }
    interface GcSteps {
    }
    interface GcTable {
        "background"?: string;
        /**
          * Grid columns configuration. [ {   "name":"name",   "label":"Name",   "width":300,   "fixed":true  }, {   "name":"age",   "label":"Age" } ]
         */
        "columns"?: string | any[];
        "customRows"?: string[];
        "customRowsBackground"?: string;
        "customRowsBorder"?: string;
        /**
          * Grid data to display on table [{  'id': '5e7118ddce4b3d577956457f',  'age': 21,  'name': 'John',  'company': 'India',  'email': 'john@example.com',  'phone': '+1 (839) 560-3581',  'address': '326 Irving Street, Grimsley, Texas, 4048'  }]
         */
        "data"?: string | any[];
        "emptyState"?: any;
        "gcId"?: string;
        "hiddenColumns"?: string[];
        "isBordered"?: boolean;
        "isLoading"?: false;
        "isStripe"?: boolean;
        "keyField"?: string;
        "onGc:change-page"?: (event: GcTableCustomEvent<any>) => void;
        "onGc:clear-empty-state"?: (event: GcTableCustomEvent<any>) => void;
        "onGc:sort"?: (event: GcTableCustomEvent<any>) => void;
        "onGc:table-cell-click"?: (event: GcTableCustomEvent<any>) => void;
        "onGc:table-select-change"?: (event: GcTableCustomEvent<any>) => void;
        "onGc:table-setting-change"?: (event: GcTableCustomEvent<any>) => void;
        "page"?: number;
        "pageSize"?: number;
        "paginate"?: boolean;
        "selectedRowKeys"?: string[];
        "selectionType"?: 'checkbox' | undefined;
        "serverSide"?: boolean;
        "settingColumns"?: boolean;
        "settingTable"?: any;
        "sortBy"?: string;
        "sortOrder"?: 'asc' | 'desc' | '';
        "sortable"?: boolean;
        "totalItems"?: number;
    }
    interface GcTag {
        /**
          * The background of badge
         */
        "background"?: string;
        /**
          * The border color of badge
         */
        "borderColor"?: string;
        /**
          * The border width of badge
         */
        "borderWidth"?: string;
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The color of badge
         */
        "color"?: string;
        /**
          * The id
         */
        "gcId"?: string;
        /**
          * The width of badge
         */
        "height"?: string;
        /**
          * The type name
         */
        "type"?: string;
        /**
          * The width of badge
         */
        "width"?: string;
    }
    interface GcUl {
        /**
          * The class name
         */
        "class"?: string;
        /**
          * The id
         */
        "gcId"?: string;
    }
    interface IntrinsicElements {
        "gc-button": GcButton;
        "gc-checkbox": GcCheckbox;
        "gc-drag-container": GcDragContainer;
        "gc-draggable-item": GcDraggableItem;
        "gc-dropdown": GcDropdown;
        "gc-form-field": GcFormField;
        "gc-h1": GcH1;
        "gc-h2": GcH2;
        "gc-h3": GcH3;
        "gc-icon": GcIcon;
        "gc-input": GcInput;
        "gc-label": GcLabel;
        "gc-link": GcLink;
        "gc-menu": GcMenu;
        "gc-menu-item": GcMenuItem;
        "gc-ol": GcOl;
        "gc-pagination": GcPagination;
        "gc-select": GcSelect;
        "gc-spinner": GcSpinner;
        "gc-step": GcStep;
        "gc-steps": GcSteps;
        "gc-table": GcTable;
        "gc-tag": GcTag;
        "gc-ul": GcUl;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gc-button": LocalJSX.GcButton & JSXBase.HTMLAttributes<HTMLGcButtonElement>;
            "gc-checkbox": LocalJSX.GcCheckbox & JSXBase.HTMLAttributes<HTMLGcCheckboxElement>;
            "gc-drag-container": LocalJSX.GcDragContainer & JSXBase.HTMLAttributes<HTMLGcDragContainerElement>;
            "gc-draggable-item": LocalJSX.GcDraggableItem & JSXBase.HTMLAttributes<HTMLGcDraggableItemElement>;
            "gc-dropdown": LocalJSX.GcDropdown & JSXBase.HTMLAttributes<HTMLGcDropdownElement>;
            "gc-form-field": LocalJSX.GcFormField & JSXBase.HTMLAttributes<HTMLGcFormFieldElement>;
            "gc-h1": LocalJSX.GcH1 & JSXBase.HTMLAttributes<HTMLGcH1Element>;
            "gc-h2": LocalJSX.GcH2 & JSXBase.HTMLAttributes<HTMLGcH2Element>;
            "gc-h3": LocalJSX.GcH3 & JSXBase.HTMLAttributes<HTMLGcH3Element>;
            "gc-icon": LocalJSX.GcIcon & JSXBase.HTMLAttributes<HTMLGcIconElement>;
            "gc-input": LocalJSX.GcInput & JSXBase.HTMLAttributes<HTMLGcInputElement>;
            "gc-label": LocalJSX.GcLabel & JSXBase.HTMLAttributes<HTMLGcLabelElement>;
            "gc-link": LocalJSX.GcLink & JSXBase.HTMLAttributes<HTMLGcLinkElement>;
            "gc-menu": LocalJSX.GcMenu & JSXBase.HTMLAttributes<HTMLGcMenuElement>;
            "gc-menu-item": LocalJSX.GcMenuItem & JSXBase.HTMLAttributes<HTMLGcMenuItemElement>;
            "gc-ol": LocalJSX.GcOl & JSXBase.HTMLAttributes<HTMLGcOlElement>;
            "gc-pagination": LocalJSX.GcPagination & JSXBase.HTMLAttributes<HTMLGcPaginationElement>;
            "gc-select": LocalJSX.GcSelect & JSXBase.HTMLAttributes<HTMLGcSelectElement>;
            "gc-spinner": LocalJSX.GcSpinner & JSXBase.HTMLAttributes<HTMLGcSpinnerElement>;
            "gc-step": LocalJSX.GcStep & JSXBase.HTMLAttributes<HTMLGcStepElement>;
            "gc-steps": LocalJSX.GcSteps & JSXBase.HTMLAttributes<HTMLGcStepsElement>;
            "gc-table": LocalJSX.GcTable & JSXBase.HTMLAttributes<HTMLGcTableElement>;
            "gc-tag": LocalJSX.GcTag & JSXBase.HTMLAttributes<HTMLGcTagElement>;
            "gc-ul": LocalJSX.GcUl & JSXBase.HTMLAttributes<HTMLGcUlElement>;
        }
    }
}
