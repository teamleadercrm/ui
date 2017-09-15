import React, { PureComponent } from 'react';
import { Counter, Heading1, Section } from '../../components';
import style from './counter.css';

class CounterTest extends PureComponent {

  render () {
    return (
      <article>
        <Section neutral dark>
          <Heading1>Counters</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <p>
              <Counter className={style.counter}>99</Counter>
              <Counter className={style.counter} small>9</Counter>
              <Counter className={style.counter} />
              <Counter className={style.counter} small />
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default CounterTest;
