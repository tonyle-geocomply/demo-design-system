export default {
  title: 'Icon System/Icon List',
};
const ListTemplate = () => `
  <style>
    .list-icon {
      display: flex;
    }
    .list-icon div {
      padding: 8px;
      font-size: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>
  <div class="list-icon">
    <div>
      <gc-icon name="caret-down" size="lg" color="#0881FF"></gc-icon>
      <div>caret-down</div>
    </div>
    <div>
      <gc-icon name="caret-up" size="lg" color="#0881FF"></gc-icon>
      <div>caret-up</div>
    </div>
    <div>
      <gc-icon name="home" size="lg" color="#0881FF"></gc-icon>
      <div>home</div>
    </div>
    <div>
      <gc-icon name="search" size="lg" color="#0881FF"></gc-icon>
      <div>search</div>
    </div>
    <div>
      <gc-icon name="clear-search" size="lg" color="#0881FF"></gc-icon>
      <div>clear-search</div>
    </div>
    <div>
      <gc-icon name="anchor" size="lg" color="#0881FF"></gc-icon>
      <div>anchor</div>
    </div>
    <div>
      <gc-icon name="anchor" size="lg" color="#0881FF"></gc-icon>
      <div>anchor</div>
    </div>
    <div>
      <gc-icon name="bell" size="lg" color="#0881FF"></gc-icon>
      <div>bell</div>
    </div>
  </div>
`;
export const Default = ListTemplate.bind({});
Default.args = {};
