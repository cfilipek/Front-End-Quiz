import React, { Component }  from 'react';
import SplashPage from './SplashPage';
import Card from './Card';
import DrawCard from './DrawCard';
import {connect} from 'react-redux';


class Home extends Component {

  state = {
    display: "block",
    displayHome: "none",
    currentCard: {}
  }

  componentWillMount() {
    const currentCards = this.props.cards;

    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards){
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];

    return card;
  }

  updateCard = () => {

    const currentCards = this.props.cards;

    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  nextCard = () => {
    let currentCard;
    let idCard = this.state.currentCard.id;
    let nextId = idCard++;
    console.log(nextId, this.props.cards.length);
    if(nextId === this.props.cards.length){
       currentCard = this.props.cards[0];
    }
    else {
      currentCard = this.props.cards[nextId]
    }
    this.setState({
      currentCard: currentCard
    })
  }

  previousCard = () => {
    let currentCard;
    let idCard = this.state.currentCard.id;
    console.log(idCard);
    parseInt(idCard)
    let nextId = --idCard;
    console.log(nextId, this.props.cards.length);
    if((nextId) === 0){
       currentCard = this.props.cards[this.props.cards.length - 1];
    }
    else {
      console.log(nextId, 'made it here')
      currentCard = this.props.cards[nextId-1]
    }
    this.setState({
      currentCard: currentCard
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
          color={this.state.currentCard.color}
          />
        </div>
        <div className="button-row">
          <DrawCard drawCard={this.updateCard} nextCard={this.nextCard} previousCard={this.previousCard}/>
        </div>
      </div>

    </div>)}
}

const mapStateToProps = (state) => {
  return{
    cards: state.cards
  };
}

export default connect(mapStateToProps, null)(Home);
