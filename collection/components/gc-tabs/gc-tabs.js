import { Component, Element, h, Host, Listen, Event } from '@stencil/core';
export class GcTabs {
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
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "gc-tabs"; }
  static get encapsulation() { return "scoped"; }
  static get events() { return [{
      "method": "gcTabChange",
      "name": "gc:tab-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "On click of tab, a CustomEvent 'gc:tab-click' will be triggered."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "elm"; }
  static get listeners() { return [{
      "name": "gc:tab-click",
      "method": "tabClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
