import React, { forwardRef, ReactElement, ReactNode, useState } from 'react';
import cx from 'classnames';

import theme from './theme.css';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import InputBase from './InputBase';
import ValidationText from '../validationText';

interface SingleLineInputBaseProps {
  /** Whether to enable or disable the autocompletion on the input. */
  autoComplete?: 'off' | 'on';
  /** Sets a class name for the wrapper to give custom styles. */
  className?: string;
  /** Element stuck to the left hand side of the component. */
  connectedLeft?: ReactElement;
  /** Element stuck to the right hand side of the component. */
  connectedRight?: ReactElement;
  /** Boolean indicating whether the input should render as disabled. */
  disabled?: boolean;
  /** The text string/element to use as error message below the input. */
  error?: boolean | ReactNode;
  /** The text string to use as help text below the input. */
  helpText?: string;
  /** Boolean indicating whether the input should render as inverse. */
  inverse?: boolean;
  /** The text string/element to use as a prefix inside the input field */
  prefix?: ReactElement[] | ReactElement;
  /** Boolean indicating whether the input should render as read only. */
  readOnly?: boolean;
  /** The text string/element to use as success message below the input. */
  success?: boolean | ReactNode;
  /** The text string/element to use as a suffix inside the input field */
  suffix?: ReactElement[] | ReactElement;
  /** The text to use as warning message below the input. */
  warning?: boolean | ReactNode;
  /** A custom width for the input field */
  width?: string;
  /** Whether to disable styling that hints being able to type in the input field */
  noInputStyling?: boolean;
}

const SingleLineInputBase = forwardRef(
  (
    {
      className,
      disabled,
      connectedLeft,
      connectedRight,
      error,
      helpText,
      inverse,
      prefix,
      readOnly,
      success,
      suffix,
      warning,
      width,
      noInputStyling,
      ...others
    }: SingleLineInputBaseProps,
    ref,
  ) => {
    const [inputHasFocus, setInputHasFocus] = useState(false);

    const handleBlur = () => {};

    const handleFocus = () => {};

    const classNames = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: inputHasFocus,
        [theme['has-error']]: error,
        [theme['has-success']]: success,
        [theme['has-warning']]: warning,
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-disabled']]: disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const boxProps = pickBoxProps(others);
    const inputProps = {
      ref,
      disabled,
      inverse,
      onBlur: handleBlur,
      onFocus: handleFocus,
      readOnly,
      ...omitBoxProps(others),
    };

    return (
      <Box className={classNames} {...boxProps}>
        <div className={cx(theme['input-wrapper'], noInputStyling && theme['is-input-disabled'])}>
          {connectedLeft}
          <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 1 auto' }}>
            {prefix && <div className={theme['prefix-wrapper']}>{prefix}</div>}
            <InputBase {...inputProps} />
            {suffix && <div className={theme['suffix-wrapper']}>{suffix}</div>}
          </div>
          {connectedRight}
        </div>
        <ValidationText error={error} help={helpText} inverse={inverse} success={success} warning={warning} />
      </Box>
    );
  },
);

SingleLineInputBase.displayName = 'SingleLineInputBase';

export default SingleLineInputBase;
