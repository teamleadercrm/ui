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
    level: 'secondary',
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

  handleLevelChange = (value) => {
    let previewBackgroundColor = this.state.previewBackgroundColor;

    if (value === 'outline') {
      previewBackgroundColor = '#f0f0ff';
    } else {
      previewBackgroundColor = '#fff';
    }

    this.setState({
      level: value,
      inverse: false,
      previewBackgroundColor,
    });
  };

  handleInverseChange = (value) => {
    this.setState({
      inverse: value,
      previewBackgroundColor: value ? '#00b3b3' : this.state.level === 'outline' ? '#f0f0ff' : '#fff',
    });
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
        <Section color="neutral" dark>
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
            <RadioGroup name="level" value={this.state.level} onChange={this.handleLevelChange}>
              <RadioButton label="Outline" value="outline" />
              <RadioButton label="Secondary" value="secondary" />
              <RadioButton label="Primary" value="primary" />
              <RadioButton label="Destructive" value="destructive" />
            </RadioGroup>

            <Heading4>Inverse?</Heading4>
            <RadioGroup
              disabled={this.state.level !== 'outline'}
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
                level={this.state.level}
                icon={<Icon />}
                inverse={this.state.inverse}
                size={this.state.size}
                disabled={this.state.disabled}
                processing={this.state.processing}
              />
              <Button
                level={this.state.level}
                disabled={this.state.disabled}
                icon={<Icon />}
                inverse={this.state.inverse}
                processing={this.state.processing}
                size={this.state.size}
              >
                {this.state.text}
              </Button>
              <Button
                level={this.state.level}
                disabled={this.state.disabled}
                icon={this.state.icon}
                inverse={this.state.inverse}
                processing={this.state.processing}
                size={this.state.size}
              >
                {this.state.text}
              </Button>
              <Button
                level={this.state.level}
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
