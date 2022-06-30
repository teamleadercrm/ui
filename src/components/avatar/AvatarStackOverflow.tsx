import React from 'react';
import cx from 'classnames';
import uiUtilities from '@teamleader/ui-utilities';

import Box from '../box';
import { TextBodyCompact } from '../typography';
import Tooltip from '../tooltip';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

const TooltippedBox = Tooltip(Box);

const MAX_NAMES_TO_SHOW_IN_TOOLTIP = 15;

interface AvatarStackOverflowProps extends Omit<BoxProps, 'ref'> {
  displayMax: number;
  overflowAmount: number;
  overflowChildren: (React.ReactChild | React.ReactFragment | React.ReactPortal)[];
  onOverflowClick?: () => void;
  tooltip: boolean;
  getNamesOverflowLabel?: (overflowAmount: number) => string;
}

const AvatarStackOverflow: GenericComponent<AvatarStackOverflowProps> = ({
  displayMax,
  overflowAmount,
  overflowChildren,
  onOverflowClick,
  tooltip,
  getNamesOverflowLabel,
}) => {
  const names = React.Children.map(
    overflowChildren,
    (child) => React.isValidElement(child) && child.props.fullName,
  ).filter(Boolean);

  const enableTooltip = tooltip && names.length > 0;
  const namesToDisplay = names.slice(0, MAX_NAMES_TO_SHOW_IN_TOOLTIP);
  const namesOverflowAmount = names.length - MAX_NAMES_TO_SHOW_IN_TOOLTIP;
  const hasNamesOverflow = namesOverflowAmount > 0;

  const Component = enableTooltip ? TooltippedBox : Box;
  const tooltipProps = enableTooltip
    ? {
        tooltip: (
          <TextBodyCompact>
            {namesToDisplay.join(', ')}
            {hasNamesOverflow &&
              `, +${getNamesOverflowLabel ? getNamesOverflowLabel(namesOverflowAmount) : namesOverflowAmount}...`}
          </TextBodyCompact>
        ),
        tooltipColor: 'white',
        tooltipPosition: 'top',
        tooltipSize: 'small',
      }
    : {};

  return (
    <Component
      alignItems="center"
      className={cx(uiUtilities['reset-font-smoothing'], theme['overflow'])}
      display="flex"
      justifyContent="center"
      onClick={onOverflowClick}
      {...tooltipProps}
    >
      {displayMax > 0 && `+`}
      {overflowAmount}
    </Component>
  );
};

export default AvatarStackOverflow;
