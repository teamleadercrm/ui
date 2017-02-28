import React, { Component, PropTypes } from 'react';
import { themr } from 'react-css-themr';
import { POPOVER } from '../identifiers.js';
import injectDialog from '../dialog';

const factory = (Dialog) => {
  class Popover extends Component {
    static propTypes = {
      actions: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.node,
      })),
      active: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      onEscKeyDown: PropTypes.func,
      onOverlayClick: PropTypes.func,
      onOverlayMouseDown: PropTypes.func,
      onOverlayMouseMove: PropTypes.func,
      onOverlayMouseUp: PropTypes.func,
      theme: PropTypes.shape({
        active: PropTypes.string,
        body: PropTypes.string,
        button: PropTypes.string,
        dialog: PropTypes.string,
        navigation: PropTypes.string,
        overlay: PropTypes.string,
        title: PropTypes.string,
        wrapper: PropTypes.string,
      }),
      title: PropTypes.string,
      type: PropTypes.string,
    };

    static defaultProps = {
      actions: [],
      active: false,
      type: 'normal',
    };

    componentDidMount () {
      this.setPlacement();
    }

    getAnchorPosition (anchorEl) {
      console.log('get anchor pos', anchorEl);
      const anchorRect = anchorEl.getBoundingClientRect();

      const anchorPosition = {
        top: anchorRect.top,
        left: anchorRect.left,
        width: el.offsetWidth,
        height: el.offsetHeight,
      };

      anchorPosition.right = anchorRect.right || anchorPosition.left + anchorPosition.width;
      anchorPosition.bottom = anchorRect.bottom || anchorPosition.top + anchorPosition.height;
      anchorPosition.middle = anchorPosition.left + ((anchorPosition.right - anchorPosition.left) / 2);
      anchorPosition.center = anchorPosition.top + ((anchorPosition.bottom - anchorPosition.top) / 2);

      return anchorPosition;
    }

    getTargetPosition (targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth,
      };
    }

    setPlacement () {
      if (!this.dialog) {
        return;
      }

      const targetEl = this.dialog;

      if (!targetEl) {
        return;
      }

      const { targetOrigin, anchorOrigin, anchorEl } = this.props;
      // const anchorEl = this.props.anchorEl || this.anchorEl;

      console.log('anchorEl', anchorEl);

      const anchor = this.getAnchorPosition(anchorEl);
      let target = this.getTargetPosition(targetEl);
      console.log('anchor', anchor);
      console.log('target', target);
      //
      // let targetPosition = {
      //   top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
      //   left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal],
      // };
      //
      // if (this.props.canAutoPosition) {
      //   target = this.getTargetPosition(targetEl); // update as height may have changed
      //   targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      // }

      // if(anchor.top > targetPosition.top) {
      //   this.setState({
      //     arrowVerticalPositionClass: "arrow-vertical-bottom"
      //   });
      // } else {
      //   this.setState({
      //     arrowVerticalPositionClass: ""
      //   });
      // }
      //
      // if(anchor.left > targetPosition.left) {
      //   this.setState({
      //     arrowHorizontalPositionClass: "arrow-horizontal-right"
      //   });
      // } else {
      //   this.setState({
      //     arrowHorizontalPositionClass: ""
      //   });
      // }

      // targetEl.style.top = `${Math.max(0, targetPosition.top)}px`;
      // targetEl.style.left = `${Math.max(0, targetPosition.left)}px`;
      // targetEl.style.maxHeight = `${window.innerHeight}px`;
    }

    render () {
      return (
        <Dialog
          actions={this.props.actions}
          active={this.props.active}
          title='My POPOVER dialog'
          ref={(dialog) => {
            this.dialog = dialog;
          }}
        >
          {this.props.children}
        </Dialog>
      );
    }
  }

  return Popover;
};

const Popover = factory(injectDialog);

export default themr(POPOVER)(Popover);
export { Popover };
export { factory as popoverFactory };
