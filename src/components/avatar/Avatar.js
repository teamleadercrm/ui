import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AvatarImage, AvatarInitials } from '../avatar';
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

const getColor = id => (id ? COLORS[Math.abs(hashCode(id)) % COLORS.length] : COLORS[0]);

class Avatar extends PureComponent {
  render() {
    const { imageUrl, fullName, id, ...others } = this.props;

    return imageUrl ? (
      <AvatarImage image={imageUrl} imageAlt={fullName} {...others} />
    ) : (
      <AvatarInitials color={getColor(id)} name={fullName} {...others} />
    );
  }
}

Avatar.propTypes = {
  /** The image url to show as an avatar. */
  imageUrl: PropTypes.string,
  /** When no image available, avatar initials will be based on this string. */
  fullName: PropTypes.string,
  /** Expects a uuid to determine the avatar initials background color. */
  id: PropTypes.string,
};

export default Avatar;
