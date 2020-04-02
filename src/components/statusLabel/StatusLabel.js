import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import { UITextBody, UITextSmall } from '../typography';

class StatusLabel extends PureComponent {
  render() {
    const { children, className, color, size, ...others } = this.props;

    const classNames = cx(theme['label'], theme[size], className);

    const Element = size === 'small' ? UITextSmall : UITextBody;

    return (
      <Element
        element="span"
        {...others}
        alignItems="center"
        backgroundColor={color}
        backgroundTint={color === 'neutral' ? 'light' : 'lightest'}
        borderColor={color}
        borderTint={color === 'neutral' ? 'dark' : 'light'}
        borderWidth={1}
        className={classNames}
        color={color === 'neutral' ? 'teal' : color}
        tint={color === 'neutral' ? 'dark' : 'darkest'}
        data-teamleader-ui="status-label"
        display="inline-flex"
        paddingHorizontal={2}
      >
        {children}
      </Element>
    );
  }
}

StatusLabel.propTypes = {
  /** The content to display inside the status label */
  children: PropTypes.any.isRequired,
  /** A classname to add to the status label to give custom styles */
  className: PropTypes.string,
  /** The name of the color them you want to give to the status label */
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
  /** Size of the button */
  size: PropTypes.oneOf(['small', 'medium']),
};

StatusLabel.defaultProps = {
  color: 'neutral',
  size: 'medium',
};

export default StatusLabel;
