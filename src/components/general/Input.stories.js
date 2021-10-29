import MyInput from './Input.vue';

export default {
  title: 'general/Input',
  component: MyInput,
  argTypes: {
    darkMode: { control: { type: 'boolean' } },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { MyInput },
  setup() {
    return { args };
  },
  template: '<my-input v-bind="args" />',
});

export const DefaultLight = Template.bind({});
DefaultLight.args = {
  label: 'E-mail',
};

export const FilledLight = Template.bind({});
FilledLight.args = {
  label: 'E-mail',
  filled: true,
  value: 'test@example.com',
};

export const ErrorLight = Template.bind({});
ErrorLight.args = {
  label: 'E-mail',
  filled: true,
  value: 'test@example.com',
  error: true,
};

export const WarningLight = Template.bind({});
WarningLight.args = {
  label: 'E-mail',
  warning: true,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  label: 'E-mail',
  darkMode: true,
};

export const FilledDark = Template.bind({});
FilledDark.args = {
  label: 'E-mail',
  filled: true,
  value: 'test@example.com',
  darkMode: true,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  label: 'E-mail',
  filled: true,
  value: 'test@example.com',
  error: true,
  darkMode: true,
};

export const WarningDark = Template.bind({});
WarningDark.args = {
  label: 'E-mail',
  warning: true,
  darkMode: true,
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'E-mail',
  value: 'email@wrong',
  filled: true,
  messageText: 'Você digitou um e-mail inválido.',
  error: true,
};

export const WarningMessage = Template.bind({});
WarningMessage.args = {
  label: 'E-mail',
  messageText: 'Antes de continuar informe os dados.',
  warning: true,
};

export const SuccessMessage = Template.bind({});
SuccessMessage.args = {
  label: 'E-mail',
  filled: true,
  value: 'test@example.com',
  messageText: 'Aguarde, efetuando autenticação.',
  success: true,
};


export const MessageTooLong = Template.bind({});
MessageTooLong.args = {
  label: 'E-mail',
  messageText: 'Ooops! Parece que você se esqueceu de fornecer todos os dados necessários para concluir seu login.',
  warning: true,
};
