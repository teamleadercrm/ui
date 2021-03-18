import React, { useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import { Link, QTip, TextBody } from '../../index';

export default {
  component: QTip,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Q-tip'),
};

export const DefaultStory = (args) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <QTip
      {...args}
      active={active}
      onChange={toggleActive}
      onEscKeyDown={toggleActive}
      onOverlayClick={toggleActive}
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
  );
};
