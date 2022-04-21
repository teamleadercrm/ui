import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

import { Heading4, Heading5 } from '../typography';

/** @type {React.ComponentType<any>} */
const TitleTab = forwardRef(
  ({ active, children, className, counter = null, forwardedRef, size, onClick, ...others }, ref) => {
    const tabRef = useRef();
    useImperativeHandle(ref, () => tabRef.current);

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

    const getPaddingHorizontal = () => {
      switch (size) {
        case 'small':
          return 2;
        case 'medium':
        default:
          return 3;
      }
    };

    const classNames = cx(theme['title-tab'], { [theme['is-active']]: active }, className);

    const TextElement = size === 'small' ? Heading5 : Heading4;

    return (
      <Box
        data-teamleader-ui="title-tab"
        className={classNames}
        marginHorizontal={size === 'small' ? 1 : 2}
        paddingHorizontal={getPaddingHorizontal()}
        ref={tabRef}
        onClick={handleClick}
        {...others}
      >
        <TextElement element="span">{children}</TextElement>
        {counter}
      </Box>
    );
  },
);

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

TitleTab.displayName = 'TitleTab';

export default TitleTab;
