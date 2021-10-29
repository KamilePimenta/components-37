import MyButton from './Button.vue';

export default {
  title: 'general/Button',
  component: MyButton,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  primary: true,
  label: 'Button',
  size: 'small',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  primary: true,
  label: 'Button',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  primary: true,
  label: 'Button',
  size: 'large',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  label: 'Button',
  size: 'small',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  label: 'Button',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  label: 'Button',
  size: 'large',
};