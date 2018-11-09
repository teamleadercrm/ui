import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Button, { IconButton } from '../button';
import Overlay from '../overlay';
import { IconArrowRightSmallOutline } from '@teamleader/ui-icons';
import Box from '../box';

class QTip extends PureComponent {
  render() {
    const { children, closed, highlighted, icon, onChange, ...others } = this.props;

    const classNames = cx(theme['container'], {
      [theme['is-closed']]: closed,
      [theme['is-highlighted']]: highlighted,
    });

    const level = highlighted ? 'primary' : 'secondary';

    return (
      <Box className={classNames} {...others}>
        <Overlay active={!closed} onEscKeyDown={onChange} />
        <div className={theme['qtip']}>
          <Button className={theme['icon']} level={level} onClick={onChange} icon={icon} />
          <div className={theme['inner-container']}>
            <div className={theme['content']}>{children}</div>
            <IconButton
              className={theme['close-button']}
              size="small"
              onClick={onChange}
              icon={<IconArrowRightSmallOutline />}
            />
          </div>
        </div>
      </Box>
    );
  }
}

QTip.propTypes = {
  children: PropTypes.node.isRequired,
  closed: PropTypes.bool,
  highlighted: PropTypes.bool,
  icon: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
};

QTip.displayName = 'QTip';

export default QTip;
