import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Section from '../section';
class Header extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Section color="neutral" {...others}>
        {children}
      </Section>
    );
  }
}

Header.propTypes = {
  /** The content to display inside the widget header. */
  children: PropTypes.any,
};

export default Header;
