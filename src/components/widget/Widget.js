import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import WidgetBody from './WidgetBody';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';
import theme from './theme.css';

const SIZES = {
  small: 3,
  medium: 4,
  large: 5,
};

class Widget extends PureComponent {
  render() {
    const { children, size, ...others } = this.props;

    return (
      <Box className={theme['widget']} {...others}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            padding: SIZES[size],
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
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Widget.defaultProps = {
  size: 'medium',
};

Widget.WidgetBody = WidgetBody;
Widget.WidgetFooter = WidgetFooter;
Widget.WidgetHeader = WidgetHeader;

export default Widget;
