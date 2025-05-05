import styles from "../styles/Tweet.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHastagsToStore } from "../reducers/hashtags";

function Tweet(props) {
  const user = useSelector((state) => state.user.value);
  const [tweetCount, setTweetCount] = useState("");
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();
  let hastag = "";
  // const firstname = "Antoine";
  // const username = "@AntoineLeProf";
  // const userId = "6814e32a47310be069d530f3";
  let tweetId = null;
  let writer = null;

  function tweeted() {
    if (tweetCount > 0) {
      // Set the token via Redux or another method, obtained from the SignUp/In page
      fetch(`http://localhost:3000/tweet/addTweet/${user.token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          firstname: user.firstname,
          token: user.token,
          // firstname: firstname,
          message: tweet,
          // Set the _id via Redux or another method, obtained from the SignUp/In page.
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          props.refreshingData();
          setTweet("");
        });
    }
  }

  return (
    <div className={styles.TweetContainer}>
      <div className={styles.inputTweet}>
        <h2 className={styles.title}>Home</h2>
        <div className={styles.inputContainer}>
          <textarea
            className={styles.input}
            value={tweet}
            placeholder={"What's up?"}
            onChange={(e) => {
              setTweetCount(e.target.value.length);
              setTweet(e.target.value);
            }}
            maxLength={280}
          ></textarea>

          <div className={styles.btnContainer}>
            <div className={styles.counter}>{tweetCount}/280</div>
            <div className={styles.tweetBtn} onClick={() => tweeted()}>
              Tweet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
