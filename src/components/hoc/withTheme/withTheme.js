import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../../constants';

const withTheme = theme => WrappedComponent => {
  class WithTheme extends PureComponent {
    render() {
      const { color, size, tint, className, ...others } = this.props;

      const classNames = cx(theme[`is-${color}`], theme[`is-${size}`], theme[`is-${tint}`], className);

      return <WrappedComponent className={classNames} {...others} />;
    }
  }

  WithTheme.propTypes = {
    /** The color of the component */
    color: PropTypes.PropTypes.oneOf(COLORS),
    /** The size of the component */
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'fullscreen']),
    /** The tint of the component */
    tint: PropTypes.oneOf(TINTS),
  };

  WithTheme.defaultProps = {
    color: 'neutral',
    size: 'medium',
    tint: 'normal',
  };

  WithTheme.displayName = `WithTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithTheme;
};

export default withTheme;
