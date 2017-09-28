import React from 'react';
import { Heading1, Heading2, Heading3, Heading4, TextBody, TextSmall, Section, StatusLabel } from '../../components';
import s from '../styles.css';

class StatusLabelTest extends React.Component {

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Status labels</Heading1>
        </Section>

        <div className={s['component-spec']}>
          <div className={s['properties']}>
            <p>
              <StatusLabel color="neutral">Neutral</StatusLabel>
              <StatusLabel color="mint">Mint</StatusLabel>
              <StatusLabel color="aqua">Aqua</StatusLabel>
              <StatusLabel color="violet">Violet</StatusLabel>
              <StatusLabel color="gold">Gold</StatusLabel>
              <StatusLabel color="ruby">Ruby</StatusLabel>
            </p>
            <p>
              <StatusLabel color="neutral" size="small">Neutral</StatusLabel>
              <StatusLabel color="mint" size="small">Mint</StatusLabel>
              <StatusLabel color="aqua" size="small">Aqua</StatusLabel>
              <StatusLabel color="violet" size="small">Violet</StatusLabel>
              <StatusLabel color="gold" size="small">Gold</StatusLabel>
              <StatusLabel color="ruby" size="small">Ruby</StatusLabel>
            </p>

            <Heading1>
              I'm a Heading 1 with status label <StatusLabel color="neutral">Mint</StatusLabel>
            </Heading1>

            <Heading2>
              I'm a Heading 2 with status label <StatusLabel color="mint" size="small">Teal</StatusLabel>
            </Heading2>

            <Heading3>
              I'm a Heading 3 with status label <StatusLabel color="aqua" size="small">Aqua</StatusLabel>
            </Heading3>

            <Heading4>
              I'm a Heading 4 with status label <StatusLabel color="violet" size="small">Violet</StatusLabel>
            </Heading4>

            <TextBody>
              I'm body text with status label <StatusLabel color="gold" size="small">Gold</StatusLabel>
            </TextBody>

            <TextSmall>
              I'm small text with status label <StatusLabel color="ruby" size="small">Ruby</StatusLabel>
            </TextSmall>
          </div>
        </div>
      </article>
    );
  }
}

export default StatusLabelTest;
