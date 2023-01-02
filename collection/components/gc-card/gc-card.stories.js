export default {
  title: 'Components/Card',
  parameters: {
    viewMode: 'docs',
  },
};
const Template = (args) => `<gc-card width="${args.width}" height="${args.height}" heading="${args.heading}" icon="${args.icon}" background="${args.background}">
<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; margin: 18px 0">
  <div style="color: #0881FF; font-weight: 600; font-size: 32px;">
    106
  </div>
  <div style="text-align: center; font-weight: 600; font-size: 12px; margin: 18px 0; width: 80%;">
    Total cases that need the Win/Loss Status to be updated
  </div>
  <div>
    <gc-button height="35px" padding-text="25px">View all</gc-button>
  </div>
</div>
</gc-card>`;
export const Default = Template.bind({});
Default.args = {
  heading: 'GC Cases Pending Review',
  icon: 'fa-solid fa-trophy-star',
  width: '267px',
  height: '231px',
  background: '#fffff',
};
