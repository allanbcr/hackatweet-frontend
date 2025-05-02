import styles from '../styles/Trends.module.css';


function Trends() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Trends</h2>
            <div className={styles.trendsContainer}>
                <div className={styles.trends}>
                    <div className={styles.trendsTitle}>#hackatweet</div>
                    <div className={styles.trendsNumber}>1 tweet</div>
                </div>
                <div className={styles.trends}>
                    <div className={styles.trendsTitle}>#first</div>
                    <div className={styles.trendsNumber}>1 tweet</div>
                </div>
                <div className={styles.trends}>
                    <div className={styles.trendsTitle}>#cenation</div>
                    <div className={styles.trendsNumber}>1 tweet</div>
                </div>
            </div>
        </div>
        
    )
}

export default Trends();