import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { TextBody, TextDisplay, TextSmall } from '../typography';

export default class Label extends PureComponent {
  render() {
    const {
      children,
      connectedLeft,
      connectedRight,
      className,
      inverse,
      helpText,
      required,
      size,
      ...others
    } = this.props;

    const childProps = {
      inverse,
      marginTop: 1,
      size,
    };

    const Element = size === 'large' ? TextDisplay : TextBody;

    return (
      <Box display="block" element="label" marginBottom={3} {...others}>
        {React.Children.map(children, child => {
          if (typeof child !== 'string') {
            return React.cloneElement(child, { ...childProps, ...child.props });
          }

          return (
            <Box display="flex" alignItems="center">
              {connectedLeft && (
                <Box element="span" marginRight={1}>
                  {connectedLeft}
                </Box>
              )}
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
              {connectedRight && (
                <Box element="span" marginLeft={1}>
                  {connectedRight}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    );
  }
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  connectedLeft: PropTypes.element,
  connectedRight: PropTypes.element,
  inverse: PropTypes.bool,
  helpText: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  inverse: false,
  helpText: 'Optional',
  required: false,
  size: 'medium',
};
