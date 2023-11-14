import React, { ReactNode, forwardRef } from 'react';

import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import ErrorText from './ErrorText';
import HelpText from './HelpText';
import SuccessText from './SuccessText';
import WarningText from './WarningText';

export interface ValidationTextProps extends Omit<BoxProps, 'children'> {
  error?: ReactNode;
  help?: ReactNode;
  inverse?: boolean;
  success?: ReactNode;
  warning?: ReactNode;
}

const ValidationText: GenericComponent<ValidationTextProps> = forwardRef<HTMLElement, ValidationTextProps>(
  ({ error, inverse, help, success, warning, ...others }, ref) => {
    if (error && typeof error !== 'boolean') {
      return (
        <ErrorText inverse={inverse} {...others} ref={ref}>
          {error}
        </ErrorText>
      );
    }

    if (warning && typeof warning !== 'boolean') {
      return (
        <WarningText inverse={inverse} {...others} ref={ref}>
          {warning}
        </WarningText>
      );
    }

    if (success && typeof success !== 'boolean') {
      return (
        <SuccessText inverse={inverse} {...others} ref={ref}>
          {success}
        </SuccessText>
      );
    }

    if (help) {
      return (
        <HelpText inverse={inverse} {...others} ref={ref}>
          {help}
        </HelpText>
      );
    }

    return null;
  },
);

ValidationText.displayName = 'ValidationText';

export default ValidationText;
