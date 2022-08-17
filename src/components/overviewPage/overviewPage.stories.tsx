import React from 'react';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import OverviewPage from './OverviewPage';
import { COLOR } from '../../constants';
import { TextBody } from '../typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const defaultOverviewPageHeaderProps = {
  title: 'I am the overview page title',
};

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

export const defaultStory = (args: { title: string }) => (
  <OverviewPage>
    <OverviewPage.Header title={args.title} />
    <OverviewPage.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </OverviewPage.Body>
  </OverviewPage>
);

defaultStory.args = defaultOverviewPageHeaderProps;

export const header: ComponentStory<typeof OverviewPage.Header> = (args) => <OverviewPage.Header title={args.title} />;

header.storyName = 'Header';
header.args = defaultOverviewPageHeaderProps;
header.parameters = {
  info: {
    propTables: [OverviewPage.Header],
  },
};

export const headerWithActions: ComponentStory<typeof OverviewPage.Header> = (args) => (
  <OverviewPage.Header title={args.title}>
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
headerWithActions.args = defaultOverviewPageHeaderProps;
headerWithActions.parameters = {
  info: {
    propTables: [OverviewPage.Header],
  },
};

export const body: ComponentStory<typeof OverviewPage.Body> = () => (
  <OverviewPage.Body>
    <TextBody>Here you can add arbitrary content.</TextBody>
  </OverviewPage.Body>
);

body.storyName = 'Body';
body.parameters = {
  info: {
    propTables: [OverviewPage.Body],
  },
};
