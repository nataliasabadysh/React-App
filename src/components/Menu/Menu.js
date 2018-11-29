import React, { Component } from 'react';
import ListCards from './ListCards/index';
import Styles from './Menu.module.css';

import menu from './menu.json';

export default class Cards extends Component {
  render() {
    return (
      <div>
        <h1 className={Styles.Menu}>List of Menu</h1>
        <ListCards menu= { menu } />
      </div>
    );
  }
}
