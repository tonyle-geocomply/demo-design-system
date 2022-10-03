export default {
  title: 'Components/Button',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    type: { control: { type: 'select', options: ['primary', 'secondary', 'danger'] } },
  },
};
const Template = args => `<gc-button type="${args.type}" icon="${args.icon}" disabled="${args.disabled}">Primary</gc-button>`;
export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  icon: 'fa-solid fa-magnifying-glass',
  disabled: false,
};
