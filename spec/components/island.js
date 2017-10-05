import React from 'react';
import { Heading1, Heading4, Island, RadioButton, RadioGroup, Section, TextBody } from '../../components';
import style from './island.css';

class IslandTest extends React.Component {
  state = {
    color: 'neutral',
    dark: false,
    size: 'medium',
  };

  handleColorChange = value => {
    this.setState({ color: value });
  };

  handleDarkChange = value => {
    this.setState({ dark: value });
  };

  handleSizeChange = value => {
    this.setState({ size: value });
  };

  render() {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Island</Heading1>
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

            <Heading4>Size</Heading4>
            <RadioGroup name="size" value={this.state.size} onChange={this.handleSizeChange}>
              <RadioButton label="Small" value="small" />
              <RadioButton label="Medium" value="medium" />
              <RadioButton label="Large" value="large" />
            </RadioGroup>
          </div>
          <div className="preview">
            <Island className={style.island} color={this.state.color} size={this.state.size} dark={this.state.dark}>
              <TextBody>I am the island content</TextBody>
            </Island>
          </div>
        </div>
      </article>
    );
  }
}

export default IslandTest;
