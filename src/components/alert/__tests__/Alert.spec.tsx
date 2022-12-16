import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../Alert';

describe('Component - Alert', () => {
  it('renders', async () => {
    const screen = render(
      <Alert
        active
        primaryAction={{
          label: 'Confirm',
        }}
        secondaryAction={{
          label: 'Cancel',
        }}
        title="Alert title"
        body="I am the alert body text"
      />,
    );

    expect(screen.baseElement).toMatchSnapshot();
  });
});
