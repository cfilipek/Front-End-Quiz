import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';



const App = () => (
  <Router>
    <div className="mobile">
      <Header/>
    </div>
    <Route  exact path='/' component={Home}></Route>
    <Route  path='/about' component={About}></Route>
    <Footer/>
  </Router>
)

export default App;

