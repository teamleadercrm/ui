import React from 'react';
import { render } from '@testing-library/react';
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
});
