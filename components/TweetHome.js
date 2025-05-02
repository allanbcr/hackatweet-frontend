import styles from '../styles/TweetHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tweet from './Tweet';

function TweetHome() {
    const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTwitter} />
    const firstname = "Alex";
    const username = "@AlexLeBg";

    return (
        <div className={styles.mainDiv}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.logoLeftContainer}>
                        {logoTwitter}
                    </div>
                    <div className={styles.infoLeftContainer}>
                        <div className={styles.infoLeftContainerGroupingInfo}>
                            <div className={styles.infoLeftContainerLogoUser}></div>
                            <div className={styles.infoLeftContainerId}>
                                <div className={styles.infoLeftContainerFirstname}>{firstname}</div>
                                <div className={styles.infoLeftContainerUsername}>{username}</div>
                            </div>
                        </div>
                        <div className={styles.infoLeftContainerBtnLogout}>Logout</div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    {/* Componenent Tweet and Last Tweet */}
                    <div className={styles.twitterContent}>
                        <div className={styles.tweetToWrite}>
                            {Tweet}
                        </div>
                        <div className={styles.lastTweet}></div>
                    </div>
                </div>
                {/* Component Trends */}
                <div className={styles.trends}>teRRRRRRRRRRRRRRRRst</div>
            </div>
        </div>
    );
}

export default TweetHome;
