import React from 'react';
import { Island } from '../../components';
import style from './section.css';

class IslandTest extends React.Component {

  render () {
    return (
      <article>
        <header>
          <h1>Island</h1>
        </header>

        <div className="component-spec">
          <div className="properties">
            <h3>Neutrals</h3>
            <Island className={style.section} white>White normal</Island>
            <Island className={style.section} white dark>White dark</Island>
            <Island className={style.section} neutral>Grey normal</Island>
            <Island className={style.section} neutral dark>Grey dark</Island>

            <h3>Color</h3>
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
