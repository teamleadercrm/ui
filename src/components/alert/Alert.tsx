import React from 'react';
import { DialogBase } from '../dialog';
import { Heading3, TextBody } from '../typography';
import { Box } from '../box';
import { Button, BUTTON_LEVELS } from '../button';
import omit from 'lodash.omit';
import { Illustration60X60Error, Illustration60X60Info } from '@teamleader/ui-illustrations';

interface AlertProps {
  /** If true, the alert will show on screen. */
  active?: boolean;
  /** Object containing the props of the primary action (a Button, with level prop set to 'primary'). */
  primaryAction: Action;
  /** Object containing the the props of the secondary action (a Button). */
  secondaryAction?: Action;
  /** The title of the alert. */
  title: string;
  /** The body of the alert. */
  body?: string;
  /** The type of the alert. */
  type?: ALERT_TYPES;
  [key: string]: unknown;
}

interface Action {
  label: string;
  onClick: () => void;
}

type ALERT_TYPES = 'confirm' | 'destructive' | 'error';

const Alert = ({ primaryAction, secondaryAction, title, body, type = 'confirm', ...otherProps }: AlertProps) => {
  const restProps = omit(otherProps, ['primaryAction', 'secondaryAction']);

  return (
    <DialogBase {...restProps} scrollable={false} size="small">
      <Box alignItems="center" display="flex" flexDirection="column" padding={4} textAlign="center">
        <Box marginBottom={3} marginTop={2}>
          {type === 'confirm' ? <Illustration60X60Info /> : <Illustration60X60Error />}
        </Box>
        <Heading3 color="teal">{title}</Heading3>
        {body && (
          <TextBody color="teal" marginTop={2}>
            {body}
          </TextBody>
        )}
        <Button
          level={type === 'destructive' ? BUTTON_LEVELS.destructive : BUTTON_LEVELS.primary}
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
