import React, { forwardRef, ReactNode } from 'react';
import Box, { BoxProps } from '../box/Box';
import cx from 'classnames';

import theme from './theme.css';
import { omitBoxProps, pickBoxProps } from '../box';
import InputBase from './InputBase';
import ValidationText from '../validationText';

interface TextareaProps extends Omit<BoxProps, 'size' | 'ref'> {
  /** Sets a class name for the wrapper to give custom styles. */
  className?: string;
  /** The text to use as error message below the input. */
  error?: boolean | ReactNode;
  /** The text to use as help text below the input. */
  helpText?: string;
  /** Boolean indicating whether the input should render as inverse. */
  inverse?: boolean;
  /** The text string/element to use as success message below the input. */
  success?: boolean | ReactNode;
  /** The text to use as warning message below the input. */
  warning?: boolean | ReactNode;
}

const Textarea = forwardRef(
  ({ className, error, helpText, inverse = false, success, warning, ...others }: TextareaProps, forwardedRef) => {
    const classNames = cx(
      theme['wrapper'],
      {
        [theme['has-error']]: error,
        [theme['has-success']]: success,
        [theme['has-warning']]: warning,
      },
      className,
    );

    const boxProps = pickBoxProps(others);
    const inputProps = {
      inverse,
      ...omitBoxProps(others),
    };

    return (
      <Box className={classNames} {...boxProps}>
        <InputBase ref={forwardedRef} className={theme['textarea']} element="textarea" {...inputProps} />
        <ValidationText error={error} help={helpText} inverse={inverse} success={success} warning={warning} />
      </Box>
    );
  },
);

export default Textarea;
