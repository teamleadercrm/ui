import React from 'react';
import ReactDOM from 'react-dom';
import Popover from '../../components/popover';
import Button from '../../components/button';

class PopoverTest extends React.Component {
  state = {
    active: false,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  };

  componentDidMount () {
    this.anchorEl = ReactDOM.findDOMNode(this.popoverToggleButton);
    this.forceUpdate();
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  actions = [
    { label: 'Cancel', onClick: this.handleToggle },
    { label: 'Save', onClick: this.handleToggle, primary: true },
  ];

  setAnchor(positionElement, position) {
    const { anchorOrigin } = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    });
  }

  setTarget(positionElement, position) {
    const { targetOrigin } = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  }

  render () {
    return (
      <section>
        <h2>Popover</h2>

          <Button style={{ 'marginLeft': '50%', 'border': '1px solid red' }} label='Show my popover' onClick={this.handleToggle} ref={(button) => {
            this.popoverToggleButton = button;
          }} />

          <h3>Anchor origin</h3>
          <h4>Vertical</h4>
          <label><input type="radio" onChange={this.setAnchor.bind(this, 'vertical', 'top')} checked={this.state.anchorOrigin.vertical === 'top'} /> Top</label>
          <label><input type="radio" onChange={this.setAnchor.bind(this, 'vertical', 'center')} checked={this.state.anchorOrigin.vertical === 'center'} /> Center</label>
          <label><input type="radio" onChange={this.setAnchor.bind(this, 'vertical', 'bottom')} checked={this.state.anchorOrigin.vertical === 'bottom'} /> Bottom</label>
          <h4>Horizontal</h4>
          <label><input type="radio" onChange={this.setAnchor.bind(this, 'horizontal', 'left')} checked={this.state.anchorOrigin.horizontal === 'left'} /> Left</label>
          <label><input type="radio" onChange={this.setAnchor.bind(this, 'horizontal', 'middle')} checked={this.state.anchorOrigin.horizontal === 'middle'} /> Middle</label>
          <label><input type="radio" onChange={this.setAnchor.bind(this, 'horizontal', 'right')} checked={this.state.anchorOrigin.horizontal === 'right'} /> Right</label>

          <h3>Target origin</h3>
          <h4>Vertical</h4>
          <label><input type="radio" onChange={this.setTarget.bind(this, 'vertical', 'top')} checked={this.state.targetOrigin.vertical === 'top'} /> Top</label>
          <label><input type="radio" onChange={this.setTarget.bind(this, 'vertical', 'center')} checked={this.state.targetOrigin.vertical === 'center'} /> Center</label>
          <label><input type="radio" onChange={this.setTarget.bind(this, 'vertical', 'bottom')} checked={this.state.targetOrigin.vertical === 'bottom'} /> Bottom</label>
          <h4>Horizontal</h4>
          <label><input type="radio" onChange={this.setTarget.bind(this, 'horizontal', 'left')} checked={this.state.targetOrigin.horizontal === 'left'} /> Left</label>
          <label><input type="radio" onChange={this.setTarget.bind(this, 'horizontal', 'middle')} checked={this.state.targetOrigin.horizontal === 'middle'} /> Middle</label>
          <label><input type="radio" onChange={this.setTarget.bind(this, 'horizontal', 'right')} checked={this.state.targetOrigin.horizontal === 'right'} /> Right</label>

        { this.anchorEl &&
          <Popover
            actions={this.actions}
            active={this.state.active}
            anchorEl={this.anchorEl}
            anchorOrigin={this.state.anchorOrigin}
            targetOrigin={this.state.targetOrigin}
            onCloseClick={this.handleToggle}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
            title='My awesome POPOVER dialog'
          >
            <p>Here you can add popover content.</p>
            <div className='highlight'>
              <p>Here you can highlight some content.</p>
            </div>
          </Popover>
        }
      </section>
    );
  }
}

export default PopoverTest;
