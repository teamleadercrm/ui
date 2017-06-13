import React from 'react';
import Button from '../../components/button';
import Toast from '../../components/toast';

class ToastTest extends React.Component {
  handleSnackbarClick = () => {
    this.setState({ active: false });
  };

  handleSnackbarTimeout = () => {
    this.setState({ active: false });
  };

  handleClick = () => {
    this.setState({ active: true });
  };

  state = {
    active: false,
  };

  render () {
    return (
      <section>
        <h2>Toast</h2>
        <Button label="Make a toast" primary onClick={this.handleClick} />
        <Toast
          active={this.state.active}
          label="Toast is ready!"
          timeout={3000}
          onClick={this.handleSnackbarClick}
          onTimeout={this.handleSnackbarTimeout}
        />
      </section>
    );
  }
}

export default ToastTest;
