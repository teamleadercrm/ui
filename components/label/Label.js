import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextBody, TextDisplay } from '../typography';
import theme from './theme.css';
import cx from 'classnames';

export default class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
    for: PropTypes.string,
    inverse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    inverse: false,
    size: 'medium',
  };

  render() {
    const { children, inverse, size } = this.props;
    const classNames = cx(theme['label'], {
      [theme['is-inverse']]: inverse,
    });
    const Element = size === 'medium' ? TextDisplay : TextBody;

    return (
      <Element
        color={inverse ? 'white' : 'teal'}
        element="label"
        htmlFor={this.props.for}
        marginBottom={3}
        className={classNames}
      >
        {children}
      </Element>
    );
  }
}
