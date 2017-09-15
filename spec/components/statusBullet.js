import React from 'react';
import { StatusBullet } from '../../components';
import style from './statusBullet.css';

class StatusBulletTest extends React.Component {

  render () {
    return (
      <article>
        <header>
          <h1>Status bullets</h1>
        </header>

        <div className="component-spec">
          <div className="properties">
            <p>
              <StatusBullet className={style['status-bullet']} neutral large>Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} aqua large>Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} violet large>Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} gold large>Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} ruby large>Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} mint large>Mint</StatusBullet>
            </p>
            <p>
              <StatusBullet className={style['status-bullet']} neutral>Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} aqua>Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} violet>Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} gold>Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} ruby>Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} mint>Mint</StatusBullet>
            </p>
            <p>
              <StatusBullet className={style['status-bullet']} neutral small>Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} aqua small>Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} violet small>Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} gold small>Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} ruby small>Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} mint small>Mint</StatusBullet>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default StatusBulletTest;
