import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import { Island, Link, QTip, TextBody } from '../../index';

const store = new Store({
  active: false,
});

const updateState = () => {
  store.set({ active: !store.get('active') });
};

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Q-tip'),

  parameters: {
    info: {
      propTablesExclude: [TextBody, Island, Link, State],
    },
  },
};

export const defaultStory = () => (
  <Island paddingHorizontal={0} paddingVertical={6} style={{ width: '500px' }}>
    <State store={store}>
      <QTip
        highlighted={boolean('Highlighted', false)}
        onChange={updateState}
        onEscKeyDown={updateState}
        onOverlayClick={updateState}
        icon={<IconIdeaMediumOutline />}
      >
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
);

defaultStory.story = {
  name: 'Default',
};
