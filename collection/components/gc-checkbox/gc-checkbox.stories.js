export default {
  title: 'Components/Checkbox',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-checkbox gc-name="${args.gcName}" label="${args.label}" checked="${args.checked}" disabled="${args.disabled}"></gc-checkbox>`;
export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  gcName: 'option_1',
  checked: true,
  disabled: false,
};
