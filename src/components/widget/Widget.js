import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import cx from 'classnames';
import theme from './theme.css';

const PADDINGS = {
  small: 3,
  medium: 4,
  large: 5,
};

class Widget extends PureComponent {
  render() {
    const { children, className, size, ...others } = this.props;

    return (
      <Box className={cx(theme['widget'], className)} {...others}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            padding: PADDINGS[size],
            ...child.props,
          });
        })}
      </Box>
    );
  }
}

Widget.propTypes = {
  /** The content to display inside the widget. */
  children: PropTypes.node,
  /** The class passed to the widget. */
  className: PropTypes.string,
  /** The size wich controls the paddings passed down to the children. */
  size: PropTypes.oneOf(Object.keys(PADDINGS)),
};

Widget.defaultProps = {
  size: 'medium',
};

Widget.Body = Body;
Widget.Footer = Footer;
Widget.Header = Header;

export default Widget;
