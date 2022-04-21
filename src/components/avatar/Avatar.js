import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AvatarAdd from './AvatarAdd';
import AvatarAnonymous from './AvatarAnonymous';
import AvatarImage from './AvatarImage';
import AvatarInitials from './AvatarInitials';
import AvatarTeam from './AvatarTeam';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';
import { IconCloseMediumOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';

/** @type {React.ComponentType<any>} */
class Avatar extends PureComponent {
  state = {
    failedToLoadImage: false,
  };

  handleImageLoadFailure = () => {
    this.setState({
      failedToLoadImage: true,
    });
  };

  renderComponent = () => {
    const { failedToLoadImage } = this.state;
    const { creatable, children, editable, imageUrl, fullName, id, onImageChange, selected, size, team } = this.props;

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

    if (team) {
      return <AvatarTeam size={size} />;
    }

    if (creatable) {
      return <AvatarAdd size={size}>{children}</AvatarAdd>;
    }

    if (imageUrl && !failedToLoadImage) {
      return (
        <AvatarImage
          editable={editable}
          image={imageUrl}
          imageAlt={fullName}
          onImageChange={onImageChange}
          onImageLoadFailure={this.handleImageLoadFailure}
          size={size}
        >
          {childrenToRender}
        </AvatarImage>
      );
    }

    if (fullName) {
      return (
        <AvatarInitials editable={editable} id={id} name={fullName} onImageChange={onImageChange} size={size}>
          {childrenToRender}
        </AvatarInitials>
      );
    }

    return <AvatarAnonymous size={size}>{childrenToRender}</AvatarAnonymous>;
  };

  render() {
    const { className, selectable, selected, size, shape, ...others } = this.props;

    const avatarClassNames = cx(
      theme['wrapper'],
      theme[`is-${size}`],
      theme[`is-${shape}`],
      {
        [theme['is-selectable']]: selectable,
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
      'team',
    ]);

    return (
      <Box
        {...restProps}
        {...(selectable && { boxSizing: 'content-box', padding: size === 'hero' ? 2 : 1 })}
        className={avatarClassNames}
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
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange: PropTypes.func,
  /** If true, avatars will become interactive. */
  selectable: PropTypes.bool,
  /** If true, the avatar will have a selected state. */
  selected: PropTypes.bool,
  /** The shape of the avatar. */
  shape: PropTypes.oneOf(['circle', 'rounded']),
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
  /** If true, a team icon will be shown. */
  team: PropTypes.bool,
};

Avatar.defaultProps = {
  creatable: false,
  editable: false,
  selectable: false,
  selected: false,
  shape: 'circle',
  size: 'medium',
  team: false,
};

export default Avatar;
