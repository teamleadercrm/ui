import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import {
  Box,
  Island,
  Link,
  TextBody,
  TextDisplay,
  TextSmall,
} from '../components';
import { baseStyles } from '../.storybook/styles';

storiesOf('Links', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles(baseStyles))
  .add('Default', () => (
    <Box padding={5}>
      <Island>
        <Link href="https://www.teamleader.be" target="_blank" inherit={false}>link</Link>
      </Island>
      <Island marginTop={4}>
        <TextDisplay>Display text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextDisplay>
        <TextBody marginTop={4}>Body text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall marginTop={4}>Small text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
      </Island>
      <Island marginTop={4}>
        <TextDisplay color="neutral" soft>Display text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextDisplay>
        <TextBody color="neutral" marginTop={4} soft>Body text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall color="neutral" marginTop={4} soft>Small text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
      </Island>
      <Island color="ruby" marginTop={4}>
        <TextDisplay color="ruby">Display text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextDisplay>
        <TextBody color="ruby" marginTop={4}>Body text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall color="ruby" marginTop={4}>Small text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
      </Island>
      <Island color="mint" marginTop={4}>
        <TextDisplay color="mint">Display text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextDisplay>
        <TextBody color="mint" marginTop={4}>Body text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall color="mint" marginTop={4}>Small text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
      </Island>
      <Island color="violet" marginTop={4}>
        <TextDisplay color="violet">Display text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextDisplay>
        <TextBody color="violet" marginTop={4}>Body text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall color="violet" marginTop={4}>Small text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
      </Island>
      <Island style={{backgroundColor: '#2a3b4d'}} marginTop={4}>
        <TextDisplay color="white" soft>Display text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextDisplay>
        <TextBody color="white" marginTop={4} soft>Body text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall color="white" marginTop={4} soft>Small text with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
      </Island>
    </Box>
  ));
