export default {
  title: 'Components/Progress',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-progress percent="${args.percent}"></gc-progress>`;
export const Default = Template.bind({});
Default.args = {
  percent: 80,
};
