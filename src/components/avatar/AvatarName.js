import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { Heading4 } from '../..';

class AvatarName extends PureComponent {
  getfirstLetters = () => {
    const name = this.props.value;
    const nameSplitted = name.split(' ');
    const firstLetter = nameSplitted
      .shift()
      .charAt(0)
      .toUpperCase();
    let initials;
    if (nameSplitted.length > 0) {
      const lastLetter = nameSplitted
        .pop()
        .charAt(0)
        .toUpperCase();
      initials = firstLetter.concat(lastLetter);
      return initials;
    }
    initials = firstLetter;
    return initials;
  };

  render() {
    const { className, color, shape, size, ...others } = this.props;
    const avatarClassNames = cx(
      theme['avatar-name'],
      theme[`is-${size}`],
      theme[`is-${shape}`],
      theme[color],
      className,
    );

    return (
      <Box className={avatarClassNames} {...others} data-teamleader-ui="avatar-name">
        <Heading4 className={theme['content']}>{this.getfirstLetters()}</Heading4>
      </Box>
    );
  }
}

AvatarName.propTypes = {
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The color of the avatar. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The shape of the avatar. */
  shape: PropTypes.oneOf(['circle', 'rounded']),
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  /** The value for in the avatar. */
  value: PropTypes.string,
};

AvatarName.defaultProps = {
  shape: 'circle',
  size: 'medium',
  value: 'Michael Scott',
};

export default AvatarName;
