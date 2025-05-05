import { useState } from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/SignUp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

function SignUp({ onClose }) {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const logoTwitter = (
    <FontAwesomeIcon icon={faTwitter} className={styles.logoTop} />
  );

  const router = useRouter();

  const handleSignup = () => {
    fetch("http://localhost:3000/users/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          console.log("Created account !"); //la connexion est réussie
          router.push("/tweetHome");
          onClose(); // ferme le modal
        } else {
          alert(data.error || "Error"); //si data.error n'existe pas
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <div className={styles.logo}>{logoTwitter}</div>
        <h2>Create your Hackatweet account</h2>
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.signup} onClick={handleSignup}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
