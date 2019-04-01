import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import WidgetBody from './WidgetBody';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';
import theme from './theme.css';

class Widget extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Box className={theme['widget']} {...others}>
        {children}
      </Box>
    );
  }
}

Widget.propTypes = {
  /** The content to display inside the widget. */
  children: PropTypes.node,
};

Widget.WidgetBody = WidgetBody;
Widget.WidgetFooter = WidgetFooter;
Widget.WidgetHeader = WidgetHeader;

export default Widget;
