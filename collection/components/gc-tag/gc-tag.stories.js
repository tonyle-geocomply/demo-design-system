export default {
  title: 'Components/Tag',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    type: { control: { type: 'select', options: ['', 'primary', 'success', 'warning', 'danger', 'info', 'processing'] } },
  },
};
const Template = (args) => `<gc-tag type="${args.type}" width="${args.width}" color="${args.color}" border-color="${args.borderColor}" background="${args.background}">Primary</gc-tag>`;
export const Default = Template.bind({});
Default.args = {
  type: 'success',
  color: '',
  borderColor: '',
  background: '',
  width: '88px',
};
