import React from 'react';
import { render } from '@testing-library/react';
import ProgressTracker from '../ProgressTracker';

describe('Component - ProgressTracker', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <ProgressTracker>
        <ProgressTracker.ProgressStep label="New" />
        <ProgressTracker.ProgressStep label="In progress" />
        <ProgressTracker.ProgressStep label="Done" />
      </ProgressTracker>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
