import React from 'react';
import { RadioGroup, RadioButton } from '../../components/radio';
import Toggle from '../../components/toggle';

class ToggleTest extends React.Component {
  constructor () {
    super(...arguments);
    this.state = {
      checked: false,
      color: null,
      size: null,
    };
    this.handleToggle = ::this.handleToggle;
    this.handleColorChange = ::this.handleColorChange;
    this.handleSizeChange = ::this.handleSizeChange;
  };

  handleToggle (checked, event) {
    this.setState({
      checked,
    });
    console.log(event);
  }

  handleColorChange = (value) => {
    this.setState({ color: value });
  };

  handleSizeChange = (value) => {
    this.setState({ size: value });
  };

  render () {
    const { checked, color, size } = this.state;

    const props = {
      [color]: true,
      [size]: true,
    };

    return (
      <article>
        <header>
          <h1>Toggle</h1>
        </header>

        <div className="component-spec">
          <div className="properties">
            <h3>Properties</h3>
              <h4>Size</h4>
              <RadioGroup name="size" value={size} onChange={this.handleSizeChange}>
                <RadioButton label="normal" value="normal" />
                <RadioButton label="small" value="small" />
              </RadioGroup>

              <h4>Color</h4>
              <RadioGroup name="color" value={color} onChange={this.handleColorChange}>
                <RadioButton label="default" value="default" />
                <RadioButton label="teal" value="teal" />
                <RadioButton label="mint" value="mint" />
                <RadioButton label="violet" value="violet" />
                <RadioButton label="ruby" value="ruby" />
                <RadioButton label="gold" value="gold" />
                <RadioButton label="aqua" value="aqua" />
              </RadioGroup>
          </div>

          <div className="preview">
            <h3>Preview</h3>
            <Toggle
              checked={checked}
              onChange={this.handleToggle}
              {...props}
             />
          </div>
        </div>
      </article>
    );
  }
}

export default ToggleTest;
