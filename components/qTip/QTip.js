import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Button, { IconButton } from '../button';
import Overlay from '../overlay';
import { IconArrowRightSmallOutline } from '@teamleader/ui-icons';

class QTip extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    closed: PropTypes.bool,
    highlighted: PropTypes.bool,
    icon: PropTypes.element.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { children, closed, highlighted, icon, onChange } = this.props;

    const classNames = cx(theme['container'], {
      [theme['is-closed']]: closed,
      [theme['is-highlighted']]: highlighted,
    });

    const level = highlighted ? 'primary' : 'secondary';

    return (
      <div className={classNames}>
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
      </div>
    );
  }
}

export default QTip;
