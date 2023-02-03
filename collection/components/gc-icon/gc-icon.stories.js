export default {
  title: 'Icon System/Icon',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-icon name="${args.name}" size="${args.size}" />`;
export const Default = Template.bind({});
Default.args = {
  name: 'fa-regular fa-house',
  size: 'md',
};
