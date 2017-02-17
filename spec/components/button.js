import React from 'react';
import { Button } from '../../components';

const handleItemClick = () => {
  console.log('This item is so special that has a special handler');
};

const ButtonTest = () => (
  <section>
    <h5>Buttons</h5>

    <p>
      <Button primary onMouseUp={handleItemClick}>Primary flat</Button>&nbsp;
      <Button primary icon='notifications'>Primary flat with icon</Button>&nbsp;
      <Button primary icon='notifications' />
    </p>
    <p>
      <Button primary processing>Primary flat processing</Button>&nbsp;
      <Button primary processing icon='notifications'>Primary flat processing with icon</Button>&nbsp;
      <Button primary processing />
    </p>
    <p>
      <Button primary disabled>Primary flat disabled</Button>&nbsp;
      <Button primary disabled icon='notifications'>Primary disabled with icon</Button>&nbsp;
      <Button primary disabled icon='notifications' />
    </p>

    <hr />

    <p>
      <Button>Neutral flat</Button>&nbsp;
      <Button icon='notifications'>Neutral flat with icon</Button>&nbsp;
      <Button icon='notifications' />
    </p>

    <p>
      <Button processing>Neutral flat processing</Button>&nbsp;
      <Button processing icon='notifications'>Neutral flat processing with icon</Button>&nbsp;
      <Button processing />
    </p>

    <p>
      <Button disabled>Neutral flat disabled</Button>&nbsp;
      <Button disabled icon='notifications'>Neutral disabled with icon</Button>&nbsp;
      <Button disabled icon='notifications' />
    </p>

  </section>
);

export default ButtonTest;
