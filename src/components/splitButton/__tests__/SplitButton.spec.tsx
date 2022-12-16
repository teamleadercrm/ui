import React from 'react';
import { render } from '@testing-library/react';
import SplitButton from '../SplitButton';
import { MenuItem } from '../../menu';

describe('Component - SplitButton', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <SplitButton onButtonClick={() => {}}>
        <MenuItem onClick={() => {}} label="Main action" />
        <MenuItem onClick={() => {}} label="Other action" />
      </SplitButton>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
