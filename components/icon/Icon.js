import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Icon extends PureComponent {
  render() {
    const { children, className, color, element, tint, opacity, ...others } = this.props;

    const classNames = cx(theme[color], theme[tint], className);

    return (
      <Box className={classNames} data-teamleader-ui="icon" element={element} {...others}>
        {React.Children.map(children, child => {
          // Check if child is an actual React component
          // if so, pass the needed props. If not, just render it.
          if (!child.type) {
            return child;
          }

          return React.cloneElement(child, {
            opacity,
          });
        })}
      </Box>
    );
  }
}

Icon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal']),
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  opacity: PropTypes.number,
  tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
};

Icon.defaultProps = {
  color: 'teal',
  element: 'span',
  tint: 'normal',
  opacity: 0.84,
};

export default Icon;
