import React from 'react';
import { render } from '@testing-library/react';
import ButtonGroup from '../ButtonGroup';
import Button from '../../Button';

describe('Component - ButtonGroup', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <ButtonGroup value="button-1">
        <Button label="Button 1" value="button-1" />
        <Button label="Button 2" value="button-2" />
      </ButtonGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
