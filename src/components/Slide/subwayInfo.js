// import Info1 from '../../image/Info1.png';

import { useEffect, useState } from 'react';

import styles from './subwayInfo.module.scss';

// const subwayInfo = () => (
// <div>
//   <div className={styles.slide}>
//   <img src={Info1} className={styles.Info1}/>
//   </div>
// </div>)



const subwayInfo = [
  '지하철은 “첫번째칸"과 “마지막칸"이 가장 시원합니다',
  '실수로 반대방향 개찰구로 통과했다면, 5분 안에 반대편 개찰구에 교통카드를 태그하면 추가 요금이 발생하지 않습니다. (일회용 교통카드 제외)',
  '물건을 잃어버렸을 때, 내리자마자 깨달았다면 하차한 시간과 위치를 기억하고 역무실로 찾아가 신고하면 추적이 가능합니다.',
  '약냉방칸은 앞에서부터 4번째칸, 뒤에서부터 4번째칸에 위치합니다. (2호선과 9호선은 운영하지 않음)',
];

const getRandomSubwayInfo = (length) => subwayInfo[(Math.floor(Math.random() * length)).toString()];

const loadingPage = () => {
  const [randomInfo, setRandomInfo] = useState('');
  useEffect(() => {
    setRandomInfo(getRandomSubwayInfo(subwayInfo.length));
  }, []);

return <div className={styles.subwayInfo}>{randomInfo}</div>;

}

export default loadingPage;
