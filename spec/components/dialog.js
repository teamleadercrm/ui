import React from 'react';
import Dialog from '../../components/dialog';
import Button from '../../components/button';

class DialogTest extends React.Component {
  state = {
    active: false,
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  actions = [
    { label: 'Cancel', onClick: this.handleToggle },
    { label: 'Save', onClick: this.handleToggle },
  ];

  render () {
    return (
      <section>
        <h2>Dialog</h2>
        <Button label='Show my dialog' onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='My awesome dialog'
        >
          <p>Here you can add arbitrary content. hello</p>
        </Dialog>
      </section>
    );
  }
}

export default DialogTest;
