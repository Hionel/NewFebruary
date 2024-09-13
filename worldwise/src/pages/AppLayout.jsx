import styles from './AppLayout.module.css';
import SideBar from './SideBar';
import Map from './Map';

export default function AppLayout(){
    return (
        <div className={styles.app}>
            <SideBar/>
            <Map/>
        </div>
    )
}