import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import theme from './theme.css';

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
        onChange={this.handleChange}
        value={selectedOptions}
        {...this.props}
      />
    );
  }
}

export default Select;
