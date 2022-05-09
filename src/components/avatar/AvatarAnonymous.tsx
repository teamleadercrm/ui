import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { Size } from './types';
import { IconUserMediumOutline, IconUserSmallOutline } from '@teamleader/ui-icons';

interface Props {
  /** Component that will be placed top right of the avatar image. */
  children?: React.ReactNode;
  /** The size of the avatar. */
  size: Size;
}

const AvatarAnonymous = ({ children, size }: Props) => {
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
        {size === Size.tiny || size === Size.small ? <IconUserSmallOutline /> : <IconUserMediumOutline />}
      </Icon>
      {children && <div className={theme['children']}>{children}</div>}
    </Box>
  );
};

export default AvatarAnonymous;
