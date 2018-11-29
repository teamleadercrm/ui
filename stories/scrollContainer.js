import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Heading2, Heading3, ScrollContainer, TextBody } from '../src';

storiesOf('ScrollContainer', module).add('Basic', () => (
  <Box style={{ height: 500 }}>
    <ScrollContainer
      header={
        <Box paddingBottom={4}>
          <Heading2>Sandstorm</Heading2>
          <Heading3 color="neutral">Darude</Heading3>
        </Box>
      }
      body={
        <TextBody>
          Duuuuuuuuuuuuuuuuuuuuuuun <br />
          dun dun dun dun dun dun dun dun dun dun dun dundun dun dundundun dun dun dun dun dun dun dundun dundun <br />
          BOOM <br />
          dundun dundun dundun <br />
          BEEP <br />
          dun dun dun dun dun <br />
          dun dun <br />
          BEEP BEEP BEEP BEEP <br />
          BEEEP BEEP BEEP BEEP <br />
          BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BOOM <br />
          daddaddadadsadadadadadadadadadaddadadadadadaddadadaddadadadadadadadadadadadaddad<br />
          dadadadaddaddada <br />
          dadadddaddadaddadadadddadadada <br />
          nyu nyu nyu nyu nyu nnyu nyu nyu nyu nyu nyu nyu nyu nyu nyu nyu <br />
          doo doo doo doo doo doo doo doo <br />
          nnn nn nn nn nn nn n nn nnn nn nn nnn nnn nnnnnnnn <br />
          dddddddd ddadadadadaddadadadadadaadadadadadad <br />
          BOOM <br />
          nyu nyu nyu nyu nyu nyu <br />
          BOOM <br />
          BOOM BOOM BOOM BOOM <br />
          BOOM <br />
          nyunyunyu nyu nyu nyu nyu nyu nyu nyu nyu nyu nyu <br />
          BOOM BOOM <br />
          BEEP BEEP <br />
          BEEP BEEP BEEP <br />
          dadadadadada <br />
          ddadad <br />
          BOOM BOOM <br />
          BBEP BEEP <br />
          BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP BEEP <br />
          BOOM <br />
          (Unintellgibile) <br />
          ddudndundun dun dun dun dun dun dun dun dun dun dun dun dun dun dun dund <br />
          dododododododododododododododododododododododododododododoodo <br />
          DRUM DRUM DRUM <br />
          ddodododododoododododododododoodododododododo <br />
          chi chi chi chi chi chih <br />
          BOOOM <br />
          chcihcihfkdhfdisjfkla <br />
          dodododododododododododododododododododododododododododododododododoo <br />
          SCHEW <br />
          dododododododoodododododododododododododo <br />
          dadadadddudndundundudnudndundundunddunfudnundudnudnudndund <br />
          BOOM <br />
          FADE
        </TextBody>
      }
      footer={
        <Box paddingTop={4}>
          <TextBody color="neutral">Songwriters: Jaakko Sakari Salovaara / Ville Virtanen</TextBody>
          <TextBody color="neutral">Sandstorm lyrics &copy; Universal Music Publishing Group</TextBody>
        </Box>
      }
    />
  </Box>
));
