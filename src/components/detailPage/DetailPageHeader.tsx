import { IconArrowLeftSmallOutline } from '@teamleader/ui-icons';
import React from 'react';
import BadgedLink from '../badgedLink';
import { Box } from '../box';
import Container from '../container';
import { ContainerProps } from '../container/Container';
import Section from '../section';
import { Heading1, TextBody } from '../typography';
import theme from './theme.css';

interface DetailPageHeaderProps extends Omit<ContainerProps, 'title'> {
  backLinkProps?: any; // @todo use BadgedLinkProps and omit icon and inherit prop
  title: React.ReactNode;
  /** The color which the title should have */
  titleColor?: 'neutral' | 'teal';
  titleSuffix?: React.ReactNode;
}

const DetailPageHeader = ({
  backLinkProps,
  children,
  title,
  titleColor = 'teal',
  titleSuffix,
  ...others
}: DetailPageHeaderProps) => {
  return (
    <Container {...others} element={Section}>
      <Box className={theme['header-inner']} display="flex">
        {backLinkProps && (
          <TextBody className={theme['back-link']}>
            <BadgedLink {...backLinkProps} icon={<IconArrowLeftSmallOutline />} inherit={false} />
          </TextBody>
        )}
        <Box flex="1 0 200px" paddingTop={5} overflow="hidden">
          <Box alignItems="center" display="flex">
            <Heading1
              color={titleColor}
              maxLines={1}
              tint={titleColor === 'neutral' ? 'dark' : 'darkest'}
              title={title}
            >
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
};

export default DetailPageHeader;
