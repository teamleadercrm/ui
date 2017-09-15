import React from 'react';
import { Button, IconButton, Heading1, Heading2, Heading3, Heading4, Section } from '../../components';

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
        <Section neutral dark>
          <Heading1>Buttons</Heading1>
        </Section>
        <Heading2>Primary</Heading2>
        <div className="component-spec">
          <div className="properties">
            <Heading3>Properties</Heading3>
            <Heading4>Text</Heading4>
            <p><input type="text" value={this.state.text} onChange={event => this.handleTextChange(event)} /></p>

            <Heading4>Icon</Heading4>
            <p><input type="text" value={this.state.icon} onChange={event => this.handleIconChange(event)} /></p>
          </div>
          <div className="preview">
            <Heading3>Preview</Heading3>
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
        <Heading2>Secondary</Heading2>
        <div className="component-spec">
          <div className="properties">
            <Heading3>Properties</Heading3>
            <Heading4>Text</Heading4>
            <p><input type="text" value={this.state.text} onChange={event => this.handleTextChange(event)} /></p>

            <Heading4>Icon</Heading4>
            <p><input type="text" value={this.state.icon} onChange={event => this.handleIconChange(event)} /></p>
          </div>
          <div className="preview">
            <Heading3>Preview</Heading3>
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
        <Heading2>Icon only</Heading2>
        <div className="component-spec">
          <div className="properties">
            <Heading3>Properties</Heading3>
            <Heading4>Icon</Heading4>
            <p><input type="text" value={this.state.icon} onChange={event => this.handleIconChange(event)} /></p>
          </div>
          <div className="preview">
            <Heading3>Preview</Heading3>
            <p><IconButton icon={this.state.icon} /></p>
          </div>
        </div>
      </article>
    );
  }
}

export default ButtonTest;
