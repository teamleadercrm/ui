import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../button';
import theme from './theme.css';

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: state.isDisabled ? '#e4e4e6' : '#fff',
    '&:hover': {
      borderColor: '#82828c'
    },
    borderColor: state.isFocused ? '#82828c' : '#c0c0c4',
    boxShadow: state.isFocused ? '0 0 0 1px #82828c' : 'none',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    marginTop: 0,
    marginBottom: 0,
  }),
  option: (base, state) => ({
    ...base,
    color: '#344b63',
    backgroundColor: state.isFocused ? '#e4e4e6' : state.isSelected ? '#f7f7fa' : '#fff',
    '&:active': {
      backgroundColor: '#e4e4e6'
    },
  }),
};

const DropdownIndicator = () => <Button className={theme['dropdown-indicator']} icon={<IconChevronDownSmallOutline />}/>;

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
