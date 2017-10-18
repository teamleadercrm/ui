import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './theme.css';

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
      if (color !== 'white') {
        return false;
      }

      return this.props.soft;
    }

    render() {
      const { children, className, color, element, ...props } = this.props;

      const isSoft = this.isSoft(color);

      const classNames = cx(
        s[baseType],
        s[type],
        s[color],
        {
          [s['soft']]: isSoft,
        },
        className,
      );

      const Element = element || defaultElement;

      return (
        <Box className={classNames} data-teamleader-ui={baseType} element={Element} {...props}>
          {children}
        </Box>
      );
    }
  }

  return Text;
};

export { factory as textFactory };
