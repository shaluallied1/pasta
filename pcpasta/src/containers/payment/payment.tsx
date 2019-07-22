import React from 'react';

import sharedStyles from '../shared.scss';
import styles from './payment.scss';
import cartStyles from '../yourCart/yourCart.scss';
import bowlImage from "../../assets/images/bowl.png";

import { ReactComponent as Paytm } from '../../assets/icons/paytm.svg';
import { ReactComponent as GooglePay } from '../../assets/icons/goog.svg';
import { ReactComponent as AmazonPay } from '../../assets/icons/amazon.svg';
import Link from "next/link";

const Payment: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={styles.header}>
          Your Payment
        </div>


        <div className={cartStyles.cartWrapper}>
          <div>
            {/* Card 1 */}
            <div className={cartStyles.cartCard}>
              <div className={cartStyles.cartCardWrap}>
                <div className={cartStyles.cart}>
                  <h4>Alfredo Spagetti</h4>
                  <p>
                    Broccoli, Bell pepper, Mushroom
                    Chicken sausage, Black olives,
                    Parsley, Farm fresh salad.
                  </p>

                  <div className={cartStyles.cartCardMoney}>
                    <span>250</span>
                    <button className={cartStyles.cartCardFullBtn}>Full</button>
                  </div>
                </div>

                <div className={cartStyles.cartCardImg}>
                  <img
                    alt="bowl"
                    src={bowlImage}
                  />
                </div>
              </div>
            </div>

            <br />
            {/* Card 2 */}
            <div className={cartStyles.cartCard}>
              <div className={cartStyles.cartCardWrap}>
                <div className={cartStyles.cart}>
                  <h4>Alfredo Spagetti</h4>
                  <p>
                    Broccoli, Bell pepper, Mushroom
                    Chicken sausage, Black olives,
                    Parsley, Farm fresh salad.
                  </p>

                  <div className={cartStyles.cartCardMoney}>
                    <span>250</span>
                    <button className={cartStyles.cartCardFullBtn}>Full</button>
                  </div>
                </div>

                <div className={cartStyles.cartCardImg}>
                  <img
                    alt="bowl"
                    src={bowlImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4>Choose your payment method</h4>

            <div>
              <div className={styles.paymentMethod}>
                <Paytm />
                <p>Paytm Pay</p>
                <input type="radio" />
              </div>
            </div>


            <div>
              <div className={styles.paymentMethod}>
                <GooglePay />
                <p>Google Pay</p>
                <input type="radio" />
              </div>
            </div>

            <div>
              <div className={styles.paymentMethod}>
                <AmazonPay />
                <p>Amazon Pay</p>
                <input type="radio" />
              </div>
            </div>

            <div>
              <div className={styles.paymentMethod}>
                <div> </div>
                <p>Cash on delivery</p>
                <input type="radio" />
              </div>
            </div>


            <Link href="/thankyou">
              <button className={styles.payNow}>Pay Now</button>
            </Link>


          </div>


        </div>




      </div>
    </div>
  );
}

export default Payment;
