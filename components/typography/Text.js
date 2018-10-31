import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

const factory = (baseType, type, defaultElement) => {
  class Text extends PureComponent {
    render() {
      const { children, className, color, element, ...others } = this.props;

      const classNames = cx(theme[baseType], theme[type], theme[color], className);

      const Element = element || defaultElement;

      return (
        <Box className={classNames} data-teamleader-ui={baseType} element={Element} {...others}>
          {children}
        </Box>
      );
    }
  }

  Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua']),
    element: PropTypes.node,
  };

  Text.defaultProps = {
    color: 'teal',
    element: null,
  };

  return Text;
};

export { factory as textFactory };
