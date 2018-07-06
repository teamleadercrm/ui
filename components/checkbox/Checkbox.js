import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import omit from 'lodash.omit';
import Box from '../box';
import { TextBody, TextDisplay, TextSmall } from '../typography';
import { IconCheckmarkSmallOutline, IconCheckmarkMediumOutline, IconMinusSmallOutline } from '@teamleader/ui-icons';

class Checkbox extends PureComponent {
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
    if (this.inputNode) {
      this.inputNode.blur();
    }
  }

  focus() {
    if (this.inputNode) {
      this.inputNode.focus();
    }
  }

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

  render() {
    const { checked, disabled, className, size, label, children, partiallySelected, ...others } = this.props;
    const rest = omit(others, ['onChange']);
    const { boxProps, inputProps } = this.splitProps(rest);
    const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBody : TextDisplay;
    const IconCheckmark = size === 'large' ? IconCheckmarkMediumOutline : IconCheckmarkSmallOutline;

    const classNames = cx(
      theme['checkbox'],
      theme[`is-${size}`],
      {
        [theme['is-checked']]: checked || partiallySelected,
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
          ref={node => {
            this.inputNode = node;
          }}
          readOnly
          {...inputProps}
        />
        <span className={theme['shape']}>
          {partiallySelected ? (
            <IconMinusSmallOutline className={theme['icon']} />
          ) : (
            <IconCheckmark className={theme['icon']} />
          )}
        </span>
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
  /** Indicate whether or not some subsequent child checkboxes, such as in a datagrid, are checked */
  partiallySelected: PropTypes.bool,
  /** Size of the checkbox. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  partiallySelected: false,
  size: 'medium',
};

export default Checkbox;
