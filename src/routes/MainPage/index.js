import Sound from '../../components/sound/index';
import styles from './mainPage.module.scss';

const MainPage = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>지금출발해</h1>
    <Sound />
  </div>
);

export default MainPage;
