import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { IconChevronDownSmallOutline, IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { Button } from '../button';
import { TextSmall } from '../typography';
import { colors } from './constants';
import theme from './theme.css';
import cx from 'classnames';

class Select extends PureComponent {
  getClearIndicatorStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      color: inverse ? colors.TEAL_LIGHTEST : colors.TEAL_DARK,
      '&:hover': {
        color: inverse ? colors.NEUTRAL_LIGHTEST : colors.TEAL_DARKEST,
      },
      cursor: 'pointer',
      svg: {
        height: '14px',
        width: '14px',
      },
    };
  };

  getControlStyles = (base, { isDisabled, isFocused }) => {
    const { inverse, size } = this.props;

    const commonStyles = {
      ...base,
      minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
    };

    if (inverse) {
      return {
        ...commonStyles,
        backgroundColor: isDisabled ? colors.TEAL_DARK : colors.TEAL,
        '&:hover': {
          borderColor: colors.TEAL_LIGHT,
        },
        borderColor: isFocused ? colors.TEAL_LIGHT : isDisabled ? colors.TEAL_DARK : colors.TEAL,
        boxShadow: isFocused ? `0 0 0 1px ${colors.TEAL_LIGHT}` : 'none',
      };
    }

    return {
      ...commonStyles,
      backgroundColor: isDisabled ? colors.NEUTRAL : colors.NEUTRAL_LIGHTEST,
      '&:hover': {
        borderColor: colors.NEUTRAL_DARKEST,
      },
      borderColor: isFocused ? colors.NEUTRAL_DARKEST : isDisabled ? colors.NEUTRAL : colors.NEUTRAL_DARK,
      boxShadow: isFocused ? `0 0 0 1px ${colors.NEUTRAL_DARKEST}` : 'none',
    };
  };

  getGroupStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      borderBottomColor: inverse ? colors.TEAL_LIGHT : colors.NEUTRAL,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      '&:last-child': {
        borderWidth: 0,
      },
    };
  };

  getGroupHeadingStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      color: inverse ? colors.NEUTRAL_LIGHTEST : colors.TEAL_DARKEST,
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.6px',
      padding: '0 6px',
    };
  };

  getIndicatorSeparatorStyles = (base, { isDisabled }) => {
    const commonStyles = {
      ...base,
      marginTop: 0,
      marginBottom: 0,
    };

    if (this.props.inverse) {
      return {
        ...commonStyles,
        backgroundColor: isDisabled ? colors.TEAL_DARK : colors.TEAL,
      };
    }

    return {
      ...commonStyles,
      backgroundColor: isDisabled ? colors.NEUTRAL : colors.NEUTRAL_DARK,
    };
  };

  getInput = base => {
    const { size, value } = this.props;

    return {
      ...base,
      marginLeft: value && value.length === 0 && size !== 'large' ? '6px' : '2px',
    };
  };

  getMenuStyles = base => ({
    ...base,
    backgroundColor: this.props.inverse ? colors.TEAL : colors.NEUTRAL_LIGHTEST,
  });

  getMultiValueStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      borderColor: inverse ? colors.TEAL_DARK : colors.NEUTRAL,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '4px',
    };
  };

  getMultiValueLabelStyles = base => {
    const { inverse, size } = this.props;

    return {
      ...base,
      backgroundColor: inverse ? colors.TEAL_DARK : colors.NEUTRAL_LIGHT,
      borderRadius: 0,
      color: inverse ? colors.NEUTRAL_LIGHTEST : colors.TEAL_DARKEST,
      fontFamily: 'Inter-UI-Medium',
      fontSize: size === 'small' ? '12px' : '14px',
      lineHeight: size === 'small' ? '1' : '18px',
      padding: size === 'large' ? '9px' : '6px',
    };
  };

  getMultiValueRemoveStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      backgroundColor: inverse ? colors.TEAL_DARK : colors.NEUTRAL_LIGHT,
      borderRadius: 0,
      color: inverse ? colors.NEUTRAL_LIGHTEST : colors.TEAL_DARKEST,
      '&:hover': {
        backgroundColor: inverse ? colors.TEAL_DARKEST : colors.NEUTRAL,
        color: inverse ? colors.NEUTRAL_LIGHTEST : colors.TEAL_DARKEST,
      },
      paddingLeft: '6px',
      paddingRight: '6px',
      transition: 'background-color .35s cubic-bezier(.4, 0, .2, 1)',
    };
  };

  getOptionStyles = (base, { isDisabled, isFocused, isSelected }) => {
    const commonStyles = {
      ...base,
      padding: '8px 12px',
    };

    if (this.props.inverse) {
      return {
        ...commonStyles,
        color: isDisabled ? colors.TEAL_LIGHT : isFocused ? colors.TEAL_DARK : colors.NEUTRAL_LIGHTEST,
        backgroundColor: isFocused ? colors.TEAL_LIGHT : isSelected ? colors.TEAL_DARK : colors.TEAL,
        '&:active': {
          backgroundColor: isDisabled ? colors.TEAL : colors.TEAL_DARK,
        },
      };
    }

    return {
      ...commonStyles,
      color: isDisabled ? colors.NEUTRAL_DARK : isSelected && !isFocused ? colors.NEUTRAL_LIGHTEST : colors.TEAL_DARK,
      backgroundColor: isFocused ? colors.NEUTRAL : isSelected ? colors.NEUTRAL_DARKEST : colors.NEUTRAL_LIGHTEST,
      '&:active': {
        backgroundColor: isDisabled ? colors.NEUTRAL_LIGHTEST : colors.NEUTRAL,
      },
    };
  };

  getPlaceholderStyles = (base, { isDisabled, isMulti }) => {
    const { inverse, size } = this.props;

    const commonStyles = {
      ...base,
      marginLeft: isMulti && size !== 'large' ? '6px' : '2px',
      marginRight: isMulti && size !== 'large' ? '6px' : '2px',
    };

    if (inverse) {
      return {
        ...commonStyles,
        color: isDisabled ? colors.TEAL : colors.TEAL_LIGHT,
      };
    }

    return {
      ...commonStyles,
      color: colors.NEUTRAL_DARKEST,
    };
  };

  getSingleValueStyles = base => ({
    ...base,
    color: this.props.inverse ? colors.NEUTRAL_LIGHTEST : colors.TEAL_DARKEST,
  });

  getValueContainerStyles = (base, { isMulti }) => {
    const { size } = this.props;

    return {
      ...base,
      padding: isMulti && size !== 'large' ? '0' : '0 4px',
    };
  };

  getStyles = () => ({
    clearIndicator: this.getClearIndicatorStyles,
    control: this.getControlStyles,
    group: this.getGroupStyles,
    groupHeading: this.getGroupHeadingStyles,
    indicatorSeparator: this.getIndicatorSeparatorStyles,
    input: this.getInput,
    menu: this.getMenuStyles,
    multiValue: this.getMultiValueStyles,
    multiValueLabel: this.getMultiValueLabelStyles,
    multiValueRemove: this.getMultiValueRemoveStyles,
    option: this.getOptionStyles,
    placeholder: this.getPlaceholderStyles,
    singleValue: this.getSingleValueStyles,
    valueContainer: this.getValueContainerStyles,
  });

  getDropDownIndicator = () => ({ isDisabled }) => {
    const { inverse, size } = this.props;

    return (
      <Button
        className={theme['dropdown-indicator']}
        disabled={isDisabled}
        icon={<IconChevronDownSmallOutline />}
        inverse={inverse}
        level={inverse ? 'outline' : 'secondary'}
        size={size}
      />
    );
  };

  renderHelpText() {
    const { helpText, inverse } = this.props;

    if (helpText) {
      return (
        <TextSmall color={inverse ? 'white' : 'neutral'} marginTop={1} soft>
          {helpText}
        </TextSmall>
      );
    }
  }

  renderValidationMessage() {
    return (
      <TextSmall className={theme['validation-text']} marginTop={2} display="flex">
        <Box element="span" className={theme['validation-icon']}>
          <IconWarningBadgedSmallFilled />
        </Box>
        <Box element="span" marginLeft={1}>
          {this.props.error}
        </Box>
      </TextSmall>
    );
  }

  render() {
    const { components, error, inverse, ...otherProps } = this.props;

    const boxProps = pickBoxProps(otherProps);
    const otherPropsWithoutBoxProps = omitBoxProps(otherProps);
    const restProps = omit(otherPropsWithoutBoxProps, ['size']);

    const wrapperClassnames = cx({
      [theme['has-error']]: error,
      [theme['is-inverse']]: inverse,
    });

    return (
      <Box className={wrapperClassnames} {...boxProps}>
        <ReactSelect
          className={theme['select']}
          components={{
            DropdownIndicator: this.getDropDownIndicator(),
            ...components,
          }}
          styles={this.getStyles()}
          {...restProps}
        />
        {error ? this.renderValidationMessage() : this.renderHelpText()}
      </Box>
    );
  }
}

Select.propTypes = {
  /** Override default components with your own. Pass an object with correct the key and its replacing component */
  components: PropTypes.object,
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string to use as help text below the input. */
  helpText: PropTypes.string,
  /** Boolean indicating whether the select should render as inverse. */
  inverse: PropTypes.bool,
  /** Size of the input element. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Selected option value(s) */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
};

Select.defaultProps = {
  inverse: false,
  size: 'medium',
};

export default Select;
