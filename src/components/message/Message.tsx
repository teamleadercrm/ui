import React from 'react';
import {
  IconBellMediumOutline,
  IconCheckmarkBadgedMediumFilled,
  IconCloseMediumOutline,
  IconWarningBadgedMediumFilled,
} from '@teamleader/ui-icons';
import Box from '../box';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import Icon from '../icon';
import { IconButton } from '../iconButton';
import { Heading3 } from '../typography';
import { ButtonProps } from '../button/Button';
import { GenericComponent } from '../../@types/types';
import { COLORS, TINTS } from '../../constants';

export type Status = 'error' | 'info' | 'success' | 'warning';

const iconColorMap: Record<Status, typeof COLORS[number]> = {
  error: 'neutral',
  info: 'neutral',
  success: 'neutral',
  warning: 'gold',
};

const iconTintMap: Record<Status, typeof TINTS[number]> = {
  error: 'lightest',
  info: 'darkest',
  success: 'lightest',
  warning: 'dark',
};

const backgroundColorMap: Record<Status, typeof COLORS[number]> = {
  error: 'ruby',
  info: 'neutral',
  success: 'mint',
  warning: 'gold',
};

const backgroundTintMap: Record<Status, typeof TINTS[number]> = {
  error: 'normal',
  info: 'normal',
  success: 'light',
  warning: 'light',
};

const iconMap = {
  error: IconWarningBadgedMediumFilled,
  info: IconBellMediumOutline,
  success: IconCheckmarkBadgedMediumFilled,
  warning: IconWarningBadgedMediumFilled,
};

export interface MessageProps {
  /** The content to display inside the message. */
  children: React.ReactNode;
  /** If true, the message will be rendered inline instead of taking full width. */
  inline?: boolean;
  /** Callback function that is fired when the close button of the message is clicked. */
  onClose?: () => void;
  /** Object containing the props of the primary action (a Button). */
  primaryAction?: ButtonProps;
  /** Object containing the props of the secondary action (a Button, with level prop set to 'link'). */
  secondaryAction?: ButtonProps;
  /** If true, an icon will show up depending on the status type */
  showIcon?: boolean;
  /** A status type to determine color and icon */
  status?: Status;
  /** The message title */
  title: React.ReactNode;
}

const Message: GenericComponent<MessageProps> = ({
  children,
  inline,
  onClose,
  primaryAction,
  secondaryAction,
  showIcon,
  status = 'info',
  title,
  ...others
}) => {
  const hasActions = Boolean(primaryAction || secondaryAction);
  const IconToRender = iconMap[status];

  return (
    <Box {...others} display={inline ? 'inline-flex' : 'flex'}>
      {status && (
        <Box
          backgroundColor={backgroundColorMap[status]}
          backgroundTint={backgroundTintMap[status]}
          borderBottomLeftRadius="rounded"
          borderTopLeftRadius="rounded"
          paddingHorizontal={showIcon ? 2 : 1}
          paddingVertical={4}
        >
          {showIcon && (
            <Icon color={iconColorMap[status]} tint={iconTintMap[status]}>
              <IconToRender />
            </Icon>
          )}
        </Box>
      )}
      <Box
        backgroundColor="neutral"
        backgroundTint="lightest"
        borderColor="neutral"
        borderTint="normal"
        borderLeftWidth={status ? 0 : 1}
        borderTopWidth={1}
        borderRightWidth={1}
        borderBottomWidth={1}
        borderBottomRightRadius="rounded"
        borderTopRightRadius="rounded"
        borderBottomLeftRadius={status ? 'square' : 'rounded'}
        borderTopLeftRadius={status ? 'square' : 'rounded'}
        flex={1}
        display="flex"
      >
        <Box flex={1} paddingLeft={status ? 3 : 4} paddingRight={4} paddingVertical={4}>
          {title && (
            <Heading3 color="teal" marginBottom={2}>
              {title}
            </Heading3>
          )}
          {children}
          {hasActions && (
            <ButtonGroup display="flex" justifyContent="flex-end" marginTop={4}>
              {secondaryAction && <Button level="link" size="small" {...secondaryAction} />}
              {primaryAction && <Button size="small" {...primaryAction} />}
            </ButtonGroup>
          )}
        </Box>
        {onClose && (
          <Box paddingVertical={4} paddingRight={3}>
            <IconButton icon={<IconCloseMediumOutline />} marginLeft={-2} marginTop={-1} onClick={onClose} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Message;
