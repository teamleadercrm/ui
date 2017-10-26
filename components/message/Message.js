import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { Heading2, TextBody } from '../typography';

class Message extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    image: PropTypes.element,
    imagePositioning: PropTypes.oneOf(['center', 'left', 'right']),
    button: PropTypes.element,
    link: PropTypes.element,
  };

  static defaultProps = {
    imagePositioning: 'left',
  };

  render() {
    const { className, title, text, image, imagePositioning, button, link, ...others } = this.props;

    const classNames = cx(theme['message'], theme[`is-image-${imagePositioning}`], className);

    return (
      <Box data-teamleader-ui="message" className={classNames} {...others}>
        {image && <div className={theme['image']}>{image}</div>}
        <div className={theme['content']}>
          {title && <Heading2>{title}</Heading2>}
          <TextBody className={theme['text']}>{text}</TextBody>
          <div className={theme['actions']}>
            <span className={theme['button']}>{button}</span>
            {link}
          </div>
        </div>
      </Box>
    );
  }
}

export default Message;
