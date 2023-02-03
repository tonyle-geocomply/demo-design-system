export default {
  title: 'Components/Drag and drop',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = () => `
<gc-drag-container group="kanban">
  <gc-draggable-item>
    <gc-checkbox
      gc-name="drag_1"
      label="Drag 1"
    ></gc-checkbox>
  </gc-draggable-item>
  <gc-draggable-item>
    Drag 2
  </gc-draggable-item>
</gc-drag-container>
`;
export const Default = Template.bind({});
Default.args = {};
