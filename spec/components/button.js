import React from 'react';
import { Button } from '../../components';

const handleItemClick = () => {
  console.log('This item is so special that has a special handler');
};

const ButtonTest = () => (
  <section>
    <h2>Buttons</h2>

    <p>
      <Button primary onMouseUp={handleItemClick}>Primary flat</Button>&nbsp;
      <Button primary icon='search'>Primary flat with icon</Button>&nbsp;
      <Button primary icon='search' />
    </p>
    <p>
      <Button primary processing>Primary flat processing</Button>&nbsp;
      <Button primary processing icon='search'>Primary flat processing with icon</Button>&nbsp;
      <Button primary processing />
    </p>
    <p>
      <Button primary disabled>Primary flat disabled</Button>&nbsp;
      <Button primary disabled icon='search'>Primary disabled with icon</Button>&nbsp;
      <Button primary disabled icon='search' />
    </p>

    <hr />

    <p>
      <Button>Neutral flat</Button>&nbsp;
      <Button icon='search'>Neutral flat with icon</Button>&nbsp;
      <Button icon='search' />
    </p>

    <p>
      <Button processing>Neutral flat processing</Button>&nbsp;
      <Button processing icon='search'>Neutral flat processing with icon</Button>&nbsp;
      <Button processing />
    </p>

    <p>
      <Button disabled>Neutral flat disabled</Button>&nbsp;
      <Button disabled icon='search'>Neutral disabled with icon</Button>&nbsp;
      <Button disabled icon='search' />
    </p>

  </section>
);

export default ButtonTest;
