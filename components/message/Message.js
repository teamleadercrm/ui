import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Island from '../island';
import { IconButton } from '../button';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';

class Message extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    closeable: PropTypes.bool,
    color: PropTypes.oneOf([ 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white' ]),
    dark: PropTypes.bool,
    onCloseClick: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    closeable: false,
    color: 'neutral',
    dark: false,
  };

  render () {
    const {
      children,
      className,
      closeable,
      color,
      dark,
      onCloseClick,
      ...others
    } = this.props;

    const classes = cx(
      theme.message,
      theme[ color ],
      className
    );

    return (
      <div data-teamleader-ui="message" className={classes} {...others}>
        <Island color={color} dark={dark}>
          { closeable &&
            <IconButton className={theme.close} icon={<IconCloseMediumOutline />} onMouseUp={onCloseClick} />
          }
          {children}
        </Island>
      </div>
    );
  }
}

export default Message;
