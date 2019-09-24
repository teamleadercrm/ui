import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AvatarImage from './AvatarImage';
import AvatarInitials from './AvatarInitials';
import AvatarOverlay from './AvatarOverlay';
import Box, { pickBoxProps } from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { COLORS } from '../../constants';

const hashCode = str => {
  let hash = 0;
  if (!str || str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash;
};

const getColor = id => (id ? COLORS[Math.abs(hashCode(id)) % COLORS.length] : COLORS[2]);

class Avatar extends PureComponent {
  render() {
    const { className, editable, imageUrl, fullName, id, onImageChange, size, shape, ...others } = this.props;
    const avatarClassNames = cx(theme['avatar'], theme[`is-${size}`], theme[`is-${shape}`], className);
    const boxProps = pickBoxProps(others);

    return (
      <Box className={avatarClassNames} {...boxProps}>
        {imageUrl ? (
          <AvatarImage image={imageUrl} imageAlt={fullName} {...others} />
        ) : (
          <AvatarInitials color={getColor(id)} name={fullName} {...others} />
        )}
        {editable && (size === 'large' || size === 'hero') && <AvatarOverlay onClick={onImageChange} />}
      </Box>
    );
  }
}

Avatar.propTypes = {
  /** If true, an overlay will be shown with edit icon. */
  editable: PropTypes.bool,
  /** The image url to show as an avatar. */
  imageUrl: PropTypes.string,
  /** When no image available, avatar initials will be based on this string. */
  fullName: PropTypes.string,
  /** Expects a uuid to determine the avatar initials background color. */
  id: PropTypes.string,
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange: PropTypes.func,
  /** The shape of the avatar. */
  shape: PropTypes.oneOf(['circle', 'rounded']),
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

Avatar.defaultProps = {
  shape: 'circle',
  size: 'medium',
};

export default Avatar;
