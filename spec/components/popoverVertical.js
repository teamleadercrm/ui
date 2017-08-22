import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverVertical } from '../../components/popover/';
import { RadioGroup, RadioButton } from '../../components/radio';
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

        <h3>Direction</h3>
        <RadioGroup name="direction" value={direction} onChange={this.handleDirectionChange}>
          <RadioButton label="North" value="north" />
          <RadioButton label="South" value="south" />
        </RadioGroup>

        <h3>Position</h3>
        <RadioGroup name="position" value={position} onChange={this.handlePositionChange}>
          <RadioButton label="Left" value="left" />
          <RadioButton label="Center" value="center" />
          <RadioButton label="Right" value="right" />
        </RadioGroup>

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
