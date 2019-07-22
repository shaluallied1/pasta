import React from 'react';
import sharedStyles from "../shared.scss";
import cartStyles from "../yourCart/yourCart.scss";
import styles from './order.scss';

const OrderSummary: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={sharedStyles.header}>
          Order Summary
        </div>

        <div className={cartStyles.cartWrapper}>
          <div className={styles.orderSummary}>
            <label>ORDER DELIVERED TO</label>
            <p>Mayan Sachan</p>

            <div className={styles.break}> </div>

            <label>NAME OF PASTA</label>
            <p>Alfredo spaghetti</p>

            <div className={styles.break}> </div>

            <div className={styles.orderSummaryCard}>
              <div>
                <label>Bowl</label>
                <p>Mini bowl</p>

                <div className={styles.break}> </div>

                <label>Pasta</label>
                <p>Spaghetti</p>

                <div className={styles.break}> </div>

                <label>Garnish</label>
                <p>Extra cheese</p>

                <div className={styles.break}> </div>

                <p>*(Parmesan and basil will always be included)</p>
              </div>

              <div>
                <label>Sauce</label>
                <p>White sauce</p>

                <div className={styles.break}> </div>

                <label>Meat</label>
                <p>Grilled chicken</p>

                <div className={styles.break}> </div>

                <label>Veggies</label>
                <p>Broccoli</p>
              </div>


            </div>

            <div className={styles.afterCard}>
              <label>ORDERED ON</label>
              <p>12/06/19</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
