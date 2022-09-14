import { IconCloseMediumOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { useState } from 'react';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import Icon from '../icon';
import Tooltip from '../tooltip';
import { TooltipProps } from '../tooltip/Tooltip';
import { TextBodyCompact } from '../typography';
import AvatarAdd from './AvatarAdd';
import AvatarAnonymous from './AvatarAnonymous';
import AvatarImage from './AvatarImage';
import AvatarInitials from './AvatarInitials';
import AvatarTeam from './AvatarTeam';
import theme from './theme.css';
import { Shape } from './types';

const TooltippedBox = Tooltip(Box);

export interface AvatarProps extends Omit<BoxProps, 'size' | 'ref'> {
  /** Component that will be placed top right of the avatar image. */
  children?: React.ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** If true, an add user icon will be shown. */
  creatable?: boolean;
  /** If true, an overlay will be shown with edit icon. */
  editable?: boolean;
  /** The image url to show as an avatar. */
  imageUrl?: string;
  /** When no image available, avatar initials will be based on this string. */
  fullName?: string;
  /** Expects a uuid to determine the avatar initials background color. */
  id?: string;
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange?: React.MouseEventHandler<HTMLDivElement>;
  /** If true, avatars will become interactive. */
  selectable?: boolean;
  /** If true, the avatar will have a selected state. */
  selected?: boolean;
  /** The shape of the avatar. */
  shape?: Shape;
  /** The size of the avatar. */
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest'>;
  /** If true, a team icon will be shown. */
  team?: boolean;
  /** If true, the name will be shown in a tooltip on hover. */
  tooltip?: boolean;
}

type AvatarInternalComponentProps = { size: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest'> } & Pick<
  AvatarProps,
  'creatable' | 'children' | 'editable' | 'imageUrl' | 'fullName' | 'id' | 'onImageChange' | 'selected' | 'team'
>;

const AvatarInternalComponent: GenericComponent<AvatarInternalComponentProps> = ({
  creatable,
  children,
  editable,
  imageUrl,
  fullName,
  id,
  onImageChange,
  selected,
  size,
  team,
}) => {
  const [failedToLoadImage, setFailedToLoadImage] = useState(false);
  const handleImageLoadFailure = () => {
    setFailedToLoadImage(false);
  };

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
        onImageLoadFailure={handleImageLoadFailure}
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

const Avatar = ({
  className,
  selectable = false,
  selected = false,
  size = 'medium',
  shape = 'circle',
  tooltip = false,
  fullName,
  creatable,
  children,
  editable,
  imageUrl,
  id,
  onImageChange,
  team,
  ...others
}: AvatarProps) => {
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

  const enableTooltip = tooltip && typeof fullName === 'string' && fullName.length > 0;
  // @ts-ignore TS complains about non-overlapping props
  const Component: GenericComponent<BoxProps | TooltipProps> = enableTooltip ? TooltippedBox : Box;
  const tooltipProps = enableTooltip
    ? {
        tooltip: <TextBodyCompact>{fullName}</TextBodyCompact>,
        tooltipColor: 'white',
        tooltipPosition: 'top',
        tooltipSize: 'small',
      }
    : {};

  return (
    <Component
      {...others}
      {...(selectable && { boxSizing: 'content-box', padding: size === 'hero' ? 2 : 1 })}
      {...tooltipProps}
      className={avatarClassNames}
    >
      <AvatarInternalComponent
        creatable={creatable}
        editable={editable}
        imageUrl={imageUrl}
        fullName={fullName}
        id={id}
        onImageChange={onImageChange}
        selected={selected}
        size={size}
        team={team}
      >
        {children}
      </AvatarInternalComponent>
    </Component>
  );
};

export default Avatar;
