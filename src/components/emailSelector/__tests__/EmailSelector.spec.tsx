import React from 'react';
import { render } from '@testing-library/react';
import EmailSelector from '../EmailSelector';

describe('Component - EmailSelector', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <EmailSelector defaultSelection={[{ email: 'david.brent@dundermiflin.com', label: 'David Brent' }]} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
