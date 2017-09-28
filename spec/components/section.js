import React from 'react';
import { Heading1, Heading3, Section } from '../../components';
import style from './section.css';
import s from '../styles.css';

class SectionTest extends React.Component {

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Section</Heading1>
        </Section>

        <div className={s['component-spec']}>
          <div className={s['properties']}>
            <Heading3>Neutrals</Heading3>
            <Section className={style.section} color="white">White normal</Section>
            <Section className={style.section} color="white" dark>White dark</Section>
            <Section className={style.section} color="neutral">Grey normal</Section>
            <Section className={style.section} color="neutral" dark>Grey dark</Section>

            <Heading3>Color</Heading3>
            <Section className={style.section} color="mint">Mint</Section>
            <Section className={style.section} color="violet">Violet</Section>
            <Section className={style.section} color="ruby">Ruby</Section>
            <Section className={style.section} color="gold">Gold</Section>
            <Section className={style.section} color="aqua">Aqua</Section>
          </div>
        </div>
      </article>
    );
  }
}

export default SectionTest;
