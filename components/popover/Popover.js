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
      anchorEl: PropTypes.object.isRequired,
      anchorOrigin: PropTypes.shape({
        horizontal: PropTypes.string.isRequired,
        vertical: PropTypes.string.isRequired,
      }),
      backdrop: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      onCloseClick: PropTypes.func,
      onEscKeyDown: PropTypes.func,
      onOverlayClick: PropTypes.func,
      onOverlayMouseDown: PropTypes.func,
      onOverlayMouseMove: PropTypes.func,
      onOverlayMouseUp: PropTypes.func,
      targetOrigin: PropTypes.shape({
        horizontal: PropTypes.string.isRequired,
        vertical: PropTypes.string.isRequired,
      }),
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
      canAutoPosition: true,
      type: 'normal',
      backdrop: 'transparent',
    };

    render () {
      return (
        <Dialog
          actions={this.props.actions}
          active={this.props.active}
          anchorEl={this.props.anchorEl}
          anchorOrigin={this.props.anchorOrigin}
          targetOrigin={this.props.targetOrigin}
          title={this.props.title}
          canAutoPosition
          onCloseClick={this.props.onCloseClick}
          onOverlayClick={this.props.onOverlayClick}
          backdrop={this.props.backdrop}
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
