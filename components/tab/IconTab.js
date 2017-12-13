import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

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
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  static defaultProps = {
    element: 'a',
    active: false,
  };

  render() {
    const { active, children, className, counter = null, icon, ...others } = this.props;
    const classNames = cx(theme['icon-tab'], { [theme['is-active']]: active }, className);

    const IconToRender = iconMap[icon.toLowerCase()];

    return (
      <Box
        data-teamleader-ui="title-tab"
        className={classNames}
        marginHorizontal={3}
        paddingHorizontal={3}
        paddingVertical={4}
        {...others}
      >
        <IconToRender element="span">{children}</IconToRender>
        {counter && React.cloneElement(counter, { className: theme['counter'], koekoek: 'jongen' })}
      </Box>
    );
  }
}

export default IconTab;
