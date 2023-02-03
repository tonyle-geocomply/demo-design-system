export default {
  title: 'Components/Alert',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    type: { control: { type: 'select', options: ['info', 'success', 'error'] } },
  },
};
const Template = (args) => `<gc-alert type="${args.type}" content="${args.content}"></gc-alert>`;
export const Default = Template.bind({});
Default.args = {
  type: 'info',
  content: 'There are errors found in your file. Please re-check your file and upload again.',
};
