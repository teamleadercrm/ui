import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Banner, Box, Button, Message, Island, Heading2, TextBody } from '../components';
import { IllustrationInvoices120X120Static } from '@teamleader/ui-illustrations';

const button = <Button level="primary">Button text</Button>;
const link = <span>I'm a link</span>; // @todo replace this with a real link component
const image = <IllustrationInvoices120X120Static />;
const content = (
  <div>
    <Heading2>The title</Heading2>
    <TextBody marginVertical={2}>Rinking vinegar adaptogen taiyaki thundercats yr street art. Cardigan beard PBR&B organic small batch church-key mustache unicorn vexillologist humblebrag coloring book helvetica.</TextBody>
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
  ));
