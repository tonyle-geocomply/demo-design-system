export default {
  title: 'Components/Menu',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = () => `
<gc-menu slot='dropdown-content' class='menu' style='width: 200px'>
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
</gc-menu>`;
export const Default = Template.bind({});
Default.args = {};
