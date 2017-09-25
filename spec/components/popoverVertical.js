import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverVertical } from '../../components/popover/';
import { RadioGroup, RadioButton } from '../../components/radio';
import Button from '../../components/button';
import { Heading1, Heading3, Heading4, Section } from '../../components';

class PopoverTest extends React.Component {
  state = {
    active: false,
    backdrop: 'dark',
    direction: 'north',
    position: 'left',
    subtitle:'',
    title: 'My awesome Vertical Popover',
  };

  componentDidMount () {
    this.anchorEl = ReactDOM.findDOMNode(this.popoverToggleButton);
    this.forceUpdate();
  }

  handleBackdropChange = (value) => {
    this.setState({ backdrop: value });
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubtitleChange = (event) => {
    this.setState({ subtitle: event.target.value });
  };

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
    const { backdrop, direction, position } = this.state;

    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Vertical Popover</Heading1>
        </Section>
        <div className="component-spec">
          <div className="properties">
            <Heading3>Properties</Heading3>

            <Heading4>Backdrop</Heading4>
            <RadioGroup name="direction" value={backdrop} onChange={this.handleBackdropChange}>
              <RadioButton label="Dark" value="dark" />
              <RadioButton label="Transparent" value="" />
            </RadioGroup>

            <Heading4>Direction</Heading4>
            <RadioGroup name="direction" value={direction} onChange={this.handleDirectionChange}>
              <RadioButton label="North" value="north" />
              <RadioButton label="South" value="south" />
            </RadioGroup>

            <Heading4>Position</Heading4>
            <RadioGroup name="position" value={position} onChange={this.handlePositionChange}>
              <RadioButton label="Left" value="left" />
              <RadioButton label="Center" value="center" />
              <RadioButton label="Right" value="right" />
            </RadioGroup>

            <Heading4>Title</Heading4>
            <p><input type="text" value={this.state.title} onChange={event => this.handleTitleChange(event)} /></p>

            <Heading4>Subtitle</Heading4>
            <p>
              <input type="text" value={this.state.subtitle} onChange={event => this.handleSubtitleChange(event)} />
            </p>
          </div>

          <div className="preview">
            <Heading3>Preview</Heading3>
            <Button
              primary
              label="Show a vertical popover"
              onClick={this.handleToggle}
              ref={
                (button) => {
                  this.popoverToggleButton = button;
                }
              }
            />
          </div>
        </div>

        { this.anchorEl &&
          <PopoverVertical
            actions={this.actions}
            active={this.state.active}
            anchorEl={this.anchorEl}
            backdrop={this.state.backdrop}
            direction={this.state.direction}
            position={this.state.position}
            onCloseClick={this.handleToggle}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title={this.state.title}
            subtitle={this.state.subtitle}
          >
            <p>Here you can add popover content.</p>
            <div className="highlight">
              <p>Here you can highlight some content.</p>
            </div>
          </PopoverVertical>
        }
      </article>
    );
  }
}

export default PopoverTest;
