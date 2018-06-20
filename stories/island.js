import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Island, TextBody, Heading3 } from '../components';
import {
  IllustrationInvoices120X120Static,
  IllustrationMeetings120X120Static,
  IllustrationDeals120X120Static,
} from '@teamleader/ui-illustrations';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Island', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [
        TextBody,
        Heading3,
        IllustrationInvoices120X120Static,
        IllustrationMeetings120X120Static,
        IllustrationDeals120X120Static,
      ],
    })(story)(context),
  )
  .addDecorator(checkA11y)
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
  .add('Segmented', () => (
    <Island dark={boolean('Dark', false)} segmented padding={0}>
      <Island dark={boolean('Dark', false)}>
        <IllustrationInvoices120X120Static />
        <Heading3 marginBottom={3}>Invoices</Heading3>
        <TextBody align="center">Send invoices to your clients straight from Teamleader.</TextBody>
      </Island>
      <Island dark={boolean('Dark', false)}>
        <IllustrationMeetings120X120Static />
        <Heading3 marginBottom={3}>Meetings</Heading3>
        <TextBody>Plan meetings and see them straight away in your favourite calendar.</TextBody>
      </Island>
      <Island dark={boolean('Dark', false)}>
        <IllustrationDeals120X120Static />
        <Heading3 marginBottom={3}>Deals</Heading3>
        <TextBody>Keep track of all your deals with our fully integrated module.</TextBody>
      </Island>
    </Island>
  ));
