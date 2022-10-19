import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Test, { TestProps } from '.';

export default {
  title: 'atoms/Test',
  component: Test
} as Meta;

export const Default: Story<TestProps> = (args) => <Test {...args} />;
