import { IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import Icon from '../icon';
import Tooltip from '../tooltip';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';

const TooltippedIcon = Tooltip(Icon);

export interface LabelProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  inverse?: boolean;
  required?: boolean;
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'hero'>;
  tooltip?: ReactNode;
  tooltipProps?: Record<string, any>;
}

const Label: GenericComponent<LabelProps> = ({
  children,
  inverse = false,
  required = false,
  size = 'medium',
  tooltip,
  tooltipProps,
  ...others
}) => {
  const childProps = {
    inverse,
    marginTop: 1,
    size,
  };

  const Element = {
    tiny: TextSmall,
    small: TextBodyCompact,
    medium: TextBodyCompact,
    large: TextDisplay,
  }[size];

  return (
    <Box data-teamleader-ui="label" display="block" element="label" marginBottom={3} {...others}>
      {React.Children.map(children, (child) =>
        typeof child !== 'string' && React.isValidElement(child) ? (
          React.cloneElement(child, { ...childProps, ...child.props })
        ) : (
          <Box display="flex" alignItems="center">
            <Element color={inverse ? 'neutral' : 'teal'} tint={inverse ? 'lightest' : 'darkest'} element="span">
              {child}
            </Element>
            {required && (
              <TextSmall color="ruby" element="span" marginLeft={1} tint="dark">
                *
              </TextSmall>
            )}
            {tooltip && (
              <TooltippedIcon
                tooltip={<TextSmall>{tooltip}</TextSmall>}
                tooltipSize="small"
                color={inverse ? 'neutral' : 'teal'}
                tint={inverse ? 'lightest' : 'darkest'}
                marginLeft={1}
                {...tooltipProps}
              >
                <IconInfoBadgedSmallFilled />
              </TooltippedIcon>
            )}
          </Box>
        ),
      )}
    </Box>
  );
};

export default Label;
