import React from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { Size } from './types';
import { IconTeamMediumOutline, IconTeamSmallOutline } from '@teamleader/ui-icons';

interface Props {
  /** The size of the avatar. */
  size: Size;
}

const AvatarTeam = ({ size }: Props) => {
  return (
    <Box
      alignItems="center"
      backgroundColor="neutral"
      backgroundTint="darkest"
      className={cx(theme['avatar'], theme['avatar-team'])}
      data-teamleader-ui="avatar-team"
      display="flex"
      justifyContent="center"
    >
      <Icon color="neutral" tint="light">
        {size === 'tiny' || size === 'small' ? <IconTeamSmallOutline /> : <IconTeamMediumOutline />}
      </Icon>
    </Box>
  );
};

export default AvatarTeam;
