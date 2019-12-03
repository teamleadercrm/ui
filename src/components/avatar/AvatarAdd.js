import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconUserAddMediumOutline, IconUserAddSmallOutline } from '@teamleader/ui-icons';

class AvatarAdd extends PureComponent {
  render() {
    const { children, size } = this.props;

    return (
      <Box
        backgroundColor="neutral"
        backgroundTint="normal"
        className={theme['avatar-add']}
        data-teamleader-ui="avatar-add"
      >
        <Icon color="neutral" tint="darkest">
          {size === 'tiny' || size === 'small' ? <IconUserAddSmallOutline /> : <IconUserAddMediumOutline />}
        </Icon>
        {children && <div className={theme['children']}>{children}</div>}
      </Box>
    );
  }
}

AvatarAdd.propTypes = {
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

export default AvatarAdd;
