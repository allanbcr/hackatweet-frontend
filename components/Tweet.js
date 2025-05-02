import styles from '../styles/Tweet.module.css';

function Tweet() {
    return (
        <div className={styles.TweetContainer}>
            <div className={styles.inputTweet}>
                <h2 className={styles.title}>Home</h2>
                <div className={styles.inputContainer}>
                    <textarea 
                        className={styles.input} 
                        placeholder={"What's up?"} 
                    >
                    </textarea>
              
                    <div className={styles.btnContainer}>
                        <div className={styles.counter}>0/280</div>
                        <div className={styles.tweetBtn}>Tweet</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Tweet()