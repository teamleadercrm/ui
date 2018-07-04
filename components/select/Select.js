import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
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

  getIndicatorSeparatorStyles = (base) => ({
    ...base,
    backgroundColor: this.props.inverse ? '#64788f' : '#c0c0c4',
    marginTop: 0,
    marginBottom: 0,
  });

  getDropDownIndicator = () => ({ isDisabled }) => (
    <Button
      className={theme['dropdown-indicator']}
      disabled={isDisabled}
      icon={<IconChevronDownSmallOutline />}
      size={this.props.size}
    />
  );

  getStyles = (size) => ({
    control: (base, { isDisabled, isFocused }) => this.getControlStyles(base, { isDisabled, isFocused }),
    indicatorSeparator: (base) => this.getIndicatorSeparatorStyles(base),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      color: '#344b63',
      backgroundColor: isFocused ? '#e4e4e6' : isSelected ? '#f7f7fa' : '#fff',
      '&:active': {
        backgroundColor: '#e4e4e6'
      },
    }),
  });

  handleChange = values => {
    this.setState({ selectedOptions: values });
  };

  render() {
    const { size, ...others } = this.props;
    const { selectedOptions } = this.state;

    return (
      <ReactSelect
        className={theme['select']}
        components={{ DropdownIndicator: this.getDropDownIndicator() }}
        onChange={this.handleChange}
        styles={this.getStyles(size)}
        value={selectedOptions}
        {...others}
      />
    );
  }
}

Select.propTypes = {
  /** Boolean indicating whether the select should render as inverse. */
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Select.defaultProps = {
  inverse: false,
  size: 'medium',
};

export default Select;
