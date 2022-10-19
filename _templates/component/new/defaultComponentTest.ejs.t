---
to: src/components/<%= hierarchy%>/<%= h.changeCase.upperCaseFirst(fileName) %>/<%= h.changeCase.upperCaseFirst(fileName) %>.test.tsx
---
import { screen } from '@testing-library/react';

import <%= h.changeCase.upperCaseFirst(fileName) %> from './index';
import { render } from 'utils/tests/helpers';

describe('<<%= h.changeCase.upperCaseFirst(fileName) %> />', () => {
  it('should render the medium size by default', () => {

  });
});

