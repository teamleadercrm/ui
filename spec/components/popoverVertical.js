import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverVertical } from '../../components/popover/';
import Button from '../../components/button';

class PopoverTest extends React.Component {
  state = {
    active: false,
    direction: 'north',
    position: 'left',
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
    const { direction, position } = this.state;

    return (
      <section>
        <h2>Vertical Popover</h2>

        <Button
          primary
          style={{ 'marginLeft': '50%' }}
          label="Show a vertical popover"
          onClick={this.handleToggle}
          ref={
            (button) => {
              this.popoverToggleButton = button;
            }
          }
        />

        <h4>Direction</h4>
        <label>
          <input type="radio" onChange={() => this.setState({ direction: 'north' })} checked={direction === 'north'} />
          north
        </label>
        <label>
          <input type="radio" onChange={() => this.setState({ direction: 'south' })} checked={direction === 'south'} />
          south
        </label>

        <h4>Position</h4>
        <label>
          <input type="radio" onChange={() => this.setState({ position: 'left' })} checked={position === 'left'} />
          left
        </label>
        <label>
          <input type="radio" onChange={() => this.setState({ position: 'center' })} checked={position === 'center'} />
          center
        </label>
        <label>
          <input type="radio" onChange={() => this.setState({ position: 'right' })} checked={position === 'right'} />
          right
        </label>

        { this.anchorEl &&
          <PopoverVertical
            actions={this.actions}
            active={this.state.active}
            anchorEl={this.anchorEl}
            direction={this.state.direction}
            position={this.state.position}
            onCloseClick={this.handleToggle}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title="My awesome Vertical POPOVER"
            subtitle="with a beautiful subtitle"
          >
            <p>Here you can add popover content.</p>
            <div className="highlight">
              <p>Here you can highlight some content.</p>
            </div>
          </PopoverVertical>
        }
      </section>
    );
  }
}

export default PopoverTest;
