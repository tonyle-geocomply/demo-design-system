export default {
  title: 'Icon System/Icon',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-icon name="${args.name}" size="${args.size}" />`;
export const Default = Template.bind({});
Default.args = {
  name: 'caret-down',
  size: 'md',
};
