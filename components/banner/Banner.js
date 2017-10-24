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
    onClose: PropTypes.function,
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    color: 'white',
  };

  constructor() {
    super(...arguments);
    this.handleOnClick = ::this.handleOnClick;
  }

  handleOnClick() {
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

    const classNames = cx(theme['banner'], theme[color], className);
    const Element = fullWidth ? Section : Island;

    return (
      <Element data-teamleader-ui="banner" color={color} className={classNames} {...others}>
        {icon && <span className={theme['icon']}>{icon}</span>}
        <span className={theme['content']}>{children}</span>
        {onClose && (
          <IconButton
            icon={<IconCloseMediumOutline />}
            color={this.getCloseButtonColor()}
            onClick={this.handleOnClick}
          />
        )}
      </Element>
    );
  }
}

export default Banner;
