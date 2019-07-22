import React from 'react';
import sharedStyles from "../shared.scss";
import cartStyles from "../yourCart/yourCart.scss";
import styles from './order.scss';

const MyOrders: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={sharedStyles.header}>
          My Orders
        </div>

        <div className={cartStyles.cartWrapper}>

          <div className={styles.orderCard}>
            <div className={styles.orderDetails}>

              <div>
                <label>ORDER DELIVERED TO</label>
                <p>Mayan Sachan</p>

                <div className={styles.break}> </div>

                <label>ORDER NUMBER</label>
                <p>ABCDEF123456</p>

                <div className={styles.break}> </div>

                <label>TOTAL</label>
                <p>Rs 100</p>
              </div>

              <div>
                <label>ORDERED ON</label>
                <p>12/06/19</p>
              </div>

            </div>

            <hr />
            <div className={styles.orderDetails}>
              <p className={styles.deliveryText}>DELIVERED</p>
              <button className={styles.orderbtn}>REORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
