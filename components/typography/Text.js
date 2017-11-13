import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

const factory = (baseType, type, defaultElement) => {
  class Text extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      color: PropTypes.oneOf(['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua']),
      element: PropTypes.node,
      soft: PropTypes.bool,
    };

    static defaultProps = {
      element: null,
      soft: false,
    };

    isSoft(color) {
      if (color !== 'white' && color !== 'teal') {
        return false;
      }

      return this.props.soft;
    }

    render() {
      const { children, className, color, element, ...others } = this.props;

      const isSoft = this.isSoft(color);

      const classNames = cx(
        theme[baseType],
        theme[type],
        theme[color],
        {
          [theme['soft']]: isSoft,
        },
        className,
      );

      const Element = element || defaultElement;

      const rest = omit(others, ['soft']);

      return (
        <Box className={classNames} data-teamleader-ui={baseType} element={Element} {...rest}>
          {children}
        </Box>
      );
    }
  }

  return Text;
};

export { factory as textFactory };
