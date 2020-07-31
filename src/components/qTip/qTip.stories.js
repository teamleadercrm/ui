import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Store, State } from '@sambego/storybook-state';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import { Link, QTip, TextBody } from '../../index';

const store = new Store({
  active: false,
});

const updateState = () => {
  store.set({ active: !store.get('active') });
};

export default {
  component: QTip,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Q-tip'),
};

export const DefaultStory = (args) => (
  <State store={store}>
    <QTip
      {...args}
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
);
