import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

function LastTweets(props) {
    const [likesCounter, setLikesCounter] = useState(0)
    const [heartColor, setHeartColor] = useState({color: ''})
    const heart = <FontAwesomeIcon icon={faHeart} className={styles.heart} style={heartColor} />
    const deleteBtn = <FontAwesomeIcon icon={faTrash} className={styles.deleteBtn} />
    
    // Add the color and the number of like
    function tweetLiked() {
        if (likesCounter < 1) {
            setLikesCounter(likesCounter + 1)
            setHeartColor({color: 'rgba(226, 38, 77, 1)'})
        } else if (likesCounter === 1){
            setLikesCounter(likesCounter - 1)
            setHeartColor({color: ''})
        }
    }

    // Delete the tweet
    function deleteTweet() {
        const tweetToDelete = async () => {
            const response= await fetch("http://localhost:3000/tweet/6814e27677497ff6b14a158e", {
                method: 'DELETE',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({})
            })
            const data= await response.json();
            console.log(data)
        }
        tweetToDelete()
    };

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
                <div className={styles.message}>{props.message}</div>
                <div className={styles.btnInfo}>
                    <div className={styles.likes} onClick={() => tweetLiked()}>{heart} {likesCounter}</div>
                    <div className={styles.delete} onClick={() => deleteTweet()}>{deleteBtn}</div>
                </div>
            </div>
        </div>
    )
};

export default LastTweets;