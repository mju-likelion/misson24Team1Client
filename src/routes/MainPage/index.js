import axios from 'axios';
import { useState } from 'react';
import SemiCircleProgressBar from 'react-progressbar-semicircle';

import { ChangeButton } from '../../assets/svgs';
import Slide from '../../components/Slide/subwayInfo.js';
import Logo from '../../image/Logo.png';
import styles from './mainPage.module.scss';

const MainPage = () => {
    const [isChange, setIsChange] = useState(true);
    const [upperTitle, setUpperTitle] = useState('');
    const [upperTime, setUpperTime] = useState('');
    const [lowerTitle, setLowerTitle] = useState('');
    const [lowerTime, setLowerTime] = useState('');
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');

    const startOnChange = (e) => {
        setStartPoint(e.target.value);
    }

    const endOnChange = (e) => {
        setEndPoint(e.target.value);
    }

    const onClick = () => {
        setIsChange(!isChange)
    }

    const sendRequest = async () => {
        if (isChange === true) {
            try {
                const req = await axios.post('http://52.79.165.184/subway', {
                    departure: startPoint
                });
                console.log('성공', req.data[0])
                setUpperTitle(req.data[1].subway_subwayename)
                setUpperTime(req.data[1].subway_lefttime)
                setLowerTitle(req.data[0].subway_subwayename)
                setLowerTime(req.data[0].subway_lefttime)
                return req.data;
            } catch (e) {
                console.log('실패', e)
            }
        } else if (isChange === false) {
            try {
                const req = await axios.post('http://52.79.165.184/subway', {
                    departure: endPoint
                });
                console.log('성공', req.data[0])
                setUpperTitle(req.data[1].subway_subwayename)
                setUpperTime(req.data[1].subway_lefttime)
                setLowerTitle(req.data[0].subway_subwayename)
                setLowerTime(req.data[0].subway_lefttime)
                return req.data;
            } catch (e) {
                console.log('실패', e)
            }
        }
    }

    return (
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
                        {isChange ? <input className={styles.inputStation} placeholder="출발역" onChange={startOnChange} value={startPoint} /> : <input className={styles.inputStation} placeholder="도착역" onChange={endOnChange} value={endPoint} />}
                    </div>
                    <ChangeButton onClick={onClick} />
                    <div>
                        {isChange ? <input className={styles.inputStation} placeholder="도착역" onChange={endOnChange} value={endPoint} /> : <input className={styles.inputStation} placeholder="출발역" onChange={startOnChange} value={startPoint} />}
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
                <button className={styles.lookUpButton} type="button" onClick={sendRequest}>
                    조회하기
                </button>
                <div className={styles.resultDiv}>
                    <div className={styles.upperDiv}>상행선
                        <div className={styles.upperTitle}>{upperTitle}</div>
                        <div className={styles.upperTime}>{upperTime}</div>
                    </div>
                    <div className={styles.lowerDiv}>하행선
                        <div className={styles.lowerTitle}>{lowerTitle}</div>
                        <div className={styles.lowerTime}>{lowerTime}</div></div>
                </div>
                <Slide />
            </div>
        </div>ß
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
      <div className={styles.infoDiv}>정보</div>
      <Slide />
    </div>
  </div>
);

export default MainPage;