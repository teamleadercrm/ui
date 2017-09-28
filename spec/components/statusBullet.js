import React from 'react';
import { Heading1, Section, StatusBullet } from '../../components';
import style from './statusBullet.css';
import s from '../styles.css';

class StatusBulletTest extends React.Component {

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Status bullets</Heading1>
        </Section>

        <div className={s['component-spec']}>
          <div className={s['properties']}>
            <p>
              <StatusBullet className={style['status-bullet']} color="neutral" size="large">Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="aqua" size="large">Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="violet" size="large">Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="gold" size="large">Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="ruby" size="large">Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="mint" size="large">Mint</StatusBullet>
            </p>
            <p>
              <StatusBullet className={style['status-bullet']} color="neutral">Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="aqua">Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="violet">Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="gold">Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="ruby">Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="mint">Mint</StatusBullet>
            </p>
            <p>
              <StatusBullet className={style['status-bullet']} color="neutral" size="small">Neutral</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="aqua" size="small">Aqua</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="violet" size="small">Violet</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="gold" size="small">Gold</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="ruby" size="small">Ruby</StatusBullet>
              <StatusBullet className={style['status-bullet']} color="mint" size="small">Mint</StatusBullet>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default StatusBulletTest;
