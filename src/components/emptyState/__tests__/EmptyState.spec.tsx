import React from 'react';
import { render } from '@testing-library/react';
import EmptyState from '../EmptyState';

describe('Component - EmptyState', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <EmptyState
        title="This is the title"
        metaText="I am the meta information and I basically explain that you can start adding content via the add button above."
        action={{ children: 'Add', onClick: () => {} }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
