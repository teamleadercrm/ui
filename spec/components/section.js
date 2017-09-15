import React from 'react';
import { Heading1, Heading3, Section } from '../../components';
import style from './section.css';

class SectionTest extends React.Component {

  render () {
    return (
      <article>
        <Section neutral dark>
          <Heading1>Section</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <Heading3>Neutrals</Heading3>
            <Section className={style.section} white>White normal</Section>
            <Section className={style.section} white dark>White dark</Section>
            <Section className={style.section} neutral>Grey normal</Section>
            <Section className={style.section} neutral dark>Grey dark</Section>

            <Heading3>Color</Heading3>
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
