import React, { PureComponent } from 'react';
import cx from 'classnames';
import {
  Avatar,
  AvatarStack,
  Counter,
  Heading1,
  Heading2,
  Heading4,
  RadioButton,
  RadioGroup,
  Section,
} from '../../components';
import { avatars, previewBackgroundColors } from '../constants';
import s from '../styles.css';

class AvatarTest extends PureComponent {
  state = {
    direction: 'horizontal',
    displayMax: 3,
    inverse: false,
    previewBackgroundColor: 'neutral',
    size: 'medium',
  };

  handleSizeChange = (value) => {
    this.setState({ size: value });
  };

  handleDirectionChange = (value) => {
    this.setState({ direction: value });
  };

  handleDisplayMaxChange = (event) => {
    this.setState({ displayMax: parseInt(event.target.value) });
  };

  handleInverseChange = (value) => {
    this.setState({ inverse: value });
  };

  handlePreviewBackgroundChange = (event) => {
    if (event.target.value === 'tealdark') {
      this.setState({ previewBackgroundColor: event.target.value, inverse: true });
    } else {
      this.setState({ previewBackgroundColor: event.target.value, inverse: false });
    }
  };

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Avatars</Heading1>
          <label>Preview background color: </label>
          <select value={this.state.previewBackgroundColor} onChange={this.handlePreviewBackgroundChange}>
            {
              previewBackgroundColors.map((color, index) => {
                return <option key={`color${index}`} value={color.key}>{color.label}</option>;
              })
            }
          </select>
        </Section>

        <div className={s['component-spec']}>
          <div className={s['properties']}>
            <Heading2>AvatarGroup</Heading2>
            <Heading4>Direction</Heading4>

            <RadioGroup name="direction" value={this.state.direction} onChange={this.handleDirectionChange}>
              <RadioButton label="Horizontal" value="horizontal" />
              <RadioButton label="Vertical" value="vertical" />
            </RadioGroup>

            <Heading4>Max items to display</Heading4>
            <select name="displayMax" value={this.state.displayMax} onChange={this.handleDisplayMaxChange}>
              {
                avatars.map((avatar, index) => <option key={`option${index}`} value={index + 1}>{index + 1}</option>)
              }
            </select>

            <Heading4>Inverse color</Heading4>
            <RadioGroup disabled name="inverse" value={this.state.inverse} onChange={this.handleInverseChange}>
              <RadioButton label="Yes" value />
              <RadioButton label="No" value={false} />
            </RadioGroup>

            <Heading2>Avatar</Heading2>
            <Heading4>Size</Heading4>
            <RadioGroup name="size" value={this.state.size} onChange={this.handleSizeChange}>
              <RadioButton label="Tiny" value="tiny" />
              <RadioButton label="Small" value="small" />
              <RadioButton label="Medium" value="medium" />
            </RadioGroup>
          </div>
          <div className={cx(s['preview'], s[this.state.previewBackgroundColor])}>
            <p>
              <Avatar
                borderColor={this.state.previewBackgroundColor}
                image={avatars[0].image}
                size={this.state.size}
              />
            </p>

            <p>
              <Avatar
                borderColor={this.state.previewBackgroundColor}
                counter={
                  <Counter
                    borderColor={this.state.previewBackgroundColor}
                    color="ruby"
                  />
                }
                image={avatars[0].image}
                size={this.state.size}
              />
            </p>

            <p>
              <Avatar
                borderColor={this.state.previewBackgroundColor}
                counter={
                  <Counter
                    borderColor={this.state.previewBackgroundColor}
                    color="ruby"
                    count={avatars[0].count}
                    maxCount={avatars[0].maxCount}
                  />
                }
                image={avatars[0].image}
                size={this.state.size}
              />
            </p>

            <p>
              <AvatarStack
                direction={this.state.direction}
                displayMax={this.state.displayMax}
                inverse={this.state.inverse}
                onOverflowClick={() => console.log('clicked on AvatarStack overflow')}
                size={this.state.size}
            >
                {
                avatars.map(({ image, count, color, dark, maxCount }, index) => (
                  <Avatar
                    borderColor={this.state.previewBackgroundColor}
                    counter={
                      <Counter
                        borderColor={this.state.previewBackgroundColor}
                        color={color}
                        count={count}
                        dark={dark}
                        maxCount={maxCount}
                        size="small"
                      />
                    }
                    key={index}
                    image={image}
                    size={this.state.size}
                  />
                ))
              }
              </AvatarStack>
            </p>

            <p>
              <AvatarStack
                direction={this.state.direction}
                displayMax={this.state.displayMax}
                inverse={this.state.inverse}
                onOverflowClick={() => console.log('clicked on AvatarStack overflow')}
                size={this.state.size}
            >
                {
                avatars.map(({ image, color, dark }, index) => (
                  <Avatar
                    borderColor={this.state.previewBackgroundColor}
                    counter={
                      <Counter
                        borderColor={this.state.previewBackgroundColor}
                        color={color}
                        dark={dark}
                        size="medium"
                      />
                    }
                    key={index}
                    image={image}
                    size={this.state.size}
                  />
                ))
              }
              </AvatarStack>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default AvatarTest;
