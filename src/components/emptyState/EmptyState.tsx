import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import {
  IllustrationEmptyState36X36Pointer,
  IllustrationEmptyState48X48Pointer,
  IllustrationEmptyState130X130Pointer,
} from '@teamleader/ui-illustrations';
import { Heading3, TextBody } from '../typography';
import theme from './theme.css';

const illustrationMap = {
  small: <IllustrationEmptyState36X36Pointer />,
  medium: <IllustrationEmptyState48X48Pointer />,
  large: <IllustrationEmptyState130X130Pointer />,
};

/** @type {React.ComponentType<any>} */
class EmptyState extends PureComponent {
  render() {
    const { className, metaText, hidePointer, size, title, ...others } = this.props;

    const classNames = cx(
      theme['wrapper'],
      theme[`is-${size}`],
      {
        [theme['has-pointer']]: title,
      },
      className,
    );

    return (
      <Box
        {...others}
        alignItems="center"
        className={classNames}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        {title && !hidePointer && <div className={theme['pointer']}>{illustrationMap[size]}</div>}
        <div className={theme['content']}>
          {title && <Heading3 color="teal">{title}</Heading3>}
          {metaText && (
            <TextBody marginTop={title && 2} color="neutral">
              {metaText}
            </TextBody>
          )}
        </div>
      </Box>
    );
  }
}

EmptyState.propTypes = {
  hidePointer: PropTypes.bool,
  metaText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

EmptyState.defaultProps = {
  hidePointer: false,
  size: 'medium',
};

export default EmptyState;
