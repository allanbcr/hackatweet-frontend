import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHastagsToStore } from '../reducers/hashtags';

function Tweet(props) {
    const [tweetCount, setTweetCount]=useState("");
    const [tweet, setTweet]=useState("");
    const dispatch= useDispatch();
    let hastag = "";

    function tweeted() {
        if (tweetCount > 0) {
            if (tweet.includes('#')){
                let hastagCheck = tweet.split(' ')
                for (let i = 0; i < hastagCheck.length; i++){
                    if (hastagCheck[i].includes('#')){
                        hastag = hastagCheck[i]
                       dispatch(addHastagsToStore(hastag))
                    }
                }

                // Set the token via Redux or another method, obtained from the SignUp/In page
                fetch('http://localhost:3000/tweet/addTweet/6814e27677497ff6b14a158e', {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                    message: tweet,
                    // Set the _id via Redux or another method, obtained from the SignUp/In page.
                    writer: "6814e32a47310be069d530f3",
                    })
                })
                .then(response => response.json())
                .then (data => {
                    console.log(data)
                    props.refreshingData();
                });

            } else {
                // Set the token via Redux or another method, obtained from the SignUp/In page.
                fetch('http://localhost:3000/tweet/addTweet/6814e27677497ff6b14a158e', {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                    message: tweet,
                    // Set the _id via Redux or another method, obtained from the SignUp/In page.
                    writer: "6814e32a47310be069d530f3",
                    })
                })
                .then(response => response.json())
                .then (data => {
                    console.log(data)
                    props.refreshingData();
                });
            }
        }
    }

    return (
        <div className={styles.TweetContainer}>
            <div className={styles.inputTweet}>
                <h2 className={styles.title}>Home</h2>
                <div className={styles.inputContainer}>
                    <textarea 
                        className={styles.input} 
                        placeholder={"What's up?"} 
                        onChange={(e) => {
                            setTweetCount(e.target.value.length);
                            setTweet(e.target.value);
                        }}
                        maxLength={280}
                    >
                    </textarea>
              
                    <div className={styles.btnContainer}>
                        <div className={styles.counter}>{tweetCount}/280</div>
                        <div className={styles.tweetBtn} onClick={() => tweeted() }>Tweet</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Tweet;