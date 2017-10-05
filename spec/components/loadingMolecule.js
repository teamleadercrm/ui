import React from 'react';
import { Heading1, Heading3, Heading4, LoadingMolecule, RadioGroup, RadioButton, Section } from '../../components';
import theme from './loadingMolecule.css';

class LoadingMoleculeTest extends React.Component {
  state = {
    tint: 'blackandwhite',
    startColor: '#BABABA',
    stopColor: '#DADADA',
    type: 'normal',
  };

  handleTypeChange = value => {
    this.setState({ type: value });
  };

  handleTintChange = value => {
    if (value === 'color') {
      this.setState({
        tint: 'color',
        startColor: '#00ACA9',
        stopColor: '#1F7F79',
      });
    } else {
      this.setState({
        tint: 'blackandwhite',
        startColor: '#BABABA',
        stopColor: '#DADADA',
      });
    }
  };

  render() {
    const basePath = window.location.pathname + window.location.search;

    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Loading Molecules</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <Heading3>Properties</Heading3>

            <Heading4>Type</Heading4>
            <RadioGroup name="type" value={this.state.type} onChange={this.handleTypeChange}>
              <RadioButton label="Small" value="small" />
              <RadioButton label="Normal" value="normal" />
              <RadioButton label="Large" value="large" />
            </RadioGroup>

            <Heading4>Tint</Heading4>
            <RadioGroup name="tint" value={this.state.tint} onChange={this.handleTintChange}>
              <RadioButton label="Black/White" value="blackandwhite" />
              <RadioButton label="Color" value="color" />
            </RadioGroup>
          </div>

          <div className="preview">
            <Heading3>Preview</Heading3>

            <div className={theme['loading-molecule-row']}>
              <div className={theme['loading-molecule-container']}>
                <LoadingMolecule
                  basePath={basePath}
                  type={this.state.type}
                  startColor={this.state.startColor}
                  stopColor={this.state.stopColor}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default LoadingMoleculeTest;
