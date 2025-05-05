import { useState } from 'react';
import styles from '../styles/SignIn.module.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRouter} from 'next/router'


function SignIn({ onClose }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTop} />;

    const router = useRouter()

    const handleSignin = () => {
        fetch('http://localhost:3000/users/signIn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username : username, password : password }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.result) {
              console.log('Connected with success'); //la connexion est réussie
              router.push('/tweetHome');
              onClose(); // ferme le modal
            } else {
              alert(data.error || 'Incorrect identifiant'); //si data.error n'existe pas
            }
          });
      };


  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <div className={styles.logo}>{logoTwitter}</div>
        <h2>Connect to Hackatweet</h2>
        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <button className={styles.signup} onClick={handleSignin}>Sign in</button>
      </div>
    </div>
  );
}
export default SignIn;