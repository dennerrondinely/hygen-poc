import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Typography, { TypographyProps } from '.';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<TypographyProps> = (args) => (
  <Typography {...args} />
);

Default.args = {
  children: 'Consultas',
  color: 'gray-dark'
};
