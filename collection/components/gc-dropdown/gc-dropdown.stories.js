export default {
  title: 'Components/Dropdown',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = () => `
<div style="height: 400px;">
  <gc-dropdown>
  <gc-button>Tooltip</gc-button>
  <div slot='gc__dropdown-content' class='menu' style='width: 200px'>
    <div>Tooltip content 1</div>
    <div>Tooltip content 2</div>
  </div>
  </gc-dropdown>
  <gc-dropdown id='dropdown'>
  <gc-button>Open</gc-button>
  <gc-menu slot='gc__dropdown-content' class='menu' style='width: 200px'>
    <gc-menu-item value='cut'>
      Cut
    </gc-menu-item>
    <gc-menu-item value='copy'>
      Copy
    </gc-menu-item>
    <gc-menu-item value='paste'>
      Paste
    </gc-menu-item>
    <gc-menu-item value='delete'>
      Delete
    </gc-menu-item>
  </gc-menu>
  </gc-dropdown>
</div>
`;
export const Default = Template.bind({});
Default.args = {};
