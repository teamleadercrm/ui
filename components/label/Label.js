import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextBody, TextDisplay } from '../typography';
import theme from './theme.css';

export default class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
    for: PropTypes.string,
    size: PropTypes.arrayOf(['small', 'medium']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { children, size } = this.props;

    const Element = size === 'medium' ? TextDisplay : TextBody;

    return (
      <Element element="label" htmlFor={this.props.for} marginBottom={3} className={theme['label']}>
        {children}
      </Element>
    );
  }
}
