import React from 'react';
import sharedStyles from "../shared.scss";
import cartStyles from "../yourCart/yourCart.scss";
import bowlImage from '../../assets/images/bowl.png';
import styles from './congrat.scss';

const Congratulations: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={styles.congratText}>
          Congratulations
        </div>

        <div className={cartStyles.cartWrapper}>
          <div>
            <div>You have made your pasta</div>

            <img
              alt="bowl"
              src={bowlImage}
            />

            <div>NAME YOUR PASTA</div>
            <div>
              <input className={styles.nameInput} type="text" />
            </div>
            <br />
            <div>
              <button className={styles.shareWithFriendBtn}>Share with friends</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
