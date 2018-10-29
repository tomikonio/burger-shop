import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

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
      <div style={{ display: 'flex' }}>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    </Fragment>
  );
};

export default OrderSummery;
