export default {
  title: 'Typography/Unordered List',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = () => `
  <gc-ul>
    <li>
      Test 1
    </li>
    <li>
      Test 2
    </li>
  </gc-ul>
`;
export const Default = Template.bind({});
Default.args = {};
