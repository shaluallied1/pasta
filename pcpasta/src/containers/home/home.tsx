import React, { useState } from 'react';
import Head from 'next/head';
import sideImage from 'assets/images/side.png';
import bowlImage from 'assets/images/bowl.png';

import alfredo from 'assets/images/alfredo.png';
import aglioOlio from 'assets/images/aglio-olio.png';
import arrabiata from 'assets/images/arrabiata.png';
import pesto from 'assets/images/pesto.png';
import mushroom from 'assets/images/mushroom.png';

import penne from 'assets/images/penne.png';
import spag from 'assets/images/spaghetti.png';
import elbowMacaroni from 'assets/images/elbow-macaroni.png';
import quinoaPenne from 'assets/images/quinoa-penne.png';
import wholeWheatSpaghetti from 'assets/images/whole-wheat-spaghetti.png';

import brocconi from 'assets/images/broccoli.png';
import bellPepper from 'assets/images/bell-pepper.png';
import quinoa from 'assets/images/quinoa-penne2.png';
import mushroom2 from 'assets/images/mushroom2.png';
import wholeWheatSpaghetti2 from 'assets/images/whole-wheat-spaghetti2.png';

import blackOlives from 'assets/images/black-olives.png';
import sundriedTomato from 'assets/images/sundried-tomato.png';
import basil from 'assets/images/basil.png';
import parsley from 'assets/images/parsley.png';
import parmesanCheese from 'assets/images/parmesan-cheese.png';

import grilledChicken from 'assets/images/grilled-chicken.png';
import shrimp from 'assets/images/shrimp.png';
import bacon from 'assets/images/bacon.png';
import sausage from 'assets/images/sausage.png';
import meatBalls from 'assets/images/meatballs.png';

import farmFreshSalad from 'assets/images/farm-fresh-salad.png';
import frenchFries from 'assets/images/french-fries.png';
import garlicBread from 'assets/images/garlic-bread.png';

import Link from 'next/link';
import Router from 'next/router';
import styles from './pasta.scss';
import Button from '../../components/Button';
import { ButtonTypes } from '../../components/Button/Button';

const Home: React.SFC<{}> = () => {
  const [showItem, setShowItem] = useState(0);
  return (
    <>
      <Head>
        <title>Pasta</title>
      </Head>

      <main className={styles.background}>
        <div className={styles.wrapper}>
          <section className={styles.sideImage}>
            <img
              alt="Side background"
              src={sideImage}
            />
          </section>

          {
            showItem === 0 && (
              <section>
                <div className={styles.bowlOne}>
                  <img
                    alt="bowl"
                    src={bowlImage}
                  />
                </div>
                <div className={styles.bowlOne}>
                  <img
                    alt="bowl"
                    src={bowlImage}
                  />
                </div>
              </section>
            )
          }
          {
            showItem === 1 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne}>
                  <img
                    alt="sauce"
                    src={alfredo}
                  />

                </div>

                <div className={styles.sauceTwo}>
                  <img
                    alt="sauce"
                    src={aglioOlio}
                  />
                </div>

                <div className={styles.sauceThree}>
                  <img
                    alt="sauce"
                    src={arrabiata}
                  />
                </div>
                <div className={styles.sauceFour}>
                  <img
                    alt="sauce"
                    src={pesto}
                  />
                </div>
                <div className={styles.sauceFive}>
                  <img
                    alt="sauce"
                    src={mushroom}
                  />
                </div>


              </section>
            )
          }

          {
            showItem === 2 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne}>
                  <img
                    alt="sauce"
                    src={penne}
                  />
                </div>

                <div className={styles.sauceTwo}>
                  <img
                    alt="sauce"
                    src={spag}
                  />
                </div>

                <div className={styles.sauceThree}>
                  <img
                    alt="sauce"
                    src={elbowMacaroni}
                  />
                </div>
                <div className={styles.sauceFour}>
                  <img
                    alt="sauce"
                    src={quinoaPenne}
                  />
                </div>
                <div className={styles.sauceFive}>
                  <img
                    alt="sauce"
                    src={wholeWheatSpaghetti}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 3 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne}>
                  <img
                    alt="sauce"
                    src={brocconi}
                  />
                </div>

                <div className={styles.sauceTwo}>
                  <img
                    alt="sauce"
                    src={bellPepper}
                  />
                </div>

                <div className={styles.sauceThree}>
                  <img
                    alt="sauce"
                    src={mushroom2}
                  />
                </div>
                <div className={styles.sauceFour}>
                  <img
                    alt="sauce"
                    src={quinoa}
                  />
                </div>
                <div className={styles.sauceFive}>
                  <img
                    alt="sauce"
                    src={wholeWheatSpaghetti2}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 4 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne}>
                  <img
                    alt="sauce"
                    src={blackOlives}
                  />
                </div>

                <div className={styles.sauceTwo}>
                  <img
                    alt="sauce"
                    src={sundriedTomato}
                  />
                </div>

                <div className={styles.sauceThree}>
                  <img
                    alt="sauce"
                    src={basil}
                  />
                </div>
                <div className={styles.sauceFour}>
                  <img
                    alt="sauce"
                    src={parsley}
                  />
                </div>
                <div className={styles.sauceFive}>
                  <img
                    alt="sauce"
                    src={parmesanCheese}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 5 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne}>
                  <img
                    alt="sauce"
                    src={grilledChicken}
                  />
                </div>

                <div className={styles.sauceTwo}>
                  <img
                    alt="sauce"
                    src={shrimp}
                  />
                </div>

                <div className={styles.sauceThree}>
                  <img
                    alt="sauce"
                    src={bacon}
                  />
                </div>
                <div className={styles.sauceFour}>
                  <img
                    alt="sauce"
                    src={sausage}
                  />
                </div>
                <div className={styles.sauceFive}>
                  <img
                    alt="sauce"
                    src={meatBalls}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 6 && (
              <section className={styles.sideSection}>
                <h5>Select your sides</h5>
                <div className={styles.sidesCard}>
                  <div>
                    <img
                      alt="french fries"
                      src={frenchFries}
                    />
                  </div>
                  <h4>French fries</h4>
                </div>

                <div
                  className={styles.sidesCard}
                  style={{ background: '#FFF0CA' }}
                >
                  <div>
                    <img
                      alt="Farm fresh salad"
                      src={farmFreshSalad}
                    />
                  </div>
                  <h4>Farm Fresh Salad</h4>
                </div>

                <div className={styles.sidesCard}>
                  <div>
                    <img
                      alt="Garlic Bread"
                      src={garlicBread}
                    />
                  </div>
                  <h4>Garlic Bread</h4>
                </div>
              </section>
            )
          }

          <section className={styles.selectSection}>
            <h5>Select the bowl</h5>

            <div>
              <div className={styles.detailCard}>

                <ul>
                  <li>Bowl</li>
                  <li>Full bowl</li>
                </ul>
                <div className={styles.insideCard}>
                  <ul>
                    <li>Pasta</li>
                    <li>Spaghetti</li>
                    <br />
                    <li>Garnish</li>
                    <li>Extra cheese</li>
                    <li>Extra cheese</li>
                  </ul>

                  <ul>
                    <li>Sauces</li>
                    <li>white sauce</li>
                    <br />
                    <li>Veggies</li>
                    <li>Broccoli</li>
                    <li>Broccoli</li>
                  </ul>

                </div>

              </div>
            </div>

            <div className={styles.bottomButton}>
              <Link href="/your-cart">
                <Button type={ButtonTypes.outline}>Your Cart</Button>
              </Link>
              <Button
                className={styles.ml20}
                onClick={
                  showItem < 5 ? () => setShowItem(showItem + 1) : () => Router.push('/your-cart')
                }
                type={ButtonTypes.primary}
              >
                Next
              </Button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
