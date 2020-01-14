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
          <DrawCard drawCard={this.updateCard}/>
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
