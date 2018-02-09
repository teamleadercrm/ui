import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Banner, Box, Button, Message, CompactMessage, Island, Heading2, Link, TextBody, TextSmall } from '../components';
import { IllustrationInvoices120X120Static, IllustrationSharpie48X48Static } from '@teamleader/ui-illustrations';

const button = <Button level="primary">Button text</Button>;
const link = <TextSmall><Link href="https://teamleader.eu" inherit={false}>I'm a link</Link></TextSmall>;
const image = <IllustrationInvoices120X120Static />;
const imageSmall = <IllustrationSharpie48X48Static />;
const content = (
  <div>
    <Heading2 color="teal">The title</Heading2>
    <TextBody color="teal" marginVertical={2}>Rinking vinegar adaptogen taiyaki thundercats yr street art. Cardigan beard PBR&B organic small batch church-key mustache unicorn vexillologist humblebrag coloring book helvetica.</TextBody>
  </div>
);

storiesOf('Message', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('image positioning', () => (
    <Box padding={5}>
      <div>
        <Island marginBottom={2}>
          <Message button={button} link={link}>
            {content}
          </Message>
        </Island>
        <Island marginBottom={2}>
          <Message button={button} link={link} image={image} imagePositioning="left">
            {content}
          </Message>
        </Island>
        <Island marginBottom={2}>
          <Message  button={button} link={link} image={image} imagePositioning="right">
            {content}
          </Message>
        </Island>
        <Island marginBottom={2}>
          <Message button={button} link={link} image={image} imagePositioning="center">
            {content}
          </Message>
        </Island>
      </div>
    </Box>
  ))
  .add('compact', () => (
    <Box padding={6}>
      <div>
        <Island marginBottom={2}>
          <CompactMessage button={button} image={imageSmall}>
            <Heading2 color="teal">Compact version</Heading2>
            <TextBody color="teal" marginVertical={2}>I don't have a lot to say so I'll just leave it there.</TextBody>
          </CompactMessage>
        </Island>
      </div>
    </Box>
  ));
