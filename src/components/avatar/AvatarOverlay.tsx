import React from 'react';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconEditSmallFilled } from '@teamleader/ui-icons';
import cx from 'classnames';
import { Size } from './types';

interface Props {
  size: Size;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const AvatarOverlay = ({ size, onClick }: Props) => {
  const classNames = cx(
    theme['overlay-background'],
    size === 'medium' ? theme['full-height'] : theme['default-height'],
  );

  return (
    <div onClick={onClick} className={theme['overlay']}>
      <Box className={classNames} display="flex" justifyContent="center">
        <Icon color="neutral" tint="lightest">
          <IconEditSmallFilled />
        </Icon>
      </Box>
    </div>
  );
};

export default AvatarOverlay;
