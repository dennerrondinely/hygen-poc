import React from 'react';
import { screen } from '@testing-library/react';

import Typography from './index';
import { render } from 'utils/tests/helpers';

describe('<Typography />', () => {
  it('should render the heading h1', () => {
    const { container } = render(
      <Typography component="h1">Typography</Typography>
    );

    expect(
      screen.getByRole('heading', { name: /Typography/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Typography/i })).toContainHTML(
      'h1'
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the heading h2', () => {
    const { container } = render(
      <Typography component="h2">Typography</Typography>
    );

    expect(
      screen.getByRole('heading', { name: /Typography/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Typography/i })).toContainHTML(
      'h2'
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the span', () => {
    const { container } = render(
      <Typography component="span">Typography</Typography>
    );

    expect(screen.getByText(/Typography/i)).toBeInTheDocument();

    expect(screen.getByText(/Typography/i)).toContainHTML('span');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the heading p', () => {
    const { container } = render(
      <Typography component="p">Typography</Typography>
    );

    expect(screen.getByText(/Typography/i)).toBeInTheDocument();

    expect(screen.getByText(/Typography/i)).toContainHTML('p');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the color', () => {
    render(<Typography color="blue">Typography</Typography>);

    expect(screen.getByText(/Typography/i)).toBeInTheDocument();

    expect(screen.getByText(/Typography/i)).toHaveStyle({
      color: '#2E50D4'
    });
  });
});
