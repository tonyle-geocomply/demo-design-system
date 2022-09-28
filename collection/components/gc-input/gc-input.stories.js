export default {
  title: 'Components/Input',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-input type="${args.type}" disabled="${args.disabled}" value="${args.value}" placeholder="${args.placeholder}"></gc-input>`;
export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Type something...',
  value: '',
  disabled: false,
};
