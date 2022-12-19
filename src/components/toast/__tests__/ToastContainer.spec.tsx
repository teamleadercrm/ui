import React from 'react';
import { render } from '@testing-library/react';
import { Toast, ToastContainer } from '..';

describe('Component - Toast', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <ToastContainer>
        <Toast>This is a Toast</Toast>
        <Toast>This is another Toast</Toast>
      </ToastContainer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
