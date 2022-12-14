import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Component - Button', () => {
  it('renders', async () => {
    const { asFragment } = render(<Button>Foobar</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls the onClick handler when clicking', async () => {
    const handleOnClick = jest.fn();

    const screen = render(<Button onClick={handleOnClick}>Foobar</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleOnClick).toBeCalledTimes(1);
  });

  it('renders a disabled button as disabled', async () => {
    const screen = render(<Button disabled>Foobar</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should not call the onClick handler when clickig on a disabled button', async () => {
    const handleOnClick = jest.fn();

    const screen = render(
      <Button onClick={handleOnClick} disabled>
        Foobar
      </Button>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleOnClick).not.toBeCalled();
  });

  it('renders a button as a link', async () => {
    const href = 'https://foobar.com';
    const screen = render(
      <Button element="a" href={href}>
        Foobar
      </Button>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });

  it('renders a loading spinner when processing', async () => {
    const screen = render(<Button processing>Foobar</Button>);
    expect(screen.container.querySelector('[data-teamleader-ui="loading-spinner"]')).toBeVisible();
  });

  it('renders an icon on the left', async () => {
    const Icon = <span>Fake icon</span>;
    const screen = render(<Button icon={Icon}>Foobar</Button>);

    expect(screen.getByText('Fake icon')).toBeVisible();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('renders an icon on the right', async () => {
    const Icon = <span>Fake icon</span>;
    const screen = render(
      <Button icon={Icon} iconPlacement="right">
        Foobar
      </Button>,
    );

    expect(screen.getByText('Fake icon')).toBeVisible();
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
