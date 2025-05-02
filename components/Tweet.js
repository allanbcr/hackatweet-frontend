import styles from '../styles/Tweet.module.css';
import { useState } from 'react';

function Tweet() {
    const [tweet, setTweet]=useState("");

    return (
        <div className={styles.TweetContainer}>
            <div className={styles.inputTweet}>
                <h2 className={styles.title}>Home</h2>
                <div className={styles.inputContainer}>
                    <textarea 
                        className={styles.input} 
                        placeholder={"What's up?"} 
                        onChange={(e) => setTweet(e.target.value.length)}
                        maxLength={280}
                    >
                    </textarea>
              
                    <div className={styles.btnContainer}>
                        <div className={styles.counter}>{tweet}/280</div>
                        <div className={styles.tweetBtn}>Tweet</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Tweet;