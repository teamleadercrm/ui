import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverHorizontal } from '../../components/popover/';
import { RadioGroup, RadioButton } from '../../components/radio';
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

  handleDirectionChange = (value) => {
    this.setState({ direction: value });
  };

  handlePositionChange = (value) => {
    this.setState({ position: value });
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

        <h3>Direction</h3>
        <RadioGroup name="direction" value={direction} onChange={this.handleDirectionChange}>
          <RadioButton label="West" value="west" />
          <RadioButton label="East" value="east" />
        </RadioGroup>

        <h3>Position</h3>
        <RadioGroup name="position" value={position} onChange={this.handlePositionChange}>
          <RadioButton label="Top" value="top" />
          <RadioButton label="Middle" value="middle" />
          <RadioButton label="Bottom" value="bottom" />
        </RadioGroup>

        <Button
          primary
          style={{ 'marginLeft': '50%' }}
          label="Show a horizontal popover"
          onClick={this.handleToggle}
          ref={
            (button) => {
              this.popoverToggleButton = button;
            }
          }
        />

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
      </section>
    );
  }
}

export default PopoverHorizontalTest;
