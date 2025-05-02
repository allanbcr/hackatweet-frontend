import styles from '../styles/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';

function Login() {

const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTop} />

   return(
<div className={styles.container}>
<div className={styles.left}>
  <img src="/background twitter.png" className={styles.background} />
</div>
<div className={styles.right}>
   {logoTwitter}
  <h1>See what's happening</h1>
  <h2>Join Hackatweet today.</h2>
  <button className={styles.signupBtn}>Sign up</button>
  <p>Already have an account?</p>
  <button className={styles.signinBtn}>Sign in</button>
</div>
</div>
);
}
export default Login;