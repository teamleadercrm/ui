import React, { useState, useMemo } from 'react';
import cx from 'classnames';
import theme from './theme.css';
import AvatarOverlay from './AvatarOverlay';
import { Size } from './types';
import Box from '../box';
import { Heading4 } from '../typography';
import { colorsWithout } from '../../constants';

const colors = colorsWithout(['neutral']);
const hashCode = (hexString: string) => parseInt(hexString.substr(-5), 16);

interface Props {
  /** Component that will be placed top right of the avatar image. */
  children?: React.ReactNode;
  /** If true, an overlay will be shown with edit icon. */
  editable?: boolean;
  /** The uuid to determine the background color of the avatar. */
  id?: string;
  /** The name for in the avatar. */
  name: string;
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** The size of the avatar. */
  size: Size;
}

const AvatarInitials = ({ children, name, editable, id, onImageChange, size }: Props) => {
  const [displayAvatarOverlay, setDisplayAvatarOverlay] = useState(false);

  const backgroundColor = useMemo(() => {
    if (!id) {
      return 'neutral';
    }

    return colors[Math.abs(hashCode(id)) % colors.length];
  }, [id]);

  const initials = useMemo(() => {
    const splitName = name.split(' ');
    const firstLetter = splitName[0].charAt(0);
    if (splitName.length > 1) {
      const lastLetter = splitName[splitName.length - 1].charAt(0);
      return `${firstLetter}${lastLetter}`;
    }
    return firstLetter;
  }, [name]);

  const handleOnMouseEnter = () => {
    setDisplayAvatarOverlay(true);
  };

  const handleOnMouseLeave = () => {
    setDisplayAvatarOverlay(false);
  };

  const shouldShowAvatarOverlay =
    editable && (size === Size.large || size === Size.hero || (size === Size.medium && displayAvatarOverlay));

  return (
    <Box
      alignItems="center"
      backgroundColor={backgroundColor}
      backgroundTint="normal"
      className={cx(theme['avatar'], theme['avatar-initials'])}
      data-teamleader-ui="avatar-initials"
      display="flex"
      justifyContent="center"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Heading4 className={theme['initials']} color="neutral" tint={id ? 'lightest' : 'darkest'}>
        {initials}
      </Heading4>
      {shouldShowAvatarOverlay && <AvatarOverlay onClick={onImageChange} size={size} />}
      {children && <div className={theme['children']}>{children}</div>}
    </Box>
  );
};

export default AvatarInitials;
