import React from 'react';
import { DialogBase } from '../dialog';
import { Heading3, TextBody } from '../typography';
import { Box } from '../box';
import { Button, BUTTON_LEVELS } from '../button';
import omit from 'lodash.omit';
import { Illustration60X60Error, Illustration60X60Info } from '@teamleader/ui-illustrations';

interface AlertProps {
  active?: boolean;
  primaryAction: Action;
  secondaryAction?: Action;
  title: string;
  body?: string;
  type?: ALERT_TYPES;
  [key: string]: unknown;
}

interface Action {
  label: string;
  onClick: () => void;
}

export enum ALERT_TYPES {
  confirm = 'confirm',
  destructive = 'destructive',
  error = 'error',
}

const Alert = ({
  primaryAction,
  secondaryAction,
  title,
  body,
  type = ALERT_TYPES.confirm,
  ...otherProps
}: AlertProps) => {
  const restProps = omit(otherProps, ['primaryAction', 'secondaryAction']);

  return (
    <DialogBase {...restProps} scrollable={false} size="small">
      <Box alignItems="center" display="flex" flexDirection="column" padding={4} textAlign="center">
        <Box marginBottom={3} marginTop={2}>
          {type === ALERT_TYPES.confirm ? <Illustration60X60Info /> : <Illustration60X60Error />}
        </Box>
        <Heading3 color="teal">{title}</Heading3>
        {body && (
          <TextBody color="teal" marginTop={2}>
            {body}
          </TextBody>
        )}
        <Button
          level={type === ALERT_TYPES.destructive ? BUTTON_LEVELS.destructive : BUTTON_LEVELS.primary}
          {...primaryAction}
          fullWidth
          marginTop={5}
        />
        {secondaryAction && <Button {...secondaryAction} fullWidth marginTop={2} />}
      </Box>
    </DialogBase>
  );
};

export default Alert;
