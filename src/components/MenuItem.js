import React, { Component }  from 'react';
import createMenuItems from './CreateMenuItems';
import { Link } from 'react-router-dom';


const MenuItemIcon = ({ icon }) => (
  <span className="menu__item__icon__wrapper">
    <i className={`menu__item__icon fas fa-${icon}`}></i>
  </span>
);

const MenuItemTitle = ({title}) => (
  <span className="menu__item__title">
    {title}
  </span>
);

class MenuItem extends Component {

  render() {
    const {
      title,
      description,
      icon,
      link,
      items,
      id,
    } = this.props;

    return (
      <li>
        <Link
          to={link}
          className="menu__item__link"
          >
          {!!icon && <MenuItemIcon icon={icon} />}
          <MenuItemTitle title={title} />
        </Link>
      </li>
    );

  }

};

export default MenuItem;
