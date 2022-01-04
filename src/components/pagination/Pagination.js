import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { TextBody } from '../typography';
import { IconChevronLeftMediumOutline, IconChevronRightMediumOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';

class Pagination extends PureComponent {
  render() {
    const { className, currentPage, maxNumPagesVisible, numPages, children, ...others } = this.props;

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
              {children({
                number: currentPage - 1,
                isActive: false,
                icon: <IconChevronLeftMediumOutline />,
                iconPlacement: 'left',
              })}
            </li>
          )}
          {iterator.map((page) => {
            const isActive = page === currentPage;

            return (
              <li key={page} className={theme['list-item']}>
                {String(page).startsWith('ellipsis') ? (
                  <TextBody className={theme['ellipsis']} element="span">
                    ...
                  </TextBody>
                ) : (
                  children({
                    number: page,
                    text: page,
                    isActive,
                    className: isActive ? theme['is-current'] : '',
                  })
                )}
              </li>
            );
          })}
          {currentPage < numPages && (
            <li className={theme['list-item']}>
              {children({
                number: currentPage + 1,
                isActive: false,
                icon: <IconChevronRightMediumOutline />,
                iconPlacement: 'right',
              })}
            </li>
          )}
        </ul>
      </Box>
    );
  }
}

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  maxNumPagesVisible: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  maxNumPagesVisible: 7,
};

export default Pagination;
