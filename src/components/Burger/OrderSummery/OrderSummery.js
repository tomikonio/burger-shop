import React, { Fragment } from 'react';

const style = {
  textTransform: 'capitalize'
};

const OrderSummery = props => {
  const ingredientSummery = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={style}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummery}</ul>
      <p>Continue to Checkout?</p>
    </Fragment>
  );
};

export default OrderSummery;
