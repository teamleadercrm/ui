import React, { PureComponent } from 'react';
import {
  Avatar,
  Heading1,
  Heading4,
  RadioButton,
  RadioGroup,
  Section,
} from '../../components';

class AvatarTest extends PureComponent {
  state = {
    image: 'http://lorempixel.com/48/48/sports',
    size: 'medium',
  };

  handleSizeChange = (value) => {
    this.setState({ size: value });
  };

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Avatars</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <Heading4>Size</Heading4>
            <RadioGroup name="size" value={this.state.size} onChange={this.handleSizeChange}>
              <RadioButton label="Small" value="small" />
              <RadioButton label="Medium" value="medium" />
            </RadioGroup>
          </div>
          <div className="preview">
            <p>
              <Avatar
                image={this.state.image}
                size={this.state.size}
              />
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default AvatarTest;
