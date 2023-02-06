export default {
  title: 'Components/Modal',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = () => `
  <gc-modal id="modal" open>
    <gc-h2 slot="heading">Delete Queue</gc-h2>
    <div slot="content">Are you sure you want to delete Random Name Queue?</div>
    <div slot="footer">
      <gc-button type="secondary" padding-text="30px" style="margin-right: 12px" id="cancel-delete">
        Cancel
      </gc-button>
      <gc-button type="danger" id="confirm-delete">
        Confirm Delete
      </gc-button>
    </div>
  </gc-modal>
`;
export const Default = Template.bind({});
Default.args = {};
