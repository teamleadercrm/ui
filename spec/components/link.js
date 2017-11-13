import React, { PureComponent } from 'react';
import { Link, Heading1, Section } from '../../components/';

class LinkTest extends PureComponent {
  handleClick = () => {
    console.log('Clicked on a link');
  };

  render() {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Links</Heading1>
        </Section>
        <div className="component-spec">
          <div className="preview">
            <p>
              <Link href="http://www.facebook.com" target="_blank">
                I'm an external link
              </Link>
            </p>
            <p>
              <Link href="#" onClick={this.handleClick}>
                I'm an internal link
              </Link>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default LinkTest;
