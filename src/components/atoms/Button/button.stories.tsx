import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Click me!'
};
