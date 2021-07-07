import React, { createRef, forwardRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';
import Box from '../box';
import MarketingLockBadge from '../marketingLockBadge';
import { Heading4, Heading5 } from '../typography';

class MarketingTab extends PureComponent {
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

  render() {
    const { active, children, className, forwardedRef, size, ...others } = this.props;
    const classNames = cx(theme['wrapper'], { [theme['is-active']]: active }, className);

    const rest = omit(others, ['onClick']);

    const TextElement = size === 'small' ? Heading5 : Heading4;

    return (
      <Box
        data-teamleader-ui="marketing-tab"
        className={classNames}
        marginHorizontal={size === 'small' ? 1 : 2}
        paddingHorizontal={size === 'small' ? 2 : 3}
        ref={forwardedRef || this.tabNode}
        onClick={this.handleClick}
        {...rest}
      >
        <TextElement element="span">{children}</TextElement>
        <MarketingLockBadge marginLeft={3} size={size} />
      </Box>
    );
  }
}

MarketingTab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
};

MarketingTab.defaultProps = {
  element: 'a',
  active: false,
  size: 'medium',
};

const ForwardedMarketingTab = forwardRef((props, ref) => <MarketingTab {...props} forwardedRef={ref} />);

ForwardedMarketingTab.displayName = 'MarketingTab';

export default ForwardedMarketingTab;
