import React from 'react';
import { Button, IconButton } from '../../components';

class ButtonTest extends React.Component {
  state = {
    icon: 'search',
    text: 'button text',
  };

  handleIconChange = (event) => {
    this.setState({ icon: event.target.value });
  };

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render () {
    return (
      <article>
        <header>
          <h1>Buttons</h1>
        </header>
        <h2>Primary</h2>
        <div className="component-spec">
          <div className="properties">
            <h3>Properties</h3>
            <h4>Text</h4>
            <p><input type="text" value={this.state.text} onChange={event => this.handleTextChange(event)} /></p>

            <h4>Icon</h4>
            <p><input type="text" value={this.state.icon} onChange={event => this.handleIconChange(event)} /></p>
          </div>
          <div className="preview">
            <h3>Preview</h3>
            <p>
              <Button primary icon={this.state.icon}>{ this.state.text }</Button>
            </p>
            <p>
              <Button primary processing icon={this.state.icon}>{ this.state.text }</Button>
            </p>
            <p>
              <Button primary disabled icon={this.state.icon}>{ this.state.text }</Button>
            </p>
          </div>
        </div>
        <h2>Secondary</h2>
        <div className="component-spec">
          <div className="properties">
            <h3>Properties</h3>
            <h4>Text</h4>
            <p><input type="text" value={this.state.text} onChange={event => this.handleTextChange(event)} /></p>

            <h4>Icon</h4>
            <p><input type="text" value={this.state.icon} onChange={event => this.handleIconChange(event)} /></p>
          </div>
          <div className="preview">
            <h3>Preview</h3>
            <p>
              <Button icon={this.state.icon}>{ this.state.text }</Button>
            </p>
            <p>
              <Button bordered icon={this.state.icon}>{ this.state.text }</Button>
            </p>
            <p>
              <Button processing icon={this.state.icon}>{ this.state.text }</Button>
            </p>
            <p>
              <Button bordered processing icon={this.state.icon}>{ this.state.text }</Button>
            </p>
            <p>
              <Button disabled icon={this.state.icon}>{ this.state.text }</Button>
            </p>
            <p>
              <Button bordered disabled icon={this.state.icon}>{ this.state.text }</Button>
            </p>
          </div>
        </div>
        <h2>Icon only</h2>
        <div className="component-spec">
          <div className="properties">
            <h3>Properties</h3>
            <h4>Icon</h4>
            <p><input type="text" value={this.state.icon} onChange={event => this.handleIconChange(event)} /></p>
          </div>
          <div className="preview">
            <h3>Preview</h3>
            <p><IconButton icon={this.state.icon} /></p>
          </div>
        </div>
      </article>
    );
  }
}

export default ButtonTest;
