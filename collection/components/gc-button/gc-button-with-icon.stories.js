export default {
  title: 'Components/Button/Button With Icon',
};
const Template = () => `
  <gc-button type="primary" icon="fa-solid fa-magnifying-glass">Primary</gc-button>
  <gc-button type="secondary" icon="fa-regular fa-filter-slash">Secondary</gc-button>
  <gc-button type="danger" icon="fa-regular fa-house">Danger</gc-button>
`;
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {};
