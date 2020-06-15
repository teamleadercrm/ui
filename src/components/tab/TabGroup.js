import React, { createRef, PureComponent } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import smoothScroll from 'smoothscroll-polyfill';
import PropTypes from 'prop-types';
import Box from '../box';
import IconButton from '../iconButton';
import { IconChevronLeftSmallOutline, IconChevronRightSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';

const SCROLL_DISTANCE = 200;

class TabGroup extends PureComponent {
  scrollContainerRef = createRef();

  state = {
    canScrollLeft: false,
    canScrollRight: false,
  };

  componentDidMount() {
    smoothScroll.polyfill();
    this.scrollContainerRef.current.boxNode.current.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.scrollContainerRef.current.boxNode.current.removeEventListener('scroll', this.handleScroll);
  }

  checkForScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainerRef.current.boxNode.current;

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth,
    });
  };

  handleResize = () => {
    this.checkForScrollPosition();
  };

  handleScroll = () => {
    this.checkForScrollPosition();
  };

  scrollContainerBy = (distance) => {
    this.scrollContainerRef.current.boxNode.current.scrollBy({ left: distance, behavior: 'smooth' });
  };

  render() {
    const { children, className, inverted, size, ...others } = this.props;
    const { canScrollLeft, canScrollRight } = this.state;

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
        {canScrollLeft && (
          <Box className={theme['scroll-left-button-wrapper']}>
            <IconButton
              className={theme['scroll-button']}
              icon={<IconChevronLeftSmallOutline />}
              onClick={() => {
                this.scrollContainerBy(-1 * SCROLL_DISTANCE);
              }}
            />
          </Box>
        )}
        {canScrollRight && (
          <Box className={theme['scroll-right-button-wrapper']}>
            <IconButton
              className={theme['scroll-button']}
              icon={<IconChevronRightSmallOutline />}
              onClick={() => {
                this.scrollContainerBy(SCROLL_DISTANCE);
              }}
            />
          </Box>
        )}
        <ReactResizeDetector handleWidth onResize={this.handleResize} />
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
