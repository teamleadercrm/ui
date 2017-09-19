import React from 'react';
import { Heading1, Heading3, Island, Section } from '../../components';
import style from './island.css';

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
            <Island className={style.island} color="white">White normal</Island>
            <Island className={style.island} color="white" dark>White dark</Island>
            <Island className={style.island} color="neutral">Grey normal</Island>
            <Island className={style.island} color="neutral" dark>Grey dark</Island>

            <Heading3>Color</Heading3>
            <Island className={style.island} color="mint">Mint</Island>
            <Island className={style.island} color="violet">Violet</Island>
            <Island className={style.island} color="ruby">Ruby</Island>
            <Island className={style.island} color="gold">Gold</Island>
            <Island className={style.island} color="aqua">Aqua</Island>
          </div>
        </div>
      </article>
    );
  }
}

export default IslandTest;
