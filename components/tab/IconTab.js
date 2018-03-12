import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';

class IconTab extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    counter: PropTypes.node,
    element: PropTypes.node,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    element: 'a',
    active: false,
    size: 'medium',
  };

  constructor() {
    super(...arguments);
    this.handleClick = ::this.handleClick;
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }
  }

  blur() {
    if (this.tabNode) {
      this.tabNode.getNode().blur();
    }
  }

  getPaddingHorizontal = () => {
    const { size } = this.props;
    switch (size) {
      case 'small':
        return 2;
      case 'medium':
      default:
        return 3;
    }
  };

  render() {
    const { active, className, counter = null, icon, ...others } = this.props;
    const classNames = cx(theme['icon-tab'], { [theme['is-active']]: active }, className);

    const rest = omit(others, ['onClick']);

    return (
      <Box
        data-teamleader-ui="icon-tab"
        className={classNames}
        paddingHorizontal={this.getPaddingHorizontal()}
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

export default IconTab;
