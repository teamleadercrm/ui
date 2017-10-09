import React from 'react';
import Button from '../../components/button';
import Toast from '../../components/toast';
import { Heading1, Heading3, Heading4, RadioGroup, RadioButton, Section } from '../../components';

class ToastTest extends React.Component {
  handleActionChange = (event) => {
    this.setState({ action: event.target.value });
  };

  handleLabelChange = (event) => {
    this.setState({ label: event.target.value });
  };

  handleSnackbarClick = () => {
    this.setState({ active: false });
  };

  handleSnackbarTimeout = () => {
    this.setState({ active: false });
  };

  handleClick = () => {
    this.setState({ active: true });
  };

  handleTypeChange = (value) => {
    this.setState({ type: value });
  };

  state = {
    action: '',
    active: false,
    label: 'Toast is ready!',
    type: 'accept',
  };

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Toast</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <Heading3>Properties</Heading3>

            <Heading4>Type</Heading4>
            <RadioGroup name="type" value={this.state.type} onChange={this.handleTypeChange}>
              <RadioButton label="Accept" value="accept" />
              <RadioButton label="Cancel" value="cancel" />
              <RadioButton label="Warning" value="warning" />
            </RadioGroup>

            <Heading4>Label</Heading4>
            <p><input type="text" value={this.state.label} onChange={event => this.handleLabelChange(event)} /></p>

            <Heading4>Action</Heading4>
            <p><input type="text" value={this.state.action} onChange={event => this.handleActionChange(event)} /></p>
          </div>

          <div className="preview">
            <Heading3>Preview</Heading3>
            <Button label="Make a toast" onClick={this.handleClick} />
          </div>
        </div>

        <Toast
          action={this.state.action}
          active={this.state.active}
          label={this.state.label}
          timeout={3000}
          onClick={this.handleSnackbarClick}
          onTimeout={this.handleSnackbarTimeout}
          type={this.state.type}
        />
      </article>
    );
  }
}

export default ToastTest;
