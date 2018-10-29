import React, { PureComponent } from 'react';
import cx from 'classnames';

import theme from './theme.css';
import InputBase from './InputBase';

class TextArea extends PureComponent {
  render() {
    const classNames = cx(theme['text-area'], this.props.className);

    return <InputBase element="textarea" className={classNames} {...this.props} />;
  }
}

TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;
