import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../constants';
import theme from './theme.css';

const factory = (baseType, type, defaultElement) => {
  class Text extends PureComponent {
    render() {
      const { children, className, color, element, maxLines, style, tint, ...others } = this.props;

      const classNames = cx(
        theme[baseType],
        theme[type],
        theme[color],
        theme[tint],
        {
          [theme['overflow-multiline']]: maxLines > 1,
          [theme['overflow-singleline']]: maxLines === 1,
        },
        className,
      );

      const styles = {
        ...(maxLines > 1 && { MozLineClamp: maxLines, WebkitLineClamp: maxLines }),
        ...style,
      };

      const Element = element || defaultElement;

      return (
        <Box className={classNames} data-teamleader-ui={baseType} element={Element} {...others} style={styles}>
          {children}
        </Box>
      );
    }
  }

  Text.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.oneOf(COLORS),
    element: PropTypes.node,
    maxLines: PropTypes.number,
    style: PropTypes.object,
    tint: PropTypes.oneOf(TINTS),
  };

  Text.defaultProps = {
    element: null,
    tint: 'darkest',
  };

  return Text;
};

export { factory as textFactory };
