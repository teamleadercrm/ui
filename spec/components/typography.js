import React, { PureComponent } from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Monospaced,
  OldStyleNumber,
  TextBody,
  TextSmall,
  TextTiny,
} from '../../components/typography';

class TypographyTest extends PureComponent {
  render () {
    return (
      <article>
        <header>
          <h1>Typography</h1>
        </header>
        <div className="component-spec">
          <div className="preview">
            <Heading1>
              I'm a Header 1 containing a <a href="#">link</a> -
              0123456789 - <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading1>
            <Heading2>
              I'm a Header 2 containing a <a href="#">link</a> -
              0123456789 - <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading2>
            <Heading3>
              I'm a Header 3 containing a <a href="#">link</a> -
              0123456789 - <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading3>
            <Heading4>
              I'm a Header 4 containing a <a href="#">link</a> -
              0123456789 - <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading4>

            <TextBody>
              I am body text containing a <strong>strong word</strong> and a <a href="#">link</a> -
              0123456789 - <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </TextBody>
            <TextSmall>
              I am small text containing a <strong>strong word</strong> and a <a href="#">link</a> -
              0123456789 - <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </TextSmall>
            <TextTiny>
              I am tiny text containing a <strong>strong word</strong> and a <a href="#">link</a> -
              0123456789 - <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </TextTiny>
          </div>
        </div>
      </article>
    );
  }
}

export default TypographyTest;
