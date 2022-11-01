export default {
  title: 'Components/Tooltip',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = () => `
  <gc-tooltip content="Long text 2" right-pos="0">
  </gc-tooltip>
`;
export const Default = Template.bind({});
Default.args = {};
