import React from 'react';
import { select, text } from '@storybook/addon-knobs';
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

const titleColors = ['neutral', 'teal'];

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
};

export const composition = () => (
  <DetailPage>
    {header()}
    {body()}
  </DetailPage>
);

composition.storyName = 'Composition';
composition.parameters = {
  info: {
    propTables: [DetailPage],
  },
};

export const body = () => (
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

export const header = () => (
  <DetailPage.Header
    backLinkProps={{
      element: select('Back link element', ['a', 'button'], 'button'),
      children: text('Back link label', 'Back to overview'),
    }}
    title={text('Title', 'I am the detail page title')}
    titleColor={select('Title color', titleColors, 'teal')}
  />
);

header.storyName = 'Header';
header.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithTitleSuffix = () => (
  <DetailPage.Header
    backLinkProps={{
      element: select('Back link element', ['a', 'button'], 'button'),
      children: text('Back link label', 'Back to overview'),
    }}
    title={text('Title', 'I am the detail page title')}
    titleColor={select('Title color', titleColors, 'teal')}
    titleSuffix={<StatusLabel color="violet">Draft</StatusLabel>}
  />
);

headerWithTitleSuffix.storyName = 'Header with title suffix';
headerWithTitleSuffix.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithActions = () => (
  <DetailPage.Header
    backLinkProps={{
      element: select('Back link element', ['a', 'button'], 'button'),
      children: text('Back link label', 'Back to overview'),
    }}
    title={text('Title', 'I am the detail page title')}
    titleColor={select('Title color', titleColors, 'teal')}
  >
    {actionButtons()}
  </DetailPage.Header>
);

headerWithActions.storyName = 'Header with actions';
headerWithActions.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithTotals = () => (
  <DetailPage.Header
    backLinkProps={{
      element: select('Back link element', ['a', 'button'], 'button'),
      children: text('Back link label', 'Back to overview'),
    }}
    title={text('Title', 'I am the detail page title')}
    titleColor={select('Title color', titleColors, 'teal')}
  >
    {totals()}
  </DetailPage.Header>
);

headerWithTotals.storyName = 'Header with totals';
headerWithTotals.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithTotalsAndActions = () => (
  <DetailPage.Header
    backLinkProps={{
      element: select('Back link element', ['a', 'button'], 'button'),
      children: text('Back link label', 'Back to overview'),
    }}
    title={text('Title', 'I am a way too long detail page title which will overflow with an ellipsis')}
    titleColor={select('Title color', titleColors, 'teal')}
  >
    {totals()}
    {actionButtons()}
  </DetailPage.Header>
);

headerWithTotalsAndActions.storyName = 'Header with totals and actions';
headerWithTotalsAndActions.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};

export const headerWithEverthingTogether = () => (
  <DetailPage.Header
    backLinkProps={{
      element: select('Back link element', ['a', 'button'], 'button'),
      children: text('Back link label', 'Back to overview'),
    }}
    title={text('Title', 'I am a way too long detail page title which will overflow with an ellipsis')}
    titleColor={select('Title color', titleColors, 'teal')}
    titleSuffix={<StatusLabel color="violet">Draft</StatusLabel>}
  >
    {totals()}
    {actionButtons()}
  </DetailPage.Header>
);

headerWithEverthingTogether.storyName = 'Header with everything together';
headerWithEverthingTogether.parameters = {
  info: {
    propTables: [DetailPage.Header],
  },
};
