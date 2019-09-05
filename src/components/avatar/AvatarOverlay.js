import React, { PureComponent } from 'react';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconEditSmallFilled } from '@teamleader/ui-icons';

class AvatarOverlay extends PureComponent {
  render() {
    return (
      <div {...this.props} className={theme['overlay']}>
        <Box className={theme['overlay-background']} display="flex" justifyContent="center">
          <Icon color="neutral" tint="lightest">
            <IconEditSmallFilled />
          </Icon>
        </Box>
      </div>
    );
  }
}

export default AvatarOverlay;
