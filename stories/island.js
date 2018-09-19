import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Island, IslandGroup, Link, TextBody, TextSmall, Heading3 } from '../components';
import {
  IllustrationInvoices120X120Static,
  IllustrationMeetings120X120Static,
  IllustrationDeals120X120Static,
} from '@teamleader/ui-illustrations';

import { IconChevronRightSmallOutline } from '@teamleader/ui-icons';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Island', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [
        TextBody,
        TextSmall,
        Heading3,
        Link,
        IconChevronRightSmallOutline,
        IllustrationInvoices120X120Static,
        IllustrationMeetings120X120Static,
        IllustrationDeals120X120Static,
      ],
    })(story)(context),
  )
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Island
      color={select('Color', colors, 'white')}
      dark={boolean('Dark', false)}
      size={select('Size', sizes, 'medium')}
    >
      <TextBody>I am an island.</TextBody>
    </Island>
  ))
  .add('Segmented horizontal', () => (
    <IslandGroup
      dark={boolean('Dark', false)}
      color={select('Color', colors, 'white')}
      size={select('Size', sizes, 'medium')}
    >
      <Island>
        <IllustrationInvoices120X120Static />
        <Heading3 marginBottom={3}>Invoices</Heading3>
        <TextBody>Send invoices to your clients straight from Teamleader.</TextBody>
      </Island>
      <Island>
        <IllustrationMeetings120X120Static />
        <Heading3 marginBottom={3}>Meetings</Heading3>
        <TextBody>Plan meetings and see them straight away in your favourite calendar.</TextBody>
      </Island>
      <Island>
        <IllustrationDeals120X120Static />
        <Heading3 marginBottom={3}>Deals</Heading3>
        <TextBody>Keep track of all your deals with our fully integrated module.</TextBody>
      </Island>
    </IslandGroup>
  ))
  .add('Segmented vertical', () => (
    <IslandGroup
      dark={boolean('Dark', false)}
      color={select('Color', colors, 'neutral')}
      direction="vertical"
      size={select('Size', sizes, 'medium')}
    >
      <Island>
        <TextBody>kanye.west@goodmusic.com</TextBody>
      </Island>
      <Island display="flex" alignItems="center">
        <IconChevronRightSmallOutline />
        <TextBody marginHorizontal={2}>
          <Link href="https://www.teamleader.be" target="_blank" inherit={false}>
            Good music Ltd.
          </Link>
        </TextBody>
        <TextSmall color="neutral">Company</TextSmall>
      </Island>
    </IslandGroup>
  ));
