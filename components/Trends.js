import styles from '../styles/Trends.module.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'

function Trends(props) {
    const hastags = useSelector(state => state.hastags.value);
    const router = useRouter()

    const handleClick = () => {
        router.push({ pathname: '/hashtag', query: { tag: props.name } })
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Trends</h2>
            <div className={styles.trendsContainer} onClick={() => handleClick()}>
                <div className={styles.trends}>
                    <div className={styles.trendsTitle}>{props.name}</div>
                    <div className={styles.trendsNumber}>{hastags.length} tweet</div>
                </div>
            </div>
        </div>
    )
}

export default Trends;