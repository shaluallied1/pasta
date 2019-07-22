import React from 'react';
import sharedStyles from "../shared.scss";
import styles from './address.scss';
import Button from "../../components/Button";
import {ButtonTypes} from "../../components/Button/Button";

const AddAddress: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={sharedStyles.header}>
          Add Address
        </div>

        <div className={styles.wrapper}>
          <div className={styles.textInputGroup}>
            <label>Flat no./ Building no.</label>
            <input type="text" />
          </div>

          <div className={styles.textInputGroup}>
            <label>Street</label>
            <input type="text" />
          </div>

          <div className={styles.textInputGroup}>
            <label>Locality</label>
            <input type="text" />
          </div>

          <div className={styles.textInputGroup}>
            <label>City</label>
            <input type="text" />
          </div>

          <Button type={ButtonTypes.primary}>Add Address</Button>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
