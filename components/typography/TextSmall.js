import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class TextSmall extends PureComponent {
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
      theme['text'],
      theme['text-small'],
      theme[color],
      {
        [theme['soft']]: isSoft,
      },
      className,
    );

    const Element = element || 'p';

    const rest = omit(others, ['soft']);

    return (
      <Box className={classNames} data-teamleader-ui="text-small" element={Element} {...rest}>
        {children}
      </Box>
    );
  }
}

TextSmall.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua']),
  element: PropTypes.node,
  soft: PropTypes.bool,
};

TextSmall.defaultProps = {
  element: null,
  soft: false,
};

export default TextSmall;
