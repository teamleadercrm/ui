import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
    color: PropTypes.PropTypes.oneOf(['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet']),
    /** The size of the component */
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'fullscreen']),
    /** The tint of the component */
    tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
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
