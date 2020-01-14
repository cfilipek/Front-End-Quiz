import React, { Component }  from 'react';
import Menu from './Menu';
import '../App.scss';


// const { CSSTransition, TransitionGroup } = ReactTransitionGroup;

const menuData = {
  title: 'Front End',
description: `Created by`,
  icon: 'star',
  logo: '',
  items: [
  {
    title: 'Home',
    description: 'lorem ipsum',
    icon: 'home',
    link: '/',
    items: [],
  },
    {
    title: 'About',
    description: 'lorem ipsum dolor',
    icon: 'info-circle',
    link: '/about',
    items: [],
  },
  {
    title: 'Resources',
    description: 'lorem ipsum',
    icon: 'bookmark',
    link: '#',
    items: [],
  },
]
};

class Header extends Component {
  render () {
    return (
      <Menu
        menu={menuData}
      />
    );
  }
}

export default Header;
