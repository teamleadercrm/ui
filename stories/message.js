import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { Button, Message, CompactMessage, Island, Heading2, Link, TextBody } from '../components';
import { IllustrationInvoices120X120Static, IllustrationSharpie48X48Static } from '@teamleader/ui-illustrations';

const imagePositions = ['left', 'center', 'right'];

const button = <Button level="primary">Button text</Button>;
const link = (
  <TextBody>
    <Link href="https://teamleader.eu" inherit={false}>
      I'm a link
    </Link>
  </TextBody>
);
const image = <IllustrationInvoices120X120Static />;
const imageSmall = <IllustrationSharpie48X48Static />;
const content = (
  <div>
    <Heading2 color="teal">The title</Heading2>
    <TextBody color="teal" marginVertical={2}>
      Rinking vinegar adaptogen taiyaki thundercats yr street art. Cardigan beard PBR&B organic small batch church-key
      mustache unicorn vexillologist humblebrag coloring book helvetica.
    </TextBody>
  </div>
);

storiesOf('Message', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody, Heading2, Link, Island],
    },
  })
  .add('Basic', () => (
    <Island>
      <Message button={button} link={link}>
        {content}
      </Message>
    </Island>
  ))
  .add('Compact', () => (
    <Island>
      <CompactMessage button={button} image={imageSmall}>
        {content}
      </CompactMessage>
    </Island>
  ))
  .add('With image', () => (
    <Island>
      <Message
        button={button}
        link={link}
        image={image}
        imagePositioning={select('Image positioning', imagePositions, 'left')}
      >
        {content}
      </Message>
    </Island>
  ));
