import React, { createRef, forwardRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';

import { Heading4, Heading5 } from '../typography';

class TitleTab extends PureComponent {
  tabNode = createRef();

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }
  };

  blur = () => {
    const { forwardedRef } = this.props;
    if (this.tabNode.current) {
      this.tabNode.current.blur();
    }
    if (forwardedRef && forwardedRef.current) {
      forwardedRef.current.blur();
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
    const { active, children, className, counter = null, forwardedRef, size, ...others } = this.props;
    const classNames = cx(theme['title-tab'], { [theme['is-active']]: active }, className);

    const rest = omit(others, ['onClick']);

    const TextElement = size === 'small' ? Heading5 : Heading4;

    return (
      <Box
        data-teamleader-ui="title-tab"
        className={classNames}
        marginHorizontal={size === 'small' ? 1 : 2}
        paddingHorizontal={this.getPaddingHorizontal()}
        ref={forwardedRef || this.tabNode}
        onClick={this.handleClick}
        {...rest}
      >
        <TextElement element="span">{children}</TextElement>
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

const ForwardedTitleTab = forwardRef((props, ref) => <TitleTab {...props} forwardedRef={ref} />);

ForwardedTitleTab.displayName = 'TitleTab';

export default ForwardedTitleTab;
