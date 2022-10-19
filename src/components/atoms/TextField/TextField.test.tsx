import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from 'utils/tests/helpers';

import TextField from './index';

describe('<TextField />', () => {
  it('should render the input', () => {
    const { container } = render(<TextField />);

    expect(container).toContainHTML('input');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with label', () => {
    const { container } = render(<TextField label="nome" />);

    expect(container.firstChild).toHaveTextContent('nome');

    expect(container).toContainHTML('label');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change value when typing', async () => {
    const onInput = jest.fn();

    render(<TextField label="nome" onInput={onInput} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalled();
  });

  it('should render the input password', () => {
    const { container } = render(<TextField type="password" />);

    expect(container).toContainHTML('input');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show value when click', async () => {
    render(<TextField label="nome" type="password" />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
  });
});
