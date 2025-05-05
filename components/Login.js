import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const logoTwitter = (
    <FontAwesomeIcon icon={faTwitter} className={styles.logoTop} />
  );

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/background twitter.png" className={styles.background} />
      </div>

      <div className={styles.right}>
        <div className={styles.rightTop}>{logoTwitter}</div>
        <div className={styles.rightBottom}>
          <h1>See what's happening</h1>
          <h2>Join Hackatweet today.</h2>
          <button
            className={styles.signupBtn}
            onClick={() => setShowSignUp(true)}
          >
            Sign up
          </button>
          <p>Already have an account?</p>
          <button
            className={styles.signinBtn}
            onClick={() => setShowSignIn(true)}
          >
            Sign in
          </button>
        </div>
      </div>
      {/* Modale affichée si showSignUp est true */}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
    </div>
  );
}
export default Login;
