import React from 'react';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import DetailPage from './DetailPage';
import Icon from '../icon';
import IconButton from '../iconButton';
import { IconTrashMediumOutline, IconWarningBadgedMediumFilled } from '@teamleader/ui-icons';
import StatusLabel from '../statusLabel';
import { Box } from '../box';
import { Heading1, Monospaced, TextBody } from '../typography';
import { COLOR } from '../../constants';
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';
import { DetailPageHeaderProps } from './DetailPageHeader';

const defaultDetailPageHeaderProps: DetailPageHeaderProps = {
  backLinkProps: {
    element: 'button',
    children: 'Back to overview',
  },
  title: 'I am the detail page title',
  titleColor: 'teal',
};
const detailPageHeaderArgTypes: Partial<ArgTypes<DetailPageHeaderProps>> = {
  backLinkProps: {
    element: {
      control: 'select',
      options: ['a', 'button'],
    },
  },
};

const actionButtons = () => (
  <ButtonGroup marginLeft={7}>
    <IconButton icon={<IconTrashMediumOutline />} />
    <ButtonGroup segmented>
      <Button>Open</Button>
      <Button active>Won</Button>
      <Button>Lost</Button>
    </ButtonGroup>
  </ButtonGroup>
);

const totals = () => (
  <Box display="flex" alignSelf="flex-end">
    <Box textAlign="right">
      <TextBody color="neutral">
        <strong>Total</strong>
      </TextBody>
      <Box alignItems="center" display="flex">
        <Heading1>
          <Monospaced>999h99</Monospaced>
        </Heading1>
        <Icon color="gold" tint="dark" marginLeft={2}>
          <IconWarningBadgedMediumFilled />
        </Icon>
      </Box>
    </Box>
    <Box textAlign="right" marginLeft={7}>
      <TextBody color="neutral">
        <strong>Total</strong>
      </TextBody>
      <Box alignItems="center" display="flex">
        <Heading1>
          <Monospaced>999h99</Monospaced>
        </Heading1>
        <Icon color="gold" tint="dark" marginLeft={2}>
          <IconWarningBadgedMediumFilled />
        </Icon>
      </Box>
    </Box>
    <Box textAlign="right" marginLeft={7}>
      <TextBody color="neutral">
        <strong>Total</strong>
      </TextBody>
      <Box alignItems="center" display="flex">
        <Heading1>
          <Monospaced>999h99</Monospaced>
        </Heading1>
        <Icon color="gold" tint="dark" marginLeft={2}>
          <IconWarningBadgedMediumFilled />
        </Icon>
      </Box>
    </Box>
  </Box>
);

export default {
  component: DetailPage,
  title: addStoryInGroup(COMPOSITIONS, 'DetailPage'),

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
  },
} as ComponentMeta<typeof DetailPage>;

export const body: ComponentStory<typeof DetailPage.Body> = () => (
  <DetailPage.Body>
    <TextBody>Here you can add arbitrary content.</TextBody>
  </DetailPage.Body>
);

body.storyName = 'Body';
body.parameters = {
  info: {
    propTables: [DetailPage.Body],
  },
};

export const header: ComponentStory<typeof DetailPage.Header> = (args) => <DetailPage.Header {...args} />;

header.storyName = 'Header';
header.args = defaultDetailPageHeaderProps;
header.argTypes = detailPageHeaderArgTypes;
header.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithTitleSuffix: ComponentStory<typeof DetailPage.Header> = (args) => (
  <DetailPage.Header {...args} titleSuffix={<StatusLabel color="violet">Draft</StatusLabel>} />
);

headerWithTitleSuffix.storyName = 'Header with title suffix';
headerWithTitleSuffix.args = defaultDetailPageHeaderProps;
headerWithTitleSuffix.argTypes = detailPageHeaderArgTypes;
headerWithTitleSuffix.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithActions: ComponentStory<typeof DetailPage.Header> = (args) => (
  <DetailPage.Header {...args}>{actionButtons()}</DetailPage.Header>
);

headerWithActions.storyName = 'Header with actions';
headerWithActions.args = defaultDetailPageHeaderProps;
headerWithActions.argTypes = detailPageHeaderArgTypes;
headerWithActions.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithTotals: ComponentStory<typeof DetailPage.Header> = (args) => (
  <DetailPage.Header {...args}>{totals()}</DetailPage.Header>
);

headerWithTotals.storyName = 'Header with totals';
headerWithTotals.args = defaultDetailPageHeaderProps;
headerWithTotals.argTypes = detailPageHeaderArgTypes;
headerWithTotals.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithTotalsAndActions: ComponentStory<typeof DetailPage.Header> = (args) => (
  <DetailPage.Header {...args}>
    {totals()}
    {actionButtons()}
  </DetailPage.Header>
);

headerWithTotalsAndActions.storyName = 'Header with totals and actions';
headerWithTotalsAndActions.args = defaultDetailPageHeaderProps;
headerWithTotalsAndActions.argTypes = detailPageHeaderArgTypes;
headerWithTotalsAndActions.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithEverthingTogether: ComponentStory<typeof DetailPage.Header> = (args) => (
  <DetailPage.Header {...args} titleSuffix={<StatusLabel color="violet">Draft</StatusLabel>}>
    {totals()}
    {actionButtons()}
  </DetailPage.Header>
);

headerWithEverthingTogether.storyName = 'Header with everything together';
headerWithEverthingTogether.args = defaultDetailPageHeaderProps;
headerWithEverthingTogether.argTypes = detailPageHeaderArgTypes;
headerWithEverthingTogether.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const composition: ComponentStory<typeof DetailPage> = () => (
  <DetailPage>
    <DetailPage.Header {...defaultDetailPageHeaderProps} />
    <DetailPage.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </DetailPage.Body>
  </DetailPage>
);

composition.storyName = 'Composition';
composition.parameters = {
  info: {
    propTables: [DetailPage],
  },
};
