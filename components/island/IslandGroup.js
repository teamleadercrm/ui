import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import theme from './theme.css';

class IslandGroup extends PureComponent {
  isDark(color) {
    if (color !== 'white' && color !== 'neutral') {
      return false;
    }

    return this.props.dark;
  }
  render() {
    const { children, className, color } = this.props;

    const isDark = this.isDark(color);

    const classNames = cx(theme['segmented'], theme['island'], theme[color], { [theme['dark']]: isDark }, className);

    return (
      <Box className={classNames} padding={0}>
        {children}
      </Box>
    );
  }
}

IslandGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  dark: PropTypes.bool,
};

IslandGroup.defaultProps = {
  color: 'white',
};

export default IslandGroup;
