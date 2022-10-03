export default {
  title: 'Typography/Link',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-link color="${args.color}" gc-to="${args.gcTo}" icon="${args.icon}">Link</gc-link>`;
export const Default = Template.bind({});
Default.args = {
  gcTo: '',
  icon: 'fa-solid fa-magnifying-glass',
  color: '',
};
