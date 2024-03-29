import { IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import React, { ReactNode, forwardRef } from 'react';
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
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  tooltip?: ReactNode;
  tooltipProps?: Record<string, any>;
}

const Label: GenericComponent<LabelProps> = forwardRef<HTMLElement, LabelProps>(
  ({ children, inverse = false, required = false, size = 'medium', tooltip, tooltipProps, ...others }, ref) => {
    const childProps = {
      inverse,
      marginTop: 1,
      size,
    };

    const Element = {
      small: TextBodyCompact,
      medium: TextBodyCompact,
      large: TextDisplay,
    }[size];

    return (
      <Box data-teamleader-ui="label" display="block" element="label" marginBottom={3} ref={ref} {...others}>
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
  },
);

Label.displayName = 'Label';

export default Label;
