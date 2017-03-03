import React from 'react';
import { Card } from '../../components/card';
import theme from './card.css';

class CardTest extends React.Component {

  render () {
    return (
      <section>
        <h2>Card</h2>

        <div className={theme['card-container']}>
          <Card><h3>This is a normal card</h3></Card>
          <Card disabled><h3>This is a disabled card</h3></Card>
          <Card dragging><h3>This is a dragged card</h3></Card>
        </div>

        <hr />
      </section>
    );
  }
}

export default CardTest;
