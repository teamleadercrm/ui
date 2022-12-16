import React from 'react';
import { render } from '@testing-library/react';
import { IconMenu, MenuItem } from '..';

describe('Component - IconMenu', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <IconMenu>
        <MenuItem label="Michael Scofield" />
        <MenuItem label="Jim Halpert" />
      </IconMenu>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
