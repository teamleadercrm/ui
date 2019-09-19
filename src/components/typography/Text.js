import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../constants';
import theme from './theme.css';

const factory = (baseType, type, defaultElement) => {
  class Text extends PureComponent {
    render() {
      const { children, className, color, element, ellipsis, tint, ...others } = this.props;

      const classNames = cx(
        theme[baseType],
        theme[type],
        theme[color],
        theme[tint],
        {
          [theme['overflow-ellipsis']]: ellipsis,
        },
        className,
      );

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
    ellipsis: PropTypes.bool,
    tint: PropTypes.oneOf(TINTS),
  };

  Text.defaultProps = {
    element: null,
    ellipsis: false,
    tint: 'darkest',
  };

  return Text;
};

export { factory as textFactory };
