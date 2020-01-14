import React, { Component }  from 'react';

class DrawCard extends Component {

  drawCard = () => {
    this.props.drawCard();
  }

  render () {
    return (
      <div className="button-container">
        <button className="btn" onClick={this.drawCard}>Random Card</button>
      </div>
    )
  }
}

export default DrawCard;
