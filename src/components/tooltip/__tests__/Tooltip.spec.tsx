import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from '../Tooltip';

describe('Component - Tooltip', () => {
  it('should not be visible by default', async () => {
    const TooltippedDiv = Tooltip('div');
    const screen = render(<TooltippedDiv tooltip="This is the tooltip">Hover me</TooltippedDiv>);
    expect(screen.queryByText('This is the tooltip')).toBeNull();
  });

  it('should be visible when hovering', async () => {
    const TooltippedDiv = Tooltip('div');
    const user = userEvent.setup();

    const screen = render(<TooltippedDiv tooltip="This is the tooltip">Hover me</TooltippedDiv>);
    await user.hover(screen.getByText('Hover me'));
    expect(screen.getByText('This is the tooltip')).toBeVisible();
  });
});
