import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AvatarAdd from './AvatarAdd';
import AvatarAnonymous from './AvatarAnonymous';
import AvatarImage from './AvatarImage';
import AvatarInitials from './AvatarInitials';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';
import { IconCloseMediumOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';

class Avatar extends PureComponent {
  renderComponent = () => {
    const { creatable, children, editable, imageUrl, fullName, id, onImageChange, selected, size } = this.props;

    const childrenToRender = selected ? (
      <Icon
        backgroundColor="aqua"
        backgroundTint="dark"
        borderColor="aqua"
        borderTint="dark"
        borderRadius="circle"
        borderWidth={size === 'hero' ? 6 : 2}
        color="neutral"
        tint="lightest"
      >
        {size === 'hero' ? <IconCloseMediumOutline /> : <IconCloseSmallOutline />}
      </Icon>
    ) : (
      children
    );

    if (creatable) {
      return <AvatarAdd children={children} size={size} />;
    }

    if (imageUrl) {
      return (
        <AvatarImage
          children={childrenToRender}
          editable={editable}
          image={imageUrl}
          imageAlt={fullName}
          onImageChange={onImageChange}
          size={size}
        />
      );
    }

    if (fullName && id) {
      return (
        <AvatarInitials
          children={childrenToRender}
          editable={editable}
          id={id}
          name={fullName}
          onImageChange={onImageChange}
          size={size}
        />
      );
    }

    return <AvatarAnonymous children={childrenToRender} size={size} />;
  };

  render() {
    const { className, onClick, selected, size, shape, ...others } = this.props;

    const avatarClassNames = cx(
      theme['avatar'],
      theme[`is-${size}`],
      theme[`is-${shape}`],
      {
        [theme['is-selectable']]: onClick,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const restProps = omit(others, [
      'children',
      'creatable',
      'editable',
      'imageUrl',
      'fullName',
      'id',
      'onImageChange',
    ]);

    return (
      <Box
        {...restProps}
        className={avatarClassNames}
        padding={onClick ? (size === 'hero' ? 2 : 1) : 0}
        boxSizing="content-box"
      >
        {this.renderComponent()}
      </Box>
    );
  }
}

Avatar.propTypes = {
  /** Component that will be placed top right of the avatar image. */
  children: PropTypes.any,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** If true, an add user icon will be shown. */
  creatable: PropTypes.bool,
  /** If true, an overlay will be shown with edit icon. */
  editable: PropTypes.bool,
  /** The image url to show as an avatar. */
  imageUrl: PropTypes.string,
  /** When no image available, avatar initials will be based on this string. */
  fullName: PropTypes.string,
  /** Expects a uuid to determine the avatar initials background color. */
  id: PropTypes.string,
  /** Callback function that is fired when user clicks the avatar. */
  onClick: PropTypes.func,
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange: PropTypes.func,
  /** If true, the avatar will have a selected state. */
  selected: PropTypes.bool,
  /** The shape of the avatar. */
  shape: PropTypes.oneOf(['circle', 'rounded']),
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

Avatar.defaultProps = {
  creatable: false,
  editable: false,
  selected: false,
  shape: 'circle',
  size: 'medium',
};

export default Avatar;
