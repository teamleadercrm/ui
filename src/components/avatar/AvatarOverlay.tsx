import React, { PureComponent } from 'react';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconEditSmallFilled } from '@teamleader/ui-icons';
import cx from 'classnames';

class AvatarOverlay extends PureComponent {
  render() {
    const { size } = this.props;
    const classNames = cx(
      theme['overlay-background'],
      size === 'medium' ? theme['full-height'] : theme['default-height'],
    );

    return (
      <div {...this.props} className={theme['overlay']}>
        <Box className={classNames} display="flex" justifyContent="center">
          <Icon color="neutral" tint="lightest">
            <IconEditSmallFilled />
          </Icon>
        </Box>
      </div>
    );
  }
}

export default AvatarOverlay;
