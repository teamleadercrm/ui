import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconArrowLeftSmallOutline } from '@teamleader/ui-icons';
import { Box } from '../box';
import { Heading1, TextBody } from '../typography';
import Link from '../link';
import Section from '../section';
import theme from './theme.css';
import Container from '../container';

class DetailPageHeader extends PureComponent {
  render() {
    const { backLinkProps, children, title, titleColor, titleSuffix, ...others } = this.props;

    return (
      <Container {...others} element={Section}>
        <Box className={theme['header-inner']} display="flex">
          {backLinkProps && (
            <TextBody className={theme['back-link']}>
              <Link {...backLinkProps} badged icon={<IconArrowLeftSmallOutline />} inherit={false} />
            </TextBody>
          )}
          <Box flex="1 0 200px" paddingTop={5} overflow="hidden">
            <Box alignItems="center" display="flex">
              <Heading1 color={titleColor} ellipsis tint={titleColor === 'neutral' ? 'dark' : 'darkest'} title={title}>
                {title}
              </Heading1>
              {titleSuffix && <Box marginLeft={3}>{titleSuffix}</Box>}
            </Box>
          </Box>
          {children && (
            <Box flex="0 0 auto" display="flex" paddingLeft={7}>
              {children}
            </Box>
          )}
        </Box>
      </Container>
    );
  }
}

DetailPageHeader.propTypes = {
  backLinkProps: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
  /** The color which the title should have */
  titleColor: PropTypes.oneOf(['neutral', 'teal']),
  titleSuffix: PropTypes.node,
};

DetailPageHeader.defaultProps = {
  titleColor: 'teal',
};

export default DetailPageHeader;
