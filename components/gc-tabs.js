import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const GcTabs$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gcTabChange = createEvent(this, "gc:tab-change", 7);
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
    return (h(Host, null, h("slot", null)));
  }
  get elm() { return this; }
}, [6, "gc-tabs", undefined, [[0, "gc:tab-click", "tabClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gc-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "gc-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcTabs$1);
      }
      break;
  } });
}

const GcTabs = GcTabs$1;
const defineCustomElement = defineCustomElement$1;

export { GcTabs, defineCustomElement };
