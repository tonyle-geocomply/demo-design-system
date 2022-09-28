export default {
  title: 'Components/Button/Button With Icon',
};
const Template = () => `
  <gc-button type="primary" icon="search">Primary</gc-button>
  <gc-button type="secondary" icon="clear-search">Secondary</gc-button>
  <gc-button type="danger" icon="home">Danger</gc-button>
`;
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {};
