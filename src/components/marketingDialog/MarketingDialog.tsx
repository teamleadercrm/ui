import React, { cloneElement, ReactElement, ReactNode, useRef } from 'react';
import { DialogBase } from '../dialog';
import theme from './theme.css';
import { Heading1, Heading3, TextBody } from '../typography';
import Box from '../box';
import MarketingButton from '../marketingButton';
import { MarketingButtonProps } from '../marketingButton/MarketingButton';
import Flex from '../flex';

interface MarketingDialogProps {
  active: boolean;
  onCloseClick?: () => void;
  onEscKeyDown?: () => void;
  onOverlayClick?: () => void;
  title: string;
  graphic: ReactElement;
  subtitle: string;
  body: ReactNode;
  primaryAction: Omit<MarketingButtonProps, 'level' | 'fullWidth'>;
  secondaryAction?: Omit<MarketingButtonProps, 'level'>;
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
    <DialogBase
      active={active}
      onCloseClick={onCloseClick}
      onEscKeyDown={onEscKeyDown}
      onOverlayClick={onOverlayClick}
      className={theme['marketing-dialog']}
      initialFocusRef={ctaRef}
    >
      <DialogBase.Header onCloseClick={onCloseClick}>
        <Heading3>{title}</Heading3>
      </DialogBase.Header>

      <DialogBase.Body
        scrollable
        display="flex"
        flexDirection="row"
        padding={6}
        justifyContent="space-between"
        alignItems="center"
      >
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
            {secondaryAction && <MarketingButton {...secondaryAction} level="link" />}
          </Flex>
        </Box>
      </DialogBase.Body>
    </DialogBase>
  );
};

export default MarketingDialog;
