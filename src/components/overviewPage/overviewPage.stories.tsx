import React from 'react';
import { text } from '@storybook/addon-knobs';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import OverviewPage from './OverviewPage';
import { COLOR } from '../../constants';
import { TextBody } from '../typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: OverviewPage,
  title: addStoryInGroup(COMPOSITIONS, 'OverviewPage'),

  parameters: {
    backgrounds: {
      default: 'Neutral light',
      values: [
        { name: 'Neutral lightest', value: COLOR.NEUTRAL.LIGHTEST },
        { name: 'Neutral light', value: COLOR.NEUTRAL.LIGHT },
      ],
    },
    info: {
      propTables: false,
    },
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof OverviewPage>;

export const DefaultStory: ComponentStory<typeof OverviewPage> = () => (
  <OverviewPage>
    <OverviewPage.Header title={text('title', 'I am the overview page title')} />
    <OverviewPage.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </OverviewPage.Body>
  </OverviewPage>
);

export const Header: ComponentStory<typeof OverviewPage.Header> = () => (
  <OverviewPage.Header title={text('title', 'I am the overview page title')} />
);

Header.storyName = 'Header';
Header.parameters = {
  info: {
    propTables: [OverviewPage.Header],
  },
};

export const headerWithActions: ComponentStory<typeof OverviewPage.Header> = () => (
  <OverviewPage.Header title={text('title', 'I am the overview page title')}>
    <ButtonGroup>
      <Button>Export</Button>
      <Button icon={<IconChevronDownSmallOutline />} iconPlacement="right">
        Import
      </Button>
      <Button level="primary">Add item</Button>
    </ButtonGroup>
  </OverviewPage.Header>
);

headerWithActions.storyName = 'Header with actions';
headerWithActions.parameters = {
  info: {
    propTables: [OverviewPage.Header],
  },
};

export const Body: ComponentStory<typeof OverviewPage.Body> = () => (
  <OverviewPage.Body>
    <TextBody>Here you can add arbitrary content.</TextBody>
  </OverviewPage.Body>
);

Body.storyName = 'Body';
Body.parameters = {
  info: {
    propTables: [OverviewPage.Body],
  },
};
