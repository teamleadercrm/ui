import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../button';
import theme from './theme.css';

const customStyles = {
  control: (base, { isDisabled, isFocused }) => ({
    ...base,
    backgroundColor: isDisabled ? '#e4e4e6' : '#fff',
    '&:hover': {
      borderColor: '#82828c'
    },
    borderColor: isFocused ? '#82828c' : '#c0c0c4',
    boxShadow: isFocused ? '0 0 0 1px #82828c' : 'none',
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
};

const DropdownIndicator = ({ isDisabled }) =>
  <Button className={theme['dropdown-indicator']} disabled={isDisabled} icon={<IconChevronDownSmallOutline />}/>;

class Select extends PureComponent {
  state = {
    selectedOptions: [],
  };

  handleChange = values => {
    this.setState({ selectedOptions: values });
  };

  render() {
    const { selectedOptions } = this.state;

    return (
      <ReactSelect
        className={theme['select']}
        components={{ DropdownIndicator }}
        onChange={this.handleChange}
        styles={customStyles}
        value={selectedOptions}
        {...this.props}
      />
    );
  }
}

export default Select;
