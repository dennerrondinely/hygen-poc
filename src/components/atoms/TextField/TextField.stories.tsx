import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'Nome',
    name: 'nome',
    placeholder: 'Digite seu nome!',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'onInput' }
  }
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: 'Ocorreu um erro'
};

export const WithDisabled: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithDisabled.args = {
  disabled: true
};

export const TypeNumber: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

TypeNumber.args = {
  type: 'number',
  id: 'teste'
};
