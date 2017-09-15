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
            <Island className={style.section} white>White normal</Island>
            <Island className={style.section} white dark>White dark</Island>
            <Island className={style.section} neutral>Grey normal</Island>
            <Island className={style.section} neutral dark>Grey dark</Island>

            <Heading3>Color</Heading3>
            <Island className={style.section} mint>Mint</Island>
            <Island className={style.section} violet>Violet</Island>
            <Island className={style.section} ruby>Ruby</Island>
            <Island className={style.section} gold>Gold</Island>
            <Island className={style.section} aqua>Aqua</Island>
          </div>
        </div>
      </article>
    );
  }
}

export default IslandTest;
