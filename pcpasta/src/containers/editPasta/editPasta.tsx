import React from 'react';
import sharedStyles from '../shared.scss';
import styles from './editPasta.scss';
import cartStyles from '../yourCart/yourCart.scss';


const EditPasta: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={sharedStyles.header}>
          Edit Pasta
        </div>

        <div className={cartStyles.cartWrapper}>
          <div>
            <div className={styles.editPastaCard}>
              <div>
                BOWL
                <br />
                Big bowl
              </div>

              <div className={styles.changeBtn}>
                Change
              </div>
            </div>

            <div className={styles.editPastaCard}>
              <div>
                BOWL
                <br />
                Big bowl
              </div>

              <div className={styles.changeBtn}>
                Change
              </div>
            </div>

            <div className={styles.editPastaCard}>
              <div>
                BOWL
                <br />
                Big bowl
              </div>

              <div className={styles.changeBtn}>
                Change
              </div>
            </div>
          </div>

          <div>
            <div className={styles.editPastaCard}>
              <div>
                BOWL
                <br />
                Big bowl
              </div>

              <div className={styles.changeBtn}>
                Change
              </div>
            </div><div className={styles.editPastaCard}>
            <div>
              BOWL
              <br />
              Big bowl
            </div>

            <div className={styles.changeBtn}>
              Change
            </div>
          </div>
            <div className={styles.editPastaCard}>
              <div>
                BOWL
                <br />
                Big bowl
              </div>

              <div className={styles.changeBtn}>
                Change
              </div>
            </div>

          </div>
        </div>

        <div className={styles.center}>
          <button className={styles.yourCartBtn}>Your Cart</button>
        </div>





      </div>
    </div>
  );
};

export default EditPasta;
