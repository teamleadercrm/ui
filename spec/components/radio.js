import React from 'react';
import { RadioGroup, RadioButton } from '../../components/radio';

class RadioGroupTest extends React.Component {
  state = {
    stringValue: 'vvendetta',
    booleanValue: false,
  };

  handleStringChange = (value) => {
    console.log('Changed the string value!', { stringValue: value });
    this.setState({ stringValue: value });
  };

  handleBooleanChange = (value) => {
    console.log('Changed the boolean value!', { booleanValue: value });
    this.setState({ booleanValue: value });
  };

  handleFocus = () => {
    console.log('Focused V for a Vendetta');
  };

  handleBlur = () => {
    console.log('Blurred Watchmen');
  };

  render () {
    return (
      <article>
        <header>
          <h1>Radio Button</h1>
        </header>

        <div className="component-spec">
          <div className="preview">
            <h3>Preview</h3>
            <h4>String example</h4>
            <RadioGroup name="stringValue" value={this.state.stringValue} onChange={this.handleStringChange}>
              <RadioButton label="The Walking Dead" value="thewalkingdead" />
              <RadioButton label="From Hell" value="fromhell" disabled />
              <RadioButton label="V for a Vendetta" value="vvendetta" onFocus={this.handleFocus} />
              <RadioButton label="Watchmen" value="watchmen" onBlur={this.handleBlur} />
            </RadioGroup>

            <h4>Boolean example</h4>
            <RadioGroup name="booleanValue" value={this.state.booleanValue} onChange={this.handleBooleanChange}>
              <RadioButton label="True" value />
              <RadioButton label="False" value={false} />
            </RadioGroup>
          </div>
        </div>
      </article>
    );
  }
}

export default RadioGroupTest;
