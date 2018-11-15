import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes good!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button btnType="Danger" clicked>
          CANCEL
        </Button>
        <Button btnType="Success" clicked>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
