import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconTeamMediumOutline, IconTeamSmallOutline } from '@teamleader/ui-icons';

class AvatarTeam extends PureComponent {
  render() {
    const { size } = this.props;

    return (
      <Box
        alignItems="center"
        backgroundColor="neutral"
        backgroundTint="normal"
        className={cx(theme['avatar'], theme['avatar-team'])}
        data-teamleader-ui="avatar-team"
        display="flex"
        justifyContent="center"
      >
        <Icon color="neutral" tint="darkest">
          {size === 'tiny' || size === 'small' ? <IconTeamSmallOutline /> : <IconTeamMediumOutline />}
        </Icon>
      </Box>
    );
  }
}

AvatarTeam.propTypes = {
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

export default AvatarTeam;
