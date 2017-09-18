import React from 'react';
import { Heading1, Section, StatusBullet } from '../../components';
import style from './statusBullet.css';

class StatusBulletTest extends React.Component {

  render () {
    return (
      <article>
        <Section neutral dark>
          <Heading1>Status bullets</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <p>
              <StatusBullet className={style['status-bullet']} neutral size="large">Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} aqua size="large">Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} violet size="large">Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} gold size="large">Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} ruby size="large">Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} mint size="large">Mint</StatusBullet>
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
              <StatusBullet className={style['status-bullet']} neutral size="small">Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} aqua size="small">Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} violet size="small">Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} gold size="small">Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} ruby size="small">Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} mint size="small">Mint</StatusBullet>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default StatusBulletTest;
