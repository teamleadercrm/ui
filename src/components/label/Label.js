import { IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Icon, Tooltip } from '../../index';
import Box from '../box';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';

const TooltippedIcon = Tooltip(Icon);
export default class Label extends PureComponent {
  render() {
    const { children, inverse, required, size, tooltip, ...others } = this.props;

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
              {required && (
                <TextSmall
                  color="ruby"
                  element="span"
                  marginLeft={1}
                  tint="dark"
                >
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
          );
        })}
      </Box>
    );
  }
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  inverse: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tooltip: PropTypes.string,
};

Label.defaultProps = {
  inverse: false,
  required: false,
  size: 'medium',
};
