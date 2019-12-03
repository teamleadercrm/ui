import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconUserMediumOutline, IconUserSmallOutline } from '@teamleader/ui-icons';

class AvatarAnonymous extends PureComponent {
  render() {
    const { size } = this.props;

    return (
      <Box
        backgroundColor="neutral"
        backgroundTint="normal"
        className={theme['avatar-anonymous']}
        data-teamleader-ui="avatar-anonymous"
      >
        <Icon color="neutral" tint="darkest">
          {size === 'tiny' || size === 'small' ? <IconUserSmallOutline /> : <IconUserMediumOutline />}
        </Icon>
      </Box>
    );
  }
}

AvatarAnonymous.propTypes = {
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

export default AvatarAnonymous;
