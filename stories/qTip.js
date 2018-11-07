import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import { Island, Link, QTip, TextBody } from '../src';

const store = new Store({
  closed: true,
});

const updateState = () => {
  store.set({ closed: !store.get('closed') });
};

storiesOf('Q-tip', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody, Island, Link, State],
    },
  })
  .add('Default', () => (
    <Island paddingHorizontal={0} paddingVertical={6} style={{ width: '500px' }}>
      <State store={store}>
        <QTip highlighted={boolean('Highlighted', false)} onChange={updateState} icon={<IconIdeaMediumOutline />}>
          <TextBody color="teal">
            Lorem ipsum dolor sit amet, consectetur{' '}
            <Link href="#" inherit={false}>
              adipiscing
            </Link>{' '}
            elit.
          </TextBody>
        </QTip>
      </State>
    </Island>
  ));
