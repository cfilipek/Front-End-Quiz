import React, { Component }  from 'react';
import SplashPage from './SplashPage';

class Home extends Component {

  state = {
    display: "block",
    displayHome: "none"
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
      <div style={{display:`${this.state.displayHome}`}}>
        <div>Rest of homepage</div>
      </div>

    </div>)}
}


export default Home;
