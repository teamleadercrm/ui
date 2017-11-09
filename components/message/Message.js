import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Message extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    image: PropTypes.element,
    imagePositioning: PropTypes.oneOf(['center', 'left', 'right']),
    button: PropTypes.element,
    link: PropTypes.element,
  };

  static defaultProps = {
    imagePositioning: 'left',
  };

  render() {
    const { className, children, image, imagePositioning, button, link, ...others } = this.props;

    const classNames = cx(theme['message'], theme[`is-image-${imagePositioning}`], className);
    const hasAction = Boolean(button || link);

    return (
      <Box data-teamleader-ui="message" className={classNames} {...others}>
        {image && <div className={theme['image']}>{image}</div>}
        <div className={theme['content']}>
          {children}
          {hasAction && (
            <div className={theme['actions']}>
              {button && <span className={theme['button']}>{button}</span>}
              {link}
            </div>
          )}
        </div>
      </Box>
    );
  }
}

export default Message;
