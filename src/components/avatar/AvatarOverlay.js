import React, { PureComponent } from 'react';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconEditSmallFilled } from '@teamleader/ui-icons';

class AvatarOverlay extends PureComponent {
  render() {
    return (
      <Box {...this.props} alignItems="flex-end" className={theme['overlay']} display="flex" justifyContent="center">
        <Icon color="neutral" tint="lightest">
          <IconEditSmallFilled />
        </Icon>
      </Box>
    );
  }
}

export default AvatarOverlay;
