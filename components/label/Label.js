import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import { TextBody, TextDisplay } from '../typography';
import theme from './theme.css';
import isComponentOfType from '../utils/is-component-of-type';
import cx from 'classnames';

export default class Label extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
    for: PropTypes.string,
    inverse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    inverse: false,
    size: 'medium',
  };

  render() {
    const { children, className, inverse, size } = this.props;
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
      <Element
        color={inverse ? 'white' : 'teal'}
        element="label"
        htmlFor={this.props.for}
        marginBottom={3}
        className={classNames}
      >
        {React.Children.map(children, child => {
          if (isComponentOfType(Input, child)) {
            return React.cloneElement(child, childProps);
          }

          return child;
        })}
      </Element>
    );
  }
}
