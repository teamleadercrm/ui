import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import Box from '../box';
import { TextBody, TextDisplay, TextSmall } from '../typography';
import theme from './theme.css';
import isComponentOfType from '../utils/is-component-of-type';
import cx from 'classnames';

export default class Label extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
    for: PropTypes.string,
    inverse: PropTypes.bool,
    optionalText: PropTypes.string,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    inverse: false,
    optionalText: 'Optional',
    required: false,
    size: 'medium',
  };

  render() {
    const { children, className, inverse, optionalText, required, size } = this.props;
    const childProps = {
      inverse,
      marginTop: 1,
      size,
    };
    const classNames = cx(
      theme['label'],
      {
        [theme['is-inverse']]: inverse,
      },
      className,
    );
    const Element = size === 'large' ? TextDisplay : TextBody;

    return (
      <Box element="label" htmlFor={this.props.for} marginBottom={3} className={classNames}>
        {React.Children.map(children, child => {
          if (isComponentOfType(Input, child)) {
            return React.cloneElement(child, childProps);
          }

          return (
            <div>
              <Element color={inverse ? 'white' : 'teal'} element="span">
                {child}
              </Element>
              {!required && (
                <TextSmall element="span" marginLeft={1} color={inverse ? 'white' : 'neutral'} soft>
                  {optionalText}
                </TextSmall>
              )}
            </div>
          );
        })}
      </Box>
    );
  }
}
