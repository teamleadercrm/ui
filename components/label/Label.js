import React, { Fragment, PureComponent } from 'react';
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
    connectedLeft: PropTypes.element,
    connectedRight: PropTypes.element,
    inverse: PropTypes.bool,
    helpText: PropTypes.string,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    inverse: false,
    helpText: 'Optional',
    required: false,
    size: 'medium',
  };

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

    const classNames = cx(
      theme['label'],
      {
        [theme['is-inverse']]: inverse,
      },
      className,
    );

    const Element = size === 'large' ? TextDisplay : TextBody;

    return (
      <Box element="label" marginBottom={3} className={classNames} {...others}>
        {React.Children.map(children, child => {
          if (isComponentOfType(Input, child)) {
            return React.cloneElement(child, childProps);
          }

          return (
            <Fragment>
              {connectedLeft && (
                <Box element="span" marginRight={1}>
                  {connectedLeft}
                </Box>
              )}
              <Element color={inverse ? 'white' : 'teal'} element="span">
                {child}
              </Element>
              {!required && (
                <TextSmall element="span" marginLeft={1} color={inverse ? 'white' : 'neutral'} soft>
                  {helpText}
                </TextSmall>
              )}
              {connectedRight && (
                <Box element="span" marginLeft={1}>
                  {connectedRight}
                </Box>
              )}
            </Fragment>
          );
        })}
      </Box>
    );
  }
}
