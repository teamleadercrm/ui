import React from 'react';
import { Heading1, Heading2, Heading3, Heading4, TextBody, TextSmall, StatusLabel } from '../../components';

class StatusLabelTest extends React.Component {

  render () {
    return (
      <article>
        <header>
          <h1>Status labels</h1>
        </header>

        <div className="component-spec">
          <div className="properties">
            <p>
              <StatusLabel mint>Mint</StatusLabel>
              <StatusLabel teal>Teal</StatusLabel>
              <StatusLabel aqua>Aqua</StatusLabel>
              <StatusLabel violet>Violet</StatusLabel>
              <StatusLabel gold>Gold</StatusLabel>
              <StatusLabel ruby>Ruby</StatusLabel>
            </p>
            <p>
              <StatusLabel mint small>Mint</StatusLabel>
              <StatusLabel teal small>Teal</StatusLabel>
              <StatusLabel aqua small>Aqua</StatusLabel>
              <StatusLabel violet small>Violet</StatusLabel>
              <StatusLabel gold small>Gold</StatusLabel>
              <StatusLabel ruby small>Ruby</StatusLabel>
            </p>

            <Heading1>
              I'm a Heading 1 with status label <StatusLabel mint>Mint</StatusLabel>
            </Heading1>

            <Heading2>
              I'm a Heading 2 with status label <StatusLabel teal small>Teal</StatusLabel>
            </Heading2>

            <Heading3>
              I'm a Heading 3 with status label <StatusLabel aqua small>Aqua</StatusLabel>
            </Heading3>

            <Heading4>
              I'm a Heading 4 with status label <StatusLabel violet small>Violet</StatusLabel>
            </Heading4>

            <TextBody>
              I'm body text with status label <StatusLabel gold small>Gold</StatusLabel>
            </TextBody>

            <TextSmall>
              I'm small text with status label <StatusLabel ruby small>Ruby</StatusLabel>
            </TextSmall>
          </div>
        </div>
      </article>
    );
  }
}

export default StatusLabelTest;
