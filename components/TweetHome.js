import styles from '../styles/TweetHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tweet from './Tweet';
import Trends from './Trends';
import LastTweets from './LastTweets';

function TweetHome() {
    const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTwitter} />
    const firstname = "Alex";
    const username = "@AlexLeBg";
    const tweet = <Tweet />
    const lastTweets = <LastTweets />
    const trends = <Trends />

    return (
        <div className={styles.mainDiv}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.logoLeftContainer}>
                        {logoTwitter}
                    </div>
                    <div className={styles.infoLeftContainer}>
                        <div className={styles.infoLeftContainerGroupingInfo}>
                            <div className={styles.infoLeftContainerLogoUser}>
                                <img src='userStartingIcon.webp' className={styles.logoIconUser} />
                            </div>
                            <div className={styles.infoLeftContainerId}>
                                <div className={styles.infoLeftContainerFirstname}>{firstname}</div>
                                <div className={styles.infoLeftContainerUsername}>{username}</div>
                            </div>
                        </div>
                        <div className={styles.infoLeftContainerBtnLogout}>Logout</div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    {/* Componenent Tweet */}
                    <div className={styles.twitterContent}>
                        <div className={styles.tweetToWrite}>
                            {tweet}
                        </div>
                        {/* Componenent Last Tweet */}
                        <div className={styles.lastTweet}>
                            {lastTweets}
                        </div>
                    </div>
                </div>
                {/* Component Trends */}
                <div className={styles.trends}>
                    {trends}
                </div>
            </div>
        </div>
    );
}

export default TweetHome;
