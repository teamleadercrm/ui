import React from 'react';
import { Heading1, Heading3, Island, Section } from '../../components';
import style from './section.css';

class IslandTest extends React.Component {

  render () {
    return (
      <article>
        <Section neutral dark>
          <Heading1>Island</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <Heading3>Neutrals</Heading3>
            <Island className={style.section} color="white">White normal</Island>
            <Island className={style.section} color="white" dark>White dark</Island>
            <Island className={style.section} color="neutral">Grey normal</Island>
            <Island className={style.section} color="neutral" dark>Grey dark</Island>

            <Heading3>Color</Heading3>
            <Island className={style.section} color="mint">Mint</Island>
            <Island className={style.section} color="violet">Violet</Island>
            <Island className={style.section} color="ruby">Ruby</Island>
            <Island className={style.section} color="gold">Gold</Island>
            <Island className={style.section} color="aqua">Aqua</Island>
          </div>
        </div>
      </article>
    );
  }
}

export default IslandTest;
