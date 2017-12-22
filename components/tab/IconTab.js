import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';

import {
  IconCalendarMediumOutline,
  IconCheckmarkMediumOutline,
  IconContactsMediumOutline,
  IconInvoiceMediumOutline,
  IconProductsMediumOutline,
  IconStatsMediumOutline,
  IconTimerMediumOutline,
} from '@teamleader/ui-icons';

const iconMap = {
  crm: IconContactsMediumOutline,
  invoices: IconInvoiceMediumOutline,
  products: IconProductsMediumOutline,
  stats: IconStatsMediumOutline,
  time: IconTimerMediumOutline,
  deals: IconCheckmarkMediumOutline,
  planning: IconCalendarMediumOutline,
};

class IconTab extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    counter: PropTypes.node,
    element: PropTypes.node,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    element: 'a',
    active: false,
  };

  constructor() {
    super(...arguments);
    this.handleClick = ::this.handleClick;
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    if (event.pageX !== 0 && event.pageY !== 0) {
      this.blur();
    }
  }

  blur() {
    if (this.tabNode) {
      this.tabNode.getNode().blur();
    }
  }

  render() {
    const { active, children, className, counter = null, icon, ...others } = this.props;
    const classNames = cx(theme['icon-tab'], { [theme['is-active']]: active }, className);

    const rest = omit(others, ['onClick']);

    const IconToRender = iconMap[icon.toLowerCase()];

    return (
      <Box
        data-teamleader-ui="icon-tab"
        className={classNames}
        marginHorizontal={3}
        paddingHorizontal={3}
        paddingVertical={4}
        ref={node => {
          this.tabNode = node;
        }}
        onClick={this.handleClick}
        {...rest}
      >
        <IconToRender element="span">{children}</IconToRender>
        {counter && React.cloneElement(counter, { className: theme['counter'] })}
      </Box>
    );
  }
}

export default IconTab;
