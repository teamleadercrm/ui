import React from 'react';
import { Button } from '../../components';

const ButtonTest = () => (
  <section>
    <h5>Buttons</h5>

    <Button primary>Primary button</Button>
    <Button primary processing />
    <Button >Textual button</Button>
    <Button flat icon='notifications' />
  </section>
);

export default ButtonTest;
