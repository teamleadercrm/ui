import React, { PureComponent } from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Link,
  Monospaced,
  OldStyleNumber,
  Section,
  TextBody,
  TextSmall,
  TextTiny,
} from '../../components';

class TypographyTest extends PureComponent {
  render() {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Typography</Heading1>
        </Section>
        <div className="component-spec">
          <div className="preview">
            <Heading1>
              I'm a Header 1 containing a <Link href="#">link</Link> - 0123456789 -{' '}
              <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading1>
            <Heading2>
              I'm a Header 2 containing a <Link href="#">link</Link> - 0123456789 -{' '}
              <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading2>
            <Heading3>
              I'm a Header 3 containing a <Link href="#">link</Link> - 0123456789 -{' '}
              <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading3>
            <Heading4>
              I'm a Header 4 containing a <Link href="#">link</Link> - 0123456789 -{' '}
              <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </Heading4>

            <TextBody>
              I am body text containing a <strong>strong word</strong> and a <Link href="#">link</Link> - 0123456789 -{' '}
              <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </TextBody>
            <TextSmall>
              I am small text containing a <strong>strong word</strong> and a <Link href="#">link</Link> - 0123456789 -{' '}
              <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </TextSmall>
            <TextTiny>
              I am tiny text containing a <strong>strong word</strong> and a <Link href="#">link</Link> - 0123456789 -{' '}
              <OldStyleNumber>0123456789</OldStyleNumber> - <Monospaced>0123456789</Monospaced>
            </TextTiny>
          </div>
        </div>
      </article>
    );
  }
}

export default TypographyTest;
