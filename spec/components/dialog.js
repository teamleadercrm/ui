import React from 'react';
import Dialog from '../../components/dialog';
import Button from '../../components/button';

class DialogTest extends React.Component {
  state = {
    active: false,
    title: 'My awesome dialog',
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  actions = [
    { label: 'Cancel', onClick: this.handleToggle },
    { label: 'Save', onClick: this.handleToggle, primary: true },
  ];

  render () {
    return (
      <article>
        <header>
          <h1>Dialog</h1>
        </header>
        <div className="component-spec">
          <div className="properties">
            <h3>Properties</h3>
            <h4>Title</h4>
            <p><input type="text" value={this.state.title} onChange={event => this.handleTitleChange(event)} /></p>
          </div>
          <div className="preview">
            <h3>Preview</h3>
            <Button primary label="Show my dialog" onClick={this.handleToggle} />
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
