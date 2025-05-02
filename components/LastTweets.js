import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';


function LastTweets() {

    const heart = <FontAwesomeIcon icon={faHeart} className={styles.heart} />
    const deleteBtn = <FontAwesomeIcon icon={faTrash} className={styles.deleteBtn} />
    return(
        <div className={styles.divContainer}>
            <div className={styles.LastTweetsContainer}>
                <div className={styles.title}>
                    <div className={styles.userLogo}>
                        <img src='userStartingIcon.webp' className={styles.logoIconUSer} />
                    </div>
                    <div className={styles.firstname}>Antoine</div>
                    <div className={styles.username}>@AntoineLeProf</div>
                    <div className={styles.timeTweet}>· 5 hours</div>
                </div>
                <div className={styles.message}>Welcome to <span className={styles.hastagColor}>#hackatweet</span> 😎</div>
                <div className={styles.btnInfo}>
                    <div className={styles.likes}>{heart} 0</div>
                    <div className={styles.delete}>{deleteBtn}</div>
                </div>
            </div>

            <div className={styles.LastTweetsContainer}>
                <div className={styles.title}>
                    <div className={styles.userLogo}>
                        <img src='userStartingIcon.webp' className={styles.logoIconUSer} />
                    </div>
                    <div className={styles.firstname}>Antoine</div>
                    <div className={styles.username}>@AntoineLeProf</div>
                    <div className={styles.timeTweet}>· 5 hours</div>
                </div>
                <div className={styles.message}>First! <span className={styles.hastagColor}>#hackatweet</span> <span className={styles.hastagColor}>#first</span></div>
                <div className={styles.btnInfo}>
                    <div className={styles.likes}>{heart} 1</div>
                    <div className={styles.delete}>{deleteBtn}</div>
                </div>
            </div>
        </div>
    )
};

export default LastTweets();