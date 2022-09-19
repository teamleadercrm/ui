import React, { cloneElement, ReactElement, ReactNode, useRef } from 'react';
import Dialog from '../dialog';
import theme from './theme.css';
import { Heading1, TextBody } from '../typography';
import Box from '../box';
import MarketingButton from '../marketingButton';
import { MarketingButtonProps } from '../marketingButton/MarketingButton';
import Flex from '../flex';

interface MarketingDialogProps {
  /** If true, the dialog will show on screen. */
  active: boolean;
  /** Callback function that is fired when the close icon clicked. */
  onCloseClick?: () => void;
  /** Callback function that is fired when the escape key is pressed. */
  onEscKeyDown?: () => void;
  /** Callback function that is fired when the mouse clicks on the overlay. */
  onOverlayClick?: () => void;
  /** The title of the dialog. */
  title: string;
  /** React component for a graphic on the left of the dialog. It should be able to receive a width, height and className like an img or iframe. */
  graphic: ReactElement<{ width: string; height: string; className: string }>;
  /** The subtitle of the dialog. */
  subtitle: string;
  /** The body of the dialog. */
  body: ReactNode;
  /** Object containing the props of the primary action / call to action. */
  primaryAction: Omit<MarketingButtonProps, 'level' | 'fullWidth'>;
  /** Object containing the props of the secondary action / call to action. */
  secondaryAction?: Omit<MarketingButtonProps, 'level' | 'fullWidth'>;
}

const MarketingDialog = ({
  active,
  onCloseClick,
  onEscKeyDown,
  onOverlayClick,
  title,
  graphic,
  subtitle,
  body,
  primaryAction,
  secondaryAction,
}: MarketingDialogProps) => {
  const ctaRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog
      active={active}
      onCloseClick={onCloseClick}
      onEscKeyDown={onEscKeyDown}
      onOverlayClick={onOverlayClick}
      className={theme['marketing-dialog']}
      initialFocusRef={ctaRef}
      title={title}
      scrollable
    >
      <Box display="flex" flexDirection="row" padding={6} justifyContent="space-between" alignItems="center">
        <Box borderWidth={1} borderRadius="rounded" overflow="hidden">
          {cloneElement(graphic, { width: '480', height: '270', className: theme['marketing-dialog-graphic'] })}
        </Box>

        <Box className={theme['marketing-dialog-text']}>
          <Heading1>{subtitle}</Heading1>
          <TextBody marginTop={3} marginBottom={4}>
            {body}
          </TextBody>

          <Flex direction="column" alignItems="center" gap={3}>
            <MarketingButton ref={ctaRef} {...primaryAction} level="primary" fullWidth />
            {secondaryAction && <MarketingButton {...secondaryAction} level="link" fullWidth />}
          </Flex>
        </Box>
      </Box>
    </Dialog>
  );
};

export default MarketingDialog;
