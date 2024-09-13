import styles from './Sidebar.module.css';
import { Outlet } from 'react-router-dom';
import AppNav from '../components/AppNav';

export default function SideBar(){
    return (
        <div className={styles.sidebar}>
            <AppNav/>
            <Outlet/>
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}