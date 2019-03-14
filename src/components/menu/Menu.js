import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { events } from '../utils';
import { getViewport } from '../utils/utils';
import Box from '../box';
import MenuItem from './MenuItem.js';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

const POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
};

class Menu extends PureComponent {
  state = {};
  menuNode = createRef();
  componentDidMount() {
    const { width, height } = this.menuNode.current.getBoundingClientRect();
    this.setState({ width, height });

    const { position } = this.props;
    if (position === POSITION.AUTO) {
      this.setState({ position: this.calculatePosition() });
    }
  }

  static getDerivedStateFromProps(props, state) {
    const newStateSlice = {};

    if (props.active !== state.active) {
      newStateSlice.active = props.active;
    }

    if (props.position !== state.position) {
      newStateSlice.position = props.position;
    }

    if (newStateSlice.active || newStateSlice.position) {
      return newStateSlice;
    }

    return null;
  }

  componentDidUpdate(prevState) {
    if (prevState.active && !this.state.active) {
      this.hide();
    }

    if (!prevState.active && this.state.active) {
      this.show();
    }

    if (prevState.position !== this.state.position && this.state.position === POSITION.AUTO) {
      this.setState({ position: this.calculatePosition() });
    }

    const { width, height } = this.menuNode.current.getBoundingClientRect();
    if (prevState.width !== width || prevState.height !== height) {
      this.setState({ width, height }); // eslint-disable-line
    }
  }

  show() {
    const { onShow } = this.props;

    if (onShow) {
      onShow();
    }

    this.setState({ active: true });

    this.addEvents();
  }

  hide() {
    const { onHide } = this.props;

    if (onHide) {
      onHide();
    }

    this.setState({ active: false });

    this.removeEvents();
  }

  componentWillUnmount() {
    if (this.state.active) {
      this.removeEvents();
    }
  }

  addEvents() {
    events.addEventsToDocument({
      click: this.handleDocumentClick,
      touchstart: this.handleDocumentClick,
    });
  }

  removeEvents() {
    events.removeEventsFromDocument({
      click: this.handleDocumentClick,
      touchstart: this.handleDocumentClick,
    });
  }

  handleDocumentClick = event => {
    if (this.state.active && !events.targetIsDescendant(event, ReactDOM.findDOMNode(this))) {
      this.hide();
    }
  };

  handleSelect = (item, event) => {
    const { onSelect } = this.props;
    const { value, onClick } = item.props;

    if (onSelect) {
      onSelect(value);
    }

    if (onClick) {
      event.persist();
      onClick(event);
    }

    this.hide();
  };

  calculatePosition() {
    const parentNode = ReactDOM.findDOMNode(this).parentNode;

    if (!parentNode) {
      return;
    }

    const { top, left, height, width } = parentNode.getBoundingClientRect();
    const { height: vh, width: vw } = getViewport();

    const toTop = top < vh / 2 - height / 2;
    const toLeft = left < vw / 2 - width / 2;

    return `${toTop ? 'top' : 'bottom'}${toLeft ? 'Left' : 'Right'}`;
  }

  getRootStyle() {
    const { width, height, position } = this.state;

    if (position !== POSITION.STATIC) {
      return { width, height };
    }
  }

  getMenuStyle() {
    const { active } = this.state;

    if (active) {
      return this.getActiveMenuStyle();
    }

    return this.getMenuStyleByPosition();
  }

  getActiveMenuStyle() {
    const { width, height } = this.state;
    return { clip: `rect(0 ${width}px ${height}px 0)` };
  }

  getMenuStyleByPosition() {
    const { width, height, position } = this.state;

    switch (position) {
      case POSITION.TOP_RIGHT:
        return { clip: `rect(0 ${width}px 0 ${width}px)` };
      case POSITION.BOTTOM_RIGHT:
        return { clip: `rect(${height}px ${width}px ${height}px ${width}px)` };
      case POSITION.BOTTOM_LEFT:
        return { clip: `rect(${height}px 0 ${height}px 0)` };
      case POSITION.TOP_LEFT:
        return { clip: 'rect(0 0 0 0)' };
      default:
        return {};
    }
  }

  getItems() {
    const { children, selectable, selected } = this.props;

    // Because React Hot Loader creates proxied versions of your components,
    // comparing reference types of elements won't work
    // https://github.com/gaearon/react-hot-loader/blob/master/docs/Known%20Limitations.md#checking-element-types
    const MenuItemType = <MenuItem />.type;

    return React.Children.map(children, item => {
      if (!item) {
        return item;
      }

      if (item.type === MenuItemType) {
        return React.cloneElement(item, {
          selected: typeof item.props.value !== 'undefined' && selectable && item.props.value === selected,
          onClick: this.handleSelect.bind(this, item),
        });
      } else {
        return React.cloneElement(item);
      }
    });
  }

  render() {
    const { width, height, active, position } = this.state;
    const { className, outline, ...others } = this.props;

    const classNames = cx(
      theme['menu'],
      theme[position],
      {
        [theme['active']]: active,
      },
      className,
    );

    const outlineClassNames = cx(theme['outline'], {
      [uiUtilities['box-shadow-200']]: position !== POSITION.STATIC,
    });

    return (
      <Box data-teamleader-ui="menu" className={classNames} style={this.getRootStyle()} {...others}>
        {outline ? <div className={outlineClassNames} style={{ width, height }} /> : null}
        <ul ref={this.menuNode} className={theme['menu-inner']} style={this.getMenuStyle()}>
          {this.getItems()}
        </ul>
      </Box>
    );
  }
}

Menu.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onSelect: PropTypes.func,
  onShow: PropTypes.func,
  outline: PropTypes.bool,
  position: PropTypes.oneOf(Object.keys(POSITION).map(key => POSITION[key])),
  selectable: PropTypes.bool,
  selected: PropTypes.any,
};

Menu.defaultProps = {
  active: false,
  outline: true,
  position: POSITION.STATIC,
  selectable: true,
};

export default Menu;
