import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { LinkButton } from '../button';
import { TextSmall } from '../typography';
import { IconChevronLeftMediumOutline, IconChevronRightMediumOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';

class Pagination extends PureComponent {
  static propTypes = {
    inverse: PropTypes.bool,
    nextPageText: PropTypes.string,
    numItems: PropTypes.number.isRequired,
    numItemsPerPage: PropTypes.number,
    maxNumPagesVisible: PropTypes.number,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    prevPageText: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    currentPage: 1,
    inverse: false,
    numItemsPerPage: 10,
    maxNumPagesVisible: 7,
  };

  render() {
    const {
      className,
      currentPage,
      inverse,
      maxNumPagesVisible,
      nextPageText,
      numItems,
      numItemsPerPage,
      onPageChange,
      prevPageText,
      ...others
    } = this.props;

    const numPages = Math.ceil(numItems / numItemsPerPage);

    if (numPages < 2) {
      return null;
    }

    const classNames = cx(theme['pagination'], { [theme['inverse']]: inverse }, className);
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
    if (iterator.length > 1 && iterator[1] !== 2) {
      iterator[1] = 'ellipsis-left';
    }
    if (iterator.length > 1 && iterator[iterator.length - 2] !== numPages - 1) {
      iterator[iterator.length - 2] = 'ellipsis-right';
    }

    return (
      <Box data-teamleader-ui="pagination" className={classNames} element="nav" {...others}>
        <ul className={theme['list']}>
          {currentPage > 1 && (
            <li className={theme['list-item']}>
              <LinkButton
                icon={<IconChevronLeftMediumOutline />}
                inverse={inverse}
                label={prevPageText}
                onClick={() => onPageChange(currentPage - 1)}
              />
            </li>
          )}
          {iterator.map(page => {
            return (
              <li key={page} className={theme['list-item']}>
                {('' + page).includes('ellipsis') ? (
                  <TextSmall className={theme['ellipsis']} element="span">
                    ...
                  </TextSmall>
                ) : (
                  <LinkButton
                    className={page === currentPage && theme['current']}
                    inverse={inverse}
                    label={page}
                    onClick={() => onPageChange(page)}
                    size="small"
                  />
                )}
              </li>
            );
          })}
          {currentPage < numPages && (
            <li className={theme['list-item']}>
              <LinkButton
                icon={<IconChevronRightMediumOutline />}
                iconPlacement="right"
                inverse={inverse}
                label={nextPageText}
                onClick={() => onPageChange(currentPage + 1)}
              />
            </li>
          )}
        </ul>
      </Box>
    );
  }
}

export default Pagination;
