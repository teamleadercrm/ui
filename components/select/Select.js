import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import { Button } from '../button';
import theme from './theme.css';

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
        value={selectedOptions}
        {...this.props}
      />
    );
  }
}

export default Select;
