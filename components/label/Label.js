import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import theme from './theme.css';

export default class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
    for: PropTypes.string,
  };

  render() {
    const { children } = this.props;

    return (
      <Box element="label" htmlFor={this.props.for} marginBottom={3} className={theme['label']}>
        {children}
      </Box>
    );
  }
}
