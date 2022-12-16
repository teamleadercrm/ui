import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dialog from '../Dialog';

describe('Component - Dialog', () => {
  it('renders', async () => {
    const screen = render(
      <Dialog
        active
        title="Foobar"
        primaryAction={{
          label: 'Confirm',
        }}
        secondaryAction={{
          label: 'Cancel',
        }}
        tertiaryAction={{
          children: 'Delete',
        }}
        onCloseClick={() => {}}
        onOverlayClick={() => {}}
        onEscKeyDown={() => {}}
      >
        Foobar
      </Dialog>,
    );
    expect(screen.baseElement).toMatchSnapshot();
  });

  it('does not render anything when the dialog is not active', async () => {
    const screen = render(
      <Dialog
        active={false}
        title="Foobar"
        primaryAction={{
          label: 'Confirm',
        }}
      >
        Foobar
      </Dialog>,
    );
    expect(screen.baseElement).toMatchSnapshot();
  });

  it('calls the onClose handler when clicking the close button', async () => {
    const handleOnClose = jest.fn();
    const user = userEvent.setup();

    const screen = render(
      <Dialog
        active
        title="Foobar"
        primaryAction={{
          label: 'Confirm',
        }}
        onCloseClick={handleOnClose}
      >
        Foobar
      </Dialog>,
    );

    expect(handleOnClose).not.toBeCalled();
    const closeButton = screen.baseElement.querySelector('section button[type="button"]');

    await user.click(closeButton!);
    expect(handleOnClose).toBeCalledTimes(1);
  });

  it('calls the onClose handler when clicking the overlay', async () => {
    const handleOnClose = jest.fn();
    const user = userEvent.setup();

    const screen = render(
      <Dialog
        active
        title="Foobar"
        primaryAction={{
          label: 'Confirm',
        }}
        onOverlayClick={handleOnClose}
      >
        Foobar
      </Dialog>,
    );

    expect(handleOnClose).not.toBeCalled();
    const overlay = screen.baseElement.querySelector('[data-teamleader-ui="overlay"]');

    await user.click(overlay!);
    expect(handleOnClose).toBeCalledTimes(1);
  });

  it('renders a form', async () => {
    const screen = render(
      <Dialog
        active
        title="Foobar"
        primaryAction={{
          label: 'Confirm',
        }}
        form
      >
        Foobar
      </Dialog>,
    );

    expect(screen.baseElement.querySelector('form')).toBeVisible();
  });

  it('calls the form onSubmit when pressing the submit button', async () => {
    const handleSubmit = jest.fn((event) => event.preventDefault()); // need to add this preventDefault, otherwise it errors
    const user = userEvent.setup();

    const screen = render(
      <Dialog
        active
        title="Foobar"
        primaryAction={{
          label: 'Confirm',
          type: 'submit',
        }}
        form
        onSubmit={handleSubmit}
      >
        Foobar
      </Dialog>,
    );

    const submitButton = screen.getByRole('button', { name: 'Confirm' });
    await user.click(submitButton);

    expect(handleSubmit).toBeCalled();
  });
});
