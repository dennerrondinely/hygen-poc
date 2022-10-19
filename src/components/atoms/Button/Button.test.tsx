import React from 'react';
import { screen } from '@testing-library/react';

import Button from './index';
import { render } from 'utils/tests/helpers';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Click me!</Button>);
    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      height: '4rem',
      padding: '0 1.2rem',
      'font-size': '1.4rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    render(<Button size="small">Click me!</Button>);
    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      height: '3.2rem',
      'font-size': '1.2rem'
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Click me!</Button>);
    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0 1.6rem'
    });
  });

  it('should render fullWidth version', () => {
    render(
      <Button size="large" fullWidth>
        Click me!
      </Button>
    );
    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      width: '100%'
    });
  });
});
