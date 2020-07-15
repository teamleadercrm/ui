import React, { createRef, forwardRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import PropsType from 'props-type';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';

import { Heading4, Heading5 } from '../typography';

const props = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  counter: PropTypes.node,
  element: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
};

const defaultProps: Partial<PropsType<typeof props>> = {
  element: 'a',
  active: false,
  size: 'medium',
};

type Props = Partial<PropsType<typeof props, typeof defaultProps>>;
class TitleTab extends PureComponent<Props & { forwardedRef: React.RefObject<any> }> {
  static propTypes = props;
  static defaultProps = defaultProps;

  tabNode = createRef<any>();

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

export default forwardRef<any, Props>((props, ref) => (
  <TitleTab {...props} forwardedRef={ref as React.RefObject<any>} />
));
