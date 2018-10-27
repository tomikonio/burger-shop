import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = props => {
  let ingredientArray = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient type={igKey} key={igKey + i} />;
      });
    }) // currently an array of Arrays: [[], [], ...]
    .reduce((acc, cur) => {
      return acc.concat(cur);
    }, []); // reduce to an array of jsx elements

  if (ingredientArray.length === 0) {
    ingredientArray = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
