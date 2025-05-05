import { useState } from 'react';
import styles from '../styles/SignIn.module.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignIn({ onClose }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTop} />;

    const handleSignin = () => {
        fetch('http://localhost:3001/users/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.result) {
              console.log('🔐 Connecté avec succès');
              onClose();
            } else {
              alert(data.error || 'Identifiants incorrects');
            }
          });
      };
    

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <div className={styles.logo}>{logoTwitter}</div>
        <h2>Connect to Hackatweet</h2>
        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e => setPasseword(e.target.value)}/>
        <button className={styles.signup} onClick={handleSignin}>Sign in</button>
      </div>
    </div>
  );
}
export default SignIn;