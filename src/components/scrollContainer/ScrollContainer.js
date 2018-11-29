import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Box } from '../box';
import theme from './theme.css';

class ScrollContainer extends PureComponent {
  render() {
    const { className, header, body, footer, ...others } = this.props;

    const classNames = cx(theme['scroll-container'], className);

    return (
      <Box className={classNames} display="flex" flexDirection="column" {...others}>
        {header && <header>{header}</header>}
        {body && <div className={theme['scroll-container-body']}>{body}</div>}
        {footer && <footer>{footer}</footer>}
      </Box>
    );
  }
}

ScrollContainer.propTypes = {
  /** Node to render as the header */
  header: PropTypes.node,
  /** Node to render as the body */
  body: PropTypes.node,
  /** Node to render as the footer */
  footer: PropTypes.node,
};

export default ScrollContainer;
