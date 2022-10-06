export default {
  title: 'Color System/Colors',
};
const Template = () => `
  <style>
    .colors {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 4px;
    }

    .color-item {
      width: 100%;
      display: flex;
      align-items: center;
      height: 100px;
      color: white;
      border-radius: 4px;
      justify-content: center;
    }

    div.code {
      background: var(--gc-color-secondary);
      width: 100%;
      border-raidus: 4px;
      padding: 20px;
      margin-top: 20px;
    }
  </style>
  <gc-h1>Key colors</gc-h1>
  <div class="colors">
    <div style="background: #0881FF" class="color-item">#0881FF</div>
    <div style="background: #E8ECF0; color: black" class="color-item">#E8ECF0</div>
    <div style="background: #D0D8E0; color: black" class="color-item">#D0D8E0</div>
    <div style="background: #35383D" class="color-item">#35383D</div>
    <div style="background: #F4F7FA; color: black" class="color-item">#F4F7FA</div>
    <div style="background: #FFFFFF; color: black" class="color-item">#FFFFFF</div>
    <div style="background: #FFFEFF; color: black" class="color-item">#FFFEFF</div>
    <div style="background: #F24843" class="color-item">#F24843</div>
    <div style="background: #15BF21" class="color-item">#15BF21</div>
    <div style="background: #FA861C" class="color-item">#FA861C</div>
    <div style="background: #37B7D3" class="color-item">#37B7D3</div>
    <div style="background: #BF55DA" class="color-item">#BF55DA</div>
  </div>
  <gc-h1>Variable name</gc-h1>
  <div class="code">
  --gc-color-focus-blue: #0881FF<br />
  --gc-color-secondary-grey: #D0D8E0<br />
  --gc-color-light-grey: #E8ECF0<br />
  --gc-color-text-grey: #35383D<br />
  --gc-color-contrast-grey: #F4F7FA<br />
  --gc-color-contrast-white: #FFFFFF<br />
  --gc-color-second-white: #FFFEFF<br />
  --gc-color-red: #F24843<br />
  --gc-color-green: #15BF21<br />
  --gc-color-orange: #FA861C<br />
  --gc-color-cyan: #37B7D3<br />
  --gc-color-purple: #BF55DA<br />
  --gc-color-secondary-blue: #DFEBFF<br />
  --gc-color-dark-grey: #AFAFAF<br />
  --gc-color-dark-red: #DE3D38<br />
  --gc-color-second-grey: #DAE1E8<br />
  --gc-color-label-grey: #676767<br />
  --gc-color-placeholder: #979797<br />

  --gc-color-primary: var(--gc-color-focus-blue)<br />
  --gc-color-secondary: var(--gc-color-light-grey)<br />
  --gc-color-danger: var(--gc-color-red)<br />
  --gc-color-disabled: var(--gc-color-text-grey)<br />
</div>
`;
export const Variables = Template.bind({});
Variables.args = {};
