import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Heading2 } from '../typography';
import Section from '../section';

class WidgetHeader extends PureComponent {
  render() {
    const { children, title, ...others } = this.props;

    return (
      <Section color="neutral" {...others}>
        {title && <Heading2>{title}</Heading2>}
        {children}
      </Section>
    );
  }
}

WidgetHeader.propTypes = {
  /** The content to display inside the widget header. */
  children: PropTypes.any,
  /** The title of the widget header. */
  title: PropTypes.string,
};

export default WidgetHeader;
