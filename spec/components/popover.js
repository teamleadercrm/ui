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
    { label: 'Save', onClick: this.handleToggle, primary: true },
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
            onCloseClick={this.handleToggle}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title='My awesome POPOVER dialog'
          >
            <p>Here you can add popover content.</p>
            <div className='highlight'>
              <p>Here you can highlight some content.</p>
            </div>
          </Popover>
        }
      </section>
    );
  }
}

export default PopoverTest;
