import SemiCircleProgressBar from 'react-progressbar-semicircle';

import { ChangeButton } from '../../assets/svgs';
import Slide from '../../components/Slide/subwayInfo.js';
import Logo from '../../image/Logo.png';
import styles from './mainPage.module.scss';

const MainPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <img src={Logo} className={styles.Logo} />
      <div className={styles.title}>지금출발해</div>
    </div>
    <div className={styles.body}>
      <div className={styles.progressBar}>
        <SemiCircleProgressBar percentage={33} showPercentValue />
      </div>
      <div className={styles.inputForm}>
        <div>
          <input className={styles.inputStation} placeholder="출발역" />
        </div>
        <ChangeButton />
        <div>
          <input className={styles.inputStation} placeholder="도착역" />
        </div>
      </div>
      <div className={styles.type}>
        <input type="checkbox" id="scales1" check={true} />
        <label htmlFor="scales1">10분전</label>
        <input type="checkbox" id="scales2" check={true} />
        <label htmlFor="scales2">5분전</label>
        <input type="checkbox" id="scales3" check={true} />
        <label htmlFor="scales3">3분전</label>
      </div>
      <button className={styles.lookUpButton} type="button">
        조회하기
      </button>
      {/* <div className={styles.infoDiv}>정보</div> */}
      <Slide />
    </div>
  </div>
);

export default MainPage;