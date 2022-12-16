import React, { forwardRef, ReactNode } from 'react';
import Box, { BoxProps } from '../box/Box';
import cx from 'classnames';
import theme from './theme.css';
import { omitBoxProps, pickBoxProps } from '../box';
import InputBase, { InputBaseProps } from './InputBase';
import ValidationText from '../validationText';
import { GenericComponent } from '../../@types/types';

export interface TextareaProps extends Omit<InputBaseProps, 'ref' | 'type'>, Omit<BoxProps, 'size' | 'ref'> {
  /** The text to use as error message below the input. */
  error?: boolean | ReactNode;
  /** The text to use as help text below the input. */
  helpText?: string;
  /** The text string/element to use as success message below the input. */
  success?: boolean | ReactNode;
  /** The text to use as warning message below the input. */
  warning?: boolean | ReactNode;
}

const Textarea: GenericComponent<TextareaProps> = forwardRef<HTMLElement, TextareaProps>(
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
      <Box data-teamleader-ui="textarea" className={classNames} {...boxProps}>
        <InputBase ref={forwardedRef} className={theme['textarea']} element="textarea" {...inputProps} />
        <ValidationText error={error} help={helpText} inverse={inverse} success={success} warning={warning} />
      </Box>
    );
  },
);

Textarea.displayName = 'TextArea';

export default Textarea;
