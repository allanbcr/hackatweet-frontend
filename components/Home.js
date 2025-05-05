import styles from '../styles/Home.module.css';
import Link  from 'next/link';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Hackatweet</a>
        </h1>
        <Link href='/tweetHome'>TweetHome</Link>
        <Link href='/login'>Login</Link>
      </main>
    </div>
  );
}

export default Home;

