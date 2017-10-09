import React, { PureComponent } from 'react';
import {
  Counter,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  TextBody,
  TextSmall,
  TextTiny,
  Section,
} from '../../components';
import style from './counter.css';

class CounterTest extends PureComponent {

  render () {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Counters</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <p>
              <Counter className={style.counter} count={999} dark />
              <Counter className={style.counter} count={9} size="small" />
              <Counter className={style.counter} count={0} size="small" />
              <Counter className={style.counter} color="ruby" count={100} maxCount={99} />
              <Counter className={style.counter} color="ruby" count={9} size="small" />
              <Counter className={style.counter} color="ruby" count={0} size="small" />
              <Counter className={style.counter} color="ruby" />
              <Counter className={style.counter} color="ruby" size="small" />
            </p>

            <Heading1>
              I'm a Heading 1 with a counter <Counter color="neutral" dark count={100} maxCount={99} />
            </Heading1>

            <Heading2>
              I'm a Heading 2 with a counter <Counter color="mint" size="small" count={100} maxCount={99} />
            </Heading2>

            <Heading3>
              I'm a Heading 3 with a counter <Counter color="teal" size="small" count={100} maxCount={99} />
            </Heading3>

            <Heading4>
              I'm a Heading 4 with a counter <Counter color="aqua" size="small" count={100} maxCount={99} />
            </Heading4>

            <TextBody>
              I'm body text with a counter <Counter color="violet" size="small" count={100} maxCount={99} />
            </TextBody>

            <TextSmall>
              I'm small text with a counter <Counter color="gold" size="small" count={100} maxCount={99} />
            </TextSmall>

            <TextTiny>
              I'm small text with a counter <Counter color="ruby" size="small" count={100} maxCount={99} />
            </TextTiny>
          </div>
        </div>
      </article>
    );
  }
}

export default CounterTest;
