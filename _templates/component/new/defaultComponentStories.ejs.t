---
to: src/components/<%= hierarchy%>/<%= h.changeCase.upperCaseFirst(fileName) %>/<%= h.changeCase.upperCaseFirst(fileName) %>.stories.tsx
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import <%= h.changeCase.upperCaseFirst(fileName) %>, { <%= h.changeCase.upperCaseFirst(fileName) %>Props } from '.';

export default {
  title: '<%= hierarchy%>/<%= h.changeCase.upperCaseFirst(fileName) %>',
  component: <%= h.changeCase.upperCaseFirst(fileName) %>
} as Meta;

export const Default: Story<<%= h.changeCase.upperCaseFirst(fileName) %>Props> = (args) => <<%= h.changeCase.upperCaseFirst(fileName) %> {...args} />;
