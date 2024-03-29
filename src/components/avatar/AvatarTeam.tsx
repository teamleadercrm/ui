import React from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconTeamMediumOutline, IconTeamSmallOutline } from '@teamleader/ui-icons';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';

interface AvatarTeamProps {
  /** The size of the avatar. */
  size?: Exclude<(typeof SIZES)[number], 'fullscreen' | 'smallest'>;
}

const AvatarTeam: GenericComponent<AvatarTeamProps> = ({ size }) => {
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
