import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '../Dialog';

describe('Component - Dialog', () => {
  test('it renders', async () => {
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
});
