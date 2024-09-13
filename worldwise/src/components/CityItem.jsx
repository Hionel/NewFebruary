/* eslint-disable react/prop-types */
import styles from './CityItem.module.css';
export default function CityItem({city}){
    const objDate = new Date(city.date);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(objDate);

    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{city.emoji}</span>
            <h3 className={styles.name}>{city.cityName}</h3>
            <time className={styles.date}>{formattedDate}</time>
        </li>
    )
}