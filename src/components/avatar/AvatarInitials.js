import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { Heading4 } from '../typography';

class AvatarInitials extends PureComponent {
  getInitials = () => {
    const { name } = this.props;
    const splitName = name.split(' ');
    const firstLetter = splitName[0].charAt(0);
    if (splitName.length > 1) {
      const lastLetter = splitName[splitName.length - 1].charAt(0);
      return `${firstLetter}${lastLetter}`;
    }
    return firstLetter;
  };

  render() {
    const { children, color, shape, ...others } = this.props;
    const avatarClassNames = cx(theme['avatar-initials'], theme[color]);

    return (
      <Box className={avatarClassNames} {...others} data-teamleader-ui="avatar-initials">
        <Heading4 className={theme['initials']}>{this.getInitials()}</Heading4>
        {children && <div className={theme['children']}>{children}</div>}
      </Box>
    );
  }
}

AvatarInitials.propTypes = {
  /** Component that will be placed top right of the avatar image. */
  children: PropTypes.any,
  /** The color of the avatar. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The name for in the avatar. */
  name: PropTypes.string,
};

AvatarInitials.defaultProps = {
  color: 'neutral',
  name: 'Michael Scott',
};

export default AvatarInitials;
