import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';

class IconTab extends PureComponent {
  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }
  };

  blur() {
    if (this.tabNode) {
      this.tabNode.getNode().blur();
    }
  }

  render() {
    const { active, className, counter = null, icon, ...others } = this.props;
    const classNames = cx(theme['icon-tab'], { [theme['is-active']]: active }, className);

    const rest = omit(others, ['onClick']);

    return (
      <Box
        data-teamleader-ui="icon-tab"
        className={classNames}
        paddingHorizontal={3}
        paddingVertical={4}
        ref={node => {
          this.tabNode = node;
        }}
        onClick={this.handleClick}
        {...rest}
      >
        {React.cloneElement(icon, { element: 'span' })}
        {counter && React.cloneElement(counter, { className: theme['counter'] })}
      </Box>
    );
  }
}

IconTab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  counter: PropTypes.node,
  element: PropTypes.node,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

IconTab.defaultProps = {
  element: 'a',
  active: false,
};

export default IconTab;
