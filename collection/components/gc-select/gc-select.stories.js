export default {
  title: 'Components/Select',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `
<div style="height: 400px;">
  <div style='width: 300px;'>
    <gc-select
      id='select'
      placeholder='Select'
      items='${args.items}'
    </gc-select>
  </div>
</div>
`;
export const Default = Template.bind({});
Default.args = {
  items: JSON.stringify([
    { 'label': 'Option 1', 'value': 'option_1' },
    { 'label': 'Option 2', 'value': 'option_2' },
    { 'label': 'Option 3', 'value': 'option_3' },
    { 'label': 'Option 4', 'value': 'option_4' },
    { 'label': 'Option 5', 'value': 'option_5' }
  ]),
};
