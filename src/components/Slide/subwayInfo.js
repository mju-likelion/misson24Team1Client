import Info1 from '../../image/Info1.png';
import styles from './subwayInfo.module.scss';
// import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

const subwayInfo = () => (
<div>
  <div className={styles.slide}>
  <img src={Info1} className={styles.Info1}/>
  </div>
</div>)



export default subwayInfo;

// const fadeImages = [
//   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
// ];

// const subwayInfo = () => {
//     <div className="slide-container">
//       <Fade>
//         <div className="each-fade">
//           <img src={fadeImages[0]} />
//         </div>
//         <div className="each-fade">
//           <img src={fadeImages[1]} />
//         </div>
//         <div className="each-fade">
//           <img src={fadeImages[2]} />
//         </div>
//       </Fade>
//     </div>
  
// }

// export default subwayInfo;