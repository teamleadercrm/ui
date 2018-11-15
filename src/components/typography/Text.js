import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../constants';
import theme from './theme.css';

const factory = (baseType, type, defaultElement) => {
  class Text extends PureComponent {
    render() {
      const { children, className, color, element, tint, ...others } = this.props;

      const classNames = cx(theme[baseType], theme[type], theme[color], theme[tint], className);

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
    color: PropTypes.oneOf(COLORS),
    element: PropTypes.node,
    tint: PropTypes.oneOf(TINTS),
  };

  Text.defaultProps = {
    element: null,
    tint: 'darkest',
  };

  return Text;
};

export { factory as textFactory };
