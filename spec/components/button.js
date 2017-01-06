import React from 'react';
import { Button } from '../../components';

const ButtonTest = () => (
  <section>
    <h5>Buttons</h5>

    <Button href='' target='_blank' primary>Primary button</Button>
    <Button href='' target='_blank' flat>Textual button</Button>
    <Button href='' target='_blank' flat icon='favorite'></Button>
  </section>
);

export default ButtonTest;
