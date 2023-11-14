import Box from '../box';
import Button from '../button';
import Tooltip, { TooltipProps } from '../tooltip';
import React, { ComponentProps } from 'react';

const TooltippedBox = Tooltip(Box);

const TooltippedButton = (props: ComponentProps<typeof Button> & Partial<TooltipProps>) => {
  const {
    onTooltipEntered,
    tooltip,
    tooltipColor,
    tooltipHideOnClick,
    tooltipIcon,
    tooltipPosition,
    tooltipShowOnClick,
    tooltipSize,
    tooltipShowDelay,
    tooltipActive,
    zIndex,
    ...rest
  } = props;

  if (!tooltip) {
    return <Button {...rest} />;
  }

  return (
    <TooltippedBox
      onTooltipEntered={onTooltipEntered}
      tooltip={tooltip}
      tooltipColor={tooltipColor}
      tooltipHideOnClick={tooltipHideOnClick}
      tooltipIcon={tooltipIcon}
      tooltipPosition={tooltipPosition}
      tooltipShowOnClick={tooltipShowOnClick}
      tooltipSize={tooltipSize}
      tooltipShowDelay={tooltipShowDelay}
      tooltipActive={tooltipActive}
      zIndex={zIndex}
    >
      <Button {...rest} disabled />
    </TooltippedBox>
  );
};
export default TooltippedButton;
