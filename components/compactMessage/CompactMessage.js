import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class CompactMessage extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    image: PropTypes.element,
    button: PropTypes.element,
  };

  render() {
    const { className, children, image, button, ...others } = this.props;

    const classNames = cx(theme['compact-message'], className);

    return (
      <Box data-teamleader-ui="compact-message" className={classNames} {...others}>
        {image && <div className={theme['image']}>{image}</div>}
        <div className={theme['content']}>{children}</div>
        {button && <div className={theme['button']}>{button}</div>}
      </Box>
    );
  }
}

export default CompactMessage;
