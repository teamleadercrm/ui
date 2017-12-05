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
  TextSmall,
  TextTiny,
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
        <TextBody>Text body with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall marginTop={4}>Text small with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
        <TextTiny marginTop={4}>Text tiny with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextTiny>
      </Island>
      <Island marginTop={4}>
        <TextBody color="neutral" soft>Text body with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall color="neutral" marginTop={4} soft>Text small with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
        <TextTiny color="neutral" marginTop={4} soft>Text tiny with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextTiny>
      </Island>
      <Island color="ruby" marginTop={4}>
        <TextBody color="ruby">Text body with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall marginTop={4}>Text small with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
        <TextTiny marginTop={4}>Text tiny with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextTiny>
      </Island>
      <Island color="mint" marginTop={4}>
        <TextBody color="mint">Text body with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall marginTop={4}>Text small with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
        <TextTiny marginTop={4}>Text tiny with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextTiny>
      </Island>
      <Island color="violet" marginTop={4}>
        <TextBody color="violet">Text body with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall marginTop={4}>Text small with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
        <TextTiny marginTop={4}>Text tiny with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextTiny>
      </Island>
      <Island style={{backgroundColor: '#2a3b4d'}} marginTop={4}>
        <TextBody color="white" soft>Text body with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextBody>
        <TextSmall color="white" marginTop={4} soft>Text small with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextSmall>
        <TextTiny color="white" marginTop={4} soft>Text tiny with a <Link href="https://www.teamleader.be" target="_blank">link</Link> inside</TextTiny>
      </Island>
    </Box>
  ));
