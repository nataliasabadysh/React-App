import React from 'react';
import Card from '../Card/index';
import Styles from '../Menu.module.css'

const PostsList = ({ menu }) => (
  <ul className={Styles.List}>
    {menu.map(item => (
      <li className = { Styles.Cards } key={ item.id }>
        <Card {...item} />
      </li>
    ))}
  </ul>
);

export default PostsList;
