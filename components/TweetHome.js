import styles from '../styles/TweetHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tweet from './Tweet';
import Trends from './Trends';
import LastTweets from './LastTweets';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function TweetHome() {
    const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTwitter} />
    const firstname = "Antoine";
    const username = "@AntoineLeProf";
    const trends = <Trends />
    const [tweets, setTweets] = useState([])
    const hastagList = useSelector(state => state.hastags.value)

    const fetchTweet = async () => {
        const response = await fetch("http://localhost:3000/tweet")
        const data = await response.json()
        setTweets((data.allTweet).reverse());  
    }

    // Taking the data at page's initialization
    useEffect(() => {
        fetchTweet()
    }, [])

    // Refresh when tweeted with Props
    const refreshingData = () => {
        fetchTweet()
    };

    // Refresh whe tweet deleted
    const refreshAfterDelete = () => {
        fetchTweet()
    }

    const lastTweets = tweets.map((element, index) => {
        console.log(element);
        
        return <LastTweets key={index} refreshAfterDelete={refreshAfterDelete} firstname={element.firstname} username={element.username} message={element.message} />
    });

    const tweet = <Tweet refreshingData={refreshingData} />;

    // To do --> Checking the # 

    // const trends = hastagList.map((element, index) => {
    //     return <Trends key={index} hastag={element.hastag} />
    // })

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
                        <button className={styles.infoLeftContainerBtnLogout}>Logout</button>
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