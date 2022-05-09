import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import AvatarOverlay from './AvatarOverlay';

class AvatarImage extends PureComponent {
  state = {
    displayAvatarOverlay: false,
  };

  handleOnMouseEnter = () => {
    this.setState({ displayAvatarOverlay: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ displayAvatarOverlay: false });
  };

  render() {
    const { children, editable, image, imageAlt, onImageChange, size, onImageLoadFailure } = this.props;
    const { displayAvatarOverlay } = this.state;
    const shouldShowAvatarOverlay =
      editable && (size === 'large' || size === 'hero' || (size === 'medium' && displayAvatarOverlay));

    return (
      <div
        className={cx(theme['avatar'], theme['avatar-image'])}
        data-teamleader-ui="avatar-image"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <img alt={imageAlt} onError={onImageLoadFailure} src={image} className={theme['image']} />
        {shouldShowAvatarOverlay && <AvatarOverlay onClick={onImageChange} size={size} />}
        {children && <div className={theme['children']}>{children}</div>}
      </div>
    );
  }
}

AvatarImage.propTypes = {
  /** Component that will be placed top right of the avatar image. */
  children: PropTypes.any,
  /** If true, an overlay will be shown with edit icon. */
  editable: PropTypes.bool,
  /** An image source or an image element. */
  image: PropTypes.string,
  /** An alternative text for the image element. */
  imageAlt: PropTypes.string,
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange: PropTypes.func,
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

export default AvatarImage;
