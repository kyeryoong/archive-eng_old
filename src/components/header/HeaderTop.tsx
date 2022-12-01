import { useNavigate, NavigateFunction } from 'react-router-dom';

import styles from './HeaderTop.module.css';



export default function HeaderTop() {
    const navigate: NavigateFunction = useNavigate();



    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo} onClick={() => { navigate("/") }}>
                    <img className={styles.headerIcon} src={process.env.PUBLIC_URL + "/logos/icon.png"} />

                    <div className={styles.headerText}>
                        archive-eng
                    </div>
                </div>
            </div>

            <div className={styles.blank} />
        </div>
    )
}