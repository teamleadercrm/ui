import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import AvatarOverlay from './AvatarOverlay';
import Box from '../box';
import { Heading4 } from '../typography';
import { colorsWithout } from '../../constants';

const colors = colorsWithout(['neutral']);
const hashCode = (hexString) => parseInt(hexString.substr(-5), 16);

class AvatarInitials extends PureComponent {
  state = {
    displayAvatarOverlay: false,
  };

  getBackgroundColor = () => {
    const { id } = this.props;

    if (!id) {
      return 'neutral';
    }

    return colors[Math.abs(hashCode(id)) % colors.length];
  };

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

  handleOnMouseEnter = () => {
    this.setState({ displayAvatarOverlay: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ displayAvatarOverlay: false });
  };

  render() {
    const { children, editable, id, onImageChange, size } = this.props;
    const { displayAvatarOverlay } = this.state;
    const shouldShowAvatarOverlay =
      editable && (size === 'large' || size === 'hero' || (size === 'medium' && displayAvatarOverlay));

    return (
      <Box
        alignItems="center"
        backgroundColor={this.getBackgroundColor()}
        backgroundTint="normal"
        className={cx(theme['avatar'], theme['avatar-initials'])}
        data-teamleader-ui="avatar-initials"
        display="flex"
        justifyContent="center"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <Heading4 className={theme['initials']} color="neutral" tint={id ? 'lightest' : 'darkest'}>
          {this.getInitials()}
        </Heading4>
        {shouldShowAvatarOverlay && <AvatarOverlay onClick={onImageChange} size={size} />}
        {children && <div className={theme['children']}>{children}</div>}
      </Box>
    );
  }
}

AvatarInitials.propTypes = {
  /** Component that will be placed top right of the avatar image. */
  children: PropTypes.any,
  /** The uuid to determine the background color of the avatar. */
  id: PropTypes.string,
  /** The name for in the avatar. */
  name: PropTypes.string,
};

AvatarInitials.defaultProps = {
  name: 'Michael Scott',
};

export default AvatarInitials;
