import styles from './train.module.scss';

const Train = () => (
    <div>
        <div className={styles.trainPage}>
            <div className={styles.train}>
                <div className={styles.windows} />
                <div className={styles.lights} />
            </div>
            <div className={styles.rails}>
                <div className={styles.ties} />
                <div className={styles.ties} />
                <div className={styles.ties} />
            </div>
        </div>
    </div>

)

export default Train;