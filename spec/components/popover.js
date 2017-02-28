import React from 'react';
import ReactDOM from 'react-dom';
import Popover from '../../components/popover';
import Button from '../../components/button';

class PopoverTest extends React.Component {
  state = {
    active: false,
  };

  componentDidMount () {
    this.anchorEl = ReactDOM.findDOMNode(this.popoverToggleButton);
    this.forceUpdate();
  }

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
        <h2>Popover</h2>
        <Button label='Show my popover' onClick={this.handleToggle} ref={(button) => {
          this.popoverToggleButton = button;
        }} />

        { this.anchorEl &&
          <Popover
            actions={this.actions}
            active={this.state.active}
            anchorEl={this.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title='My awesome dialog'
          >
            <p>Here you can add popover content.</p>
          </Popover>
        }
      </section>
    );
  }
}

export default PopoverTest;
