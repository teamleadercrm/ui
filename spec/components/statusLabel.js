import React from 'react';
import { Heading1, Heading2, Heading3, Heading4, TextBody, TextSmall, Section, StatusLabel } from '../../components';

class StatusLabelTest extends React.Component {

  render () {
    return (
      <article>
        <Section neutral dark>
          <Heading1>Status labels</Heading1>
        </Section>

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
              <StatusLabel mint size="small">Mint</StatusLabel>
              <StatusLabel teal size="small">Teal</StatusLabel>
              <StatusLabel aqua size="small">Aqua</StatusLabel>
              <StatusLabel violet size="small">Violet</StatusLabel>
              <StatusLabel gold size="small">Gold</StatusLabel>
              <StatusLabel ruby size="small">Ruby</StatusLabel>
            </p>

            <Heading1>
              I'm a Heading 1 with status label <StatusLabel mint>Mint</StatusLabel>
            </Heading1>

            <Heading2>
              I'm a Heading 2 with status label <StatusLabel teal size="small">Teal</StatusLabel>
            </Heading2>

            <Heading3>
              I'm a Heading 3 with status label <StatusLabel aqua size="small">Aqua</StatusLabel>
            </Heading3>

            <Heading4>
              I'm a Heading 4 with status label <StatusLabel violet size="small">Violet</StatusLabel>
            </Heading4>

            <TextBody>
              I'm body text with status label <StatusLabel gold size="small">Gold</StatusLabel>
            </TextBody>

            <TextSmall>
              I'm small text with status label <StatusLabel ruby size="small">Ruby</StatusLabel>
            </TextSmall>
          </div>
        </div>
      </article>
    );
  }
}

export default StatusLabelTest;
