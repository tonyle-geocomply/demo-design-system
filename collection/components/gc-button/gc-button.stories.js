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
const EventTemplate = () => `
  <pre>
    <gc-h2>Integrate Event Handler With JS</gc-h2>
    <code>
      // Javascript with id of gc-button
      $('#apply_filters').on('click', function () {

      });
    </code>
  </pre>
`;
export const Events = EventTemplate.bind({});
