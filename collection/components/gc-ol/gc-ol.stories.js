export default {
  title: 'Typography/Ordered List',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = () => `
  <gc-ol>
    <li>
      Test 1
    </li>
    <li>
      Test 2
    </li>
  </gc-ol>
`;
export const Default = Template.bind({});
Default.args = {};
