import React from 'react';
import { DialogBase } from '../dialog';
import PropTypes from 'prop-types';
import { Heading3 } from '../typography';
import { Box } from '../box';
import { Button } from '../button';
import omit from 'lodash.omit';
import { Illustration60X60Error, Illustration60X60Info } from '@teamleader/ui-illustrations';

const ALERT_TYPES = {
  confirm: 'confirm',
  destructive: 'destructive',
  error: 'error',
};

const BUTTON_LEVELS = {
  primary: 'primary',
  destructive: 'destructive',
};

const Alert = ({ children, primaryAction, secondaryAction, title, type, ...otherProps }) => {
  const restProps = omit(otherProps, [
    'primaryAction',
    'secondaryAction',
  ]);

  return (
    <DialogBase  {...restProps} scrollable={false} size="small">
      <Box alignItems="center" display="flex" flexDirection="column" padding={4}>
        <Box marginBottom={3} marginTop={2}>
          {type === ALERT_TYPES.confirm ? <Illustration60X60Info/> : <Illustration60X60Error/>}
        </Box>
        <Heading3 color="teal" marginBottom={2}>{title}</Heading3>
        {children}
        <Button level={type === ALERT_TYPES.destructive ? BUTTON_LEVELS.destructive : BUTTON_LEVELS.primary} {...primaryAction} fullWidth marginTop={5} />
        {secondaryAction && <Button {...secondaryAction} fullWidth marginTop={2} />}
      </Box>
    </DialogBase>
  );
};

Alert.propTypes = {
  /** If true, the alert will show on screen. */
  active: PropTypes.bool,
  /** The content to display inside the alert. */
  children: PropTypes.any,
  /** Object containing the props of the primary action (a Button, with level prop set to 'primary'). */
  primaryAction: PropTypes.object.isRequired,
  /** Object containing the the props of the secondary action (a Button). */
  secondaryAction: PropTypes.object,
  /** The title of the alert. */
  title: PropTypes.string,
  /** The type of the alert. */
  type: PropTypes.oneOf([ALERT_TYPES.confirm, ALERT_TYPES.destructive, ALERT_TYPES.error]),
};

Alert.defaultProps = {
  type: ALERT_TYPES.confirm,
};

export default Alert;
