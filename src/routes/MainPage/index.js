import { React } from 'react';

import { ChangeButton } from '../../assets/svgs';
import styles from './mainPage.module.scss';

const MainPage = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>지금출발해</h1>
    <div className={styles.body}>
      <div className={styles.progressBar}>프로그레스바 자리</div>
      <div className={styles.inputForm}>
        <div>
          <input placeholder="출발역" />
        </div>
        <ChangeButton />
        <div>
          <input placeholder="도착역" />
        </div>
      </div>
      <div className={styles.type}>
        <input type="checkbox" value="10분전" />
        <input type="checkbox" value="5분전" />
        <input type="checkbox" value="3분전" />
      </div>
    </div>
  </div>
);

export default MainPage;
