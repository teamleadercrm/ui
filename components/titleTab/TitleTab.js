import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

import { Heading4 } from '../typography';

class TitleTab extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    element: PropTypes.node,
  };

  static defaultProps = {
    element: 'a',
    active: false,
  };

  render() {
    const { active, children, className, element, ...others } = this.props;
    const classNames = cx(theme['title-tab'], { [theme['is-active']]: active }, className);

    return (
      <Box data-teamleader-ui="title-tab" active={active} className={classNames} element={element} {...others}>
        <Heading4 paddingHorizontal={3}>{children}</Heading4>
      </Box>
    );
  }
}

export default TitleTab;
