export default {
  title: 'Components/Tag/Tag Types',
};
const Template = () => `
  <gc-tag type="primary" width="88px">Primary</gc-tag>
  <gc-tag type="success" width="88px">Success</gc-tag>
  <gc-tag type="warning" width="88px">Warning</gc-tag>
  <gc-tag type="danger" width="88px">Danger</gc-tag>
  <gc-tag type="info" width="88px">Info</gc-tag>
  <gc-tag type="processing" width="88px">Processing</gc-tag>
  <gc-tag color="#FF5454" background="#FFFFFF" border-color="#FF5454" border-width="1px" width="88px">Custom</gc-tag>
`;
export const TagTypes = Template.bind({});
TagTypes.args = {};
