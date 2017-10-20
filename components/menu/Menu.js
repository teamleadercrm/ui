import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { events } from '../utils';
import { getViewport } from '../utils/utils';
import InjectMenuItem from './MenuItem.js';
import theme from './theme.css';

const POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
};

const factory = MenuItem => {
  class Menu extends PureComponent {
    static propTypes = {
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

    static defaultProps = {
      active: false,
      outline: true,
      position: POSITION.STATIC,
      selectable: true,
    };

    state = {
      active: this.props.active,
    };

    componentDidMount() {
      this.positionTimeoutHandle = setTimeout(() => {
        const { width, height } = this.menuNode.getBoundingClientRect();
        const position = this.props.position === POSITION.AUTO ? this.calculatePosition() : this.props.position;
        this.setState({ position, width, height });
      });
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.position !== nextProps.position) {
        const position = nextProps.position === POSITION.AUTO ? this.calculatePosition() : nextProps.position;
        this.setState({ position });
      }

      /**
       * If the menu is going to be activated via props and its not active, verify
       * the position is appropriated and then show it recalculating position if its
       * wrong. It should be shown in two consecutive setState.
       */
      if (!this.props.active && nextProps.active && !this.state.active) {
        if (nextProps.position === POSITION.AUTO) {
          const position = this.calculatePosition();
          if (this.state.position !== position) {
            this.setState({ position, active: false }, () => {
              this.activateTimeoutHandle = setTimeout(() => {
                this.show();
              }, 20);
            });
          } else {
            this.show();
          }
        } else {
          this.show();
        }
      }

      /**
       * If the menu is being deactivated via props and the current state is
       * active, it should be hid.
       */
      if (this.props.active && !nextProps.active && this.state.active) {
        this.hide();
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if (!this.state.active && nextState.active) {
        events.addEventsToDocument({
          click: this.handleDocumentClick,
          touchstart: this.handleDocumentClick,
        });
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.active && !this.state.active) {
        if (this.props.onHide) {
          this.props.onHide();
        }
        events.removeEventsFromDocument({
          click: this.handleDocumentClick,
          touchstart: this.handleDocumentClick,
        });
      } else if (!prevState.active && this.state.active && this.props.onShow) {
        this.props.onShow();
      }
    }

    componentWillUnmount() {
      if (this.state.active) {
        events.removeEventsFromDocument({
          click: this.handleDocumentClick,
          touchstart: this.handleDocumentClick,
        });
      }
      clearTimeout(this.positionTimeoutHandle);
      clearTimeout(this.activateTimeoutHandle);
    }

    handleDocumentClick = event => {
      if (this.state.active && !events.targetIsDescendant(event, ReactDOM.findDOMNode(this))) {
        this.setState({ active: false });
      }
    };

    handleSelect = (item, event) => {
      const { value, onClick } = item.props;
      if (onClick) {
        event.persist();
      }
      this.setState({ active: false }, () => {
        if (onClick) {
          onClick(event);
        }
        if (this.props.onSelect) {
          this.props.onSelect(value);
        }
      });
    };

    calculatePosition() {
      const parentNode = ReactDOM.findDOMNode(this).parentNode;
      if (!parentNode) {
        return;
      }
      const { top, left, height, width } = parentNode.getBoundingClientRect();
      const { height: wh, width: ww } = getViewport();
      const toTop = top < wh / 2 - height / 2;
      const toLeft = left < ww / 2 - width / 2;
      return `${toTop ? 'top' : 'bottom'}${toLeft ? 'Left' : 'Right'}`;
    }

    getMenuStyle() {
      const { width, height, position } = this.state;
      if (position !== POSITION.STATIC) {
        if (this.state.active) {
          return { clip: `rect(0 ${width}px ${height}px 0)` };
        } else if (position === POSITION.TOP_RIGHT) {
          return { clip: `rect(0 ${width}px 0 ${width}px)` };
        } else if (position === POSITION.BOTTOM_RIGHT) {
          return { clip: `rect(${height}px ${width}px ${height}px ${width}px)` };
        } else if (position === POSITION.BOTTOM_LEFT) {
          return { clip: `rect(${height}px 0 ${height}px 0)` };
        } else if (position === POSITION.TOP_LEFT) {
          return { clip: 'rect(0 0 0 0)' };
        }
      }
    }

    getRootStyle() {
      if (this.state.position !== POSITION.STATIC) {
        return { width: this.state.width, height: this.state.height };
      }
    }

    renderItems() {
      // Because React Hot Loader creates proxied versions of your components,
      // comparing reference types of elements won't work
      // https://github.com/gaearon/react-hot-loader/blob/master/docs/Known%20Limitations.md#checking-element-types
      const MenuItemType = <MenuItem />.type;

      return React.Children.map(this.props.children, item => {
        if (!item) {
          return item;
        }

        if (item.type === MenuItemType) {
          return React.cloneElement(item, {
            selected:
              typeof item.props.value !== 'undefined' &&
              this.props.selectable &&
              item.props.value === this.props.selected,
            onClick: this.handleSelect.bind(this, item),
          });
        } else {
          return React.cloneElement(item);
        }
      });
    }

    show() {
      const { width, height } = this.menuNode.getBoundingClientRect();
      this.setState({ active: true, width, height });
    }

    hide() {
      this.setState({ active: false });
    }

    render() {
      const outlineStyle = { width: this.state.width, height: this.state.height };
      const className = cx(
        theme['menu'],
        theme[this.state.position],
        {
          [theme['active']]: this.state.active,
        },
        this.props.className,
      );

      return (
        <div data-teamleader-ui="menu" className={className} style={this.getRootStyle()}>
          {this.props.outline ? <div className={theme['outline']} style={outlineStyle} /> : null}
          <ul
            ref={node => {
              this.menuNode = node;
            }}
            className={theme['menu-inner']}
            style={this.getMenuStyle()}
          >
            {this.renderItems()}
          </ul>
        </div>
      );
    }
  }

  return Menu;
};

const Menu = factory(InjectMenuItem);
export default Menu;
export { factory as menuFactory, Menu };
