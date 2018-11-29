import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import Menu from './Menu/Menu';

import Authentication from './Authentication/index';
import menu from "./Menu/menu.json";

const App = () => (
  <div>
    <AppHeader />
    <Menu menu={menu} />
    <hr/>
    <Authentication />
  </div>
);

export default App;
