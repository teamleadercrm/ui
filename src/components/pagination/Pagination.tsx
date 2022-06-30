import React, { ReactNode } from 'react';
import Box from '../box';
import { TextBody } from '../typography';
import { IconChevronLeftMediumOutline, IconChevronRightMediumOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

interface ChildrenFunctionArgument {
  number: number;
  isActive: boolean;
  icon?: ReactNode;
  iconPlacement?: 'left' | 'right';
  text?: string;
  className?: string;
}

interface PaginationProps extends Omit<BoxProps, 'className' | 'children'> {
  className?: string;
  currentPage?: number;
  maxNumPagesVisible?: number;
  numPages: number;
  children: (args: ChildrenFunctionArgument) => ReactNode;
}

const Pagination: GenericComponent<PaginationProps> = ({
  className,
  currentPage = 1,
  maxNumPagesVisible = 7,
  numPages,
  children,
  ...others
}) => {
  if (numPages < 2) {
    return null;
  }

  const classNames = cx(theme['pagination'], className);
  const iterator = [currentPage];

  let counter = 0;

  while (iterator.length < maxNumPagesVisible && iterator.length < numPages) {
    if (counter % 2 === 0 && iterator[0] !== 1) {
      iterator.unshift(iterator[0] - 1);
    } else if (counter % 2 === 1 && iterator[iterator.length - 1] !== numPages) {
      iterator.push(iterator[iterator.length - 1] + 1);
    }

    counter++;
  }

  // make sure the first and the last item are the first and the last page
  iterator[0] = 1;
  iterator[iterator.length - 1] = numPages;

  // should we replace the 2nd and 2nd last by ellipsis?
  let firstEllipsisIndex: number | null = null;
  let secondEllipsisIndex: number | null = null;

  if (iterator.length > 1 && iterator[1] !== 2) {
    firstEllipsisIndex = 1;
  }
  if (iterator.length > 1 && iterator[iterator.length - 2] !== numPages - 1) {
    secondEllipsisIndex = iterator.length - 2;
  }

  return (
    <Box data-teamleader-ui="pagination" className={classNames} element="nav" {...others}>
      <ul className={theme['list']}>
        <li className={cx(theme['list-item'], theme['list-item__arrowed'])}>
          {children({
            number: currentPage - 1,
            isActive: currentPage === 1,
            icon: <IconChevronLeftMediumOutline />,
            iconPlacement: 'left',
          })}
        </li>
        {iterator.map((page, index) => {
          const isActive = page === currentPage;
          const isEllipsis = firstEllipsisIndex === index || secondEllipsisIndex === index;

          return (
            <li key={page} className={theme['list-item']}>
              {isEllipsis ? (
                <TextBody className={theme['ellipsis']} element="span">
                  ...
                </TextBody>
              ) : (
                children({
                  number: page,
                  text: String(page),
                  isActive,
                  className: isActive ? theme['is-current'] : '',
                })
              )}
            </li>
          );
        })}
        <li className={cx(theme['list-item'], theme['list-item__arrowed'])}>
          {children({
            number: currentPage + 1,
            isActive: currentPage === numPages,
            icon: <IconChevronRightMediumOutline />,
            iconPlacement: 'right',
          })}
        </li>
      </ul>
    </Box>
  );
};

export default Pagination;
