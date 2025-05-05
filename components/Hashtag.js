import styles from '../styles/TweetHome.module.css';
import hashtagstyle from '../styles/Hashtag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tweet from './Tweet';
import Trends from './Trends';
import LastTweets from './LastTweets';
import { useState, useEffect, useDebugValue } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Hashtag() {
    const router = useRouter();

    const hashtagClicked = router.query.tag

    const [searchInput, setSearchInput] = useState(hashtagClicked)

    const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTwitter} />

    const firstname = "Antoine";
    const username = "@AntoineLeProf";

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

    const lastTweets = tweets.map((element, index) => {
        return <LastTweets key={index} message={element.message} />
    });

    const tweet = <Tweet refreshingData={refreshingData} />;

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
                        <button className={styles.infoLeftContainerBtnLogout}>Logout</button>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.twitterContent}>
                        <div className={styles.tweetToWrite}>

                        </div>
                        {/* Component hashtag */}
                        <div className={hashtagstyle.Hashtag}>
                            <h2>Hashtag</h2>
                            <input className={hashtagstyle.hashtagInput} type='text' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
                         

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

export default Hashtag; 