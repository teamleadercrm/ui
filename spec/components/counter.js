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
              <Counter className={style.counter} count={999} />
              <Counter className={style.counter} count={9} size="small" />
              <Counter className={style.counter} count={0} size="small" />
              <Counter className={style.counter} color="ruby" count={100} maxCount={99} />
              <Counter className={style.counter} color="ruby" count={9} size="small" />
              <Counter className={style.counter} color="ruby" count={0} size="small" />
              <Counter className={style.counter} color="ruby" />
              <Counter className={style.counter} color="ruby" size="small" />
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default CounterTest;
