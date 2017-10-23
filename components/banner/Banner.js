import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';
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

  render() {
    const { children, className, color, icon, onClose, ...others } = this.props;

    const classNames = cx(theme['banner'], theme[color], className);

    return (
      <Island data-teamleader-ui="banner" color={color} className={classNames} {...others}>
        {icon && <span className={theme['icon']}>{icon}</span>}
        <span className={theme['content']}>{children}</span>
        {onClose && <IconButton icon={<IconCloseMediumOutline />} onClick={this.handleOnClick} />}
      </Island>
    );
  }
}

export default Banner;
