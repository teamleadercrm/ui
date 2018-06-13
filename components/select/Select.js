import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../button';
import theme from './theme.css';

const DropdownIndicator = ({ isDisabled }) =>
  <Button className={theme['dropdown-indicator']} disabled={isDisabled} icon={<IconChevronDownSmallOutline />}/>;

class Select extends PureComponent {
  state = {
    selectedOptions: [],
  };

  getStyles = (size) => ({
    control: (base, { isDisabled, isFocused }) => ({
      ...base,
      backgroundColor: isDisabled ? '#e4e4e6' : '#fff',
      '&:hover': {
        borderColor: '#82828c'
      },
      borderColor: isFocused ? '#82828c' : '#c0c0c4',
      boxShadow: isFocused ? '0 0 0 1px #82828c' : 'none',
      minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      marginTop: 0,
      marginBottom: 0,
    }),
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
        components={{ DropdownIndicator }}
        onChange={this.handleChange}
        styles={this.getStyles(size)}
        value={selectedOptions}
        {...others}
      />
    );
  }
}

Select.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Select.defaultProps = {
  size: 'medium',
};

export default Select;
