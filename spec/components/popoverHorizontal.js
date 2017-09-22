import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverHorizontal } from '../../components/popover/';
import { RadioGroup, RadioButton } from '../../components/radio';
import Button from '../../components/button';
import { Heading1, Heading3, Heading4, Section } from '../../components';

class PopoverHorizontalTest extends React.Component {
  state = {
    active: false,
    backdrop: 'dark',
    direction: 'west',
    position: 'middle',
    subtitle:'',
    title: 'My awesome Horizontal Popover',
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
    { label: 'Save', onClick: this.handleToggle, color: 'mint' },
  ];

  render () {
    const { backdrop, direction, position } = this.state;

    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Horizontal Popover</Heading1>
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
              <RadioButton label="West" value="west" />
              <RadioButton label="East" value="east" />
            </RadioGroup>

            <Heading4>Position</Heading4>
            <RadioGroup name="position" value={position} onChange={this.handlePositionChange}>
              <RadioButton label="Top" value="top" />
              <RadioButton label="Middle" value="middle" />
              <RadioButton label="Bottom" value="bottom" />
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
              label="Show a horizontal popover"
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
          <PopoverHorizontal
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
          </PopoverHorizontal>
        }
      </article>
    );
  }
}

export default PopoverHorizontalTest;
