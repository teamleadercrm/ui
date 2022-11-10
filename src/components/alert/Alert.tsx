import React, { ReactNode } from 'react';
import { DialogBase } from '../dialog';
import { Heading3, TextBody } from '../typography';
import { Box } from '../box';
import { Button, BUTTON_LEVELS } from '../button';
import { Illustration60X60Error, Illustration60X60Info } from '@teamleader/ui-illustrations';
import { DialogBaseProps } from '../dialog/DialogBase';
import { ButtonProps } from '../button/Button';
import { GenericComponent } from '../../@types/types';

type Action = Omit<ButtonProps, 'fullWidth' | 'marginTop'>;

type Type = 'confirm' | 'destructive' | 'error';

export interface AlertProps extends Omit<DialogBaseProps, 'scrollable' | 'size'> {
  /** Object containing the props of the primary action (a Button, with level prop set to 'primary'). */
  primaryAction: Action;
  /** Object containing the the props of the secondary action (a Button). */
  secondaryAction?: Action;
  /** The title of the alert. */
  title: ReactNode;
  /** The body of the alert. */
  body?: string;
  /** The type of the alert. */
  type?: Type;
}

const Alert: GenericComponent<AlertProps> = ({
  primaryAction,
  secondaryAction,
  title,
  body,
  type = 'confirm',
  ...otherProps
}) => {
  return (
    <DialogBase {...otherProps} scrollable={false} size="small">
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
