import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import omit from 'lodash.omit';
import Box from '../box';
import { TextBody, TextDisplay, TextSmall } from '../typography';

class RadioButton extends PureComponent {
  handleToggle = event => {
    const { disabled, checked, onChange } = this.props;

    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }

    if (!disabled && onChange) {
      onChange(!checked, event);
    }
  };

  splitProps(props) {
    const availableBoxProps = [
      'margin',
      'marginVertical',
      'marginHorizontal',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'padding',
      'paddingHorizontal',
      'paddingVertical',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
    ];

    const boxProps = {};
    const inputProps = {};

    Object.keys(props).forEach(key => {
      const value = props[key];

      if (availableBoxProps.includes(key)) {
        boxProps[key] = value;
      } else {
        inputProps[key] = value;
      }
    });

    return { boxProps, inputProps };
  }

  blur() {
    if (this.inputNode) {
      this.inputNode.blur();
    }
  }

  focus() {
    if (this.inputNode) {
      this.inputNode.focus();
    }
  }

  render() {
    const { checked, disabled, className, size, label, children, onMouseEnter, onMouseLeave, ...others } = this.props;
    const rest = omit(others, ['onChange']);
    const { boxProps, inputProps } = this.splitProps(rest);
    const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBody : TextDisplay;

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
          ref={node => {
            this.inputNode = node;
          }}
          {...inputProps}
        />
        <span className={theme['shape']} />
        {(label || children) && (
          <span className={theme['label']}>
            {label && (
              <TextElement element="span" color="teal" soft={disabled}>
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
