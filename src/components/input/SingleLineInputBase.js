import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputBase from './InputBase';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';

import theme from './theme.css';

class SingleLineInputBase extends PureComponent {
  state = {
    inputHasfocus: false,
  };

  handleBlur = event => {
    this.setState({ inputHasfocus: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = event => {
    this.setState({ inputHasfocus: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  renderOneOrMultipleElements(prop) {
    if (Array.isArray(prop)) {
      return prop.map((element, index) => React.cloneElement(element, { key: index }));
    }

    return prop;
  }

  render() {
    const {
      className,
      connectedLeft,
      connectedRight,
      disabled,
      error,
      helpText,
      onFocus,
      onBlur,
      prefix,
      inverse,
      readOnly,
      suffix,
      width,
      ...others
    } = this.props;

    const classNames = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.inputHasfocus,
        [theme['has-error']]: error,
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-disabled']]: disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const boxProps = pickBoxProps(others);
    const inputProps = {
      disabled,
      error,
      inverse,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      readOnly,
      ...omitBoxProps(others),
    };

    return (
      <Box className={classNames} {...boxProps}>
        <div className={theme['input-wrapper']}>
          {connectedLeft}
          <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 0 auto' }}>
            {prefix && <div className={theme['prefix-wrapper']}>{this.renderOneOrMultipleElements(prefix)}</div>}
            <InputBase {...inputProps} />
            {suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
          </div>
          {connectedRight}
        </div>
        <ValidationText error={error} help={helpText} inverse={inverse} />
      </Box>
    );
  }
}

SingleLineInputBase.propTypes = {
  /** Element stuck to the left hand side of the component. */
  connectedLeft: PropTypes.element,
  /** Element stuck to the right hand side of the component. */
  connectedRight: PropTypes.element,
  /** The text string/element to use as a prefix inside the input field */
  prefix: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  /** The text string/element to use as a suffix inside the input field */
  suffix: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  /** A custom width for the input field */
  width: PropTypes.string,
};

export default SingleLineInputBase;
