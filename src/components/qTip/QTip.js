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
    const {
      active,
      children,
      highlighted,
      icon,
      onChange,
      onEscKeyDown,
      onOverlayClick,
      onOverlayMouseDown,
      onOverlayMouseMove,
      onOverlayMouseUp,
      ...others
    } = this.props;

    const classNames = cx(theme['container'], {
      [theme['is-active']]: active,
      [theme['is-highlighted']]: highlighted,
    });

    const level = highlighted ? 'primary' : 'secondary';

    return (
      <Box className={classNames} {...others}>
        <Overlay
          active={active}
          onClick={onOverlayClick}
          onEscKeyDown={onEscKeyDown}
          onMouseDown={onOverlayMouseDown}
          onMouseMove={onOverlayMouseMove}
          onMouseUp={onOverlayMouseUp}
        />
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
  /** If true, the QTip becomes fully visible on screen. */
  active: PropTypes.bool,
  /** The content to display inside the QTip. */
  children: PropTypes.node.isRequired,
  /** If true, the toggle button's color changes to mint instead of neutral. */
  highlighted: PropTypes.bool,
  /** The icon displayed inside the toggle button. */
  icon: PropTypes.element.isRequired,
  /** The function executed, when the active prop has changed. */
  onChange: PropTypes.func.isRequired,
  /** The function executed, when the "ESC" key is down. */
  onEscKeyDown: PropTypes.func,
  /** The function executed, when the Overlay is clicked. */
  onOverlayClick: PropTypes.func,
  /** The function executed, when the mouse is down on the Overlay. */
  onOverlayMouseDown: PropTypes.func,
  /** The function executed, when the mouse is being moved over the Overlay. */
  onOverlayMouseMove: PropTypes.func,
  /** The function executed, when the mouse is up on the Overlay. */
  onOverlayMouseUp: PropTypes.func,
};

QTip.defaultProps = {
  active: false,
};

export default QTip;
