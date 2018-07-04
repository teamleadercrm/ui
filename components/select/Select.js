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

  getControlStyles = (base, { isDisabled, isFocused }) => {
    const { inverse, size } = this.props;

    if(inverse) {
      return {
        ...base,
        backgroundColor: isDisabled ? '#3F4F61' : '#64788f',
        '&:hover': {
          borderColor: '#c1cede',
        },
        borderColor: isFocused ? '#c1cede' : isDisabled ? '#3F4F61' : '#64788f',
        boxShadow: isFocused ? '0 0 0 1px #c1cede' : 'none',
        minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
      };
    }

    return {
      ...base,
      backgroundColor: isDisabled ? '#e4e4e6' : '#fff',
      '&:hover': {
        borderColor: '#82828c',
      },
      borderColor: isFocused ? '#82828c' : isDisabled ? '#e4e4e6' : '#c0c0c4',
      boxShadow: isFocused ? '0 0 0 1px #82828c' : 'none',
      minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
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
    };
  };

  getIndicatorSeparatorStyles = (base) => ({
    ...base,
    backgroundColor: this.props.inverse ? '#64788f' : '#c0c0c4',
    marginTop: 0,
    marginBottom: 0,
  });

  getMenuStyles = (base) => ({
    ...base,
    backgroundColor: this.props.inverse ? '#64788f' : '#fff',
  });

  getOptionStyles = (base, { isFocused, isSelected }) => {
    if(this.props.inverse) {
      return {
        ...base,
        color: isFocused ? '#344b63' : '#fff',
        backgroundColor: isFocused ? '#c1cede' : isSelected ? '#344b63' : '#64788f',
        '&:active': {
          backgroundColor: '#344b63',
        },
      };
    }

    return {
      ...base,
      color: isSelected && !isFocused ? '#fff' : '#344b63',
      backgroundColor: isFocused ? '#e4e4e6' : isSelected ? '#82828c' : '#fff',
      '&:active': {
        backgroundColor: '#e4e4e6',
      },
    };
  };

  getPlaceholderStyles = (base, { isDisabled }) => {
    if(this.props.inverse) {
      return {
        ...base,
        color: isDisabled ? '#64788f' : '#c1cede',
      }
    }

    return {
      ...base,
      color: '#82828c',
    }
  };

  getSingleValueStyles = (base) => ({
    ...base,
    color: this.props.inverse ? '#fff' : '#2a3b4d',
  });

  getStyles = () => ({
    control: (base, { isDisabled, isFocused }) => this.getControlStyles(base, { isDisabled, isFocused }),
    groupHeading: (base) => this.getGroupHeadingStyles(base),
    indicatorSeparator: (base) => this.getIndicatorSeparatorStyles(base),
    menu: (base) => this.getMenuStyles(base),
    option: (base, { isFocused, isSelected }) => this.getOptionStyles(base, { isFocused, isSelected }),
    placeholder: (base, { isDisabled }) => this.getPlaceholderStyles(base, { isDisabled }),
    singleValue: (base) => this.getSingleValueStyles(base),
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
