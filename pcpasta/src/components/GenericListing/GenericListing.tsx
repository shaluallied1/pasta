import React from 'react';

import sideImage from 'assets/images/side.png';
import styles from './genericListing.scss';

const GenericListing: React.SFC<{}> = ({children}) => {
  return (
    <main className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.sideImage}>
          <img
            alt="Side background"
            src={sideImage}
          />
        </div>
        {children}
      </div>
    </main>
  );
}

export default GenericListing;
