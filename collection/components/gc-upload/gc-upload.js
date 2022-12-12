import { Component, Prop, Event, State, Host, h } from '@stencil/core';
import { Dropzone } from 'dropzone';
import { getIconExtension, getAcceptTypes } from '../../utils/utils';
const TIMEOUT = 700;
export class GcUpload {
  constructor() {
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
      const dropzone = new Dropzone(this.container, Object.assign({ disablePreviews: true, clickable: this.disabled || !this.disableState, acceptedFiles: this.getAcceptFiles() }, this.option));
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
    this.gcUploadedFile.emit({ file: e.target.files[0] });
  }
  render() {
    if (this.isCustom) {
      return (h(Host, null,
        h("label", { htmlFor: "file-upload", class: "custom-file-upload" },
          h("slot", null)),
        h("input", { accept: this.getAcceptFiles(), id: "file-upload", type: "file", onChange: this.handleChange })));
    }
    return (h(Host, null,
      h("form", { id: "dropzone", action: "/upload", class: { 'dropzone': true, 'dropzone-dragging': this.dragging }, ref: el => (this.container = el), style: { width: this.width } },
        h("div", { class: "dz-message" },
          !this.fileName && (h("div", { class: "gc__dropzone-heading" },
            h("slot", { name: "gc__dropzone-heading" }))),
          h("div", { class: "gc__dropzone-icon" },
            h("gc-icon", { name: `fa-regular ${this.getIcon()}`, size: "40px", color: "var(--gc-color-primary)" }),
            h("div", { class: "gc__dropzone-extension" },
              "*.",
              this.acceptType)),
          !!this.fileName && h("div", { class: "gc__dropzone-filename" }, this.fileName),
          !this.fileName && (h("div", { class: "gc__dropzone-body" },
            h("slot", { name: "gc__dropzone-body" }))),
          !this.fileName && (h("div", { class: "gc__dropzone-buttons" },
            h("gc-button", { id: "browse_files", type: "primary", "padding-text": "30px", height: "32px" }, "Browse Files"),
            h("div", { class: "gc__dropzone-type" },
              "Drop your *.",
              this.acceptType,
              " file here"))),
          !this.fileName && (h("div", { class: "gc__dropzone-notes" },
            h("slot", { name: "gc__dropzone-notes" }))))),
      !!this.progress && h("gc-progress", { percent: this.progress, width: `calc(${this.width} + 45px)` })));
  }
  static get is() { return "gc-upload"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gc-upload.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gc-upload.css"]
  }; }
  static get properties() { return {
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Width of upload"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'430px'"
    },
    "acceptType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Accept type"
      },
      "attribute": "accept-type",
      "reflect": false,
      "defaultValue": "'xlsx'"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "option": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Option"
      },
      "defaultValue": "{}"
    },
    "isCustom": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Custom how to display"
      },
      "attribute": "is-custom",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "dragging": {},
    "progress": {},
    "fileName": {},
    "disableState": {}
  }; }
  static get events() { return [{
      "method": "gcUploadedFile",
      "name": "gc:uploaded-file",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "gcUploadProgress",
      "name": "gc:upload-progress",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "gcUploadCompleted",
      "name": "gc:upload-completed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
