import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class TabGroup extends PureComponent {
  scrollContainerRef = createRef();

  render() {
    const { children, className, inverted, size, ...others } = this.props;

    const classNames = cx(theme['tab-group'], className);

    return (
      <Box
        backgroundColor="neutral"
        backgroundTint="lightest"
        data-teamleader-ui="tab-group"
        className={classNames}
        {...others}
        display="flex"
        paddingHorizontal={1}
      >
        <Box className={theme['scroll-container']} display="flex" overflowX="scroll" ref={this.scrollContainerRef}>
          {React.Children.map(children, (child) => React.cloneElement(child, { size, marginHorizontal: 1 }))}
        </Box>
      </Box>
    );
  }
}

TabGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
};

export default TabGroup;
