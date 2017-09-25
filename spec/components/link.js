import React, { PureComponent } from 'react';
import Link from '../../components/link';

class LinkTest extends PureComponent {
  handleClick = () => {
    console.log('Clicked on a link');
  };

  render () {
    return (
      <article>
        <header>
          <h1>Links</h1>
        </header>
        <div className="component-spec">
          <div className="preview">
            <p><Link url="#">I'm a link</Link></p>
            <p><Link onClick={this.handleClick}>I'm a link</Link></p>
          </div>
        </div>
      </article>
    );
  }
}

export default LinkTest;
