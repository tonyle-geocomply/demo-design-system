export default {
  title: 'Components/Button/Button Types',
};
const Template = () => `
  <gc-button type="primary">Primary</gc-button>
  <gc-button type="secondary">Secondary</gc-button>
  <gc-button type="danger">Danger</gc-button>
  <gc-button type="closed">Closed</gc-button>
`;
export const ButtonTypes = Template.bind({});
ButtonTypes.args = {};
