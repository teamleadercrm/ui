import { IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import React, { ReactNode } from 'react';
import Box from '../box';
import Tooltip from '../tooltip';
import Icon from '../icon';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';
import { BoxProps } from '../box/Box';

const TooltippedIcon = Tooltip(Icon);

interface LabelProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  inverse?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  tooltip?: string;
}

const Label = ({ children, inverse = false, required = false, size = 'medium', tooltip, ...others }: LabelProps) => {
  const childProps = {
    inverse,
    marginTop: 1,
    size,
  };
  const Element = size === 'large' ? TextDisplay : TextBodyCompact;

  return (
    <Box display="block" element="label" marginBottom={3} {...others}>
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
