import React, { PureComponent } from 'react';
import { Link, Heading1, Section } from '../../components/';
import { BrowserRouter as Router, Link as ReactRouterLink } from 'react-router-dom';

Link.use(ReactRouterLink);

class LinkTest extends PureComponent {
  handleClick = () => {
    console.log('Clicked on a link');
  };

  render () {
    return (
      <Router>
        <article>
          <Section color="neutral" dark>
            <Heading1>Links</Heading1>
          </Section>
          <div className="component-spec">
            <div className="preview">
              <p><Link to="http://www.facebook.com" target="_blank">I'm an external link</Link></p>
              <p><Link to="#" onClick={this.handleClick}>I'm an internal link</Link></p>
            </div>
          </div>
        </article>
      </Router>
    );
  }
}

export default LinkTest;
