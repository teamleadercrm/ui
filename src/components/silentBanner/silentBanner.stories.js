import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import SilentBanner from './SilentBanner';
import Link from '../link';

const statusValues = ['info', 'error', 'success', 'warning'];

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Silent banners'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=1225%3A0',
    },
    info: {
      propTables: [SilentBanner],
    },
  },
};

export const basic = () => (
  <SilentBanner title={text('Title', 'I am the title of this message')}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link> tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </SilentBanner>
);

export const dismissable = () => (
  <SilentBanner
    onClose={() => console.log('onClose click handler')}
    title={text('Title', 'I am the title of this message')}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link> tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </SilentBanner>
);

export const withActions = () => (
  <SilentBanner
    primaryAction={() => console.log('primaryAction click handler')}
    primaryActionLabel={text('Primary action label')}
    secondaryAction={() => console.log('secondaryAction click handler')}
    secondaryActionLabel={text('Secondary action label')}
    title={text('Title', 'I am the title of this message')}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link> tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </SilentBanner>
);

export const withStatus = () => (
  <SilentBanner
    showIcon={boolean('Show icon', false)}
    status={select('Status', statusValues, 'success')}
    title={text('Title', 'I am the title of this message')}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link> tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </SilentBanner>
);

export const fullOption = () => (
  <SilentBanner
    onClose={() => console.log('onClose click handler')}
    primaryAction={() => console.log('primaryAction click handler')}
    primaryActionLabel={text('Primary action label')}
    secondaryAction={() => console.log('secondaryAction click handler')}
    secondaryActionLabel={text('Secondary action label')}
    showIcon={boolean('Show icon', true)}
    status={select('Status', statusValues, 'success')}
    title={text('Title', 'I am the title of this message')}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <Link inherit={false}>nonumy eirmod</Link> tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </SilentBanner>
);
