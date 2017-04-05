import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverHorizontal } from '../../components/popover/';
import Button from '../../components/button';

class PopoverHorizontalTest extends React.Component {
  state = {
    active: false,
    direction: 'west',
    position: 'middle',
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
        <h2>Horizontal Popover</h2>

        <Button
          primary
          style={{ 'marginLeft': '50%' }}
          label="Show my Horizontal"
          onClick={this.handleToggle}
          ref={
            (button) => {
              this.popoverToggleButton = button;
            }
          }
        />

        <h4>Direction</h4>
        <label>
          <input type="radio" onChange={() => this.setState({ direction: 'west' })} checked={direction === 'west'} />
          west
        </label>
        <label>
          <input type="radio" onChange={() => this.setState({ direction: 'east' })} checked={direction === 'east'} />
          east
        </label>

        <h4>Position</h4>
        <label>
          <input type="radio" onChange={() => this.setState({ position: 'top' })} checked={position === 'top'} />
          top
        </label>
        <label>
          <input type="radio" onChange={() => this.setState({ position: 'middle' })} checked={position === 'middle'} />
          middle
        </label>
        <label>
          <input type="radio" onChange={() => this.setState({ position: 'bottom' })} checked={position === 'bottom'} />
          bottom
        </label>

        { this.anchorEl &&
          <PopoverHorizontal
            actions={this.actions}
            active={this.state.active}
            anchorEl={this.anchorEl}
            direction={this.state.direction}
            position={this.state.position}
            onCloseClick={this.handleToggle}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title="My awesome Horizontal POPOVER"
          >
            <p>Here you can add popover content.</p>
            <div className="highlight">
              <p>Here you can highlight some content.</p>
            </div>
          </PopoverHorizontal>
        }
        <hr />
      </section>
    );
  }
}

export default PopoverHorizontalTest;
