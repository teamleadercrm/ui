import React, { useState } from 'react';
import cx from 'classnames';
import theme from './theme.css';
import AvatarOverlay from './AvatarOverlay';
import { Size } from './types';

interface Props {
  /** Component that will be placed top right of the avatar image. */
  children?: React.ReactNode;
  /** If true, an overlay will be shown with edit icon. */
  editable?: boolean;
  /** An image source or an image element. */
  image: string;
  /** An alternative text for the image element. */
  imageAlt?: string;
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Callback function that is fired the image fails to load. */
  onImageLoadFailure?: React.ReactEventHandler<HTMLImageElement>;
  /** The size of the avatar. */
  size: Size;
}

const AvatarImage = ({ children, editable, image, imageAlt, onImageChange, size, onImageLoadFailure }: Props) => {
  const [displayAvatarOverlay, setDisplayAvatarOverlay] = useState(false);

  const handleOnMouseEnter = () => {
    setDisplayAvatarOverlay(true);
  };

  const handleOnMouseLeave = () => {
    setDisplayAvatarOverlay(false);
  };

  const shouldShowAvatarOverlay =
    editable && (size === Size.large || size === Size.hero || (size === Size.medium && displayAvatarOverlay));

  return (
    <div
      className={cx(theme['avatar'], theme['avatar-image'])}
      data-teamleader-ui="avatar-image"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <img alt={imageAlt} onError={onImageLoadFailure} src={image} className={theme['image']} />
      {shouldShowAvatarOverlay && <AvatarOverlay onClick={onImageChange} size={size} />}
      {children && <div className={theme['children']}>{children}</div>}
    </div>
  );
};

export default AvatarImage;
