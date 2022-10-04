export default {
  title: 'Components/Spinner',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-spinner is-float="${args.isFloat}"></gc-spinner>`;
export const Default = Template.bind({});
Default.args = {
  isFloat: false,
};
