import React from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconUserMediumOutline, IconUserSmallOutline } from '@teamleader/ui-icons';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';

interface AvatarAnonymousProps {
  /** Component that will be placed top right of the avatar image. */
  children?: React.ReactNode;
  /** The size of the avatar. */
  size: Exclude<(typeof SIZES)[number], 'fullscreen' | 'smallest'>;
}

const AvatarAnonymous: GenericComponent<AvatarAnonymousProps> = ({ children, size }) => {
  return (
    <Box
      alignItems="center"
      backgroundColor="neutral"
      backgroundTint="normal"
      className={cx(theme['avatar'], theme['avatar-anonymous'])}
      data-teamleader-ui="avatar-anonymous"
      display="flex"
      justifyContent="center"
    >
      <Icon color="neutral" tint="darkest">
        {size === 'tiny' || size === 'small' ? <IconUserSmallOutline /> : <IconUserMediumOutline />}
      </Icon>
      {children && <div className={theme['children']}>{children}</div>}
    </Box>
  );
};

export default AvatarAnonymous;
