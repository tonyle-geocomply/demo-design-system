export default {
  title: 'Components/Form Field',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-form-field disabled="${args.disabled}" type="${args.type}" label="${args.label}" gc-name="${args.gcName}" placeholder="${args.placeholder}"></gc-form-field>`;
export const Default = Template.bind({});
Default.args = {
  label: 'Last Name',
  gcName: 'last_name',
  placeholder: 'Type something...',
  value: '',
  disabled: false,
  type: 'text',
};
