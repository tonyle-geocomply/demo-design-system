export default {
  title: 'Components/Textarea',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-textarea type="${args.type}" disabled="${args.disabled}" value="${args.value}" placeholder="${args.placeholder}"></gc-textarea>`;
export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Type something...',
  value: '',
  disabled: false,
};
