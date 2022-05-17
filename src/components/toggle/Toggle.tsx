import cx from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React, { createRef, PureComponent } from 'react';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
class Toggle extends PureComponent {
  inputNode = createRef();

  handleToggle = (event) => {
    const { disabled, onChange } = this.props;

    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }

    if (!disabled && onChange) {
      onChange(event);
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
    const { checked, disabled, className, maxLines, size, label, children, ...others } = this.props;

    const restProps = omit(others, ['onChange']);
    const boxProps = pickBoxProps(restProps);
    const inputProps = omitBoxProps(restProps);

    const classNames = cx(
      theme['toggle'],
      theme[`is-${size}`],
      {
        [theme['is-checked']]: checked,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBodyCompact : TextDisplay;

    return (
      <Box element="label" data-teamleader-ui="toggle" className={classNames} {...boxProps}>
        <input
          className={theme['input']}
          type="checkbox"
          hidden
          checked={checked}
          disabled={disabled}
          onChange={this.handleToggle}
          ref={this.inputNode}
          {...inputProps}
        />
        <span className={theme['track']}>
          <span className={theme['thumb']} />
        </span>
        {(label || children) && (
          <span className={theme['label']}>
            {label && (
              <TextElement element="span" color={disabled ? 'neutral' : 'teal'} maxLines={maxLines}>
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

Toggle.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  /** The maximum number of lines the label can take */
  maxLines: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  size: 'medium',
};

export default Toggle;
