import React, { Component }  from 'react';

class DrawCard extends Component {

  drawCard = () => {
    this.props.drawCard();
  }

  nextCard = () => {
    this.props.nextCard();
  }

  previousCard = () => {
    this.props.previousCard();
  }

  render () {
    return (
      <div className="button-container">
        <button className="btn" onClick={this.previousCard}>Previous Card</button>
        <button className="btn" onClick={this.drawCard}>Random Card</button>
        <button className="btn" onClick={this.nextCard}>Next Card</button>
      </div>
    )
  }
}

export default DrawCard;
