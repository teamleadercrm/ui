import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import MarketingLockBadge from '../marketingLockBadge';
import { Heading4, Heading5 } from '../typography';

const MarketingTab = ({ active, children, className, forwardedRef, size, onClick, ...others }) => {
  const tabRef = useRef();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (event.pageX !== 0 && event.pageY !== 0) {
      blur();
    }
  };

  const blur = () => {
    const currentTabRef = tabRef.current;
    if (currentTabRef.blur) {
      currentTabRef.blur();
    }
  };

  const classNames = cx(theme['wrapper'], { [theme['is-active']]: active }, className);

  const TextElement = size === 'small' ? Heading5 : Heading4;

  return (
    <Box
      data-teamleader-ui="marketing-tab"
      className={classNames}
      marginHorizontal={size === 'small' ? 1 : 2}
      paddingHorizontal={size === 'small' ? 2 : 3}
      ref={tabRef}
      onClick={handleClick}
      {...others}
    >
      <TextElement element="span">{children}</TextElement>
      <MarketingLockBadge marginLeft={3} size={size} />
    </Box>
  );
};

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
