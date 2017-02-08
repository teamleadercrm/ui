import React from 'react';
import { Button } from '../../components';

const ButtonTest = () => (
  <section>
    <h5>Buttons</h5>

    <p>
      <Button primary>Primary flat</Button>&nbsp;
      <Button primary icon='notifications'>Primary flat with icon</Button>&nbsp;
      <Button primary icon='notifications'/>
    </p>
    <p>
      <Button primary processing>Primary flat processing</Button>&nbsp;
      <Button primary processing icon='notifications'>Primary flat processing with icon</Button>&nbsp;
      <Button primary processing></Button>
    </p>
    <p>
      <Button primary disabled>Primary flat disabled</Button>&nbsp;
      <Button primary disabled icon='notifications'>Primary disabled with icon</Button>&nbsp;
      <Button primary disabled icon='notifications'/>
    </p>

    <hr/>

    <p>
      <Button primary raised>Primary raised</Button>&nbsp;
      <Button primary raised icon='notifications'>Primary raised with icon</Button>&nbsp;
      <Button primary raised icon='notifications'/>
    </p>

    <p>
      <Button primary raised processing>Primary raised processing</Button>&nbsp;
      <Button primary raised processing icon='notifications'>Primary raised processing with icon</Button>&nbsp;
      <Button primary raised processing/>
    </p>

    <p>
      <Button primary raised disabled>Primary raised disabled</Button>&nbsp;
      <Button primary raised disabled icon='notifications'>Primary raised disabled with icon</Button>&nbsp;
      <Button primary raised disabled icon='notifications'/>
    </p>

    <hr/>

    <p>
      <Button accent>Accent flat</Button>&nbsp;
      <Button accent icon='notifications'>Accent flat with icon</Button>&nbsp;
      <Button accent icon='notifications'/>
    </p>

    <p>
      <Button accent processing>Accent flat processing</Button>&nbsp;
      <Button accent processing icon='notifications'>Accent flat processing with icon</Button>&nbsp;
      <Button accent processing></Button>
    </p>

    <p>
      <Button accent disabled>Accent flat disabled</Button>&nbsp;
      <Button accent disabled icon='notifications'>Accent disabled with icon</Button>&nbsp;
      <Button accent disabled icon='notifications'></Button>
    </p>

    <hr/>

    <p>
      <Button accent raised>Accent raised</Button>&nbsp;
      <Button accent raised icon='notifications'>Accent raised with icon</Button>&nbsp;
      <Button accent raised icon='notifications'/>
    </p>

    <p>
      <Button accent raised processing>Accent raised processing</Button>&nbsp;
      <Button accent raised processing icon='notifications'>Accent raised processing with icon</Button>&nbsp;
      <Button accent raised processing/>
    </p>

    <p>
      <Button accent raised disabled>Accent raised disabled</Button>&nbsp;
      <Button accent raised disabled icon='notifications'>Accent raised disabled with icon</Button>&nbsp;
      <Button accent raised disabled icon='notifications'/>
    </p>

    <hr/>

    <p>
      <Button>Neutral flat</Button>&nbsp;
      <Button icon='notifications'>Neutral flat with icon</Button>&nbsp;
      <Button icon='notifications'/>
    </p>

    <p>
      <Button processing>Neutral flat processing</Button>&nbsp;
      <Button processing icon='notifications'>Neutral flat processing with icon</Button>&nbsp;
      <Button processing></Button>
    </p>

    <p>
      <Button disabled>Neutral flat disabled</Button>&nbsp;
      <Button disabled icon='notifications'>Neutral disabled with icon</Button>&nbsp;
      <Button disabled icon='notifications'></Button>
    </p>

    <hr/>

    <p>
      <Button raised>Accent raised</Button>&nbsp;
      <Button raised icon='notifications'>Accent raised with icon</Button>&nbsp;
      <Button raised icon='notifications'/>
    </p>

    <p>
      <Button raised processing>Accent raised processing</Button>&nbsp;
      <Button raised processing icon='notifications'>Accent raised processing with icon</Button>&nbsp;
      <Button raised processing/>
    </p>

    <p>
      <Button raised disabled>Accent raised disabled</Button>&nbsp;
      <Button raised disabled icon='notifications'>Accent raised disabled with icon</Button>&nbsp;
      <Button raised disabled icon='notifications'/>
    </p>

    <hr/>

    <p><Button primary floating icon='notifications'></Button></p>
    <p><Button primary floating processing icon='notifications'></Button></p>
    <p><Button primary floating disabled icon='notifications'></Button></p>
    <p><Button floating icon='notifications'></Button></p>

  </section>
);

export default ButtonTest;
