import React, { PureComponent } from 'react';
import {
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Message,
  RadioButton,
  RadioGroup,
  Section,
  TextBody,
} from '../../components';
// import style from './message.css';

class MessageTest extends PureComponent {
  state = {
    color: 'neutral',
    dark: false,
    active: true,
  };

  constructor () {
    super(...arguments);

    this.handleCloseClick = ::this.handleCloseClick;
    this.handleResetClick = ::this.handleResetClick;
  }

  handleCloseClick () {
    this.setState({ active: false });
  }

  handleResetClick () {
    this.setState({ active: true });
  }

  handleColorChange = (value) => {
    this.setState({ color: value });
  };

  handleDarkChange = (value) => {
    this.setState({ dark: value });
  };

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Messages</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <Heading4>Color</Heading4>
            <RadioGroup name="color" value={this.state.color} onChange={this.handleColorChange}>
              <RadioButton label="Aqua" value="aqua" />
              <RadioButton label="Gold" value="gold" />
              <RadioButton label="Neutral" value="neutral" />
              <RadioButton label="Mint" value="mint" />
              <RadioButton label="Ruby" value="ruby" />
              <RadioButton label="Violet" value="violet" />
              <RadioButton label="White" value="white" />
            </RadioGroup>

            <Heading4>Dark</Heading4>
            <RadioGroup
              disabled={this.state.color !== 'white' && this.state.color !== 'neutral'}
              name="dark"
              value={this.state.dark}
              onChange={this.handleDarkChange}
            >
              <RadioButton label="Yes" value />
              <RadioButton label="No" value={false} />
            </RadioGroup>
          </div>
          <div className="preview">
            <Heading3>Preview</Heading3>
            { this.state.active
              ? (
                <Message
                  color={this.state.color}
                  dark={this.state.dark}
                  closeable
                  onCloseClick={this.handleCloseClick}
                >
                  <Heading2>I am the message title</Heading2>
                  <TextBody>
                    Maecenas convallis justo ac dolor ultricies, ut sagittis ipsum posuere.
                    Duis hendrerit sem <a href="#">I'm a link</a> sit amet tristique dapibus.
                    In turpis mauris, blandit vel venenatis et, tincidun.
                  </TextBody>
                  <ButtonGroup>
                    <Button>Cancel</Button>
                    <Button color="mint">Got it</Button>
                    <a href="#">I'm a link</a>
                  </ButtonGroup>
                </Message>
              )
              : (
                <Button onMouseUp={this.handleResetClick}>Show message</Button>
              )
            }
          </div>
        </div>
      </article>
    );
  }
}

export default MessageTest;
