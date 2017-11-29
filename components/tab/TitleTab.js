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
    counter: PropTypes.node,
    element: PropTypes.node,
  };

  static defaultProps = {
    element: 'a',
    active: false,
  };

  render() {
    const { active, children, className, counter = null, ...others } = this.props;
    const classNames = cx(theme['title-tab'], { [theme['is-active']]: active }, className);

    return (
      <Box
        data-teamleader-ui="title-tab"
        className={classNames}
        marginHorizontal={3}
        paddingHorizontal={3}
        paddingVertical={4}
        {...others}
      >
        <Heading4>{children}</Heading4>
        {counter}
      </Box>
    );
  }
}

export default TitleTab;
