import cx from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React, { createRef, PureComponent } from 'react';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
class RadioButton extends PureComponent {
  inputNode = createRef();

  handleToggle = (event) => {
    const { disabled, checked, onChange } = this.props;

    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }

    if (!disabled && onChange) {
      onChange(!checked, event);
    }
  };

  blur() {
    if (this.inputNode.current) {
      this.inputNode.current.blur();
    }
  }

  focus() {
    if (this.inputNode.current) {
      this.inputNode.current.focus();
    }
  }

  render() {
    const { checked, disabled, className, size, label, children, onMouseEnter, onMouseLeave, ...others } = this.props;
    const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBodyCompact : TextDisplay;

    const restProps = omit(others, ['onChange']);
    const boxProps = pickBoxProps(restProps);
    const inputProps = omitBoxProps(restProps);

    const classNames = cx(
      theme['radiobutton'],
      theme[`is-${size}`],
      {
        [theme['is-checked']]: checked,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    return (
      <Box
        element="label"
        data-teamleader-ui="radiobutton"
        className={classNames}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...boxProps}
      >
        <input
          className={theme['input']}
          type="radio"
          checked={checked}
          disabled={disabled}
          onClick={this.handleToggle}
          readOnly
          ref={this.inputNode}
          {...inputProps}
        />
        <span className={theme['shape']} />
        {(label || children) && (
          <span className={theme['label']}>
            {label && (
              <TextElement element="span" color={disabled ? 'neutral' : 'teal'}>
                {label}
              </TextElement>
            )}
            {children}
          </span>
        )}
      </Box>
    );
  }
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  size: 'medium',
};

export default RadioButton;
