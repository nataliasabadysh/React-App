import React from 'react';

const Tab = ({ title, text, image }) => (
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
    <img src={image} alt={title} width={100} height={100} />
  </div>
);

export default Tab;
