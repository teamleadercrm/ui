import React from 'react';
import { Section } from '../../components';
import style from './section.css';

class SectionTest extends React.Component {

  render () {
    return (
      <article>
        <header>
          <h1>Section</h1>
        </header>

        <div className="component-spec">
          <div className="properties">
            <h3>Neutrals</h3>
            <Section className={style.section} white>White normal</Section>
            <Section className={style.section} white dark>White dark</Section>
            <Section className={style.section} neutral>Grey normal</Section>
            <Section className={style.section} neutral dark>Grey dark</Section>

            <h3>Color</h3>
            <Section className={style.section} mint>Mint</Section>
            <Section className={style.section} violet>Violet</Section>
            <Section className={style.section} ruby>Ruby</Section>
            <Section className={style.section} gold>Gold</Section>
            <Section className={style.section} aqua>Aqua</Section>

          </div>
        </div>
      </article>
    );
  }
}

export default SectionTest;
