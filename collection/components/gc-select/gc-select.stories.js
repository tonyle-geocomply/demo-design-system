export default {
  title: 'Components/Select',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    items: {
      name: 'items',
      description: 'Items or input data',
    },
    gcChange: {
      name: 'gc-change',
      description: 'Event trigger when select an item',
    },
  },
};
const Template = args => `
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
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
    { label: 'Option 4', value: 'option_4' },
    { label: 'Option 5', value: 'option_5' },
  ]),
};
const EventTemplate = () => `
  <pre>
    <gc-h2>Integrate Event Handler With JS</gc-h2>
    <code>
        const $dropDown = document.getElementById('select');

        // Event Change
        $dropDown.addEventListener('gc:change', function(evt) {

        });
    </code>
  </pre>
`;
export const Events = EventTemplate.bind({});
