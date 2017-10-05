import React from 'react';
import Dialog from '../../components/dialog';
import Button from '../../components/button';
import { Heading1, Heading3, Heading4, Section } from '../../components';

class DialogTest extends React.Component {
  state = {
    active: false,
    title: 'My awesome dialog',
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  actions = [
    { label: 'Cancel', onClick: this.handleToggle },
    { label: 'Save', onClick: this.handleToggle, level: 'primary' },
  ];

  render() {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Dialog</Heading1>
        </Section>
        <div className="component-spec">
          <div className="properties">
            <Heading3>Properties</Heading3>
            <Heading4>Title</Heading4>
            <p>
              <input type="text" value={this.state.title} onChange={event => this.handleTitleChange(event)} />
            </p>
          </div>
          <div className="preview">
            <Heading3>Preview</Heading3>
            <Button label="Show my dialog" onClick={this.handleToggle} />
          </div>
        </div>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onCloseClick={this.handleToggle}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title={this.state.title}
        >
          <p>Here you can add arbitrary content.</p>
        </Dialog>
      </article>
    );
  }
}

export default DialogTest;
