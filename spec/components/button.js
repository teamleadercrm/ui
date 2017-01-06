import React from 'react';
import { Button } from '../../components';

const ButtonTest = () => (
  <section>
    <h5>Buttons</h5>

    <Button href='' target='_blank' primary={true}>Primary button</Button>
    <Button href='' target='_blank' flat={true}>Textual button</Button>
  </section>
);

export default ButtonTest;
