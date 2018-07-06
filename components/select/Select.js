import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../button';
import theme from './theme.css';

class Select extends PureComponent {
  state = {
    selectedOptions: [],
  };

  getClearIndicatorStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      color: inverse ? '#e1ecfa': '#344b63',
      '&:hover': {
        color: inverse ? '#fff' : '#2a3b4d',
      },
      'svg': {
        height: '14px',
        width: '14px',
      },
    };
  };

  getControlStyles = (base, { isDisabled, isFocused }) => {
    const { inverse, size } = this.props;

    const commonStyles = {
      minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
    };

    if(inverse) {
      return {
        ...base,
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
      ...base,
      ...commonStyles,
      backgroundColor: isDisabled ? '#e4e4e6' : '#fff',
      '&:hover': {
        borderColor: '#82828c',
      },
      borderColor: isFocused ? '#82828c' : isDisabled ? '#e4e4e6' : '#c0c0c4',
      boxShadow: isFocused ? '0 0 0 1px #82828c' : 'none',
    };
  };

  getGroupStyles = (base) => {
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

  getGroupHeadingStyles = (base) => {
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

    if(this.props.inverse) {
      return {
        ...commonStyles,
        backgroundColor: isDisabled ? '#3F4F61' : '#64788f',
      };
    }

    return {
      ...commonStyles,
      backgroundColor: isDisabled ? '#e4e4e6' : '#c0c0c4',
    }
  };

  getMenuStyles = (base) => ({
    ...base,
    backgroundColor: this.props.inverse ? '#64788f' : '#fff',
  });

  getMultiValueStyles = (base) => {
    const { inverse } = this.props;

    return {
      ...base,
      backgroundColor: inverse ? '#435262' : '#f0f0f1',
      borderColor: inverse ? '#8597a7' : '#e3e3e5',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '4px',
    }
  };

  getMultiValueLabelStyles = (base) => {
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
    }
  };

  getMultiValueRemoveStyles = (base) => {
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
    }
  };

  getOptionStyles = (base, { isFocused, isSelected }) => {
    const commonStyles = {
      padding: '8px 12px',
    };

    if(this.props.inverse) {
      return {
        ...base,
        ...commonStyles,
        color: isFocused ? '#344b63' : '#fff',
        backgroundColor: isFocused ? '#c1cede' : isSelected ? '#344b63' : '#64788f',
        '&:active': {
          backgroundColor: '#344b63',
        },
      };
    }

    return {
      ...base,
      ...commonStyles,
      color: isSelected && !isFocused ? '#fff' : '#344b63',
      backgroundColor: isFocused ? '#e4e4e6' : isSelected ? '#82828c' : '#fff',
      '&:active': {
        backgroundColor: '#e4e4e6',
      },
    };
  };

  getPlaceholderStyles = (base, { isDisabled, isMulti }) => {
    const { size } = this.props;

    const commonStyles = {
      ...base,
      marginLeft: isMulti && size !== 'large' ? '6px' : '2px',
      marginRight: isMulti && size !== 'large' ? '6px' : '2px',
    };

    if(this.props.inverse) {
      return {
        ...commonStyles,
        color: isDisabled ? '#64788f' : '#c1cede',
      }
    }

    return {
      ...commonStyles,
      color: '#82828c',
    }
  };

  getSingleValueStyles = (base) => ({
    ...base,
    color: this.props.inverse ? '#fff' : '#2a3b4d',
  });

  getValueContainerStyles = (base, { isMulti }) => {
    const { size } = this.props;

    return {
      ...base,
      padding: isMulti && size !== 'large' ? '0' : '0 4px',
    }
  };

  getStyles = () => ({
    clearIndicator: (base) => this.getClearIndicatorStyles(base),
    control: (base, { isDisabled, isFocused }) => this.getControlStyles(base, { isDisabled, isFocused }),
    group: (base) => this.getGroupStyles(base),
    groupHeading: (base) => this.getGroupHeadingStyles(base),
    indicatorSeparator: (base, { isDisabled }) => this.getIndicatorSeparatorStyles(base, { isDisabled }),
    menu: (base) => this.getMenuStyles(base),
    multiValue: (base) => this.getMultiValueStyles(base),
    multiValueLabel: (base) => this.getMultiValueLabelStyles(base),
    multiValueRemove: (base) => this.getMultiValueRemoveStyles(base),
    option: (base, { isFocused, isSelected }) => this.getOptionStyles(base, { isFocused, isSelected }),
    placeholder: (base, { isDisabled, isMulti }) => this.getPlaceholderStyles(base, { isDisabled, isMulti }),
    singleValue: (base) => this.getSingleValueStyles(base),
    valueContainer: (base, { isMulti }) => this.getValueContainerStyles(base, { isMulti }),
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

  handleChange = values => {
    this.setState({ selectedOptions: values });
  };

  render() {
    const { selectedOptions } = this.state;
    const rest = omit(this.props, ['size', 'inverse']);

    return (
      <ReactSelect
        className={theme['select']}
        components={{
          DropdownIndicator: this.getDropDownIndicator(),
        }}
        onChange={this.handleChange}
        styles={this.getStyles()}
        value={selectedOptions}
        {...rest}
      />
    );
  }
}

Select.propTypes = {
  /** Boolean indicating whether the select should render as inverse. */
  inverse: PropTypes.bool,
  /** Size of the input element. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Select.defaultProps = {
  inverse: false,
  size: 'medium',
};

export default Select;
