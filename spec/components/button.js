import React, { PureComponent } from 'react';
import { IconAddMediumOutline, IconAddSmallOutline } from '@teamleader/ui-icons';
import {
  Button,
  ButtonGroup,
  IconButton,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  RadioGroup,
  RadioButton,
  Section,
} from '../../components';

class ButtonTest extends PureComponent {
  state = {
    previewBackgroundColor: '#fff',
    color: 'neutral',
    disabled: false,
    inverse: false,
    processing: false,
    segmented: false,
    size: 'medium',
    text: 'Button',
  };

  handleDisabledChange = (value) => {
    this.setState({ disabled: value });
  };

  handleProcessingChange = (value) => {
    this.setState({ processing: value });
  };

  handleColorChange = (value) => {
    let previewBackgroundColor = this.state.previewBackgroundColor;

    if (value === 'outline') {
      previewBackgroundColor = '#f0f0ff';
    } else {
      previewBackgroundColor = '#fff';
    }

    this.setState({ color: value, inverse: false, previewBackgroundColor });
  };

  handleInverseChange = (value) => {
    let previewBackgroundColor = this.state.previewBackgroundColor;

    if (value) {
      previewBackgroundColor = '#00b3b3';
    } else if (this.state.color === 'outline') {
      previewBackgroundColor = '#f0f0ff';
    } else {
      previewBackgroundColor = '#fff';
    }

    this.setState({ inverse: value, previewBackgroundColor });
  };

  handleSizeChange = (value) => {
    this.setState({ size: value });
  };

  handleSegmentedChange = (value) => {
    this.setState({ segmented: value });
  };

  render () {
    const Icon = this.state.size === 'small' ? IconAddSmallOutline : IconAddMediumOutline;
    return (
      <article>
        <Section neutral dark>
          <Heading1>Buttons</Heading1>
        </Section>
        <div className="component-spec">
          <div className="properties">
            <Heading2>ButtonGroup</Heading2>
            <Heading4>Segmented</Heading4>

            <RadioGroup name="segmented" value={this.state.segmented} onChange={this.handleSegmentedChange}>
              <RadioButton label="Yes" value />
              <RadioButton label="No" value={false} />
            </RadioGroup>

            <Heading2>Button</Heading2>

            <Heading4>Disabled</Heading4>
            <RadioGroup
              disabled={this.state.processing}
              name="disabled"
              value={this.state.disabled}
              onChange={this.handleDisabledChange}
            >
              <RadioButton label="Yes" value />
              <RadioButton label="No" value={false} />
            </RadioGroup>

            <Heading4>Processing</Heading4>
            <RadioGroup
              disabled={this.state.disabled}
              name="processing"
              value={this.state.processing}
              onChange={this.handleProcessingChange}
            >
              <RadioButton label="Yes" value />
              <RadioButton label="No" value={false} />
            </RadioGroup>

            <Heading4>Color</Heading4>
            <RadioGroup name="color" value={this.state.color} onChange={this.handleColorChange}>
              <RadioButton label="Outline" value="outline" />
              <RadioButton label="Neutral" value="neutral" />
              <RadioButton label="Mint" value="mint" />
              <RadioButton label="Ruby" value="ruby" />
            </RadioGroup>

            <Heading4>Inverse?</Heading4>
            <RadioGroup
              disabled={this.state.color !== 'outline'}
              name="inverse"
              value={this.state.inverse}
              onChange={this.handleInverseChange}
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
          <div className="preview" style={{ backgroundColor: this.state.previewBackgroundColor }}>
            <Heading3>Preview</Heading3>
            <ButtonGroup segmented={this.state.segmented}>
              <Button
                color={this.state.color}
                icon={<Icon />}
                inverse={this.state.inverse}
                size={this.state.size}
                disabled={this.state.disabled}
                processing={this.state.processing}
              />
              <Button
                color={this.state.color}
                disabled={this.state.disabled}
                icon={<Icon />}
                inverse={this.state.inverse}
                processing={this.state.processing}
                size={this.state.size}
              >
                {this.state.text}
              </Button>
              <Button
                color={this.state.color}
                disabled={this.state.disabled}
                icon={this.state.icon}
                inverse={this.state.inverse}
                processing={this.state.processing}
                size={this.state.size}
              >
                {this.state.text}
              </Button>
              <Button
                color={this.state.color}
                disabled={this.state.disabled}
                icon={<Icon />}
                iconPlacement="right"
                inverse={this.state.inverse}
                processing={this.state.processing}
                size={this.state.size}
              >
                {this.state.text}
              </Button>
            </ButtonGroup>
            <p>
              <IconButton
                disabled={this.state.disabled}
                icon={<Icon />}
                inverse={this.state.inverse}
                size={this.state.size}
              />
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default ButtonTest;
