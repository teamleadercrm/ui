import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
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
    const { className, color, shape, size, ...others } = this.props;
    const avatarClassNames = cx(
      theme['avatar-initials'],
      theme[`is-${size}`],
      theme[`is-${shape}`],
      theme[color],
      className,
    );

    const boxProps = pickBoxProps(others);

    return (
      <Box className={avatarClassNames} {...boxProps} data-teamleader-ui="avatar-initials">
        <Heading4 className={theme['content']}>{this.getInitials()}</Heading4>
      </Box>
    );
  }
}

AvatarInitials.propTypes = {
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The color of the avatar. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The shape of the avatar. */
  shape: PropTypes.oneOf(['circle', 'rounded']),
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  /** The name for in the avatar. */
  name: PropTypes.string,
};

AvatarInitials.defaultProps = {
  shape: 'circle',
  size: 'medium',
  name: 'Michael Scott',
};

export default AvatarInitials;
