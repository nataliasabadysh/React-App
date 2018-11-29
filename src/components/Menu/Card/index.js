import React, { Fragment } from 'react';
import Styles from '../Menu.module.css'

const Card = ({ name, description, image, price, ingredients }) => (
  <Fragment>
    <h2>{name}</h2>
    <p className={Styles.p}> <b> Description :</b> {description} </p>
    <img src={image} width={320} height={240} alt="food" />
    <p>Price: {price} $</p>
    <p>Ingredients: {ingredients}</p>
  </Fragment>
);

export default Card;
