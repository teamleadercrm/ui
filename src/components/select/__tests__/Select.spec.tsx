import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../Select';

describe('Component - Select', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <Select
        options={[
          { label: 'Michael Scoott', value: '1' },
          { label: 'Jim Halpert', value: '2' },
        ]}
        onChange={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls the onChange handler when the selection changes', async () => {
    const handleOnChange = jest.fn();
    const user = userEvent.setup();

    const screen = render(
      <Select
        options={[
          { label: 'Michael Scoott', value: '1' },
          { label: 'Jim Halpert', value: '2' },
        ]}
        onChange={handleOnChange}
      />,
    );

    const select = screen.getByRole('combobox');
    await user.click(select);

    const option = screen.getByText('Michael Scoott');
    await user.click(option);

    expect(handleOnChange).toBeCalledWith(
      expect.objectContaining({ label: 'Michael Scoott', value: '1' }),
      expect.anything(),
    );
  });

  it('calls the onChange handler when the selection of a multiselect changes', async () => {
    const handleOnChange = jest.fn();
    const user = userEvent.setup();

    const screen = render(
      <Select
        isMulti
        options={[
          { label: 'Michael Scoott', value: '1' },
          { label: 'Jim Halpert', value: '2' },
        ]}
        onChange={handleOnChange}
      />,
    );

    const select = screen.getByRole('combobox');

    const selectOption = async (label: string) => {
      await user.click(select);

      const option = screen.getByText(label);
      await user.click(option);
    };

    await selectOption('Michael Scoott');
    await selectOption('Jim Halpert');

    expect(handleOnChange).toBeCalledTimes(2);
    expect(handleOnChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        { label: 'Michael Scoott', value: '1' },
        { label: 'Jim Halpert', value: '2' },
      ]),
      expect.anything(),
    );
  });

  it('clears the selection when when the clear button is clicked', async () => {
    const handleOnChange = jest.fn();
    const user = userEvent.setup();

    const screen = render(
      <Select
        isClearable
        value={{ label: 'Michael Scoott', value: '1' }}
        options={[
          { label: 'Michael Scoott', value: '1' },
          { label: 'Jim Halpert', value: '2' },
        ]}
        onChange={handleOnChange}
      />,
    );

    const clearButton = screen.container.querySelector('[data-teamleader-ui="icon"]');
    await user.click(clearButton!);

    expect(handleOnChange).toBeCalledWith(expect.objectContaining({}), expect.anything());
  });

  it('renders a disabled select as disabled', async () => {
    const screen = render(
      <Select
        isDisabled
        options={[
          { label: 'Michael Scoott', value: '1' },
          { label: 'Jim Halpert', value: '2' },
        ]}
        onChange={() => {}}
      />,
    );

    expect(screen.getByRole('combobox', { hidden: true })).toBeDisabled();
  });

  it('renders an error message', async () => {
    const error = <span>Fake error message!</span>;
    const screen = render(<Select error={error} onChange={() => {}} />);

    expect(screen.getByText('Fake error message!')).toBeVisible();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('renders a success message', async () => {
    const success = <span>Fake success message!</span>;
    const screen = render(<Select success={success} onChange={() => {}} />);

    expect(screen.getByText('Fake success message!')).toBeVisible();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('renders a warning message', async () => {
    const warning = <span>Fake warning message!</span>;
    const screen = render(<Select warning={warning} onChange={() => {}} />);

    expect(screen.getByText('Fake warning message!')).toBeVisible();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('renders a help text', async () => {
    const helpText = 'Fake help text!';
    const screen = render(<Select helpText={helpText} onChange={() => {}} />);

    expect(screen.getByText(helpText)).toBeVisible();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('renders a clear button when a value is provided', async () => {
    const screen = render(
      <Select
        isClearable
        value={{ label: 'Michael Scoott', value: '1' }}
        options={[
          { label: 'Michael Scoott', value: '1' },
          { label: 'Jim Halpert', value: '2' },
        ]}
        onChange={() => {}}
      />,
    );

    expect(screen.container.querySelectorAll('[data-teamleader-ui="icon"]').length).toBe(2);
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('does not render a clear button when no value is provided', async () => {
    const screen = render(
      <Select
        isClearable
        options={[
          { label: 'Michael Scoott', value: '1' },
          { label: 'Jim Halpert', value: '2' },
        ]}
        onChange={() => {}}
      />,
    );

    expect(screen.container.querySelectorAll('[data-teamleader-ui="icon"]').length).toBe(1);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
