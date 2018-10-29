import React, { PureComponent } from 'react';
import cx from 'classnames';

import InputBase from './InputBase';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';
import theme from './theme.css';

class TextArea extends PureComponent {
  render() {
    const { className, error, helpText, inverse, ...others } = this.props;

    const classNames = cx(theme['wrapper'], className);

    const boxProps = pickBoxProps(this.props);
    const inputProps = {
      error,
      inverse,
      ...omitBoxProps(others),
    };

    return (
      <Box className={classNames} {...boxProps}>
        <InputBase className={theme['text-area']} element="textarea" {...inputProps} />
        <ValidationText error={error} help={helpText} inverse={inverse} />
      </Box>
    );
  }
}

TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;
