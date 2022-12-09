export default {
  title: 'Components/Upload',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-upload disabled="${args.disabled}" width="${args.width}" accept-type="${args.acceptType}">
<div slot="gc__dropzone-heading">
  Please upload your file or Drop your file here
</div>
<div slot="gc__dropzone-body">
  <div>
    <b>The CSV file should have the following headers:</b>
  </div>
  <div>
    usernames, operator, env, transaction_id, reported_before, explanation, user_block_status, color_code
  </div>
</div>
<div slot="gc__dropzone-notes">
  Additional sheets in the Excel file will be mapped to its<br />corresponding reported user as additional detailed user information
</div>
</gc-upload>`;
export const Default = Template.bind({});
Default.args = {
  acceptType: 'csv',
  disabled: false,
  width: '430px',
};
