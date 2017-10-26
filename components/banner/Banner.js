import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';
import Section from '../section';
import { IconButton } from '../button';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

class Banner extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
    icon: PropTypes.element,
    onClose: PropTypes.func,
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    color: 'white',
  };

  constructor() {
    super(...arguments);
    this.handleClick = ::this.handleClick;
  }

  handleClick() {
    this.props.onClose();
  }

  getCloseButtonColor() {
    const { color } = this.props;

    if (color === 'white') {
      return 'neutral';
    }

    return color;
  }

  render() {
    const { children, className, color, icon, onClose, fullWidth, ...others } = this.props;

    const classNames = cx(theme[color], className);
    const Element = fullWidth ? Section : Island;

    return (
      <Element data-teamleader-ui="banner" color={color} className={classNames} {...others}>
        <div className={theme['inner']}>
          {icon && <span className={theme['icon']}>{icon}</span>}
          <span className={theme['content']}>{children}</span>
          {onClose && (
            <IconButton
              className={theme['close-button']}
              icon={<IconCloseMediumOutline />}
              color={this.getCloseButtonColor()}
              onClick={this.handleClick}
            />
          )}
        </div>
      </Element>
    );
  }
}

export default Banner;
