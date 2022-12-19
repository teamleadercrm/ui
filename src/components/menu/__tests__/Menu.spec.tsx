import React from 'react';
import { render } from '@testing-library/react';
import { MenuDivider, MenuItem, MenuTitle, Menu } from '..';

describe('Component - Menu', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <Menu active>
        <MenuItem label="Michael Scofield" />
        <MenuItem label="Jim Halpert" />
        <MenuDivider />
        <MenuTitle>Assistants</MenuTitle>
        <MenuItem label="Dwight Schrute" />
      </Menu>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
