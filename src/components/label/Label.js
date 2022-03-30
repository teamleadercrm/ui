import { IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Icon, Tooltip } from '../..';
import Box from '../box';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';

const TooltippedIcon = Tooltip(Icon);
export default class Label extends PureComponent {
  render() {
    const { children, inverse, helpText, required, size, tooltip, ...others } = this.props;

    const childProps = {
      inverse,
      marginTop: 1,
      size,
    };

    const Element = size === 'large' ? TextDisplay : TextBodyCompact;

    return (
      <Box display="block" element="label" marginBottom={3} {...others}>
        {React.Children.map(children, (child) => {
          if (typeof child !== 'string') {
            return React.cloneElement(child, { ...childProps, ...child.props });
          }

          return (
            <Box display="flex" alignItems="center">
              <Element color={inverse ? 'neutral' : 'teal'} tint={inverse ? 'lightest' : 'darkest'} element="span">
                {child}
              </Element>
              {!required && (
                <TextSmall
                  color={inverse ? 'teal' : 'neutral'}
                  element="span"
                  marginLeft={1}
                  tint={inverse ? 'light' : 'darkest'}
                >
                  {helpText}
                </TextSmall>
              )}
              {tooltip && (
                <TooltippedIcon
                  tooltip={<TextSmall>{tooltip}</TextSmall>}
                  tooltipSize="small"
                  color={inverse ? 'neutral' : 'teal'}
                  tint={inverse ? 'lightest' : 'darkest'}
                >
                  <IconInfoBadgedSmallFilled />
                </TooltippedIcon>
              )}
            </Box>
          );
        })}
      </Box>
    );
  }
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  inverse: PropTypes.bool,
  helpText: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tooltip: PropTypes.string
};

Label.defaultProps = {
  inverse: false,
  helpText: 'Optional',
  required: false,
  size: 'medium',
};
