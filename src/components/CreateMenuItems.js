import React from 'react';
import MenuItem from './MenuItem';
import uuid from 'uuid';

const createMenuItems = (items, maxDepth) => {

  return items.map((item, index) => {
    const {
      title,
      description,
      icon,
      link,
      items,
    } = item;

    const key = uuid.v4();


    return (
      <MenuItem
        title={title}
        description={description}
        icon={icon}
        link={link}
        items={items}
        key={key}
        id={`menu__item--${key}`}
      >
      </MenuItem>
    );

  });
};

export default createMenuItems;
