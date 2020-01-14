import React, { Component }  from 'react';
import createMenuItems from './CreateMenuItems';

class Menu extends Component {

  render() {

    const { menu } = this.props;
    const { items, title, description } = menu;

    const menuItems = createMenuItems(items);

    return (
      <div className="menu">
        <div className="menu__header">
          <div className="menu__header__title">
            {title} <br/> Flash Cards
          </div>
          <div className="menu__header__description">
            {description} <a href="http://clairefilipek.com/#/" target="_blank" rel="noopener noreferrer">Claire Filipek</a>
          </div>
        </div>
        <ul className="menu__list">
          {menuItems}
        </ul>
      </div>
    )
  }
}

export default Menu;
