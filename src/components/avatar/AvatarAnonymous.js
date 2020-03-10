import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconUserMediumOutline, IconUserSmallOutline } from '@teamleader/ui-icons';

class AvatarAnonymous extends PureComponent {
  render() {
    const { children, size } = this.props;

    return (
      <Box
        alignItems="center"
        backgroundColor="neutral"
        backgroundTint="normal"
        className={theme['avatar-anonymous']}
        data-teamleader-ui="avatar-anonymous"
        display="flex"
        justifyContent="center"
      >
        <Icon color="neutral" tint="darkest">
          {size === 'tiny' || size === 'small' ? <IconUserSmallOutline /> : <IconUserMediumOutline />}
        </Icon>
        {children && <div className={theme['children']}>{children}</div>}
      </Box>
    );
  }
}

AvatarAnonymous.propTypes = {
  /** Component that will be placed top right of the avatar image. */
  children: PropTypes.any,
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

export default AvatarAnonymous;
