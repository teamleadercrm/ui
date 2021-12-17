import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { IslandGroup } from '../island';

const Widget = ({ children, size, ...others }) => {
  return (
    <IslandGroup direction="vertical" {...others}>
      {React.Children.map(children, (child) => {
        if (!child) {
          return child;
        }

        return React.cloneElement(child, {
          ...child.props,
          size,
        });
      })}
    </IslandGroup>
  );
};

Widget.propTypes = {
  /** The content to display inside the widget. */
  children: PropTypes.node,
  /** The size which controls the padding of the children. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Widget.defaultProps = {
  size: 'medium',
};

Widget.Body = Body;
Widget.Footer = Footer;
Widget.Header = Header;

export default Widget;
