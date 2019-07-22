import React from 'react';
import sharedStyles from "../shared.scss";
import cartStyles from "../yourCart/yourCart.scss";
import styles from './congrat.scss';

const ThankYou: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={sharedStyles.header}>
          Thank you for
          ordering with us
        </div>

        <div className={cartStyles.cartWrapper}>
          <div>
            <p>Your order #123456 has been placed.
              It will be delivered by 11:47
            </p>

            <button className={styles.customerSupportBtn}>Customer support</button>

            <br />
            <h5 className={styles.orderSummary}>Order summary</h5>

            <table className={styles.table}>
              <tr>
                <td>Order number</td>
                <td>#HTL12345</td>
              </tr>
              <tr>
                <td>Delivery address</td>
                <td>1912, Greenwood city, Sector-45,
                  Gurgaon, Haryana.</td>
              </tr>
              <tr>
                <td>Total amount</td>
                <td>$ 200.50</td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ThankYou;
