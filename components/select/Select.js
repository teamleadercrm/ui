import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../button';
import theme from './theme.css';

class Select extends PureComponent {
  getClearIndicatorStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      color: inverse ? '#e1ecfa' : '#344b63',
      '&:hover': {
        color: inverse ? '#fff' : '#2a3b4d',
      },
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
        backgroundColor: isDisabled ? '#3F4F61' : '#64788f',
        '&:hover': {
          borderColor: '#c1cede',
        },
        borderColor: isFocused ? '#c1cede' : isDisabled ? '#3F4F61' : '#64788f',
        boxShadow: isFocused ? '0 0 0 1px #c1cede' : 'none',
      };
    }

    return {
      ...commonStyles,
      backgroundColor: isDisabled ? '#e4e4e6' : '#fff',
      '&:hover': {
        borderColor: '#82828c',
      },
      borderColor: isFocused ? '#82828c' : isDisabled ? '#e4e4e6' : '#c0c0c4',
      boxShadow: isFocused ? '0 0 0 1px #82828c' : 'none',
    };
  };

  getGroupStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      borderBottomColor: inverse ? '#c1cede' : '#e4e4e6',
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
      color: inverse ? '#fff' : '#2a3b4d',
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
        backgroundColor: isDisabled ? '#3F4F61' : '#64788f',
      };
    }

    return {
      ...commonStyles,
      backgroundColor: isDisabled ? '#e4e4e6' : '#c0c0c4',
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
    backgroundColor: this.props.inverse ? '#64788f' : '#fff',
  });

  getMultiValueStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      backgroundColor: inverse ? '#435262' : '#f0f0f1',
      borderColor: inverse ? '#8597a7' : '#e3e3e5',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '4px',
    };
  };

  getMultiValueLabelStyles = base => {
    const { inverse, size } = this.props;

    return {
      ...base,
      backgroundColor: inverse ? '#435262' : '#f0f0f1',
      borderRadius: '4px 0 0 4px',
      color: inverse ? '#fff' : '#2a3b4d',
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
      backgroundColor: inverse ? '#435262' : '#f0f0f1',
      borderRadius: '0 4px 4px 0',
      color: inverse ? '#fff' : '#2a3b4d',
      '&:hover': {
        backgroundColor: inverse ? '#596775' : '#e4e4e6',
        color: inverse ? '#fff' : '#2a3b4d',
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
        color: isDisabled ? '#c1cede' : isFocused ? '#344b63' : '#fff',
        backgroundColor: isFocused ? '#c1cede' : isSelected ? '#344b63' : '#64788f',
        '&:active': {
          backgroundColor: isDisabled ? '#64788f' : '#344b63',
        },
      };
    }

    return {
      ...commonStyles,
      color: isDisabled ? '#c0c0c4' : isSelected && !isFocused ? '#fff' : '#344b63',
      backgroundColor: isFocused ? '#e4e4e6' : isSelected ? '#82828c' : '#fff',
      '&:active': {
        backgroundColor: isDisabled ? '#fff' : '#e4e4e6',
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
        color: isDisabled ? '#64788f' : '#c1cede',
      };
    }

    return {
      ...commonStyles,
      color: '#82828c',
    };
  };

  getSingleValueStyles = base => ({
    ...base,
    color: this.props.inverse ? '#fff' : '#2a3b4d',
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

  render() {
    const { components, ...others } = this.props;
    const rest = omit(others, ['size', 'inverse']);

    return (
      <ReactSelect
        className={theme['select']}
        components={{
          DropdownIndicator: this.getDropDownIndicator(),
          ...components,
        }}
        styles={this.getStyles()}
        {...rest}
      />
    );
  }
}

Select.propTypes = {
  /** Override default components with your own. Pass an object with correct the key and its replacing component */
  components: PropTypes.object,
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
