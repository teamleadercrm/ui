import React from 'react';
import { render } from '@testing-library/react';
import IconButton from '../IconButton';
import { IconAddMediumOutline } from '@teamleader/ui-icons';

describe('Component - IconButton', () => {
  it('renders', async () => {
    const { asFragment } = render(<IconButton icon={<IconAddMediumOutline />} title="Add invoice" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
