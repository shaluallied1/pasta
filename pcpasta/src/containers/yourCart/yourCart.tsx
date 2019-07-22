import React from 'react';

import bowlImage from 'assets/images/bowl.png';
import choco from 'assets/images/choco.png';

import { ReactComponent as GreenPin } from '../../assets/icons/pin.svg';
import sharedStyles from '../shared.scss';
import styles from './yourCart.scss';

import Button from '../../components/Button';
import { ButtonTypes } from '../../components/Button/Button';
import Link from "next/link";

const YourCart: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={styles.header}>
          Your cart
        </div>

        <section className={styles.cartWrapper}>

          <div>
            <Link href="/">
              <Button
                className={styles.addBtn}
                type={ButtonTypes.primary}
              >
                Add pasta
              </Button>
            </Link>

            {/* Card 1 */}
            <div className={styles.cartCard}>
              <div className={styles.cartCardWrap}>
                <div className={styles.cart}>
                  <h4>Alfredo Spagetti</h4>
                  <p>
                    Broccoli, Bell pepper, Mushroom
                    Chicken sausage, Black olives,
                    Parsley, Farm fresh salad.
                  </p>

                  <div className={styles.cartCardMoney}>
                    <span>250</span>
                    <Link href="/my-order">
                      <button className={styles.cartCardFullBtn}>Full</button>
                    </Link>
                  </div>
                </div>

                <div className={styles.cartCardImg}>
                  <img
                    alt="bowl"
                    src={bowlImage}
                  />
                </div>
              </div>

              <br />

              <div className={styles.cartCardEdit}>
                <div className={styles.incrementBody}>
                  <button className={styles.incrementBtn}>-</button>
                  <span>1</span>
                  <button className={styles.incrementBtn}>+</button>
                </div>

                <div>
                  <Link href="/edit-pasta">
                    <button className={styles.editBtn}>Edit pasta</button>
                  </Link>
                </div>
              </div>
            </div>


            <br />
            {/* Card 2 */}
            <div className={styles.cartCard}>
              <div className={styles.cartCardWrap}>
                <div className={styles.cart}>
                  <h4>Alfredo Spagetti</h4>
                  <p>
                    Broccoli, Bell pepper, Mushroom
                    Chicken sausage, Black olives,
                    Parsley, Farm fresh salad.
                  </p>

                  <div className={styles.cartCardMoney}>
                    <span>250</span>
                    <button className={styles.cartCardFullBtn}>Full</button>
                  </div>
                </div>

                <div className={styles.cartCardImg}>
                  <img
                    alt="bowl"
                    src={bowlImage}
                  />
                </div>
              </div>

              <br />

              <div className={styles.cartCardEdit}>
                <div className={styles.incrementBody}>
                  <button className={styles.incrementBtn}>-</button>
                  <span>1</span>
                  <button className={styles.incrementBtn}>+</button>
                </div>

                <div>
                  <Link href="/edit-pasta">
                    <button className={styles.editBtn}>Edit pasta</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* End of card */}
          </div>

          <div>
            <h4>Add drinks & desserts</h4>

            <div className={styles.drink}>
              <div className={styles.drinkRow}>
                <div className={styles.drinkCard}>
                  <img
                    alt="choco"
                    src={choco}
                  />
                  <p>Dark chocolate brownie</p>
                  <div className={styles.drinkCardFooter}>
                    <GreenPin />
                    <span>250</span>
                  </div>
                </div>

                <div className={styles.drinkCard}>
                  <img
                    alt="choco"
                    src={choco}
                  />
                  <p>Dark chocolate brownie</p>
                  <div className={styles.drinkCardFooter}>
                    <GreenPin />
                    <span>250</span>
                  </div>
                </div>

                <div className={styles.drinkCard}>
                  <img
                    alt="choco"
                    src={choco}
                  />
                  <p>Dark chocolate brownie</p>
                  <div className={styles.drinkCardFooter}>
                    <GreenPin />
                    <span>250</span>
                  </div>
                </div>
              </div>

              <div className={styles.deliveryBox}>
                <h4>ENTER DELIVERY ADDRESS</h4>
                <p>1912, Cusp Studios, Greenwood City, Sector 45 Gurgaon</p>
              </div>

              <br />
              <div className={styles.coupon}>
                <div className={styles.couponHeader}>Apply coupons</div>
                <div>
                  <ul>
                    <li>Item total</li>
                    <li>Packing & shipping charges</li>
                    <li>Taxes & charges</li>
                    <li>Discount</li>
                    <li>Grand Total</li>
                  </ul>

                  <ul>
                    <li>200.00</li>
                    <li>20.50</li>
                    <li>20.50</li>
                    <li>20.50</li>
                    <li>222.50</li>
                  </ul>
                </div>
                <Link href="/payment"><button className={styles.couponBtn}>Process</button></Link>
              </div>



            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default YourCart;
