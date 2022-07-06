import React from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconUserAddMediumOutline, IconUserAddSmallOutline } from '@teamleader/ui-icons';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';

interface AvatarAddProps {
  /** Component that will be placed top right of the avatar image. */
  children?: React.ReactNode;
  /** The size of the avatar. */
  size: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest'>;
}

const AvatarAdd: GenericComponent<AvatarAddProps> = ({ children, size }) => {
  return (
    <Box
      alignItems="center"
      backgroundColor="neutral"
      backgroundTint="normal"
      className={cx(theme['avatar'], theme['avatar-add'])}
      data-teamleader-ui="avatar-add"
      display="flex"
      justifyContent="center"
    >
      <Icon color="neutral" tint="darkest">
        {size === 'tiny' || size === 'small' ? <IconUserAddSmallOutline /> : <IconUserAddMediumOutline />}
      </Icon>
      {children && <div className={theme['children']}>{children}</div>}
    </Box>
  );
};

export default AvatarAdd;
