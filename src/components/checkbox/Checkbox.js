import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import omit from 'lodash.omit';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { TextBody, TextDisplay, TextSmall } from '../typography';
import { IconCheckmarkSmallOutline, IconCheckmarkMediumOutline, IconMinusSmallOutline } from '@teamleader/ui-icons';

class Checkbox extends PureComponent {
  inputNode = createRef();

  handleToggle = event => {
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
    const { checked, disabled, className, size, label, children, indeterminate, ...others } = this.props;
    const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBody : TextDisplay;
    const IconCheckmark = size === 'large' ? IconCheckmarkMediumOutline : IconCheckmarkSmallOutline;

    const restProps = omit(others, ['onChange']);
    const boxProps = pickBoxProps(restProps);
    const inputProps = omitBoxProps(restProps);

    const classNames = cx(
      theme['checkbox'],
      theme[`is-${size}`],
      {
        [theme['is-checked']]: checked || indeterminate,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    return (
      <Box element="label" data-teamleader-ui="checkbox" className={classNames} {...boxProps}>
        <input
          className={theme['input']}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onClick={this.handleToggle}
          ref={this.inputNode}
          readOnly
          {...inputProps}
        />
        <span className={theme['shape']}>
          {checked ? <IconCheckmark className={theme['icon']} /> : <IconMinusSmallOutline className={theme['icon']} />}
        </span>
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

Checkbox.propTypes = {
  /** If true, the checkbox will be checked. */
  checked: PropTypes.bool,
  /** The content to display next to the checkbox. */
  children: PropTypes.node,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** Name for form input. */
  name: PropTypes.string,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The textual label displayed next to the checkbox. */
  label: PropTypes.string,
  /** Callback function that is fired when checkbox is toggled. */
  onChange: PropTypes.func,
  /** Indicate whether the checkbox is neither checked or unchecked. */
  indeterminate: PropTypes.bool,
  /** Size of the checkbox. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  size: 'medium',
};

export default Checkbox;
