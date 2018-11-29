import React from 'react';
import Styles from './Dropdown.module.css';

const Dropdown = () => (
  <div className={Styles.container}>
    <p className={Styles.p}> Account </p>
    <p className={Styles.p}> Order History </p>
    <p className={Styles.p}> Meal PLanner </p>
    <button type="button" className={Styles.button}>LogOut</button>
  </div>
);

export default Dropdown;
