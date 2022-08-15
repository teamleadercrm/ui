import React, { ReactNode } from 'react';

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

const ValidationText: GenericComponent<ValidationTextProps> = ({
  error,
  inverse,
  help,
  success,
  warning,
  ...others
}) => {
  if (error && typeof error !== 'boolean') {
    return (
      <ErrorText inverse={inverse} {...others}>
        {error}
      </ErrorText>
    );
  }

  if (warning && typeof warning !== 'boolean') {
    return (
      <WarningText inverse={inverse} {...others}>
        {warning}
      </WarningText>
    );
  }

  if (success && typeof success !== 'boolean') {
    return (
      <SuccessText inverse={inverse} {...others}>
        {success}
      </SuccessText>
    );
  }

  if (help) {
    return (
      <HelpText inverse={inverse} {...others}>
        {help}
      </HelpText>
    );
  }

  return null;
};

export default ValidationText;
