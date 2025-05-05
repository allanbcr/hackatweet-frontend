import { useState } from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/SignUp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SignUp({onClose}) {

    const [firstname, setFirstname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const logoTwitter = <FontAwesomeIcon icon={faTwitter} className={styles.logoTop} />;
  
    const handleSignup = () => {
        fetch('http://localhost:3001/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstname, username, password }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.result) {
              console.log('✅ Compte créé !');
              onClose();
            } else {
              alert(data.error || 'Erreur lors de l’inscription');
            }
          });
      };

    return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <div className={styles.logo}>{logoTwitter}</div>
        <h2>Create your Hackatweet account</h2>
        <input type="text" placeholder="Firstname" value={firstname} onChange={e => setFirstname(e.target.value)}/>
        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e => setPasseword(e.target.value)}/>
        <button className={styles.signup} onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
}

export default SignUp;