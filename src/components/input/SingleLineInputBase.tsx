import React, { FocusEvent, forwardRef, ReactElement, ReactNode, useState } from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import InputBase, { InputBaseProps } from './InputBase';
import ValidationText from '../validationText';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface SingleLineInputBaseProps extends Omit<InputBaseProps, 'ref'>, Omit<BoxProps, 'size' | 'ref'> {
  /** Element stuck to the left hand side of the component. */
  connectedLeft?: ReactElement;
  /** Element stuck to the right hand side of the component. */
  connectedRight?: ReactElement;
  /** The text string/element to use as error message below the input. */
  error?: boolean | ReactNode;
  /** The text string to use as help text below the input. */
  helpText?: string;
  /** Whether to disable styling that hints being able to type in the input field */
  noInputStyling?: boolean;
  /** The text string/element to use as a prefix inside the input field */
  prefix?: ReactElement[] | ReactElement;
  /** The text string/element to use as success message below the input. */
  success?: boolean | ReactNode;
  /** The text string/element to use as a suffix inside the input field */
  suffix?: ReactElement[] | ReactElement;
  /** The text to use as warning message below the input. */
  warning?: boolean | ReactNode;
  /** A custom width for the input field */
  width?: string;
}

const SingleLineInputBase: GenericComponent<SingleLineInputBaseProps> = forwardRef<
  HTMLElement,
  SingleLineInputBaseProps
>(
  (
    {
      className,
      disabled,
      connectedLeft,
      connectedRight,
      error,
      helpText,
      inverse,
      onBlur,
      onFocus,
      prefix,
      readOnly,
      success,
      suffix,
      value,
      warning,
      width,
      noInputStyling,
      ...others
    }: SingleLineInputBaseProps,
    forwardedRef,
  ) => {
    const [inputHasFocus, setInputHasFocus] = useState(false);

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      setInputHasFocus(false);

      onBlur && onBlur(event);
    };

    const handleFocus = (event: FocusEvent<HTMLElement>) => {
      setInputHasFocus(true);

      onFocus && onFocus(event);
    };

    const renderOneOrMultipleElements = (prop: ReactElement[] | ReactElement) => {
      if (Array.isArray(prop)) {
        return prop.map((element, index) => React.cloneElement(element, { key: index }));
      }

      return prop;
    };

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
      ref: forwardedRef,
      disabled,
      inverse,
      onBlur: handleBlur,
      onFocus: handleFocus,
      readOnly,
      value,
      ...omitBoxProps(others),
    };

    return (
      <Box className={classNames} {...boxProps}>
        <div className={cx(theme['input-wrapper'], noInputStyling && theme['is-input-disabled'])}>
          {connectedLeft}
          <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 1 auto' }}>
            {prefix && <div className={theme['prefix-wrapper']}>{renderOneOrMultipleElements(prefix)}</div>}
            <InputBase {...inputProps} />
            {suffix && <div className={theme['suffix-wrapper']}>{renderOneOrMultipleElements(suffix)}</div>}
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
