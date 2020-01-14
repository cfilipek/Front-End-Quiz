import React, { Component }  from 'react';
import SplashPage from './SplashPage';
import Card from './Card';
import DrawCard from './DrawCard';


class Home extends Component {

  state = {
    display: "block",
    displayHome: "none",
    cards: [
      {id: 1, q: "How?", ans: ["bc"]},
      {id: 2, q: "Why?", ans: ["bc", "i"]}
    ],
    currentCard: {}
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards){
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];

    return card;
  }

  updateCard = () => {

    const currentCards = this.state.cards;

    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ display: "none", displayHome: "block" }), 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }


  render()
  {
    return(
    <div>
      <div style={{display:`${this.state.display}`}}>
        <SplashPage/>
      </div>
      <div  className="container"  style={{display:`${this.state.displayHome}`}}>
        <div className="card-row">
          <Card
          question={this.state.currentCard.q}
          answers={this.state.currentCard.ans}
          />
        </div>
        <div className="button-row">
          <DrawCard drawCard={this.updateCard}/>
        </div>
      </div>

    </div>)}
}


export default Home;
