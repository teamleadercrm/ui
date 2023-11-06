import { IconArrowLeftSmallOutline } from '@teamleader/ui-icons';
import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import BadgedLink from '../badgedLink';
import { BadgedLinkProps } from '../badgedLink/BadgedLink';
import { Box } from '../box';
import Container from '../container';
import { ContainerProps } from '../container/Container';
import { Heading1, TextBody } from '../typography';
import theme from './theme.css';

export interface DetailPageHeaderProps extends Omit<ContainerProps, 'title'> {
  children?: ReactNode;
  backLinkProps?: Omit<BadgedLinkProps, 'icon' | 'inherit'> & { children: ReactNode };
  title: React.ReactNode;
  /** The color which the title should have */
  titleColor?: 'neutral' | 'teal';
  titleSuffix?: React.ReactNode;
}

const DetailPageHeader: GenericComponent<DetailPageHeaderProps> = forwardRef<HTMLElement, DetailPageHeaderProps>(
  ({ backLinkProps, children, title, titleColor = 'teal', titleSuffix, ...others }, ref) => {
    return (
      <Container
        data-teamleader-ui="detail-page-header"
        backgroundColor="neutral"
        backgroundTint="lightest"
        borderBottomWidth={1}
        borderTint="normal"
        padding={4}
        {...others}
        ref={ref}
      >
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
                title={typeof title === 'string' ? title : undefined}
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
  },
);

DetailPageHeader.displayName = 'DetailPage.Header';

export default DetailPageHeader;
