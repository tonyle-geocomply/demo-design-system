export default {
  title: 'Components/Table',
  parameters: {
    viewMode: 'docs',
  },
};
let data = [];
for (let i = 0; i < 20; i += 1) {
  data.push({
    _id: '5e7118ddce4b3d577956457f',
    index: 0,
    guid: 'ae04f5ed-5cd3-491e-8e9a-6c6b31a4ba7d',
    isActive: false,
    balance: '$2,443.30',
    age: 21,
    eyeColor: '<gc-tag type="primary" width="88px">Primary</gc-tag>',
    name: 'Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney Courtney',
    company: 'XYQAG',
    email: 'undefined.undefined@xyqag.co.uk',
    phone: '+1 (839) 560-3581',
    address: '326 Irving Street, Grimsley, Texas, 4048',
    location: '326 Irving Street, Grimsley, Texas, 4048',
    organization: 'Org name',
    organization_1: 'Org name',
    organization_2: 'Org name',
  });
}
const columns = [
  {
    name: 'name',
    label: 'Name',
    width: '220px',
    fixed: true,
  },
  {
    name: 'age',
    label: 'Age',
    width: '120px',
  },
  {
    name: 'eyeColor',
    label: 'Eye Color',
    width: '220px',
    center: true,
  },
  {
    name: 'company',
    label: 'Company',
    width: '220px',
  },
  {
    name: 'email',
    label: 'Email',
    width: '220px',
  },
  {
    name: 'address',
    label: 'Address',
    width: '220px',
  },
  {
    name: 'location',
    label: 'Location',
    width: '220px',
  },
  {
    name: 'organization',
    label: 'Organization',
    width: '220px',
  },
  {
    name: 'organization_1',
    label: 'Organization 1',
    width: '220px',
  },
  {
    name: 'organization_2',
    label: 'Organization 2',
  },
];
const Template = args => `
<gc-table
  id='table'
  key-field='_id'
  selection-type='checkbox'
  sortable
  data='${args.data || JSON.stringify(data)}'
  columns='${args.columns || JSON.stringify(columns)}'
  >
  </gc-table>
`;
export const Default = Template.bind({});
Default.args = {
  data: '',
  columns: '',
};
