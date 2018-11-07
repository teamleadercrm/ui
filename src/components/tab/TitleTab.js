import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';

import { Heading4 } from '../typography';

class TitleTab extends PureComponent {
  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }
  };

  blur = () => {
    if (this.tabNode) {
      this.tabNode.getNode().blur();
    }
  };

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
    const { active, children, className, counter = null, ...others } = this.props;
    const classNames = cx(theme['title-tab'], { [theme['is-active']]: active }, className);

    const rest = omit(others, ['onClick']);

    return (
      <Box
        data-teamleader-ui="title-tab"
        className={classNames}
        paddingHorizontal={this.getPaddingHorizontal()}
        paddingVertical={4}
        ref={node => {
          this.tabNode = node;
        }}
        onClick={this.handleClick}
        {...rest}
      >
        <Heading4 element="span">{children}</Heading4>
        {counter}
      </Box>
    );
  }
}

TitleTab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  counter: PropTypes.node,
  element: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
};

TitleTab.defaultProps = {
  element: 'a',
  active: false,
  size: 'medium',
};

export default TitleTab;
