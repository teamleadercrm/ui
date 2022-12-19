import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';

describe('Component - Icon', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <Icon>
        <IconWarningBadgedMediumOutline />
      </Icon>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
